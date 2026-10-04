'use client';

import { parseDate } from '@internationalized/date';
import { RangeCalendar } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  // A fixed date keeps the statically built page identical to what the browser renders.
  return <RangeCalendar aria-label={t('Reporting period')} visibleDuration={{ months: 2 }} defaultFocusedValue={parseDate('2026-10-05')} />;
}
