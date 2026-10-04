'use client';

import { useState } from 'react';
import { Button, Menu, MenuItem, MenuSection, MenuSeparator, MenuTrigger, type Selection } from '@syntara/react';
import { IconArrowsSort } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [sort, setSort] = useState<Selection>(new Set(['newest']));
  const [columns, setColumns] = useState<Selection>(new Set(['amount', 'status']));
  return (
    <MenuTrigger>
      <Button variant="outline">
        <IconArrowsSort aria-hidden />
        {t('View')}
      </Button>
      <Menu>
        <MenuSection title={t('Sort by')} selectionMode="single" selectedKeys={sort} onSelectionChange={setSort}>
          <MenuItem id="newest">{t('Newest first')}</MenuItem>
          <MenuItem id="oldest">{t('Oldest first')}</MenuItem>
          <MenuItem id="amount-desc">{t('Largest amount')}</MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection title={t('Columns')} selectionMode="multiple" selectedKeys={columns} onSelectionChange={setColumns}>
          <MenuItem id="amount">{t('Amount')}</MenuItem>
          <MenuItem id="status">{t('Status')}</MenuItem>
          <MenuItem id="category">{t('Category')}</MenuItem>
        </MenuSection>
      </Menu>
    </MenuTrigger>
  );
}
