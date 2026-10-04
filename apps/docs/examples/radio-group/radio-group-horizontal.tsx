'use client';

import { Radio, RadioGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <RadioGroup label={t('Account type')} orientation="horizontal" defaultValue="individual">
      <Radio value="individual">{t('Individual')}</Radio>
      <Radio value="joint">{t('Joint')}</Radio>
      <Radio value="business">{t('Business')}</Radio>
    </RadioGroup>
  );
}
