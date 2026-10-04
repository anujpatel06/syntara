'use client';

import { ProgressBar } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ inlineSize: '100%', maxInlineSize: 360 }}>
      <ProgressBar label={t('Uploading receipts')} value={64} showValue />
    </div>
  );
}
