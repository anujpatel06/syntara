'use client';

import { Button, Hero, SearchField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

/* Anything can go in actions: here a search field and its button, as in the Aurora block. */
export default function Example() {
  const t = useCopy();
  return (
    <Hero
      headingLevel={2}
      title={t('Find care near you')}
      description={t('Clinics, labs and pharmacies that take your plan, cashless.')}
      actions={
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'flex', gap: 'var(--syntara-space-2)', inlineSize: '100%', maxInlineSize: '32rem' }}
        >
          <SearchField aria-label={t('Search care')} placeholder={t('Clinic, test or medicine')} style={{ flex: 1 }} />
          <Button type="submit">{t('Search')}</Button>
        </form>
      }
      style={{ inlineSize: '100%' }}
    />
  );
}
