'use client';

/**
 * Hero: Gallery — a curved wall of pictures seen from inside a drum, turning slowly behind the copy: small and far
 * straight ahead, tall and near at the sides. The headline sits above the wall's middle row, a short line and a slim
 * ask-anything bar below it. Spec: docs/design/marketing-blocks.md.
 *
 * The pictures come from `hero.images` (sample: GALLERY_IMAGES, 20 Unsplash images credited in hero.content.ts).
 * Two cards carry the brand's mark on its primary colour, so the wall still reads as the brand.
 *
 * The curve is pure CSS: each card's angle is its slot plus one turning angle (an animated @property), and its
 * position comes from sin()/cos() of that angle. Moving the pointer across the hero leans the whole wall.
 *
 * Motion: an ambient loop, so a pause button is always shown (WCAG 2.2.2); with reduced motion asked for, the wall
 * stands still. The wall is decoration (aria-hidden, inert). The ask bar is a real text field and button.
 */

import { Button } from '@syntara/react';
import { IconArrowRight, IconPlayerPause, IconPlayerPlay, IconSparkles } from '@syntara/icons';
import { useId, useRef, useState, type CSSProperties, type FormEvent, type JSX, type MouseEvent, type PointerEvent } from 'react';
import { Input, TextField } from 'react-aria-components';
import { GALLERY_IMAGES, heroContent, type HeroContent } from './hero-gallery.content';
import styles from './hero-gallery.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/** Demo links point at "#": keep them from navigating (or scrolling a host page to the top). */
const stay = (e: MouseEvent<Element>) => e.preventDefault();

/** Cards around the full circle: 20 pictures (the sample set, so none repeats) and 2 brand marks. */
const CARDS = 22;
/** Slots that show the brand's mark instead of a picture: opposite each other, so one is always near view. */
const MARKS = new Set([5, 16]);
/** How far (degrees) the wall leans either way as the pointer crosses the hero. */
const LEAN = 10;

export interface HeroGalleryProps {
  /** All copy. Defaults to the English sample in ./hero-gallery.content.ts. */
  content?: HeroContent;
  /** Level of the headline (default 1). */
  headingLevel?: 1 | 2 | 3 | 4;
  /** Copy for the pause control, so it can be translated with the rest. */
  pauseLabels?: { pause: string; play: string };
  className?: string;
}

export function HeroGallery({
  content = heroContent,
  headingLevel = 1,
  pauseLabels = { pause: 'Pause animation', play: 'Play animation' },
  className,
}: HeroGalleryProps): JSX.Element {
  const uid = useId();
  const h = content.hero;
  const Heading = `h${headingLevel}` as const;
  // Shown as the whole page (level 1) the hero is the page's main landmark; inside a bigger page, a section.
  const Root = headingLevel > 1 ? 'section' : 'main';
  const monogram = Array.from(content.product.name.trim())[0] ?? '';
  const images = h.images?.length ? h.images : GALLERY_IMAGES;
  const [paused, setPaused] = useState(false);
  const [ask, setAsk] = useState('');
  const root = useRef<HTMLElement>(null);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (paused || e.pointerType === 'touch' || !root.current) return;
    const r = root.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    root.current.style.setProperty('--_lean', `${(x * LEAN).toFixed(1)}deg`);
  };
  const onPointerLeave = () => root.current?.style.setProperty('--_lean', '0deg');
  // Stands in for sending the question to the product.
  const onAsk = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAsk('');
  };

  let picture = 0;

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
          {content.product.name}
        </a>
        <div className={styles.menuEnd}>
          <a href="#" onClick={stay} className={styles.signIn}>
            {h.menu.signIn}
          </a>
          <Button size="sm">{h.menu.cta}</Button>
        </div>
      </header>

      <Heading id={`${uid}-title`} className={styles.headline}>
        <span className={styles.line}>{h.headline}</span>
        {h.headlineTail && <span className={styles.line}>{h.headlineTail}</span>}
      </Heading>

      <div className={styles.stage} aria-hidden="true" inert>
        <div className={styles.wall}>
          {Array.from({ length: CARDS }, (_, i) => {
            const mark = MARKS.has(i);
            const img = mark ? null : images[picture++ % images.length]!;
            return (
              <div key={i} className={styles.card} data-kind={mark ? 'mark' : 'image'} style={{ '--i': i } as CSSProperties}>
                {img ? (
                  <img src={img.src} alt="" loading="lazy" decoding="async" draggable={false} className={styles.image} />
                ) : (
                  <span className={styles.bigMark}>{monogram}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.ask}>
        {h.body && <p className={styles.body}>{h.body}</p>}
        {h.prompt && (
          <form className={styles.bar} onSubmit={onAsk}>
            <IconSparkles aria-hidden className={styles.barIcon} />
            <TextField aria-label={h.prompt.label} value={ask} onChange={setAsk} className={styles.field}>
              <Input placeholder={h.prompt.placeholder} className={styles.input} />
            </TextField>
            <Button type="submit" size="icon" variant="secondary" aria-label={h.prompt.send} className={styles.send}>
              {/* Button mirrors arrow icons in right-to-left itself. */}
              <IconArrowRight aria-hidden />
            </Button>
          </form>
        )}
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
