'use client';

import { Eyebrow } from '@syntara/react';
import { IconShieldCheck, IconWallet } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-4)' }}>
      <Eyebrow>{t('Plan details')}</Eyebrow>
      <Eyebrow lead="rule">{t('How it works')}</Eyebrow>
      <Eyebrow icon={<IconWallet />}>{t('Wallet · 2026')}</Eyebrow>
      <Eyebrow icon={<IconShieldCheck />}>{t('Covered by your employer')}</Eyebrow>
    </div>
  );
}
