'use client';

import { IconDownload, IconMoon, IconPlayerPause, IconPlayerPlay, IconRotate, IconSun, IconX } from '@syntara/icons';
import {
  Button,
  Dialog,
  Select,
  SelectItem,
  Slider,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TextField,
  ThemeScope,
  ToggleButton,
  ToggleButtonGroup,
} from '@syntara/react';
import { generateTheme, toCSS } from '@syntara/theme-engine';
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import type { Selection } from 'react-aria-components';
import { CodeViewer } from '@/components/themes/code-viewer';
import type { ThemePreset } from '@/components/themes/state';
import { useCopy } from '../../examples/_copy/use-copy';
/*
 * The stand-in wears the real Dialog's stylesheet, not a copy, so its look and its motion can't drift from the
 * component's (ADR-054). Same file, same module, same class names.
 */
import dialogCss from '../../../../packages/react/src/ui/dialog.module.css';
import {
  MAX_DURATION_MS,
  MOTION_STYLES,
  minSpeed,
  motionTokens,
  motionVars,
  overrideCss,
  stillVars,
  type MotionStyle,
  type MotionStyleId,
} from './motion-math';
import styles from './motion-lab.module.css';

/** data-syntara-theme of the stage. Dialogs opened from it portal to <body> and copy it, so they get the same motion. */
const STAGE_THEME_ID = 'motion-live';
const HOLD_OPEN_MS = 1200;
const HOLD_CLOSED_MS = 600;
/** One thumbnail loop: spring in, hold, quick fade out, rest. */
const THUMB_LOOP_MS = 2400;

type Phase = 'entering' | 'open' | 'exiting' | 'closed';
const NEXT: Record<Phase, Phase> = { entering: 'open', open: 'exiting', exiting: 'closed', closed: 'entering' };

/**
 * Milliseconds until every CSS animation under `el` has ended (0 when there are none, e.g. reduced motion). Read
 * from each animation's own timing rather than awaiting `finished`: in Chromium that promise was measured resolving
 * ~650 ms after a 120 ms exit had visibly ended, which made the stand-in's exit look slower than the real Dialog's.
 */
function animationsRemaining(el: HTMLElement | null): number {
  if (!el || typeof el.getAnimations !== 'function') return 0;
  let longest = 0;
  for (const a of el.getAnimations({ subtree: true })) {
    const end = Number(a.effect?.getComputedTiming().endTime ?? 0);
    const now = Number(a.currentTime ?? 0);
    longest = Math.max(longest, end - now);
  }
  return Math.ceil(longest);
}

function firstKey(keys: Selection): string | undefined {
  if (keys === 'all') return undefined;
  const [k] = keys;
  return k == null ? undefined : String(k);
}

const seconds = (ms: number) => `${(ms / 1000).toFixed(1)} s`;

/**
 * Keyframes for a style's thumbnail: its own spring in, a hold, its exit easing out. Percentages can't read custom
 * properties, so each style gets its own block, built from the same tokens the stage uses.
 */
function thumbKeyframes(style: MotionStyle): string {
  const t = motionTokens(style, 1, 1);
  const pct = (ms: number) => `${((ms / THUMB_LOOP_MS) * 100).toFixed(2)}%`;
  const inEnd = t.springDuration;
  const outStart = THUMB_LOOP_MS - HOLD_CLOSED_MS - t.fast;
  const outEnd = THUMB_LOOP_MS - HOLD_CLOSED_MS;
  return `@keyframes thumb-${style.id} {
  0% { opacity: 0; scale: 0.94; translate: 0 var(--syntara-space-2); animation-timing-function: ${t.spring}; }
  ${pct(inEnd)} { opacity: 1; scale: 1; translate: 0 0; }
  ${pct(outStart)} { opacity: 1; scale: 1; animation-timing-function: ${t.easing}; }
  ${pct(outEnd)}, 100% { opacity: 0; scale: 0.98; }
}`;
}

