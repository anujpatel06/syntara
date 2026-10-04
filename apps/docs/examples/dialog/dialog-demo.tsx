'use client';

import { Button, Dialog, DialogTrigger, TextField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <DialogTrigger>
      <Button variant="outline">{t('Edit profile')}</Button>
      <Dialog
        title={t('Edit profile')}
        description={t('Your name and email are visible to everyone in your workspace.')}
        footer={({ close }) => (
          <>
            <Button variant="outline" onPress={close}>
              {t('Cancel')}
            </Button>
            <Button onPress={close}>{t('Save changes')}</Button>
          </>
        )}
      >
        <TextField label={t('Full name')} defaultValue="Priya Raman" autoFocus />
        <TextField label={t('Email')} type="email" defaultValue="priya.raman@example.com" />
      </Dialog>
    </DialogTrigger>
  );
}
