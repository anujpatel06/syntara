'use client';

import { Amount, Eyebrow } from '@syntara/react';
import { IconWallet } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-2)' }}>
      <Eyebrow icon={<IconWallet />}>{t('Wallet · 2026')}</Eyebrow>
      <Amount value={18000} currency="INR" locale="en-IN" size="xl" />
    </div>
  );
}
