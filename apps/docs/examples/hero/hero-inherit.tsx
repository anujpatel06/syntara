'use client';

import { Button, Hero } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

/* scheme="inherit": the hero follows the page's light or dark scheme instead of always being dark. */
export default function Example() {
  const t = useCopy();
  return (
    <Hero
      scheme="inherit"
      headingLevel={2}
      title={t('Every brand, one system')}
      description={t('Six inputs become a light and a dark theme that pass WCAG 2.2 AA.')}
      actions={<Button size="lg">{t('Try a brand')}</Button>}
      style={{ inlineSize: '100%' }}
    />
  );
}
