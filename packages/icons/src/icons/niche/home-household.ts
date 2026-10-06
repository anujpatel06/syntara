/** Domain: home household. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAirConditioner = createIcon('air-conditioner', [
  ['rect', { x: 2.75, y: 4, width: 18.5, height: 9, rx: 2.25 }],
  ['path', { d: 'M6 10h12' }],
  ['path', { d: 'M7 16.5c-.75 1 .75 2 0 3.5M12 16.5c-.75 1 .75 2 0 3.5M17 16.5c-.75 1 .75 2 0 3.5' }],
]);
export const IconBedroomWardrobe = createIcon('bedroom-wardrobe', [
  ['rect', { x: 4.5, y: 2.75, width: 15, height: 16.5, rx: 2 }],
  ['path', { d: 'M12 2.75v16.5' }],
  ['path', { d: 'M7 19.25v1.75M17 19.25v1.75' }],
  ['circle', { cx: 10, cy: 11, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 11, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBroom = createIcon('broom', [
  ['path', { d: 'M18.75 3 13.25 11' }],
  ['path', { d: 'M10 10l6.5 3.75-2.5 7.25H4.25l2-6.75Z' }],
  ['path', { d: 'M8 21l1.75-5M11.25 21l1.75-4.75' }],
]);
export const IconCeilingFan = createIcon('ceiling-fan', [
  ['path', { d: 'M12 2.75V7M10.25 11a1.75 1.75 0 0 0 3.5 0' }],
  ['circle', { cx: 12, cy: 9, r: 2 }],
  ['ellipse', { cx: 6, cy: 9, rx: 3.5, ry: 1.25 }],
  ['ellipse', { cx: 18, cy: 9, rx: 3.5, ry: 1.25 }],
]);
export const IconCleaningBucket = createIcon('cleaning-bucket', [
  ['path', { d: 'M4.5 10h15l-1.5 10.75H6Z' }],
  ['path', { d: 'M5.75 10a6.25 4.5 0 0 1 12.5 0' }],
  ['circle', { cx: 9.5, cy: 5.5, r: 1.5 }],
  ['circle', { cx: 14, cy: 4.25, r: 1.25 }],
]);
export const IconClothesIron = createIcon('clothes-iron', [
  ['path', { d: 'M2.75 18h17a1.25 1.25 0 0 0 1.25-1.25V15a6 6 0 0 0-6-6H9.25C5.5 9 3.5 13 2.75 18Z' }],
  ['path', { d: 'M9.5 9V7.5A2 2 0 0 1 11.5 5.5h7.25A2.25 2.25 0 0 1 21 7.75V15' }],
  ['circle', { cx: 14.5, cy: 13.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCurtains = createIcon('curtains', [
  ['path', { d: 'M2.75 3.5h18.5' }],
  ['path', { d: 'M5 3.5v17c3 0 4.5-5 5.25-9.5L9.5 3.5' }],
  ['path', { d: 'M19 3.5v17c-3 0-4.5-5-5.25-9.5L14.5 3.5' }],
]);
export const IconDiyPowerDrill = createIcon('diy-power-drill', [
  ['path', { d: 'M3.5 5.5h10.5a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5H3.5Z' }],
  ['path', { d: 'M16.5 8.5h4.5' }],
  ['path', { d: 'M7 11.5 5.75 20.5h4.5l1.25-9' }],
]);
export const IconDiyScrewdriver = createIcon('diy-screwdriver', [
  ['rect', { x: 9.75, y: 1.75, width: 4.5, height: 10.5, rx: 2.25, transform: 'rotate(-40 12 12)' }],
  ['rect', { x: 10.75, y: 12.25, width: 2.5, height: 2, rx: 0.5, transform: 'rotate(-40 12 12)' }],
  ['path', { d: 'M12 14.25v7.5', transform: 'rotate(-40 12 12)' }],
]);
export const IconDiyTapeMeasure = createIcon('diy-tape-measure', [
  ['rect', { x: 2.75, y: 4, width: 14, height: 14, rx: 4 }],
  ['circle', { cx: 9.75, cy: 11, r: 2.5 }],
  ['path', { d: 'M16.75 15.5H21v2.5' }],
]);
export const IconDoorbell = createIcon('doorbell', [
  ['rect', { x: 7, y: 2.75, width: 10, height: 18.5, rx: 5 }],
  ['circle', { cx: 12, cy: 14.25, r: 2.5 }],
  ['path', { d: 'M10 7.5h4' }],
]);
export const IconElectricKettle = createIcon('electric-kettle', [
  ['path', { d: 'M6 20.5 7.25 9h9.5l1 11.5Z' }],
  ['path', { d: 'M7.25 9 4.25 6.25' }],
  ['path', { d: 'M16.75 10.5h1.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-.75' }],
  ['path', { d: 'M9.75 9V6.75h4.5V9' }],
]);
export const IconFloorLamp = createIcon('floor-lamp', [
  ['path', { d: 'M8 3h8l2.25 6.5H5.75Z' }],
  ['path', { d: 'M12 9.5v11.25' }],
  ['path', { d: 'M8.5 20.75h7' }],
]);
export const IconGardenRake = createIcon('garden-rake', [
  ['path', { d: 'M12 2.75V14' }],
  ['path', { d: 'M5.25 20.5V14h13.5v6.5' }],
  ['path', { d: 'M9.75 14v6.5M14.25 14v6.5' }],
]);
export const IconGardenSpade = createIcon('garden-spade', [
  ['path', { d: 'M8.5 13h7v4a3.5 3.5 0 0 1-7 0Z' }],
  ['path', { d: 'M12 13V6' }],
  ['path', { d: 'M9.5 3h5v3h-5Z' }],
]);
export const IconGardenWateringCan = createIcon('garden-watering-can', [
  ['path', { d: 'M4.5 9h9.5v9.5a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 4.5 18.5Z' }],
  ['path', { d: 'M14 13.5 19.5 8' }],
  ['path', { d: 'M18.25 6.5l2.75 2.75' }],
  ['path', { d: 'M7 9V6.25a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2V9' }],
]);
export const IconGardenWheelbarrow = createIcon('garden-wheelbarrow', [
  ['path', { d: 'M2.75 8.5h13L13.5 14.5H6.5Z' }],
  ['circle', { cx: 6.5, cy: 18.25, r: 2.25 }],
  ['path', { d: 'M15.75 8.5 21 6.75M12 14.5l2.5 6' }],
]);
export const IconHammer = createIcon('hammer', [
  ['rect', { x: 6, y: 4.5, width: 12, height: 4.5, rx: 1.5, transform: 'rotate(-40 12 12)' }],
  ['rect', { x: 10.75, y: 9, width: 2.5, height: 11.5, rx: 1.25, transform: 'rotate(-40 12 12)' }],
]);
export const IconHomeBathtub = createIcon('home-bathtub', [
  ['path', { d: 'M2.75 11.5h18.5V14a5 5 0 0 1-5 5h-8.5a5 5 0 0 1-5-5Z' }],
  ['path', { d: 'M5.5 11.5V5.5a2 2 0 0 1 4 0' }],
  ['path', { d: 'M6.5 19l-1 2M17.5 19l1 2' }],
]);
export const IconHomeFrontDoor = createIcon('home-front-door', [
  ['path', { d: 'M3 21h18M5 21V4.5A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5V21' }],
  ['path', { d: 'M9.5 10V8.5a2.5 2.5 0 0 1 5 0V10Z' }],
  ['circle', { cx: 15.5, cy: 14.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconHomeShower = createIcon('home-shower', [
  ['path', { d: 'M4.5 21V7a3.5 3.5 0 0 1 3.5-3.5h2.5A3.5 3.5 0 0 1 14 7' }],
  ['path', { d: 'M10 10.75a4 4 0 0 1 8 0Z' }],
  ['circle', { cx: 11.25, cy: 14, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 14, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.75, cy: 14, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 17.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconHomeToolbox = createIcon('home-toolbox', [
  ['rect', { x: 2.75, y: 8, width: 18.5, height: 12.5, rx: 2 }],
  ['path', { d: 'M9 8V5.5h6V8' }],
  ['path', { d: 'M2.75 13h7.75M13.5 13h7.75' }],
  ['rect', { x: 10.5, y: 11.5, width: 3, height: 3, rx: 1 }],
]);
export const IconHousePlant = createIcon('house-plant', [
  ['path', { d: 'M7 14h10l-1.25 7h-7.5Z' }],
  ['path', { d: 'M12 14V8.5' }],
  ['path', { d: 'M12 10.5c-3 0-5-2-5-5 3 0 5 2 5 5ZM12 8.5c0-3 2-5 5-5 0 3-2 5-5 5Z' }],
]);
export const IconHouseWindow = createIcon('house-window', [
  ['rect', { x: 4, y: 3, width: 16, height: 16.5, rx: 2 }],
  ['path', { d: 'M12 3v16.5M4 11.25h16' }],
  ['path', { d: 'M2.75 21h18.5' }],
]);
export const IconKitchenBlender = createIcon('kitchen-blender', [
  ['path', { d: 'M7 3h10l-1.75 11h-6.5Z' }],
  ['rect', { x: 6.5, y: 14, width: 11, height: 7, rx: 2 }],
  ['circle', { cx: 12, cy: 17.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLaundryBasket = createIcon('laundry-basket', [
  ['path', { d: 'M4.5 10h15l-1.75 10.5H6.25Z' }],
  ['path', { d: 'M3 10h18' }],
  ['path', { d: 'M7 10c0-2 2-3.5 4-3s3 2 5 1.25c1.25-.5 2 .5 2 1.75' }],
]);
export const IconLaundryHanger = createIcon('laundry-hanger', [
  ['path', { d: 'M12 8V6.75a2.25 2.25 0 1 0-2.25-2.25' }],
  ['path', { d: 'M12 8 3.25 15a1.5 1.5 0 0 0 1 2.5h15.5a1.5 1.5 0 0 0 1-2.5Z' }],
]);
export const IconLawnMower = createIcon('lawn-mower', [
  ['path', { d: 'M3.5 17a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3Z' }],
  ['path', { d: 'M15 14 20.25 4.25M18.5 4.25h3' }],
  ['circle', { cx: 7, cy: 18.5, r: 2 }],
  ['circle', { cx: 15, cy: 18.5, r: 2 }],
]);
export const IconLightSwitch = createIcon('light-switch', [
  ['rect', { x: 6, y: 2.75, width: 12, height: 18.5, rx: 2.5 }],
  ['rect', { x: 9.5, y: 7, width: 5, height: 10, rx: 1.75 }],
  ['path', { d: 'M9.5 12h5' }],
]);
export const IconLightbulb = createIcon('lightbulb', [
  ['path', { d: 'M9 16.5c0-2-3.5-3.5-3.5-7.5a6.5 6.5 0 0 1 13 0c0 4-3.5 5.5-3.5 7.5Z' }],
  ['path', { d: 'M9.5 19h5M10.5 21.25h3' }],
]);
export const IconOven = createIcon('oven', [
  ['rect', { x: 4, y: 2.75, width: 16, height: 18.5, rx: 2.5 }],
  ['path', { d: 'M4 8h16' }],
  ['rect', { x: 7, y: 11, width: 10, height: 6.75, rx: 1.25 }],
  ['circle', { cx: 7.5, cy: 5.4, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 5.4, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 5.4, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPlunger = createIcon('plunger', [
  ['path', { d: 'M12 2.75V12' }],
  ['path', { d: 'M5.5 18a6.5 6 0 0 1 13 0Z' }],
  ['path', { d: 'M4 20.75h16' }],
]);
export const IconPowerSocket = createIcon('power-socket', [
  ['rect', { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
  ['circle', { cx: 12, cy: 12, r: 5.25 }],
  ['circle', { cx: 9.75, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRefrigerator = createIcon('refrigerator', [
  ['rect', { x: 5.5, y: 2.75, width: 13, height: 18.5, rx: 2.5 }],
  ['path', { d: 'M5.5 9.5h13' }],
  ['path', { d: 'M8.5 5.25v2M8.5 12v3' }],
]);
export const IconSinkTap = createIcon('sink-tap', [
  ['path', { d: 'M3.5 6.5v6.5M3.5 9.5H13a4 4 0 0 1 4 4V15' }],
  ['path', { d: 'M9.5 9.5V5.75M7.25 5.75h4.5' }],
  ['path', { d: 'M17 18c.9 1 1.25 1.6 1.25 2.1a1.25 1.25 0 0 1-2.5 0c0-.5.35-1.1 1.25-2.1Z' }],
]);
export const IconSmokeDetector = createIcon('smoke-detector', [
  ['path', { d: 'M3 3.5h18' }],
  ['path', { d: 'M5.5 3.5v1.75A3.25 3.25 0 0 0 8.75 8.5h6.5a3.25 3.25 0 0 0 3.25-3.25V3.5' }],
  ['path', { d: 'M9.5 20.75c-1.5-1.25.5-2.25 0-3.5s1.5-2.25 0-3.5M14.5 20.75c-1.5-1.25.5-2.25 0-3.5s1.5-2.25 0-3.5' }],
  ['circle', { cx: 12, cy: 5.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSofa = createIcon('sofa', [
  ['path', { d: 'M5 11V8.5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3V11' }],
  ['path', { d: 'M3 13.25a2 2 0 0 1 4 0V15h10v-1.75a2 2 0 0 1 4 0V18.5H3Z' }],
  ['path', { d: 'M5 18.5v2M19 18.5v2' }],
]);
export const IconSponge = createIcon('sponge', [
  ['rect', { x: 3, y: 10, width: 18, height: 10, rx: 3 }],
  ['path', { d: 'M3 13.5h18' }],
  ['circle', { cx: 9, cy: 5.75, r: 2 }],
  ['circle', { cx: 14, cy: 4.25, r: 1.25 }],
  ['circle', { cx: 7.5, cy: 16.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 17.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.25, cy: 16.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSprayBottle = createIcon('spray-bottle', [
  ['path', { d: 'M8 9h7l1.5 3.5v7a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5v-7Z' }],
  ['path', { d: 'M9 9V5h5.75l2.5 2.25' }],
  ['path', { d: 'M14 5l-.5 4' }],
  ['circle', { cx: 19.75, cy: 4.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 20.5, cy: 7.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 10, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconStepLadder = createIcon('step-ladder', [
  ['path', { d: 'M5.75 21 9.5 3h5l3.75 18' }],
  ['path', { d: 'M8.65 8h6.7M7.6 13h8.8M6.55 18h10.9' }],
]);
export const IconToilet = createIcon('toilet', [
  ['rect', { x: 3.5, y: 3, width: 6.5, height: 8.5, rx: 1.5 }],
  ['path', { d: 'M3.5 11.5h17c0 3-2.25 5-5.5 5.5l.75 4H8.5l.75-4.25C5.5 16 3.5 14 3.5 11.5Z' }],
]);
export const IconWallPaintRoller = createIcon('wall-paint-roller', [
  ['rect', { x: 3.5, y: 3, width: 14, height: 5, rx: 2 }],
  ['path', { d: 'M17.5 5.5h2.25v5H12v3.5' }],
  ['rect', { x: 10.5, y: 14, width: 3, height: 7, rx: 1.5 }],
]);
export const IconWashingMachine = createIcon('washing-machine', [
  ['rect', { x: 4, y: 2.75, width: 16, height: 18.5, rx: 2.5 }],
  ['path', { d: 'M4 7h16' }],
  ['circle', { cx: 12, cy: 14, r: 4.25 }],
  ['circle', { cx: 7, cy: 4.9, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconWrench = createIcon('wrench', [
  ['path', { d: 'M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2.12 2.12 0 0 1-3 3l-6-6a6 6 0 0 1-8-8Z' }],
]);
