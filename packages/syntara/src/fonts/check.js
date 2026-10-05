// The six checks in docs/design/custom-fonts.md (ADR-051), in order, cheapest first: Google's answer and the files
// themselves (checks 1–3) before any browser starts, then Chrome or Edge for loading, clipping and x-height (1, 4–6).
// Returns failures as data; report.js turns them into sentences. A pass returns the BrandFont the engine takes.

import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { FONT_LINE_HEIGHT_BOUNDS, FONT_MIN_X_HEIGHT, FOUNDATIONS } from '@syntara/theme-engine';
import { launchChrome } from './chrome.js';
import { readFontFile } from './font-file.js';
import { googleFont, REQUIRED_WEIGHTS } from './google.js';
import { measureClipping, measureXHeight, openFontPage, stringsFor } from './measure.js';

/** @typedef {{ google: string } | { family?: string, files: string[] }} FontRequest  files: paths or URLs */
/** @typedef {{ check: number, kind: string, role: string, family: string, [k: string]: unknown }} Failure */

const STEPS = /** @type {const} */ (['tight', 'snug', 'normal']);
const SHARED = { tight: 1.2, snug: 1.35, normal: 1.5 };
const MAX_TRIES = 8;
const round2 = (n) => Math.round(n * 100) / 100;
const ceil2 = (n) => Math.ceil(n * 100 - 1e-9) / 100;

