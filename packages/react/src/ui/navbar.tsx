'use client';

import { createContext, useContext, useEffect, useId, useRef, useState, type HTMLAttributes, type JSX, type ReactNode, type Ref } from 'react';
import { Button as RACButton, DialogTrigger, Link as RACLink, composeRenderProps, type LinkProps as RACLinkProps } from 'react-aria-components';
import { Sheet } from './sheet';
import styles from './navbar.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/** True inside a list the navbar draws (the links, a menu group), so each link renders its own list item. */
const InListContext = createContext(false);

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** The brand, centred on wide screens: a `NavbarLogo`, or any link with the logo in it. */
  logo?: ReactNode;
  /** The end group: a quiet `NavbarLink` ("Log in") and one `NavbarAction` pill. Shown again at the top of the menu. */
  actions?: ReactNode;
  /** The menu drawer's content: `NavbarMenuGroup`s of links. When set, a nine-dot button at the end opens it. */
  menu?: ReactNode;
  /** Names the menu button and titles the drawer. Default "Menu". */
  menuLabel?: string;
  /** Names the navigation landmark for screen readers. Default "Main". */
  navLabel?: string;
  /**
   * The folded state (the floating capsule). Leave it out and the bar folds itself once the page has scrolled under
   * it; set it to pin either state, for a still or a test.
   */
  isScrolled?: boolean;
  /** `NavbarLink`s for the start group. */
  children?: ReactNode;
  ref?: Ref<HTMLElement>;
}

/**
 * A site navigation bar after the floating-capsule pattern: invisible at rest, with the logo dead centre, links at
 * the start and the actions at the end; once the page scrolls under it, the row folds into a blurred capsule in the
 * brand's inverse colour and the menu button into a matching circle. Narrow bars become a glass strip with the logo
 * at the start, the links moving into the menu drawer. The page runs under the bar: it takes no room in flow.
 */
export function Navbar({
  logo,
  actions,
  menu,
  menuLabel = 'Menu',
  navLabel = 'Main',
  isScrolled,
  className,
  children,
  ref,
  ...rest
}: NavbarProps): JSX.Element {
  const sentinel = useRef<HTMLDivElement>(null);
  const [passed, setPassed] = useState(false);
  useEffect(() => {
    const el = sentinel.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    // The sentinel is the first thing in the scroller; once it has scrolled out of view, the page is under the bar.
    // Observed against the viewport, which a scrolling ancestor clips, so a bar inside a frame folds on that frame's scroll.
    const observer = new IntersectionObserver(([entry]) => setPassed(!entry!.isIntersecting), { threshold: 0 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const scrolled = isScrolled ?? passed;
  return (
    <>
      <div ref={sentinel} className={styles.sentinel} aria-hidden="true" />
      <header {...rest} ref={ref} data-scrolled={scrolled || undefined} className={cx(styles.root, className)}>
        <div className={styles.bar}>
          <div className={styles.row}>
            <div className={styles.capsule}>
              {logo != null && <div className={styles.logo}>{logo}</div>}
              <nav aria-label={navLabel} className={styles.nav}>
                <ul className={styles.links}>
                  <InListContext value>{children}</InListContext>
                </ul>
                {actions != null && <div className={styles.actions}>{actions}</div>}
              </nav>
            </div>
            {menu != null && (
              <DialogTrigger>
                <RACButton aria-label={menuLabel} className={styles.menuButton}>
                  <Dots />
                </RACButton>
                <Sheet side="end" title={menuLabel} className={styles.sheet}>
                  {actions != null && <div className={styles.menuActions}>{actions}</div>}
                  <div className={styles.menu}>{menu}</div>
                </Sheet>
              </DialogTrigger>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

/** The nine-dot menu glyph. Decorative: the button carries the name. */
function Dots(): JSX.Element {
  const dots: JSX.Element[] = [];
  for (const y of [2, 10, 18]) for (const x of [2, 10, 18]) dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r="2" />);
  return (
    <svg className={styles.dots} viewBox="0 0 20 20" aria-hidden="true" focusable="false" fill="currentColor">
      {dots}
    </svg>
  );
}

export interface NavbarLogoProps extends Omit<RACLinkProps, 'children'> {
  /** The brand: a wordmark as text (set in the heading font), or an image or SVG. */
  children: ReactNode;
}

/** The brand link for the navbar's `logo` slot. Give it an `aria-label` when the child is an image without words. */
export function NavbarLogo({ className, children, ...rest }: NavbarLogoProps): JSX.Element {
  return (
    <RACLink {...rest} className={composeRenderProps(className, (c) => cx(styles.logoLink, c))}>
      {children}
    </RACLink>
  );
}

export interface NavbarLinkProps extends RACLinkProps {
  /** Marks the link to the current page (`aria-current="page"`). */
  isCurrent?: boolean;
}

/** A text link in the navbar's start group or `actions`. Hovering one quietens the others in its group. */
export function NavbarLink({ isCurrent, className, ...rest }: NavbarLinkProps): JSX.Element {
  const link = (
    <RACLink
      {...rest}
      aria-current={isCurrent ? 'page' : undefined}
      className={composeRenderProps(className, (c) => cx(styles.link, c))}
    />
  );
  return useContext(InListContext) ? <li className={styles.item}>{link}</li> : link;
}

export type NavbarActionProps = RACLinkProps;

/**
 * The one pill button in `actions`: the brand's inverse colour at rest, and the page colour once the bar has folded
 * into its capsule. A link, so it works with client routers; pass `onPress` for an action instead of an `href`.
 */
export function NavbarAction({ className, ...rest }: NavbarActionProps): JSX.Element {
  return <RACLink {...rest} className={composeRenderProps(className, (c) => cx(styles.action, c))} />;
}

export interface NavbarMenuGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The group's label, e.g. "Explore". Names its list for screen readers. */
  title: ReactNode;
  /** `lg` (default): the drawer's big links. `sm`: a column of small ones. */
  size?: 'lg' | 'sm';
  /** `NavbarMenuLink`s. Each becomes a list item. */
  children: ReactNode;
}

/** A labelled list of links in the menu drawer. */
export function NavbarMenuGroup({ title, size = 'lg', className, children, ...rest }: NavbarMenuGroupProps): JSX.Element {
  const titleId = useId();
  return (
    <div {...rest} data-size={size} className={cx(styles.group, className)}>
      <p id={titleId} className={styles.groupTitle}>
        {title}
      </p>
      <ul aria-labelledby={titleId} className={styles.groupList}>
        <InListContext value>{children}</InListContext>
      </ul>
    </div>
  );
}

export interface NavbarMenuLinkProps extends Omit<RACLinkProps, 'children'> {
  /** Marks the link to the current page (`aria-current="page"`). */
  isCurrent?: boolean;
  children: ReactNode;
}

/** A link in a `NavbarMenuGroup`. On hover a short dash grows in front of it and its neighbours quieten. */
export function NavbarMenuLink({ isCurrent, className, children, ...rest }: NavbarMenuLinkProps): JSX.Element {
  const link = (
    <RACLink
      {...rest}
      aria-current={isCurrent ? 'page' : undefined}
      className={composeRenderProps(className, (c) => cx(styles.menuLink, c))}
    >
      <span className={styles.dash} aria-hidden="true" />
      <span className={styles.menuLinkText}>{children}</span>
    </RACLink>
  );
  return useContext(InListContext) ? <li className={styles.item}>{link}</li> : link;
}
