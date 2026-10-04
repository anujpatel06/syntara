'use client';

import { FileUpload } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <FileUpload
      label={t('Profile photo')}
      acceptedFileTypes={['image/png', 'image/jpeg']}
      maxSize={2 * 1024 * 1024}
      dropLabel={t('Drop a photo here or')}
      browseLabel={t('choose a file')}
      style={{ inlineSize: '100%', maxInlineSize: 480 }}
    />
  );
}
