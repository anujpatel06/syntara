'use client';

import { TextArea } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <TextArea
      label={t('Note to recipient')}
      description={t('Shown on their statement.')}
      maxLength={140}
      defaultValue={t('Rent for March, flat 4B')}
      style={{ inlineSize: '100%', maxInlineSize: 420 }}
    />
  );
}
