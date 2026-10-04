'use client';

import { Checkbox } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Checkbox defaultSelected description={t('We’ll email you when a claim changes status.')}>
      {t('Email me about updates')}
    </Checkbox>
  );
}
