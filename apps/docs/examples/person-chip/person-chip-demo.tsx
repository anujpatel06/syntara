'use client';

import { PersonChip, PersonChipGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-2)' }}>
      <PersonChipGroup aria-label={t('Covered members')}>
        <PersonChip name="Arjun Shah" />
        <PersonChip name="Priya Shah" />
        <PersonChip name="Aarav Shah" />
        <PersonChip name={t('Father')} placeholder />
      </PersonChipGroup>
      <p style={{ margin: 0, fontSize: 'var(--syntara-font-size-sm)', color: 'var(--syntara-color-text-subtle)' }}>
        Father isn&rsquo;t added yet. He can still use network rates.
      </p>
    </div>
  );
}
