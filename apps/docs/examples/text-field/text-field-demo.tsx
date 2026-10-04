'use client';

import { TextField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <TextField
      label={t('Email')}
      type="email"
      placeholder="you@example.com"
      description={t('We’ll send receipts and claim updates here.')}
      style={{ inlineSize: '100%', maxInlineSize: 320 }}
    />
  );
}
