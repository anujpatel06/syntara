'use client';

import { Checkbox, CheckboxGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <CheckboxGroup label={t('Show')} orientation="horizontal" defaultValue={['income', 'expenses']}>
      <Checkbox value="income">{t('Income')}</Checkbox>
      <Checkbox value="expenses">{t('Expenses')}</Checkbox>
      <Checkbox value="transfers">{t('Transfers')}</Checkbox>
      <Checkbox value="pending">{t('Pending')}</Checkbox>
    </CheckboxGroup>
  );
}
