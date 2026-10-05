// A brand's own font (ADR-050): reading font files, asking Google, the checks that run before any browser, and the
// plain-English report. Fonts here are built in the test (a few tables, no outlines) and Google is a stubbed fetch,
// so these run offline. The browser measurement runs only with SYNTARA_FONT_E2E=1 (Chrome or Edge and the network).
import { brotliCompressSync, deflateSync } from 'node:zlib';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { readFontFile } from '../src/fonts/font-file.js';
import { googleFont } from '../src/fonts/google.js';
import { checkFont } from '../src/fonts/check.js';
import { failureSentence, fontReport, passedFonts } from '../src/fonts/report.js';
import { stringsFor } from '../src/fonts/measure.js';

/* ------------------------------------------------------------------ test fonts */

const u16 = (n: number) => Buffer.from([n >> 8, n & 255]);
const u32 = (n: number) => { const b = Buffer.alloc(4); b.writeUInt32BE(n >>> 0); return b; };
const fixed = (n: number) => u32(Math.round(n * 65536));

function cmap(ranges: [number, number][]) {
  const groups = Buffer.concat(ranges.map(([a, b], i) => Buffer.concat([u32(a), u32(b), u32(1 + i * 1000)])));
  const sub = Buffer.concat([u16(12), u16(0), u32(16 + groups.length), u32(0), u32(ranges.length), groups]);
  return Buffer.concat([u16(0), u16(1), u16(3), u16(10), u32(12), sub]);
}
function name(family: string) {
  const s = Buffer.from(family, 'utf16le').swap16();
  return Buffer.concat([u16(0), u16(1), u16(6 + 12), u16(3), u16(1), u16(0x409), u16(1), u16(s.length), u16(0), s]);
}
const os2 = (weight: number) => Buffer.concat([u16(4), u16(500), u16(weight)]);
const fvar = (min: number, max: number) =>
  Buffer.concat([u16(1), u16(0), u16(16), u16(2), u16(1), u16(20), u16(0), u16(0), Buffer.from('wght'), fixed(min), fixed(400), fixed(max), u16(0), u16(256)]);

function sfnt(tables: Record<string, Buffer>) {
  const tags = Object.keys(tables).sort();
  const head = Buffer.alloc(12 + 16 * tags.length);
  head.writeUInt32BE(0x00010000, 0);
  head.writeUInt16BE(tags.length, 4);
  let off = head.length;
  const parts: Buffer[] = [head];
  tags.forEach((t, i) => {
    const d = tables[t]!;
    head.write(t, 12 + i * 16, 'latin1');
    head.writeUInt32BE(off, 20 + i * 16);
    head.writeUInt32BE(d.length, 24 + i * 16);
    const pad = Buffer.alloc((4 - (d.length % 4)) % 4);
    parts.push(d, pad);
    off += d.length + pad.length;
  });
  return Buffer.concat(parts);
}
function woff(tables: Record<string, Buffer>) {
  const tags = Object.keys(tables);
  const head = Buffer.alloc(44 + 20 * tags.length);
  head.write('wOFF', 0, 'latin1');
  head.writeUInt16BE(tags.length, 12);
  let off = head.length;
  const parts: Buffer[] = [head];
  tags.forEach((t, i) => {
    const raw = tables[t]!;
    const packed = deflateSync(raw);
    const z = packed.length < raw.length ? packed : raw; // WOFF stores a table raw when compressing doesn't shrink it
    head.write(t, 44 + i * 20, 'latin1');
    head.writeUInt32BE(off, 48 + i * 20);
    head.writeUInt32BE(z.length, 52 + i * 20);
    head.writeUInt32BE(tables[t]!.length, 56 + i * 20);
    parts.push(z);
    off += z.length;
  });
  return Buffer.concat(parts);
}
function woff2(tables: Record<string, Buffer>) {
  const tags = Object.keys(tables);
  const base128 = (n: number) => { const out = [n & 0x7f]; while ((n = Math.floor(n / 128))) out.unshift((n & 0x7f) | 0x80); return Buffer.from(out); };
  const dir = Buffer.concat(tags.map((t) => Buffer.concat([Buffer.from([63]), Buffer.from(t, 'latin1'), base128(tables[t]!.length)])));
  const data = brotliCompressSync(Buffer.concat(tags.map((t) => tables[t]!)));
  const head = Buffer.alloc(48);
  head.write('wOF2', 0, 'latin1');
  head.writeUInt16BE(tags.length, 12);
  head.writeUInt32BE(data.length, 20);
  return Buffer.concat([head, dir, data]);
}

const LATIN: [number, number][] = [[0x20, 0x7e], [0xa0, 0xff], [0x2010, 0x2027]];
const font = (o: { family?: string; weight?: number; wght?: [number, number]; ranges?: [number, number][] } = {}) => ({
  cmap: cmap(o.ranges ?? LATIN),
  'OS/2': os2(o.weight ?? 400),
  name: name(o.family ?? 'Test Sans'),
  ...(o.wght ? { fvar: fvar(...o.wght) } : {}),
});

