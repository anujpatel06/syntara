'use client';

import { Chip, ChipGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

// md is the control height (next to a Button or TextField); sm is one step smaller. wrap={false} keeps one scrolling row.
export default function Example() {
  const t = useCopy();
  const statuses = [t('Submitted'), t('In review'), t('Approved'), t('Paid'), t('Rejected'), t('Withdrawn')];
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-4)', inlineSize: '100%', minInlineSize: 0 }}>
      <ChipGroup aria-label={t('Status, medium')} defaultSelectedKeys={[t('Approved')]}>
        {statuses.slice(0, 4).map((s) => <Chip key={s} id={s}>{s}</Chip>)}
      </ChipGroup>
      <ChipGroup aria-label={t('Status, small')} size="sm" defaultSelectedKeys={[t('Approved')]}>
        {statuses.slice(0, 4).map((s) => <Chip key={s} id={s}>{s}</Chip>)}
      </ChipGroup>
      <ChipGroup aria-label={t('Status, one row')} size="sm" wrap={false} disabledKeys={[t('Withdrawn')]}>
        {statuses.map((s) => <Chip key={s} id={s}>{s}</Chip>)}
      </ChipGroup>
    </div>
  );
}
