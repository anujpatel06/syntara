'use client';

import { TextArea } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <TextArea
      label={t('Message')}
      placeholder={t('Write a reply…')}
      rows={2}
      autoResize
      maxRows={8}
      style={{ inlineSize: '100%', maxInlineSize: 420 }}
    />
  );
}
