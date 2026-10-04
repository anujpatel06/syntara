'use client';

import { DatePicker } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return <DatePicker label={t('Date of incident')} description={t('The day the loss or damage happened.')} style={{ inlineSize: '100%', maxInlineSize: 320 }} />;
}
