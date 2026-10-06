// Reads what a font file says about itself: the characters it draws (cmap), its weight (OS/2) and its weight axis
// (fvar). TrueType, OpenType, WOFF and WOFF2. Checks 2 and 3 in docs/design/custom-fonts.md read these instead of
// guessing from rendering, because a browser draws a missing Hindi or Arabic letter with the same system font whatever
// fallback is named, so a fallback can't be told apart from the font by looking.

import { brotliDecompressSync, inflateSync } from 'node:zlib';

/** WOFF2's table tags by index (spec §5.2). */
const WOFF2_TAGS = 'cmap head hhea hmtx maxp name OS/2 post cvt_ fpgm glyf loca prep CFF_ VORG EBDT EBLC gasp hdmx kern LTSH PCLT VDMX vhea vmtx BASE GDEF GPOS GSUB EBSC JSTF MATH CBDT CBLC COLR CPAL SVG_ sbix acnt avar bdat bloc bsln cvar fdsc feat fmtx fvar gvar hsty just lcar mort morx opbd prop trak Zapf Silf Glat Gloc Feat Sill'
  .split(' ')
  .map((t) => t.replace('_', ' '));

/** @returns {Map<string, Buffer>} the tables we need, decompressed */
function tables(buf, wanted = ['cmap', 'OS/2', 'fvar', 'name']) {
  const sig = buf.toString('latin1', 0, 4);
  const out = new Map();
  if (sig === 'wOFF') {
    const n = buf.readUInt16BE(12);
    for (let i = 0; i < n; i++) {
      const o = 44 + i * 20;
      const tag = buf.toString('latin1', o, o + 4);
      if (!wanted.includes(tag)) continue;
      const off = buf.readUInt32BE(o + 4), comp = buf.readUInt32BE(o + 8), orig = buf.readUInt32BE(o + 12);
      const data = buf.subarray(off, off + comp);
      out.set(tag, comp < orig ? inflateSync(data) : data);
    }
    return out;
  }
  if (sig === 'wOF2') {
    const n = buf.readUInt16BE(12);
    const compressedLength = buf.readUInt32BE(20);
    let p = 48;
    const base128 = () => {
      let v = 0;
      for (let i = 0; i < 5; i++) {
        const b = buf[p++];
        v = v * 128 + (b & 0x7f);
        if (!(b & 0x80)) return v;
      }
      throw new Error('Bad WOFF2 number.');
    };
    const dir = [];
    for (let i = 0; i < n; i++) {
      const flags = buf[p++];
      const idx = flags & 0x3f;
      const tag = idx === 63 ? buf.toString('latin1', p, (p += 4)) : WOFF2_TAGS[idx];
      const transform = (flags >> 6) & 3;
      const origLength = base128();
      // glyf and loca are transformed unless the version bits say 3; every other table only when they are non-zero.
      const transformed = tag === 'glyf' || tag === 'loca' ? transform !== 3 : transform !== 0;
      const length = transformed ? base128() : origLength;
      dir.push({ tag, length });
    }
    if (buf.toString('latin1', 4, 8) === 'ttcf') throw new Error('Font collections (.ttc) are not supported.');
    const data = brotliDecompressSync(buf.subarray(p, p + compressedLength));
    let off = 0;
    for (const t of dir) {
      if (wanted.includes(t.tag)) out.set(t.tag, data.subarray(off, off + t.length));
      off += t.length;
    }
    return out;
  }
  if (sig === 'ttcf') throw new Error('Font collections (.ttc) are not supported.');
  if (sig !== 'OTTO' && sig !== 'true' && buf.readUInt32BE(0) !== 0x00010000) throw new Error('Not a font file.');
  const n = buf.readUInt16BE(4);
  for (let i = 0; i < n; i++) {
    const o = 12 + i * 16;
    const tag = buf.toString('latin1', o, o + 4);
    if (wanted.includes(tag)) out.set(tag, buf.subarray(buf.readUInt32BE(o + 8), buf.readUInt32BE(o + 8) + buf.readUInt32BE(o + 12)));
  }
  return out;
}

