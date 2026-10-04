'use client';

import { Separator } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const subtle = { color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-sm)' };

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ inlineSize: '100%', maxInlineSize: 360 }}>
      <div style={{ display: 'grid', gap: 'var(--syntara-space-1)' }}>
        <strong style={{ fontSize: 'var(--syntara-font-size-md)', fontWeight: 'var(--syntara-font-weight-semibold)' }}>Claim CLM-20931</strong>
        <span style={subtle}>Outpatient · Submitted 12 Sept</span>
      </div>
      <Separator style={{ marginBlock: 'var(--syntara-space-4)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--syntara-space-3)', blockSize: 20, ...subtle }}>
        <span>{t('Details')}</span>
        <Separator orientation="vertical" />
        <span>{t('Documents')}</span>
        <Separator orientation="vertical" />
        <span>{t('Payments')}</span>
      </div>
    </div>
  );
}
