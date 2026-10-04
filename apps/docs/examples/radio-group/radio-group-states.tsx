'use client';

import { Radio, RadioGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <RadioGroup label={t('Preferred contact time')} isRequired isInvalid errorMessage={t('Choose a time so we can call you back.')}>
        <Radio value="morning">{t('Morning')}</Radio>
        <Radio value="afternoon">{t('Afternoon')}</Radio>
      </RadioGroup>
      <RadioGroup label={t('Region')} defaultValue="south" isDisabled description={t('Set by your employer.')}>
        <Radio value="north">{t('North')}</Radio>
        <Radio value="south">{t('South')}</Radio>
      </RadioGroup>
    </div>
  );
}
