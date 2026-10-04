'use client';

import { ComposerSelect, PromptComposer } from '@syntara/react';
import { IconBolt, IconBrain } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ inlineSize: '100%', maxInlineSize: '36rem', paddingBlock: 'var(--syntara-space-10)' }}>
      <PromptComposer
        glow="brand"
        placeholder={t('Ask about your account…')}
        startActions={
          <ComposerSelect
            label={t('Reasoning')}
            options={[
              { id: 'quick', label: t('Quick answer'), icon: <IconBolt /> },
              { id: 'deep', label: 'DeepThink', icon: <IconBrain /> },
            ]}
          />
        }
      />
    </div>
  );
}
