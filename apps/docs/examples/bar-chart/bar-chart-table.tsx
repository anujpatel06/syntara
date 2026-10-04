'use client';

import { BarChart } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const data = [
  { plan: 'Starter', seats: 420 }, { plan: 'Team', seats: 1180 },
  { plan: 'Business', seats: 760 }, { plan: 'Enterprise', seats: 310 },
];

export default function Example() {
  const t = useCopy();
  return (
    <BarChart
      aria-label={t('Seats by plan')}
      data={data}
      x="plan"
      xLabel={t('Plan')}
      height={180}
      showTable
      series={[{ key: 'seats', label: t('Seats') }]}
    />
  );
}
