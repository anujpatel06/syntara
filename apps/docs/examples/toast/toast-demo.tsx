'use client';

import { Button, ToastRegion, toast } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)', justifyContent: 'center' }}>
      {/* Mount one ToastRegion per app, inside your ThemeScope. Extra regions are ignored. */}
      <ToastRegion />
      <Button variant="outline" onPress={() => toast({ title: t('Draft saved') })}>
        {t('Neutral')}
      </Button>
      <Button variant="outline" onPress={() => toast({ title: t('New benefit available'), description: t('Annual check-ups are now covered.'), tone: 'info' })}>
        {t('Info')}
      </Button>
      <Button variant="outline" onPress={() => toast({ title: t('Claim submitted'), description: t('Reference CLM-20931'), tone: 'success' })}>
        {t('Success')}
      </Button>
      <Button variant="outline" onPress={() => toast({ title: t('Upload is taking longer than usual'), tone: 'warning' })}>
        {t('Warning')}
      </Button>
      <Button variant="outline" onPress={() => toast({ title: t('Payment failed'), description: t('Your card was declined.'), tone: 'danger' })}>
        {t('Danger')}
      </Button>
    </div>
  );
}
