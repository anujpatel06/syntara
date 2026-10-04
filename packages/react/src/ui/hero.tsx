'use client';

import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type JSX, type PointerEvent, type ReactNode, type Ref } from 'react';
import { ToggleButton } from 'react-aria-components';
import { IconPlayerPause, IconPlayerPlay } from '@syntara/icons';
import styles from './hero.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/** useLayoutEffect in the browser (so the copied theme lands before paint), useEffect on the server (no warning). */
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/** The hero's style (RFC-003). */
export type HeroVariant = 'aurora' | 'orbit' | 'gallery' | 'cards';

/** A card for `variant="cards"`: a title and a small label straight on a brand colour, over a picture. */
export interface HeroCard {
  title: string;
  meta?: string;
  /** A picture that runs edge to edge under the title. Decorative: no alt text. */
  image?: string;
}

/** Card fan: how far (degrees) the fan tilts either way as the pointer crosses the hero. */
const TILT = 4;

/** A picture for `variant="gallery"`. The wall is decoration, so pictures carry no alt text. */
export interface HeroImage {
  src: string;
}

/** Gallery: cards around the full circle, two of them brand-colour tiles opposite each other (one is always near view). */
const CARDS = 22;
const BRAND_TILES = new Set([5, 16]);
/** How far (degrees) the wall leans either way as the pointer crosses the hero. */
const LEAN = 10;

const RINGS = 7;

