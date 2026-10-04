'use client';

import { Spinner } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <p
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--syntara-space-2)',
        margin: 0,
        color: 'var(--syntara-color-text-subtle)',
        fontSize: 'var(--syntara-font-size-sm)',
      }}
    >
      {/* The spinner announces its label; the visible text repeats it for sighted users. */}
      <Spinner size="sm" label={t('Checking eligibility')} />
      <span aria-hidden="true">{t('Checking eligibility…')}</span>
    </p>
  );
}
