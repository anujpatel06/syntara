'use client';

import { Alert } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-3)', inlineSize: '100%', maxInlineSize: 560 }}>
      <Alert tone="neutral" title={t('Draft saved')}>{t('You can finish this claim later from your dashboard.')}</Alert>
      <Alert tone="info" title={t('New benefit available')}>{t('Annual health check-ups are now covered in full.')}</Alert>
      <Alert tone="success" title={t('Claim approved')}>{t('₹12,400 will reach your account within 3 working days.')}</Alert>
      <Alert tone="warning" title={t('Card expiring soon')}>{t('Your card ending 4821 expires next month. Order a replacement.')}</Alert>
      <Alert tone="danger" title={t('Payment failed')}>We couldn't charge your card. Check the details and try again.</Alert>
    </div>
  );
}
