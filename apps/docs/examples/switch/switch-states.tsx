'use client';

import { useState } from 'react';
import { Switch } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [autopay, setAutopay] = useState(false);
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Switch isSelected={autopay} onChange={setAutopay}>
        Autopay is {autopay ? 'on' : 'off'}
      </Switch>
      <Switch isDisabled>{t('Disabled off')}</Switch>
      <Switch isDisabled defaultSelected>
        {t('Disabled on')}
      </Switch>
    </div>
  );
}