/** Orbit's star field from a fixed seed, so the server and the browser draw the same stars. */
const STARS = (() => {
  let seed = 7;
  const next = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  return Array.from({ length: 48 }, () => ({ x: next() * 100, y: next() * 100, d: next(), big: next() > 0.85 }));
})();

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
  /**
   * The style. `aurora` (default): soft lights in the brand's primary and accent drift behind centred text.
   * `orbit`: text on the start side; rings of the brand colour ripple out around `actions` on the far side.
   * `gallery`: a curved wall of `images` turns slowly between the headline and the description.
   * `cards`: centred text over a fan of up to five `cards` rising from the bottom edge, with name-tagged `cursors`.
   */
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
  /** Pictures for `variant="gallery"`, used in order and repeated to fill 20 cards. Ignored by other styles. */
  images?: HeroImage[];
  /** Up to five cards for `variant="cards"`, fanned out from the middle. Decoration: hidden from assistive tech. */
  cards?: HeroCard[];
  /** Up to two names on cursors that drift beside the headline (`variant="cards"`, wide screens), as if people were working alongside. */
  cursors?: string[];
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
  images = [],
  cards = [],
  cursors = [],
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
  // Keep following them: when the page switches brand or density (a theme picker, the docs preview), the hero has to
  // switch too, or it stays in the brand it first saw.
  useIsoLayoutEffect(() => {
    if (scheme !== 'dark' || theme) return;
    const host = own.current?.parentElement;
    if (!host) return;
    const themed = host.closest('[data-syntara-theme]');
    const dense = host.closest('[data-syntara-density]');
    const read = () =>
      setInherited({
        theme: themed?.getAttribute('data-syntara-theme') ?? undefined,
        density: dense?.getAttribute('data-syntara-density') ?? undefined,
      });
    read();
    const observer = new MutationObserver(read);
    for (const el of new Set([themed, dense])) {
      if (el) observer.observe(el, { attributes: true, attributeFilter: ['data-syntara-theme', 'data-syntara-density'] });
    }
    return () => observer.disconnect();
  }, [scheme, theme]);
  const darkTheme = scheme === 'dark' ? (theme ?? inherited.theme) : undefined;

  // Follow the pointer, written as CSS variables so React doesn't re-render per move: as percentages for aurora's
  // pointer light, and as -1…1 per axis for orbit's rings to lean toward.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    rest.onPointerMove?.(e);
    const el = own.current;
    if (paused || e.pointerType === 'touch' || !el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--_mx', `${(x * 100).toFixed(1)}%`);
    el.style.setProperty('--_my', `${(y * 100).toFixed(1)}%`);
    el.style.setProperty('--_px', (x * 2 - 1).toFixed(3));
    el.style.setProperty('--_py', (y * 2 - 1).toFixed(3));
    el.style.setProperty('--_hero-lean', `${((x * 2 - 1) * LEAN).toFixed(1)}deg`);
    el.style.setProperty('--_hero-tilt', `${((x * 2 - 1) * TILT).toFixed(2)}deg`);
  };
  const onPointerLeave = (e: PointerEvent<HTMLElement>) => {
    rest.onPointerLeave?.(e);
    own.current?.style.setProperty('--_px', '0');
    own.current?.style.setProperty('--_py', '0');
    own.current?.style.setProperty('--_hero-lean', '0deg');
    own.current?.style.setProperty('--_hero-tilt', '0deg');
  };

  // Gallery: pictures fill the non-brand cards in order, repeating if there are fewer than 20.
  let picture = 0;
  const wall =
    variant === 'gallery' ? (
      <div className={styles.stage} aria-hidden="true" inert>
        <div className={styles.wall}>
          {Array.from({ length: CARDS }, (_, i) => {
            const brand = BRAND_TILES.has(i) || images.length === 0;
            const img = brand ? null : images[picture++ % images.length]!;
            return (
              <div key={i} className={styles.card} data-kind={brand ? 'brand' : 'image'} style={{ '--i': i } as CSSProperties}>
                {img && <img src={img.src} alt="" loading="lazy" decoding="async" draggable={false} className={styles.image} />}
              </div>
            );
          })}
        </div>
      </div>
    ) : null;

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
      onPointerLeave={onPointerLeave}
    >
      {variant === 'aurora' && (
        <div className={styles.lights} aria-hidden="true">
          <span className={cx(styles.light, styles.lightA)} />
          <span className={cx(styles.light, styles.lightB)} />
          <span className={cx(styles.light, styles.lightC)} />
          <span className={cx(styles.light, styles.lightPointer)} />
        </div>
      )}
      {variant === 'orbit' && (
        <div className={styles.stars} aria-hidden="true">
          {STARS.map((star, i) => (
            <span
              key={i}
              className={styles.star}
              data-big={star.big || undefined}
              style={{ insetInlineStart: `${star.x}%`, insetBlockStart: `${star.y}%`, '--_d': star.d } as CSSProperties}
            />
          ))}
        </div>
      )}

      <div className={styles.inner}>
        <div className={styles.copy}>
          {eyebrow != null && <div className={styles.eyebrow}>{eyebrow}</div>}
          <Heading id={`${uid}-title`} className={styles.title}>
            <span className={styles.line}>{title}</span>
            {/* A real space between the lines, so the heading reads "pays before", not "paysbefore". The block lines hide it. */}
            {titleSecondary != null && ' '}
            {titleSecondary != null && <span className={cx(styles.line, styles.secondary)}>{titleSecondary}</span>}
          </Heading>
          {variant !== 'gallery' && description != null && <p className={styles.description}>{description}</p>}
          {(variant === 'aurora' || variant === 'cards') && actions != null && <div className={styles.actions}>{actions}</div>}
        </div>
        {wall}
        {variant === 'cards' &&
          cursors.slice(0, 2).map((name, i) => (
            <span key={name} className={styles.cursor} data-n={i} aria-hidden="true">
              <svg viewBox="0 0 16 16" className={styles.cursorArrow} focusable="false">
                <path d="M2 1.5 14 6.4 8.6 8.6 6.4 14Z" />
              </svg>
              <span className={styles.cursorName}>{name}</span>
            </span>
          ))}
        {variant === 'cards' && cards.length > 0 && (
          <div className={styles.fan} aria-hidden="true">
            {cards.slice(0, 5).map((card, i, shown) => (
              <div
                key={i}
                className={styles.fanCard}
                data-n={i}
                // --k runs -2…2 from the middle card, centred however many cards are shown.
                style={{ '--k': i - (shown.length - 1) / 2 } as CSSProperties}
              >
                <span className={styles.fanLabel}>
                  <span className={styles.fanTitle}>{card.title}</span>
                  {card.meta != null && <span className={styles.fanMeta}>{card.meta}</span>}
                </span>
                {card.image != null && (
                  <img src={card.image} alt="" loading="lazy" decoding="async" draggable={false} className={styles.fanImage} />
                )}
              </div>
            ))}
          </div>
        )}
        {variant === 'gallery' && (description != null || actions != null) && (
          <div className={styles.below}>
            {description != null && <p className={styles.description}>{description}</p>}
            {actions != null && <div className={styles.actions}>{actions}</div>}
          </div>
        )}
        {variant === 'orbit' && (
          <div className={styles.core}>
            <div className={styles.rings} aria-hidden="true">
              {Array.from({ length: RINGS }, (_, i) => (
                <span key={i} className={styles.ring} style={{ '--i': RINGS - i } as CSSProperties} />
              ))}
            </div>
            {actions != null && <div className={styles.coreActions}>{actions}</div>}
          </div>
        )}
      </div>

      <ToggleButton className={styles.pause} isSelected={paused} onChange={setPaused} aria-label={pauseLabel}>
        {paused ? <IconPlayerPlay aria-hidden /> : <IconPlayerPause aria-hidden />}
      </ToggleButton>
    </section>
  );
}
