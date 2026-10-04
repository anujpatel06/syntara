'use client';

import { isWeekend, parseDate, type DateValue } from '@internationalized/date';
import { Calendar, useLocale } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const { locale } = useLocale();
  // A fixed date keeps the statically built page identical to what the browser renders.
  const now = parseDate('2026-10-05');
  return (
    <Calendar
      aria-label={t('Delivery date')}
      defaultFocusedValue={now}
      minValue={now}
      maxValue={now.add({ weeks: 6 })}
      isDateUnavailable={(date: DateValue) => isWeekend(date, locale)}
    />
  );
}
