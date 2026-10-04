'use client';

import { IconLock, IconUsers, IconWorld } from '@syntara/icons';
import { Select, SelectItem } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Select label={t('Visibility')} defaultSelectedKey="team" style={{ inlineSize: '100%', maxInlineSize: 320 }}>
      <SelectItem id="private" icon={<IconLock />} description={t('Only you can see this report.')}>
        {t('Private')}
      </SelectItem>
      <SelectItem id="team" icon={<IconUsers />} description={t('Everyone on your team can view it.')}>
        {t('Team')}
      </SelectItem>
      <SelectItem id="public" icon={<IconWorld />} description={t('Anyone with the link can view it.')}>
        {t('Public')}
      </SelectItem>
    </Select>
  );
}
