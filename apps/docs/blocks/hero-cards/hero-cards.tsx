'use client';

/**
 * Hero: Card fan — centred copy over a fan of five cards rising from the bottom edge, each a different shade of the
 * brand with a picture and one of the product's sections. Two name-tagged cursors drift beside the headline, as if
 * people were working alongside. Spec: docs/design/marketing-blocks.md.
 *
 * Interaction: the fan opens wider while the pointer is over it, the card under the pointer lifts, and the whole fan
 * tilts a little toward the pointer. The cards are decoration (aria-hidden, nothing focusable inside); hovering them
 * is a flourish, never the only way to anything.
 *
 * Motion: the cursors drift on a loop, so a pause button is always shown (WCAG 2.2.2); with reduced motion asked for,
 * nothing moves. Copy is the shared hero content (./hero-cards.content.ts).
 */

import { Badge, Button } from '@syntara/react';
import { IconArrowRight, IconArrowUpRight, IconPlayerPause, IconPlayerPlay } from '@syntara/icons';
import { useId, useRef, useState, type CSSProperties, type JSX, type MouseEvent, type PointerEvent } from 'react';
import { GALLERY_IMAGES, heroContent, type HeroContent } from './hero-cards.content';
import styles from './hero-cards.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/** Demo links point at "#": keep them from navigating (or scrolling a host page to the top). */
const stay = (e: MouseEvent<Element>) => e.preventDefault();

/** Which sample pictures the five cards use (objects that read well small; indexes into GALLERY_IMAGES). */
const PICTURES = [12, 1, 15, 17, 18];
/** How far (degrees) the fan tilts either way as the pointer crosses the hero. */
const TILT = 4;

export interface HeroCardsProps {
  /** All copy. Defaults to the English sample in ./hero-cards.content.ts. */
  content?: HeroContent;
  /** Level of the headline (default 1). */
  headingLevel?: 1 | 2 | 3 | 4;
  /** Copy for the pause control, so it can be translated with the rest. */
  pauseLabels?: { pause: string; play: string };
  className?: string;
}

export function HeroCards({
  content = heroContent,
  headingLevel = 1,
  pauseLabels = { pause: 'Pause animation', play: 'Play animation' },
  className,
}: HeroCardsProps): JSX.Element {
  const uid = useId();
  const h = content.hero;
  const Heading = `h${headingLevel}` as const;
  // Shown as the whole page (level 1) the hero is the page's main landmark; inside a bigger page, a section.
  const Root = headingLevel > 1 ? 'section' : 'main';
  const monogram = Array.from(content.product.name.trim())[0] ?? '';
  const images = h.images?.length ? h.images : PICTURES.map((i) => GALLERY_IMAGES[i]!);
  const sections = content.nav.slice(0, 5);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLElement>(null);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (paused || e.pointerType === 'touch' || !root.current) return;
    const r = root.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    root.current.style.setProperty('--_tilt', `${(x * TILT).toFixed(2)}deg`);
  };
  const onPointerLeave = () => root.current?.style.setProperty('--_tilt', '0deg');

  return (
    <Root
      ref={root}
      className={cx(styles.root, className)}
      aria-labelledby={`${uid}-title`}
      data-paused={paused || undefined}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <header className={styles.menu}>
        <a href="#" onClick={stay} className={styles.logo}>
          <span className={styles.mark} aria-hidden="true">
            {monogram}
          </span>
          <span className={styles.logoName}>{content.product.name}</span>
        </a>
        <nav aria-label={h.menu.label} className={styles.menuNav}>
          <ul className={styles.menuLinks}>
            {h.menu.links.map((link, i) => (
              <li key={link}>
                <a href="#" onClick={stay} className={styles.menuLink} aria-current={i === 0 ? 'page' : undefined}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.menuEnd}>
          <a href="#" onClick={stay} className={styles.signIn}>
            {h.menu.signIn}
          </a>
          <Button size="sm" variant="secondary" className={styles.menuCta}>
            {h.menu.cta}
          </Button>
        </div>
      </header>

      <div className={styles.copy}>
        {h.announcement && (
          <p className={styles.eyebrow}>
            <Badge tone="brand" size="sm">
              {h.announcement.badge}
            </Badge>
            <span>{h.announcement.text}</span>
          </p>
        )}
        <Heading id={`${uid}-title`} className={styles.headline}>
          <span className={styles.line}>{h.headline}</span>
          {h.headlineTail && <span className={cx(styles.line, styles.tail)}>{h.headlineTail}</span>}
        </Heading>
        {h.body && <p className={styles.body}>{h.body}</p>}
        <div className={styles.buttons}>
          <Button size="lg" className={styles.primary}>
            {h.primary}
            <IconArrowRight aria-hidden />
          </Button>
        </div>
      </div>

      {(h.cursors ?? []).slice(0, 2).map((name, i) => (
        <span key={name} className={styles.cursor} data-n={i} aria-hidden="true">
          <svg viewBox="0 0 16 16" className={styles.cursorArrow} focusable="false">
            <path d="M2 1.5 14 6.4 8.6 8.6 6.4 14Z" />
          </svg>
          <span className={styles.cursorName}>{name}</span>
        </span>
      ))}

      <div className={styles.fan} aria-hidden="true">
        {sections.map((section, i) => {
          const stat = content.overview.stats[i % content.overview.stats.length]!;
          return (
            <div key={section} className={styles.card} style={{ '--k': i - 2 } as CSSProperties} data-n={i}>
              <span className={styles.cardLabel}>
                <span className={styles.cardTitle}>{section}</span>
                <span className={styles.cardMeta}>{stat.label}</span>
              </span>
              <img src={images[i % images.length]!.src} alt="" loading="lazy" decoding="async" draggable={false} className={styles.cardImage} />
              {i === 2 && (
                <span className={styles.cardCta}>
                  {h.primary}
                  <span className={styles.cardCtaIcon}>
                    <IconArrowUpRight />
                  </span>
                </span>
              )}
            </div>
          );
        })}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className={styles.pause}
        aria-label={paused ? pauseLabels.play : pauseLabels.pause}
        aria-pressed={paused}
        onPress={() => setPaused((p) => !p)}
      >
        {paused ? <IconPlayerPlay aria-hidden /> : <IconPlayerPause aria-hidden />}
      </Button>
    </Root>
  );
}
