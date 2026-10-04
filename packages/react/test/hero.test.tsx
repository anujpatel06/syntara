import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { generateTheme, toCssVariables, type BrandInput } from '@syntara/theme-engine';
import {
  contrastRatio,
  hexToRgb8,
  linearRgbToOklab,
  linearToSrgb,
  oklabToLinearRgb,
  rgb8ToHex,
  srgbToLinear,
} from '../../theme-engine/src/color';
import vela from '../../../tenants/vela/brand.json';
import harbor from '../../../tenants/harbor/brand.json';
import qamar from '../../../tenants/qamar/brand.json';
import care from '../../../tenants/care/brand.json';
import house from '../../../tenants/house/brand.json';
import haat from '../../../tenants/haat/brand.json';
import { Hero } from '../src/ui/hero';
import { loadFuzzInputs, readUiCss } from './status-icon-contrast';

describe('Hero', () => {
  it('is a section named by its headline, with the slots in reading order', () => {
    render(
      <Hero
        eyebrow={<span>New</span>}
        title="Health cover that pays"
        titleSecondary="before you do"
        description="One app for every claim."
        actions={<button type="button">Get started</button>}
      />,
    );
    const heading = screen.getByRole('heading', { level: 1 });
    // A real space between the two lines, so it reads "pays before", not "paysbefore".
    expect(heading).toHaveTextContent(/^Health cover that pays before you do$/);
    expect(screen.getByRole('region', { name: 'Health cover that pays before you do' })).toBeInTheDocument();
    expect(screen.getByText('One app for every claim.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Get started' })).toBeInTheDocument();
  });

  it('takes a heading level for a hero inside a longer page', () => {
    render(<Hero headingLevel={2} title="Plans" />);
    expect(screen.getByRole('heading', { level: 2, name: 'Plans' })).toBeInTheDocument();
  });

  it('has a pause toggle with a fixed name (WCAG 2.2.2)', async () => {
    const user = userEvent.setup();
    const { container } = render(<Hero title="Plans" pauseLabel="Pause the lights" />);
    const toggle = screen.getByRole('button', { name: 'Pause the lights' });
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Pause the lights' })).toBe(toggle);
    expect(container.querySelector('section')).toHaveAttribute('data-paused');
  });

  it('pauses from the keyboard: Tab to the toggle, Space and Enter', async () => {
    const user = userEvent.setup();
    render(<Hero title="Plans" />);
    await user.tab();
    const toggle = screen.getByRole('button', { name: 'Pause animation' });
    expect(toggle).toHaveFocus();
    await user.keyboard(' ');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
    await user.keyboard('{Enter}');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  it('scopes itself dark with the inherited theme, unless told to follow the page', () => {
    const { rerender } = render(
      <div data-syntara-theme="vela" data-syntara-scheme="light" data-syntara-density="compact">
        <Hero title="Plans" />
      </div>,
    );
    const section = () => screen.getByRole('region', { name: 'Plans' });
    expect(section()).toHaveAttribute('data-syntara-theme', 'vela');
    expect(section()).toHaveAttribute('data-syntara-scheme', 'dark');
    expect(section()).toHaveAttribute('data-syntara-density', 'compact');

    rerender(
      <div data-syntara-theme="vela" data-syntara-scheme="light">
        <Hero title="Plans" scheme="inherit" />
      </div>,
    );
    expect(section()).not.toHaveAttribute('data-syntara-scheme');
    expect(section()).not.toHaveAttribute('data-syntara-theme');
  });

  it('follows the page when it switches brand afterwards', async () => {
    const { container } = render(
      <div data-syntara-theme="vela">
        <Hero title="Plans" />
      </div>,
    );
    const section = screen.getByRole('region', { name: 'Plans' });
    expect(section).toHaveAttribute('data-syntara-theme', 'vela');
    (container.firstElementChild as HTMLElement).setAttribute('data-syntara-theme', 'haat');
    await waitFor(() => expect(section).toHaveAttribute('data-syntara-theme', 'haat'));
  });

  it('renders dark on the server when given the theme', () => {
    render(<Hero title="Plans" theme="qamar" />);
    const section = screen.getByRole('region', { name: 'Plans' });
    expect(section).toHaveAttribute('data-syntara-theme', 'qamar');
    expect(section).toHaveAttribute('data-syntara-scheme', 'dark');
  });

  describe('variant="orbit"', () => {
    it('puts the actions at the centre of the rings, after the copy, and hides rings and stars', () => {
      const { container } = render(
        <Hero variant="orbit" title="Money that moves" actions={<button type="button">Open an account</button>} />,
      );
      const section = container.querySelector('section')!;
      expect(section).toHaveAttribute('data-variant', 'orbit');
      const button = screen.getByRole('button', { name: 'Open an account' });
      const heading = screen.getByRole('heading', { name: 'Money that moves' });
      // Reading order: the headline comes before the action.
      expect(heading.compareDocumentPosition(button) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      // The action shares a parent with the rings, which are decoration.
      const rings = button.parentElement!.previousElementSibling!;
      expect(rings).toHaveAttribute('aria-hidden', 'true');
      expect(rings.children).toHaveLength(7);
      // 48 stars from a fixed seed, hidden too; no aurora lights.
      const decoration = [...section.children].filter((el) => el.getAttribute('aria-hidden') === 'true');
      expect(decoration).toHaveLength(1);
      expect(decoration[0]!.children).toHaveLength(48);
    });

    it('draws the same star field on every render (server and browser agree)', () => {
      const stars = () => {
        const section = render(<Hero variant="orbit" title="A" />).container.querySelector('section')!;
        return [...section.children[0]!.children].map((s) => (s as HTMLElement).getAttribute('style'));
      };
      const first = stars();
      expect(first).toHaveLength(48);
      expect(stars()).toEqual(first);
    });

    it('lets the rings lean toward the pointer and settle when it leaves', () => {
      const { container } = render(<Hero variant="orbit" title="A" />);
      const section = container.querySelector('section')!;
      section.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 100, right: 200, bottom: 100, x: 0, y: 0, toJSON() {} });
      // jsdom has no PointerEvent, so fireEvent.pointerMove drops clientX; a MouseEvent of that type carries it.
      const move = new MouseEvent('pointermove', { bubbles: true, clientX: 150, clientY: 25 });
      Object.defineProperty(move, 'pointerType', { value: 'mouse' });
      section.dispatchEvent(move);
      expect(section.style.getPropertyValue('--_px')).toBe('0.500');
      expect(section.style.getPropertyValue('--_py')).toBe('-0.500');
      fireEvent.pointerLeave(section);
      expect(section.style.getPropertyValue('--_px')).toBe('0');
    });
  });

  describe('variant="gallery"', () => {
    const images = [{ src: '/a.webp' }, { src: '/b.webp' }, { src: '/c.webp' }];

    it('puts the wall between the headline and the description, hidden and out of the tab order', () => {
      const { container } = render(
        <Hero
          variant="gallery"
          images={images}
          title="Every idea"
          description="One canvas."
          actions={<button type="button">Start</button>}
        />,
      );
      const heading = screen.getByRole('heading', { name: 'Every idea' });
      const wall = container.querySelector('[inert]')!;
      const description = screen.getByText('One canvas.');
      expect(wall).toHaveAttribute('aria-hidden', 'true');
      expect(heading.compareDocumentPosition(wall) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      expect(wall.compareDocumentPosition(description) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      expect(description.compareDocumentPosition(screen.getByRole('button', { name: 'Start' })) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });

    it('fills 20 cards with the pictures in order, repeating, plus 2 brand tiles', () => {
      const { container } = render(<Hero variant="gallery" images={images} title="A" />);
      const cards = container.querySelectorAll('[data-kind]');
      expect(cards).toHaveLength(22);
      expect(container.querySelectorAll('[data-kind="brand"]')).toHaveLength(2);
      const srcs = [...container.querySelectorAll('img')].map((img) => img.getAttribute('src'));
      expect(srcs).toHaveLength(20);
      expect(srcs.slice(0, 4)).toEqual(['/a.webp', '/b.webp', '/c.webp', '/a.webp']);
      // Decoration: no alt text to announce.
      for (const img of container.querySelectorAll('img')) expect(img).toHaveAttribute('alt', '');
    });

    it('with no pictures, every card is a brand tile', () => {
      const { container } = render(<Hero variant="gallery" title="A" />);
      expect(container.querySelectorAll('img')).toHaveLength(0);
      expect(container.querySelectorAll('[data-kind="brand"]')).toHaveLength(22);
    });
  });

  it('hides the decoration from assistive tech', () => {
    const { container } = render(<Hero title="Plans" />);
    expect(container.querySelector('section > [aria-hidden="true"]')).toBeInTheDocument();
  });
});

/*
 * Aurora contrast in dark. Every number is read from hero.module.css, so changing one re-runs the proof.
 *   lights   all four stacked at full strength (A, B, C, then the pointer, in paint order), whatever the width or
 *            pointer position: the blur only ever lowers a light below its opacity, so this is the worst case.
 *            A = color-mix(in oklab, action.primary.bg 70%, --_wash), B = accent.bg 75% + --_wash,
 *            C = action.primary.bg + accent.bg evenly, pointer = action.primary.bg 60% + --_wash; --_wash is text.default.
 *   veil     surface.canvas at V%, as a box around the copy blurred by σ = space-16. A blurred box keeps, at a point,
 *            the product over both axes of Φ(a/σ) + Φ(b/σ) − 1 (a, b: distances to that axis's two edges). The
 *            weakest text point is a corner of the copy's content box, for the smallest copy (one title line, a
 *            phone's gutter); the veil there is V% × that product.
 *   paint    composited in 8-bit sRGB, as browsers blend. text.default and text.subtle (the headline's second line
 *            and the description) must reach 4.5:1 for the six tenants and the engine's 1,000 fuzz brands.
 */
describe('aurora contrast in dark', () => {
  const css = readUiCss('hero.module.css');
  // A top-level rule (at the start of a line), not one nested in an @container.
  const block = (selector: string) => {
    const at = css.indexOf(`\n${selector} {`);
    if (at < 0) throw new Error(`hero.module.css: ${selector} not found`);
    return /\{([^}]*)\}/.exec(css.slice(at))![1]!;
  };
  const num = (src: string, re: RegExp): number => {
    const m = re.exec(src);
    if (!m) throw new Error(`hero.module.css: ${re} not found`);
    return Number(m[1]);
  };
  const GLOW = num(css, /--_glow: ([\d.]+);/);
  const VEIL = num(css, /--_veil: light-dark\(transparent, color-mix\(in srgb, var\(--syntara-color-surface-canvas\) (\d+)%, transparent\)\);/);
  const WASH_DARK = /--_wash: light-dark\([^,]+, var\(--syntara-color-([\w-]+)\)\);/.exec(css)?.[1];
  const opacity = (sel: string) => {
    const m = /opacity: calc\(var\(--_glow\) \* ([\d.]+)\)/.exec(block(sel));
    return GLOW * (m ? Number(m[1]) : 1);
  };
  const share = (sel: string) => num(block(sel), /-bg\) (\d+)%, var\(--_wash\)/);
  const LIGHTS = {
    A: { opacity: opacity('.lightA'), primary: share('.lightA') },
    B: { opacity: opacity('.lightB'), accent: share('.lightB') },
    C: { opacity: opacity('.lightC'), even: /color-mix\(in oklab, var\(--syntara-color-action-primary-bg\), var\(--syntara-color-accent-bg\)\)/.test(block('.lightC')) },
    P: { opacity: opacity('.lightPointer'), primary: share('.lightPointer') },
  };
  const veilBox = block(".root[data-variant='aurora'] .copy::before");
  const BOX = {
    block: num(veilBox, /inset-block: calc\(var\(--syntara-space-16\) \* -([\d.]+)\);/),
    inline: num(veilBox, /inset-inline: calc\(var\(--syntara-space-16\) \* -([\d.]+)\);/),
    blur: /filter: blur\(var\(--syntara-space-16\)\);/.test(veilBox),
    paints: /background-color: var\(--_veil\);/.test(veilBox),
  };

  type Rgb = [number, number, number];
  const toLab = (hex: string) => linearRgbToOklab(hexToRgb8(hex).map((v) => srgbToLinear(v / 255)) as Rgb);
  const mix = (a: string, b: string, p: number): string => {
    const A = toLab(a);
    const B = toLab(b);
    const t = p / 100;
    const lab = { l: A.l * t + B.l * (1 - t), a: A.a * t + B.a * (1 - t), b: A.b * t + B.b * (1 - t) };
    return rgb8ToHex(oklabToLinearRgb(lab).map((v) => Math.max(0, Math.min(1, linearToSrgb(v))) * 255) as Rgb);
  };
  const over = (fg: string, bg: string, alpha: number): string => {
    const f = hexToRgb8(fg);
    const b = hexToRgb8(bg);
    return rgb8ToHex([0, 1, 2].map((i) => Math.round(f[i]! * alpha + b[i]! * (1 - alpha))) as Rgb);
  };
  const floor3 = (v: number) => (Math.floor(v * 1000) / 1000).toFixed(3);
  // Standard normal CDF via erf (Abramowitz & Stegun 7.1.26, error < 1.5e-7; 1e-6 is taken off to stay below it).
  const phi = (x: number) => {
    const z = Math.abs(x) / Math.SQRT2;
    const t = 1 / (1 + 0.3275911 * z);
    const erf = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
    return (x >= 0 ? (1 + erf) / 2 : (1 - erf) / 2) - 1e-6;
  };

  /** px of a theme length (rem at 16px), from the engine's variables. */
  const vars = toCssVariables(generateTheme(vela as unknown as BrandInput), 'dark');
  const px = (name: string) => {
    const m = /^([\d.]+)(px|rem)$/.exec(vars[name] ?? '');
    if (!m) throw new Error(`${name} not in px or rem: ${vars[name]}`);
    return Number(m[1]) * (m[2] === 'rem' ? 16 : 1);
  };
  const S16 = px('--syntara-space-16');
  const copyBlock = block('.copy');
  const PAD_TOP = /padding-block: var\(--syntara-space-(\d+)\) var\(--syntara-space-(\d+)\);/.exec(copyBlock);
  const padTop = px(`--syntara-space-${PAD_TOP![1]}`);
  const padBottom = px(`--syntara-space-${PAD_TOP![2]}`);
  const phoneGutter = px(`--syntara-space-${/--_gutter: var\(--syntara-space-(\d+)\);/.exec(block('.root'))![1]}`);
  // The smallest copy: a title of one line at the phone size, on a 320px-wide hero.
  const titleLine = px('--syntara-font-size-4xl') * Number(vars['--syntara-line-height-tight']);
  const contentWidth = 320 - 2 * phoneGutter;
  const axis = (a: number, b: number) => phi(a / S16) + phi(b / S16) - 1;
  const top = padTop + BOX.block * S16;
  const bottom = padBottom + BOX.block * S16;
  const side = phoneGutter + BOX.inline * S16;
  const COVER = Math.min(axis(top, titleLine + bottom), axis(bottom, titleLine + top)) * axis(side, contentWidth + side);
  const V = (VEIL / 100) * COVER;

  const TENANTS = { vela, harbor, qamar, care, house, haat } as unknown as Record<string, BrandInput>;
  const ROLES = ['text.default', 'text.subtle'] as const;

  /** Worst ratio per role, with the veil at `veil` (0 = none), and with only the lights in `only` lit. */
  const worstFor = (inputs: BrandInput[], names: string[], veil: number, only = 'ABCP') => {
    const worst = Object.fromEntries(ROLES.map((r) => [r, { ratio: Infinity, at: '' }]));
    inputs.forEach((input, i) => {
      const r = generateTheme(input).schemes.dark.roles;
      const [primary, accent, wash, canvas] = [r['action.primary.bg'].hex, r['accent.bg'].hex, r['text.default'].hex, r['surface.canvas'].hex];
      let bg = canvas;
      if (only.includes('A')) bg = over(mix(primary, wash, LIGHTS.A.primary), bg, LIGHTS.A.opacity);
      if (only.includes('B')) bg = over(mix(accent, wash, LIGHTS.B.accent), bg, LIGHTS.B.opacity);
      if (only.includes('C')) bg = over(mix(primary, accent, 50), bg, LIGHTS.C.opacity);
      if (only.includes('P')) bg = over(mix(primary, wash, LIGHTS.P.primary), bg, LIGHTS.P.opacity);
      bg = over(canvas, bg, veil);
      for (const role of ROLES) {
        const v = contrastRatio(r[role].hex, bg);
        if (v < worst[role]!.ratio) worst[role] = { ratio: v, at: names[i] ?? `fuzz#${i}` };
      }
    });
    return worst;
  };
  const report = (w: Record<string, { ratio: number; at: string }>) =>
    Object.fromEntries(Object.entries(w).map(([k, v]) => [k, `${floor3(v.ratio)} (${v.at})`]));
  const names = Object.keys(TENANTS);
  const tenants = names.map((n) => TENANTS[n]!);

  it('reads the numbers it proves from the CSS', () => {
    expect({ GLOW, VEIL, WASH_DARK, LIGHTS, BOX }).toEqual({
      GLOW: 0.8,
      VEIL: 77,
      WASH_DARK: 'text-default',
      LIGHTS: {
        A: { opacity: 0.8, primary: 70 },
        B: { opacity: 0.8, accent: 75 },
        C: { opacity: 0.48, even: true },
        P: { opacity: 0.5599999999999999, primary: 60 },
      },
      BOX: { block: 1, inline: 2, blur: true, paints: true },
    });
    expect({ S16, padTop, padBottom, phoneGutter }).toEqual({ S16: 64, padTop: 64, padBottom: 80, phoneGutter: 16 });
  });

  it('keeps ≥ 96% of the veil behind the weakest text point, a corner of the smallest copy', () => {
    console.log('hero aurora veil at the text', { cover: COVER.toFixed(4), veil: V.toFixed(4), titleLine });
    expect(COVER).toBeGreaterThan(0.96);
  });

  it('without the veil, the pointer light alone takes text.subtle below 4.5:1 (why the veil exists)', () => {
    const w = worstFor(tenants, names, 0, 'P');
    console.log('hero aurora dark, no veil, pointer alone at full strength, tenants', report(w));
    expect(w['text.subtle']!.ratio).toBeLessThan(4.5);
  });

  it('tenants: text.default and text.subtle ≥ 4.5:1 with all four lights at full strength under the veil', () => {
    const w = worstFor(tenants, names, V);
    console.log('hero aurora dark, veiled, tenants', report(w));
    for (const role of ROLES) expect(w[role]!.ratio, role).toBeGreaterThanOrEqual(4.5);
  });

  it('1,000 fuzz brands: the same', async () => {
    const w = worstFor(await loadFuzzInputs(), [], V);
    console.log('hero aurora dark, veiled, fuzz', report(w));
    for (const role of ROLES) expect(w[role]!.ratio, role).toBeGreaterThanOrEqual(4.5);
  }, 60_000);
});
