'use client';

import { Combobox, ComboboxItem } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const countries = [
  { id: 'ar', name: 'Argentina' },
  { id: 'au', name: 'Australia' },
  { id: 'br', name: 'Brazil' },
  { id: 'ca', name: 'Canada' },
  { id: 'eg', name: 'Egypt' },
  { id: 'fr', name: 'France' },
  { id: 'de', name: 'Germany' },
  { id: 'in', name: 'India' },
  { id: 'jp', name: 'Japan' },
  { id: 'ke', name: 'Kenya' },
  { id: 'mx', name: 'Mexico' },
  { id: 'nl', name: 'Netherlands' },
  { id: 'sa', name: 'Saudi Arabia' },
  { id: 'sg', name: 'Singapore' },
];

export default function Example() {
  const t = useCopy();
  return (
    <Combobox label={t('Country')} placeholder={t('Search countries…')} defaultItems={countries} style={{ inlineSize: '100%', maxInlineSize: 320 }}>
      {(item) => <ComboboxItem id={item.id}>{item.name}</ComboboxItem>}
    </Combobox>
  );
}
