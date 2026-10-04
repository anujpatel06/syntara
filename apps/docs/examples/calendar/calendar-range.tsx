'use client';

import { parseDate } from '@internationalized/date';
import { RangeCalendar } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  // A fixed date keeps the statically built page identical to what the browser renders.
  const start = parseDate('2026-10-12');
  return <RangeCalendar aria-label={t('Trip dates')} defaultValue={{ start, end: start.add({ days: 5 }) }} />;
}
