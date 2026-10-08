'use client';

import { Button, Navbar, NavbarAction, NavbarLink, NavbarLogo, NavbarMenuGroup, NavbarMenuLink } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  // Three short links clear the centred logo from 720px wide; the menu carries the rest.
  const links = [t('Plans'), t('Clinics'), t('Stories')];
  return (
    // A scrolling frame, so the bar can fold here. On a page it goes first in the body and folds on the page's scroll.
    <div
      style={{
        inlineSize: '100%',
        blockSize: 'calc(var(--syntara-space-16) * 7)',
        overflow: 'auto',
        background: 'var(--syntara-color-surface-canvas)',
        borderRadius: 'var(--syntara-radius-container)',
        boxShadow: '0 0 0 1px var(--syntara-color-border-subtle)',
      }}
    >
      <Navbar
        menuLabel={t('Menu')}
        logo={<NavbarLogo href="#">{t('Lumen')}</NavbarLogo>}
        actions={
          <>
            <NavbarLink href="#">{t('Log in')}</NavbarLink>
            <NavbarAction href="#">{t('Join now')}</NavbarAction>
          </>
        }
        menu={
          <>
            <NavbarMenuGroup title={t('Explore')}>
              {links.map((label) => (
                <NavbarMenuLink key={label} href="#" isCurrent={label === links[0]}>
                  {label}
                </NavbarMenuLink>
              ))}
              <NavbarMenuLink href="#">{t('For employers')}</NavbarMenuLink>
              <NavbarMenuLink href="#">{t('Gift a year')}</NavbarMenuLink>
            </NavbarMenuGroup>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--syntara-space-4)' }}>
              <NavbarMenuGroup title={t('Compare')} size="sm">
                <NavbarMenuLink href="#">{t('With a clinic visit')}</NavbarMenuLink>
                <NavbarMenuLink href="#">{t('With a yearly check-up')}</NavbarMenuLink>
              </NavbarMenuGroup>
              <NavbarMenuGroup title={t('Company')} size="sm">
                <NavbarMenuLink href="#">{t('About')}</NavbarMenuLink>
                <NavbarMenuLink href="#">{t('Careers')}</NavbarMenuLink>
              </NavbarMenuGroup>
            </div>
          </>
        }
      >
        {links.map((label) => (
          <NavbarLink key={label} href="#" isCurrent={label === links[0]}>
            {label}
          </NavbarLink>
        ))}
      </Navbar>
      <main style={{ padding: 'calc(var(--syntara-space-16) * 2) var(--syntara-space-8) var(--syntara-space-16)', maxInlineSize: '60ch' }}>
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--syntara-font-heading)',
            fontSize: 'var(--syntara-font-size-4xl)',
            letterSpacing: 'var(--syntara-font-tracking-4xl)',
            lineHeight: 'var(--syntara-line-height-tight)',
          }}
        >
          {t('Care that comes to you')}
        </h2>
        <p style={{ color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-lg)' }}>
          {t('Book a visit, pay at the pharmacy and claim lab tests from one app, with cashless care at partner clinics.')}
        </p>
        <div style={{ display: 'flex', gap: 'var(--syntara-space-3)', marginBlockEnd: 'var(--syntara-space-16)' }}>
          <Button size="lg">{t('Join now')}</Button>
          <Button size="lg" variant="outline">
            {t('See plans')}
          </Button>
        </div>
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
