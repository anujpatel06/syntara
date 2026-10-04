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
 * Aurora contrast in dark. Two of the four lights pass behind the copy: light C (high on the far side) and the
 * pointer light. Their numbers are read straight from hero.module.css, so changing them re-runs the proof.
 *   colour   light C = color-mix(in oklab, action.primary.bg, accent.bg); pointer = color-mix(in oklab,
 *            action.primary.bg P%, --_wash), and --_wash is text.default in dark.
 *   strength opacity × the peak of a disc blurred by a Gaussian of σ = the blur radius. At the disc's centre that peak
 *            is the Gaussian's mass inside the disc, 1 − exp(−R² / 2σ²), with R = half the light's width in px.
 *   paint    composited over surface.canvas in 8-bit sRGB (how browsers blend), then text.default and text.subtle
 *            (the headline's second line and the description) are measured against it.
 * Light A and B sit in the corners, away from the copy, so they are not measured.
 */
describe('aurora contrast in dark', () => {
  const css = readUiCss('hero.module.css');
  const num = (re: RegExp): number => {
    const m = re.exec(css);
    if (!m) throw new Error(`hero.module.css: ${re} not found`);
    return Number(m[1]);
  };
  const rule = (name: string) => /\{([^}]*)\}/.exec(css.slice(css.indexOf(`.${name} {`)))?.[1] ?? '';
  const GLOW = num(/--_glow: ([\d.]+);/);
  const BLUR = num(/filter: blur\(calc\(var\(--syntara-space-16\) \* ([\d.]+)\)\);/);
  const C = rule('lightC');
  const P = rule('lightPointer');
  const C_OPACITY = Number(/opacity: calc\(var\(--_glow\) \* ([\d.]+)\)/.exec(C)?.[1]);
  const C_CQI = Number(/inline-size: calc\((\d+)cqi/.exec(C)?.[1]);
  const P_OPACITY = Number(/opacity: calc\(var\(--_glow\) \* ([\d.]+)\)/.exec(P)?.[1]);
  const P_CQI = Number(/inline-size: calc\((\d+)cqi/.exec(P)?.[1]);
  const P_MIX = Number(/action-primary-bg\) (\d+)%, var\(--_wash\)/.exec(P)?.[1]);
  const WASH_DARK = /--_wash: light-dark\([^,]+, var\(--syntara-color-([\w-]+)\)\);/.exec(css)?.[1];
  const C_IS_EVEN_MIX = /color-mix\(in oklab, var\(--syntara-color-action-primary-bg\), var\(--syntara-color-accent-bg\)\)/.test(C);

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

  /** The blur radius in px, from the engine's space-16 (the same in every brand). */
  const sigma = (input: BrandInput) => {
    const v = toCssVariables(generateTheme(input), 'dark')['--syntara-space-16'] ?? '';
    const px = /^([\d.]+)(px|rem)$/.exec(v);
    if (!px) throw new Error(`--syntara-space-16 not in px or rem: ${v}`);
    return Number(px[1]) * (px[2] === 'rem' ? 16 : 1) * BLUR;
  };
  /** Peak strength of a light `cqi` wide in a hero `width` px wide (phones double the lights below 640px). */
  const peak = (cqi: number, width: number, s: number) => {
    const r = (cqi * (width < 640 ? 2 : 1) * width) / 100 / 2;
    return 1 - Math.exp(-(r * r) / (2 * s * s));
  };

  const TENANTS = { vela, harbor, qamar, care, house, haat } as unknown as Record<string, BrandInput>;
  type Worst = { ratio: number; at: string };
  const ROLES = ['text.default', 'text.subtle'] as const;
  const LIGHTS = ['pointer', 'lightC', 'both'] as const;

  /** Worst ratio per light × role, at one hero width. `both` is the pointer resting on light C. */
  const worstFor = (inputs: BrandInput[], names: string[], width: number) => {
    const s = sigma(inputs[0]!);
    const aC = GLOW * C_OPACITY * peak(C_CQI, width, s);
    const aP = GLOW * P_OPACITY * peak(P_CQI, width, s);
    const worst = Object.fromEntries(
      LIGHTS.flatMap((l) => ROLES.map((r) => [`${l} ${r}`, { ratio: Infinity, at: '' } as Worst])),
    ) as Record<string, Worst>;
    inputs.forEach((input, i) => {
      const roles = generateTheme(input).schemes.dark.roles;
      const canvas = roles['surface.canvas'].hex;
      const lightC = over(mix(roles['action.primary.bg'].hex, roles['accent.bg'].hex, 50), canvas, aC);
      const pointerColour = mix(roles['action.primary.bg'].hex, roles['text.default'].hex, P_MIX);
      const bgs = { pointer: over(pointerColour, canvas, aP), lightC, both: over(pointerColour, lightC, aP) };
      for (const l of LIGHTS) {
        for (const r of ROLES) {
          const v = contrastRatio(roles[r].hex, bgs[l]);
          const w = worst[`${l} ${r}`]!;
          if (v < w.ratio) Object.assign(w, { ratio: v, at: names[i] ?? `fuzz#${i}` });
        }
      }
    });
    return { worst, strength: { lightC: aC, pointer: aP } };
  };
  const report = (w: Record<string, Worst>) =>
    Object.fromEntries(Object.entries(w).map(([k, v]) => [k, `${floor3(v.ratio)} (${v.at})`]));

  it('reads the numbers it measures from the CSS', () => {
    expect({ GLOW, BLUR, C_OPACITY, C_CQI, P_OPACITY, P_CQI, P_MIX, WASH_DARK, C_IS_EVEN_MIX }).toEqual({
      GLOW: 0.8,
      BLUR: 1.5,
      C_OPACITY: 0.6,
      C_CQI: 26,
      P_OPACITY: 0.7,
      P_CQI: 24,
      P_MIX: 60,
      WASH_DARK: 'text-default',
      C_IS_EVEN_MIX: true,
    });
  });

  it('at 1200px the lights reach 0.732 (C) and 0.675 (pointer) of their opacity', () => {
    const s = sigma(vela as unknown as BrandInput);
    expect(s).toBe(96);
    expect(floor3(peak(C_CQI, 1200, s))).toBe('0.732');
    expect(floor3(peak(P_CQI, 1200, s))).toBe('0.675');
  });

  const names = Object.keys(TENANTS);
  const tenants = () => worstFor(names.map((n) => TENANTS[n]!), names, 1200);

  it('tenants at 1200px: text.default stays ≥ 4.5:1 under each light on its own', () => {
    const { worst, strength } = tenants();
    console.log('hero aurora dark, tenants, 1200px', { strength, ...report(worst) });
    expect(worst['pointer text.default']!.ratio).toBeGreaterThanOrEqual(4.5);
    expect(worst['lightC text.default']!.ratio).toBeGreaterThanOrEqual(4.5);
  });

  // KNOWN FAILURE, recorded on purpose (docs/log.md, 2026-10-04). Today the pointer light drops text.subtle below
  // 4.5:1, and the pointer resting on light C drops text.default too. `it.fails` passes while that is true; once a
  // fix lands it starts failing, and the fix should change it to `it`.
  it.fails('tenants at 1200px: both text roles ≥ 4.5:1 under each light and where they overlap', () => {
    const { worst } = tenants();
    for (const k of Object.keys(worst)) expect(worst[k]!.ratio, k).toBeGreaterThanOrEqual(4.5);
  });

  it('records how strong the lights get from phone to wide desktop', () => {
    const s = sigma(vela as unknown as BrandInput);
    const rows = [375, 639, 640, 1024, 1200, 1440, 1920].map((w) => ({
      width: w,
      lightC: floor3(GLOW * C_OPACITY * peak(C_CQI, w, s)),
      pointer: floor3(GLOW * P_OPACITY * peak(P_CQI, w, s)),
    }));
    console.log('hero aurora light strength by width', rows);
    // Wider heroes make bigger discs, and the fixed blur hides less of them: strength only grows with width (≥640).
    expect(Number(rows.at(-1)!.pointer)).toBeGreaterThan(Number(rows[4]!.pointer));
  });

  it('1,000 fuzz brands at 1200px and 1920px: the worst ratios, for the record', async () => {
    const fuzz = await loadFuzzInputs();
    for (const width of [1200, 1920]) {
      const { worst } = worstFor(fuzz, [], width);
      console.log(`hero aurora dark, fuzz, ${width}px`, report(worst));
      if (width === 1200) expect(worst['pointer text.subtle']!.ratio).toBeLessThan(4.5);
    }
    const wide = worstFor(names.map((n) => TENANTS[n]!), names, 1920).worst;
    console.log('hero aurora dark, tenants, 1920px', report(wide));
  }, 60_000);
});
