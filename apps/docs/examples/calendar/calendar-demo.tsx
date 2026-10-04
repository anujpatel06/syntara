'use client';

import { parseDate } from '@internationalized/date';
import { Calendar } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  // A fixed date keeps the statically built page identical to what the browser renders.
  return <Calendar aria-label={t('Appointment date')} defaultValue={parseDate('2026-10-08')} />;
}
