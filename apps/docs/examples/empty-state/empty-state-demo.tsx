'use client';

import { IconFileText } from '@syntara/icons';
import { Button, EmptyState } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <EmptyState
      icon={<IconFileText />}
      title={t('No claims yet')}
      description={t('When you submit a claim, you can track its status and payments here.')}
      action={<Button>{t('Start a claim')}</Button>}
    />
  );
}
