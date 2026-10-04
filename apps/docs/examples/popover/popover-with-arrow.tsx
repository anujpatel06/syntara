'use client';

import { Button, DialogTrigger, Popover } from '@syntara/react';
import { IconInfoCircle } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <DialogTrigger>
      <Button variant="ghost" size="icon" aria-label={t('About available balance')}>
        <IconInfoCircle aria-hidden />
      </Button>
      <Popover showArrow placement="top">
        <p style={{ margin: 0, maxInlineSize: 'calc(var(--syntara-space-16) * 4)', fontSize: 'var(--syntara-font-size-sm)' }}>
          {t('Available balance excludes payments that are still pending. It updates within a few minutes of each transaction.')}
        </p>
      </Popover>
    </DialogTrigger>
  );
}
