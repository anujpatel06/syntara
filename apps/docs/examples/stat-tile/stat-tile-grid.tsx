'use client';

import { StatTile, StatTileGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <StatTileGroup>
      <StatTile
        label={t('Claims paid')}
        value="₹4,12,800"
        delta={0.112}
        deltaLabel={t('vs last month')}
        sparkline={[32, 35, 31, 38, 42, 40, 45, 44, 49, 47, 52, 56]}
      />
      <StatTile
        label={t('Avg. settlement time')}
        value="3.4 days"
        delta={-0.18}
        deltaLabel={t('vs last month')}
        positiveIsGood={false}
        sparkline={[5.1, 4.9, 5.2, 4.6, 4.4, 4.5, 4.1, 3.9, 3.8, 3.6, 3.5, 3.4]}
      />
      <StatTile
        label={t('Rejected claims')}
        value="14"
        delta={0.075}
        deltaLabel={t('vs last month')}
        positiveIsGood={false}
        sparkline={[9, 11, 10, 12, 10, 13, 12, 11, 13, 12, 13, 14]}
      />
    </StatTileGroup>
  );
}
