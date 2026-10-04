'use client';

import { BarChart } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const data = [
  { team: 'Support', opened: 142, closed: 128 }, { team: 'Billing', opened: 86, closed: 91 },
  { team: 'Onboarding', opened: 64, closed: 52 }, { team: 'Security', opened: 23, closed: 25 },
  { team: 'Platform', opened: 71, closed: 66 },
];

export default function Example() {
  const t = useCopy();
  return (
    <BarChart
      aria-label={t('Tickets opened and closed by team this month')}
      data={data}
      x="team"
      xLabel={t('Team')}
      series={[
        { key: 'opened', label: t('Opened') },
        { key: 'closed', label: t('Closed') },
      ]}
    />
  );
}
