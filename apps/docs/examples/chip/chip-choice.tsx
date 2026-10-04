'use client';

import { useState } from 'react';
import { Chip, ChipGroup, type Selection } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

// Choice chips: exactly one is on, like a segmented control that wraps.
export default function Example() {
  const t = useCopy();
  const [period, setPeriod] = useState<Selection>(new Set(['month']));
  return (
    <ChipGroup mode="choice" label={t('Period')} selectedKeys={period} onSelectionChange={setPeriod}>
      <Chip id="week">{t('This week')}</Chip>
      <Chip id="month">{t('This month')}</Chip>
      <Chip id="quarter">{t('This quarter')}</Chip>
      <Chip id="year">{t('This year')}</Chip>
      <Chip id="custom">{t('Custom range')}</Chip>
    </ChipGroup>
  );
}
