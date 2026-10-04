'use client';

import { Switch } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 16, inlineSize: '100%', maxInlineSize: 420 }}>
      <Switch defaultSelected description={t('Get a push notification for every card payment.')}>
        {t('Payment alerts')}
      </Switch>
      <Switch description={t('Blocks online and international card payments until you turn it off.')}>
        {t('Freeze card')}
      </Switch>
      <Switch defaultSelected description={t('Round up purchases and save the change.')}>
        {t('Round-ups')}
      </Switch>
    </div>
  );
}
