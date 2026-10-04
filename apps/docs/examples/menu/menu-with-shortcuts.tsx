'use client';

import { Button, Menu, MenuItem, MenuSection, MenuSeparator, MenuTrigger } from '@syntara/react';
import { IconChevronDown } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <MenuTrigger>
      <Button variant="outline">
        {t('Document')}
        <IconChevronDown aria-hidden />
      </Button>
      <Menu>
        <MenuSection title={t('File')}>
          <MenuItem shortcut="⌘N">{t('New document')}</MenuItem>
          <MenuItem shortcut="⌘O">{t('Open…')}</MenuItem>
          <MenuItem shortcut="⌘S">{t('Save')}</MenuItem>
          <MenuItem shortcut="⇧⌘S" isDisabled>
            {t('Save as…')}
          </MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection title={t('Share')}>
          <MenuItem description={t('Anyone with the link can view')}>{t('Copy link')}</MenuItem>
          <MenuItem shortcut="⌘P">{t('Print')}</MenuItem>
        </MenuSection>
      </Menu>
    </MenuTrigger>
  );
}
