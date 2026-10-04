'use client';

import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle, Eyebrow } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Card style={{ inlineSize: '100%', maxInlineSize: 400 }}>
      <CardHeader>
        <Eyebrow lead="rule" tone="accent">{t('First time here')}</Eyebrow>
        <CardTitle level={2}>
          One wallet, <em>three</em> services
        </CardTitle>
        <CardDescription>{t('Consultations, tests and medicines all draw from the same yearly balance.')}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button size="sm">{t('Show me around')}</Button>
        <Button size="sm" variant="ghost">{t('Skip')}</Button>
      </CardFooter>
    </Card>
  );
}
