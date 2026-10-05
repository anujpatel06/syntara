// In-browser measurements for checks 1, 4 and 6 in docs/design/custom-fonts.md: the font loads, no glyph's ink leaves
// its line box, and the body x-height. The clipping method is scripts/check-script-clipping.mjs's (ADR-020, ADR-031):
// the same strings, sizes, weights, DPRs, sub-pixel offsets, the same ink rule and the same rounding of box edges, so
// a brand font is held to the bar that set every type pair's line heights.

import { inflateSync } from 'node:zlib';

const OFFSETS = [0, 0.25, 0.5, 0.75];
const INK = 191; // ≤ 191 on any channel = ≥ 25% coverage for black on white
const COLOR_INK = 64; // red/blue ink: the channel difference for ≥ 25% coverage

/** Test strings per script (copied from scripts/check-script-clipping.mjs; keep the two in step). */
export const STRINGS = {
  devanagari: [
    'क्षत्रिय',
    'श्रृंखला',
    'हिंदी में खरीदारी',
    'ऑर्डर की पुष्टि',
    '₹1,84,250 का भुगतान',
    'ट्ठ ड्ड द्ध द्व्य ह्न ह्य पृथ्वी ऊँ कूँ',
    'र्द्ध र्क्ष कीं किं फ़ॉर्म ज़्यादा ऑफ़र',
    'कैशबैक ₹120 · SKU HT-2291 Cotton',
  ],
  arabic: ['تأكيد الطلب', 'إِلَى الْمَتْجَرِ', 'استرجاع المبلغ ٢٬٥٠٠ د.إ', 'نقاط الولاء QM-58213'],
  latin: ['Order confirmed', 'Payment of ₹1,84,250 received', 'SKU HT-2291 · Quality jumpy glyph', 'Returns & payouts (Q4) — 5 Oct'],
};

/** The strings a brand in `script` is measured with: its own, then Latin (every brand shows Latin codes and digits). */
export function stringsFor(script) {
  // ₹ is checked only for Hindi brands (Anuj, 2026-10-06, ADR-051): elsewhere the amount is written in dollars, so a
  // font without ₹ is not failed for a currency the brand never shows.
  const latin = STRINGS.latin.map((text) => ({ script: 'latin', text: script === 'devanagari' ? text : text.replace('₹1,84,250', '$184,250') }));
  return script === 'latin' ? latin : [...STRINGS[script].map((text) => ({ script, text })), ...latin];
}

/* ------------------------------------------------------------------ PNG decode (8-bit RGB/RGBA, non-interlaced) */

export function decodePng(buf) {
  let pos = 8;
  let width = 0, height = 0, colorType = 0;
  const idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      if (data[8] !== 8 || data[12] !== 0) throw new Error('PNG: expected 8-bit, non-interlaced');
      colorType = data[9];
    } else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;
    pos += 12 + len;
  }
  const bpp = colorType === 6 ? 4 : colorType === 2 ? 3 : 0;
  if (!bpp) throw new Error(`PNG: unsupported colour type ${colorType}`);
  const raw = inflateSync(Buffer.concat(idat));
  const stride = width * bpp;
  const out = Buffer.alloc(width * height * 4);
  let prev = Buffer.alloc(stride);
  for (let y = 0; y < height; y++) {
    const f = raw[y * (stride + 1)];
    const line = Buffer.from(raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)));
    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? line[i - bpp] : 0;
      const b = prev[i];
      const c = i >= bpp ? prev[i - bpp] : 0;
      let v = line[i];
      if (f === 1) v += a;
      else if (f === 2) v += b;
      else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) {
        const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      line[i] = v & 255;
    }
    for (let x = 0; x < width; x++) {
      const o = (y * width + x) * 4;
      out[o] = line[x * bpp];
      out[o + 1] = line[x * bpp + 1];
      out[o + 2] = line[x * bpp + 2];
      out[o + 3] = 255;
    }
    prev = line;
  }
  return { width, height, data: out };
}

