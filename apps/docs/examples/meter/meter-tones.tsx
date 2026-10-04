'use client';

import { Meter } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-5)', inlineSize: '100%', maxInlineSize: 360 }}>
      <Meter label={t('Medicines')} value={3200} maxValue={18000} valueLabel="₹3,200 used" caption="of ₹18,000" />
      <Meter label={t('Diagnostics')} tone="accent" value={9100} maxValue={18000} valueLabel="₹9,100 used" caption="of ₹18,000" />
      <Meter label={t('Dental')} tone="warning" value={4600} maxValue={5000} valueLabel="₹4,600 used" caption="of ₹5,000" />
      <Meter label={t('Vision')} tone="neutral" value={0} maxValue={3000} valueLabel={t('Not used yet')} />
    </div>
  );
}
