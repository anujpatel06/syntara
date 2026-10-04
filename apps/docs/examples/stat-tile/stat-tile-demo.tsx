'use client';

import { StatTile } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ inlineSize: '100%', maxInlineSize: 300 }}>
      <StatTile label={t('Available balance')} value="₹1,84,250" delta={0.064} deltaLabel={t('vs last month')} />
    </div>
  );
}
