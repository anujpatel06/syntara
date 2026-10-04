'use client';

import { Tag } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-3)', justifyItems: 'start' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--syntara-space-2)' }}>
        <Tag size="md">{t('Network clinics')}</Tag>
        <Tag size="md" tone="success" uppercase>
          {t('Cashless')}
        </Tag>
        <Tag size="md" variant="dashed">
          {t('Optional add-on')}
        </Tag>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--syntara-space-1)' }}>
        <Tag size="sm">{t('Network clinics')}</Tag>
        <Tag size="sm" tone="success" uppercase>
          {t('Cashless')}
        </Tag>
        <Tag size="sm" variant="dashed">
          {t('Optional add-on')}
        </Tag>
      </div>
    </div>
  );
}
