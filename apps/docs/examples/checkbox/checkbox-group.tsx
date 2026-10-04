'use client';

import { Checkbox, CheckboxGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <CheckboxGroup label={t('Notify me by')} description={t('Choose at least one.')} defaultValue={['email', 'push']}>
      <Checkbox value="email">{t('Email')}</Checkbox>
      <Checkbox value="sms">SMS</Checkbox>
      <Checkbox value="push" description={t('On devices where you’re signed in.')}>
        {t('Push notification')}
      </Checkbox>
    </CheckboxGroup>
  );
}