/** The Dialog's parts, as dialog-demo.tsx draws them. Text follows the stage's language (Qamar, Haat). */
function StandInContent() {
  const t = useCopy();
  return (
    <div className={dialogCss.dialog}>
      <div className={dialogCss.header}>
        <p className={dialogCss.title}>{t('Edit profile')}</p>
        <p className={dialogCss.description}>{t('Your name and email are visible to everyone in your workspace.')}</p>
      </div>
      <div className={dialogCss.body}>
        <TextField label={t('Full name')} defaultValue="Priya Raman" />
        <TextField label={t('Email')} type="email" defaultValue="priya.raman@example.com" />
      </div>
      <div className={dialogCss.footer}>
        <Button variant="outline">{t('Cancel')}</Button>
        <Button>{t('Save changes')}</Button>
      </div>
      <Button variant="ghost" size="icon" aria-label="Close" className={dialogCss.close}>
        <IconX aria-hidden />
      </Button>
    </div>
  );
}

/** The real component, opened once from the stage. Same content as the stand-in. */
function RealDialog({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const t = useCopy();
  return (
    <Dialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={t('Edit profile')}
      description={t('Your name and email are visible to everyone in your workspace.')}
      footer={({ close }) => (
        <>
          <Button variant="outline" onPress={close}>
            {t('Cancel')}
          </Button>
          <Button onPress={close}>{t('Save changes')}</Button>
        </>
      )}
    >
      <TextField label={t('Full name')} defaultValue="Priya Raman" autoFocus />
      <TextField label={t('Email')} type="email" defaultValue="priya.raman@example.com" />
    </Dialog>
  );
}

function PageButton() {
  const t = useCopy();
  return (
    <Button variant="outline">
      {t('Edit profile')}
    </Button>
  );
}

/** A caps section label with a count, as the editor's panels are grouped. */
function PanelHeading({ id, children, count }: { id: string; children: ReactNode; count?: number }) {
  return (
    <h2 id={id} className={styles.panelHeading}>
      {children}
      {count != null && <span className={styles.count}> · {count}</span>}
    </h2>
  );
}

export interface MotionLabProps {
  brands: ThemePreset[];
  initialBrand: string;
  /** Dialog's example source, highlighted on the server. */
  componentCode: ReactNode;
}

export function MotionLab({ brands, initialBrand, componentCode }: MotionLabProps) {
  const [brandId, setBrandId] = useState(initialBrand);
  const [styleId, setStyleId] = useState<MotionStyleId>('tactile');
  const [speed, setSpeed] = useState(1);
  const [bounce, setBounce] = useState(1);
  const [dark, setDark] = useState(false);
  const [stillPreview, setStillPreview] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [realOpen, setRealOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [selectorMode, setSelectorMode] = useState<'theme' | 'root'>('theme');
  const [phase, setPhase] = useState<Phase>('open');
  const [cycle, setCycle] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const phaseStart = useRef(0);
  const ids = { styles: useId(), component: useId(), brand: useId(), timing: useId(), preview: useId() };

  const brand = brands.find((b) => b.id === brandId) ?? brands[0]!;
  const style = MOTION_STYLES.find((s) => s.id === styleId)!;
  const bounces = style.id !== 'gentle';
  const effectiveBounce = bounces ? bounce : 1;
  const slowest = useMemo(() => minSpeed(style, effectiveBounce), [style, effectiveBounce]);
  const effectiveSpeed = Math.max(speed, slowest);

  const tokens = useMemo(() => motionTokens(style, effectiveSpeed, effectiveBounce), [style, effectiveSpeed, effectiveBounce]);
  const vars = useMemo(() => motionVars(tokens), [tokens]);
  const stageVars = stillPreview ? stillVars(vars) : vars;

  const theme = useMemo(() => generateTheme(brand.brand), [brand.brand]);
  const stageCss = useMemo(() => {
    const selector = `[data-syntara-theme="${STAGE_THEME_ID}"]`;
    return [
      toCSS(theme, { selector }),
      overrideCss(selector, stageVars, 'motion lab'),
      `@media (prefers-reduced-motion: no-preference) {\n${MOTION_STYLES.map(thumbKeyframes).join('\n')}\n}`,
    ].join('\n');
  }, [theme, stageVars]);

  const pasteSelector = selectorMode === 'root' ? ':root' : `[data-syntara-theme="${brand.id}"]`;
  const comment = [
    `Syntara motion: ${style.label}`,
    effectiveSpeed !== 1 ? `speed ${effectiveSpeed.toFixed(2)}×` : null,
    bounces && effectiveBounce !== 1 ? `bounce ${Math.round(effectiveBounce * 100)}%` : null,
    'paste after your Syntara CSS',
  ]
    .filter(Boolean)
    .join(', ');
  const tokensFile = {
    name: 'syntara-motion.css',
    content: overrideCss(pasteSelector, vars, comment),
    mime: 'text/css',
    lang: 'css' as const,
  };

  // One loop, for the play bar. Entering lasts until the last part has faded up (the footer starts 2/3 of `fast` late).
  const timeline = useMemo(() => {
    const enter = stillPreview ? 0 : Math.max(tokens.springDuration, tokens.normal, tokens.slow + (tokens.fast * 2) / 3);
    const exit = stillPreview ? 0 : tokens.fast;
    const starts: Record<Phase, number> = {
      entering: 0,
      open: enter,
      exiting: enter + HOLD_OPEN_MS,
      closed: enter + HOLD_OPEN_MS + exit,
    };
    const lengths: Record<Phase, number> = { entering: enter, open: HOLD_OPEN_MS, exiting: exit, closed: HOLD_CLOSED_MS };
    return { starts, lengths, total: starts.closed + HOLD_CLOSED_MS };
  }, [tokens, stillPreview]);

  const running = playing && !realOpen && !exportOpen;

  // A visitor who has asked for less motion doesn't get a loop that starts by itself (WCAG 2.2.2 also needs the pause button).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, []);

  // Paused, or a real Dialog is up: show the stand-in at rest.
  useEffect(() => {
    if (!running) setPhase('open');
  }, [running]);

  /*
   * The loop: enter, hold, exit, rest. One step per commit: this runs after React has written the phase's
   * attributes, and getAnimations() flushes style, so the CSS animations already exist when it asks for them. Each
   * cycle remounts the panel (key) so the parts' fade-up replays as it does when the real Dialog opens.
   */
  useEffect(() => {
    phaseStart.current = performance.now();
    if (!running) return;
    const wait =
      phase === 'open' ? HOLD_OPEN_MS : phase === 'closed' ? HOLD_CLOSED_MS : animationsRemaining(overlayRef.current);
    const id = setTimeout(() => {
      const p = NEXT[phase];
      if (p === 'entering') setCycle((c) => c + 1);
      setPhase(p);
    }, wait);
    return () => clearTimeout(id);
  }, [running, phase]);

  // Play bar: written straight to the DOM each frame, so the lab doesn't re-render 60 times a second.
  useEffect(() => {
    let raf = 0;
    const draw = () => {
      const within = running ? Math.min(performance.now() - phaseStart.current, timeline.lengths[phase]) : 0;
      const at = running ? timeline.starts[phase] + within : timeline.starts.open;
      if (progressRef.current) progressRef.current.style.scale = `${timeline.total ? at / timeline.total : 0} 1`;
      if (timeRef.current) timeRef.current.textContent = `${seconds(at)} / ${seconds(timeline.total)}`;
      if (running) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [running, phase, timeline]);

  const restart = () => {
    setPlaying(true);
    setCycle((c) => c + 1);
    setPhase('entering');
  };

  const readout = `${tokens.fast} / ${tokens.normal} / ${tokens.slow} ms · spring ${tokens.springDuration} ms, ${(tokens.overshoot * 100).toFixed(1)}% bounce`;

  return (
    <div className={styles.editor}>
      <style>{stageCss}</style>

      {/* Top bar: the title, what's on the stage, and the one primary action. */}
      <header className={styles.topBar}>
        <div className={styles.brandMark}>
          <h1 className={styles.title}>Motion lab</h1>
          <span className={styles.beta}>Beta</span>
        </div>
        <p className={styles.subtitle} aria-live="polite">
          {brand.label} · {style.label}
        </p>
        <div className={styles.topActions}>
          <ToggleButton
            isSelected={dark}
            onChange={setDark}
            aria-label="Dark preview"
            className={styles.iconToggle}
          >
            {dark ? <IconMoon aria-hidden /> : <IconSun aria-hidden />}
          </ToggleButton>
          <Button onPress={() => setExportOpen(true)}>
            <IconDownload aria-hidden />
            Export
          </Button>
        </div>
      </header>

      {/* Left: what moves, and how. */}
      <aside className={styles.left} aria-label="Motion styles">
        <section aria-labelledby={ids.styles} className={styles.section}>
          <PanelHeading id={ids.styles} count={MOTION_STYLES.length}>
            Motion style
          </PanelHeading>
          <ToggleButtonGroup
            aria-labelledby={ids.styles}
            disallowEmptySelection
            selectedKeys={[style.id]}
            onSelectionChange={(keys) => {
              const next = MOTION_STYLES.find((s) => s.id === firstKey(keys));
              if (next) setStyleId(next.id);
            }}
            className={styles.cards}
          >
            {MOTION_STYLES.map((s) => (
              <ToggleButton key={s.id} id={s.id} className={styles.card}>
                {/* Brand tokens without ThemeScope's <div>, which can't sit inside a <button>. */}
                <span
                  data-syntara-theme={STAGE_THEME_ID}
                  data-syntara-scheme={dark ? 'dark' : 'light'}
                  className={styles.thumb}
                  aria-hidden
                >
                  <span className={styles.thumbPanel} style={{ animationName: `thumb-${s.id}` }}>
                    <span className={styles.thumbLine} />
                    <span className={styles.thumbLineShort} />
                    <span className={styles.thumbButton} />
                  </span>
                </span>
                <span className={styles.cardLabel}>{s.label}</span>
                <span className={styles.cardFeel}>{s.feel}</span>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </section>

        <section aria-labelledby={ids.component} className={styles.section}>
          <PanelHeading id={ids.component} count={1}>
            Component
          </PanelHeading>
          <div className={styles.componentCard}>
            <span className={styles.cardLabel}>Dialog</span>
            <span className={styles.cardFeel}>Opens over the page, settles, closes.</span>
          </div>
        </section>
      </aside>

      {/* Centre: the canvas, the stage and the play bar. */}
      <section className={styles.canvas} aria-label="Preview">
        <div className={styles.canvasInner}>
          <ThemeScope
            theme={STAGE_THEME_ID}
            scheme={dark ? 'dark' : 'light'}
            density={brand.brand.density}
            locale={brand.dir === 'rtl' ? brand.locale : 'en-US'}
            className={styles.stage}
          >
            <div className={styles.page} aria-hidden inert>
              <PageButton />
            </div>

            {/* Decoration for sighted visitors only: hidden from assistive tech and out of the tab order. Gone while a
                real dialog is up: their glass is translucent, so the stand-in would show through as a pale box. */}
            {phase !== 'closed' && !realOpen && !exportOpen && (
              <div
                key={cycle}
                ref={overlayRef}
                aria-hidden
                inert
                className={`${dialogCss.overlay} ${styles.standin}`}
                data-entering={phase === 'entering' || undefined}
                data-exiting={phase === 'exiting' || undefined}
              >
                <div
                  className={dialogCss.panel}
                  data-size="md"
                  data-entering={phase === 'entering' || undefined}
                  data-exiting={phase === 'exiting' || undefined}
                >
                  <StandInContent />
                </div>
              </div>
            )}

            <RealDialog isOpen={realOpen} onOpenChange={setRealOpen} />
            <ExportDialog
              isOpen={exportOpen}
              onOpenChange={setExportOpen}
              selectorMode={selectorMode}
              onSelectorMode={setSelectorMode}
              brandId={brand.id}
              tokensFile={tokensFile}
              componentCode={componentCode}
            />
          </ThemeScope>
        </div>

        <div className={styles.playBar}>
          <Button
            variant="ghost"
            size="icon"
            onPress={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause loop' : 'Play loop'}
          >
            {playing ? <IconPlayerPause aria-hidden /> : <IconPlayerPlay aria-hidden />}
          </Button>
          <Button variant="ghost" size="icon" onPress={restart} aria-label="Restart loop">
            <IconRotate aria-hidden />
          </Button>
          <span className={styles.track} aria-hidden>
            <span ref={progressRef} className={styles.progress} />
          </span>
          <span ref={timeRef} className={styles.time} />
          <Button variant="outline" size="sm" onPress={() => setRealOpen(true)}>
            Try the real Dialog
          </Button>
        </div>
      </section>

      {/* Right: the settings. */}
      <aside className={styles.right} aria-label="Settings">
        <section aria-labelledby={ids.brand} className={styles.section}>
          <PanelHeading id={ids.brand}>Brand</PanelHeading>
          <Select
            aria-labelledby={ids.brand}
            selectedKey={brand.id}
            onSelectionChange={(key) => key != null && setBrandId(String(key))}
          >
            {brands.map((b) => (
              <SelectItem key={b.id} id={b.id} textValue={b.label}>
                {b.label}
              </SelectItem>
            ))}
          </Select>
        </section>

        <section aria-labelledby={ids.timing} className={styles.section}>
          <PanelHeading id={ids.timing}>Timing</PanelHeading>
          <Slider
            label="Speed"
            minValue={0.5}
            maxValue={2}
            step={0.05}
            value={effectiveSpeed}
            onChange={(v) => setSpeed(Math.max(v, slowest))}
            formatOptions={{ style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
          />
          <p className={styles.hint}>
            {slowest > 0.5
              ? `Stops at ${slowest.toFixed(2)}×: any slower and something would take longer than ${MAX_DURATION_MS} ms.`
              : '1.00 is the style as designed.'}
          </p>
          <Slider
            label="Bounce"
            minValue={0}
            maxValue={1}
            step={0.05}
            value={effectiveBounce}
            onChange={setBounce}
            isDisabled={!bounces}
            formatOptions={{ style: 'percent' }}
          />
          {!bounces && <p className={styles.hint}>Gentle doesn’t bounce.</p>}
          <p className={styles.readout} aria-live="polite">
            {readout}
          </p>
        </section>

        <section aria-labelledby={ids.preview} className={styles.section}>
          <PanelHeading id={ids.preview}>Preview</PanelHeading>
          <Switch isSelected={stillPreview} onChange={setStillPreview}>
            Preview reduced motion
          </Switch>
          <p className={styles.hint}>
            The loop is a stand-in drawn with Dialog’s own stylesheet, so it never takes over the page. “Try the real
            Dialog” opens the component itself.
          </p>
        </section>
      </aside>
    </div>
  );
}

function ExportDialog({
  isOpen,
  onOpenChange,
  selectorMode,
  onSelectorMode,
  brandId,
  tokensFile,
  componentCode,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectorMode: 'theme' | 'root';
  onSelectorMode: (mode: 'theme' | 'root') => void;
  brandId: string;
  tokensFile: { name: string; content: string; mime: string; lang: 'css' };
  componentCode: ReactNode;
}) {
  return (
    <Dialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
      title="Export"
      description="Paste the tokens after your Syntara CSS. The component doesn’t change: it reads its motion from them."
    >
      <Tabs>
        <TabList aria-label="Export">
          <Tab id="tokens">Tokens</Tab>
          <Tab id="component">Component</Tab>
        </TabList>
        <TabPanel id="tokens" className={styles.exportPanel}>
          <div className={styles.selectorRow}>
            <span className={styles.label} id="motion-paste-under">
              Paste under
            </span>
            <ToggleButtonGroup
              aria-labelledby="motion-paste-under"
              size="sm"
              disallowEmptySelection
              selectedKeys={[selectorMode]}
              onSelectionChange={(keys) => {
                const k = firstKey(keys);
                if (k === 'theme' || k === 'root') onSelectorMode(k);
              }}
            >
              <ToggleButton id="theme">Your theme</ToggleButton>
              <ToggleButton id="root">:root</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <p className={styles.hint}>
            {selectorMode === 'theme'
              ? `npx syntara init writes your tokens under [data-syntara-theme="<your id>"]. Change "${brandId}" to your theme’s id.`
              : 'Only if your Syntara tokens are on :root. A scoped theme wins over this.'}
          </p>
          <CodeViewer file={tokensFile} />
        </TabPanel>
        <TabPanel id="component" className={styles.exportPanel}>
          {componentCode}
        </TabPanel>
      </Tabs>
    </Dialog>
  );
}
