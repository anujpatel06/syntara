'use client';

import { ToggleButton, ToggleButtonGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const DAYS = [
  ['mon', 'M', 'Monday'],
  ['tue', 'T', 'Tuesday'],
  ['wed', 'W', 'Wednesday'],
  ['thu', 'T', 'Thursday'],
  ['fri', 'F', 'Friday'],
  ['sat', 'S', 'Saturday'],
  ['sun', 'S', 'Sunday'],
] as const;

export default function Example() {
  const t = useCopy();
  return (
    <ToggleButtonGroup size="sm" aria-label={t('Repeat on')} selectionMode="multiple" defaultSelectedKeys={['mon', 'wed', 'fri']}>
      {DAYS.map(([id, short, name]) => (
        <ToggleButton key={id} id={id} aria-label={name}>
          {short}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
