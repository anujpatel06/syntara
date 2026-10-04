'use client';

import { Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const row = { display: 'flex', justifyContent: 'space-between', gap: 'var(--syntara-space-4)', fontSize: 'var(--syntara-font-size-sm)' };
const muted = { color: 'var(--syntara-color-text-subtle)' };

export default function Example() {
  const t = useCopy();
  return (
    <Card style={{ inlineSize: '100%', maxInlineSize: 380 }}>
      <CardHeader>
        <CardTitle>{t('Family Floater Plan')}</CardTitle>
        <CardDescription>{t('Renews on 1 April 2027')}</CardDescription>
        <CardAction>
          <Badge tone="success">{t('Active')}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent style={{ display: 'grid', gap: 'var(--syntara-space-2)' }}>
        <div style={row}><span style={muted}>{t('Sum insured')}</span><span>₹10,00,000</span></div>
        <div style={row}><span style={muted}>{t('Members')}</span><span>4</span></div>
        <div style={row}><span style={muted}>{t('Claims this year')}</span><span>2</span></div>
      </CardContent>
      <CardFooter divider>
        <Button variant="outline" size="sm">{t('Download policy')}</Button>
        <Button size="sm">{t('Manage plan')}</Button>
      </CardFooter>
    </Card>
  );
}
