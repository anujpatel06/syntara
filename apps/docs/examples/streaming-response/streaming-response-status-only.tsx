'use client';

import { StreamingResponse } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

/** For long answers people would rather read at their own pace: only "Writing response" and "Response complete" are spoken. */
export default function Example() {
  const t = useCopy();
  return (
    <div style={{ maxInlineSize: '36rem' }}>
      <StreamingResponse
        announce="status"
        status="streaming"
        label={t('Report summary')}
        text={t('Spending rose in groceries and travel this quarter, while subscriptions fell after two were cancelled. The full breakdown by')}
      />
    </div>
  );
}
