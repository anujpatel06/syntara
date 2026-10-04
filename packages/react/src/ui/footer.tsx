'use client';

import { useCallback, useId, useLayoutEffect, useRef, useState, type HTMLAttributes, type JSX, type ReactNode, type Ref } from 'react';
import { Link as RACLink, composeRenderProps, type LinkProps as RACLinkProps } from 'react-aria-components';
import styles from './footer.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/* The wordmark is drawn in SVG user units at this font size, then the viewBox scales it to the footer's width. */
const FS = 100;
/* The box per script, in units above (−) or below (+) the baseline. Latin is cut through the lower body of its
   capitals, so the word reads as a horizon. Arabic, Hebrew and Indic letters carry their shape near the baseline
   (Arabic bowls, the Devanagari body under its headline), so a Latin cut would leave only dots and ascenders:
   they are cut just under the baseline instead, with more room above for tall alefs and matras. */
const CROP = {
  latin: { top: -0.78 * FS, cut: -0.16 * FS },
  joining: { top: -0.98 * FS, cut: 0.06 * FS },
} as const;

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /**
   * The name drawn oversized across the top, cropped at the bottom like a horizon. Decorative: hidden from screen
   * readers, so name the brand again in `aside` or the columns if it matters there. Leave it out for no wordmark.
   */
  wordmark?: string;
  /** The start column: an address, social links, a status pill. */
  aside?: ReactNode;
  /** Names the link columns for screen readers. Default "Footer". */
  navLabel?: string;
  /** `FooterColumn`s. */
  children?: ReactNode;
  ref?: Ref<HTMLElement>;
}

/**
 * A site footer: an oversized, cropped wordmark lit from the top-start corner, a hairline horizon, then an aside and
 * columns of links. It lays itself out by its own width (container queries), so it works in a sidebar layout too.
 */
export function Footer({ wordmark, aside, navLabel = 'Footer', className, children, ref, ...rest }: FooterProps): JSX.Element {
  return (
    <footer {...rest} ref={ref} className={cx(styles.footer, className)}>
      {wordmark ? <Wordmark text={wordmark} /> : null}
      <div className={styles.body}>
        {aside ? <div className={styles.aside}>{aside}</div> : null}
        <nav aria-label={navLabel} className={styles.columns}>
          {children}
        </nav>
      </div>
    </footer>
  );
}

/* Scripts whose letters join (Arabic, Hebrew, Devanagari and other Indic scripts): splitting the word into letters
   would break the shaping, so these light up as one piece. */
const JOINING = /[\u0590-\u08FF\u0900-\u0DFF\uFB1D-\uFDFF\uFE70-\uFEFF]/;

interface Glyph {
  ch: string;
  x: number;
}

