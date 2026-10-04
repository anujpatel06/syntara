'use client';

import { Radio, RadioGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <RadioGroup
      variant="card"
      label={t('How should we pay you?')}
      defaultValue="bank"
      style={{ inlineSize: '100%', maxInlineSize: 420 }}
    >
      <Radio value="bank" description={t('Arrives in 1–2 working days. No fee.')}>
        {t('Bank transfer')}
      </Radio>
      <Radio value="instant" description={t('Arrives in minutes. 1% fee, capped at ₹50.')}>
        {t('Instant payout')}
      </Radio>
      <Radio value="cheque" description={t('Posted to your registered address.')} isDisabled>
        {t('Cheque')}
      </Radio>
    </RadioGroup>
  );
}
