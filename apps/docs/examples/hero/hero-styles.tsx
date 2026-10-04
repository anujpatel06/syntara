'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Button, Hero, type HeroVariant } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

/* Every style at a glance: each Hero is laid out at a desktop width, then scaled down to fit its tile, so the
   thumbnails show the real wide layout. Pick a brand above to see them all change. */

const DESKTOP = 1200;

// Sample pictures for the gallery style: Unsplash License, credited in hero-gallery.tsx.
const IMAGES = [
  '01-floating-cubes-and-glowing-yello',
  '03-blue-layered-waves',
  '04-spiral-of-dark-blue-blades',
  '05-metallic-cubes-blue-and-purple',
  '08-floating-cube',
  '09-flower-with-a-rainbow',
  '10-3d-purple-flower',
  '12-orange-orb-on-blue',
].map((name) => ({ src: `/hero-gallery/${name}.webp` }));

/** A tile that lays its child out DESKTOP px wide and scales it to the tile's width. */
function Scaled({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale((entry?.contentRect.width ?? DESKTOP) / DESKTOP));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div
      ref={box}
      style={{
        position: 'relative',
        aspectRatio: '1200 / 760',
        overflow: 'hidden',
        borderRadius: 'var(--syntara-radius-container)',
        boxShadow: '0 0 0 var(--syntara-hairline) var(--syntara-color-border-subtle), var(--syntara-shadow-raised)',
      }}
    >
      <div style={{ inlineSize: DESKTOP, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', insetBlockStart: 0, left: 0 }}>
        {children}
      </div>
    </div>
  );
}

export default function Example() {
  const t = useCopy();
  const styles: Array<{ variant: HeroVariant; name: string; example: string; hero: ReactNode }> = [
    {
      variant: 'aurora',
      example: 'hero-demo',
      name: 'Aurora',
      hero: (
        <Hero
          headingLevel={3}
          title={t('Health cover that pays')}
          titleSecondary={t('before you do')}
          description={t('Book a consult, pay at the pharmacy and claim lab tests from one app, with cashless care at partner clinics.')}
          actions={<Button size="lg">{t('Get started')}</Button>}
          style={{ minBlockSize: 760 }}
        />
      ),
    },
    {
      variant: 'orbit',
      example: 'hero-orbit',
      name: 'Orbit',
      hero: (
        <Hero
          variant="orbit"
          headingLevel={3}
          title={t('Money that moves')}
          titleSecondary={t('at your pace')}
          description={t('Save, spend and invest from one account, with every rupee where you can see it.')}
          actions={<Button size="lg">{t('Open an account')}</Button>}
          style={{ minBlockSize: 760 }}
        />
      ),
    },
    {
      variant: 'gallery',
      example: 'hero-gallery',
      name: 'Gallery',
      hero: (
        <Hero
          variant="gallery"
          images={IMAGES}
          headingLevel={3}
          title={t('Every idea, one canvas')}
          description={t('Collect references, sketch with your team and ship the version everyone agreed on.')}
          actions={<Button size="lg">{t('Start a board')}</Button>}
          style={{ minBlockSize: 760 }}
        />
      ),
    },
    {
      variant: 'cards',
      example: 'hero-cards',
      name: 'Card fan',
      hero: (
        <Hero
          variant="cards"
          headingLevel={3}
          title={t('Plan it together')}
          titleSecondary={t('ship it on time')}
          description={t('One workspace for briefs, budgets and approvals, so nothing waits in someone’s inbox.')}
          actions={<Button size="lg">{t('Try it free')}</Button>}
          cards={[
            { title: t('Briefs'), meta: t('12 this week'), image: '/hero-gallery/12-orange-orb-on-blue.webp' },
            { title: t('Budgets'), meta: t('On track'), image: '/hero-gallery/02-pastel-spheres-on-gradient.webp' },
            { title: t('Approvals'), meta: t('3 waiting'), image: '/hero-gallery/15-colourful-3d-object.webp' },
            { title: t('Calendar'), meta: t('Next: Friday'), image: '/hero-gallery/17-abstract-3d-design.webp' },
            { title: t('Reports'), meta: t('Updated today'), image: '/hero-gallery/18-pink-and-purple-object.webp' },
          ]}
          cursors={['Priya', 'Omar']}
          style={{ minBlockSize: 760 }}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        // Two per row: each column is at least half the width (less the gap), so a third never fits; one per row on phones.
        gridTemplateColumns: 'repeat(auto-fit, minmax(max(14rem, calc(50% - var(--syntara-space-6))), 1fr))',
        gap: 'var(--syntara-space-8) var(--syntara-space-6)',
        inlineSize: '100%',
      }}
    >
      {styles.map((s) => (
        // Each tile opens that style's own page, which has the brand, scheme and direction controls. The scaled hero
        // inside is a picture of the style (inert, hidden), so the link holds no other controls and is named by the
        // style.
        <a
          key={s.variant}
          href={`/docs/components/hero/${s.example}`}
          aria-label={`${s.name}: open this style with its brand and mode controls`}
          className="hero-style-tile"
          style={{ display: 'grid', gap: 'var(--syntara-space-2)', color: 'inherit', textDecoration: 'none', borderRadius: 'var(--syntara-radius-container)' }}
        >
          <div aria-hidden inert>
            <Scaled>{s.hero}</Scaled>
          </div>
          <span style={{ color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-sm)' }}>
            <strong style={{ color: 'var(--syntara-color-text-default)', fontWeight: 'var(--syntara-font-weight-medium)' }}>
              {s.name}
            </strong>{' '}
            <code>variant=&quot;{s.variant}&quot;</code> →
          </span>
        </a>
      ))}
    </div>
  );
}
