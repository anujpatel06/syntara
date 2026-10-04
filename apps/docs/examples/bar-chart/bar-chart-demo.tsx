'use client';

import { BarChart, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const data = [
  { month: 'May', spend: 2140 }, { month: 'Jun', spend: 2680 }, { month: 'Jul', spend: 1920 },
  { month: 'Aug', spend: 2410 }, { month: 'Sep', spend: 3050 }, { month: 'Oct', spend: 2290 },
];

export default function Example() {
  const t = useCopy();
  return (
    <Card style={{ inlineSize: '100%' }}>
      <CardHeader>
        <CardDescription>{t('Card spending')}</CardDescription>
        <CardTitle>{t('$2,290 in October')}</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart
          aria-label={t('Card spending by month')}
          data={data}
          x="month"
          xLabel={t('Month')}
          highlight="Oct"
          series={[{ key: 'spend', label: t('Spending') }]}
          format={{ value: { style: 'currency', currency: 'USD', maximumFractionDigits: 0 } }}
        />
      </CardContent>
    </Card>
  );
}
