'use client';

import { Button, ToastRegion, toast } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  function exportStatement() {
    // A toast that stays until you dismiss it by key.
    const key = toast({ title: t('Preparing your statement…'), description: t('This usually takes a few seconds.') }, { timeout: null });
    setTimeout(() => {
      toast.dismiss(key);
      toast({ title: t('Statement ready'), description: t('statement-sep-2026.pdf was downloaded.'), tone: 'success' });
    }, 2500);
  }
  return (
    <>
      <ToastRegion />
      <Button variant="outline" onPress={exportStatement}>{t('Export statement')}</Button>
    </>
  );
}
