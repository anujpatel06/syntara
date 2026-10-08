'use client';

import { Navbar, NavbarAction, NavbarLink, NavbarLogo, NavbarMenuGroup, NavbarMenuLink } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const links = [t('Plans'), t('Clinics'), t('Stories')];
  return (
    <div
      style={{
        inlineSize: '100%',
        blockSize: 'calc(var(--syntara-space-16) * 3)',
        overflow: 'hidden',
        background: 'var(--syntara-color-surface-canvas)',
        borderRadius: 'var(--syntara-radius-container)',
        boxShadow: '0 0 0 1px var(--syntara-color-border-subtle)',
      }}
    >
      <Navbar
        isScrolled
        menuLabel={t('Menu')}
        logo={<NavbarLogo href="#">{t('Lumen')}</NavbarLogo>}
        actions={
          <>
            <NavbarLink href="#">{t('Log in')}</NavbarLink>
            <NavbarAction href="#">{t('Join now')}</NavbarAction>
          </>
        }
        menu={
          <NavbarMenuGroup title={t('Explore')}>
            {links.map((label) => (
              <NavbarMenuLink key={label} href="#">
                {label}
              </NavbarMenuLink>
            ))}
          </NavbarMenuGroup>
        }
      >
        {links.map((label) => (
          <NavbarLink key={label} href="#">
            {label}
          </NavbarLink>
        ))}
      </Navbar>
      {/* Something for the capsule's blur to show: a few lines of text running under it. */}
      <p style={{ margin: 0, padding: 'var(--syntara-space-6) var(--syntara-space-8)', color: 'var(--syntara-color-text-subtle)', lineHeight: 'var(--syntara-line-height-normal)' }}>
        {t('Scroll on: the bar folds into a capsule once this page has moved under it, and unfolds on the way back up.')}{' '}
        {t('Book a visit, pay at the pharmacy and claim lab tests from one app, with cashless care at partner clinics.')}{' '}
        {t('Scroll on: the bar folds into a capsule once this page has moved under it, and unfolds on the way back up.')}
      </p>
    </div>
  );
}
