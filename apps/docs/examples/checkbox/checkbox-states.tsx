'use client';

import { Checkbox } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Checkbox isRequired isInvalid errorMessage={t('Accept the terms to continue.')}>
        {t('I accept the terms and conditions')}
      </Checkbox>
      <Checkbox isDisabled>{t('Unavailable option')}</Checkbox>
      <Checkbox isDisabled defaultSelected>
        {t('Included in your plan')}
      </Checkbox>
    </div>
  );
}
