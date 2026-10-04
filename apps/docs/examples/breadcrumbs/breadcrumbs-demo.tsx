'use client';

import { Breadcrumb, Breadcrumbs } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Breadcrumbs aria-label={t('Claim breadcrumbs')}>
      <Breadcrumb href="#">{t('Home')}</Breadcrumb>
      <Breadcrumb href="#">{t('Claims')}</Breadcrumb>
      <Breadcrumb>CLM-20481</Breadcrumb>
    </Breadcrumbs>
  );
}
