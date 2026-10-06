'use client';

import { IconCopy, IconSearch } from '@syntara/icons';
import type { Icon } from '@syntara/icons';
import * as NicheIcons from '@syntara/icons/niche';
import {
  Button,
  EmptyState,
  SearchField,
  Select,
  SelectItem,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  toast,
} from '@syntara/react';
import { useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type RefObject } from 'react';
import { Button as AriaButton } from 'react-aria-components';
import { copyText } from '@/components/mdx/code-frame';
import type { IconGroup } from './icon-data';
import styles from './icons.module.css';

/** Every export of @syntara/icons that is an icon (createIcon stamps `iconName`; the helper itself has none). */
const ICONS = NicheIcons as unknown as Record<string, Icon | undefined>;
const iconOf = (name: string): Icon | undefined => (ICONS[name]?.iconName ? ICONS[name] : undefined);

const SIZES = ['16', '20', '24', '32'] as const;

const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

/**
 * The browser jumped to #icons-<group> before this component hydrated, using the CSS fallback for the toolbar's
 * height — which is a row short once the toolbar wraps. With the measured height in place, put the heading back
 * under the toolbar. Only if it is still about where the browser left it: a reload that restored some other
 * scroll position is left alone.
 */
function landOnFragment(host: HTMLElement): void {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const heading = id ? document.getElementById(id) : null;
  if (!heading || !host.contains(heading)) return;
  const landing =
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingBlockStart || '0') +
    parseFloat(getComputedStyle(heading).scrollMarginBlockStart || '0');
  const { top } = heading.getBoundingClientRect();
  if (top > 0 && top < landing - 1) heading.scrollIntoView({ behavior: 'instant', block: 'start' });
}

/**
 * Publishes the sticky toolbar's height as `--_toolbar-block-size` on `root`, so a group heading's
 * scroll-margin can clear it. It is measured, not written down: the toolbar wraps to two rows on a
 * tablet and three on a phone, and the stroke slider's value label changes width as you drag.
 */
function useToolbarBlockSize(
  root: RefObject<HTMLElement | null>,
  toolbar: RefObject<HTMLElement | null>,
): void {
  useLayoutEffect(() => {
    const host = root.current;
    const el = toolbar.current;
    if (!host || !el || typeof ResizeObserver === 'undefined') return;
    let landed = false;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      host.style.setProperty(
        '--_toolbar-block-size',
        `${entry.borderBoxSize[0]?.blockSize ?? entry.contentRect.height}px`,
      );
      if (!landed) {
        landed = true;
        landOnFragment(host);
      }
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      host.style.removeProperty('--_toolbar-block-size');
    };
  }, [root, toolbar]);
}

export interface NicheGalleryProps {
  groups: IconGroup[];
  /** The package's default stroke (read from create-icon.tsx). */
  defaultStroke: number;
}

/**
 * The niche pack's searchable sheet: a toolbar (search, domain, size, stroke), then every icon in its domain on a hairline grid.
 * A cell copies its import and confirms with a toast.
 */