describe('reading a font file', () => {
  it.each([['TrueType', sfnt], ['WOFF', woff], ['WOFF2', woff2]] as const)('%s: family, weight, weight axis and characters', (_, wrap) => {
    const f = readFontFile(wrap(font({ family: 'Acme Sans', weight: 700, wght: [100, 900], ranges: [[0x41, 0x5a], [0x915, 0x939]] })));
    expect(f.family).toBe('Acme Sans');
    expect(f.weight).toBe(700);
    expect(f.wght).toEqual({ min: 100, max: 900 });
    expect(f.codepoints.has(0x41)).toBe(true);
    expect(f.codepoints.has(0x915)).toBe(true); // क
    expect(f.codepoints.has(0x61)).toBe(false);
    expect(f.codepoints.size).toBe(26 + 37);
  });
});

/* ------------------------------------------------------------------ Google, stubbed */

const face = (w: number) => `@font-face {\n  font-family: 'X';\n  font-style: normal;\n  font-weight: ${w};\n  src: url(https://fonts.gstatic.com/x-${w}.ttf) format('truetype');\n}`;
function stubGoogle(o: { families: Record<string, { weights: number[]; category?: string; ranges?: [number, number][] }> }) {
  vi.stubGlobal('fetch', async (input: string) => {
    const url = new URL(input);
    const ok = (body: string | Buffer) => new Response(body, { status: 200 });
    if (url.pathname === '/css2') {
      const [fam, axes] = url.searchParams.get('family')!.split(':');
      const known = o.families[fam!];
      const asked = axes ? axes.split('@')[1]!.split(';').map(Number) : [400];
      if (!known || asked.some((w) => !known.weights.includes(w)) && asked.length === 1) return new Response('', { status: 400 });
      return ok(known.weights.filter((w) => !axes || asked.includes(w)).map(face).join('\n'));
    }
    if (url.pathname === '/metadata/fonts') return ok(`)]}'\n${JSON.stringify({ familyMetadataList: Object.keys(o.families).map((family) => ({ family })) })}`);
    if (url.pathname.startsWith('/metadata/fonts/')) {
      const known = o.families[decodeURIComponent(url.pathname.split('/').pop()!).replace(/\+/g, ' ')];
      return known ? ok(`)]}'\n${JSON.stringify({ category: known.category ?? 'Sans Serif' })}`) : new Response('', { status: 404 });
    }
    if (url.hostname === 'fonts.gstatic.com') {
      const fam = Object.keys(o.families)[0]!;
      return ok(sfnt(font({ family: fam, ranges: o.families[fam]!.ranges })));
    }
    throw new Error(`Unexpected fetch ${input}`);
  });
}
afterEach(() => vi.unstubAllGlobals());

describe('asking Google Fonts', () => {
  it('a family with all four weights, and its category', async () => {
    stubGoogle({ families: { Fraunces: { weights: [100, 400, 500, 600, 700, 900], category: 'Serif' } } });
    const g = await googleFont('Fraunces');
    expect(g).toMatchObject({ found: true, family: 'Fraunces', weights: [400, 500, 600, 700], category: 'serif' });
  });

  it('a family missing weights: Google answers 400 for the four, so the plain request lists what it has', async () => {
    stubGoogle({ families: { Lobster: { weights: [400] } } });
    expect(await googleFont('Lobster')).toMatchObject({ found: true, weights: [400] });
  });

  it('a misspelling gets the right name back', async () => {
    stubGoogle({ families: { Manrope: { weights: [400, 500, 600, 700] } } });
    expect(await googleFont('manrope')).toEqual({ found: false, didYouMean: 'Manrope' });
  });
});

/* ------------------------------------------------------------------ the checks that need no browser */

