'use client';

import { AreaChart } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const data = [
  { week: 'W1', income: 4200, spending: 3100 }, { week: 'W2', income: 3900, spending: 3600 },
  { week: 'W3', income: 5100, spending: 2900 }, { week: 'W4', income: 4700, spending: 3800 },
  { week: 'W5', income: 5600, spending: 3300 }, { week: 'W6', income: 5200, spending: 4100 },
  { week: 'W7', income: 6100, spending: 3700 }, { week: 'W8', income: 5900, spending: 3500 },
];

export default function Example() {
  const t = useCopy();
  return (
    <AreaChart
      aria-label={t('Income and spending by week')}
      data={data}
      x="week"
      xLabel={t('Week')}
      series={[
        { key: 'income', label: t('Income') },
        { key: 'spending', label: t('Spending') },
      ]}
      format={{ value: { style: 'currency', currency: 'USD', maximumFractionDigits: 0 } }}
    />
  );
}
