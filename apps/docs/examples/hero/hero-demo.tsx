'use client';

import { Button, Eyebrow, Hero } from '@syntara/react';
import { IconArrowRight, IconSparkles } from '@syntara/icons';

export default function Example() {
  return (
    <Hero
      headingLevel={2}
      eyebrow={
        <Eyebrow icon={<IconSparkles />} tone="brand">
          New: one wallet for every claim
        </Eyebrow>
      }
      title="Health cover that pays"
      titleSecondary="before you do"
      description="Book a consult, pay at the pharmacy and claim lab tests from one app, with cashless care at 4,000 partners."
      actions={
        <>
          <Button size="lg">
            Get started
            <IconArrowRight aria-hidden />
          </Button>
          <Button size="lg" variant="outline">
            See plans
          </Button>
        </>
      }
      style={{ inlineSize: '100%' }}
    />
  );
}
