'use client';

import { Slider } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 24, inlineSize: '100%', maxInlineSize: 360 }}>
      <Slider label={t('Savings rate')} defaultValue={0.15} minValue={0} maxValue={0.5} step={0.01} formatOptions={{ style: 'percent' }} />
      <Slider label={t('Loan term')} defaultValue={36} minValue={6} maxValue={84} step={6} formatOptions={{ style: 'unit', unit: 'month', unitDisplay: 'long' }} />
    </div>
  );
}
