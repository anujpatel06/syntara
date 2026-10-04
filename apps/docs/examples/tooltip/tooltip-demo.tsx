'use client';

import { Button, Tooltip, TooltipTrigger } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <TooltipTrigger>
      <Button variant="outline">{t('Export')}</Button>
      <Tooltip>{t('Download the last 90 days as CSV')}</Tooltip>
    </TooltipTrigger>
  );
}
