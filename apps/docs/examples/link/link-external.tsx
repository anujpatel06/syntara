'use client';

import { Link } from '@syntara/react';
import { IconExternalLink } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      <Link variant="standalone" href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noreferrer">
        {t('Accessibility guidelines')}
        <IconExternalLink aria-hidden />
      </Link>
      <Link variant="standalone" isDisabled>
        {t('Archived reports')}
      </Link>
    </div>
  );
}
