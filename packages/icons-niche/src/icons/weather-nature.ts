/** Domain: weather nature. Style spec: @syntara/icons create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '@syntara/icons';

export const IconAcorn = createIcon('acorn', [
  ['path', { d: 'M5.5 10.5C5.5 7 8.5 5 12 5s6.5 2 6.5 5.5Z' }],
  ['path', { d: 'M12 5V3' }],
  ['path', { d: 'M7 10.5V12c0 4 2.5 7 5 8.5 2.5-1.5 5-4.5 5-8.5v-1.5' }],
]);
export const IconBamboo = createIcon('bamboo', [
  ['path', { d: 'M11.5 3h3v18h-3ZM11.5 9h3M11.5 15h3' }],
  ['path', { d: 'M14.5 9c2-2 4.5-3 7-2.5-1.5 2-4 3-7 2.5Z' }],
  ['path', { d: 'M11.5 14C9.5 12 7 11.25 4.5 11.75c1.5 2 4 3 7 2.25Z' }],
]);
export const IconBarometer = createIcon('barometer', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M7 16a5.5 5.5 0 0 1 10 0' }],
  ['path', { d: 'M12 14.5l3-5' }],
]);
export const IconBee = createIcon('bee', [
  ['ellipse', { cx: 12, cy: 14.5, rx: 5.5, ry: 5 }],
  ['path', { d: 'M9.75 10v9M14.25 10v9' }],
  ['path', { d: 'M10 9.75C8 9 6.75 7 7.5 5.25s3.5-.75 4.5 3M14 9.75c2-.75 3.25-2.75 2.5-4.5S13 4.5 12 8.25' }],
]);
export const IconBirdNest = createIcon('bird-nest', [
  ['path', { d: 'M3.5 12.5h17c-.5 4.25-4 7.5-8.5 7.5s-8-3.25-8.5-7.5Z' }],
  ['path', { d: 'M7.5 12.5c0-2.25 1.25-4 2.75-4S13 10.25 13 12.5M11.5 12.5c0-2.5 1.25-4.5 3-4.5s3 2 3 4.5' }],
]);
export const IconButterfly = createIcon('butterfly', [
  ['path', { d: 'M12 8.5C10.5 5.5 7.75 3.75 5 4S2.75 8.5 6.5 11c-3 1.5-3 5-1 6s4.75-.5 6.5-4' }],
  ['path', { d: 'M12 8.5c1.5-3 4.25-4.75 7-4.5s2.25 4.5-1.5 7c3 1.5 3 5 1 6s-4.75-.5-6.5-4' }],
  ['path', { d: 'M12 7.75v10.5M12 7.75 10.5 4.5M12 7.75l1.5-3.25' }],
]);
export const IconCactus = createIcon('cactus', [
  ['path', { d: 'M9.5 20.5V6a2.5 2.5 0 0 1 5 0v14.5' }],
  ['path', { d: 'M9.5 14h-2A2.5 2.5 0 0 1 5 11.5V9.25a1.25 1.25 0 0 1 2.5 0v2.25h2M14.5 12h2A2.5 2.5 0 0 0 19 9.5V7.25a1.25 1.25 0 0 0-2.5 0V9.5h-2' }],
  ['path', { d: 'M6 20.5h12' }],
]);
export const IconCarbonFootprint = createIcon('carbon-footprint', [
  ['path', { d: 'M12 9c2.5 0 3.75 2 3.75 4.75 0 2-1.25 3.25-1.25 5a2.5 2.5 0 0 1-5 0c0-1.5-1.25-2.75-1.25-5C8.25 11 9.5 9 12 9Z' }],
  ['circle', { cx: 9.1, cy: 6.75, r: 1.2, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 11.65, cy: 5.1, r: 1.05, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.2, cy: 5.15, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.3, cy: 6.6, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCave = createIcon('cave', [
  ['path', { d: 'M2.75 20.5 7 9.5c1-2.5 3-4 5-4s4 1.5 5 4l4.25 11Z' }],
  ['path', { d: 'M8.5 20.5V17a3.5 3.5 0 0 1 7 0v3.5' }],
]);
export const IconCloudFog = createIcon('cloud-fog', [
  ['path', { d: 'M7.25 14H17.5A3.75 3.75 0 0 0 17.8 6.51A5.75 5.75 0 0 0 6.6 7.04A3.5 3.5 0 0 0 7.25 14Z' }],
  ['path', { d: 'M4 17.5h10M8 20.5h12' }],
]);
export const IconCloudHail = createIcon('cloud-hail', [
  ['path', { d: 'M7.25 14.5H17.5A3.75 3.75 0 0 0 17.8 7.01A5.75 5.75 0 0 0 6.6 7.54A3.5 3.5 0 0 0 7.25 14.5Z' }],
  ['path', { d: 'M6.9 18a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0ZM10.9 20a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0ZM14.9 18a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z' }],
]);
export const IconCloudLightning = createIcon('cloud-lightning', [
  ['path', { d: 'M7.25 14.5H17.5A3.75 3.75 0 0 0 17.8 7.01A5.75 5.75 0 0 0 6.6 7.54A3.5 3.5 0 0 0 7.25 14.5Z' }],
  ['path', { d: 'M13 12.5 10.5 17h3.25l-2 3.75' }],
]);
export const IconCloudMoon = createIcon('cloud-moon', [
  ['path', { d: 'M11.5 7.75A4.75 4.75 0 0 1 17 3.5a4.5 4.5 0 0 0 3.5 6.5 4.5 4.5 0 0 1-1.1 2.1' }],
  ['path', { d: 'M6.49 19.5H16.23A3.56 3.56 0 0 0 16.51 12.38A5.46 5.46 0 0 0 5.87 12.89A3.32 3.32 0 0 0 6.49 19.5Z' }],
]);
export const IconCloudSnow = createIcon('cloud-snow', [
  ['path', { d: 'M7.25 14.5H17.5A3.75 3.75 0 0 0 17.8 7.01A5.75 5.75 0 0 0 6.6 7.54A3.5 3.5 0 0 0 7.25 14.5Z' }],
  ['circle', { cx: 8, cy: 17.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16, cy: 17.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 21, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 21, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCloudSun = createIcon('cloud-sun', [
  ['path', { d: 'M5.6 12.4a3.75 3.75 0 1 1 6.4-3.9' }],
  ['path', { d: 'M8.75 2.75v1.25M3 8.5h1.25M4.75 4.5l.9.9' }],
  ['path', { d: 'M9.46 19.5H18.18A3.19 3.19 0 0 0 18.43 13.13A4.89 4.89 0 0 0 8.91 13.58A2.98 2.98 0 0 0 9.46 19.5Z' }],
]);
export const IconCloudSunRain = createIcon('cloud-sun-rain', [
  ['path', { d: 'M5.6 10.9a3.75 3.75 0 1 1 6.4-3.9' }],
  ['circle', { cx: 8.75, cy: 2.9, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 3.4, cy: 7, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 5.2, cy: 4.1, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M9.7 16.5H17.9A3 3 0 0 0 18.14 10.51A4.6 4.6 0 0 0 9.18 10.93A2.8 2.8 0 0 0 9.7 16.5Z' }],
  ['path', { d: 'M10 18.5 9 21M14 18.5l-1 2.5M18 18.5l-1 2.5' }],
]);
export const IconCloudWind = createIcon('cloud-wind', [
  ['path', { d: 'M5.96 12H14.68A3.19 3.19 0 0 0 14.93 5.63A4.89 4.89 0 0 0 5.41 6.08A2.98 2.98 0 0 0 5.96 12Z' }],
  ['path', { d: 'M3 15.5h15.5a1.75 1.75 0 1 0-1.75-1.75M6.5 19h9' }],
]);
export const IconDesertDunes = createIcon('desert-dunes', [
  ['path', { d: 'M3 17c3-4 7-5 10-3s5 4 8 2' }],
  ['path', { d: 'M3 20.5c2.5-1.5 5.5-2 9-1.25' }],
  ['circle', { cx: 16.5, cy: 7.5, r: 2.75 }],
]);
export const IconDragonfly = createIcon('dragonfly', [
  ['circle', { cx: 12, cy: 5, r: 1.75 }],
  ['path', { d: 'M12 6.75v14' }],
  ['path', { d: 'M12 9.25c-2-1.75-6.5-2.75-8-1.5s1 3 5 2.6c1.25-.15 2.25-.55 3-1.1.75.55 1.75.95 3 1.1 4 .4 6.5-1.35 5-2.6s-6-.25-8 1.5Z' }],
  ['path', { d: 'M12 11.75c-1.75.25-5.5 1.75-6.5 3.25s.75 2 2.5 1.5 3.5-2.5 4-4.75c.5 2.25 2.25 4.25 4 4.75s3.5 0 2.5-1.5-4.75-3-6.5-3.25Z' }],
]);
export const IconFeather = createIcon('feather', [
  ['path', { d: 'M12.75 19a2 2 0 0 0 1.4-.6l6.15-6.15a6 6 0 0 0-8.5-8.5L5.6 9.9a2 2 0 0 0-.6 1.4V17.5A1.5 1.5 0 0 0 6.5 19Z', transform: 'translate(-.5 .5)' }],
  ['path', { d: 'M16 8 3 21', transform: 'translate(-.5 .5)' }],
  ['path', { d: 'M17.5 15H9.5', transform: 'translate(-.5 .5)' }],
]);
export const IconFern = createIcon('fern', [
  ['path', { d: 'M6.5 20.5C8 13.5 11.5 8 18.5 3.5' }],
  ['path', { d: 'M7.8 16.09Q6.44 13.85 4.03 12.81Q5.39 15.05 7.8 16.09ZM7.8 16.09Q10.28 16.94 12.8 16.19Q10.31 15.34 7.8 16.09ZM8.97 13.5Q8.11 11.37 6.07 10.32Q6.93 12.45 8.97 13.5ZM8.97 13.5Q10.99 14.58 13.23 14.07Q11.2 12.99 8.97 13.5ZM10.44 11.06Q10.05 9.13 8.35 8.13Q8.74 10.06 10.44 11.06ZM10.44 11.06Q11.98 12.29 13.92 11.97Q12.38 10.74 10.44 11.06ZM12.23 8.77Q12.24 7.12 10.85 6.22Q10.84 7.88 12.23 8.77ZM12.23 8.77Q13.29 10.05 14.93 9.83Q13.87 8.56 12.23 8.77ZM14.37 6.62Q14.7 5.3 13.55 4.58Q13.22 5.9 14.37 6.62ZM14.37 6.62Q14.97 7.84 16.31 7.66Q15.72 6.43 14.37 6.62Z', fill: 'currentColor' }],
]);
export const IconFlower = createIcon('flower', [
  ['path', { d: 'M13.7 5.56A1.85 1.85 0 1 1 15.4 8.5A1.85 1.85 0 1 1 13.7 11.44A1.85 1.85 0 1 1 10.3 11.44A1.85 1.85 0 1 1 8.6 8.5A1.85 1.85 0 1 1 10.3 5.56A1.85 1.85 0 1 1 13.7 5.56Z' }],
  ['circle', { cx: 12, cy: 8.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M12 13.5v7' }],
  ['path', { d: 'M12 18.5c0-2 1.5-3.25 3.75-3.25 0 2-1.5 3.25-3.75 3.25Z' }],
]);
export const IconForest = createIcon('forest', [
  ['circle', { cx: 15.5, cy: 8.75, r: 5 }],
  ['path', { d: 'M7.5 6.5 3.5 14.5h8Z' }],
  ['path', { d: 'M15.5 13.75v6.75M7.5 14.5v6M3 20.5h18' }],
]);
export const IconFourLeafClover = createIcon('four-leaf-clover', [
  ['path', { d: 'M12 10.25L12 5.94A2.15 2.15 0 0 1 16.31 5.94A2.15 2.15 0 0 1 16.31 10.25ZM12 10.25L16.31 10.25A2.15 2.15 0 0 1 16.31 14.56A2.15 2.15 0 0 1 12 14.56ZM12 10.25L12 14.56A2.15 2.15 0 0 1 7.69 14.56A2.15 2.15 0 0 1 7.69 10.25ZM12 10.25L7.69 10.25A2.15 2.15 0 0 1 7.69 5.94A2.15 2.15 0 0 1 12 5.94Z' }],
  ['path', { d: 'M12 14.75c.25 2.5 1 4.25 2.5 5.75' }],
]);
export const IconHeatwave = createIcon('heatwave', [
  ['circle', { cx: 12, cy: 7.5, r: 3 }],
  ['circle', { cx: 12, cy: 2.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7, cy: 7.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 7.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M3.5 15c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0M3.5 19c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0' }],
]);
export const IconHumidity = createIcon('humidity', [
  ['path', { d: 'M12 6.9c3 3.9 4.8 5.7 4.8 7.8a4.8 4.8 0 0 1 -9.6 0c0 -2.1 1.8 -3.9 4.8 -7.8Z' }],
  ['path', { d: 'M9.75 16.75l4.5-4.5' }],
  ['circle', { cx: 10, cy: 12.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 16.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconHurricane = createIcon('hurricane', [
  ['circle', { cx: 12, cy: 12, r: 2.75 }],
  ['path', { d: 'M14.75 12c0-4.75-2.75-8.25-8.25-9M9.25 12c0 4.75 2.75 8.25 8.25 9' }],
]);
export const IconIceberg = createIcon('iceberg', [
  ['path', { d: 'M7.5 11 11 4.5l2 2.75 1.5-1.75 3 5.5' }],
  ['path', { d: 'M2.75 11h18.5' }],
  ['path', { d: 'M5.75 11l1.75 6.25 4.5 3.25 4.5-2.5 1.75-7' }],
]);
export const IconIcicles = createIcon('icicles', [
  ['path', { d: 'M3 4.5h18' }],
  ['path', { d: 'M4.5 4.5 6 11l1.5-6.5M9 4.5l1.75 10 1.75-10M14 4.5l1.25 7 1.25-7M18 4.5l1 4.5 1-4.5' }],
]);
export const IconIsland = createIcon('island', [
  ['path', { d: 'M5 17.5c1.5-2.5 4-3.5 7-3.5s5.5 1 7 3.5' }],
  ['path', { d: 'M11.5 14c0-3 .5-5.5 2.5-7.5M14 6.5c-1.5-2-4-2.5-6-1M14 6.5c1.5-2 4-2 5.5-.5' }],
  ['path', { d: 'M3 20.5c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0' }],
]);
export const IconLadybug = createIcon('ladybug', [
  ['circle', { cx: 12, cy: 13.5, r: 7 }],
  ['path', { d: 'M12 6.5v14' }],
  ['path', { d: 'M9 6.9a3.25 3.25 0 0 1 6 0' }],
  ['circle', { cx: 8.75, cy: 11.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.25, cy: 11.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9, cy: 16, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 16, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLotus = createIcon('lotus', [
  ['path', { d: 'M12 4.5c2 2 3 4.5 3 7s-1 4.25-3 5.5c-2-1.25-3-3-3-5.5s1-5 3-7Z' }],
  ['path', { d: 'M9.25 9.25C6.75 8.75 4.5 9.75 3.5 11.5c.5 3 3.5 5.5 8.5 5.5M14.75 9.25c2.5-.5 4.75.5 5.75 2.25-.5 3-3.5 5.5-8.5 5.5' }],
  ['path', { d: 'M5 20h14' }],
]);
export const IconMapleLeaf = createIcon('maple-leaf', [
  ['path', { d: 'M12 2.75 13.6 6.5 16 5.5 15.2 10 19.5 8 18.5 11 21 12 16.5 15.5 17 17.5 12 16.5 7 17.5 7.5 15.5 3 12 5.5 11 4.5 8 8.8 10 8 5.5 10.4 6.5Z' }],
  ['path', { d: 'M12 16.5v4.75' }],
]);
export const IconMoonStars = createIcon('moon-stars', [
  ['path', { d: 'M17 16.5A8 8 0 0 1 9 4.25a8 8 0 1 0 8 12.25Z' }],
  ['path', { d: 'M17 3.5c.3 1.6 1 2.2 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.3 2.2-.9 2.5-2.5Z' }],
  ['circle', { cx: 20, cy: 11, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconOceanWaves = createIcon('ocean-waves', [
  ['path', { d: 'M3 7.5c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0M3 12c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0M3 16.5c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0c1.5-1.25 3-1.25 4.5 0s3 1.25 4.5 0' }],
]);
export const IconOwl = createIcon('owl', [
  ['path', { d: 'M6 8.5 5 4.5l3.5 2a7 7 0 0 1 7 0l3.5-2-1 4V15a6 6 0 0 1-12 0Z' }],
  ['circle', { cx: 9.5, cy: 11.25, r: 2 }],
  ['circle', { cx: 14.5, cy: 11.25, r: 2 }],
  ['path', { d: 'M11.25 15 12 16l.75-1' }],
]);
export const IconPineTree = createIcon('pine-tree', [
  ['path', { d: 'M12 3 6.5 10h3L5 16h14l-4.5-6h3Z' }],
  ['path', { d: 'M12 16v4.75' }],
]);
export const IconPinecone = createIcon('pinecone', [
  ['path', { d: 'M12 21c-3.5-1.5-6-5-6-9 0-3.5 2.5-6 6-6s6 2.5 6 6c0 4-2.5 7.5-6 9Z' }],
  ['path', { d: 'M12 6V3' }],
  ['path', { d: 'M7 10.5l5 2.5 5-2.5M7.75 14.75l4.25 2.5 4.25-2.5' }],
]);
export const IconPottedPlant = createIcon('potted-plant', [
  ['path', { d: 'M7 14h10l-1.1 5.6a1.1 1.1 0 0 1-1.1.9H9.2a1.1 1.1 0 0 1-1.1-.9Z' }],
  ['path', { d: 'M12 14V8' }],
  ['path', { d: 'M12 10.5C9 10.5 7 8.5 7 5.5c3 0 5 2 5 5ZM12 8.5c0-3 2-5 5-5 0 3-2 5-5 5Z' }],
]);
export const IconRainbow = createIcon('rainbow', [
  ['path', { d: 'M3 18a9 9 0 0 1 18 0M6.5 18a5.5 5.5 0 0 1 11 0M10 18a2 2 0 0 1 4 0' }],
]);
export const IconRaindrops = createIcon('raindrops', [
  ['path', { d: 'M8 5.48c1.6 2.08 2.56 3.04 2.56 4.16a2.56 2.56 0 0 1 -5.12 0c0 -1.12 0.96 -2.08 2.56 -4.16ZM16 4.36c1.2 1.56 1.92 2.28 1.92 3.12a1.92 1.92 0 0 1 -3.84 0c0 -0.84 0.72 -1.56 1.92 -3.12ZM15 13.42c1.4 1.82 2.24 2.66 2.24 3.64a2.24 2.24 0 0 1 -4.48 0c0 -0.98 0.84 -1.82 2.24 -3.64Z' }],
]);
export const IconRecycle = createIcon('recycle', [
  ['path', { d: 'M8.29 10.39L11.22 5.15Q12 3.75 12.78 5.15L15.13 9.36' }],
  ['path', { d: 'M17.12 12.89L19.47 17.1Q20.25 18.5 18.65 18.5L13.98 18.5' }],
  ['path', { d: 'M10.02 18.5L5.35 18.5Q3.75 18.5 4.53 17.1L6.88 12.89' }],
  ['path', { d: 'M15.13 9.36 13.24 8.23 15.16 7.16ZM13.98 18.5l1.91-1.1v2.2ZM6.88 12.89l.03 2.2-1.92-1.07Z', fill: 'currentColor' }],
]);
export const IconSeashell = createIcon('seashell', [
  ['path', { d: 'M10.5 20.5 4.25 11a7.75 7.75 0 0 1 15.5 0L13.5 20.5Z' }],
  ['path', { d: 'M12 20.5V4.5M11 20.5 7.5 6.5M13 20.5l3.5-14' }],
]);
export const IconSnail = createIcon('snail', [
  ['circle', { cx: 10.5, cy: 11.5, r: 5.5 }],
  ['path', { d: 'M10.5 11.5a1.75 1.75 0 1 1 1.75 1.75' }],
  ['path', { d: 'M3 17h14a3 3 0 0 0 3-3v-3M20 11l-1.25-3.25M20 11l1.25-3.25' }],
]);
export const IconSnowman = createIcon('snowman', [
  ['circle', { cx: 12, cy: 6.5, r: 3.25 }],
  ['circle', { cx: 12, cy: 15, r: 5.5 }],
  ['circle', { cx: 12, cy: 13.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 16.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSongbird = createIcon('songbird', [
  ['path', { d: 'M20.5 7.5 18 8.5a4 4 0 0 0-7.5 1.5c0 1-.25 2-.75 2.5L3.5 17c3 2 9 3 12.5-.5 1.5-1.5 2-3.5 2-6Z' }],
  ['path', { d: 'M9.75 14c2.25 0 4.25-1 5.25-3' }],
  ['circle', { cx: 14.5, cy: 8.25, r: 0.75, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSpiderWeb = createIcon('spider-web', [
  ['path', { d: 'M12 3.25v17.5M4.42 7.63l15.16 8.74M4.42 16.37l15.16-8.74' }],
  ['path', { d: 'M12 8Q13.44 9.51 15.46 10Q14.88 12 15.46 14Q13.44 14.49 12 16Q10.56 14.49 8.54 14Q9.12 12 8.54 10Q10.56 9.51 12 8ZM12 4.25Q14.79 7.17 18.71 8.13Q17.58 12 18.71 15.88Q14.79 16.83 12 19.75Q9.21 16.83 5.29 15.88Q6.42 12 5.29 8.13Q9.21 7.17 12 4.25Z' }],
]);
export const IconStoneCairn = createIcon('stone-cairn', [
  ['ellipse', { cx: 12, cy: 18, rx: 7.5, ry: 2.75 }],
  ['ellipse', { cx: 12, cy: 12.25, rx: 5.25, ry: 2.25 }],
  ['ellipse', { cx: 12, cy: 7.25, rx: 3.25, ry: 1.75 }],
  ['path', { d: 'M3.5 20.75h17' }],
]);
export const IconSunset = createIcon('sunset', [
  ['path', { d: 'M3 16h18M10.5 19.25l1.5 1.5 1.5-1.5' }],
  ['path', { d: 'M7 16a5 5 0 0 1 10 0' }],
  ['circle', { cx: 12, cy: 6.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 5.75, cy: 9.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18.25, cy: 9.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTornado = createIcon('tornado', [
  ['path', { d: 'M3.5 4.5h17M5 8.5h13M7.5 12.5h9M10.5 16.5h5M12 20.5h2' }],
]);
export const IconTsunami = createIcon('tsunami', [
  ['path', { d: 'M2.75 19.5c3 0 4-2 4.5-5.5.75-5 4-9 9-9 2.5 0 4.5 1.5 4.75 4-2-1.5-5-.5-5 2.5 0 2.5 2 4 4.25 4' }],
  ['path', { d: 'M2.75 19.5h18.5' }],
]);
export const IconTulip = createIcon('tulip', [
  ['path', { d: 'M7 4.5l2.5 2.25L12 3.75l2.5 3L17 4.5V9a5 5 0 0 1-10 0Z' }],
  ['path', { d: 'M12 14v6.75' }],
  ['path', { d: 'M12 18.75c-1.5-2.5-3.5-3.5-5.5-3.5 0 2.5 2.5 4 5.5 3.5Z' }],
]);
export const IconVolcano = createIcon('volcano', [
  ['path', { d: 'M3 20.5 8.5 9.5h7l5.5 11Z' }],
  ['path', { d: 'M8.5 9.5l2 3 1.5-1.5 1.5 2 2-3.5' }],
  ['path', { d: 'M10.5 6.5c0-1.5.75-2.75 2-3M13.5 6.5c0-1.25.5-2 1.5-2.5' }],
]);
export const IconWeatherVane = createIcon('weather-vane', [
  ['path', { d: 'M12 21V6M9 21h6' }],
  ['path', { d: 'M3.5 6h13.5M3 4l1.5 2L3 8' }],
  ['path', { d: 'M16.5 3.75 19.5 6l-3 2.25Z', fill: 'currentColor' }],
  ['path', { d: 'M8 14h8' }],
]);
export const IconWhale = createIcon('whale', [
  ['path', { d: 'M3.5 11.5c0 4 3 7 7.5 7 4 0 6.5-2.25 7.5-5.5l.75-2.5 2.25-1-2.25-.5-.5-2.25-.75 2.5C17.25 11 15 11.5 12 11.5Z' }],
  ['path', { d: 'M4.75 5.5c1.25 0 2.25.75 2.75 2.5.5-1.75 1.5-2.5 2.75-2.5' }],
  ['circle', { cx: 6.75, cy: 14, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
