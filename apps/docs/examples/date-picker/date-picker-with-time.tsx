'use client';

import { parseDateTime } from '@internationalized/date';
import { DatePicker } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <DatePicker
      label={t('Send at')}
      granularity="minute"
      hideTimeZone
      // A fixed date keeps the statically built page identical to what the browser renders.
      defaultValue={parseDateTime('2026-10-06T09:30')}
      style={{ inlineSize: '100%', maxInlineSize: 320 }}
    />
  );
}
