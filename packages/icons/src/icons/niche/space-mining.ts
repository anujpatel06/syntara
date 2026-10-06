/** Domain: space mining. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAlienHead = createIcon('alien-head', [
  ['path', { d: 'M12 3a7.5 7.5 0 0 0-7.5 7.5c0 5 4.5 10.5 7.5 10.5s7.5-5.5 7.5-10.5A7.5 7.5 0 0 0 12 3Z' }],
  ['ellipse', { cx: 8.75, cy: 11.5, rx: 2.25, ry: 1.25, transform: 'rotate(30 8.75 11.5)' }],
  ['ellipse', { cx: 15.25, cy: 11.5, rx: 2.25, ry: 1.25, transform: 'rotate(-30 15.25 11.5)' }],
]);
export const IconAstronautHelmet = createIcon('astronaut-helmet', [
  ['circle', { cx: 12, cy: 11, r: 8 }],
  ['rect', { x: 7, y: 7.5, width: 10, height: 6.5, rx: 3.25 }],
  ['path', { d: 'M7 19.75h10' }],
]);
export const IconComet = createIcon('comet', [
  ['circle', { cx: 16, cy: 8, r: 3.5 }],
  ['path', { d: 'M13.25 10.75 3.5 20.5M12.75 7.25 7 13M16.75 11.25 11 17' }],
]);
export const IconCrystalCluster = createIcon('crystal-cluster', [
  ['path', { d: 'M12 3l2.75 4.5v13h-5.5v-13Z' }],
  ['path', { d: 'M9.25 20.5H5.5v-8L7 9.5l2.25 2.5' }],
  ['path', { d: 'M14.75 20.5h3.75v-6.5L17 11.25l-2.25 2.25' }],
]);
export const IconDrillingRig = createIcon('drilling-rig', [
  ['path', { d: 'M8 21 11 3h2l3 18' }],
  ['path', { d: 'M9.6 11.5h4.8M8.75 16.25h6.5' }],
  ['path', { d: 'M5 21h14' }],
]);
export const IconFlyingSaucer = createIcon('flying-saucer', [
  ['path', { d: 'M8.5 11a3.5 3.5 0 0 1 7 0' }],
  ['ellipse', { cx: 12, cy: 13, rx: 9.25, ry: 3 }],
  ['path', { d: 'M8 17.5 6.5 20.5M16 17.5l1.5 3' }],
]);
export const IconGemstone = createIcon('gemstone', [
  ['path', { d: 'M6.5 4h11l3.5 5-9 11.5L3 9Z' }],
  ['path', { d: 'M3 9h18' }],
  ['path', { d: 'M9.5 9 12 20.5 14.5 9 12 4Z' }],
]);
export const IconGoldBullion = createIcon('gold-bullion', [
  ['path', { d: 'M3 20.5l1.5-5h6l1.5 5ZM12 20.5l1.5-5h6l1.5 5ZM7.5 15.5 9 10.5h6l1.5 5Z' }],
]);
export const IconJackhammer = createIcon('jackhammer', [
  ['rect', { x: 8, y: 3.25, width: 8, height: 9, rx: 2 }],
  ['path', { d: 'M4.25 6.75H8M16 6.75h3.75' }],
  ['path', { d: 'M10.75 12.25v3L12 21l1.25-5.75v-3' }],
]);
export const IconLunarLander = createIcon('lunar-lander', [
  ['rect', { x: 8, y: 4.5, width: 8, height: 7, rx: 2 }],
  ['path', { d: 'M8.5 11.5 5 18.75H3.25M15.5 11.5l3.5 7.25h1.75' }],
  ['path', { d: 'M10.25 11.5 9.75 14h4.5l-.5-2.5' }],
]);
export const IconMarsRover = createIcon('mars-rover', [
  ['rect', { x: 4.5, y: 9.5, width: 14, height: 5, rx: 1.5 }],
  ['path', { d: 'M8.5 18a2 2 0 1 1-4 0 2 2 0 1 1 4 0ZM14 18a2 2 0 1 1-4 0 2 2 0 1 1 4 0ZM19.5 18a2 2 0 1 1-4 0 2 2 0 1 1 4 0Z' }],
  ['path', { d: 'M15.5 9.5V5h3.5' }],
]);
export const IconMineCart = createIcon('mine-cart', [
  ['path', { d: 'M3 8.5h18l-2.5 8.5h-13Z' }],
  ['circle', { cx: 7.5, cy: 19.25, r: 1.75 }],
  ['circle', { cx: 16.5, cy: 19.25, r: 1.75 }],
  ['path', { d: 'M6.5 8.5a2 2 0 0 1 3.5-1.75 2.5 2.5 0 0 1 4.5.25 2 2 0 0 1 3 1.5' }],
]);
export const IconMineEntrance = createIcon('mine-entrance', [
  ['path', { d: 'M2.5 20.5 9 7.5l3 4 2.75-3.5 6.75 12.5Z' }],
  ['path', { d: 'M9 20.5v-6M15 20.5v-6M7.75 14.5h8.5' }],
]);
export const IconMiningExcavator = createIcon('mining-excavator', [
  ['path', { d: 'M3.5 16.5V11h3.25V7.5h4.5V11h2.25v5.5' }],
  ['rect', { x: 2.75, y: 16.5, width: 11.5, height: 4, rx: 2 }],
  ['path', { d: 'M13.5 11 17 5.25l3.25 4.75' }],
  ['path', { d: 'M18.25 10.25h3.25l-1 4.25h-2.25Z' }],
]);
export const IconMiningHelmet = createIcon('mining-helmet', [
  ['path', { d: 'M4.5 15.5a7.5 7.5 0 0 1 15 0h1.25a1.25 1.25 0 0 1 0 2.5H3.25a1.25 1.25 0 0 1 0-2.5Z' }],
  ['circle', { cx: 12, cy: 11, r: 2.5 }],
  ['circle', { cx: 12, cy: 11, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMoonSurface = createIcon('moon-surface', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['circle', { cx: 9, cy: 9.25, r: 2.25 }],
  ['circle', { cx: 15.25, cy: 14.75, r: 1.75 }],
  ['circle', { cx: 9.5, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconOrbitPath = createIcon('orbit-path', [
  ['circle', { cx: 12, cy: 12, r: 3.25 }],
  ['ellipse', { cx: 12, cy: 12, rx: 9.25, ry: 4, transform: 'rotate(-25 12 12)' }],
  ['circle', { cx: 19.5, cy: 6.75, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconOreChunk = createIcon('ore-chunk', [
  ['path', { d: 'M3.5 15.5 6 8.5l5-3.5 6.5 1.5 3 6.5-2.5 6.5H7.5Z' }],
  ['circle', { cx: 9, cy: 11, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 10.25, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12.5, cy: 15, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPickaxe = createIcon('pickaxe', [
  ['path', { d: 'M4.75 9.5C8.5 4.5 15.5 4.5 19.25 9.5 15.5 7 8.5 7 4.75 9.5Z', transform: 'rotate(-35 12 12.5)' }],
  ['path', { d: 'M12 6.75V21', transform: 'rotate(-35 12 12.5)' }],
]);
export const IconRingedPlanet = createIcon('ringed-planet', [
  ['circle', { cx: 12, cy: 12, r: 5.5 }],
  ['ellipse', { cx: 12, cy: 12, rx: 9.75, ry: 3, transform: 'rotate(-20 12 12)' }],
]);
export const IconSpaceRocket = createIcon('space-rocket', [
  ['path', { d: 'M12 2.75c3 2.25 4.5 5.5 4.5 9.25v4.75h-9V12c0-3.75 1.5-7 4.5-9.25Z' }],
  ['path', { d: 'M7.5 12.5 4.5 15.5v3.25l3-2M16.5 12.5l3 3v3.25l-3-2' }],
  ['circle', { cx: 12, cy: 9, r: 1.75 }],
  ['path', { d: 'M10.25 19.25 12 21.25l1.75-2' }],
]);
export const IconSpaceSatellite = createIcon('space-satellite', [
  ['rect', { x: 9.5, y: 9, width: 5, height: 6, rx: 1.5, transform: 'rotate(-45 12 12)' }],
  ['rect', { x: 2.75, y: 8, width: 4, height: 8, rx: 1, transform: 'rotate(-45 12 12)' }],
  ['rect', { x: 17.25, y: 8, width: 4, height: 8, rx: 1, transform: 'rotate(-45 12 12)' }],
  ['path', { d: 'M6.75 12H9.5M14.5 12h2.75', transform: 'rotate(-45 12 12)' }],
]);
export const IconSpiralGalaxy = createIcon('spiral-galaxy', [
  ['path', { d: 'M12 12C15 12 16.5 9.5 15.5 7.5S11.5 4 8.5 5 4 8.5 4.5 11.5' }],
  ['path', { d: 'M12 12C9 12 7.5 14.5 8.5 16.5S12.5 20 15.5 19 20 15.5 19.5 12.5' }],
  ['circle', { cx: 12, cy: 12, r: 2, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 4.5, cy: 19, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconStarConstellation = createIcon('star-constellation', [
  ['path', { d: 'M4 17.5 8.5 11l5.5 2.5 3.08-5.47M14 13.5l3.5 5.5' }],
  ['path', { d: 'M18.5 2.75q.5 2.25 2.75 2.75q-2.25.5-2.75 2.75q-.5-2.25-2.75-2.75q2.25-.5 2.75-2.75Z' }],
  ['circle', { cx: 4, cy: 17.5, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 8.5, cy: 11, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 13.5, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 19, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTelescope = createIcon('telescope', [
  ['rect', { x: 4, y: 6.5, width: 14, height: 5, rx: 2, transform: 'rotate(-25 11 9)' }],
  ['path', { d: 'M12 13 8 21M12 13l4 8' }],
  ['path', { d: 'M19.25 3.5l1.5 3.25' }],
]);
