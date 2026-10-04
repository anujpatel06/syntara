'use client';

import { IconAlertTriangle, IconCheck, IconClock } from '@syntara/icons';
import { Badge } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-3)', justifyItems: 'start' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)' }}>
        <Badge tone="success" icon={<IconCheck />}>{t('Approved')}</Badge>
        <Badge tone="info" icon={<IconClock />}>{t('Awaiting documents')}</Badge>
        <Badge tone="warning" icon={<IconAlertTriangle />}>{t('Needs attention')}</Badge>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)' }}>
        <Badge variant="outline" tone="success" dot>{t('Active')}</Badge>
        <Badge variant="outline" tone="warning" dot>{t('Paused')}</Badge>
        <Badge variant="outline" dot>{t('Archived')}</Badge>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)', alignItems: 'center' }}>
        <Badge size="sm" tone="brand">{t('Beta')}</Badge>
        <Badge size="sm" variant="solid" tone="danger">12</Badge>
        <Badge size="sm" tone="neutral">v2.4.0</Badge>
      </div>
    </div>
  );
}
