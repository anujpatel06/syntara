'use client';

import { FooterStatus } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-3)' }}>
      <FooterStatus>{t('All systems operational')}</FooterStatus>
      <FooterStatus tone="warning">{t('Degraded performance')}</FooterStatus>
      <FooterStatus tone="danger">{t('Partial outage')}</FooterStatus>
      <FooterStatus tone="neutral">{t('Scheduled maintenance')}</FooterStatus>
    </div>
  );
}
