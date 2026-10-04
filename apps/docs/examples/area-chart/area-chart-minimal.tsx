'use client';

import { AreaChart } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const data = [
  { hour: '09:00', requests: 320 }, { hour: '10:00', requests: 410 }, { hour: '11:00', requests: 385 },
  { hour: '12:00', requests: 520 }, { hour: '13:00', requests: 470 }, { hour: '14:00', requests: 610 },
  { hour: '15:00', requests: 580 }, { hour: '16:00', requests: 690 },
];

export default function Example() {
  const t = useCopy();
  return (
    <AreaChart
      aria-label={t('Requests per hour today')}
      data={data}
      x="hour"
      xLabel={t('Hour')}
      height={160}
      curve="linear"
      showGrid={false}
      showYAxis={false}
      series={[{ key: 'requests', label: t('Requests') }]}
    />
  );
}
