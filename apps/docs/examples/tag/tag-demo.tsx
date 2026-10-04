'use client';

import { Tag } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--syntara-space-2)' }}>
      <Tag tone="success" uppercase>
        {t('Cashless')}
      </Tag>
      <Tag uppercase>{t('Own pocket')}</Tag>
      <Tag>{t('Prescription required')}</Tag>
      <Tag>{t('Home collection')}</Tag>
    </div>
  );
}
