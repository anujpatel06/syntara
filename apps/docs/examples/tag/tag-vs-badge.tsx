'use client';

import { Badge, Tag } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

// Tags describe what something is; a Badge says what state it's in.
export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-2)', inlineSize: '100%', maxInlineSize: '24rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--syntara-space-3)' }}>
        <span style={{ fontFamily: 'var(--syntara-font-heading)', fontSize: 'var(--syntara-font-size-lg)' }}>{t('Lab tests')}</span>
        <Badge tone="success" dot>
          {t('Active')}
        </Badge>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-1)' }}>
        <Tag size="sm" tone="success" uppercase>
          {t('Cashless')}
        </Tag>
        <Tag size="sm">{t('Home collection')}</Tag>
        <Tag size="sm">{t('Prescription required')}</Tag>
      </div>
    </div>
  );
}
