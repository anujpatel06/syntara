'use client';

import { useState } from 'react';
import { Pagination } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [page, setPage] = useState(4);
  return <Pagination label={t('Claims pages')} page={page} pageCount={12} onPageChange={setPage} />;
}