/** Topmost and bottommost ink rows (device px) inside a device-px rect; kind: 'black' | 'red' | 'blue'. */
function inkRows(img, x0, y0, x1, y1, kind = 'black') {
  const is = (o) => {
    const r = img.data[o], g = img.data[o + 1], b = img.data[o + 2];
    if (kind === 'black') return Math.min(r, g, b) <= INK;
    if (kind === 'red') return r - b >= COLOR_INK;
    return b - r >= COLOR_INK;
  };
  let top = -1, bottom = -1;
  const X0 = Math.max(0, Math.floor(x0)), X1 = Math.min(img.width, Math.ceil(x1));
  const Y0 = Math.max(0, Math.floor(y0)), Y1 = Math.min(img.height, Math.ceil(y1));
  for (let y = Y0; y < Y1; y++) {
    for (let x = X0; x < X1; x++) {
      if (is((y * img.width + x) * 4)) {
        if (top < 0) top = y;
        bottom = y + 1;
        break;
      }
    }
  }
  return top < 0 ? null : { top, bottom };
}

/* ------------------------------------------------------------------ the page */

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/**
 * A page with the brand's fonts as @font-face rules under private names ("Syntara Check body"), so a copy of the font
 * installed on this computer can't stand in for the files being checked. Files are inlined as data: URLs: no network
 * from the page and no cross-origin rules.
 * @param {{ role: 'body' | 'heading', faces: { weight: string, style?: string, data: Buffer, format: string }[] }[]} fonts
 */
export async function openFontPage(browser, fonts, script, dpr) {
  const page = await browser.newPage({ width: 1800, height: 900, dpr });
  const lang = { devanagari: 'hi', arabic: 'ar', latin: 'en' }[script];
  const faceCss = fonts
    .flatMap(({ role, faces }) =>
      faces.map(
        (f) =>
          `@font-face{font-family:"Syntara Check ${role}";font-weight:${f.weight};font-style:${f.style ?? 'normal'};` +
          `src:url(data:font/${f.format};base64,${f.data.toString('base64')}) format("${f.format === 'ttf' ? 'truetype' : f.format === 'otf' ? 'opentype' : f.format}")}`,
      ),
    )
    .join('');
  await page.setContent(
    `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>${faceCss}` +
      `html,body{margin:0;background:#fff;color:#000}#root{display:flex;flex-wrap:wrap;align-items:flex-start;gap:0 24px;padding:8px}` +
      `.cell{padding:1em 0}.box{white-space:nowrap;width:max-content}.wrap{color:#00f}.wrap::first-line{color:#f00}</style></head>` +
      `<body><div id="root"></div></body></html>`,
  );
  const sample = stringsFor(script).map((s) => s.text).join(' ');
  /** Faces that failed to load (check 1), e.g. "body 700". */
  const failed = await page.evaluate(
    async ({ roles, sample }) => {
      const miss = [];
      for (const role of roles) for (const w of [400, 500, 600, 700]) {
        try {
          await document.fonts.load(`${w} 16px "Syntara Check ${role}"`, sample);
        } catch {}
      }
      await document.fonts.ready;
      for (const f of document.fonts) if (f.status !== 'loaded') miss.push(`${f.family.replace(/"/g, '').replace('Syntara Check ', '')} ${f.weight}`);
      return miss;
    },
    { roles: fonts.map((f) => f.role), sample },
  );
  return { page, failed };
}

async function renderCells(page, html, dpr) {
  const rects = await page.evaluate((html) => {
    const root = document.getElementById('root');
    root.innerHTML = html;
    const r = (el) => {
      const b = el.getBoundingClientRect();
      return { x: b.left + scrollX, y: b.top + scrollY, w: b.width, h: b.height };
    };
    return [...root.querySelectorAll('.cell')].map((cell) => {
      const box = cell.firstElementChild;
      return { cell: r(cell), box: r(box), lineHeight: parseFloat(getComputedStyle(box).lineHeight) };
    });
  }, html);
  const img = decodePng(await page.screenshot());
  const scale = (o) => ({ x: o.x * dpr, y: o.y * dpr, w: o.w * dpr, h: o.h * dpr });
  return { img, rects: rects.map((r) => ({ cell: scale(r.cell), box: scale(r.box), lineHeight: r.lineHeight * dpr })) };
}

