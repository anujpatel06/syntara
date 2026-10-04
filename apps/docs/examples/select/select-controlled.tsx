'use client';

import { useState } from 'react';
import { Select, SelectItem, type Key } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const statuses = [
  { id: 'open', name: 'Open' },
  { id: 'in-review', name: 'In review' },
  { id: 'approved', name: 'Approved' },
  { id: 'closed', name: 'Closed' },
];

export default function Example() {
  const t = useCopy();
  const [status, setStatus] = useState<Key | null>('in-review');
  return (
    <div style={{ display: 'grid', gap: 12, inlineSize: '100%', maxInlineSize: 320 }}>
      <Select label={t('Status')} items={statuses} selectedKey={status} onSelectionChange={setStatus}>
        {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
      </Select>
      <p style={{ margin: 0, fontSize: 'var(--syntara-font-size-sm)', color: 'var(--syntara-color-text-subtle)' }}>
        Selected key: {String(status)}
      </p>
    </div>
  );
}
