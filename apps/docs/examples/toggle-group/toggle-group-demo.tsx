'use client';

import { ToggleButton, ToggleButtonGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <ToggleButtonGroup aria-label={t('Reporting period')} defaultSelectedKeys={['month']} disallowEmptySelection>
      <ToggleButton id="week">{t('Week')}</ToggleButton>
      <ToggleButton id="month">{t('Month')}</ToggleButton>
      <ToggleButton id="year">{t('Year')}</ToggleButton>
    </ToggleButtonGroup>
  );
}
