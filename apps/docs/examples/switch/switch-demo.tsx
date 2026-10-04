'use client';

import { Switch } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return <Switch defaultSelected>{t('Two-step verification')}</Switch>;
}
