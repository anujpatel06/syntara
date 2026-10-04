'use client';

import { Meter } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ inlineSize: '100%', maxInlineSize: 360 }}>
      <Meter label={t('Consultations')} value={7400} maxValue={18000} valueLabel="₹7,400 used" caption="of ₹18,000" />
    </div>
  );
}
