'use client';

import { Button, Dialog, DialogTrigger } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const sizes = ['sm', 'md', 'lg'] as const;

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)' }}>
      {sizes.map((size) => (
        <DialogTrigger key={size}>
          <Button variant="outline">Open {size}</Button>
          <Dialog
            size={size}
            title={t('Session expiring')}
            description={t('You’ve been inactive for a while. Stay signed in to keep your unsaved changes.')}
            footer={({ close }) => <Button onPress={close}>{t('Stay signed in')}</Button>}
          />
        </DialogTrigger>
      ))}
    </div>
  );
}
