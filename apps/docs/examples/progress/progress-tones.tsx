'use client';

import { ProgressBar } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-6)', inlineSize: '100%', maxInlineSize: 360 }}>
      <ProgressBar label={t('Annual limit used')} value={38} showValue />
      <ProgressBar label={t('Profile complete')} value={100} showValue tone="success" />
      <ProgressBar label={t('Storage')} value={4.1} maxValue={5} showValue tone="warning" valueLabel="4.1 of 5 GB" />
      <ProgressBar label={t('Outpatient limit')} value={96} showValue tone="danger" size="sm" />
    </div>
  );
}
