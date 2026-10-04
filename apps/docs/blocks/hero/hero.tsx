'use client';

/**
 * Hero — the top of a product's website: a menu bar, a "what's new" pill, a two-tone headline, two actions and a
 * reassurance line, then a picture of the product, over the brand ribbon. Spec: docs/design/marketing-blocks.md.
 *
 * The ribbon is made from the brand's own primary and accent, so every tenant gets its own. It sits on the far side
 * from the text (wide) or just above the picture (narrow); no text is ever drawn on it.
 *
 * The picture is real Syntara UI drawn from the tenant's dashboard sample, so each brand's hero shows its own product.
 * It is a picture, not a working app: `inert` (no tab stops) and one `role="img"` label from the content.
 *
 * `headingLevel` (default 1) is the level of the headline. Above 1 the hero is a section inside another page.
 */

import { Badge, Button, ProgressBar, StatTile, StatTileGroup } from '@syntara/react';
import { IconArrowLeft, IconArrowRight } from '@syntara/icons';
import { Fragment, useId, type JSX, type MouseEvent, type ReactNode } from 'react';
import { useLocale } from 'react-aria-components';
import { heroContent, type HeroContent, type HeroStat } from './hero.content';
import styles from './hero.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

type Level = 1 | 2 | 3 | 4;

/** Demo links point at "#": keep them from navigating (or scrolling a host page to the top). */
const stay = (e: MouseEvent<Element>) => e.preventDefault();

/** `*word*` → <em>word</em>: emphasis written in the copy, not in the component. */
function emphasis(text: string): ReactNode {
  const parts = text.split('*');
  if (parts.length < 3) return text;
  return parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>));
}

export interface HeroProps {
  /** All copy. Defaults to the English sample in ./hero.content.ts. */
  content?: HeroContent;
  /** Level of the headline (default 1). */
  headingLevel?: Level;
  className?: string;
}

export function Hero({ content = heroContent, headingLevel = 1, className }: HeroProps): JSX.Element {
  const uid = useId();
  const h = content.hero;
  const Heading = `h${headingLevel}` as const;
  // Shown as the whole page (level 1) the hero is the page's main landmark; inside a bigger page, a section.
  const Root = headingLevel > 1 ? 'section' : 'main';
  // The pill's arrow points the way the text reads; direction comes from the locale (React Aria). Button mirrors its
  // own arrow icons, so the secondary button keeps IconArrowRight.
  const Arrow = useLocale().direction === 'rtl' ? IconArrowLeft : IconArrowRight;
  const monogram = Array.from(content.product.name.trim())[0] ?? '';

  return (
    <Root className={cx(styles.root, className)} aria-labelledby={`${uid}-title`}>
      <div className={cx(styles.ribbon, styles.ribbonWide)} aria-hidden="true" />

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
        <div className={styles.menuEnd}>
          <a href="#" onClick={stay} className={cx(styles.menuLink, styles.signIn)}>
            {h.menu.signIn}
          </a>
          <Button size="sm">{h.menu.cta}</Button>
        </div>
      </header>

      <div className={styles.inner}>
        <div className={styles.copy}>
          {h.announcement && (
            <a href="#" onClick={stay} className={cx(styles.announcement, styles.enter)}>
              <Badge tone="brand" size="sm">
                {h.announcement.badge}
              </Badge>
              <span className={styles.announcementText}>{h.announcement.text}</span>
              <Arrow aria-hidden className={styles.arrow} />
            </a>
          )}
          <Heading id={`${uid}-title`} className={cx(styles.headline, styles.enter)}>
            {emphasis(h.headline)}
            {h.headlineTail && (
              <>
                {' '}
                <span className={styles.tail}>{h.headlineTail}</span>
              </>
            )}
          </Heading>
          {h.body && <p className={cx(styles.body, styles.enter)}>{h.body}</p>}
          <div className={cx(styles.actions, styles.enter)}>
            <div className={styles.buttons}>
              <Button size="lg">{h.primary}</Button>
              <Button size="lg" variant="outline">
                {h.secondary}
                <IconArrowRight aria-hidden />
              </Button>
            </div>
            {h.trust && <p className={styles.trust}>{h.trust}</p>}
          </div>
        </div>

        <ProductPicture content={content} />
      </div>
    </Root>
  );
}

function ProductPicture({ content }: { content: HeroContent }): JSX.Element {
  const { overview, locale, currency } = content;
  const format = (s: HeroStat) =>
    new Intl.NumberFormat(locale, {
      style: s.format === 'currency' ? 'currency' : s.format === 'percent' ? 'percent' : 'decimal',
      ...(s.format === 'currency' ? { currency, maximumFractionDigits: 0 } : {}),
    }).format(s.value);
  const money = (n: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0, signDisplay: 'exceptZero' }).format(n);
  const monogram = Array.from(content.product.name.trim())[0] ?? '';

  return (
    <div className={cx(styles.stage, styles.enter)}>
      <div className={cx(styles.ribbon, styles.ribbonNarrow)} aria-hidden="true" />
      <div className={styles.picture} role="img" aria-label={content.hero.pictureLabel}>
        {/* Everything inside is decoration for sighted readers; the label above is what assistive tech gets. */}
        <div className={styles.window} inert>
          <div className={styles.side}>
            <span className={styles.appBrand}>
              <span className={styles.appMark}>{monogram}</span>
              <span>{content.product.name}</span>
            </span>
            <span className={styles.sideNav}>
              {content.nav.map((item, i) => (
                <span key={item} className={styles.sideItem} data-current={i === 0 || undefined}>
                  {item}
                </span>
              ))}
            </span>
          </div>
          <div className={styles.screen}>
            <p className={styles.greeting}>{overview.greeting}</p>
            <StatTileGroup className={styles.stats}>
              {overview.stats.slice(0, 3).map((s) => (
                <StatTile key={s.label} label={s.label} value={format(s)} size="sm" variant="outline" />
              ))}
            </StatTileGroup>
            <div className={styles.list}>
              <p className={styles.listTitle}>{overview.table.title}</p>
              <ul className={styles.rows}>
                {overview.table.rows.slice(0, 4).map((r) => (
                  <li key={r.title + r.meta} className={styles.row}>
                    <span className={styles.rowText}>
                      <span className={styles.rowTitle}>{r.title}</span>
                      <span className={styles.rowMeta}>{r.meta}</span>
                    </span>
                    <span className={styles.rowAmount}>{money(r.amount)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.float} inert>
          <ProgressBar label={overview.progress.title} value={overview.progress.value * 100} showValue size="sm" />
          <p className={styles.floatCaption}>{overview.progress.label}</p>
        </div>
      </div>
    </div>
  );
}
