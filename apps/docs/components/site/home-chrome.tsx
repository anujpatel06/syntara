'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import styles from './home-chrome.module.css';

/**
 * The homepage is a dark, full-bleed landing page (components/landing). On it, the site header floats over the
 * hero in the house dark theme, clear at the top and glass once the page scrolls; everywhere else it is the
 * ordinary sticky header, untouched.
 */
export function HeaderFrame({ children }: { children: ReactNode }) {
  if (usePathname() !== '/') return children;
  return (
    <div className={styles.overlay} data-syntara-theme="house" data-syntara-scheme="dark">
      {children}
    </div>
  );
}

/** The homepage ends with the Footer component, so the site footer steps aside there. */
export function NotOnHome({ children }: { children: ReactNode }) {
  return usePathname() === '/' ? null : children;
}
