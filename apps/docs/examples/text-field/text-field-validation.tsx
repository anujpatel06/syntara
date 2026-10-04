'use client';

import { Button, TextField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: 'grid', gap: 16, inlineSize: '100%', maxInlineSize: 320 }}
    >
      <TextField label={t('Account holder')} name="holder" isRequired />
      <TextField
        label={t('IFSC code')}
        name="ifsc"
        isRequired
        description={t('11 characters, e.g. ABCD0123456.')}
        validate={(value) => (value && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value) ? t('That doesn’t look like an IFSC code.') : null)}
      />
      <Button type="submit" style={{ justifySelf: 'start' }}>
        {t('Add account')}
      </Button>
    </form>
  );
}
