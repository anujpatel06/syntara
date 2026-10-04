'use client';

import { Combobox, ComboboxItem } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 24, inlineSize: '100%', maxInlineSize: 320 }}>
      <Combobox label={t('Department')} placeholder={t('Search departments…')} isRequired isInvalid errorMessage={t('Choose the department this request belongs to.')}>
        <ComboboxItem id="finance">{t('Finance')}</ComboboxItem>
        <ComboboxItem id="legal">{t('Legal')}</ComboboxItem>
        <ComboboxItem id="operations">{t('Operations')}</ComboboxItem>
      </Combobox>
      <Combobox label={t('Office')} defaultSelectedKey="remote" isDisabled>
        <ComboboxItem id="hq">{t('Head office')}</ComboboxItem>
        <ComboboxItem id="remote">{t('Remote')}</ComboboxItem>
      </Combobox>
    </div>
  );
}
