'use client';

import { useState } from 'react';
import { Alert, Button } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [visible, setVisible] = useState(true);
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-3)', inlineSize: '100%', maxInlineSize: 560 }}>
      {/* Action weight follows severity: contrast when something needs fixing, outline otherwise. */}
      <Alert tone="danger" title={t('Payment failed')} action={<Button size="sm" variant="contrast">{t('Update card')}</Button>}>
        We couldn't charge your card ending 4821.
      </Alert>
      {visible ? (
        <Alert
          tone="success"
          title={t('Documents uploaded')}
          onDismiss={() => setVisible(false)}
          action={<Button size="sm" variant="outline">{t('View claim')}</Button>}
        >
          {t('3 files were added to your claim.')}
        </Alert>
      ) : (
        <Button variant="ghost" size="sm" onPress={() => setVisible(true)}>{t('Show dismissed alert')}</Button>
      )}
      <Alert tone="warning" icon={false} live action={<a href="#sign-in">{t('Sign in')}</a>}>
        {t('Your session expired. Sign in again to continue.')}
      </Alert>
    </div>
  );
}
