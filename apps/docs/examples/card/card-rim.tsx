'use client';

import { Card, CardDescription, CardHeader, CardTitle } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--syntara-space-4)', inlineSize: '100%' }}>
      <Card>
        <CardHeader>
          <CardTitle>{t('Default')}</CardTitle>
          <CardDescription>{t('A hairline edge in light; in dark the rim is built in.')}</CardDescription>
        </CardHeader>
      </Card>
      <Card rim>
        <CardHeader>
          <CardTitle>{t('With rim')}</CardTitle>
          <CardDescription>{t('The edge catches light at the top-left, in light too.')}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
