'use client';

import { IconUsers } from '@syntara/icons';
import { Button, EmptyState, Link } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <EmptyState
      icon={<IconUsers />}
      title={t('Add your family')}
      description={t('Dependants you add can use your benefits and submit their own claims.')}
      action={
        <>
          <Button>{t('Add a dependant')}</Button>
          <Link href="#who-can-be-added" variant="standalone">{t('Who can be added?')}</Link>
        </>
      }
    />
  );
}