/**
 * Every clipping case for one line height: each size, each role, 400 and 700, every string on one line plus a
 * wrapped paragraph, four sub-pixel offsets. Returns cases with `margin` in CSS px (negative = clipped) and
 * `lhNeeded`, the line height at which that case's ink would just fit.
 */
export async function measureClipping(page, { roles, script, lineHeight, sizes, dpr }) {
  const strings = stringsFor(script);
  const paragraph = strings.filter((s) => s.script !== 'latin').map((s) => s.text).join(' ') || strings.map((s) => s.text).join(' ');
  const results = [];
  for (const size of sizes) for (const offset of OFFSETS) {
    const cases = [];
    let html = '';
    const cellStyle = `font-size:${size}px;padding-top:calc(1em + ${offset}px)`;
    for (const role of roles) for (const weight of [400, 700]) {
      const font = `font:${weight} ${size}px/${lineHeight} &quot;Syntara Check ${role}&quot;, monospace`;
      for (const s of strings) {
        cases.push({ layout: 'single', role, weight, offset, ...s });
        html += `<div class="cell" style="${cellStyle}"><div class="box" style="${font}">${esc(s.text)}</div></div>`;
      }
      cases.push({ layout: 'wrapped', role, weight, offset, script, text: '(paragraph)' });
      html += `<div class="cell" style="${cellStyle}"><div class="wrap" style="${font};width:9em">${esc(paragraph)}</div></div>`;
    }
    const { img, rects } = await renderCells(page, html, dpr);
    cases.forEach((c, i) => {
      const { cell, box, lineHeight: lhPx } = rects[i];
      const X0 = cell.x, X1 = cell.x + cell.w;
      const top = Math.round(box.y), bottom = Math.round(box.y + box.h);
      const r = { dpr, px: size, lineHeight, ...c };
      if (c.layout === 'single') {
        const ink = inkRows(img, X0, cell.y, X1, cell.y + cell.h, 'black');
        if (!ink) throw new Error(`No ink for ${size}px "${c.text}": the font drew nothing.`);
        r.marginTop = (ink.top - top) / dpr;
        r.marginBottom = (bottom - ink.bottom) / dpr;
      } else {
        const red = inkRows(img, X0, cell.y, X1, cell.y + cell.h, 'red');
        const blue = inkRows(img, X0, cell.y, X1, cell.y + cell.h, 'blue');
        if (!red) throw new Error(`No ink for ${size}px paragraph: the font drew nothing.`);
        const line1Bottom = Math.round(box.y + lhPx);
        r.marginTop = Math.min(red.top - top, blue ? blue.top - line1Bottom : Infinity) / dpr;
        r.marginBottom = Math.min(line1Bottom - red.bottom, blue ? bottom - blue.bottom : Infinity) / dpr;
      }
      r.margin = Math.min(r.marginTop, r.marginBottom);
      r.lhNeeded = lineHeight - (2 * r.margin) / size;
      results.push(r);
    });
  }
  return results;
}

/** Check 6: the inked height of "x" at 100px, weight 400, in em. Measure at DPR 2 for a 0.005 em resolution. */
export async function measureXHeight(page, dpr) {
  const { img, rects } = await renderCells(
    page,
    `<div class="cell" style="padding:40px"><div class="box" style="font:400 100px/2 &quot;Syntara Check body&quot;, monospace">x</div></div>`,
    dpr,
  );
  const { cell } = rects[0];
  const ink = inkRows(img, cell.x, cell.y, cell.x + cell.w, cell.y + cell.h, 'black');
  return ink ? (ink.bottom - ink.top) / dpr / 100 : 0;
}