export function NicheGallery({ groups, defaultStroke }: NicheGalleryProps) {
  const [query, setQuery] = useState('');
  const [size, setSize] = useState<string>('24');
  const [domain, setDomain] = useState<string>('all');
  const [stroke, setStroke] = useState(defaultStroke);
  const galleryRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  useToolbarBlockSize(galleryRef, toolbarRef);

  const domainItems = useMemo(() => [{ id: 'all', name: 'All domains' }, ...groups.map((g) => ({ id: g.id, name: `${g.label} (${g.names.length})` }))], [groups]);
  const total = groups.reduce((n, g) => n + g.names.length, 0);
  const filtered = useMemo(() => {
    const q = normalise(query);
    const inDomain = domain === 'all' ? groups : groups.filter((g) => g.id === domain);
    if (!q) return inDomain;
    return inDomain
      .map((g) => ({ ...g, names: g.names.filter((n) => normalise(n.replace(/^Icon/, '')).includes(q)) }))
      .filter((g) => g.names.length > 0);
  }, [groups, query, domain]);
  const shown = filtered.reduce((n, g) => n + g.names.length, 0);

  const copy = async (name: string) => {
    const line = `import { ${name} } from '@syntara/icons/niche';`;
    const ok = await copyText(line);
    if (ok) {
      toast({ title: `Copied ${name}`, description: <code className={styles.toastCode}>{line}</code>, tone: 'success' });
    } else {
      toast({ title: 'Couldn’t copy', description: `Your browser blocked the clipboard. The import is: ${line}`, tone: 'danger' });
    }
  };

  const sheetStyle = { '--_size': `${size}px`, '--_stroke': stroke } as CSSProperties;

  return (
    <div ref={galleryRef} className={styles.gallery}>
      <div ref={toolbarRef} className={styles.toolbar}>
        <SearchField
          aria-label="Search niche icons"
          placeholder="Search niche icons…"
          value={query}
          onChange={setQuery}
          className={styles.search}
        />
        <div className={styles.tools}>
          <Select
            label="Domain"
            className={styles.domain}
            items={domainItems}
            selectedKey={domain}
            onSelectionChange={(k) => k != null && setDomain(String(k))}
          >
            {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
          </Select>
          <ToggleButtonGroup
            aria-label="Preview size in pixels"
            size="sm"
            disallowEmptySelection
            selectedKeys={[size]}
            onSelectionChange={(keys) => {
              const [k] = keys;
              if (k != null) setSize(String(k));
            }}
          >
            {SIZES.map((s) => (
              <ToggleButton key={s} id={s} className={styles.sizeToggle}>
                {s}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Slider
            label="Stroke"
            minValue={1}
            maxValue={2}
            step={0.25}
            value={stroke}
            onChange={(v) => setStroke(Array.isArray(v) ? (v[0] ?? defaultStroke) : v)}
            formatOptions={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
            className={styles.stroke}
          />
        </div>
      </div>
      <p className={styles.count} role="status">
        {query ? (
          <>
            <strong>{shown}</strong> of {total} icons match “{query}”
          </>
        ) : domain !== 'all' ? (
          <>
            <strong>{shown}</strong> icons in this domain, shown at {size}px with a {stroke.toFixed(2)} stroke. Click one
            to copy its import.
          </>
        ) : (
          <>
            <strong>{total}</strong> icons, shown at {size}px with a {stroke.toFixed(2)} stroke. Click one to copy its
            import.
          </>
        )}
      </p>

      {shown === 0 ? (
        <EmptyState
          className={styles.empty}
          icon={<IconSearch />}
          title={`No icon called “${query}”`}
          description="Icons are named for the object, not the action: try “kidney” rather than “renal”, or “tooth” rather than “dental”."
          action={
            <Button variant="outline" onPress={() => setQuery('')}>
              Clear search
            </Button>
          }
          size="md"
          level={3}
        />
      ) : (
        filtered.map((g) => (
          <section key={g.id} className={styles.group} aria-labelledby={`niche-${g.id}`}>
            <h3 id={`niche-${g.id}`} className={styles.groupTitle}>
              {g.label}
              <span className={styles.groupCount}>{g.names.length}</span>
            </h3>
            <ul className={styles.sheet} style={sheetStyle}>
              {g.names.map((name) => {
                const Glyph = iconOf(name);
                if (!Glyph) return null;
                return (
                  <li key={name} className={styles.cell}>
                    <AriaButton className={styles.cellButton} onPress={() => copy(name)} aria-describedby="icon-copy-hint">
                      <span className={styles.glyph}>
                        <Glyph />
                      </span>
                      <span className={styles.cellName}>{Glyph.iconName}</span>
                      <IconCopy aria-hidden className={styles.cellCopy} />
                    </AriaButton>
                  </li>
                );
              })}
            </ul>
          </section>
        ))
      )}
      <p id="icon-copy-hint" className="visually-hidden">
        Copies the import line
      </p>
    </div>
  );
}
