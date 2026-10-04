'use client';

import { Badge, Eyebrow } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--syntara-space-3)', inlineSize: '100%', maxInlineSize: 360 }}>
      <Eyebrow as="span">Wed · 20 May</Eyebrow>
      <Badge size="sm" tone="success">{t('Cashless')}</Badge>
    </div>
  );
}
