'use client';

import { LineChart } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const data = [
  { day: 'Mon', web: 1240, ios: 860, android: 720 }, { day: 'Tue', web: 1380, ios: 910, android: 780 },
  { day: 'Wed', web: 1310, ios: 990, android: 810 }, { day: 'Thu', web: 1460, ios: 1040, android: 900 },
  { day: 'Fri', web: 1520, ios: 1120, android: 940 }, { day: 'Sat', web: 1090, ios: 1260, android: 1010 },
  { day: 'Sun', web: 980, ios: 1310, android: 1080 },
];

export default function Example() {
  const t = useCopy();
  return (
    <LineChart
      aria-label={t('Active users by platform, last 7 days')}
      data={data}
      x="day"
      xLabel={t('Day')}
      height={260}
      showDots
      glow={false}
      series={[
        { key: 'web', label: t('Web') },
        { key: 'ios', label: 'iOS' },
        { key: 'android', label: 'Android' },
      ]}
    />
  );
}
