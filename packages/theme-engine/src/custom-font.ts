/**
 * A brand's own font (ADR-051) → the same TypePair shape the nine curated pairs have, so every exporter and component
 * reads it unchanged. The engine never measures: it takes the line heights `npx syntara init` measured, and only
 * refuses values outside the bounds in docs/design/custom-fonts.md (a hand-edited brand file can't loosen them).
 */
import {
  ARABIC_FALLBACK,
  DEVANAGARI_FALLBACK,
  SANS_FALLBACK,
  SERIF_FALLBACK,
} from './type-pairs';
import type { BrandFont, FontSource, Foundations, TypePair } from './types';

/** Check 5: the shared scale is the floor; the loosest values Syntara already ships (the Arabic pairs) the ceiling. */
export const FONT_LINE_HEIGHT_BOUNDS: Record<keyof Foundations['lineHeight'], { min: number; max: number }> = {
  tight: { min: 1.2, max: 1.8 },
  snug: { min: 1.35, max: 1.8 },
  normal: { min: 1.5, max: 1.9 },
};
/** Check 6: the smallest body x-height Syntara ships (Mukta, ADR-024) rounded down to two places. */
export const FONT_MIN_X_HEIGHT = 0.45;

export const fontFamilyOf = (source: FontSource): string => ('google' in source ? source.google : source.family).trim();

function fallbackFor(script: BrandFont['script'], source: FontSource): string {
  if (script === 'arabic') return ARABIC_FALLBACK;
  if (script === 'devanagari') return DEVANAGARI_FALLBACK;
  return source.category === 'serif' ? SERIF_FALLBACK : SANS_FALLBACK;
}

/** Throws a plain sentence when a stored font is incomplete or its measurement is out of bounds. */
export function validateBrandFont(font: BrandFont): void {
  const sources = [font.body, font.heading].filter((s): s is FontSource => s !== undefined);
  for (const s of sources) {
    const family = 'google' in s ? s.google : s.family;
    if (typeof family !== 'string' || !family.trim() || /["\;{}]/.test(family)) {
      throw new Error(`Invalid font family ${JSON.stringify(family)}.`);
    }
    if ('files' in s && (!Array.isArray(s.files) || s.files.length === 0)) {
      throw new Error(`Font "${family}" has no files.`);
    }
  }
  if (!['latin', 'arabic', 'devanagari'].includes(font.script)) throw new Error(`Invalid font script ${JSON.stringify(font.script)}.`);
  const lh = font.measured?.lineHeight;
  for (const [k, { min, max }] of Object.entries(FONT_LINE_HEIGHT_BOUNDS) as [keyof Foundations['lineHeight'], { min: number; max: number }][]) {
    const v = lh?.[k];
    if (typeof v !== 'number' || v < min || v > max) {
      throw new Error(`Font line height "${k}" is ${JSON.stringify(v)}; it must be measured and between ${min} and ${max}. Run npx syntara init again.`);
    }
  }
}

/** The type pair a brand font produces: its heading and body, the base pair's mono, the measured line heights. */
export function typePairForFont(base: TypePair, font: BrandFont): TypePair {
  validateBrandFont(font);
  const body = font.body;
  const heading = font.heading ?? font.body;
  const stack = (s: FontSource) => `"${fontFamilyOf(s)}", ${fallbackFor(font.script, s)}`;
  const monoGoogle = base.googleFamilies.filter((f) => base.mono.startsWith(`"${f}"`));
  const sources = heading === body ? [body] : [heading, body];
  const fontFaces = sources.flatMap((s) =>
    'files' in s ? s.files.map((f) => ({ family: fontFamilyOf(s), url: f.url, weight: f.weight, style: f.style ?? 'normal' })) : [],
  );
  const names = sources.map(fontFamilyOf);
  return {
    id: base.id,
    label: `Custom — ${[...new Set(names)].join(' / ')}`,
    heading: stack(heading),
    body: stack(body),
    mono: base.mono,
    headingTracking: font.script === 'arabic' ? '0' : '-0.01em',
    supportsArabic: font.script === 'arabic',
    googleFamilies: [...new Set([...sources.filter((s) => 'google' in s).map(fontFamilyOf), ...monoGoogle])],
    ...(fontFaces.length ? { fontFaces } : {}),
    script: {
      name: font.script,
      lineHeight: { ...font.measured.lineHeight },
      ...(font.script === 'devanagari' ? { minFontSize: 12, capsTracking: '0' } : {}),
    },
  };
}

/** @font-face rules for a brand's own font files; empty for Google fonts (googleFontsHref loads those). */
export function fontFacesCSS(pair: TypePair): string {
  return (pair.fontFaces ?? [])
    .map((f) => {
      const format = /\.woff2(\?|$)/i.test(f.url) ? 'woff2' : /\.woff(\?|$)/i.test(f.url) ? 'woff' : /\.otf(\?|$)/i.test(f.url) ? 'opentype' : 'truetype';
      return `@font-face {\n  font-family: "${f.family}";\n  font-style: ${f.style};\n  font-weight: ${f.weight};\n  font-display: swap;\n  src: url("${f.url}") format("${format}");\n}`;
    })
    .join('\n');
}
