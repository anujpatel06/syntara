'use client';

import { Button, Hero } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

/* variant="orbit": the copy on the start side; rings of the brand colour ripple out around the actions. */
export default function Example() {
  const t = useCopy();
  return (
    <Hero
      variant="orbit"
      headingLevel={2}
      title={t('Money that moves')}
      titleSecondary={t('at your pace')}
      description={t('Save, spend and invest from one account, with every rupee where you can see it.')}
      actions={<Button size="lg">{t('Open an account')}</Button>}
      style={{ inlineSize: '100%' }}
    />
  );
}
