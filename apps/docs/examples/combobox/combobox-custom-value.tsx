'use client';

import { useState } from 'react';
import { Combobox, ComboboxItem } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const titles = ['Account manager', 'Data analyst', 'Designer', 'Engineering manager', 'Product manager', 'Software engineer'];

export default function Example() {
  const t = useCopy();
  const [value, setValue] = useState('');
  return (
    <Combobox
      label={t('Job title')}
      placeholder={t('Pick or type a title')}
      description={value ? `Saved as “${value}”.` : t('Not in the list? Type your own.')}
      allowsCustomValue
      inputValue={value}
      onInputChange={setValue}
      style={{ inlineSize: '100%', maxInlineSize: 320 }}
    >
      {titles.map((t) => (
        <ComboboxItem key={t} id={t}>
          {t}
        </ComboboxItem>
      ))}
    </Combobox>
  );
}