describe('checks before the browser', () => {
  // A browser that can't start: any test that reaches it fails loudly instead of measuring.
  vi.stubEnv('SYNTARA_CHROME', '/nonexistent/chrome');

  it('one weight fails check 2 and never opens a browser', async () => {
    stubGoogle({ families: { Lobster: { weights: [400] } } });
    const r = await checkFont({ body: { google: 'Lobster' } });
    expect(r.pass).toBe(false);
    expect(!r.pass && r.failures).toEqual([expect.objectContaining({ check: 2, kind: 'weights', has: [400], missing: [500, 600, 700] })]);
  });

  it('a Latin font for a Hindi brand fails check 3', async () => {
    stubGoogle({ families: { Sora: { weights: [400, 500, 600, 700], ranges: LATIN } } });
    const r = await checkFont({ body: { google: 'Sora' }, script: 'devanagari' });
    const f = !r.pass && r.failures[0];
    expect(f).toMatchObject({ check: 3, kind: 'coverage', script: 'devanagari' });
    expect(failureSentence(f as never)).toBe(
      '**Sora** has no Hindi (Devanagari) letters, so your Hindi text would be drawn by a different font, with different shapes and spacing. It also has no ₹.',
    );
  });

  it('₹ is checked only for Hindi brands (Anuj, ADR-050)', () => {
    const chars = (s: 'latin' | 'arabic' | 'devanagari') => stringsFor(s).map((x) => x.text).join('');
    expect(chars('latin')).not.toContain('₹');
    expect(chars('arabic')).not.toContain('₹');
    expect(chars('devanagari')).toContain('₹');
  });

  it('own files: none given fails check 1', async () => {
    const r = await checkFont({ body: { files: [] } });
    expect(!r.pass && r.failures[0]).toMatchObject({ check: 1, kind: 'no-files' });
  });

  it('own files: an unreadable file fails check 1', async () => {
    vi.stubGlobal('fetch', async () => new Response(Buffer.from('not a font'), { status: 200 }));
    const r = await checkFont({ body: { files: ['https://example.test/broken.woff2'] } });
    expect(!r.pass && r.failures[0]).toMatchObject({ check: 1, kind: 'unreadable-file' });
  });

  it('own files: a variable file covering 400–700 passes checks 1–3 and goes on to the browser', async () => {
    vi.stubGlobal('fetch', async () => new Response(woff2(font({ family: 'Acme Sans', wght: [300, 800] })), { status: 200 }));
    const r = await checkFont({ body: { files: ['https://example.test/acme.woff2'] } });
    expect(!r.pass && r.failures[0]).toMatchObject({ check: 0, kind: 'chrome-failed', family: 'Acme Sans' });
  });

  it('own files: static Regular and Bold lack Medium and Semibold', async () => {
    let n = 0;
    vi.stubGlobal('fetch', async () => new Response(sfnt(font({ weight: [400, 700][n++] })), { status: 200 }));
    const r = await checkFont({ body: { family: 'Acme Sans', files: ['https://example.test/a-400.ttf', 'https://example.test/a-700.ttf'] } });
    expect(!r.pass && r.failures[0]).toMatchObject({ check: 2, family: 'Acme Sans', has: [400, 700], missing: [500, 600] });
  });
});

/* ------------------------------------------------------------------ the report */

describe('the report', () => {
  it('a failure says why, then lists Google fonts that passed for that script', () => {
    const text = fontReport({ pass: false, failures: [{ check: 2, kind: 'weights', role: 'body', family: 'Lobster', has: [400], missing: [500, 600, 700] }] }, { script: 'latin' });
    expect(text).toContain('**Lobster** comes in one weight only (Regular), and has no Medium, Semibold and Bold.');
    const passed = passedFonts().fonts.latin.map((p: { family: string }) => p.family);
    expect(passed.length).toBeGreaterThan(0);
    expect(text).toContain(`Google fonts that pass every check for English: ${passed.join(', ')}.`);
  });

  it('every suggested font has its measurement on record', () => {
    for (const list of Object.values(passedFonts().fonts) as { lineHeight: object; cases: number; date: string }[][]) {
      for (const p of list) expect(p).toMatchObject({ lineHeight: expect.any(Object), cases: expect.any(Number), date: expect.stringMatching(/^\d{4}-\d\d-\d\d$/) });
    }
  });

  it.each([
    [{ kind: 'not-on-google', family: 'manrope', didYouMean: 'Manrope' }, '**manrope** isn’t on Google Fonts under that spelling. Did you mean **Manrope**? Names are case-sensitive.'],
    [{ kind: 'x-height', family: 'Tiny', xHeight: 0.41 }, '**Tiny** has short lower-case letters (0.41 of its size; Syntara needs at least 0.45). At 12px, labels and captions would read smaller than 10px Inter.'],
    [{ kind: 'line-height', family: 'Tall', step: 'tight', max: 1.8, clipped: 12 }, '**Tall** cuts off accents and marks in headings and buttons even with lines spaced 1.8 times its size (12 measured cases), and Syntara’s limit is 1.8: past it, a line no longer fits inside a compact button.'],
    [{ kind: 'no-chrome', family: 'Any' }, 'Checking a font needs Chrome or Edge on this computer, and neither was found. Install one, or pick one of the ready-made type pairs.'],
  ])('%o', (f, sentence) => {
    expect(failureSentence({ check: 0, role: 'body', ...f } as never).replace(/'/g, '’')).toBe(sentence);
  });

  it('a heading font is named as one', () => {
    expect(failureSentence({ check: 1, kind: 'not-on-google', role: 'heading', family: 'Nope' } as never)).toMatch(/^\*\*Nope\*\* \(your heading font\) isn't/);
  });
});

/* ------------------------------------------------------------------ end to end: real Chrome, real Google */

describe.skipIf(!process.env.SYNTARA_FONT_E2E)('end to end (SYNTARA_FONT_E2E=1)', () => {
  it('Manrope passes, with heading line height raised from 1.2', async () => {
    vi.unstubAllEnvs();
    const r = await checkFont({ body: { google: 'Manrope' } });
    expect(r.pass).toBe(true);
    if (r.pass) {
      expect(r.font.measured.lineHeight.tight).toBeGreaterThan(1.2);
      expect(r.font.measured.xHeight).toBeGreaterThanOrEqual(0.45);
    }
  }, 300_000);
});
