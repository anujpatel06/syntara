'use client';

import { Navbar, NavbarLink, NavbarLogo } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const links = [t('Plans'), t('Clinics'), t('Stories')];
  return (
    <div
      style={{
        inlineSize: '100%',
        blockSize: 'calc(var(--syntara-space-16) * 5)',
        overflow: 'auto',
        background: 'var(--syntara-color-surface-canvas)',
        borderRadius: 'var(--syntara-radius-container)',
        boxShadow: '0 0 0 1px var(--syntara-color-border-subtle)',
      }}
    >
      <Navbar logo={<NavbarLogo href="#">{t('Lumen')}</NavbarLogo>}>
        {links.map((label) => (
          <NavbarLink key={label} href="#" isCurrent={label === links[0]}>
            {label}
          </NavbarLink>
        ))}
      </Navbar>
      <main style={{ padding: 'calc(var(--syntara-space-16) * 2) var(--syntara-space-8)', maxInlineSize: '60ch' }}>
        {links.map((label) => (
          <section key={label} style={{ marginBlockEnd: 'var(--syntara-space-16)' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--syntara-font-heading)', fontSize: 'var(--syntara-font-size-xl)' }}>{label}</h3>
            <p style={{ color: 'var(--syntara-color-text-subtle)' }}>
              {t('Scroll on: the bar folds into a capsule once this page has moved under it, and unfolds on the way back up.')}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}
