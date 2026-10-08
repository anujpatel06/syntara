import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar, NavbarAction, NavbarLink, NavbarLogo, NavbarMenuGroup, NavbarMenuLink } from '../src/ui/navbar';
import { TENANTS, loadFuzzInputs, readUiCss } from './status-icon-contrast';

function Example(props: { isScrolled?: boolean; className?: string }) {
  return (
    <Navbar
      className={props.className}
      isScrolled={props.isScrolled}
      logo={<NavbarLogo href="/">Lumen</NavbarLogo>}
      actions={
        <>
          <NavbarLink href="/login">Log in</NavbarLink>
          <NavbarAction href="/join">Join now</NavbarAction>
        </>
      }
      menu={
        <NavbarMenuGroup title="Explore">
          <NavbarMenuLink href="/plans" isCurrent>
            Plans
          </NavbarMenuLink>
          <NavbarMenuLink href="/clinics">Clinics</NavbarMenuLink>
        </NavbarMenuGroup>
      }
    >
      <NavbarLink href="/plans" isCurrent>
        Plans
      </NavbarLink>
      <NavbarLink href="/clinics">Clinics</NavbarLink>
    </Navbar>
  );
}

describe('Navbar', () => {
  it('is a banner with a named navigation landmark, and marks the current page', () => {
    render(<Example />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(within(nav).getByRole('link', { name: 'Plans' })).toHaveAttribute('aria-current', 'page');
    expect(within(nav).getByRole('link', { name: 'Clinics' })).not.toHaveAttribute('aria-current');
    expect(within(nav).getByRole('link', { name: 'Join now' })).toHaveAttribute('href', '/join');
    expect(screen.getByRole('link', { name: 'Lumen' })).toHaveAttribute('href', '/');
  });

  it('renders the start links as a list and the actions outside it', () => {
    render(<Example />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    const list = within(nav).getByRole('list');
    expect(within(list).getAllByRole('listitem')).toHaveLength(2);
    expect(within(nav).getByRole('link', { name: 'Log in' }).closest('li')).toBeNull();
  });

  it('opens the drawer from the keyboard, repeats the actions in it, and closes on Escape back to the button', async () => {
    const user = userEvent.setup();
    render(<Example />);
    const button = screen.getByRole('button', { name: 'Menu' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    button.focus();
    await user.keyboard('{Enter}');
    const dialog = await screen.findByRole('dialog', { name: 'Menu' });
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(within(dialog).getByRole('link', { name: 'Join now' })).toHaveAttribute('href', '/join');
    const group = within(dialog).getByRole('list', { name: 'Explore' });
    expect(within(group).getAllByRole('listitem')).toHaveLength(2);
    expect(within(group).getByRole('link', { name: 'Plans' })).toHaveAttribute('aria-current', 'page');
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await waitFor(() => expect(button).toHaveFocus());
  });

  it('pins the folded state with isScrolled', () => {
    render(<Example isScrolled />);
    expect(screen.getByRole('banner')).toHaveAttribute('data-scrolled', 'true');
  });

  it('starts unfolded and renders with only links', () => {
    render(
      <Navbar>
        <NavbarLink href="/">Home</NavbarLink>
      </Navbar>,
    );
    expect(screen.getByRole('banner')).not.toHaveAttribute('data-scrolled');
    expect(screen.queryByRole('button')).toBeNull();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('passes className through', () => {
    render(<Example className="site-nav" />);
    expect(screen.getByRole('banner')).toHaveClass('site-nav');
  });
});

/*
 * Capsule contrast proof. The folded face is surface.inverse at (glass opacity + OFFSET points), like every glass
 * surface, and carries text.inverse and the quietened-link mix. The engine only solves the glass opacity for
 * surface.raised, so this proves the inverse pair itself: both numbers are read from the CSS, composited in 8-bit
 * sRGB like glass.ts over black and white (the worst backdrops), for the 5 tenants and the 1,000 fuzz brands, in
 * light and dark.
 */
describe('capsule contrast', () => {
  const FACE = /--_face: color-mix\(in srgb, var\(--syntara-color-surface-inverse\) calc\(var\(--syntara-glass-opacity\) \* 100% \+ (\d+)%\), transparent\);/;
  const DIM = /--_dim: color-mix\(in srgb, var\(--syntara-color-text-inverse\) (\d+)%, var\(--syntara-color-surface-inverse\)\);/;

  it('text.inverse and the quietened link stay ≥ 4.5:1 on the folded face over any backdrop (tenants + fuzz, light and dark)', async () => {
    const { generateTheme } = await import('@syntara/theme-engine');
    const { contrastRatio, hexToRgb8, rgb8ToHex } = await import('../../theme-engine/src/color');
    const css = readUiCss('navbar.module.css');
    const offset = Number(FACE.exec(css)?.[1]) / 100;
    const dimShare = Number(DIM.exec(css)?.[1]) / 100;
    expect(offset).toBe(0.08);
    expect(dimShare).toBeGreaterThan(0);
    const over = (fg: string, bg: string, a: number) => {
      const f = hexToRgb8(fg);
      const b = hexToRgb8(bg);
      return rgb8ToHex([0, 1, 2].map((i) => f[i]! * a + b[i]! * (1 - a)) as [number, number, number]);
    };
    let worstText = Infinity;
    let worstDim = Infinity;
    for (const input of [...Object.values(TENANTS), ...(await loadFuzzInputs())]) {
      const theme = generateTheme(input);
      for (const scheme of ['light', 'dark'] as const) {
        const { roles, glass } = theme.schemes[scheme];
        const face = Math.min(1, Math.round(glass.opacity * 100) / 100 + offset);
        const dim = over(roles['text.inverse'].hex, roles['surface.inverse'].hex, dimShare);
        for (const backdrop of ['#000000', '#ffffff']) {
          const lit = over(roles['surface.inverse'].hex, backdrop, face);
          worstText = Math.min(worstText, contrastRatio(roles['text.inverse'].hex, lit));
          worstDim = Math.min(worstDim, contrastRatio(dim, lit));
        }
      }
    }
    expect(worstText).toBeGreaterThanOrEqual(4.5);
    expect(worstDim).toBeGreaterThanOrEqual(4.5);
  }, 60_000);
});
