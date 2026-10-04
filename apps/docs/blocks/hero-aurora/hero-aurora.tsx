'use client';

/**
 * Hero: Aurora — soft, blurred lights in the brand's colours drifting behind a centred headline, a big search bar and
 * quick-pick chips. One light follows the pointer with a lag. Spec: docs/design/marketing-blocks.md.
 *
 * The search is real: type and press Enter or the button; a chip puts its words in the search. The lights are
 * decoration (aria-hidden) and sit behind text only at low strength.
 *
 * Motion: the lights drift on slow loops, so a pause button is always shown (WCAG 2.2.2); with reduced motion asked
 * for, they stand still and the pointer light stays put. Copy is the shared hero content (./hero-aurora.content.ts).
 *
 * No logo strip: the reference ends with other companies' logos, and showing those would claim a relationship the
 * product doesn't have (docs/design/marketing-blocks.md, "Generic").
 */

import { Button, Chip, ChipGroup, type Selection } from '@syntara/react';
import { IconPlayerPause, IconPlayerPlay, IconSearch } from '@syntara/icons';
import { useId, useRef, useState, type FormEvent, type JSX, type MouseEvent, type PointerEvent } from 'react';
import { Input, SearchField } from 'react-aria-components';
import { heroContent, type HeroContent } from './hero-aurora.content';
import styles from './hero-aurora.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/** Demo links point at "#": keep them from navigating (or scrolling a host page to the top). */
const stay = (e: MouseEvent<Element>) => e.preventDefault();

export interface HeroAuroraProps {
  /** All copy. Defaults to the English sample in ./hero-aurora.content.ts. */
  content?: HeroContent;
  /** Level of the headline (default 1). */
  headingLevel?: 1 | 2 | 3 | 4;
  /** Copy for the pause control, so it can be translated with the rest. */
  pauseLabels?: { pause: string; play: string };
  className?: string;
}

export function HeroAurora({
  content = heroContent,
  headingLevel = 1,
  pauseLabels = { pause: 'Pause animation', play: 'Play animation' },
  className,
}: HeroAuroraProps): JSX.Element {
  const uid = useId();
  const h = content.hero;
  const Heading = `h${headingLevel}` as const;
  // Shown as the whole page (level 1) the hero is the page's main landmark; inside a bigger page, a section.
  const Root = headingLevel > 1 ? 'section' : 'main';
  const monogram = Array.from(content.product.name.trim())[0] ?? '';
  const [paused, setPaused] = useState(false);
  const [query, setQuery] = useState('');
  const [picked, setPicked] = useState<Selection>(new Set());
  const root = useRef<HTMLElement>(null);

  // The pointer light: the pointer's position in the hero, as percentages, written as CSS variables.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (paused || e.pointerType === 'touch' || !root.current) return;
    const r = root.current.getBoundingClientRect();
    root.current.style.setProperty('--_mx', `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
    root.current.style.setProperty('--_my', `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
  };

  // Stands in for running the search.
  const onSearch = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  const onPick = (keys: Selection) => {
    setPicked(keys);
    const key = keys === 'all' ? undefined : [...keys][0];
    if (key != null) setQuery(String(key));
  };

  return (
    <Root
      ref={root}
      className={cx(styles.root, className)}
      aria-labelledby={`${uid}-title`}
      data-paused={paused || undefined}
      onPointerMove={onPointerMove}
    >
      <div className={styles.lights} aria-hidden="true">
        <span className={cx(styles.light, styles.lightA)} />
        <span className={cx(styles.light, styles.lightB)} />
        <span className={cx(styles.light, styles.lightC)} />
        <span className={cx(styles.light, styles.lightPointer)} />
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
          <Button size="sm" variant="outline" className={styles.pill}>
            {h.menu.signIn}
          </Button>
          <Button size="sm" variant="contrast" className={styles.pill}>
            {h.menu.cta}
          </Button>
        </div>
      </header>

      <div className={styles.copy}>
        <Heading id={`${uid}-title`} className={styles.headline}>
          <span className={styles.line}>{h.headline}</span>
          {h.headlineTail && <span className={styles.line}>{h.headlineTail}</span>}
        </Heading>
        {h.body && <p className={styles.body}>{h.body}</p>}

        {h.search && (
          <>
            <form className={styles.bar} onSubmit={onSearch} role="search">
              <SearchField aria-label={h.search.label} value={query} onChange={setQuery} className={styles.field}>
                <IconSearch aria-hidden className={styles.searchIcon} />
                <Input placeholder={h.search.placeholder} className={styles.input} />
              </SearchField>
              <Button type="submit" variant="contrast" className={styles.searchButton}>
                {h.search.button}
              </Button>
            </form>
            <ChipGroup
              mode="choice"
              aria-label={h.search.chipsLabel}
              selectedKeys={picked}
              onSelectionChange={onPick}
              className={styles.chips}
            >
              {h.search.chips.map((chip) => (
                <Chip key={chip} id={chip}>
                  {chip}
                </Chip>
              ))}
            </ChipGroup>
          </>
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
