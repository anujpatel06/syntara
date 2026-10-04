'use client';

import { ToggleButton, ToggleButtonGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

// A narrow column, like a phone screen or a side panel. The five segments don't fit on one row, so they wrap onto a
// second row inside the track. Every label stays whole, and nothing scrolls sideways.
export default function Example() {
  const t = useCopy();
  return (
    <div style={{ inlineSize: '100%', maxInlineSize: 240 }}>
      <ToggleButtonGroup aria-label={t('Chart range')} defaultSelectedKeys={['quarter']} disallowEmptySelection>
        <ToggleButton id="day">{t('Day')}</ToggleButton>
        <ToggleButton id="week">{t('Week')}</ToggleButton>
        <ToggleButton id="month">{t('Month')}</ToggleButton>
        <ToggleButton id="quarter">{t('Quarter')}</ToggleButton>
        <ToggleButton id="year">{t('Year')}</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
