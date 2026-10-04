'use client';

import { StatTile, StatTileGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ inlineSize: '100%', maxInlineSize: 520 }}>
      <StatTileGroup>
        <StatTile variant="editorial" value="12k+" label={t('renewals a month')} />
        <StatTile variant="editorial" value="45s" label={t('to a quote')} />
        <StatTile variant="editorial" value="2 yrs" label={t('in use')} />
      </StatTileGroup>
    </div>
  );
}
