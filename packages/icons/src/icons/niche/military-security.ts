/** Domain: military security. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAccessCard = createIcon('access-card', [
  ['rect', { x: 2.75, y: 6, width: 13.5, height: 12, rx: 2.75 }],
  ['rect', { x: 5.75, y: 9.25, width: 4, height: 3.25, rx: 1 }],
  ['path', { d: 'M18.5 9.5a3.5 3.5 0 0 1 0 5M20.25 7.75a6.5 6.5 0 0 1 0 8.5' }],
]);
export const IconAccessKeypad = createIcon('access-keypad', [
  ['rect', { x: 5.5, y: 3, width: 13, height: 18, rx: 3 }],
  ['path', { d: 'M9 6.75h6' }],
  ['circle', { cx: 9.75, cy: 11, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 11, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9.75, cy: 15.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 15.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBarbedWire = createIcon('barbed-wire', [
  ['path', { d: 'M2.75 12c3 0 3-1 6.15-1S12 12 15.1 12s3.1-1 6.15-1' }],
  ['path', { d: 'M6.25 8.5l2.5 6M8.75 8.5l-2.5 6M15.25 9l2.5 6M17.75 9l-2.5 6' }],
]);
export const IconBarrierGate = createIcon('barrier-gate', [
  ['rect', { x: 4, y: 8.5, width: 4, height: 12, rx: 1.5 }],
  ['rect', { x: 8, y: 7.5, width: 13, height: 2.75, rx: 1.375, transform: 'rotate(-12 8 8.9)' }],
  ['path', { d: 'M2.75 20.5h6.5' }],
]);
export const IconBodyScanner = createIcon('body-scanner', [
  ['path', { d: 'M7 3H4.5v18H7M17 3h2.5v18H17' }],
  ['circle', { cx: 12, cy: 8, r: 2.25 }],
  ['path', { d: 'M8.25 19v-2.5a3.75 3.75 0 0 1 7.5 0V19' }],
  ['path', { d: 'M3 12.75h18' }],
]);
export const IconCctvCamera = createIcon('cctv-camera', [
  ['rect', { x: 3.5, y: 5, width: 13.5, height: 5.75, rx: 2.25, transform: 'rotate(14 10.25 7.9)' }],
  ['path', { d: 'M17.5 8.25l2.75.7' }],
  ['path', { d: 'M10 11.5 9.25 16.5H4.5M4.5 13.75v6.25' }],
]);
export const IconDogTags = createIcon('dog-tags', [
  ['rect', { x: 2.75, y: 12.25, width: 13.5, height: 8.5, rx: 3.5 }],
  ['path', { d: 'M7.5 12.25v-.25A3.5 3.5 0 0 1 11 8.5h6.75a3.5 3.5 0 0 1 3.5 3.5v1.5a3.5 3.5 0 0 1-3.5 3.5h-1.5' }],
  ['path', { d: 'M5.75 12.25C5.75 6.5 8.25 3.75 11.5 3.75s5.75 1.75 6.5 4.75' }],
  ['circle', { cx: 5.75, cy: 15.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18, cy: 11.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDomeCamera = createIcon('dome-camera', [
  ['path', { d: 'M3.5 5.5h17' }],
  ['path', { d: 'M5.75 5.5v3.25a6.25 6.25 0 0 0 12.5 0V5.5' }],
  ['circle', { cx: 12, cy: 10.25, r: 2.25 }],
]);
export const IconFieldTent = createIcon('field-tent', [
  ['path', { d: 'M2.75 20.5h18.5' }],
  ['path', { d: 'M4.25 20.5 12 4.5l7.75 16' }],
  ['path', { d: 'M9.25 20.5 12 14.25l2.75 6.25' }],
]);
export const IconIdBadge = createIcon('id-badge', [
  ['rect', { x: 5.5, y: 5, width: 13, height: 16, rx: 3 }],
  ['path', { d: 'M10 5V3h4v2' }],
  ['circle', { cx: 12, cy: 10.75, r: 2.25 }],
  ['path', { d: 'M8.5 17.25a3.5 3.5 0 0 1 7 0' }],
]);
export const IconMilitaryMedal = createIcon('military-medal', [
  ['path', { d: 'M7.5 3h9l-3 7h-3Z' }],
  ['circle', { cx: 12, cy: 15.25, r: 5.25 }],
  ['circle', { cx: 12, cy: 15.25, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMilitaryParachute = createIcon('military-parachute', [
  ['path', { d: 'M3.5 11a8.5 8.5 0 0 1 17 0 2.83 2.83 0 0 0-5.67 0 2.83 2.83 0 0 0-5.66 0A2.83 2.83 0 0 0 3.5 11Z' }],
  ['path', { d: 'M3.5 11 10 17.75M20.5 11 14 17.75' }],
  ['rect', { x: 9.75, y: 17.75, width: 4.5, height: 3.5, rx: 1 }],
]);
export const IconRankInsignia = createIcon('rank-insignia', [
  ['path', { d: 'M5.5 8.5 12 4.25l6.5 4.25M5.5 13.75 12 9.5l6.5 4.25M5.5 19 12 14.75 18.5 19' }],
]);
export const IconSecureDoor = createIcon('secure-door', [
  ['path', { d: 'M3 20.75h18M5 20.75V5A2 2 0 0 1 7 3h6a2 2 0 0 1 2 2v15.75' }],
  ['circle', { cx: 12.25, cy: 12.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 17.25, y: 9.5, width: 3.25, height: 5.5, rx: 1.25 }],
]);
export const IconSecurityGuard = createIcon('security-guard', [
  ['path', { d: 'M7.75 6.75h8.5M8.75 6.75V5L12 3.5l3.25 1.5v1.75' }],
  ['circle', { cx: 12, cy: 10.25, r: 3 }],
  ['path', { d: 'M5.5 20.75a6.5 6.5 0 0 1 13 0' }],
]);
export const IconSecurityRadar = createIcon('security-radar', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['circle', { cx: 12, cy: 12, r: 4.5 }],
  ['path', { d: 'M12 12 18.2 5.8' }],
  ['circle', { cx: 15.5, cy: 14.75, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSecurityShield = createIcon('security-shield', [
  ['path', { d: 'M12 3.25 5 5.75V11c0 4.5 2.9 8 7 9.75 4.1-1.75 7-5.25 7-9.75V5.75Z' }],
  ['circle', { cx: 12, cy: 11.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSecurityVest = createIcon('security-vest', [
  ['path', { d: 'M11 20.75H3.5V11C3.5 8 6 7 6 3h3.5c1.5 1 3.5 1 5 0H18c0 4 2.5 5 2.5 8v9.75H13' }],
  ['path', { d: 'M9.5 3 11 10v10.75M14.5 3 13 10v10.75' }],
  ['path', { d: 'M3.5 15.5H11M13 15.5h7.5' }],
]);
export const IconShieldAlert = createIcon('shield-alert', [
  ['path', { d: 'M12 3.25 5 5.75V11c0 4.5 2.9 8 7 9.75 4.1-1.75 7-5.25 7-9.75V5.75Z' }],
  ['path', { d: 'M12 8v4.25' }],
  ['circle', { cx: 12, cy: 15.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconShieldOff = createIcon('shield-off', [
  ['path', { d: 'M8 4.5 12 3.25l7 2.5V11c0 1.9-.5 3.6-1.4 5.1M15.5 18.6A11.5 11.5 0 0 1 12 20.75C7.9 19 5 15.5 5 11V6' }],
  ['path', { d: 'M3.75 3.75l16.5 16.5' }],
]);
export const IconShieldStar = createIcon('shield-star', [
  ['path', { d: 'M12 3.25 5 5.75V11c0 4.5 2.9 8 7 9.75 4.1-1.75 7-5.25 7-9.75V5.75Z' }],
  ['path', { d: 'M12 8.25l1 2.1 2.3.25-1.7 1.6.45 2.3L12 13.4l-2.05 1.1.45-2.3-1.7-1.6 2.3-.25Z' }],
]);
export const IconSiren = createIcon('siren', [
  ['path', { d: 'M7.5 16.5V12a4.5 4.5 0 0 1 9 0v4.5' }],
  ['rect', { x: 4.5, y: 16.5, width: 15, height: 4, rx: 1.5 }],
  ['path', { d: 'M12 3.25v2.25M4.75 6.25l1.5 1.5M19.25 6.25l-1.5 1.5' }],
]);
export const IconSurveillanceBinoculars = createIcon('surveillance-binoculars', [
  ['circle', { cx: 6.75, cy: 16, r: 3.5 }],
  ['circle', { cx: 17.25, cy: 16, r: 3.5 }],
  ['path', { d: 'M3.5 15 5.5 6.5a2 2 0 0 1 4 .5v5.5M20.5 15l-2-8.5a2 2 0 0 0-4 .5v5.5M9.5 12.5h5' }],
]);
export const IconTwoWayRadio = createIcon('two-way-radio', [
  ['rect', { x: 6.5, y: 7.5, width: 11, height: 13.5, rx: 3 }],
  ['path', { d: 'M9.5 7.5V2.75' }],
  ['path', { d: 'M14.75 7.5V5.75' }],
  ['path', { d: 'M10 12.5h4M10 15.75h4' }],
]);
export const IconWatchtower = createIcon('watchtower', [
  ['path', { d: 'M4.5 8 12 3.5 19.5 8Z' }],
  ['rect', { x: 6.5, y: 8, width: 11, height: 4.5, rx: 1.25 }],
  ['path', { d: 'M8.25 12.5 6.5 20.75M15.75 12.5l1.75 8.25M7.6 16.75h8.8' }],
]);
