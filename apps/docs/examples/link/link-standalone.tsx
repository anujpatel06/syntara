'use client';

import { Link } from '@syntara/react';
import { IconArrowRight } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      <Link variant="standalone" href="#claims">
        {t('View all claims')}
        <IconArrowRight aria-hidden />
      </Link>
      <Link variant="standalone" href="#statements">
        {t('Download statements')}
      </Link>
    </div>
  );
}
