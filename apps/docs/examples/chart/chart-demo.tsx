'use client';

import { ChartLegend } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-4)' }}>
      <ChartLegend
        aria-label={t('Series')}
        series={[
          { key: 'income', label: t('Income') },
          { key: 'spending', label: t('Spending') },
          { key: 'savings', label: t('Savings') },
          { key: 'investments', label: t('Investments') },
        ]}
      />
      <ChartLegend
        aria-label={t('Series')}
        shape="line"
        series={[
          { key: 'web', label: 'Web' },
          { key: 'ios', label: 'iOS' },
          { key: 'android', label: 'Android' },
        ]}
      />
    </div>
  );
}
