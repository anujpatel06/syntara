'use client';

import { IconDownload, IconInfoCircle, IconMoon, IconPlayerPause, IconPlayerPlay, IconRotate, IconSun } from '@syntara/icons';
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
  Tooltip,
  TooltipTrigger,
} from '@syntara/react';
import { generateTheme, toCSS } from '@syntara/theme-engine';
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import { Button as AriaButton, type Selection } from 'react-aria-components';
import { CodeViewer } from '@/components/themes/code-viewer';
import type { ThemePreset } from '@/components/themes/state';
import { useCopy } from '../../examples/_copy/use-copy';
import {
  DURATION_RANGES,
  DURATION_STEP,
  EASINGS,
  ENTER_EASINGS,
  MAX_DURATION_MS,
  MOTION_STYLES,
  minSpeed,
  motionTokens,
  motionVars,
  overrideCss,
  easingPoints,
  orderDurations,
  playbackVars,
  stillVars,
  type Tuning,
  type MotionStyle,
  type MotionStyleId,
} from './motion-math';
import { ExampleThumb } from '@/components/preview/example-thumb';
import { SPECIMEN_GROUPS } from './specimen-list';
import { SPECIMENS, type Phase, type Specimen } from './specimens';
import styles from './motion-lab.module.css';

/** data-syntara-theme of the stage. Dialogs opened from it portal to <body> and copy it, so they get the same motion. */
const STAGE_THEME_ID = 'motion-live';
/** Preview-only choices (spec §13). */
const FRAMES = ['desktop', 'tablet', 'phone'] as const;
type Frame = (typeof FRAMES)[number];
const FRAME_LABEL: Record<Frame, string> = { desktop: 'Desktop', tablet: 'Tablet', phone: 'Phone' };
const PLAYBACK_RATES = [0.25, 0.5, 1] as const;
const HOLDS = [600, 1200, 2000] as const;
const HOLD_CLOSED_MS = 600;
/** One thumbnail loop: spring in, hold, quick fade out, rest. */
const THUMB_LOOP_MS = 2400;

const NEXT: Record<Phase, Phase> = { entering: 'open', open: 'exiting', exiting: 'closed', closed: 'entering' };

/**
 * Milliseconds until every animation the stage started has ended (0 when there are none, e.g. reduced motion).
 * Looks at the stage and anything portalled from it (a tooltip lands in <body> but carries the stage's theme id),
 * not at the style thumbnails, which loop for as long as one is hovered. Read from each animation's own timing rather than awaiting
 * `finished`: in Chromium that promise was measured resolving ~650 ms after a 120 ms exit had visibly ended.
 */
