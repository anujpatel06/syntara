'use client';

import { Slider } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return <Slider label={t('Monthly budget')} defaultValue={60} style={{ maxInlineSize: 320 }} />;
}
