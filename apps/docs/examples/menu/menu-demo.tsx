'use client';

import { Button, Menu, MenuItem, MenuSeparator, MenuTrigger } from '@syntara/react';
import { IconArchive, IconCopy, IconDotsVertical, IconPencil, IconTrash } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <MenuTrigger>
      <Button variant="outline" size="icon" aria-label={t('Claim actions')}>
        <IconDotsVertical aria-hidden />
      </Button>
      <Menu onAction={(key) => console.log(key)}>
        <MenuItem id="edit" icon={<IconPencil />}>
          {t('Edit details')}
        </MenuItem>
        <MenuItem id="duplicate" icon={<IconCopy />}>
          {t('Duplicate')}
        </MenuItem>
        <MenuItem id="archive" icon={<IconArchive />}>
          {t('Archive')}
        </MenuItem>
        <MenuSeparator />
        <MenuItem id="delete" icon={<IconTrash />} tone="danger">
          {t('Delete claim')}
        </MenuItem>
      </Menu>
    </MenuTrigger>
  );
}
