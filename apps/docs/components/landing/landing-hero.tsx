'use client';

import { Button, Hero, ThemeScope, ToggleButton, type HeroProps } from '@syntara/react';
import { IconPlayerPause, IconPlayerPlay, IconSearch } from '@syntara/icons';
import Link from 'next/link';
import { preload } from 'react-dom';
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';

/** Measure before paint in the browser, so a slide never shows at a guessed size first. */
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
import { InstallCommand } from '@/components/home/install-command';
import type { LandingTenant } from './landing-data';
import styles from './landing.module.css';

const SLIDE_MS = 5200;
/** The one-install package (packages/syntara): components, icons, every brand's tokens and the theme engine. */
const HERO_INSTALL = 'npm install syntara';
/** Each Hero is laid out at this desktop width, then scaled to the window, so the slides show the real wide layout. */
const DESKTOP = 1200;
const PREVIEW_H = 760;

/* Sample pictures for the gallery and card fan: the same Unsplash-licensed set the Hero docs use (hero-gallery.tsx). */
const pic = (name: string) => `/hero-gallery/${name}.webp`;
const GALLERY = [
  '01-floating-cubes-and-glowing-yello',
  '03-blue-layered-waves',
  '04-spiral-of-dark-blue-blades',
  '05-metallic-cubes-blue-and-purple',
  '08-floating-cube',
  '09-flower-with-a-rainbow',
  '10-3d-purple-flower',
  '12-orange-orb-on-blue',
].map((n) => ({ src: pic(n) }));

/**
 * The four Hero styles the window cycles through, each worn by a different tenant and written in that tenant's own
 * language: the headline, line and buttons are the tenant's website copy from content.json `hero`. Gallery comes
 * first; Hindi and right-to-left Arabic follow straight after, so the first two slides already show both scripts.
 */
const SLIDES: ReadonlyArray<{ name: string; tenant: string; props: Partial<HeroProps> }> = [
  { name: 'Gallery', tenant: 'haat', props: { variant: 'gallery', images: GALLERY } },
  { name: 'Orbit', tenant: 'qamar', props: { variant: 'orbit' } },
  { name: 'Aurora', tenant: 'care', props: { variant: 'aurora' } },
  {
    name: 'Card fan',
    tenant: 'harbor',
    props: {
      variant: 'cards',
      cards: [
        { title: 'Policies', meta: '3 active', image: pic('12-orange-orb-on-blue') },
        { title: 'Claims', meta: '1 in progress', image: pic('02-pastel-spheres-on-gradient') },
        { title: 'Payments', meta: 'Next: 1 Nov', image: pic('15-colourful-3d-object') },
        { title: 'Documents', meta: 'All signed', image: pic('17-abstract-3d-design') },
        { title: 'Renewals', meta: '14 October', image: pic('18-pink-and-purple-object') },
      ],
      cursors: ['Priya', 'Omar'],
    },
  },
];

/** The tenant's own website copy as Hero props. */
function heroCopy(t: LandingTenant | undefined): Pick<HeroProps, 'title' | 'titleSecondary' | 'description' | 'actions'> {
  if (!t) return { title: '' };
  return {
    title: t.hero.headline,
    titleSecondary: t.hero.headlineTail,
    description: t.hero.body,
    actions: (
      <>
        <Button size="lg">{t.hero.primary}</Button>
        <Button size="lg" variant="outline">
          {t.hero.secondary}
        </Button>
      </>
    ),
  };
}

