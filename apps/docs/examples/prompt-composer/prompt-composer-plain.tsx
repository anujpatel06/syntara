'use client';

import { useState } from 'react';
import { ComposerButton, PromptComposer } from '@syntara/react';
import { IconPaperclip } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [sent, setSent] = useState<string[]>([]);
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-3)', inlineSize: '100%', maxInlineSize: '36rem' }}>
      <PromptComposer
        glow={false}
        placeholder={t('Write a note to the team…')}
        onSubmit={(text) => setSent((list) => [...list, text])}
        startActions={<ComposerButton aria-label={t('Attach a file')} icon={<IconPaperclip />} />}
      />
      {sent.length > 0 && (
        <p style={{ margin: 0, color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-sm)' }}>
          Sent {sent.length}: “{sent.at(-1)}”
        </p>
      )}
    </div>
  );
}
