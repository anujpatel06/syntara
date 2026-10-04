'use client';

import { SearchField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <SearchField
      label={t('Find a provider')}
      placeholder={t('Name, speciality or city')}
      description={t('Press Enter to search, Escape to clear.')}
      defaultValue={t('Cardiology')}
      style={{ inlineSize: '100%', maxInlineSize: 360 }}
    />
  );
}
