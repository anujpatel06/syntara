/**
 * Shared proof for the filled status icon used by Toast and Alert (surface recipe, CONVENTIONS.md).
 * The shape is feedback.<tone>.fg on surface.raised (and, in dark, on the face under the sheen's brightest pixel,
 * mixed in sRGB like the engine's sheen test); the knocked-out glyph is feedback.<tone>.bg on the shape.
 * WCAG 1.4.11 asks 3:1 for the shape; the glyph is held to text's 4.5:1.
 */
import { generateTheme, toCssVariables, type BrandInput } from '@syntara/theme-engine';
import { contrastRatio, hexToRgb8, rgb8ToHex } from '../../theme-engine/src/color';
import vela from '../../../tenants/vela/brand.json';
import harbor from '../../../tenants/harbor/brand.json';
import qamar from '../../../tenants/qamar/brand.json';
import care from '../../../tenants/care/brand.json';
import house from '../../../tenants/house/brand.json';

export const TENANTS = { vela, harbor, qamar, care, house } as unknown as Record<string, BrandInput>;
export const STATUS_TONES = ['info', 'success', 'warning', 'danger'] as const;

/** The engine's 1,000 fuzz brands. A non-literal import, because fuzz.ts uses Node APIs this package's tsconfig doesn't type. */
export async function loadFuzzInputs(): Promise<BrandInput[]> {
  const path = `${nodeProcess().cwd()}/../theme-engine/scripts/fuzz.ts`;
  const mod = (await import(/* @vite-ignore */ path)) as { fuzzInputs: () => BrandInput[] };
  return mod.fuzzInputs();
}

/** Reads a CSS module from src/ui (Vitest runs from packages/react; fs via getBuiltinModule, as in card.test.tsx). */
export function readUiCss(file: string): string {
  const node = nodeProcess();
  return node.getBuiltinModule('node:fs').readFileSync(`${node.cwd()}/src/ui/${file}`, 'utf8');
}

function nodeProcess() {
  return (
    globalThis as unknown as {
      process: { cwd(): string; getBuiltinModule(id: 'node:fs'): { readFileSync(file: string, encoding: 'utf8'): string } };
    }
  ).process;
}

export interface IconWorst {
  shape: number;
  glyph: number;
  /** Where the worst shape ratio happened, for the report. */
  at: string;
}

export function statusIconWorst(inputs: BrandInput[], names?: string[]): IconWorst {
  const sheen = toCssVariables(generateTheme(inputs[0]!), 'dark')['--syntara-sheen'] ?? '';
  const m = /(\d+)%, transparent\) 20%/.exec(sheen);
  if (!m) throw new Error(`--syntara-sheen peak not found in: ${sheen}`);
  const peak = Number(m[1]) / 100;
  const mix = (a: string, b: string) => {
    const A = hexToRgb8(a);
    const B = hexToRgb8(b);
    return rgb8ToHex([0, 1, 2].map((i) => A[i]! * (1 - peak) + B[i]! * peak) as [number, number, number]);
  };
  const worst: IconWorst = { shape: Infinity, glyph: Infinity, at: '' };
  inputs.forEach((input, i) => {
    const theme = generateTheme(input);
    for (const scheme of ['light', 'dark'] as const) {
      const r = theme.schemes[scheme].roles;
      const face = r['surface.raised'].hex;
      const faces = scheme === 'dark' ? [face, mix(face, r['text.default'].hex)] : [face];
      for (const t of STATUS_TONES) {
        const fg = r[`feedback.${t}.fg`].hex;
        for (const f of faces) {
          const v = contrastRatio(fg, f);
          if (v < worst.shape) Object.assign(worst, { shape: v, at: `${names?.[i] ?? `fuzz#${i}`} ${scheme} ${t}` });
        }
        worst.glyph = Math.min(worst.glyph, contrastRatio(r[`feedback.${t}.bg`].hex, fg));
      }
    }
  });
  return worst;
}

/**
 * Style A (Anuj, 2026-10-04): inside a Card, Alert, StatTile, a nested Card and FileUpload's rows have no face, so
 * what they show sits on the card's face. Default and outline cards are surface.raised; showcase is surface.raised
 * in light and surface.sunken in dark; a ghost card shows the page (surface.canvas or surface.default). Feature cards
 * opt out (their glow is not a plain surface). So the outline is proven against all four plain surfaces.
 */
export const NESTED_FACES = ['surface.raised', 'surface.sunken', 'surface.canvas', 'surface.default'] as const;

export interface NestedWorst {
  /** feedback.<tone>.fg, the status shape, ≥ 3:1. */
  shape: number;
  /** text.subtle, the neutral shape, ≥ 3:1 (and as body text, ≥ 4.5:1). */
  subtle: number;
  /** text.default, titles and figures, ≥ 4.5:1. */
  text: number;
  at: { shape: string; subtle: string; text: string };
}

export function nestedOutlineWorst(inputs: BrandInput[], names?: string[]): NestedWorst {
  const worst: NestedWorst = { shape: Infinity, subtle: Infinity, text: Infinity, at: { shape: '', subtle: '', text: '' } };
  const track = (key: 'shape' | 'subtle' | 'text', v: number, at: string) => {
    if (v < worst[key]) {
      worst[key] = v;
      worst.at[key] = at;
    }
  };
  inputs.forEach((input, i) => {
    const theme = generateTheme(input);
    const who = names?.[i] ?? `fuzz#${i}`;
    for (const scheme of ['light', 'dark'] as const) {
      const r = theme.schemes[scheme].roles;
      for (const f of NESTED_FACES) {
        const face = r[f].hex;
        for (const t of STATUS_TONES) track('shape', contrastRatio(r[`feedback.${t}.fg`].hex, face), `${who} ${scheme} ${t} on ${f}`);
        track('subtle', contrastRatio(r['text.subtle'].hex, face), `${who} ${scheme} on ${f}`);
        track('text', contrastRatio(r['text.default'].hex, face), `${who} ${scheme} on ${f}`);
      }
    }
  });
  return worst;
}
