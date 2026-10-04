'use client';

import { TextArea } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <TextArea
      label={t('What happened?')}
      placeholder={t('Describe the incident in your own words')}
      description={t('Include dates, places and anyone involved.')}
      style={{ inlineSize: '100%', maxInlineSize: 420 }}
    />
  );
}
