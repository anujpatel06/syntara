'use client';

import { StreamingResponse } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-6)', maxInlineSize: '36rem' }}>
      <StreamingResponse status="streaming" text={t('Your statement for September is ready. The largest change since')} />
      <StreamingResponse status="stopped" text={t('Three plans match what you asked for. The first')} />
      <StreamingResponse
        status="error"
        text={t('Here is a summary of the')}
        errorMessage={t('The connection dropped. Try again.')}
      />
      <StreamingResponse status="complete" text={t("Your password was changed. You'll be asked to sign in again on other devices.")} />
    </div>
  );
}
