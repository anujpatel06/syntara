'use client';

import { Radio, RadioGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <RadioGroup label={t('Statement frequency')} defaultValue="monthly">
      <Radio value="weekly">{t('Weekly')}</Radio>
      <Radio value="monthly">{t('Monthly')}</Radio>
      <Radio value="quarterly">{t('Quarterly')}</Radio>
    </RadioGroup>
  );
}
