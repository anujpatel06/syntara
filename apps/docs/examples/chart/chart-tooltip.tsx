'use client';

import { ChartTooltip, chartColor } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: 'var(--syntara-space-6)' }}>
      <ChartTooltip title="12 Oct" rows={[{ key: 'revenue', label: t('Revenue'), value: '$4,210', color: chartColor(0) }]} />
      <ChartTooltip
        title={t('Week 6')}
        rows={[
          { key: 'income', label: t('Income'), value: '$5,200', color: chartColor(0) },
          { key: 'spending', label: t('Spending'), value: '$4,100', color: chartColor(1) },
        ]}
      />
    </div>
  );
}
