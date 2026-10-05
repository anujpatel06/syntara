/**
 * A brand's own font (ADR-050): the engine takes the measurement `npx syntara init` made and turns it into the same
 * type tokens a curated pair gives, so components and exporters need nothing new. It never measures, and it refuses
 * line heights outside docs/design/custom-fonts.md's bounds, so a hand-edited brand file can't loosen them.
 */
import { describe, expect, it } from 'vitest';
import { generateTheme } from '../src/theme';
import { googleFontsHref, TYPE_PAIRS } from '../src/type-pairs';
import { fontFacesCSS, typePairForFont } from '../src/custom-font';
import { toCssVariables } from '../src/css-vars';
import { toDTCG } from '../src/export/dtcg';
import { toFigmaFiles } from '../src/export/figma';
import type { BrandFont, BrandInput } from '../src/types';

const measured = { lineHeight: { tight: 1.36, snug: 1.36, normal: 1.5 }, xHeight: 0.545, by: 'syntara 0.2.0', date: '2026-10-06' };
const manrope: BrandFont = { body: { google: 'Manrope', category: 'sans' }, script: 'latin', measured };
const brand: BrandInput = { name: 'Kestrel', primary: '#2f5bea', accent: '#0f9d8a', neutral: 'cool', shape: 'soft', typePair: 'modern', density: 'comfortable' };

describe('a brand font', () => {
  it('replaces heading and body, keeps the pair’s mono, and loads from Google with the mono', () => {
    const theme = generateTheme({ ...brand, font: manrope });
    expect(theme.typePair.body).toMatch(/^"Manrope", system-ui/);
    expect(theme.typePair.heading).toBe(theme.typePair.body);
    expect(theme.typePair.mono).toBe(TYPE_PAIRS.modern.mono);
    expect(theme.typePair.label).toBe('Custom — Manrope');
    expect(googleFontsHref(theme.typePair)).toBe(
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap',
    );
  });

  it('ships its measured line heights in the CSS variables', () => {
    const vars = toCssVariables(generateTheme({ ...brand, font: manrope }), 'light');
    expect(vars['--syntara-line-height-tight']).toBe('1.36');
    expect(vars['--syntara-line-height-snug']).toBe('1.36');
    expect(vars['--syntara-line-height-normal']).toBe('1.5');
  });

  it('changes nothing but type: colours are the same as without it', () => {
    const a = generateTheme(brand);
    const b = generateTheme({ ...brand, font: manrope });
    expect(b.schemes).toEqual(a.schemes);
    expect(b.checks).toEqual(a.checks);
  });

  it('a heading font and a serif fallback: each role gets its own stack', () => {
    const pair = typePairForFont(TYPE_PAIRS.modern, { ...manrope, heading: { google: 'Fraunces', category: 'serif' } });
    expect(pair.heading).toMatch(/^"Fraunces", Georgia/);
    expect(pair.body).toMatch(/^"Manrope", system-ui/);
    expect(pair.googleFamilies).toEqual(['Fraunces', 'Manrope', 'Geist Mono']);
  });

  it('Arabic and Hindi brands get their script’s fallbacks and tracking', () => {
    const ar = typePairForFont(TYPE_PAIRS['bilingual-round'], { ...manrope, script: 'arabic' });
    expect(ar.body).toContain('Tahoma');
    expect(ar.headingTracking).toBe('0');
    expect(ar.supportsArabic).toBe(true);
    const hi = typePairForFont(TYPE_PAIRS['bilingual-devanagari'], { ...manrope, script: 'devanagari' });
    expect(hi.body).toContain('Nirmala UI');
    expect(hi.script).toMatchObject({ name: 'devanagari', minFontSize: 12, capsTracking: '0' });
  });

  it('own files become @font-face rules and are not sent to Google', () => {
    const own: BrandFont = {
      body: { family: 'Acme Sans', category: 'sans', files: [{ url: './fonts/acme.woff2', weight: '400 700' }, { url: './fonts/acme-italic.ttf', weight: '400', style: 'italic' }] },
      script: 'latin',
      measured,
    };
    const theme = generateTheme({ ...brand, font: own });
    expect(theme.typePair.googleFamilies).toEqual(['Geist Mono']);
    const css = fontFacesCSS(theme.typePair);
    expect(css).toContain('font-family: "Acme Sans";\n  font-style: normal;\n  font-weight: 400 700;');
    expect(css).toContain('src: url("./fonts/acme.woff2") format("woff2");');
    expect(css).toContain('src: url("./fonts/acme-italic.ttf") format("truetype");');
  });

  it('every exporter accepts it', () => {
    const theme = generateTheme({ ...brand, font: manrope });
    expect(() => toDTCG(theme)).not.toThrow();
    expect(() => toFigmaFiles(theme)).not.toThrow();
  });
});

describe('a brand font is refused when', () => {
  it.each([
    ['tight above 1.8', { tight: 1.81, snug: 1.81, normal: 1.9 }],
    ['normal above 1.9', { tight: 1.2, snug: 1.35, normal: 1.95 }],
    ['tight below the shared 1.2', { tight: 1.1, snug: 1.35, normal: 1.5 }],
    ['a value is missing', { tight: 1.2, snug: 1.35 }],
  ])('%s', (_, lineHeight) => {
    const font = { ...manrope, measured: { ...measured, lineHeight } } as BrandFont;
    expect(() => generateTheme({ ...brand, font })).toThrow(/must be measured and between/);
  });

  it('its family name could break the CSS', () => {
    expect(() => generateTheme({ ...brand, font: { ...manrope, body: { google: 'Evil"; } body {', category: 'sans' } } })).toThrow(/Invalid font family/);
  });

  it('its script is not one Syntara measures', () => {
    expect(() => generateTheme({ ...brand, font: { ...manrope, script: 'greek' as 'latin' } })).toThrow(/Invalid font script/);
  });
});
