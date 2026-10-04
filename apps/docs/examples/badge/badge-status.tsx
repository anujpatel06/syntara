'use client';

import { Badge } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

/* No chip: a tone dot and the label in body text. The words carry the meaning; the dot is decoration. */
export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-3)', justifyItems: 'start' }}>
      <Badge variant="status" tone="success">{t('Ready to review')}</Badge>
      <Badge variant="status" tone="info">{t('Processing')}</Badge>
      <Badge variant="status" tone="warning">{t('Waiting on approval')}</Badge>
      <Badge variant="status" tone="danger">{t('Build failed')}</Badge>
      <Badge variant="status" tone="brand">{t('In beta')}</Badge>
      <Badge variant="status">{t('Archived')}</Badge>
      <Badge variant="status" tone="success" size="sm">{t('Synced')}</Badge>
    </div>
  );
}
