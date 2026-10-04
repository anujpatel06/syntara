'use client';

import { ToggleButton, ToggleButtonGroup } from '@syntara/react';
import { IconLayoutGrid, IconLayoutList, IconTable } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <ToggleButtonGroup aria-label={t('Layout')} defaultSelectedKeys={['list']} disallowEmptySelection>
      <ToggleButton id="list" aria-label={t('List')}>
        <IconLayoutList aria-hidden />
      </ToggleButton>
      <ToggleButton id="grid" aria-label={t('Grid')}>
        <IconLayoutGrid aria-hidden />
      </ToggleButton>
      <ToggleButton id="table" aria-label={t('Table')}>
        <IconTable aria-hidden />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
