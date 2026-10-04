'use client';

import { ToggleButton, ToggleButtonGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      <ToggleButtonGroup size="sm" aria-label={t('Status (small)')} defaultSelectedKeys={['open']} disallowEmptySelection>
        <ToggleButton id="all">{t('All')}</ToggleButton>
        <ToggleButton id="open">{t('Open')}</ToggleButton>
        <ToggleButton id="closed">{t('Closed')}</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size="md" aria-label={t('Status (medium)')} defaultSelectedKeys={['open']} disallowEmptySelection>
        <ToggleButton id="all">{t('All')}</ToggleButton>
        <ToggleButton id="open">{t('Open')}</ToggleButton>
        <ToggleButton id="closed">{t('Closed')}</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