/** Lays its child out DESKTOP px wide and PREVIEW_H tall (less if the box is shorter), then scales it to the box's width. */
function Scaled({ children }: { children: (height: number) => ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState({ scale: 0.6, height: 1100 });
  useIsoLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = (w: number, h: number) => {
      const scale = w / DESKTOP;
      setFit({ scale, height: Math.min(PREVIEW_H, Math.ceil(h / scale)) });
    };
    measure(el.clientWidth || DESKTOP, el.clientHeight || PREVIEW_H);
    const ro = new ResizeObserver(([e]) => {
      const w = e?.contentRect.width ?? DESKTOP;
      const h = e?.contentRect.height ?? DESKTOP;
      const scale = w / DESKTOP;
      /* the docs' preview height (760) at most: the window's lower third sits behind the front ridge */
      setFit({ scale, height: Math.min(PREVIEW_H, Math.ceil(h / scale)) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={box} className={styles.scaled}>
      <div style={{ inlineSize: DESKTOP, transform: `scale(${fit.scale})` }}>{children(fit.height)}</div>
    </div>
  );
}

/**
 * The hero: the Milky Way, the headline, and an app window sitting on a planet's lit edge, which glows from
 * behind it (scripts/landscapes/galaxy.py). The window shows the Hero
 * component itself, cycling through its four styles the way Fora's window cycles through communities, each style
 * in a different tenant's dark theme. The sidebar names the style on screen.
 *
 * The window is a picture of the component, so it is inert and hidden from assistive tech; a sentence says what it
 * shows. All four slides stay mounted, measured before they paint, so a switch is a crossfade rather than a fresh
 * mount (pictures loading, a size settling); the slides off screen have their animations paused in CSS. The
 * slideshow has a pause toggle (WCAG 2.2.2), and starts paused under reduced motion.
 */
export function LandingHero({ tenants }: { tenants: LandingTenant[] }) {
  /* The Gallery slide shows first, and its pictures are lazy inside the Hero: fetch them up front so the first
     screen opens on a full gallery rather than two pictures in a dark panel. About 10 KB each. */
  for (const g of GALLERY) preload(g.src, { as: 'image' });
  const [index, setIndex] = useState(0);
  const current = useRef(0);
  const [paused, setPaused] = useState(false);
  const byId = new Map(tenants.map((t) => [t.id, t]));
  const names = new Map(tenants.map((t) => [t.id, t.name]));

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true);
  }, []);
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      current.current = (current.current + 1) % SLIDES.length;
      setIndex(current.current);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className={styles.hero} aria-labelledby="landing-title">
      <div className={`${styles.layer} ${styles.sky}`} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- a static export; the picture is decoration */}
        <img src="/landing/galaxy-sky.webp" alt="" data-speed="0.31" fetchPriority="high" />
      </div>

      <div className={styles.heroCopy}>
        <span className={`${styles.tag} ${styles.tagPlain}`}>A multi-brand design system</span>
        <h1 id="landing-title" className={styles.h1}>
          One design system.
          <br />
          Every brand.
        </h1>
        <p className={styles.lede}>
          One set of components, tokens and rules that adapts to any brand, language and direction.
        </p>
        <div className={styles.heroActions}>
          <Link href="/docs/installation" className={styles.cta}>
            Get started
          </Link>
          <InstallCommand command={HERO_INSTALL} label="Copy the install command" className={styles.heroInstall} />
        </div>
      </div>

      <p className="visually-hidden">
        Below, the Hero component cycles through its four styles, each in a different brand and that brand’s language:{' '}
        {SLIDES.map((s) => `${s.name} in ${names.get(s.tenant) ?? s.tenant} (${byId.get(s.tenant)?.languageName ?? ''})`).join(', ')}.
      </p>
      <div className={styles.app} aria-hidden="true" inert data-speed="0.1" data-rise="96">
        <div className={styles.appSide}>
          <div className={styles.appSearch}>
            <span>Search</span>
            <IconSearch size={16} />
          </div>
          <div className={styles.appGroup}>Hero styles</div>
          {SLIDES.map((s, i) => (
            <span
              key={s.name}
              className={styles.appNav}
              data-on={i === index ? '' : undefined}
              data-syntara-theme={s.tenant}
              data-syntara-scheme="dark"
            >
              <span className={styles.dot} />
              {s.name}
              <span className={styles.appNavMeta}>
                {names.get(s.tenant)} · {byId.get(s.tenant)?.languageName}
              </span>
            </span>
          ))}
          <div className={styles.appGroup}>Component</div>
          <span className={styles.appNav}>
            <code className={styles.appCode}>{`<Hero\n  variant="${SLIDES[index]?.props.variant ?? 'aurora'}" />`}</code>
          </span>
        </div>

        <div className={styles.stage}>
          {SLIDES.map((s, i) => (
              <ThemeScope
                key={s.name}
                theme={s.tenant}
                scheme="dark"
                locale={byId.get(s.tenant)?.locale}
                className={styles.cover}
                data-on={i === index ? '' : undefined}
              >
                <Scaled>
                  {(height) => <Hero headingLevel={3} {...heroCopy(byId.get(s.tenant))} {...s.props} style={{ minBlockSize: height }} />}
                </Scaled>
              </ThemeScope>
          ))}
          <div className={styles.dots}>
            {SLIDES.map((s, i) => (
              <i key={s.name} data-on={i === index ? '' : undefined} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.heroFade} aria-hidden="true" />

      <ToggleButton
        className={styles.pause}
        size="sm"
        isSelected={paused}
        onChange={setPaused}
        aria-label="Pause the Hero slideshow"
      >
        {paused ? <IconPlayerPlay aria-hidden /> : <IconPlayerPause aria-hidden />}
      </ToggleButton>
    </section>
  );
}
