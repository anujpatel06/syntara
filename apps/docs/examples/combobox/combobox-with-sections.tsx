'use client';

import { IconBuildingBank, IconCreditCard, IconWallet } from '@syntara/icons';
import { Combobox, ComboboxItem, ComboboxSection } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Combobox label={t('Pay from')} placeholder={t('Search accounts…')} style={{ inlineSize: '100%', maxInlineSize: 320 }}>
      <ComboboxSection title={t('Bank accounts')}>
        <ComboboxItem id="current" textValue={t('Current account')} icon={<IconBuildingBank />} description="•••• 4821">
          {t('Current account')}
        </ComboboxItem>
        <ComboboxItem id="savings" textValue={t('Savings account')} icon={<IconBuildingBank />} description="•••• 1937">
          {t('Savings account')}
        </ComboboxItem>
      </ComboboxSection>
      <ComboboxSection title={t('Cards')}>
        <ComboboxItem id="debit" textValue={t('Debit card')} icon={<IconCreditCard />} description={t('Expires 08/28')}>
          {t('Debit card')}
        </ComboboxItem>
        <ComboboxItem id="wallet" textValue={t('Wallet balance')} icon={<IconWallet />} description={t('Instant, no fees')}>
          {t('Wallet balance')}
        </ComboboxItem>
      </ComboboxSection>
    </Combobox>
  );
}
