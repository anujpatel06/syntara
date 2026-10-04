'use client';

import { Select, SelectItem } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Select label={t('Plan')} placeholder={t('Choose a plan')} description={t('You can change plans at any time.')} style={{ inlineSize: '100%', maxInlineSize: 320 }}>
      <SelectItem id="starter">{t('Starter')}</SelectItem>
      <SelectItem id="team">{t('Team')}</SelectItem>
      <SelectItem id="business">{t('Business')}</SelectItem>
      <SelectItem id="enterprise">{t('Enterprise')}</SelectItem>
    </Select>
  );
}
