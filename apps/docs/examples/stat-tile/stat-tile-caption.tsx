'use client';

import { IconUsers, IconWallet } from '@syntara/icons';
import { StatTile, StatTileGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <StatTileGroup>
      <StatTile label={t('Members covered')} value="4" caption={t('2 adults, 2 children')} icon={<IconUsers />} />
      <StatTile label={t('Wallet balance')} value="₹8,500" delta={0} deltaLabel={t('no change this month')} icon={<IconWallet />} />
      <StatTile label={t('Open requests')} value="0" caption={t('Updated 5 min ago')} size="sm" variant="outline" />
    </StatTileGroup>
  );
}
