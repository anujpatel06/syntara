'use client';

import { Alert } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-4)', inlineSize: '100%', maxInlineSize: 560 }}>
      <Alert tone="info" title={t('Scheduled maintenance')}>
        Claims can't be submitted on Sunday between 02:00 and 04:00 UTC. Anything in progress is saved.
      </Alert>
      <Alert title={t('You can add up to 4 dependants')}>{t('Spouse, children and parents can share your cover.')}</Alert>
    </div>
  );
}
