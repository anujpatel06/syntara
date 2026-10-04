'use client';

import { ProgressBar } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-6)', inlineSize: '100%', maxInlineSize: 360 }}>
      <ProgressBar label={t('Preparing your export')} isIndeterminate />
      <ProgressBar aria-label={t('Loading claims')} isIndeterminate size="sm" />
    </div>
  );
}
