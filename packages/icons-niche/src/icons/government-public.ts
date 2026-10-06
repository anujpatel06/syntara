/** Domain: government public. Style spec: @syntara/icons create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '@syntara/icons';

export const IconBallotBox = createIcon('ballot-box', [
  ['rect', { x: 4, y: 11, width: 16, height: 9.5, rx: 2.5 }],
  ['path', { d: 'M8.5 14h7' }],
  ['path', { d: 'M9 11V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V11' }],
  ['path', { d: 'M10.75 7.5l1 1 1.75-2' }],
]);
export const IconCapitolBuilding = createIcon('capitol-building', [
  ['path', { d: 'M7.5 10a4.5 4.5 0 0 1 9 0' }],
  ['circle', { cx: 12, cy: 4.25, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M4.5 10h15v7.5h-15ZM9.5 10v7.5M14.5 10v7.5' }],
  ['path', { d: 'M3.5 20.5h17' }],
]);
export const IconDecreeScroll = createIcon('decree-scroll', [
  ['path', { d: 'M18 16.5V5.5a2 2 0 0 0-2-2H5.5' }],
  ['path', { d: 'M5.5 3.5a2 2 0 0 0-2 2V7h4M7.5 5.5v13a2 2 0 0 0 4 0v-1.5h9v1.5a2 2 0 0 1-2 2H9.5' }],
  ['path', { d: 'M10.5 8h4.5M10.5 11.5h2.5' }],
  ['circle', { cx: 15.25, cy: 12.75, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconEmergencySiren = createIcon('emergency-siren', [
  ['path', { d: 'M7 16v-4a5 5 0 0 1 10 0v4' }],
  ['rect', { x: 5, y: 16, width: 14, height: 4.5, rx: 1.5 }],
  ['path', { d: 'M12 2.75v2M4.75 5.75l1.4 1.4M19.25 5.75l-1.4 1.4' }],
]);
export const IconFireExtinguisher = createIcon('fire-extinguisher', [
  ['rect', { x: 7, y: 9, width: 8, height: 12, rx: 3 }],
  ['path', { d: 'M9 9V6.5h4V9' }],
  ['path', { d: 'M9.5 6.5 5.5 4.75' }],
  ['path', { d: 'M13 6.5h3a2 2 0 0 1 2 2v7' }],
  ['circle', { cx: 18, cy: 16.25, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFireHydrant = createIcon('fire-hydrant', [
  ['path', { d: 'M8.5 20.5V15h-2v-3.5h2V9H7V8h1a4 4 0 0 1 8 0h1v1h-1.5v2.5h2V15h-2v5.5Z' }],
  ['path', { d: 'M12 4V2.75M6 20.5h12' }],
  ['circle', { cx: 12, cy: 13.25, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFireTruck = createIcon('fire-truck', [
  ['path', { d: 'M3 10a1 1 0 0 1 1-1h10v2h3.25a1 1 0 0 1 .8.4l2.45 3.3v2.8a1 1 0 0 1-1 1H19a2 2 0 0 0-4 0H9a2 2 0 0 0-4 0H4a1 1 0 0 1-1-1Z' }],
  ['circle', { cx: 7, cy: 18.5, r: 1.6 }],
  ['circle', { cx: 17, cy: 18.5, r: 1.6 }],
  ['path', { d: 'M4 3.75h9.5V7H4ZM5.5 7l2-3.25L9.5 7l2-3.25' }],
]);
export const IconFirefighterHelmet = createIcon('firefighter-helmet', [
  ['path', { d: 'M5 15c0-5 3-8.5 7-8.5s7 3.5 7 8.5' }],
  ['path', { d: 'M3 15h15.5c1.5 0 2.5 1 2.5 2.25 0 .75-.5 1.25-1.25 1.25H5.5A2.5 2.5 0 0 1 3 16Z' }],
  ['path', { d: 'M12 6.5V3.75M10 9.5h4l-.5 3.5h-3Z' }],
]);
export const IconIdCard = createIcon('id-card', [
  ['rect', { x: 2.75, y: 5, width: 18.5, height: 14, rx: 3 }],
  ['circle', { cx: 8.5, cy: 10.5, r: 2 }],
  ['path', { d: 'M5.75 15.75a2.75 2.75 0 0 1 5.5 0' }],
  ['path', { d: 'M14 10h4M14 13.5h4' }],
]);
export const IconLectern = createIcon('lectern', [
  ['path', { d: 'M5.75 7.5h12.5a.75.75 0 0 1 .7 1l-.75 2a.75.75 0 0 1-.7.5H6.5a.75.75 0 0 1-.7-.5l-.75-2a.75.75 0 0 1 .7-1Z' }],
  ['path', { d: 'M8 11l1 9.5h6l1-9.5M6.5 20.5h11' }],
  ['path', { d: 'M13 7.5l1.75-3.5' }],
  ['circle', { cx: 15.1, cy: 3.4, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMailbox = createIcon('mailbox', [
  ['path', { d: 'M8 7h8.5a4 4 0 0 1 4 4v5.5H3.5V11A4 4 0 0 1 8 7Z' }],
  ['path', { d: 'M8 7a4 4 0 0 1 4 4v5.5' }],
  ['path', { d: 'M12.5 16.5v4' }],
  ['path', { d: 'M15.5 11V3.5h3v2.75h-3' }],
]);
export const IconNoticeBoard = createIcon('notice-board', [
  ['rect', { x: 3, y: 3.5, width: 18, height: 17, rx: 2.5 }],
  ['path', { d: 'M6.5 7.5h5v5.5h-5ZM13.5 7.5h4v4h-4ZM11.5 15h5.5v2.5h-5.5Z' }],
  ['circle', { cx: 9, cy: 7.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.5, cy: 7.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 15, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconOfficialSeal = createIcon('official-seal', [
  ['path', { d: 'M12 3.5A1.63 1.63 0 0 1 15 4.3A1.63 1.63 0 0 1 17.2 6.5A1.63 1.63 0 0 1 18 9.5A1.63 1.63 0 0 1 17.2 12.5A1.63 1.63 0 0 1 15 14.7A1.63 1.63 0 0 1 12 15.5A1.63 1.63 0 0 1 9 14.7A1.63 1.63 0 0 1 6.8 12.5A1.63 1.63 0 0 1 6 9.5A1.63 1.63 0 0 1 6.8 6.5A1.63 1.63 0 0 1 9 4.3A1.63 1.63 0 0 1 12 3.5Z' }],
  ['circle', { cx: 12, cy: 9.5, r: 2.5 }],
  ['path', { d: 'M9 15.5 7.5 21l2.5-1.25L11.5 21l.5-5.5M15 15.5l1.5 5.5-2.5-1.25L12.5 21' }],
]);
export const IconParcelScale = createIcon('parcel-scale', [
  ['rect', { x: 7.5, y: 3.5, width: 9, height: 7, rx: 1.5 }],
  ['path', { d: 'M4 11h16' }],
  ['rect', { x: 5, y: 13, width: 14, height: 7.5, rx: 2 }],
  ['path', { d: 'M12 16.75l1.5-1.5' }],
]);
export const IconParkingMeter = createIcon('parking-meter', [
  ['rect', { x: 7, y: 3, width: 10, height: 9.5, rx: 3.5 }],
  ['path', { d: 'M10.75 10V5.5h1.75a1.5 1.5 0 0 1 0 3h-1.75' }],
  ['path', { d: 'M12 12.5v8M8.5 20.5h7' }],
]);
export const IconParliamentSeats = createIcon('parliament-seats', [
  ['path', { d: 'M3.5 20.5h17' }],
  ['path', { d: 'M10.5 20.5v-3.5h3v3.5' }],
  ['path', { d: 'M3.75 17.5a8.25 8.25 0 0 1 16.5 0' }],
  ['path', { d: 'M7 17.5a5 5 0 0 1 10 0' }],
]);
export const IconPetition = createIcon('petition', [
  ['rect', { x: 5, y: 4.5, width: 14, height: 16.5, rx: 2.5 }],
  ['path', { d: 'M9.25 4.5V3h5.5v1.5' }],
  ['path', { d: 'M8.5 9.5h7M8.5 12.5h7' }],
  ['path', { d: 'M8.5 17.25c1-1.5 2-1.5 2.5 0s1.5 1 2.5-.5 1.5-.5 2.5.5' }],
]);
export const IconPoliceBadge = createIcon('police-badge', [
  ['path', { d: 'M12 3 5 5.75v5.75c0 4.25 3 7.75 7 9.5 4-1.75 7-5.25 7-9.5V5.75Z' }],
  ['path', { d: 'M12 8.25L12.76 10.2L14.85 10.32L13.24 11.65L13.76 13.68L12 12.55L10.24 13.68L10.76 11.65L9.15 10.32L11.24 10.2Z' }],
]);
export const IconPoliceCap = createIcon('police-cap', [
  ['path', { d: 'M5 13 3.75 9.25 12 5l8.25 4.25L19 13Z' }],
  ['path', { d: 'M5 13v2h14v-2' }],
  ['path', { d: 'M5 15c2 2.25 4.5 3.25 7 3.25S17 17.25 19 15' }],
  ['circle', { cx: 12, cy: 9.75, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPoliceCar = createIcon('police-car', [
  ['path', { d: 'M5 11l1.5-4.25a1.5 1.5 0 0 1 1.4-1h8.2a1.5 1.5 0 0 1 1.4 1L19 11' }],
  ['rect', { x: 3.5, y: 11, width: 17, height: 6, rx: 2 }],
  ['path', { d: 'M6 17v2.5M18 17v2.5' }],
  ['path', { d: 'M10.5 5.75V4.25a1.5 1.5 0 0 1 3 0v1.5' }],
  ['circle', { cx: 7, cy: 14, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 14, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPoliceWhistle = createIcon('police-whistle', [
  ['circle', { cx: 9, cy: 14.5, r: 5.5 }],
  ['path', { d: 'M9 9h10.5a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-6.4' }],
  ['path', { d: 'M5 10.5 3.5 7.5' }],
  ['circle', { cx: 9, cy: 14.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPollingStation = createIcon('polling-station', [
  ['path', { d: 'M12 21s-6.5-5.5-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.5 12 21 12 21Z' }],
  ['path', { d: 'M9.5 10l1.75 1.75 3.25-3.5' }],
]);
export const IconPostageStamp = createIcon('postage-stamp', [
  ['path', { d: 'M4.5 3a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 3 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 -3 0a1.5 1.5 0 0 0 -3 0a1.5 1.5 0 0 0 -3 0a1.5 1.5 0 0 0 -3 0a1.5 1.5 0 0 0 -3 0a1.5 1.5 0 0 0 0 -3a1.5 1.5 0 0 0 0 -3a1.5 1.5 0 0 0 0 -3a1.5 1.5 0 0 0 0 -3a1.5 1.5 0 0 0 0 -3a1.5 1.5 0 0 0 0 -3Z' }],
  ['path', { d: 'M8 15.5l2.5-3 2 2 1.5-1.5 2 2.5' }],
  ['circle', { cx: 14.5, cy: 8.75, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPostbox = createIcon('postbox', [
  ['path', { d: 'M6.5 20.5V9a5.5 5.5 0 0 1 11 0v11.5' }],
  ['path', { d: 'M5.5 9h13' }],
  ['path', { d: 'M9.5 12.5h5' }],
  ['path', { d: 'M5 20.5h14' }],
]);
export const IconRescueRing = createIcon('rescue-ring', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['circle', { cx: 12, cy: 12, r: 4 }],
  ['path', { d: 'M19.21 16.5A8.5 8.5 0 0 1 16.5 19.21L14.12 15.39A4 4 0 0 0 15.39 14.12ZM7.5 19.21A8.5 8.5 0 0 1 4.79 16.5L8.61 14.12A4 4 0 0 0 9.88 15.39ZM4.79 7.5A8.5 8.5 0 0 1 7.5 4.79L9.88 8.61A4 4 0 0 0 8.61 9.88ZM16.5 4.79A8.5 8.5 0 0 1 19.21 7.5L15.39 9.88A4 4 0 0 0 14.12 8.61Z', fill: 'currentColor' }],
]);
export const IconStreetLight = createIcon('street-light', [
  ['path', { d: 'M7 20.5V7a3.5 3.5 0 0 1 3.5-3.5h4' }],
  ['path', { d: 'M14.5 3.5h3.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-3.5Z' }],
  ['path', { d: 'M4.5 20.5h5' }],
  ['circle', { cx: 16.25, cy: 9.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconStreetSign = createIcon('street-sign', [
  ['path', { d: 'M12 21V3' }],
  ['path', { d: 'M12 5h6.5l2 2-2 2H12M12 11H5.5l-2 2 2 2H12' }],
]);
export const IconTownHall = createIcon('town-hall', [
  ['path', { d: 'M9 20.5V9.5L12 4l3 5.5v11' }],
  ['circle', { cx: 12, cy: 12, r: 1.5 }],
  ['path', { d: 'M9 14H3.5v6.5h17V14H15' }],
]);
export const IconTrafficCone = createIcon('traffic-cone', [
  ['path', { d: 'M10 3.5h4l4.5 15h-13Z' }],
  ['path', { d: 'M8.25 9.5h7.5M7 14h10' }],
  ['path', { d: 'M4 20.5h16' }],
]);
export const IconWalkieTalkie = createIcon('walkie-talkie', [
  ['rect', { x: 7, y: 7, width: 10, height: 14, rx: 2.5 }],
  ['path', { d: 'M9.5 7V2.75' }],
  ['path', { d: 'M9.75 11h4.5M9.75 13.75h4.5' }],
  ['circle', { cx: 12, cy: 17.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
