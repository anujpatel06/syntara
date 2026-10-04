'use client';

import { useState } from 'react';
import { Pagination } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [page, setPage] = useState(3);
  return <Pagination label={t('Statement pages')} variant="compact" page={page} pageCount={12} onPageChange={setPage} />;
}
