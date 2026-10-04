'use client';

import { useState } from 'react';
import { AreaChart, Switch } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const data = [
  { quarter: 'Q1', balance: 12400 }, { quarter: 'Q2', balance: 15800 },
  { quarter: 'Q3', balance: 14900 }, { quarter: 'Q4', balance: 19300 },
];

export default function Example() {
  const t = useCopy();
  const [showTable, setShowTable] = useState(false);
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-4)', inlineSize: '100%' }}>
      <Switch isSelected={showTable} onChange={setShowTable}>
        {t('Show data table')}
      </Switch>
      <AreaChart
        aria-label={t('Savings balance by quarter')}
        data={data}
        x="quarter"
        xLabel={t('Quarter')}
        height={200}
        showTable={showTable}
        series={[{ key: 'balance', label: t('Balance') }]}
        format={{ value: { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 } }}
      />
    </div>
  );
}
