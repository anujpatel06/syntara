'use client';

import { Button, ToastRegion, toast } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

/* The action's weight follows the tone: a quiet secondary button for good news, a high-contrast one when something needs you. */
export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)', justifyContent: 'center' }}>
      <ToastRegion />
      <Button
        variant="outline"
        onPress={() =>
          toast({ title: t('Claim approved'), description: t('₹12,400 reaches your account in 3 days.'), tone: 'success', action: { label: t('Got it'), onAction: () => {} } })
        }
      >
        {t('Success with action')}
      </Button>
      <Button
        variant="outline"
        onPress={() =>
          toast({ title: t('Payment failed'), description: t('Your card was declined by the bank.'), tone: 'danger', action: { label: t('Retry'), onAction: () => {} } })
        }
      >
        {t('Error with action')}
      </Button>
    </div>
  );
}
