'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Sparkline } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Card style={{ inlineSize: '100%', maxInlineSize: 320 }}>
      <CardHeader>
        <CardDescription>{t('Monthly recurring revenue')}</CardDescription>
        <CardTitle>$48,210</CardTitle>
      </CardHeader>
      <CardContent>
        <Sparkline
          aria-label={t('Up 18% over the last 12 months')}
          data={[31, 33, 32, 36, 35, 38, 41, 39, 43, 44, 46, 48]}
          style={{ blockSize: 'var(--syntara-space-12)' }}
        />
      </CardContent>
    </Card>
  );
}
