'use client';

import { FileUpload } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <FileUpload
      label={t('Receipts')}
      description={t('Attach the receipts for this expense claim.')}
      acceptedFileTypes={['image/png', 'image/jpeg', 'application/pdf']}
      maxSize={10 * 1024 * 1024}
      allowsMultiple
      onChange={(files) => console.log(files.map((f) => f.name))}
      style={{ inlineSize: '100%', maxInlineSize: 480 }}
    />
  );
}
