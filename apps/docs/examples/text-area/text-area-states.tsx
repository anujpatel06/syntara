'use client';

import { TextArea } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 20, inlineSize: '100%', maxInlineSize: 420 }}>
      <TextArea label={t('Reason for dispute')} isRequired isInvalid errorMessage={t('Tell us why you’re disputing this charge.')} />
      <TextArea label={t('Internal notes')} defaultValue={t('Reviewed by the claims team on 12 March.')} isDisabled />
    </div>
  );
}
