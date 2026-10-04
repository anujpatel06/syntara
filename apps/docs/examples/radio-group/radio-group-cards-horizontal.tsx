'use client';

import { Radio, RadioGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <RadioGroup variant="card" orientation="horizontal" label={t('Plan')} defaultValue="plus" style={{ inlineSize: '100%' }}>
      <Radio value="basic" description={t('Up to 3 claims a year')}>
        {t('Basic')}
      </Radio>
      <Radio value="plus" description={t('Unlimited claims, priority review')}>
        {t('Plus')}
      </Radio>
      <Radio value="family" description={t('Everything in Plus for up to 5 people')}>
        {t('Family')}
      </Radio>
    </RadioGroup>
  );
}
