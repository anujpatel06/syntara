'use client';

import { SearchField } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return <SearchField aria-label={t('Search transactions')} placeholder={t('Search transactions')} style={{ inlineSize: '100%', maxInlineSize: 320 }} />;
}
