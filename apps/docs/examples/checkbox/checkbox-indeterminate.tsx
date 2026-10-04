'use client';

import { useState } from 'react';
import { Checkbox, CheckboxGroup } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const ACCOUNTS = ['Savings', 'Current', 'Joint'];

export default function Example() {
  const t = useCopy();
  const [selected, setSelected] = useState<string[]>(['Savings']);
  const all = selected.length === ACCOUNTS.length;
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <Checkbox
        isSelected={all}
        isIndeterminate={selected.length > 0 && !all}
        onChange={(on) => setSelected(on ? ACCOUNTS : [])}
      >
        {t('All accounts')}
      </Checkbox>
      <CheckboxGroup aria-label={t('Accounts')} value={selected} onChange={setSelected} style={{ paddingInlineStart: 'var(--syntara-space-6)' }}>
        {ACCOUNTS.map((a) => (
          <Checkbox key={a} value={a}>
            {a}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
