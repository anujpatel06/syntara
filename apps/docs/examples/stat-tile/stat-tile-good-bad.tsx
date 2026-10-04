'use client';

import { StatTile, StatTileGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

// Both figures rose, but only one rise is good news: positiveIsGood={false} marks refunds, where up is bad.
// Bad news shows an alert mark instead of the trend arrow, so it doesn't rely on red alone, and screen readers
// hear "better" or "worse" after the change. No change stays a plain grey pill.
export default function Example() {
  const t = useCopy();
  return (
    <StatTileGroup>
      <StatTile label={t('Revenue')} value="₹12,48,300" delta={0.064} deltaLabel={t('vs last month')} />
      <StatTile label={t('Refunds')} value="₹38,420" delta={0.031} deltaLabel={t('vs last month')} positiveIsGood={false} />
      <StatTile label={t('Active cards')} value="1,286" delta={0} deltaLabel={t('no change')} />
    </StatTileGroup>
  );
}
