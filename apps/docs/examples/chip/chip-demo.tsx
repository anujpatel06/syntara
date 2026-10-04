'use client';

import { useState } from 'react';
import { Chip, ChipGroup, type Selection } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

// Filter chips with counts. "All" is on when nothing else is: picking a category turns it off, clearing them turns it back on.
export default function Example() {
  const t = useCopy();
  const [keys, setKeys] = useState<Set<string>>(new Set(['all']));
  const onChange = (next: Selection) => {
    const picked = new Set([...(next === 'all' ? [] : next)].map(String));
    const added = [...picked].find((k) => !keys.has(k));
    if (added === 'all' || picked.size === 0) setKeys(new Set(['all']));
    else setKeys(new Set([...picked].filter((k) => k !== 'all')));
  };
  return (
    <ChipGroup label={t('Benefits')} selectedKeys={keys} onSelectionChange={onChange}>
      <Chip id="all" count={10}>{t('All')}</Chip>
      <Chip id="sponsored" count={3}>{t('Sponsored')}</Chip>
      <Chip id="discounted" count={2}>{t('Discounted')}</Chip>
      <Chip id="consults" count={4}>{t('Consults')}</Chip>
    </ChipGroup>
  );
}
