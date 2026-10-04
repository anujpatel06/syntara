'use client';

import { useEffect, useId, useLayoutEffect, useRef, useState, type HTMLAttributes, type JSX, type PointerEvent, type ReactNode, type Ref } from 'react';
import { ToggleButton } from 'react-aria-components';
import { IconPlayerPause, IconPlayerPlay } from '@syntara/icons';
import styles from './hero.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/** useLayoutEffect in the browser (so the copied theme lands before paint), useEffect on the server (no warning). */
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/** The hero's style. More arrive one at a time (RFC-003): orbit, gallery, cards. */
export type HeroVariant = 'aurora';

export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** The headline. */
  title: ReactNode;
  /** An optional second headline line in the muted text colour ("two-tone headline"). */
  titleSecondary?: ReactNode;
  /** One or two sentences under the headline. */
  description?: ReactNode;
  /** A small line above the headline: an Eyebrow, or a "what's new" Badge and Link. */
  eyebrow?: ReactNode;
  /** Buttons, a search field, chips: whatever the page offers next. At most two buttons reads best. */
  actions?: ReactNode;
  /** The decoration. Default `aurora`: soft lights in the brand's primary and accent drift behind the text. */
  variant?: HeroVariant;
  /** Level of the headline. Default 1, for a page's hero; use 2 or lower for a hero inside a longer page. */
  headingLevel?: 1 | 2 | 3 | 4;
  /**
   * `dark` (default): the hero always uses the brand's dark colours, so the lights glow, even on a light page.
   * `inherit`: it follows the page's scheme. Dark is a scope of its own: the hero copies the brand name from the
   * nearest themed ancestor (as overlays do, ADR-012), or takes `theme` to render dark on the server with no flash.
   */
  scheme?: 'dark' | 'inherit';
  /** The tenant id, when known, so a dark hero renders dark on the server. Otherwise it's read from the page. */
  theme?: string;
  /** Names the pause toggle. It's a toggle, so the name stays and its pressed state says paused. Default "Pause animation". */
  pauseLabel?: string;
  ref?: Ref<HTMLElement>;
}

/**
 * The opening section of a website page: a big headline, a sentence, and what to do next, over a moving decoration in
 * the brand's colours. Works in every brand, light and dark, and right to left.
 *
 * Motion meets WCAG 2.2.2: the lights drift on slow loops, so a pause toggle is always shown; with reduced motion asked
 * for, nothing moves and the toggle is removed. The decoration is aria-hidden and sits behind text only at low
 * strength; text is drawn on the flat page colour's contrast.
 */
export function Hero({
  title,
  titleSecondary,
  description,
  eyebrow,
  actions,
  variant = 'aurora',
  headingLevel = 1,
  pauseLabel = 'Pause animation',
  scheme = 'dark',
  theme,
  className,
  ref,
  ...rest
}: HeroProps): JSX.Element {
  const uid = useId();
  const Heading = `h${headingLevel}` as const;
  const [paused, setPaused] = useState(false);
  const own = useRef<HTMLElement | null>(null);

  // A dark scope needs the theme and the scheme on the same element (the token CSS keys off both). Copy the theme
  // and density from the nearest ancestor that has them, like the overlay helper does when an overlay opens.
  const [inherited, setInherited] = useState<{ theme?: string; density?: string }>({});
  useIsoLayoutEffect(() => {
    if (scheme !== 'dark' || theme) return;
    const host = own.current?.parentElement;
    setInherited({
      theme: host?.closest('[data-syntara-theme]')?.getAttribute('data-syntara-theme') ?? undefined,
      density: host?.closest('[data-syntara-density]')?.getAttribute('data-syntara-density') ?? undefined,
    });
  }, [scheme, theme]);
  const darkTheme = scheme === 'dark' ? (theme ?? inherited.theme) : undefined;

  // The pointer light: the pointer's position in the hero, as percentages, written as CSS variables.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    rest.onPointerMove?.(e);
    const el = own.current;
    if (paused || e.pointerType === 'touch' || !el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--_mx', `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
    el.style.setProperty('--_my', `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
  };

  const setRef = (node: HTMLElement | null) => {
    own.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) (ref as { current: HTMLElement | null }).current = node;
  };

  return (
    <section
      {...rest}
      ref={setRef}
      aria-labelledby={`${uid}-title`}
      className={cx(styles.root, className)}
      data-variant={variant}
      data-paused={paused || undefined}
      data-syntara-theme={darkTheme}
      data-syntara-scheme={darkTheme ? 'dark' : undefined}
      data-syntara-density={darkTheme ? inherited.density : undefined}
      onPointerMove={onPointerMove}
    >
      <div className={styles.lights} aria-hidden="true">
        <span className={cx(styles.light, styles.lightA)} />
        <span className={cx(styles.light, styles.lightB)} />
        <span className={cx(styles.light, styles.lightC)} />
        <span className={cx(styles.light, styles.lightPointer)} />
      </div>

      <div className={styles.copy}>
        {eyebrow != null && <div className={styles.eyebrow}>{eyebrow}</div>}
        <Heading id={`${uid}-title`} className={styles.title}>
          <span className={styles.line}>{title}</span>
          {/* A real space between the lines, so the heading reads "pays before", not "paysbefore". The block lines hide it. */}
          {titleSecondary != null && ' '}
          {titleSecondary != null && <span className={cx(styles.line, styles.secondary)}>{titleSecondary}</span>}
        </Heading>
        {description != null && <p className={styles.description}>{description}</p>}
        {actions != null && <div className={styles.actions}>{actions}</div>}
      </div>

      <ToggleButton className={styles.pause} isSelected={paused} onChange={setPaused} aria-label={pauseLabel}>
        {paused ? <IconPlayerPlay aria-hidden /> : <IconPlayerPause aria-hidden />}
      </ToggleButton>
    </section>
  );
}
