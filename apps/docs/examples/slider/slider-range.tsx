'use client';

import { Slider } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Slider
      label={t('Amount')}
      defaultValue={[2000, 8000]}
      minValue={0}
      maxValue={10000}
      step={500}
      thumbLabels={[t('Minimum'), t('Maximum')]}
      formatOptions={{ style: 'currency', currency: 'INR', maximumFractionDigits: 0 }}
      style={{ maxInlineSize: 360 }}
    />
  );
}
