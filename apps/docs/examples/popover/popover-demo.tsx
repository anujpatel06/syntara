'use client';

import { Button, DialogTrigger, Popover, TextField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <DialogTrigger>
      <Button variant="outline">{t('Set spending limit')}</Button>
      <Popover placement="bottom start">
        <div style={{ display: 'grid', gap: 'var(--syntara-field-gap)', inlineSize: 'calc(var(--syntara-space-16) * 4)' }}>
          <div style={{ display: 'grid', gap: 'var(--syntara-space-1)' }}>
            <strong style={{ fontWeight: 'var(--syntara-font-weight-semibold)' }}>{t('Monthly limit')}</strong>
            <span style={{ fontSize: 'var(--syntara-font-size-sm)', color: 'var(--syntara-color-text-subtle)' }}>
              {t('Card payments above this amount are declined.')}
            </span>
          </div>
          <TextField label={t('Amount')} defaultValue="25,000" prefix="₹" inputMode="numeric" />
          <Button size="sm">{t('Save limit')}</Button>
        </div>
      </Popover>
    </DialogTrigger>
  );
}
