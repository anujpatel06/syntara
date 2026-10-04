'use client';

import { IconReceipt } from '@syntara/icons';
import { Button, DataTable, EmptyState, type DataTableColumn } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

type Invoice = { id: string; issued: string; amount: string };

const columns: DataTableColumn<Invoice>[] = [
  { id: 'id', header: 'Invoice', isRowHeader: true, cell: (r) => r.id },
  { id: 'issued', header: 'Issued', cell: (r) => r.issued },
  { id: 'amount', header: 'Amount', align: 'end', cell: (r) => r.amount },
];

export default function Example() {
  const t = useCopy();
  return (
    <DataTable
      aria-label={t('Invoices')}
      columns={columns}
      rows={[]}
      getRowId={(r) => r.id}
      emptyState={
        <EmptyState
          size="sm"
          icon={<IconReceipt />}
          title={t('No invoices yet')}
          description={t('Invoices appear here after your first billing cycle closes.')}
          action={<Button variant="outline" size="sm">{t('View billing settings')}</Button>}
        />
      }
    />
  );
}
