'use client';

import { useState } from 'react';
import { Button, ToastRegion, toast } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [archived, setArchived] = useState(0);
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-2)', justifyItems: 'center' }}>
      <ToastRegion />
      <Button
        variant="outline"
        onPress={() => {
          setArchived((n) => n + 1);
          toast({
            title: t('Claim archived'),
            description: t('You can find it under Archived.'),
            action: { label: t('Undo'), onAction: () => setArchived((n) => n - 1) },
          });
        }}
      >
        {t('Archive claim')}
      </Button>
      <span style={{ color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-sm)' }}>Archived: {archived}</span>
    </div>
  );
}