function Wordmark({ text }: { text: string }): JSX.Element {
  const id = useId().replace(/:/g, '');
  const textRef = useRef<SVGTextElement>(null);
  // A first guess so the server render has the right shape; corrected once the real font has laid the word out.
  const [width, setWidth] = useState(() => text.length * 0.62 * FS);
  // Where each letter starts in the whole word's layout, so kerning survives the split. Empty until measured.
  const [glyphs, setGlyphs] = useState<Glyph[]>([]);

  const measure = useCallback(() => {
    const el = textRef.current;
    if (!el || typeof el.getComputedTextLength !== 'function') return;
    const w = el.getComputedTextLength();
    if (w <= 0) return;
    setWidth(w);
    if (JOINING.test(text)) {
      setGlyphs([{ ch: text, x: 0 }]);
      return;
    }
    const next: Glyph[] = [];
    let unit = 0; // getStartPositionOfChar counts UTF-16 code units
    for (const ch of Array.from(text)) {
      if (ch.trim()) next.push({ ch, x: el.getStartPositionOfChar(unit).x });
      unit += ch.length;
    }
    setGlyphs(next);
  }, [text]);

  useLayoutEffect(() => {
    measure();
    // Measure again whenever a font arrives: a late web font moves every letter, and the lit outline must stay on its glyph.
    let live = true;
    const fonts = document.fonts;
    const again = () => live && measure();
    fonts?.ready.then(again);
    fonts?.addEventListener?.('loadingdone', again);
    // And whenever a brand or scheme changes on the page: the heading font may change with no font event at all.
    const brand = new MutationObserver(() => requestAnimationFrame(again));
    brand.observe(document.documentElement, {
      subtree: true,
      attributeFilter: ['data-syntara-theme', 'data-syntara-scheme', 'data-syntara-density', 'lang'],
    });
    return () => {
      live = false;
      fonts?.removeEventListener?.('loadingdone', again);
      brand.disconnect();
    };
  }, [measure]);

  const joining = JOINING.test(text);
  const { top: TOP, cut: CUT } = joining ? CROP.joining : CROP.latin;
  const h = CUT - TOP;
  const light = `url(#${id}-${joining ? 'light-word' : 'light'})`;
  return (
    // Also measured as the pointer arrives, the one moment the outlines show: it catches any font swap no event reported.
    <div className={styles.wordmark} aria-hidden="true" onPointerEnter={measure}>
      <svg className={styles.svg} viewBox={`0 ${TOP} ${width} ${h}`} preserveAspectRatio="xMidYMax meet" focusable="false">
        <defs>
          {/* The letters' face: a faint tint of the text colour, a touch darker at the cut. */}
          <linearGradient id={`${id}-face`} x1="0" y1={TOP} x2="0" y2={CUT} gradientUnits="userSpaceOnUse">
            <stop offset="0" className={styles.faceTop} />
            <stop offset="1" className={styles.faceBottom} />
          </linearGradient>
          {/* The light, measured on each letter's own box: it enters at the letter's top-start corner and is gone by
              its far side, so whichever letter is lit, it is lit the same way. */}
          <radialGradient id={`${id}-light`} cx="0.15" cy="0" r="1.5">
            <stop offset="0" className={styles.lightHot} />
            <stop offset="0.55" className={styles.lightWarm} />
            <stop offset="1" className={styles.lightOff} />
          </radialGradient>
          {/* The cut: everything below the horizon is hidden, so the letters end on the hairline. Only the bottom edge
              cuts; the glow can still spill above and beside the word. */}
          <clipPath id={`${id}-cut`}>
            <rect x={-FS} y={TOP - FS} width={width + 2 * FS} height={CUT - TOP + FS} />
          </clipPath>
          {/* Joined scripts light the whole word as one piece, so the same falloff would leave most of it dark: an
              evener light, still brightest at the top-start corner. */}
          <radialGradient id={`${id}-light-word`} cx="0.1" cy="0" r="1.2">
            <stop offset="0" className={styles.lightHot} />
            <stop offset="1" className={styles.lightWord} />
          </radialGradient>
          <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={FS * 0.04} />
          </filter>
        </defs>
        <g className={styles.letters} clipPath={`url(#${id}-cut)`}>
          {/* Each letter carries its own light, off until the pointer is over it: a blurred glow and a sharp edge, both
              strokes drawn behind the face. The face covers their inner half, so only light outside the letter shows,
              and in joined scripts the seams where glyphs overlap stay hidden under it. The last copy in each group is
              an invisible hit area the size of the glyph. */}
          {glyphs.map((g, i) => (
            <g key={i} className={styles.glyph}>
              <text x={g.x} y="0" stroke={light} filter={`url(#${id}-glow)`} fontSize={FS} className={cx(styles.text, styles.glow)}>
                {g.ch}
              </text>
              <text x={g.x} y="0" stroke={light} fontSize={FS} className={cx(styles.text, styles.edge)}>
                {g.ch}
              </text>
              <text x={g.x} y="0" fontSize={FS} className={cx(styles.text, styles.hit)}>
                {g.ch}
              </text>
            </g>
          ))}
          {/* The whole word, laid out once: the opaque face on top, and the ruler the letters above are placed by. The
              pointer passes through it to the letters' hit areas. */}
          <text ref={textRef} x="0" y="0" fill={`url(#${id}-face)`} fontSize={FS} className={cx(styles.text, styles.face)}>
            {text}
          </text>
        </g>
      </svg>
    </div>
  );
}

export interface FooterColumnProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The column's heading, e.g. "Resources". Names its list for screen readers. */
  title: ReactNode;
  /** `FooterLink`s. Each becomes a list item. */
  children: ReactNode;
}

/** One titled column of links. */
export function FooterColumn({ title, className, children, ...rest }: FooterColumnProps): JSX.Element {
  const titleId = useId();
  return (
    <div {...rest} className={cx(styles.column, className)}>
      <p id={titleId} className={styles.columnTitle}>
        {title}
      </p>
      <ul aria-labelledby={titleId} className={styles.list}>
        {children}
      </ul>
    </div>
  );
}

export type FooterLinkProps = RACLinkProps;

/** A link in a `FooterColumn`. Renders its own list item. Built on React Aria's Link, so it works with client routers. */
export function FooterLink({ className, ...rest }: FooterLinkProps): JSX.Element {
  return (
    <li className={styles.item}>
      <RACLink {...rest} className={composeRenderProps(className, (c) => cx(styles.link, c))} />
    </li>
  );
}

export interface FooterSocialLinkProps extends Omit<RACLinkProps, 'children'> {
  /** Names the destination, e.g. "Newsletter". Required: the link shows only an icon. */
  'aria-label': string;
  /** The icon. */
  children: ReactNode;
}

/** A round icon link for a social or contact channel. Put several in a `div` in the footer's `aside`. */
export function FooterSocialLink({ className, children, ...rest }: FooterSocialLinkProps): JSX.Element {
  return (
    <RACLink {...rest} className={composeRenderProps(className, (c) => cx(styles.social, c))}>
      <span className={styles.socialIcon} aria-hidden="true">
        {children}
      </span>
    </RACLink>
  );
}

export interface FooterStatusProps extends HTMLAttributes<HTMLParagraphElement> {
  /** The dot's colour. The words carry the meaning; the dot only repeats it. Default `success`. */
  tone?: 'success' | 'warning' | 'danger' | 'neutral';
  /** What the status is, in words, e.g. "All systems operational". */
  children: ReactNode;
}

/** A quiet pill with a status dot, for a service status line. */
export function FooterStatus({ tone = 'success', className, children, ...rest }: FooterStatusProps): JSX.Element {
  return (
    <p {...rest} data-tone={tone} className={cx(styles.status, className)}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </p>
  );
}
