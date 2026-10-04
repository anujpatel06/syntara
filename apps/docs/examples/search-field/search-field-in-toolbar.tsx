'use client';

import { Button, SearchField } from '@syntara/react';
import { IconFilter } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', inlineSize: '100%', maxInlineSize: 480 }}>
      <SearchField aria-label={t('Search claims')} placeholder={t('Search claims')} style={{ flex: '1 1 200px' }} />
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="outline">
          <IconFilter aria-hidden />
          {t('Filters')}
        </Button>
        <Button>{t('New claim')}</Button>
      </div>
    </div>
  );
}
