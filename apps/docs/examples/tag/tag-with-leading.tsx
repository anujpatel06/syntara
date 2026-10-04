'use client';

import { Avatar, Tag } from '@syntara/react';
import { IconFileText, IconHome, IconShieldCheck } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--syntara-space-2)' }}>
      <Tag tone="brand" leading={<IconShieldCheck />}>
        {t('Covered by employer')}
      </Tag>
      <Tag leading={<IconHome />}>{t('Home collection')}</Tag>
      <Tag leading={<IconFileText />}>{t('Prescription required')}</Tag>
      <Tag leading={<Avatar name="Priya Shah" />}>Priya</Tag>
    </div>
  );
}