/** Every code point the cmap maps to a real glyph (formats 4 and 12, the ones fonts ship for Unicode). */
function codepoints(cmap) {
  const set = new Set();
  if (!cmap) return set;
  const n = cmap.readUInt16BE(2);
  const subtables = [];
  for (let i = 0; i < n; i++) {
    const platform = cmap.readUInt16BE(4 + i * 8), encoding = cmap.readUInt16BE(6 + i * 8), off = cmap.readUInt32BE(8 + i * 8);
    if (platform === 0 || (platform === 3 && (encoding === 1 || encoding === 10))) subtables.push(off);
  }
  for (const off of subtables) {
    const format = cmap.readUInt16BE(off);
    if (format === 4) {
      const segs = cmap.readUInt16BE(off + 6) / 2;
      const ends = off + 14, starts = ends + segs * 2 + 2, deltas = starts + segs * 2, ranges = deltas + segs * 2;
      for (let s = 0; s < segs; s++) {
        const end = cmap.readUInt16BE(ends + s * 2), start = cmap.readUInt16BE(starts + s * 2);
        const delta = cmap.readInt16BE(deltas + s * 2), rangeOff = cmap.readUInt16BE(ranges + s * 2);
        for (let c = start; c <= end && c !== 0xffff; c++) {
          let g;
          if (rangeOff === 0) g = (c + delta) & 0xffff;
          else {
            const at = ranges + s * 2 + rangeOff + (c - start) * 2;
            g = at + 1 < cmap.length ? cmap.readUInt16BE(at) : 0;
            if (g) g = (g + delta) & 0xffff;
          }
          if (g) set.add(c);
        }
      }
    } else if (format === 12) {
      const groups = cmap.readUInt32BE(off + 12);
      for (let i = 0; i < groups; i++) {
        const o = off + 16 + i * 12;
        const start = cmap.readUInt32BE(o), end = cmap.readUInt32BE(o + 4), glyph = cmap.readUInt32BE(o + 8);
        for (let c = start; c <= end; c++) if (glyph + (c - start)) set.add(c);
      }
    }
  }
  return set;
}

function familyName(name) {
  if (!name) return undefined;
  const count = name.readUInt16BE(2), strings = name.readUInt16BE(4);
  let best;
  for (let i = 0; i < count; i++) {
    const o = 6 + i * 12;
    const platform = name.readUInt16BE(o), id = name.readUInt16BE(o + 6), len = name.readUInt16BE(o + 8), off = name.readUInt16BE(o + 10);
    if ((id !== 16 && id !== 1) || (best && best.id === 16 && id === 1)) continue;
    const raw = name.subarray(strings + off, strings + off + len);
    const text = platform === 1 ? raw.toString('latin1') : raw.swap16 ? Buffer.from(raw).swap16().toString('utf16le') : '';
    if (text) best = { id, text };
  }
  return best?.text;
}

/**
 * @param {Buffer} buf a .ttf, .otf, .woff or .woff2 file
 * @returns {{ family?: string, weight: number, wght?: { min: number, max: number }, codepoints: Set<number> }}
 */
export function readFontFile(buf) {
  if (buf.length < 12) throw new Error('Not a font file.');
  const t = tables(buf);
  if (!t.has('cmap')) throw new Error('The font has no character map.');
  const os2 = t.get('OS/2');
  const fvar = t.get('fvar');
  let wght;
  if (fvar) {
    const axesOff = fvar.readUInt16BE(4), count = fvar.readUInt16BE(8), size = fvar.readUInt16BE(10);
    for (let i = 0; i < count; i++) {
      const o = axesOff + i * size;
      if (fvar.toString('latin1', o, o + 4) === 'wght') wght = { min: fvar.readInt32BE(o + 4) / 65536, max: fvar.readInt32BE(o + 12) / 65536 };
    }
  }
  return { family: familyName(t.get('name')), weight: os2 ? os2.readUInt16BE(4) : 400, ...(wght ? { wght } : {}), codepoints: codepoints(t.get('cmap')) };
}
