'use client';

import { AlertDialog, Button, DialogTrigger } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <DialogTrigger>
      <Button>{t('Publish changes')}</Button>
      <AlertDialog title={t('Publish changes?')} actionLabel={t('Publish')} onAction={() => {}}>
        {t('Your edits will go live for all customers immediately.')}
      </AlertDialog>
    </DialogTrigger>
  );
}
