'use client';

import { TextField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 20, inlineSize: '100%', maxInlineSize: 320 }}>
      <TextField label={t('Full name')} placeholder={t('As on your ID')} />
      <TextField label={t('Policy number')} description={t('Printed on the front of your card.')} isRequired />
      <TextField label={t('Phone')} type="tel" defaultValue="98450" isInvalid errorMessage={t('Enter a 10-digit mobile number.')} />
      <TextField label={t('Member ID')} defaultValue="MB-204118" isDisabled />
    </div>
  );
}