async function bytes(src) {
  if (/^https?:\/\//.test(src)) {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  }
  return readFile(src);
}
const formatOf = (src, buf) => {
  const sig = buf.toString('latin1', 0, 4);
  if (sig === 'wOF2') return 'woff2';
  if (sig === 'wOFF') return 'woff';
  if (sig === 'OTTO') return 'otf';
  return extname(src.split('?')[0]).slice(1).toLowerCase() === 'otf' ? 'otf' : 'ttf';
};

/** Checks 1–2 and the facts check 3 needs, for one role. Never throws: a problem becomes a failure. */
async function resolveSource(role, request, failures) {
  if ('google' in request) {
    const info = await googleFont(request.google);
    if (!info.found) {
      failures.push({ check: 1, kind: 'not-on-google', role, family: request.google, didYouMean: info.didYouMean });
      return null;
    }
    const missing = REQUIRED_WEIGHTS.filter((w) => !info.weights.includes(w));
    if (missing.length) failures.push({ check: 2, kind: 'weights', role, family: info.family, has: info.weights, missing });
    const faces = [];
    for (const f of info.files) {
      const data = await bytes(f.url);
      faces.push({ weight: String(f.weight), data, format: formatOf(f.url, data), font: readFontFile(data) });
    }
    return { role, family: info.family, source: { google: info.family, category: info.category }, faces };
  }
  if (!request.files.length) {
    failures.push({ check: 1, kind: 'no-files', role, family: request.family ?? 'Your font' });
    return null;
  }
  const faces = [];
  for (const src of request.files) {
    let data;
    try {
      data = await bytes(src);
      const font = readFontFile(data);
      const weight = font.wght ? `${font.wght.min} ${font.wght.max}` : String(font.weight);
      faces.push({ src, weight, data, format: formatOf(src, data), font });
    } catch {
      failures.push({ check: 1, kind: 'unreadable-file', role, family: request.family ?? src, file: src });
    }
  }
  if (!faces.length) return null;
  const family = (request.family ?? faces[0].font.family ?? 'Brand font').trim();
  const covered = (w) => faces.some((f) => (f.font.wght ? f.font.wght.min <= w && w <= f.font.wght.max : f.font.weight === w));
  const has = [...new Set(faces.flatMap((f) => (f.font.wght ? REQUIRED_WEIGHTS.filter(covered) : [f.font.weight])))].sort((a, b) => a - b);
  const missing = REQUIRED_WEIGHTS.filter((w) => !covered(w));
  if (missing.length) failures.push({ check: 2, kind: 'weights', role, family, has, missing });
  const files = faces.map((f) => ({ url: f.src, weight: f.weight }));
  // Category is the brand's to say for its own files (no catalogue to ask); sans unless told.
  return { role, family, source: { family, files, category: request.category === 'serif' ? 'serif' : 'sans' }, faces };
}

/** Check 3: every character of the test text in every face's own character map. */
function coverage(resolved, script, failures) {
  const chars = [...new Set([...stringsFor(script).map((s) => s.text).join('')])].filter((c) => !/\s|‌|‍/.test(c));
  const missing = chars.filter((c) => resolved.faces.some((f) => !f.font.codepoints.has(c.codePointAt(0))));
  if (!missing.length) return;
  const isOwn = (c) => !/[\u0000-\u024f\u2000-\u20cf]/.test(c);
  failures.push({
    check: 3,
    kind: 'coverage',
    role: resolved.role,
    family: resolved.family,
    script,
    missing,
    total: chars.length,
    ownMissing: missing.filter(isOwn).length,
    ownTotal: chars.filter(isOwn).length,
    otherMissing: missing.filter((c) => !isOwn(c)),
  });
}

/**
 * @param {{ body: FontRequest, heading?: FontRequest, script?: 'latin' | 'arabic' | 'devanagari' }} request
 * @param {{ onProgress?: (line: string) => void, version?: string, today?: string }} [options]
 * @returns {Promise<{ pass: true, font: import('@syntara/theme-engine').BrandFont, cases: number } | { pass: false, failures: Failure[] }>}
 */
export async function checkFont(request, options = {}) {
  const say = options.onProgress ?? (() => {});
  const script = request.script ?? 'latin';
  /** @type {Failure[]} */
  const failures = [];
  const roles = [['body', request.body], ...(request.heading ? [['heading', request.heading]] : [])];
  const resolved = [];
  for (const [role, req] of roles) {
    say(`Looking up ${'google' in req ? `"${req.google}" on Google Fonts` : 'your font files'}…`);
    const r = await resolveSource(role, req, failures);
    if (r) resolved.push(r), coverage(r, script, failures);
  }
  if (failures.length) return { pass: false, failures };

  let browser;
  try {
    browser = await launchChrome();
  } catch (e) {
    return { pass: false, failures: [{ check: 0, kind: e.message === 'NO_CHROME' ? 'no-chrome' : 'chrome-failed', role: 'body', family: resolved[0].family, detail: e.message }] };
  }
  try {
    const fonts = resolved.map((r) => ({ role: r.role, faces: r.faces }));
    const pages = await Promise.all([1, 2].map((dpr) => openFontPage(browser, fonts, script, dpr).then((p) => ({ ...p, dpr }))));
    const failedLoads = [...new Set(pages.flatMap((p) => p.failed))];
    if (failedLoads.length) {
      return { pass: false, failures: failedLoads.map((f) => ({ check: 1, kind: 'did-not-load', role: f.split(' ')[0], family: resolved.find((r) => r.role === f.split(' ')[0])?.family ?? '', weight: f.split(' ')[1] })) };
    }

    // Check 6 first: it is one render.
    const xHeight = Math.round((await measureXHeight(pages[1].page, 2)) * 1000) / 1000;
    say(`x-height ${xHeight} em (needs ≥ ${FONT_MIN_X_HEIGHT}).`);
    if (xHeight < FONT_MIN_X_HEIGHT) failures.push({ check: 6, kind: 'x-height', role: 'body', family: resolved[0].family, xHeight });

    // Checks 4 and 5. Clipping is not monotonic in line height (ADR-031), so every value used is measured at exactly
    // that value. From the shared scale: if it clips, jump to the line height the worst case says it needs (capped at
    // the limit), then halve the gap back to the last value that clipped. The jump overshoots for Devanagari (Mukta's
    // estimate from 1.2 is 1.51; 1.44 is clean, as ADR-024 measured), so the halving is what finds the real value.
    const sizes = [...new Set(Object.values(FOUNDATIONS.fontSize))].sort((a, b) => a - b);
    const roleNames = resolved.map((r) => r.role);
    const lineHeight = { ...SHARED };
    const seen = new Map();
    let cases = 0;
    const clippedAt = async (value) => {
      if (seen.has(value)) return seen.get(value);
      say(`Measuring line height ${value}…`);
      const runs = await Promise.all(pages.map((p) => measureClipping(p.page, { roles: roleNames, script, lineHeight: value, sizes, dpr: p.dpr })));
      const results = runs.flat();
      cases += results.length;
      const clipped = results.filter((r) => r.margin < 0);
      seen.set(value, clipped);
      return clipped;
    };
    const estimate = (clipped, from, max) => Math.min(max, Math.max(ceil2(Math.max(...clipped.map((r) => r.lhNeeded))), round2(from + 0.01)));
    for (const step of STEPS) {
      const { max } = FONT_LINE_HEIGHT_BOUNDS[step];
      const floor = step === 'tight' ? SHARED.tight : Math.max(SHARED[step], lineHeight[STEPS[STEPS.indexOf(step) - 1]]);
      let clipped = await clippedAt(floor);
      if (!clipped.length) {
        lineHeight[step] = floor;
        continue;
      }
      let lo = floor;
      let hi = estimate(clipped, floor, max);
      let tries = 0;
      while ((clipped = await clippedAt(hi)).length && hi < max && ++tries < MAX_TRIES) [lo, hi] = [hi, estimate(clipped, hi, max)];
      if (clipped.length) {
        const worst = clipped.reduce((a, b) => (a.margin < b.margin ? a : b));
        failures.push({ check: 5, kind: 'line-height', role: worst.role, family: resolved.find((r) => r.role === worst.role).family, step, max: hi, clipped: clipped.length, worst });
        break;
      }
      while (round2(hi - lo) > 0.01 && ++tries < MAX_TRIES * 2) {
        const mid = Math.floor(((lo + hi) / 2) * 100) / 100;
        if (mid <= lo) break;
        if ((await clippedAt(mid)).length) lo = mid;
        else hi = mid;
      }
      lineHeight[step] = hi;
    }
    if (failures.length) return { pass: false, failures };
    const body = resolved.find((r) => r.role === 'body');
    const heading = resolved.find((r) => r.role === 'heading');
    return {
      pass: true,
      cases,
      font: {
        body: body.source,
        ...(heading ? { heading: heading.source } : {}),
        script,
        measured: { lineHeight, xHeight, by: `syntara ${options.version ?? ''}`.trim(), date: options.today ?? new Date().toLocaleDateString('sv-SE') },
      },
    };
  } finally {
    await browser.close();
  }
}
