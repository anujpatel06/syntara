'use client';

import { Select, SelectItem } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 24, inlineSize: '100%', maxInlineSize: 320 }}>
      <Select label={t('Reason for refund')} placeholder={t('Select a reason')} isRequired isInvalid errorMessage={t('Choose a reason to continue.')}>
        <SelectItem id="damaged">{t('Item arrived damaged')}</SelectItem>
        <SelectItem id="wrong">{t('Wrong item sent')}</SelectItem>
        <SelectItem id="late">{t('Delivery was late')}</SelectItem>
      </Select>
      <Select label={t('Region')} defaultSelectedKey="eu" isDisabled description={t('Set by your organisation.')}>
        <SelectItem id="us">{t('United States')}</SelectItem>
        <SelectItem id="eu">{t('European Union')}</SelectItem>
      </Select>
    </div>
  );
}
