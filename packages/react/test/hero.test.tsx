import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Hero } from '../src/ui/hero';

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

  describe('variant="cards"', () => {
    const cards = [
      { title: 'Briefs', meta: '12 this week', image: '/a.webp' },
      { title: 'Budgets' },
      { title: 'Approvals', meta: '3 waiting', image: '/c.webp' },
      { title: 'Calendar' },
      { title: 'Reports' },
      { title: 'Ignored sixth' },
    ];

    it('keeps the actions in the copy and hides the fan and cursors', () => {
      const { container } = render(
        <Hero variant="cards" title="Plan it together" cards={cards} cursors={['Priya', 'Omar', 'Third']} actions={<button type="button">Try it</button>} />,
      );
      expect(screen.getByRole('button', { name: 'Try it' })).toBeInTheDocument();
      // Cursors and cards both carry data-n; the card is the one without the arrow svg.
      const firstCard = [...container.querySelectorAll('[data-n="0"]')].find((el) => !el.querySelector('svg'))!;
      const fan = firstCard.parentElement!;
      expect(fan).toHaveAttribute('aria-hidden', 'true');
      // Card titles are decoration: not announced, so not found by role or text queries that respect aria-hidden.
      expect(screen.queryByRole('heading', { name: 'Briefs' })).toBeNull();
      // At most two cursors, each hidden.
      const tags = [...container.querySelectorAll('span[aria-hidden="true"]')].filter((el) => el.querySelector('svg'));
      expect(tags.map((t) => t.textContent)).toEqual(['Priya', 'Omar']);
    });

    it('fans at most five cards, centred on the middle one', () => {
      const { container } = render(<Hero variant="cards" title="A" cards={cards} />);
      const shown = [...container.querySelectorAll<HTMLElement>('[data-n]')].filter((el) => !el.querySelector('svg'));
      expect(shown.map((c) => c.textContent?.split(/\d/)[0])).toHaveLength(5);
      expect(shown.map((c) => c.style.getPropertyValue('--k'))).toEqual(['-2', '-1', '0', '1', '2']);
      expect(container.textContent).not.toContain('Ignored sixth');
      const imgs = container.querySelectorAll('img');
      expect(imgs).toHaveLength(2);
      for (const img of imgs) expect(img).toHaveAttribute('alt', '');
    });

    it('centres fewer cards too', () => {
      const { container } = render(<Hero variant="cards" title="A" cards={cards.slice(0, 3)} />);
      const ks = [...container.querySelectorAll<HTMLElement>('[data-n]')].map((c) => c.style.getPropertyValue('--k'));
      expect(ks).toEqual(['-1', '0', '1']);
    });

    it('draws no fan without cards', () => {
      const { container } = render(<Hero variant="cards" title="A" />);
      expect(container.querySelectorAll('[data-n]')).toHaveLength(0);
    });
  });

  it('hides the decoration from assistive tech', () => {
    const { container } = render(<Hero title="Plans" />);
    expect(container.querySelector('section > [aria-hidden="true"]')).toBeInTheDocument();
  });
});
