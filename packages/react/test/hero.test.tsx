import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { generateTheme, type BrandInput } from '@syntara/theme-engine';
import {
  contrastRatio,
  hexToRgb8,
  linearRgbToOklab,
  linearToSrgb,
  oklabToLinearRgb,
  rgb8ToHex,
  srgbToLinear,
} from '../../theme-engine/src/color';
import haat from '../../../tenants/haat/brand.json';
import { Hero } from '../src/ui/hero';
import { TENANTS, loadFuzzInputs, readUiCss } from './status-icon-contrast';

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

  it('follows the page by default; scheme="dark" scopes it dark with the inherited theme', () => {
    const { rerender } = render(
      <div data-syntara-theme="vela" data-syntara-scheme="light" data-syntara-density="compact">
        <Hero title="Plans" />
      </div>,
    );
    const section = () => screen.getByRole('region', { name: 'Plans' });
    expect(section()).not.toHaveAttribute('data-syntara-scheme');
    expect(section()).not.toHaveAttribute('data-syntara-theme');

    rerender(
      <div data-syntara-theme="vela" data-syntara-scheme="light" data-syntara-density="compact">
        <Hero title="Plans" scheme="dark" />
      </div>,
    );
    expect(section()).toHaveAttribute('data-syntara-theme', 'vela');
    expect(section()).toHaveAttribute('data-syntara-scheme', 'dark');
    expect(section()).toHaveAttribute('data-syntara-density', 'compact');
  });

  it('follows the page when it switches brand afterwards', async () => {
    const { container } = render(
      <div data-syntara-theme="vela">
        <Hero title="Plans" scheme="dark" />
      </div>,
    );
    const section = screen.getByRole('region', { name: 'Plans' });
    expect(section).toHaveAttribute('data-syntara-theme', 'vela');
    (container.firstElementChild as HTMLElement).setAttribute('data-syntara-theme', 'haat');
    await waitFor(() => expect(section).toHaveAttribute('data-syntara-theme', 'haat'));
  });

  it('renders dark on the server when given the theme', () => {
    render(<Hero title="Plans" scheme="dark" theme="qamar" />);
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
 * Aurora light-scheme contrast proof (ADR-046). Reads the lights' numbers and the halo straight from hero.module.css,
 * so changing them re-runs the proof. Worst case, ignoring where the lights sit: every combination of the four lights,
 * each at 0, half or full strength (a blurred light's centre is at most full), composited in 8-bit sRGB over
 * surface.canvas, with their colours mixed in OKLab as the CSS does; then the halo (surface.canvas at H) over that.
 *   The copy's halo is blurred (σ = its feather) and reaches 2σ past the padding box, so at the box's corner it keeps
 *   Φ(2)² of its strength; the proof uses that. The pause toggle's halo is not blurred.
 *   Under the copy: text.default and text.subtle ≥ 4.5:1; text.brand ≥ 3:1 (only the Eyebrow's mark uses it: an icon).
 *   The pause toggle has its own halo: its icon (text.subtle, text.default when hovered, over a 6% text.default tint)
 *   ≥ 3:1.
 * Every tenant, and the engine's 1,000 fuzz brands. Dark has no halo and isn't covered here.
 */
describe('aurora light-scheme contrast', () => {
  const css = readUiCss('hero.module.css');
  const num = (re: RegExp): number => {
    const m = re.exec(css);
    if (!m) throw new Error(`hero.module.css: ${re} not found`);
    return Number(m[1]);
  };
  const GLOW = num(/--_glow: ([\d.]+);/);
  const HALO = num(/--_halo: light-dark\(color-mix\(in srgb, var\(--syntara-color-surface-canvas\) (\d+)%, transparent\), transparent\);/) / 100;
  const REACH = num(/\.copy::before \{[^}]*?inset: calc\(var\(--_feather\) \* -(\d+)\);/);
  // Φ(x), the normal CDF, via the Abramowitz–Stegun erf (error < 1.5e-7, far below the margin it feeds).
  const phi = (x: number) => {
    const z = x / Math.SQRT2;
    const t = 1 / (1 + 0.3275911 * z);
    const erf = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
    return 0.5 * (1 + erf);
  };
  const COPY_HALO = HALO * phi(REACH) ** 2;
  const rule = (sel: string) => /^\{([\s\S]*?)\n\}/m.exec(css.slice(css.indexOf(`${sel} {`) + sel.length + 1))?.[1] ?? '';
  const pct = (sel: string, role: string) => num(new RegExp(`\\.${sel} \\{[^}]*?${role}\\) (\\d+)%, var\\(--_wash\\)`));
  const A = pct('lightA', 'action-primary-bg');
  const B = pct('lightB', 'accent-bg');
  const P = pct('lightPointer', 'action-primary-bg');
  const C_OPACITY = num(/\.lightC \{[^}]*?opacity: calc\(var\(--_glow\) \* ([\d.]+)\)/);
  const P_OPACITY = num(/\.lightPointer \{[^}]*?opacity: calc\(var\(--_glow\) \* ([\d.]+)\)/);

  it('reads the numbers it proves from the CSS', () => {
    expect([GLOW, HALO, REACH, A, B, P, C_OPACITY, P_OPACITY]).toEqual([0.8, 0.9, 2, 70, 75, 60, 0.6, 0.7]);
    expect(rule(".root[data-variant='aurora'] .copy::before")).toMatch(/filter: blur\(var\(--_feather\)\);/);
    expect(COPY_HALO).toBeGreaterThan(0.85);
    // Light C mixes primary and accent half and half, unwashed.
    expect(css).toMatch(/\.lightC \{[^}]*?color-mix\(in oklab, var\(--syntara-color-action-primary-bg\), var\(--syntara-color-accent-bg\)\)/);
    // The halo sits behind aurora's copy and under its pause toggle, and nowhere else.
    expect(rule(".root[data-variant='aurora'] .copy::before")).toMatch(/background-color: var\(--_halo\);/);
    expect(rule(".root[data-variant='aurora'] .pause")).toMatch(/background-color: var\(--_halo\);/);
    expect(css.match(/var\(--_halo\)/g)).toHaveLength(2);
  });

  type Rgb = [number, number, number];
  const toLab = (hex: string) => linearRgbToOklab(hexToRgb8(hex).map((v) => srgbToLinear(v / 255)) as Rgb);
  const mix = (a: string, b: string, p: number): string => {
    const x = toLab(a);
    const y = toLab(b);
    const t = p / 100;
    const lab = { l: x.l * t + y.l * (1 - t), a: x.a * t + y.a * (1 - t), b: x.b * t + y.b * (1 - t) };
    return rgb8ToHex(oklabToLinearRgb(lab).map((v) => Math.max(0, Math.min(1, linearToSrgb(v))) * 255) as Rgb);
  };
  const over = (fg: string, bg: string, alpha: number): string => {
    const f = hexToRgb8(fg);
    const b = hexToRgb8(bg);
    return rgb8ToHex([0, 1, 2].map((i) => f[i]! * alpha + b[i]! * (1 - alpha)) as Rgb);
  };

  const worstFor = (inputs: BrandInput[]) => {
    const worst = { 'text.default': Infinity, 'text.subtle': Infinity, 'text.brand': Infinity, pause: Infinity, 'pause hovered': Infinity };
    for (const input of inputs) {
      const r = generateTheme(input).schemes.light.roles;
      const canvas = r['surface.canvas'].hex;
      const primary = r['action.primary.bg'].hex;
      const accent = r['accent.bg'].hex;
      const lights: Array<[string, number]> = [
        [mix(primary, canvas, A), GLOW],
        [mix(accent, canvas, B), GLOW],
        [mix(primary, accent, 50), GLOW * C_OPACITY],
        [mix(primary, canvas, P), GLOW * P_OPACITY],
      ];
      const K = [0, 0.5, 1];
      for (const a of K) for (const b of K) for (const c of K) for (const d of K) {
        let px = canvas;
        [a, b, c, d].forEach((k, i) => {
          if (k) px = over(lights[i]![0], px, lights[i]![1] * k);
        });
        const ground = over(canvas, px, COPY_HALO);
        for (const role of ['text.default', 'text.subtle', 'text.brand'] as const) {
          worst[role] = Math.min(worst[role], contrastRatio(r[role].hex, ground));
        }
        const chip = over(canvas, px, HALO);
        worst.pause = Math.min(worst.pause, contrastRatio(r['text.subtle'].hex, chip));
        const tint = over(r['text.default'].hex, chip, 0.06);
        worst['pause hovered'] = Math.min(worst['pause hovered'], contrastRatio(r['text.default'].hex, tint));
      }
    }
    return worst;
  };
  const check = (worst: ReturnType<typeof worstFor>) => {
    expect(worst['text.default']).toBeGreaterThanOrEqual(4.5);
    expect(worst['text.subtle']).toBeGreaterThanOrEqual(4.5);
    expect(worst['text.brand']).toBeGreaterThanOrEqual(3);
    expect(worst.pause).toBeGreaterThanOrEqual(3);
    expect(worst['pause hovered']).toBeGreaterThanOrEqual(3);
  };
  const show = (worst: ReturnType<typeof worstFor>) =>
    Object.fromEntries(Object.entries(worst).map(([k, v]) => [k, (Math.floor(v * 1000) / 1000).toFixed(3)]));

  it('tenants: text on the halo and the pause icon keep their contrast over the lights', () => {
    const worst = worstFor([...Object.values(TENANTS), haat as unknown as BrandInput]);
    console.log('hero light contrast, tenants', show(worst));
    check(worst);
  });

  it('1,000 fuzz brands: the same', async () => {
    const worst = worstFor(await loadFuzzInputs());
    console.log('hero light contrast, fuzz', show(worst));
    check(worst);
  }, 120_000);
});
