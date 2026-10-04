'use client';

import { IconHome } from '@syntara/icons';
import { Breadcrumb, Breadcrumbs } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Breadcrumbs aria-label={t('Document breadcrumbs')}>
      <Breadcrumb href="#">
        <IconHome aria-hidden="true" />
        {t('Home')}
      </Breadcrumb>
      <Breadcrumb href="#">{t('Documents')}</Breadcrumb>
      <Breadcrumb href="#">2026</Breadcrumb>
      <Breadcrumb>{t('Annual statement')}</Breadcrumb>
    </Breadcrumbs>
  );
}
