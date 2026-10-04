'use client';

/**
 * Hero: Orbit — rounded rings of the brand colour spreading out from the main action, over a field of faint stars.
 * The rings ripple outward slowly and lean toward the pointer; the stars twinkle. Copy sits on the start side, the
 * rings on the far side. Spec: docs/design/marketing-blocks.md.
 *
 * Motion: one ambient loop, so a pause button is always shown (WCAG 2.2.2). With reduced motion asked for, nothing
 * moves and the button is not needed. The rings and stars are decoration (aria-hidden); no text sits on a strong ring.
 *
 * Copy is the shared hero content (./hero-orbit.content.ts): menu, headline (+ tail), body and the primary action.
 */

import { Button } from '@syntara/react';
import { IconPlayerPause, IconPlayerPlay } from '@syntara/icons';
import { useId, useRef, useState, type CSSProperties, type JSX, type MouseEvent, type PointerEvent } from 'react';
import { heroContent, type HeroContent } from './hero-orbit.content';
import styles from './hero-orbit.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/** Demo links point at "#": keep them from navigating (or scrolling a host page to the top). */
const stay = (e: MouseEvent<Element>) => e.preventDefault();

const RINGS = 7;

/** Star positions from a fixed seed, so server and client render the same field. */
const STARS = (() => {
  let s = 7;
  const next = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  return Array.from({ length: 48 }, () => ({ x: next() * 100, y: next() * 100, d: next(), big: next() > 0.85 }));
})();

export interface HeroOrbitProps {
  /** All copy. Defaults to the English sample in ./hero-orbit.content.ts. */
  content?: HeroContent;
  /** Level of the headline (default 1). */
  headingLevel?: 1 | 2 | 3 | 4;
  /** Copy for the pause control, so it can be translated with the rest. */
  pauseLabels?: { pause: string; play: string };
  className?: string;
}

export function HeroOrbit({
  content = heroContent,
  headingLevel = 1,
  pauseLabels = { pause: 'Pause animation', play: 'Play animation' },
  className,
}: HeroOrbitProps): JSX.Element {
  const uid = useId();
  const h = content.hero;
  const Heading = `h${headingLevel}` as const;
  // Shown as the whole page (level 1) the hero is the page's main landmark; inside a bigger page, a section.
  const Root = headingLevel > 1 ? 'section' : 'main';
  const monogram = Array.from(content.product.name.trim())[0] ?? '';
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLElement>(null);

  // Lean toward the pointer: -1…1 on each axis, written as CSS variables so React doesn't re-render per move.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (paused || e.pointerType === 'touch' || !root.current) return;
    const r = root.current.getBoundingClientRect();
    root.current.style.setProperty('--_px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    root.current.style.setProperty('--_py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };
  const onPointerLeave = () => {
    root.current?.style.setProperty('--_px', '0');
    root.current?.style.setProperty('--_py', '0');
  };

  return (
    <Root
      ref={root}
      className={cx(styles.root, className)}
      aria-labelledby={`${uid}-title`}
      data-paused={paused || undefined}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className={styles.stars} aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className={styles.star}
            data-big={s.big || undefined}
            style={{ insetInlineStart: `${s.x}%`, insetBlockStart: `${s.y}%`, '--_d': s.d } as CSSProperties}
          />
        ))}
      </div>

      <header className={styles.menu}>
        <a href="#" onClick={stay} className={styles.logo}>
          <span className={styles.mark} aria-hidden="true">
            {monogram}
          </span>
          {content.product.name}
        </a>
        <nav aria-label={h.menu.label} className={styles.menuNav}>
          <ul className={styles.menuLinks}>
            {h.menu.links.map((link) => (
              <li key={link}>
                <a href="#" onClick={stay} className={styles.menuLink}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#" onClick={stay} className={cx(styles.menuLink, styles.signIn)}>
          {h.menu.signIn}
        </a>
      </header>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <Heading id={`${uid}-title`} className={styles.headline}>
            {h.headline}
            {h.headlineTail && (
              <>
                {' '}
                <span className={styles.tail}>{h.headlineTail}</span>
              </>
            )}
          </Heading>
          {h.body && <p className={styles.body}>{h.body}</p>}
        </div>

        <div className={styles.core}>
          <div className={styles.rings} aria-hidden="true">
            {Array.from({ length: RINGS }, (_, i) => (
              <span key={i} className={styles.ring} style={{ '--i': RINGS - i } as CSSProperties} />
            ))}
          </div>
          <Button size="lg" variant="secondary" className={styles.cta}>
            {h.primary}
          </Button>
        </div>
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
