'use client';

import { IconSearch } from '@syntara/icons';
import { Button, Card, CardDescription, CardHeader, CardTitle, EmptyState } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Card style={{ inlineSize: '100%', maxInlineSize: 520 }}>
      <CardHeader divider>
        <CardTitle>{t('Transactions')}</CardTitle>
        <CardDescription>{t('Filtered by: Pharmacy · Last 30 days')}</CardDescription>
      </CardHeader>
      <EmptyState
        size="sm"
        icon={<IconSearch />}
        title={t('No matching transactions')}
        description={t('Try a wider date range or remove a filter.')}
        action={<Button variant="outline" size="sm">{t('Clear filters')}</Button>}
      />
    </Card>
  );
}