function animationsRemaining(): number {
  if (typeof document.getAnimations !== 'function') return 0;
  let longest = 0;
  for (const a of document.getAnimations()) {
    const target = (a.effect as KeyframeEffect | null)?.target;
    if (!(target instanceof Element)) continue;
    const fromStage = target.closest('[data-motion-stage]') ?? target.closest(`[data-syntara-theme="${STAGE_THEME_ID}"]:not(.${styles.thumb})`);
    if (!fromStage) continue;
    const end = Number(a.effect?.getComputedTiming().endTime ?? 0);
    if (!Number.isFinite(end)) continue;
    longest = Math.max(longest, end - Number(a.currentTime ?? 0));
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

/** The real Dialog, opened once from the stage. Same content as the stand-in. */
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

/**
 * A caps section label with a count, as the editor's panels are grouped. `previewOnly` marks a section whose
 * settings change the stage but never the exported tokens (spec §13).
 */
function PanelHeading({
  id,
  children,
  count,
  previewOnly,
  tip,
}: {
  id: string;
  children: ReactNode;
  count?: number;
  previewOnly?: boolean;
  tip?: ReactNode;
}) {
  const heading = (
    <h2 id={id} className={styles.panelHeading}>
      {children}
      {count != null && <span className={styles.count}> · {count}</span>}
      {previewOnly && <span className={styles.previewOnly}>Preview only</span>}
    </h2>
  );
  if (tip == null) return heading;
  return (
    <div className={styles.labelRow}>
      {heading}
      <InfoTip about={String(children)}>{tip}</InfoTip>
    </div>
  );
}

/**
 * An "i" that says what a control does. Opens on hover and keyboard focus like any tooltip, and on tap, because a
 * phone can't hover. It sits beside a label, never inside it, so it doesn't become part of the control's name.
 */
function InfoTip({ about, children }: { about: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openAtTap = useRef(false);
  const wrap = useRef<HTMLSpanElement>(null);

  // A tap opens it and nothing hovers away to close it, so a tap anywhere else does.
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);

  return (
    // Capture runs before React Aria closes the tooltip on press, so a second tap can close it.
    <span ref={wrap} className={styles.infoWrap} onPointerDownCapture={() => (openAtTap.current = open)}>
      <TooltipTrigger isOpen={open} onOpenChange={setOpen} delay={300}>
        <AriaButton
          className={styles.infoButton}
          aria-label={`About ${about}`}
          onPress={(e) => {
            if (e.pointerType === 'touch' || e.pointerType === 'pen') setOpen(!openAtTap.current);
          }}
        >
          <IconInfoCircle aria-hidden />
        </AriaButton>
        <Tooltip>{children}</Tooltip>
      </TooltipTrigger>
    </span>
  );
}

/** A control's label with its "i", and the value at the end when there is one. */
function FieldLabel({
  id,
  label,
  tip,
  value,
  isDisabled,
}: {
  id: string;
  label: string;
  tip: ReactNode;
  value?: string;
  isDisabled?: boolean;
}) {
  return (
    // aria-disabled lets axe exempt the dimmed text of a disabled control (WCAG 1.4.3), as Slider's own header does.
    <div className={styles.labelRow} aria-disabled={isDisabled || undefined}>
      <span id={id} className={styles.label}>
        {label}
      </span>
      <InfoTip about={label}>{tip}</InfoTip>
      {value != null && <output className={styles.value}>{value}</output>}
    </div>
  );
}

/** What each duration slider times. */
const DURATION_TIP = {
  fast: 'The quickest moves, like a hover or a press.',
  normal: 'Most opening and closing, like a menu.',
  slow: 'The biggest moves, like a sheet sliding in.',
} as const;

/** A labelled one-of-n toggle row, for the preview settings. */
function Segmented<T extends string | number>({
  labelledBy,
  options,
  value,
  onChange,
  label,
}: {
  labelledBy: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  label: (value: T) => string;
}) {
  return (
    <ToggleButtonGroup
      aria-labelledby={labelledBy}
      size="sm"
      disallowEmptySelection
      selectedKeys={[String(value)]}
      onSelectionChange={(keys) => {
        const next = options.find((o) => String(o) === firstKey(keys));
        if (next !== undefined) onChange(next);
      }}
      className={styles.segmented}
    >
      {options.map((o) => (
        <ToggleButton key={String(o)} id={String(o)} className={styles.segment}>
          {label(o)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

/**
 * The enter easing and the spring, drawn over time (x) against progress (y), so a choice can be seen as well as
 * named. The spring's peak above 1 is its overshoot, measured (motion-math.ts, overshoot()). Decorative; the
 * figures are in the text under it.
 */
function CurveGraph({ enter, spring, overshoot, dark }: { enter: string; spring: string; overshoot: number; dark: boolean }) {
  const W = 100;
  const H = 60;
  const top = 1.12;
  const y = (v: number) => H - (v / top) * (H - 6) - 3;
  const path = (pts: Array<[number, number]>) =>
    pts.map(([px, py], i) => `${i ? 'L' : 'M'}${(px * W).toFixed(2)},${y(py).toFixed(2)}`).join(' ');
  return (
    // In the stage's brand, so the spring is drawn in the brand's colour like the tiles and the stage.
    <figure className={styles.curve} data-syntara-theme={STAGE_THEME_ID} data-syntara-scheme={dark ? 'dark' : 'light'}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden className={styles.curveSvg}>
        <line x1="0" x2={W} y1={y(1)} y2={y(1)} className={styles.curveRest} />
        <path d={path(easingPoints(enter))} className={styles.curveEnter} />
        <path d={path(easingPoints(spring))} className={styles.curveSpring} />
      </svg>
      <figcaption className={styles.curveKey}>
        <span className={styles.keyEnter}>Enter easing</span>
        <span className={styles.keySpring}>Spring · {(overshoot * 100).toFixed(1)}% past rest</span>
      </figcaption>
    </figure>
  );
}


export interface MotionLabProps {
  brands: ThemePreset[];
  initialBrand: string;
  /** Each specimen's example source, highlighted on the server, by specimen id. */
  componentCode: Record<string, ReactNode>;
}

export function MotionLab({ brands, initialBrand, componentCode }: MotionLabProps) {
  const [brandId, setBrandId] = useState(initialBrand);
  const [specimenId, setSpecimenId] = useState<string>(SPECIMENS[0]!.id);
  const [styleId, setStyleId] = useState<MotionStyleId>('tactile');
  const [speed, setSpeed] = useState(1);
  const [bounce, setBounce] = useState(1);
  const [dark, setDark] = useState(false);
  const [stillPreview, setStillPreview] = useState(false);
  // Exported tuning (null = the style's own) and preview-only settings (spec §13).
  const [durations, setDurations] = useState<{ fast: number; normal: number; slow: number } | null>(null);
  const [easingId, setEasingId] = useState<string>('style');
  const [enterId, setEnterId] = useState<string>('style');
  const [frame, setFrame] = useState<Frame>('desktop');
  const [playback, setPlayback] = useState<number>(1);
  const [hold, setHold] = useState<number>(1200);
  const [playing, setPlaying] = useState(true);
  const [realOpen, setRealOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [selectorMode, setSelectorMode] = useState<'theme' | 'root'>('theme');
  const [phase, setPhase] = useState<Phase>('open');
  const [cycle, setCycle] = useState(0);
  const progressRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const phaseStart = useRef(0);
  const ids = {
    components: useId(),
    frame: useId(),
    styles: useId(),
    brand: useId(),
    timing: useId(),
    curves: useId(),
    playback: useId(),
    playbackRate: useId(),
    hold: useId(),
    speed: useId(),
    bounce: useId(),
    fast: useId(),
    normal: useId(),
    slow: useId(),
    standardEasing: useId(),
    enterEasing: useId(),
  };

  const specimen: Specimen = SPECIMENS.find((s) => s.id === specimenId) ?? SPECIMENS[0]!;
  const brand = brands.find((b) => b.id === brandId) ?? brands[0]!;
  const style = MOTION_STYLES.find((s) => s.id === styleId)!;
  const bounces = style.id !== 'gentle';
  const effectiveBounce = bounces ? bounce : 1;
  const tuning: Tuning = useMemo(
    () => ({
      ...(durations ?? {}),
      ...(easingId !== 'style' ? { easing: EASINGS.find((e) => e.id === easingId)?.value } : {}),
      ...(enterId !== 'style' ? { easingOut: ENTER_EASINGS.find((e) => e.id === enterId)?.value } : {}),
    }),
    [durations, easingId, enterId],
  );
  const baseDurations = durations ?? { fast: style.fast, normal: style.normal, slow: style.slow };
  const slowest = useMemo(() => minSpeed(style, effectiveBounce, tuning), [style, effectiveBounce, tuning]);
  const effectiveSpeed = Math.max(speed, slowest);

  const tokens = useMemo(
    () => motionTokens(style, effectiveSpeed, effectiveBounce, tuning),
    [style, effectiveSpeed, effectiveBounce, tuning],
  );
  const vars = useMemo(() => motionVars(tokens), [tokens]);
  // The stage may play slowly; the export never does.
  const stageVars = stillPreview ? stillVars(vars) : playbackVars(vars, playback);

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
    durations ? 'custom durations' : null,
    easingId !== 'style' ? `${EASINGS.find((e) => e.id === easingId)?.label} easing` : null,
    enterId !== 'style' ? `${ENTER_EASINGS.find((e) => e.id === enterId)?.label} on enter` : null,
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

  /*
   * One loop, for the play bar. Holds are fixed; entering and exiting last as long as the animations the change
   * starts, which differ per component, so they are measured as each phase begins (the first loop starts from a
   * guess built from the tokens).
   */
  const lengths = useRef<Record<Phase, number>>({ entering: 0, open: hold, exiting: 0, closed: HOLD_CLOSED_MS });
  lengths.current.open = hold;
  useEffect(() => {
    lengths.current.entering = stillPreview ? 0 : Math.max(tokens.springDuration, tokens.slow);
    lengths.current.exiting = stillPreview ? 0 : tokens.normal;
  }, [tokens, stillPreview, specimenId]);

  const running = playing && !realOpen && !exportOpen;

  // A visitor who has asked for less motion doesn't get a loop that starts by itself (WCAG 2.2.2 also needs the pause button).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, []);

  // Paused, or a real dialog is up: show the component at rest, "on".
  useEffect(() => {
    if (!running) setPhase('open');
  }, [running]);

  // A new component starts its loop from the beginning.
  useEffect(() => {
    setCycle((c) => c + 1);
    setPhase(running ? 'closed' : 'open');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specimenId]);

  /*
   * The loop: enter, hold, exit, rest. One step per commit: this runs after React has written the phase, and
   * getAnimations() flushes style, so the animations the change started already exist when it asks for them.
   */
  useEffect(() => {
    phaseStart.current = performance.now();
    if (!running) return;
    const wait = phase === 'open' ? hold : phase === 'closed' ? HOLD_CLOSED_MS : animationsRemaining();
    lengths.current[phase] = wait;
    const id = setTimeout(() => {
      const p = NEXT[phase];
      if (p === 'entering') setCycle((c) => c + 1);
      setPhase(p);
    }, wait);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, phase]);

  // Play bar: written straight to the DOM each frame, so the lab doesn't re-render 60 times a second.
  useEffect(() => {
    let raf = 0;
    const order: Phase[] = ['entering', 'open', 'exiting', 'closed'];
    const draw = () => {
      const l = lengths.current;
      const total = l.entering + l.open + l.exiting + l.closed;
      const start = order.slice(0, order.indexOf(phase)).reduce((sum, p) => sum + l[p], 0);
      const at = running ? start + Math.min(performance.now() - phaseStart.current, l[phase]) : l.entering;
      if (progressRef.current) progressRef.current.style.scale = `${total ? at / total : 0} 1`;
      if (timeRef.current) timeRef.current.textContent = `${seconds(at)} / ${seconds(total)}`;
      if (running) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [running, phase]);

  const restart = () => {
    setPlaying(true);
    setCycle((c) => c + 1);
    setPhase('entering');
  };

  const reset = () => {
    setSpeed(1);
    setBounce(1);
    setDurations(null);
    setEasingId('style');
    setEnterId('style');
    setFrame('desktop');
    setPlayback(1);
    setHold(1200);
    setStillPreview(false);
  };

  const readout = `${tokens.fast} / ${tokens.normal} / ${tokens.slow} ms · spring ${tokens.springDuration} ms, ${(tokens.overshoot * 100).toFixed(1)}% bounce`;
  const Render = specimen.Render;

  return (
    <div className={styles.editor}>
      <style>{stageCss}</style>

      {/* Top bar: the title, what's on the stage, and the one primary action. The light/dark toggle is on the stage. */}
      <header className={styles.topBar}>
        <div className={styles.brandMark}>
          <h1 className={styles.title}>Motion lab</h1>
          <span className={styles.beta}>Beta</span>
        </div>
        <p className={styles.subtitle} aria-live="polite">
          {specimen.label} · {brand.label} · {style.label}
        </p>
        <div className={styles.topActions}>
          <Button onPress={() => setExportOpen(true)}>
            <IconDownload aria-hidden />
            Export
          </Button>
        </div>
      </header>

      {/* Left: what to animate. */}
      <aside className={styles.left} aria-labelledby={ids.components}>
        <section className={styles.section}>
          <PanelHeading id={ids.components} count={SPECIMENS.length}>
            Components
          </PanelHeading>
          <ToggleButtonGroup
            aria-labelledby={ids.components}
            disallowEmptySelection
            selectedKeys={[specimen.id]}
            onSelectionChange={(keys) => {
              const next = SPECIMENS.find((s) => s.id === firstKey(keys));
              if (next) setSpecimenId(next.id);
            }}
            className={styles.componentList}
          >
            {SPECIMEN_GROUPS.map((group) => (
              <div key={group} className={styles.group} role="presentation">
                <span className={styles.groupLabel} aria-hidden>
                  {group}
                </span>
                {SPECIMENS.filter((s) => s.group === group).map((s) => (
                  <div key={s.id} className={styles.componentTile} role="presentation">
                    <ToggleButton id={s.id} className={styles.componentItem}>
                      {/* Holds the still's place: the still itself is a sibling, because it renders the real
                          example, and a button may not contain a <div> or another button. */}
                      <span className={styles.componentThumbSlot} aria-hidden />
                      <span className={styles.cardLabel}>{s.label}</span>
                    </ToggleButton>
                    {/* The same still as the component's card on /docs/components (meta's `<name>-demo`), in the
                        stage's brand and scheme so it changes with the brand like the stage does. */}
                    <div
                      data-syntara-theme={STAGE_THEME_ID}
                      data-syntara-scheme={dark ? 'dark' : 'light'}
                      className={styles.componentThumb}
                    >
                      <ExampleThumb name={`${s.id}-demo`} zoom={0.5} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </ToggleButtonGroup>
          <p className={styles.hint}>{specimen.moves}</p>
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
            data-frame={frame}
          >
            {/* Decoration: the loop drives it, so it is hidden from assistive tech and out of the tab order. */}
            <div className={styles.stageContent} data-motion-stage aria-hidden inert>
              {!(specimen.standIn && realOpen) && !exportOpen && <Render phase={phase} cycle={cycle} />}
            </div>

            {/* Light or dark for the preview only, so it sits on the preview, in the brand's own colours. Two named
                options rather than one toggle, so it's plain which one is on. */}
            <ToggleButtonGroup
              aria-label="Preview colours"
              size="sm"
              disallowEmptySelection
              selectedKeys={[dark ? 'dark' : 'light']}
              onSelectionChange={(keys) => setDark(firstKey(keys) === 'dark')}
              className={styles.stageToggle}
            >
              <ToggleButton id="light">
                <IconSun aria-hidden />
                Light
              </ToggleButton>
              <ToggleButton id="dark">
                <IconMoon aria-hidden />
                Dark
              </ToggleButton>
            </ToggleButtonGroup>

            <RealDialog isOpen={realOpen} onOpenChange={setRealOpen} />
            <ExportDialog
              isOpen={exportOpen}
              onOpenChange={setExportOpen}
              selectorMode={selectorMode}
              onSelectorMode={setSelectorMode}
              brandId={brand.id}
              tokensFile={tokensFile}
              componentCode={componentCode[specimen.id] ?? null}
              componentLabel={specimen.label}
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
          {specimen.standIn && (
            <Button variant="outline" size="sm" onPress={() => setRealOpen(true)}>
              Try the real {specimen.label}
            </Button>
          )}
        </div>
      </section>

      {/* Right: every control for how it moves. */}
      <aside className={styles.right} aria-label="Motion controls">
        <section aria-labelledby={ids.frame} className={styles.section}>
          <PanelHeading id={ids.frame} previewOnly tip="How wide the preview is. It only changes what you see here.">
            Frame
          </PanelHeading>
          <Segmented
            labelledBy={ids.frame}
            options={FRAMES}
            value={frame}
            onChange={setFrame}
            label={(f) => FRAME_LABEL[f]}
          />
        </section>

        <section aria-labelledby={ids.styles} className={styles.section}>
          <PanelHeading id={ids.styles} count={MOTION_STYLES.length} tip="How every animation feels: its speed, its easing and whether it bounces.">
            Motion style
          </PanelHeading>
          <ToggleButtonGroup
            aria-labelledby={ids.styles}
            disallowEmptySelection
            selectedKeys={[style.id]}
            onSelectionChange={(keys) => {
              const next = MOTION_STYLES.find((s) => s.id === firstKey(keys));
              if (next) {
                setStyleId(next.id);
                // Tuning belongs to the style it was made on.
                setDurations(null);
                setEasingId('style');
                setEnterId('style');
              }
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
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <p className={styles.hint}>{style.feel}</p>
        </section>

        <section aria-labelledby={ids.brand} className={styles.section}>
          <PanelHeading id={ids.brand} tip="Whose colours, shapes and type the preview uses. It doesn’t change the motion.">
            Brand
          </PanelHeading>
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
          <div className={styles.field}>
            <FieldLabel
              id={ids.speed}
              label="Speed"
              tip="Makes every animation faster or slower at once."
              value={effectiveSpeed.toFixed(2)}
            />
            {/* Slider's own label is replaced by FieldLabel (to hold the "i"), so the input's label link points at
                nothing; thumbLabels names the input itself. */}
            <Slider
              aria-labelledby={ids.speed}
              thumbLabels={['Speed']}
              showOutput={false}
            minValue={0.5}
            maxValue={2}
            step={0.05}
            value={effectiveSpeed}
            onChange={(v) => setSpeed(Math.max(v, slowest))}
              formatOptions={{ style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
            />
          </div>
          <p className={styles.hint}>
            {slowest > 0.5
              ? `Stops at ${slowest.toFixed(2)}×: any slower and something would take longer than ${MAX_DURATION_MS} ms.`
              : '1.00 is the style as designed.'}
          </p>
          <div className={styles.field}>
            <FieldLabel
              id={ids.bounce}
              label="Bounce"
              tip="How far things overshoot before they settle."
              value={`${Math.round(effectiveBounce * 100)}%`}
              isDisabled={!bounces}
            />
            <Slider
              aria-labelledby={ids.bounce}
              thumbLabels={['Bounce']}
              showOutput={false}
            minValue={0}
            maxValue={1}
            step={0.05}
            value={effectiveBounce}
            onChange={setBounce}
              isDisabled={!bounces}
              formatOptions={{ style: 'percent' }}
            />
          </div>
          {!bounces && <p className={styles.hint}>Gentle doesn’t bounce.</p>}
          {(['fast', 'normal', 'slow'] as const).map((key) => (
            <div key={key} className={styles.field}>
              <FieldLabel
                id={ids[key]}
                label={key[0]!.toUpperCase() + key.slice(1)}
                tip={DURATION_TIP[key]}
                value={`${baseDurations[key]}ms`}
              />
              <Slider
                aria-labelledby={ids[key]}
                thumbLabels={[key[0]!.toUpperCase() + key.slice(1)]}
                showOutput={false}
              minValue={DURATION_RANGES[key].min}
              maxValue={DURATION_RANGES[key].max}
              step={DURATION_STEP}
              value={baseDurations[key]}
              onChange={(v) => setDurations(orderDurations(baseDurations, key, v))}
                formatOptions={{ style: 'unit', unit: 'millisecond', unitDisplay: 'narrow' }}
              />
            </div>
          ))}
          <p className={styles.hint}>Fast, normal and slow before speed. Moving one keeps them in order.</p>
          <p className={styles.readout} aria-live="polite">
            {readout}
          </p>
        </section>

        <section aria-labelledby={ids.curves} className={styles.section}>
          <PanelHeading id={ids.curves}>Curves</PanelHeading>
          <div className={styles.field}>
            <FieldLabel id={ids.standardEasing} label="Standard easing" tip="How things speed up and slow down when they change in place." />
          <Select
            aria-labelledby={ids.standardEasing}
            selectedKey={easingId}
            onSelectionChange={(key) => key != null && setEasingId(String(key))}
          >
            <SelectItem id="style" textValue={`${style.label}’s own`}>
              {style.label}’s own
            </SelectItem>
            {EASINGS.map((e) => (
              <SelectItem key={e.id} id={e.id} textValue={e.label}>
                {e.label}
              </SelectItem>
            ))}
          </Select>
          </div>
          <div className={styles.field}>
            <FieldLabel id={ids.enterEasing} label="Enter easing" tip="How things slow down as they arrive on screen." />
          <Select
            aria-labelledby={ids.enterEasing}
            selectedKey={enterId}
            onSelectionChange={(key) => key != null && setEnterId(String(key))}
          >
            <SelectItem id="style" textValue={`${style.label}’s own`}>
              {style.label}’s own
            </SelectItem>
            {ENTER_EASINGS.map((e) => (
              <SelectItem key={e.id} id={e.id} textValue={e.label}>
                {e.label}
              </SelectItem>
            ))}
          </Select>
          </div>
          <CurveGraph enter={tokens.easingOut} spring={tokens.spring} overshoot={tokens.overshoot} dark={dark} />
        </section>

        <section aria-labelledby={ids.playback} className={styles.section}>
          <PanelHeading id={ids.playback} previewOnly>
            Playback
          </PanelHeading>
          <FieldLabel
            id={ids.playbackRate}
            label="Slow motion"
            tip="Plays the preview slower so you can watch each move. Not exported."
          />
          <Segmented
            labelledBy={ids.playbackRate}
            options={PLAYBACK_RATES}
            value={playback as (typeof PLAYBACK_RATES)[number]}
            onChange={setPlayback}
            label={(r) => `${r}×`}
          />
          <FieldLabel id={ids.hold} label="Hold open" tip="How long the preview stays open before it closes again." />
          <Segmented
            labelledBy={ids.hold}
            options={HOLDS}
            value={hold as (typeof HOLDS)[number]}
            onChange={setHold}
            label={(h) => `${h / 1000} s`}
          />
          <div className={styles.labelRow}>
            <Switch isSelected={stillPreview} onChange={setStillPreview}>
              Preview reduced motion
            </Switch>
            <InfoTip about="Preview reduced motion">Shows what people see when their device is set to reduce motion.</InfoTip>
          </div>
          <p className={styles.hint}>
            {specimen.standIn
              ? `${specimen.label} takes over the page when it opens, so the loop is a stand-in drawn with its own stylesheet. “Try the real ${specimen.label}” opens the component itself.`
              : `This is the real ${specimen.label}, switched by the loop.`}
          </p>
        </section>

        <div className={styles.section}>
          <Button variant="outline" onPress={reset}>
            Reset settings
          </Button>
        </div>
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
  componentLabel,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectorMode: 'theme' | 'root';
  onSelectorMode: (mode: 'theme' | 'root') => void;
  brandId: string;
  tokensFile: { name: string; content: string; mime: string; lang: 'css' };
  componentCode: ReactNode;
  componentLabel: string;
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
          <Tab id="component">{componentLabel}</Tab>
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
