'use client';

import { AlertDialog, Button, DialogTrigger } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <DialogTrigger>
      <Button tone="danger">{t('Delete card')}</Button>
      <AlertDialog title={t('Delete this card?')} actionLabel={t('Delete card')} tone="danger" onAction={() => {}}>
        {t('Scheduled payments on this card will stop. This can’t be undone.')}
      </AlertDialog>
    </DialogTrigger>
  );
}
