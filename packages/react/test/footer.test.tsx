import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer, FooterColumn, FooterLink, FooterSocialLink, FooterStatus } from '../src/ui/footer';

function Example(props: { wordmark?: string }) {
  return (
    <Footer
      wordmark={props.wordmark}
      aside={
        <>
          <FooterSocialLink href="/news" aria-label="Newsletter">
            <svg data-testid="icon" />
          </FooterSocialLink>
          <FooterStatus>All systems operational</FooterStatus>
        </>
      }
    >
      <FooterColumn title="Product">
        <FooterLink href="/pricing">Pricing</FooterLink>
        <FooterLink href="/changelog">Changelog</FooterLink>
      </FooterColumn>
      <FooterColumn title="Company">
        <FooterLink href="/about">About</FooterLink>
      </FooterColumn>
    </Footer>
  );
}

describe('Footer', () => {
  it('is a contentinfo landmark with a named navigation landmark', () => {
    render(<Example />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Footer' })).toBeInTheDocument();
  });

  it('names each column list by its title', () => {
    render(<Example />);
    const product = screen.getByRole('list', { name: 'Product' });
    expect(product.querySelectorAll('li')).toHaveLength(2);
    expect(screen.getByRole('list', { name: 'Company' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '/pricing');
  });

  it('hides the wordmark from assistive tech', () => {
    const { container } = render(<Example wordmark="Acme" />);
    const svg = container.querySelector('svg:not([data-testid])')!;
    expect(svg.closest('[aria-hidden="true"]')).not.toBeNull();
    expect(screen.queryByText('Acme', { selector: ':not([aria-hidden] *)' })).toBeNull();
  });

  it('renders no wordmark when none is given', () => {
    const { container } = render(<Example />);
    expect(container.querySelector('text')).toBeNull();
  });

  it('names icon-only social links and hides their icon', () => {
    render(<Example />);
    const link = screen.getByRole('link', { name: 'Newsletter' });
    expect(screen.getByTestId('icon').parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(link).toHaveAttribute('href', '/news');
  });

  it('says the status in words and marks its tone', () => {
    render(<FooterStatus tone="warning">Degraded performance</FooterStatus>);
    const status = screen.getByText('Degraded performance');
    expect(status).toHaveAttribute('data-tone', 'warning');
  });

  it('moves through every link with Tab, in order', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    expect(screen.getByRole('link', { name: 'Newsletter' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('link', { name: 'Changelog' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('link', { name: 'About' })).toHaveFocus();
  });

  it('passes className and native props through', () => {
    render(<Footer className="mine" id="site-footer" />);
    const root = screen.getByRole('contentinfo');
    expect(root).toHaveClass('mine');
    expect(root).toHaveAttribute('id', 'site-footer');
  });
});
