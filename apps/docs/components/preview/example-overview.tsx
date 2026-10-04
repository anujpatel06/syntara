'use client';

import { ThemeScope } from '@syntara/react';
import { examples } from '@/lib/examples.generated';
import styles from './example-overview.module.css';

/**
 * An example shown as-is, with no Preview/Code tabs and no stage controls (lib/overviews.ts). It renders in one demo
 * tenant so brand decorations show real colour; the tiles inside link to pages that have the full controls.
 */
export function ExampleOverview({ name, label, theme }: { name: string; label: string; theme: string }) {
  const Example = examples[name];
  if (!Example) return null;
  return (
    // The scope follows the site's light or dark mode ("site", as the previews do), so captions read on the page;
    // the heroes inside switch themselves to dark.
    <ThemeScope theme={theme} data-syntara-scheme="site" className={styles.stage} role="region" aria-label={label}>
      <Example />
    </ThemeScope>
  );
}
