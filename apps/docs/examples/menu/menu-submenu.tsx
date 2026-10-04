'use client';

import { Button, Menu, MenuItem, MenuSeparator, MenuTrigger, SubmenuTrigger } from '@syntara/react';
import { IconFolder, IconMail, IconLink, IconShare } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <MenuTrigger>
      <Button variant="outline">{t('Options')}</Button>
      <Menu>
        <MenuItem>{t('Rename')}</MenuItem>
        <SubmenuTrigger>
          <MenuItem icon={<IconFolder />}>{t('Move to')}</MenuItem>
          <Menu>
            <MenuItem>{t('Receipts')}</MenuItem>
            <MenuItem>{t('Tax documents')}</MenuItem>
            <MenuItem>{t('Archive')}</MenuItem>
          </Menu>
        </SubmenuTrigger>
        <SubmenuTrigger>
          <MenuItem icon={<IconShare />}>{t('Share')}</MenuItem>
          <Menu>
            <MenuItem icon={<IconMail />}>{t('Email')}</MenuItem>
            <MenuItem icon={<IconLink />}>{t('Copy link')}</MenuItem>
          </Menu>
        </SubmenuTrigger>
        <MenuSeparator />
        <MenuItem tone="danger">{t('Delete')}</MenuItem>
      </Menu>
    </MenuTrigger>
  );
}
