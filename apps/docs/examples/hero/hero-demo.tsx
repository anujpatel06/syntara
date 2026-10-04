'use client';

import { Button, Eyebrow, Hero } from '@syntara/react';
import { IconArrowRight, IconSparkles } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Hero
      headingLevel={2}
      eyebrow={
        <Eyebrow icon={<IconSparkles />} tone="brand">
          {t('New: one wallet for every claim')}
        </Eyebrow>
      }
      title={t('Health cover that pays')}
      titleSecondary={t('before you do')}
      description={t('Book a consult, pay at the pharmacy and claim lab tests from one app, with cashless care at partner clinics.')}
      actions={
        <>
          <Button size="lg">
            {t('Get started')}
            <IconArrowRight aria-hidden />
          </Button>
          <Button size="lg" variant="outline">
            {t('See plans')}
          </Button>
        </>
      }
      style={{ inlineSize: '100%' }}
    />
  );
}
