'use client';

import { AlertDialog, Button, DialogTrigger } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const cancelSubscription = () => new Promise((resolve) => setTimeout(resolve, 1500));

export default function Example() {
  const t = useCopy();
  return (
    <DialogTrigger>
      <Button variant="outline">{t('Cancel subscription')}</Button>
      <AlertDialog
        title={t('Cancel your subscription?')}
        actionLabel={t('Cancel subscription')}
        cancelLabel={t('Keep subscription')}
        tone="danger"
        onAction={cancelSubscription}
      >
        {t('You’ll keep access until the end of the current billing period.')}
      </AlertDialog>
    </DialogTrigger>
  );
}
