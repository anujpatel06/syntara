/** Domain: agriculture farming. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconBarn = createIcon('barn', [
  ['path', { d: 'M4 20.5V10l3-5h10l3 5v10.5Z' }],
  ['path', { d: 'M9 20.5v-6h6v6M9 14.5l6 6M15 14.5l-6 6' }],
]);
export const IconBeehive = createIcon('beehive', [
  ['path', { d: 'M4.5 20.5c0-6 1-9 2.5-11C7 6 9.25 3.5 12 3.5S17 6 17 9.5c1.5 2 2.5 5 2.5 11Z' }],
  ['path', { d: 'M6.75 10h10.5M5.25 15h13.5' }],
  ['path', { d: 'M10.5 20.5v-2a1.5 1.5 0 0 1 3 0v2' }],
]);
export const IconCattleEarTag = createIcon('cattle-ear-tag', [
  ['path', { d: 'M8.5 8 3 8.5c.5 1.75 2.5 3 5.5 3L9 17a3 3 0 0 0 6 0l.5-5.5c3 0 5-1.25 5.5-3L15.5 8Z' }],
  ['path', { d: 'M9 8c-1.5-.75-2-2.5-1.5-4.5M15 8c1.5-.75 2-2.5 1.5-4.5' }],
  ['rect', { x: 16.5, y: 12.5, width: 4.5, height: 5.5, rx: 1.25 }],
  ['path', { d: 'M18.75 14.25v2' }],
  ['circle', { cx: 10.75, cy: 17, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.25, cy: 17, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCompostBin = createIcon('compost-bin', [
  ['path', { d: 'M5 8h14l-1.5 12.5h-11Z' }],
  ['path', { d: 'M4 8h16M10 5h4' }],
  ['path', { d: 'M12 17.5c-1.5 0-2.5-1-2.5-2.5 1.5 0 2.5 1 2.5 2.5Zm0 0c0-2 1.25-3.5 3-3.5 0 2-1.25 3.5-3 3.5Z' }],
]);
export const IconCornCob = createIcon('corn-cob', [
  ['path', { d: 'M12 3c2 0 3.5 2.5 3.5 7S14 18 12 18s-3.5-3-3.5-8S10 3 12 3Z' }],
  ['path', { d: 'M8.5 10.5c-1.5 4.5 0 8.5 3.5 10.5 3.5-2 5-6 3.5-10.5' }],
  ['circle', { cx: 12, cy: 7, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 10.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 14, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCropDrone = createIcon('crop-drone', [
  ['rect', { x: 9, y: 9, width: 6, height: 6, rx: 2 }],
  ['path', { d: 'M9 9 6 6M15 9l3-3M9 15l-3 3M15 15l3 3' }],
  ['ellipse', { cx: 5.5, cy: 5.5, rx: 3, ry: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['ellipse', { cx: 18.5, cy: 5.5, rx: 3, ry: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['ellipse', { cx: 5.5, cy: 18.5, rx: 3, ry: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['ellipse', { cx: 18.5, cy: 18.5, rx: 3, ry: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCropRotation = createIcon('crop-rotation', [
  ['path', { d: 'M5.5 9a7 7 0 0 1 12.5-2.5M18.5 15a7 7 0 0 1-12.5 2.5' }],
  ['path', { d: 'M18.5 3v4h-4M5.5 21v-4h4' }],
  ['path', { d: 'M12 15c0-2.5 1.25-4 3-4.5-.25 2.5-1.25 4-3 4.5Z' }],
]);
export const IconDairyCow = createIcon('dairy-cow', [
  ['path', { d: 'M7.5 7.5h9c1 0 1.5.75 1.5 1.75V13c0 .9.5 1.5.5 2.75a4 4 0 0 1-4 4h-5a4 4 0 0 1-4-4c0-1.25.5-1.85.5-2.75V9.25C6 8.25 6.5 7.5 7.5 7.5Z' }],
  ['path', { d: 'M6 9.5 3 8.5M18 9.5l3-1M8 7.5c-.5-1.5-1.5-2.5-3-3M16 7.5c.5-1.5 1.5-2.5 3-3' }],
  ['circle', { cx: 9.5, cy: 11.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.5, cy: 11.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.75, cy: 16.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.25, cy: 16.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDripIrrigation = createIcon('drip-irrigation', [
  ['path', { d: 'M2.5 6.5h19' }],
  ['path', { d: 'M7 9.5c1.2249999999999999 1.4 2.0999999999999996 2.38 2.0999999999999996 3.5a2.0999999999999996 2.0999999999999996 0 0 1-4.199999999999999 0c0-1.1199999999999999 0.875-2.0999999999999996 2.0999999999999996-3.5Z' }],
  ['path', { d: 'M17 9.5c1.2249999999999999 1.4 2.0999999999999996 2.38 2.0999999999999996 3.5a2.0999999999999996 2.0999999999999996 0 0 1-4.199999999999999 0c0-1.1199999999999999 0.875-2.0999999999999996 2.0999999999999996-3.5Z' }],
]);
export const IconEggIncubator = createIcon('egg-incubator', [
  ['rect', { x: 2.5, y: 16, width: 19, height: 4.5, rx: 1.5 }],
  ['path', { d: 'M4 16v-2.5a8 8 0 0 1 16 0V16' }],
  ['ellipse', { cx: 7.75, cy: 13.75, rx: 1.75, ry: 2.25 }],
  ['ellipse', { cx: 12, cy: 13.75, rx: 1.75, ry: 2.25 }],
  ['ellipse', { cx: 16.25, cy: 13.75, rx: 1.75, ry: 2.25 }],
  ['circle', { cx: 12, cy: 4.25, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18.25, cy: 18.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconEggNest = createIcon('egg-nest', [
  ['path', { d: 'M3 13h18c-1 4.5-4.5 7.5-9 7.5S4 17.5 3 13Z' }],
  ['ellipse', { cx: 9.5, cy: 10, rx: 2.25, ry: 3 }],
  ['ellipse', { cx: 14.5, cy: 10, rx: 2.25, ry: 3 }],
]);
export const IconFarmFence = createIcon('farm-fence', [
  ['path', { d: 'M6 20.5V6l1.25-2L8.5 6v14.5' }],
  ['path', { d: 'M15.5 20.5V6l1.25-2L18 6v14.5' }],
  ['path', { d: 'M2.5 10h19M2.5 15h19' }],
]);
export const IconFarmGate = createIcon('farm-gate', [
  ['path', { d: 'M4 4v16.5M20 4v16.5' }],
  ['path', { d: 'M4 7.5h16M4 16.5h16M4 16.5l16-9' }],
]);
export const IconFarmGoat = createIcon('farm-goat', [
  ['path', { d: 'M9 8h6l-.5 8a2.5 2.5 0 0 1-5 0Z' }],
  ['path', { d: 'M5 3.5c2 0 3.5 1.5 4.5 4.5L9 9.5 5.5 11' }],
  ['path', { d: 'M19 3.5c-2 0-3.5 1.5-4.5 4.5l.5 1.5 3.5 1.5' }],
  ['path', { d: 'M11 18.5 12 21l1-2.5' }],
]);
export const IconFarmHen = createIcon('farm-hen', [
  ['path', { d: 'M7.5 9a3 3 0 0 1 6 0c0 2 1 3 3 3h3.5c0 5-3.25 8.5-7.75 8.5S5 17.5 5 13.5c0-1.75 1-3 2.5-4.5Z' }],
  ['path', { d: 'M9 6c0-1.25.75-2 1.5-2s1.5.75 1.5 2' }],
  ['path', { d: 'M7.5 9.5 5 10.5l2.25.75' }],
  ['circle', { cx: 10.5, cy: 8.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFarmPig = createIcon('farm-pig', [
  ['circle', { cx: 12, cy: 12.5, r: 7.5 }],
  ['path', { d: 'M6.5 7.5 5.5 3.5l4 2.5M17.5 7.5l1-4-4 2.5' }],
  ['ellipse', { cx: 12, cy: 15, rx: 3, ry: 2.25 }],
  ['circle', { cx: 11, cy: 15, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13, cy: 15, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9, cy: 10.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 10.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFarmRake = createIcon('farm-rake', [
  ['path', { d: 'M12 21.5V8' }],
  ['path', { d: 'M6 4.5V8h12V4.5' }],
  ['path', { d: 'M10 8V4.5M14 8V4.5' }],
]);
export const IconFarmSheep = createIcon('farm-sheep', [
  ['path', { d: 'M6.5 10.5A2.5 2.5 0 0 1 8 6a2.5 2.5 0 0 1 4-1.5A2.5 2.5 0 0 1 16 6a2.5 2.5 0 0 1 1.5 4.5' }],
  ['path', { d: 'M8.5 10c0 6 1.5 10 3.5 10s3.5-4 3.5-10Z' }],
  ['path', { d: 'M8.5 11 5 12.5M15.5 11l3.5 1.5' }],
  ['circle', { cx: 10.5, cy: 13, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 13, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFarmStand = createIcon('farm-stand', [
  ['path', { d: 'M3.5 8.5h17L19 4H5Z' }],
  ['path', { d: 'M5 8.5v12M19 8.5v12' }],
  ['path', { d: 'M5 14.5h14' }],
]);
export const IconFarmWheelbarrow = createIcon('farm-wheelbarrow', [
  ['path', { d: 'M3 9h13l-2.5 6.5H6.5Z' }],
  ['circle', { cx: 13, cy: 18, r: 2.5 }],
  ['path', { d: 'M16 9l4.5-2M7 15.5l-1 5' }],
]);
export const IconFarmWindmill = createIcon('farm-windmill', [
  ['circle', { cx: 9, cy: 7.5, r: 4.5 }],
  ['path', { d: 'M9 3V12A4.5 4.5 0 0 1 5.82 10.68L12.18 4.32A4.5 4.5 0 0 1 13.5 7.5H4.5A4.5 4.5 0 0 1 5.82 4.32L12.18 10.68' }],
  ['path', { d: 'M13.5 7.5H17.5V5L21 6V9L17.5 10V7.5' }],
  ['path', { d: 'M5.5 21 9 12l3.5 9M7 17h4' }],
]);
export const IconFeedBucket = createIcon('feed-bucket', [
  ['path', { d: 'M5 9h14l-1.5 11.5h-11Z' }],
  ['path', { d: 'M5 9a7 5.5 0 0 1 14 0' }],
]);
export const IconFeedingTrough = createIcon('feeding-trough', [
  ['path', { d: 'M3 9h18l-2.5 7.5h-13Z' }],
  ['path', { d: 'M6.5 16.5 5.5 20.5M17.5 16.5l1 4' }],
  ['circle', { cx: 8, cy: 6.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 6, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16, cy: 6.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFertilizerBag = createIcon('fertilizer-bag', [
  ['path', { d: 'M7 4h10l-1 3 2 4v7.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V11l2-4Z' }],
  ['path', { d: 'M8 7h8' }],
  ['path', { d: 'M12 17c0-2.5 1.25-4 3-4.5-.25 2.5-1.25 4-3 4.5Z' }],
]);
export const IconFishFarm = createIcon('fish-farm', [
  ['path', { d: 'M4 11c2.5-3 5-4 7.5-4 3 0 5.5 2 7 4-1.5 2-4 4-7 4-2.5 0-5-1-7.5-4ZM4 11 2.5 8.5M4 11l-1.5 2.5' }],
  ['path', { d: 'M2.5 19c1.5 1.25 3 1.25 4.75 0s3.25-1.25 4.75 0 3.25 1.25 4.75 0 3.25-1.25 4.75 0' }],
  ['circle', { cx: 15.5, cy: 10.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGrainSilo = createIcon('grain-silo', [
  ['path', { d: 'M7 20.5V8a5 5 0 0 1 10 0v12.5' }],
  ['path', { d: 'M7 12h10M7 16h10' }],
  ['path', { d: 'M4 20.5h16' }],
]);
export const IconGreenhouse = createIcon('greenhouse', [
  ['path', { d: 'M3.5 20.5V11L12 4l8.5 7v9.5Z' }],
  ['path', { d: 'M12 4v16.5M3.5 14h17' }],
]);
export const IconGrowLight = createIcon('grow-light', [
  ['rect', { x: 3.5, y: 3, width: 17, height: 3.5, rx: 1.75 }],
  ['path', { d: 'M7 9l-1 2M17 9l1 2' }],
  ['path', { d: 'M12 21v-5c0-2.5 2-4 4.5-4 0 2.5-2 4-4.5 4' }],
  ['path', { d: 'M12 17.5c0-2-1.5-3.5-3.5-3.5 0 2 1.5 3.5 3.5 3.5' }],
]);
export const IconHandWaterPump = createIcon('hand-water-pump', [
  ['path', { d: 'M9 20.5V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11.5M7 20.5h10' }],
  ['path', { d: 'M9 11H5.5v2' }],
  ['path', { d: 'M15 8l4.5-3.5' }],
]);
export const IconHarvestCrate = createIcon('harvest-crate', [
  ['rect', { x: 3, y: 11, width: 18, height: 9.5, rx: 2.5 }],
  ['path', { d: 'M3 15.75h18' }],
  ['circle', { cx: 8.5, cy: 8, r: 2.75 }],
  ['circle', { cx: 15, cy: 8, r: 2.75 }],
]);
export const IconHayBale = createIcon('hay-bale', [
  ['rect', { x: 3, y: 7, width: 18, height: 11, rx: 2.5 }],
  ['path', { d: 'M8.5 7v11M15.5 7v11' }],
]);
export const IconHorseshoe = createIcon('horseshoe', [
  ['path', { d: 'M6 20.5 5 12a7 7 0 0 1 14 0l-1 8.5h-3l.5-8.5a3.5 3.5 0 0 0-7 0l.5 8.5Z' }],
  ['circle', { cx: 6.5, cy: 16.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 16.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.5, cy: 8.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 8.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconIrrigationCanal = createIcon('irrigation-canal', [
  ['path', { d: 'M2.5 8h4L9 18.5h6L17.5 8h4' }],
  ['path', { d: 'M8 13c1.25.75 2.75.75 4 0s2.75-.75 4 0' }],
]);
export const IconIrrigationSprinkler = createIcon('irrigation-sprinkler', [
  ['path', { d: 'M12 21v-7' }],
  ['path', { d: 'M9 21h6' }],
  ['path', { d: 'M6 10a8 8 0 0 1 12 0' }],
  ['circle', { cx: 4.5, cy: 13, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 5.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 13, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMilkCan = createIcon('milk-can', [
  ['path', { d: 'M9 3.5h6' }],
  ['path', { d: 'M10 3.5V6L7 9.5v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9L14 6V3.5' }],
  ['path', { d: 'M7 11.5H5v3h2M17 11.5h2v3h-2' }],
]);
export const IconNurseryPot = createIcon('nursery-pot', [
  ['path', { d: 'M6.5 13h11l-1.5 7.5h-8Z' }],
  ['path', { d: 'M12 13V9' }],
  ['path', { d: 'M12 9c0-2.5-2-4-4.5-4 0 2.5 2 4 4.5 4ZM12 10.5c0-2.5 2-4 4.5-4 0 2.5-2 4-4.5 4Z' }],
]);
export const IconOrchard = createIcon('orchard', [
  ['circle', { cx: 7.5, cy: 9, r: 3.5 }],
  ['circle', { cx: 16.5, cy: 9, r: 3.5 }],
  ['path', { d: 'M7.5 12.5v8M16.5 12.5v8M3 20.5h18' }],
]);
export const IconPitchfork = createIcon('pitchfork', [
  ['path', { d: 'M12 21.5V11' }],
  ['path', { d: 'M7.5 3.5V8a4.5 4.5 0 0 0 9 0V3.5M12 3.5V11' }],
]);
export const IconPolytunnel = createIcon('polytunnel', [
  ['path', { d: 'M2.5 20.5h19' }],
  ['path', { d: 'M3.5 20.5C3.5 12 7 7.5 12 7.5s8.5 4.5 8.5 13' }],
  ['path', { d: 'M8 8.8v11.7M16 8.8v11.7' }],
]);
export const IconPruningShears = createIcon('pruning-shears', [
  ['path', { d: 'M10 13 6 3.5c3 0 5 2.5 6 5.5M14 13l4-9.5c-3 0-5 2.5-6 5.5' }],
  ['path', { d: 'M10 13l-2.5 8M14 13l2.5 8' }],
  ['circle', { cx: 12, cy: 12.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRainGauge = createIcon('rain-gauge', [
  ['path', { d: 'M7.5 3.5h9l-2 3v12a2.5 2.5 0 0 1-5 0v-12Z' }],
  ['path', { d: 'M9.5 11h2M9.5 14h2' }],
]);
export const IconRicePlant = createIcon('rice-plant', [
  ['path', { d: 'M10 21V11c0-4.5 3-7.5 6.5-7.5 2.25 0 3.5 1.75 3.5 4' }],
  ['path', { d: 'M10 21c-.5-4-2.5-7-5.5-8.5' }],
  ['path', { d: 'M10 21c.5-3 2-5 4-6' }],
  ['circle', { cx: 20, cy: 10, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.25, cy: 12.75, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.75, cy: 15, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRoundHayBale = createIcon('round-hay-bale', [
  ['path', { d: 'M16.25 15.5a1.25 1.25 0 0 0-2.5 0a2.5 2.5 0 0 0 5 0a3.75 3.75 0 0 0-7.5 0a5 5 0 0 0 10 0' }],
  ['path', { d: 'M16.25 10.5H7.5a5 5 0 0 0 0 10h8.75' }],
  ['path', { d: 'M2 20.5h19.5' }],
  ['path', { d: 'M5.5 13.5h5M4.5 17.5h6' }],
]);
export const IconScarecrow = createIcon('scarecrow', [
  ['circle', { cx: 12, cy: 8, r: 2.5 }],
  ['path', { d: 'M8 5.5h8l-1.5-3h-5Z' }],
  ['path', { d: 'M12 10.5V21' }],
  ['path', { d: 'M4.5 13h15' }],
  ['circle', { cx: 4.5, cy: 13, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 13, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSeedPacket = createIcon('seed-packet', [
  ['rect', { x: 5, y: 3, width: 14, height: 18, rx: 2.5 }],
  ['path', { d: 'M5 7h14' }],
  ['path', { d: 'M12 18v-4.5M12 13.5c0-1.75-1.25-2.75-3-2.75 0 1.75 1.25 2.75 3 2.75ZM12 14.5c0-1.75 1.25-2.75 3-2.75 0 1.75-1.25 2.75-3 2.75Z' }],
]);
export const IconSeedling = createIcon('seedling', [
  ['path', { d: 'M4 20.5h16' }],
  ['path', { d: 'M12 20.5V12' }],
  ['path', { d: 'M12 12c0-2.5-2-4-4.5-4 0 2.5 2 4 4.5 4ZM12 13.5c0-2.5 2-4 4.5-4 0 2.5-2 4-4.5 4Z' }],
]);
export const IconShepherdCrook = createIcon('shepherd-crook', [
  ['path', { d: 'M10 21V7a3.5 3.5 0 0 1 7 0v1.5' }],
]);
export const IconSoilMoistureSensor = createIcon('soil-moisture-sensor', [
  ['rect', { x: 8.5, y: 3, width: 7, height: 6, rx: 1.5 }],
  ['path', { d: 'M10.5 9v9.5a1.5 1.5 0 0 0 3 0V9' }],
  ['path', { d: 'M3 13.5h18' }],
  ['path', { d: 'M19 15.5c1.05 1.2 1.7999999999999998 2.04 1.7999999999999998 3a1.7999999999999998 1.7999999999999998 0 0 1-3.5999999999999996 0c0-0.96 0.75-1.7999999999999998 1.7999999999999998-3Z' }],
]);
export const IconSoilProfile = createIcon('soil-profile', [
  ['path', { d: 'M3 8h18' }],
  ['path', { d: 'M3 12.5c3 1 6-1 9 0s6 1 9 0M3 17c3 1 6-1 9 0s6 1 9 0' }],
  ['path', { d: 'M12 8V4.5c0-1 1-1.5 2-1.5' }],
]);
export const IconSoybeanPod = createIcon('soybean-pod', [
  ['path', { d: 'M5 19c-1-1-1-2.5 0-3.5l9-9.5c1-1 3-2 4.5-1.5.5 1.5-.5 3.5-1.5 4.5L7.5 18.5c-1 1-1.5 1.5-2.5.5Z' }],
  ['circle', { cx: 8.5, cy: 15.5, r: 1.2, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 11.5, cy: 12.5, r: 1.2, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.5, cy: 9.5, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
export const IconStrawHat = createIcon('straw-hat', [
  ['ellipse', { cx: 12, cy: 15.5, rx: 9, ry: 2.75 }],
  ['path', { d: 'M7 14.5V11c0-2 2.25-3.5 5-3.5s5 1.5 5 3.5v3.5' }],
  ['path', { d: 'M7 12h10' }],
]);
export const IconSugarcane = createIcon('sugarcane', [
  ['path', { d: 'M9 21V3' }],
  ['path', { d: 'M15 21V6' }],
  ['path', { d: 'M9 9c-1.5-2-3.5-3-6.5-3' }],
  ['path', { d: 'M15 6c1-2 3-3 6.5-3' }],
  ['circle', { cx: 9, cy: 8, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9, cy: 14.5, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 11.5, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 17, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSunflower = createIcon('sunflower', [
  ['circle', { cx: 12, cy: 8.5, r: 2.5 }],
  ['path', { d: 'M12 3a2 2 0 0 1 3.5 1.9 2 2 0 0 1 1.9 3.5 2 2 0 0 1-1.9 3.5A2 2 0 0 1 12 14a2 2 0 0 1-3.5-1.9 2 2 0 0 1-1.9-3.5 2 2 0 0 1 1.9-3.5A2 2 0 0 1 12 3Z' }],
  ['path', { d: 'M12 14v7.5M12 19c1-1.75 2.5-2.5 4.5-2.5' }],
]);
export const IconTeaLeaves = createIcon('tea-leaves', [
  ['path', { d: 'M12 20.5c-4.5 0-7-3-7-7.5 4.5 0 7 3 7 7.5Z' }],
  ['path', { d: 'M12 20.5c0-6 2.5-10 7-11.5 0 6-2.5 10-7 11.5Z' }],
  ['path', { d: 'M12 13c-1.5-2-1.5-6.5 0-9.5 1.5 3 1.5 7.5 0 9.5Z' }],
]);
export const IconTractor = createIcon('tractor', [
  ['circle', { cx: 7.5, cy: 15.5, r: 4.5 }],
  ['circle', { cx: 18, cy: 17.5, r: 2.5 }],
  ['path', { d: 'M4 11V5.5h6.5l1.5 5.5h6.5a2 2 0 0 1 2 2v2.5M12 17.5h3.5' }],
  ['circle', { cx: 7.5, cy: 15.5, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
export const IconVerticalFarm = createIcon('vertical-farm', [
  ['rect', { x: 3.5, y: 3, width: 17, height: 18, rx: 2.5 }],
  ['path', { d: 'M3.5 12h17' }],
  ['path', { d: 'M6 12a2 2 0 0 1 4 0 2 2 0 0 1 4 0 2 2 0 0 1 4 0' }],
  ['path', { d: 'M6 21a2 2 0 0 1 4 0 2 2 0 0 1 4 0 2 2 0 0 1 4 0' }],
]);
export const IconWaterTankFarm = createIcon('water-tank-farm', [
  ['ellipse', { cx: 12, cy: 6, rx: 7, ry: 2.5 }],
  ['path', { d: 'M5 6v11c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6' }],
  ['path', { d: 'M19 15h2.5' }],
]);
export const IconWaterWell = createIcon('water-well', [
  ['path', { d: 'M4 9l8-5 8 5' }],
  ['path', { d: 'M6 8v6M18 8v6M12 6.5V11' }],
  ['rect', { x: 4.5, y: 14, width: 15, height: 6.5, rx: 2 }],
]);
export const IconWateringCan = createIcon('watering-can', [
  ['path', { d: 'M5 10h10v8.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z' }],
  ['path', { d: 'M15 13 20.5 7.5' }],
  ['path', { d: 'M7 10V7.5a3 3 0 0 1 6 0V10' }],
]);
export const IconWheat = createIcon('wheat', [
  ['path', { d: 'M12 21.5V5' }],
  ['path', { d: 'M8.5 5.5c0 2 1.5 3.5 3.5 4 2-.5 3.5-2 3.5-4' }],
  ['path', { d: 'M8.5 9.5c0 2 1.5 3.5 3.5 4 2-.5 3.5-2 3.5-4' }],
  ['path', { d: 'M8.5 13.5c0 2 1.5 3.5 3.5 4 2-.5 3.5-2 3.5-4' }],
  ['circle', { cx: 12, cy: 3.5, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
