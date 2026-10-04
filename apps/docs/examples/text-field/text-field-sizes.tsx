'use client';

import { Button, TextField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

// A field and a button of the same size share height and corner radius, so they sit flush in a row.
export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 16, inlineSize: '100%', maxInlineSize: 400 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 8 }}>
          <TextField aria-label={`Promo code (${size})`} placeholder={t('Promo code')} size={size} style={{ flex: 1 }} />
          <Button variant="outline" size={size}>
            {t('Apply')}
          </Button>
        </div>
      ))}
    </div>
  );
}
