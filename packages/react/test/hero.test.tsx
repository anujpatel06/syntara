import { render, screen } from '@testing-library/react';
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

  it('renders dark on the server when given the theme', () => {
    render(<Hero title="Plans" theme="qamar" />);
    const section = screen.getByRole('region', { name: 'Plans' });
    expect(section).toHaveAttribute('data-syntara-theme', 'qamar');
    expect(section).toHaveAttribute('data-syntara-scheme', 'dark');
  });

  it('hides the decoration from assistive tech', () => {
    const { container } = render(<Hero title="Plans" />);
    expect(container.querySelector('section > [aria-hidden="true"]')).toBeInTheDocument();
  });
});
