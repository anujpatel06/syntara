'use client';

import { PersonChip, PersonChipGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-3)', justifyItems: 'start' }}>
      <PersonChipGroup aria-label={t('Reviewers')} size="md">
        <PersonChip name="Daniel Okafor" />
        <PersonChip name="Mei Lin" />
        <PersonChip name={t('Spouse')} placeholder />
      </PersonChipGroup>
      <PersonChipGroup aria-label={t('Reviewers, compact')} size="sm">
        <PersonChip name="Daniel Okafor" />
        <PersonChip name="Mei Lin" />
        <PersonChip name={t('Spouse')} placeholder />
      </PersonChipGroup>
    </div>
  );
}
