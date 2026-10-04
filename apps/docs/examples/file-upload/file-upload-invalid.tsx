'use client';

import { FileUpload } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 24, inlineSize: '100%', maxInlineSize: 480 }}>
      <FileUpload label={t('Identity document')} acceptedFileTypes={['.pdf']} isInvalid errorMessage={t('Upload a document to continue.')} />
      <FileUpload label={t('Contract')} description={t('Uploads are closed for this case.')} isDisabled />
    </div>
  );
}
