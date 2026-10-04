'use client';

import { TextField } from '@syntara/react';
import { IconAt, IconWorld } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 20, inlineSize: '100%', maxInlineSize: 320 }}>
      <TextField label={t('Amount')} prefix="₹" suffix="INR" inputMode="decimal" placeholder="0.00" />
      <TextField label={t('Website')} prefix={<IconWorld aria-hidden />} placeholder="example.com" />
      <TextField label={t('Username')} prefix={<IconAt aria-hidden />} placeholder="yourname" />
    </div>
  );
}
