'use client';

import { Button, Separator, TextField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-4)', inlineSize: '100%', maxInlineSize: 320 }}>
      <Button variant="outline">{t('Continue with single sign-on')}</Button>
      <Separator label={t('or')} />
      <TextField label={t('Work email')} type="email" autoComplete="email" />
      <Button>{t('Send sign-in link')}</Button>
    </div>
  );
}
