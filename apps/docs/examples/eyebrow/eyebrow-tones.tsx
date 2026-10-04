'use client';

import { Eyebrow } from '@syntara/react';
import { IconAlertTriangle, IconCircleCheck, IconInfoCircle, IconSparkles } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-4)' }}>
      <Eyebrow lead="rule" tone="brand">{t('New this year')}</Eyebrow>
      <Eyebrow icon={<IconSparkles />} tone="accent">{t('Recommended')}</Eyebrow>
      <Eyebrow icon={<IconInfoCircle />} tone="info">{t('Before you book')}</Eyebrow>
      <Eyebrow icon={<IconCircleCheck />} tone="success">{t('Cashless at this clinic')}</Eyebrow>
      <Eyebrow icon={<IconAlertTriangle />} tone="warning">{t('Pre-approval needed')}</Eyebrow>
    </div>
  );
}
