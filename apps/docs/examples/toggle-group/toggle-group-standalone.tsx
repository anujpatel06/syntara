'use client';

import { useState } from 'react';
import { ToggleButton } from '@syntara/react';
import { IconPin, IconStar } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [starred, setStarred] = useState(true);
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <ToggleButton isSelected={starred} onChange={setStarred}>
        <IconStar aria-hidden />
        {starred ? t('Starred') : t('Star')}
      </ToggleButton>
      <ToggleButton aria-label={t('Pin to top')}>
        <IconPin aria-hidden />
      </ToggleButton>
    </div>
  );
}
