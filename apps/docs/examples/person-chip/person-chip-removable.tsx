'use client';

import { useState } from 'react';
import { PersonChip, PersonChipGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [people, setPeople] = useState(['Arjun Shah', 'Priya Shah', 'Aarav Shah', 'Meera Iyer']);
  return (
    <PersonChipGroup
      aria-label={t('Who is this claim for?')}
      onRemove={(keys) => setPeople((list) => list.filter((name) => !keys.has(name)))}
    >
      {people.map((name) => (
        <PersonChip key={name} name={name} />
      ))}
    </PersonChipGroup>
  );
}
