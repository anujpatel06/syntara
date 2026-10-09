'use client';

import {
  IconBaselineDensityMedium,
  IconBaselineDensitySmall,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconMoon,
  IconSun,
  IconTextDirectionLtr,
  IconTextDirectionRtl,
} from '@syntara/icons';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  ThemeScope,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  TooltipTrigger,
} from '@syntara/react';
import {
  Component,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from 'react';
import type { Key } from 'react-aria-components';
import { examples } from '@/lib/examples.generated';
import styles from './preview.module.css';

export interface PreviewTenant {
  id: string;
  name: string;
  density: 'comfortable' | 'compact';
  /** The tenant's own locale and direction (content.json): Qamar is ar-AE and right-to-left, Haat hi-IN. */
  locale: string;
  dir: 'ltr' | 'rtl';
}

type Scheme = 'light' | 'dark';
type Dir = 'ltr' | 'rtl';
type Density = 'comfortable' | 'compact';

/**
 * Preset stage widths in CSS px. "full" is the docs column. No tablet preset: the column tops out near 734 px on any
 * screen, so 768 could never be shown (Anuj, 2026-10-08); the drag handle covers widths in between.
 */
const WIDTHS = { mobile: 375 } as const;
const MIN_WIDTH = 280;

/**
 * The stage's width handle: drag it, or focus it and use the arrow keys (Shift for bigger steps), Home for the
 * narrowest and End for full width. The stage is centred, so the width changes by twice the pointer's travel to keep
 * the edge under the pointer.
 */
function WidthHandle({
  width,
  max,
  onChange,
}: {
  width: number;
  max: number;
  onChange: (next: number | undefined) => void;
}) {
  const drag = useRef<{ x: number; width: number; sign: number } | null>(null);
  const clamp = (w: number) => (w >= max ? undefined : Math.max(MIN_WIDTH, Math.round(w)));

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const sign = getComputedStyle(e.currentTarget).direction === 'rtl' ? -1 : 1;
    drag.current = { x: e.clientX, width, sign };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const { x, width: start, sign } = drag.current;
    onChange(clamp(start + (e.clientX - x) * 2 * sign));
  };
  const onPointerUp = () => {
    drag.current = null;
  };
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 50 : 10;
    const rtl = getComputedStyle(e.currentTarget).direction === 'rtl';
    const keys: Record<string, number | 'min' | 'max'> = {
      ArrowLeft: rtl ? step : -step,
      ArrowRight: rtl ? -step : step,
      ArrowDown: -step,
      ArrowUp: step,
      Home: 'min',
      End: 'max',
    };
    const move = keys[e.key];
    if (move == null) return;
    e.preventDefault();
    onChange(move === 'min' ? MIN_WIDTH : move === 'max' ? undefined : clamp(width + move));
  };

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Preview width"
      aria-valuemin={MIN_WIDTH}
      aria-valuemax={max}
      aria-valuenow={width}
      aria-valuetext={`${width} pixels`}
      tabIndex={0}
      className={`${styles.handle} ${styles.wideOnly}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={onKeyDown}
    >
      <span className={styles.grip} aria-hidden="true" />
    </div>
  );
}

/** The site's effective scheme (html attribute, or the OS preference when it is "auto"). */
function useSiteScheme(): Scheme {
  const [scheme, setScheme] = useState<Scheme>('light');
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const read = () => {
      const attr = document.documentElement.getAttribute('data-syntara-scheme');
      setScheme(attr === 'dark' || (attr !== 'light' && media.matches) ? 'dark' : 'light');
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-syntara-scheme'] });
    media.addEventListener('change', read);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', read);
    };
  }, []);
  return scheme;
}

class ExampleBoundary extends Component<{ name: string; children: ReactNode }, { error?: Error }> {
  override state: { error?: Error } = {};
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  override render() {
    if (this.state.error) {
      return (
        <p className={styles.message}>
          <strong>{this.props.name}</strong> failed to render: {this.state.error.message}
        </p>
      );
    }
    return this.props.children;
  }
}

function firstKey(keys: Set<Key>): string | undefined {
  const [k] = keys;
  return k == null ? undefined : String(k);
}

function IconToggle({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <TooltipTrigger delay={500}>
      <ToggleButton id={id} aria-label={label} className={styles.iconToggle}>
        {children}
      </ToggleButton>
      <Tooltip>{label}</Tooltip>
    </TooltipTrigger>
  );
}

export interface PreviewClientProps {
  name: string;
  label: string;
  align: 'center' | 'start';
  tenants: PreviewTenant[];
  code: ReactNode;
}

export function PreviewClient({ name, label, align, tenants, code }: PreviewClientProps) {
  const Example = examples[name];
  const id = useId();
  const siteScheme = useSiteScheme();
  const [tab, setTab] = useState<Key>('preview');
  const [tenantId, setTenantId] = useState(tenants[0]?.id ?? 'house');
  /** undefined = follow the site's scheme. */
  const [scheme, setScheme] = useState<Scheme | undefined>();
  /** undefined = follow the tenant's direction. The toggle overrides it until the tenant changes. */
  const [dir, setDir] = useState<Dir | undefined>();
  const [density, setDensity] = useState<Density | undefined>();
  /** undefined = the full docs column. Set by a preset or by dragging the stage's edge. */
  const [width, setWidth] = useState<number | undefined>();
  const [maxWidth, setMaxWidth] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setMaxWidth(Math.floor(entry?.contentRect.width ?? 0)));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  // Until the panel has been measured (first paint, or a hidden tab), trust the chosen width; CSS caps it anyway.
  const shownWidth = maxWidth === 0 ? (width ?? 0) : Math.min(width ?? maxWidth, maxWidth);
  const widthKey =
    width == null ? 'full' : (Object.keys(WIDTHS) as (keyof typeof WIDTHS)[]).find((k) => WIDTHS[k] === width);

  const tenant = tenants.find((t) => t.id === tenantId) ?? tenants[0];
  const effectiveScheme = scheme ?? siteScheme;
  const effectiveDensity = density ?? tenant?.density ?? 'comfortable';
  const tenantDir = tenant?.dir ?? 'ltr';
  const effectiveDir = dir ?? tenantDir;
  // The tenant's own locale while its direction is shown, so Qamar previews in Arabic (dates, numbers, calendar,
  // React Aria's keyboard direction) and Haat in Hindi. Flipped against the tenant, a stand-in locale for the
  // other direction, so any tenant can still be checked both ways. The stand-in writes Arabic digits, like Qamar and
  // the Arabic example copy (ADR-048).
  const locale = effectiveDir === tenantDir ? (tenant?.locale ?? 'en-US') : effectiveDir === 'rtl' ? 'ar-AE-u-nu-arab' : 'en-US';

  // One frame, one bar: Preview / Code on the start side, the stage controls on the end side (only while the
  // preview shows; they do nothing to the code). Tenants are colour dots named by tooltip, with the current
  // tenant's name written beside them, so the bar stays one line at docs width.
  return (
    <Tabs variant="pill" className={styles.root} selectedKey={tab} onSelectionChange={setTab}>
      <div className={styles.frame}>
        <div className={styles.bar}>
          <TabList aria-label={`${label} example`} className={styles.tabs}>
            <Tab id="preview">Preview</Tab>
            <Tab id="code" isDisabled={code == null}>
              Code
            </Tab>
          </TabList>
          {tab === 'preview' && (
            <div className={styles.controls}>
              <div className={styles.tenantPicker}>
                {/* Visitors didn't read the dots as themes, so they're named in words, not only by tooltip. */}
                <span id={`${id}-theme`} className={styles.pickerLabel}>
                  Theme
                </span>
                <ToggleButtonGroup
                  aria-labelledby={`${id}-theme`}
                  size="sm"
                  disallowEmptySelection
                  selectedKeys={[tenantId]}
                  onSelectionChange={(keys) => {
                    const next = firstKey(keys);
                    if (next) {
                      setTenantId(next);
                      setDir(undefined); // a new tenant starts in its own direction
                    }
                  }}
                  className={styles.dots}
                >
                  {tenants.map((t) => (
                    <TooltipTrigger key={t.id} delay={400}>
                      <ToggleButton id={t.id} aria-label={t.name} className={styles.dotToggle}>
                        <span className={styles.dot} data-syntara-theme={t.id} aria-hidden="true" />
                      </ToggleButton>
                      <Tooltip>{t.name}</Tooltip>
                    </TooltipTrigger>
                  ))}
                </ToggleButtonGroup>
                <span className={styles.tenantName} aria-hidden="true">
                  {tenant?.name}
                </span>
              </div>
              <span className={`${styles.divider} ${styles.wideOnly}`} aria-hidden="true" />
              <ToggleButtonGroup
                aria-label="Colour scheme"
                size="sm"
                disallowEmptySelection
                selectedKeys={[effectiveScheme]}
                onSelectionChange={(keys) => setScheme(firstKey(keys) as Scheme)}
                className={styles.group}
              >
                <IconToggle id="light" label="Light">
                  <IconSun aria-hidden />
                </IconToggle>
                <IconToggle id="dark" label="Dark">
                  <IconMoon aria-hidden />
                </IconToggle>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                aria-label="Direction"
                size="sm"
                disallowEmptySelection
                selectedKeys={[effectiveDir]}
                onSelectionChange={(keys) => setDir(firstKey(keys) as Dir)}
                className={styles.group}
              >
                <IconToggle id="ltr" label="Left to right">
                  <IconTextDirectionLtr aria-hidden />
                </IconToggle>
                <IconToggle id="rtl" label="Right to left">
                  <IconTextDirectionRtl aria-hidden />
                </IconToggle>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                aria-label="Density"
                size="sm"
                disallowEmptySelection
                selectedKeys={[effectiveDensity]}
                onSelectionChange={(keys) => setDensity(firstKey(keys) as Density)}
                className={`${styles.group} ${styles.wideOnly}`}
              >
                <IconToggle id="comfortable" label="Comfortable">
                  <IconBaselineDensityMedium aria-hidden />
                </IconToggle>
                <IconToggle id="compact" label="Compact">
                  <IconBaselineDensitySmall aria-hidden />
                </IconToggle>
              </ToggleButtonGroup>
              {/* No preset is selected while a dragged width is shown; the readout under the stage names it. */}
              <ToggleButtonGroup
                aria-label="Preview width"
                size="sm"
                selectedKeys={widthKey ? [widthKey] : []}
                onSelectionChange={(keys) => {
                  const next = firstKey(keys);
                  if (next) setWidth(next === 'full' ? undefined : WIDTHS[next as keyof typeof WIDTHS]);
                }}
                className={`${styles.group} ${styles.wideOnly}`}
              >
                <IconToggle id="mobile" label={`Mobile, ${WIDTHS.mobile} px`}>
                  <IconDeviceMobile aria-hidden />
                </IconToggle>
                <IconToggle id="full" label="Full width">
                  <IconDeviceDesktop aria-hidden />
                </IconToggle>
              </ToggleButtonGroup>
            </div>
          )}
        </div>
        <TabPanel id="preview" shouldForceMount className={styles.panel}>
          <div ref={viewport} className={styles.viewport} data-narrowed={width != null || undefined}>
          <div className={styles.sizer} style={width == null ? undefined : { inlineSize: shownWidth }}>
          <ThemeScope
            theme={tenant?.id}
            data-syntara-scheme={scheme ?? 'site'}
            density={density}
            locale={locale}
            className={styles.stage}
            data-align={align}
            role="region"
            aria-label={`${label} preview`}
          >
            {Example ? (
              <ExampleBoundary name={name}>
                <div className={styles.example}>
                  <Example />
                </div>
              </ExampleBoundary>
            ) : (
              <p className={styles.message}>
                The <code>{name}</code> example hasn’t been written yet.
              </p>
            )}
          </ThemeScope>
          {maxWidth > 0 && <WidthHandle width={shownWidth} max={maxWidth} onChange={setWidth} />}
          </div>
          {width != null && (
            <p className={styles.readout} aria-live="polite">
              {`${shownWidth} px`}
            </p>
          )}
          </div>
        </TabPanel>
        <TabPanel id="code" className={styles.panel}>
          {code}
        </TabPanel>
      </div>
    </Tabs>
  );
}
