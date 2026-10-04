'use client';

import { Slider } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return <Slider label={t('Credit limit usage')} defaultValue={40} isDisabled formatOptions={{ style: 'unit', unit: 'percent' }} style={{ maxInlineSize: 320 }} />;
}
