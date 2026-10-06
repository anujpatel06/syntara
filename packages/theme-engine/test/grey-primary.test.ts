/**
 * ADR-056: a grey primary (OKLCH chroma < 0.02) gets a near-white primary button with ink labels
 * in dark mode, instead of a deepened grey that read as disabled. Coloured brands must not change:
 * the snapshot below was written by the engine on main before this change (c8e1ca5).
 */
import { describe, expect, it } from 'vitest';
import { contrastRatio, hexToOklch } from '../src/color';
import { glowColorHex } from '../src/css-vars';
import { GREY_PRIMARY_C, isGreyPrimary } from '../src/roles';
import { generateTheme } from '../src/theme';
import type { BrandInput } from '../src/types';

const brand = (primary: string, accent?: string): BrandInput => ({
  name: 'Test',
  primary,
  ...(accent ? { accent } : {}),
  neutral: 'neutral',
  shape: 'soft',
  typePair: 'modern',
  density: 'comfortable',
});

describe('grey primary in dark mode (ADR-056)', () => {
  it('the threshold sits between #18181b and navy #0f172a', () => {
    expect(GREY_PRIMARY_C).toBe(0.02);
    expect(hexToOklch('#18181b').c).toBeLessThan(GREY_PRIMARY_C);
    expect(hexToOklch('#0f172a').c).toBeGreaterThanOrEqual(GREY_PRIMARY_C);
    expect(isGreyPrimary('#000000')).toBe(true);
    expect(isGreyPrimary('#0f172a')).toBe(false);
  });

  for (const primary of ['#18181B', '#000000', '#808080']) {
    it(`${primary}: near-white fill, ink label, states that move away from the disabled grey`, () => {
      const theme = generateTheme(brand(primary));
      const dark = theme.schemes.dark.roles;
      const bg = dark['action.primary.bg'];
      const fg = dark['action.primary.fg'];
      const disabled = dark['text.disabled'].hex;

      expect(bg.ref).toBe('neutral.12');
      expect(hexToOklch(bg.hex).l).toBeGreaterThan(0.9);
      expect(fg.hex).toBe(dark['surface.canvas'].hex); // ink = neutral 1
      expect(contrastRatio(fg.hex, bg.hex)).toBeGreaterThanOrEqual(4.5);

      // Hover and pressed stay light (far from the disabled grey) and keep the label at 4.5:1.
      for (const state of ['action.primary.hover', 'action.primary.pressed'] as const) {
        const hex = dark[state].hex;
        expect(hex).not.toBe(bg.hex);
        expect(contrastRatio(fg.hex, hex)).toBeGreaterThanOrEqual(4.5);
        expect(contrastRatio(hex, disabled)).toBeGreaterThan(3);
      }

      // Explained once, as a choice, with the canvas ratios.
      const adj = theme.adjustments.filter((a) => a.id.startsWith('dark:action.primary.bg'));
      expect(adj.map((a) => a.kind)).toEqual(['choice']);
      expect(adj[0]!.message).toContain('almost no colour');

      // Light mode is untouched: the brand colour, white label.
      expect(theme.schemes.light.roles['action.primary.bg'].hex).toBe(primary === '#808080' ? '#767676' : primary.toLowerCase());
      expect(theme.summary.failed).toBe(0);

      // Glows stay a mid grey in dark (neutral 8), not the near-white fill; light uses the fill.
      expect(glowColorHex(theme, 'dark')).toBe(theme.schemes.dark.ramps.neutral[7]);
      expect(glowColorHex(theme, 'light')).toBeUndefined();
    });
  }

  it('coloured brands glow in their fill', () => {
    expect(glowColorHex(generateTheme(brand('#0F172A')), 'dark')).toBeUndefined();
  });
});

describe('coloured brands are unchanged (ADR-056)', () => {
  const coloured: Record<string, BrandInput> = {
    navy: brand('#0F172A'),
    blue: brand('#3b82f6'),
    care: brand('#0E63FF', '#F27F00'),
    haat: brand('#B5179E', '#F48C06'),
    harbor: brand('#1D6B63', '#E07A3F'),
    qamar: brand('#F2A516', '#7A2E8E'),
    vela: brand('#3D45D6', '#12B5A6'),
  };
  for (const [name, input] of Object.entries(coloured)) {
    it(`${name}: roles and adjustments match the engine before the change`, () => {
      const theme = generateTheme(input);
      expect({
        light: theme.schemes.light.roles,
        dark: theme.schemes.dark.roles,
        adjustments: theme.adjustments,
      }).toMatchSnapshot();
    });
  }
});
