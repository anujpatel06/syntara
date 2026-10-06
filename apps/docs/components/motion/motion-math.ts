/**
 * Motion styles for the lab (docs/design/motion-lab.md §4, ADR-053). A style is the seven motion tokens and nothing
 * else: time and curve, never colour, size or how far anything scales. Tactile is the engine's own values, so it
 * reads them from FOUNDATIONS rather than repeating them.
 *
 * springEasing is not in the engine's public exports. The lab imports it from the source file so that measuring a
 * spring here uses exactly the function that made the engine's own, without adding to a published API (ADR-053:
 * the lab is a docs demo, not an engine option).
 */
import { FOUNDATIONS } from '@syntara/theme-engine';
import { springEasing } from '../../../../packages/theme-engine/src/foundations';

export type MotionStyleId = 'tactile' | 'gentle' | 'snappy';

export interface MotionStyle {
  id: MotionStyleId;
  label: string;
  feel: string;
  fast: number;
  normal: number;
  slow: number;
  easing: string;
  easingOut: string;
  stiffness: number;
  damping: number;
}

const ENGINE = FOUNDATIONS.motion;

export const MOTION_STYLES: readonly MotionStyle[] = [
  {
    id: 'tactile',
    label: 'Tactile',
    feel: 'Alive under the hand. Syntara today.',
    fast: ENGINE.durationFast,
    normal: ENGINE.durationNormal,
    slow: ENGINE.durationSlow,
    easing: ENGINE.easing,
    easingOut: ENGINE.easingOut,
    stiffness: ENGINE.spring.stiffness,
    damping: ENGINE.spring.damping,
  },
  {
    id: 'gentle',
    label: 'Gentle',
    feel: 'Slower and soft. No bounce.',
    fast: 160,
    normal: 280,
    slow: 440,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easingOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
    stiffness: 300,
    damping: 34,
  },
  {
    id: 'snappy',
    label: 'Snappy',
    feel: 'Faster and crisp, a small bounce.',
    fast: 80,
    normal: 140,
    slow: 220,
    easing: 'cubic-bezier(0.3, 0, 0, 1)',
    easingOut: 'cubic-bezier(0.1, 1, 0.2, 1)',
    stiffness: 700,
    damping: 38,
  },
];

/** Spec rule 1: nothing a user waits on is longer than this. */
export const MAX_DURATION_MS = 500;

/** Samples used to measure a spring. The CSS curve keeps the engine's default (40); measuring needs finer steps. */
const MEASURE_POINTS = 400;

/** Peak of a spring curve above its resting value, as a fraction (0.044 = 4.4%). */
export function overshoot(stiffness: number, damping: number): number {
  const { easing } = springEasing(stiffness, damping, MEASURE_POINTS);
  const peak = Math.max(...easing.slice('linear('.length, -1).split(',').map(Number));
  return Math.max(0, peak - 1);
}

/**
 * The damping that gives `bounce` (0–1) of the style's own overshoot. 1 keeps the style's damping; 0 is critical
 * damping (2√k), the least damping with no overshoot. Overshoot falls as damping rises, so a bisection finds it.
 */
function dampingForBounce(style: MotionStyle, bounce: number): number {
  const critical = 2 * Math.sqrt(style.stiffness);
  if (bounce >= 1 || style.damping >= critical) return style.damping;
  if (bounce <= 0) return critical;
  const target = bounce * overshoot(style.stiffness, style.damping);
  let lo = style.damping;
  let hi = critical;
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2;
    if (overshoot(style.stiffness, mid) > target) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export interface MotionTokens {
  fast: number;
  normal: number;
  slow: number;
  springDuration: number;
  easing: string;
  easingOut: string;
  spring: string;
  /** Measured, for the readout. */
  overshoot: number;
}

/**
 * The seven tokens for a style at a speed (a multiplier: 2 = twice as fast) and a bounce (0–1 of the style's
 * overshoot). Speeding a spring up by s without changing its shape means stiffness × s² and damping × s.
 */
export function motionTokens(style: MotionStyle, speed: number, bounce: number): MotionTokens {
  const damping = dampingForBounce(style, bounce);
  const k = style.stiffness * speed * speed;
  const c = damping * speed;
  const spring = springEasing(k, c);
  return {
    fast: Math.round(style.fast / speed),
    normal: Math.round(style.normal / speed),
    slow: Math.round(style.slow / speed),
    springDuration: spring.duration,
    easing: style.easing,
    easingOut: style.easingOut,
    spring: spring.easing,
    overshoot: overshoot(k, c),
  };
}

/**
 * The slowest speed that keeps every duration, spring included, at or under MAX_DURATION_MS, rounded up to the
 * slider's step. Durations scale with 1/speed, so it is the longest duration at speed 1 over the limit.
 */
export function minSpeed(style: MotionStyle, bounce: number, step = 0.05): number {
  const atOne = motionTokens(style, 1, bounce);
  const longest = Math.max(atOne.slow, atOne.springDuration);
  const raw = longest / MAX_DURATION_MS;
  return Math.max(0.5, Math.ceil(raw / step - 1e-9) * step);
}

/** The motion tokens as CSS variables, in the order the engine writes them (css-vars.ts, writeMotionVars). */
export function motionVars(t: MotionTokens): Record<string, string> {
  return {
    '--syntara-motion-duration-fast': `${t.fast}ms`,
    '--syntara-motion-duration-normal': `${t.normal}ms`,
    '--syntara-motion-duration-slow': `${t.slow}ms`,
    '--syntara-motion-duration-spring': `${t.springDuration}ms`,
    '--syntara-motion-easing': t.easing,
    '--syntara-motion-easing-out': t.easingOut,
    '--syntara-motion-spring': t.spring,
  };
}

/** Reduced-motion preview: every duration to zero, so things appear and leave without moving. */
export function stillVars(vars: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(vars).map(([k, v]) => [k, k.includes('duration') ? '0ms' : v]));
}

/** The block a reader pastes after their Syntara CSS (spec §6). */
export function overrideCss(selector: string, vars: Record<string, string>, comment: string): string {
  const body = Object.entries(vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n');
  return `/* ${comment} */\n${selector} {\n${body}\n}\n`;
}
