'use client';

import { Badge, Button, Hero } from '@syntara/react';
import { IconArrowRight } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

/*
 * variant="cards": centred copy over a fan of up to five cards, each on a different solved brand colour, with two
 * name-tagged cursors drifting beside the headline on wide screens. Hover the fan to spread it.
 * Sample pictures: Unsplash License (free to use, commercial use included), credited anyway — mymind, Milad Fakurian,
 * Olga Deeva, Tiago Wolf, SIMON LEE.
 */
export default function Example() {
  const t = useCopy();
  return (
    <Hero
      variant="cards"
      headingLevel={2}
      eyebrow={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--syntara-space-2)', color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-sm)' }}>
          <Badge tone="brand" size="sm">
            {t('New')}
          </Badge>
          {t('Shared boards for every team')}
        </span>
      }
      title={t('Plan it together')}
      titleSecondary={t('ship it on time')}
      description={t('One workspace for briefs, budgets and approvals, so nothing waits in someone’s inbox.')}
      actions={
        <Button size="lg">
          {t('Try it free')}
          <IconArrowRight aria-hidden />
        </Button>
      }
      cards={[
        { title: t('Briefs'), meta: t('12 this week'), image: '/hero-gallery/12-orange-orb-on-blue.webp' },
        { title: t('Budgets'), meta: t('On track'), image: '/hero-gallery/02-pastel-spheres-on-gradient.webp' },
        { title: t('Approvals'), meta: t('3 waiting'), image: '/hero-gallery/15-colourful-3d-object.webp' },
        { title: t('Calendar'), meta: t('Next: Friday'), image: '/hero-gallery/17-abstract-3d-design.webp' },
        { title: t('Reports'), meta: t('Updated today'), image: '/hero-gallery/18-pink-and-purple-object.webp' },
      ]}
      cursors={['Priya', 'Omar']}
      style={{ inlineSize: '100%' }}
    />
  );
}
