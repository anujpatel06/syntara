'use client';

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, TextField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Card style={{ inlineSize: '100%', maxInlineSize: 400 }}>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'contents' }}>
        <CardHeader>
          <CardTitle>{t('Add a bank account')}</CardTitle>
          <CardDescription>{t('Approved claims are paid into this account.')}</CardDescription>
        </CardHeader>
        <CardContent style={{ display: 'grid', gap: 'var(--syntara-field-gap)' }}>
          <TextField label={t('Account holder')} name="holder" autoComplete="name" isRequired />
          <TextField label={t('Account number')} name="account" inputMode="numeric" isRequired />
          <TextField label="IFSC" name="ifsc" description={t('11 characters, printed on your cheque book.')} />
        </CardContent>
        <CardFooter style={{ justifyContent: 'flex-end' }}>
          <Button variant="ghost">{t('Cancel')}</Button>
          <Button type="submit">{t('Save account')}</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
