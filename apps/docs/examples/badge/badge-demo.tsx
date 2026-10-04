'use client';

import { Badge } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)', alignItems: 'center' }}>
      <Badge>{t('Draft')}</Badge>
      <Badge tone="info">{t('In review')}</Badge>
      <Badge tone="success">{t('Paid')}</Badge>
      <Badge tone="warning">{t('Pending')}</Badge>
      <Badge tone="danger">{t('Rejected')}</Badge>
      <Badge tone="brand" variant="solid">{t('New')}</Badge>
    </div>
  );
}
