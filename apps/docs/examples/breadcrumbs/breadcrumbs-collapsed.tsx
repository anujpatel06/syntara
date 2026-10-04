'use client';

import { Breadcrumb, Breadcrumbs } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Breadcrumbs aria-label={t('Settings breadcrumbs')} maxItems={3}>
      <Breadcrumb href="#">{t('Home')}</Breadcrumb>
      <Breadcrumb href="#">{t('Settings')}</Breadcrumb>
      <Breadcrumb href="#">{t('Team')}</Breadcrumb>
      <Breadcrumb href="#">{t('Roles')}</Breadcrumb>
      <Breadcrumb href="#">{t('Reviewer')}</Breadcrumb>
      <Breadcrumb>{t('Permissions')}</Breadcrumb>
    </Breadcrumbs>
  );
}
