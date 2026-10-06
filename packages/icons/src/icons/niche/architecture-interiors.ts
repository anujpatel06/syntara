/** Domain: architecture interiors. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconArchway = createIcon('archway', [
  ['path', { d: 'M4.5 20.5V11a7.5 7.5 0 0 1 15 0v9.5' }],
  ['path', { d: 'M8.5 20.5V11a3.5 3.5 0 0 1 7 0v9.5' }],
]);
export const IconArmchair = createIcon('armchair', [
  ['path', { d: 'M7 11V6.5A3 3 0 0 1 10 3.5h4a3 3 0 0 1 3 3V11' }],
  ['path', { d: 'M5 13a2 2 0 0 1 4 0v2h6v-2a2 2 0 0 1 4 0v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17Z' }],
  ['path', { d: 'M7.5 18.5v2M16.5 18.5v2' }],
]);
export const IconBarStool = createIcon('bar-stool', [
  ['ellipse', { cx: 12, cy: 5.5, rx: 5, ry: 1.75 }],
  ['path', { d: 'M9.25 7.1 7.5 20.5M14.75 7.1l1.75 13.4' }],
  ['path', { d: 'M8.4 15h7.2' }],
]);
export const IconBedsideTable = createIcon('bedside-table', [
  ['rect', { x: 3.5, y: 11.5, width: 17, height: 8.5, rx: 2 }],
  ['path', { d: 'M3.5 15.75h17' }],
  ['path', { d: 'M5.5 4h5l1.5 4.5H4Z' }],
  ['path', { d: 'M8 8.5v3' }],
  ['circle', { cx: 12, cy: 18, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBookshelf = createIcon('bookshelf', [
  ['rect', { x: 4.5, y: 3, width: 15, height: 18, rx: 2.5 }],
  ['path', { d: 'M4.5 12h15' }],
  ['path', { d: 'M8 12V6.5M10.75 12V6.5' }],
  ['path', { d: 'M13 21l2.25-5.5' }],
]);
export const IconChandelier = createIcon('chandelier', [
  ['path', { d: 'M12 2.5v12' }],
  ['path', { d: 'M4.5 9.5v1a4 4 0 0 0 4 4h7a4 4 0 0 0 4-4v-1' }],
  ['path', { d: 'M4.5 8C3.7 8 3.25 7.5 3.25 6.8c0-.8.75-1.3 1.25-2.3.5 1 1.25 1.5 1.25 2.3 0 .7-.45 1.2-1.25 1.2ZM19.5 8c-.8 0-1.25-.5-1.25-1.2 0-.8.75-1.3 1.25-2.3.5 1 1.25 1.5 1.25 2.3 0 .7-.45 1.2-1.25 1.2Z' }],
  ['circle', { cx: 12, cy: 17.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconChestOfDrawers = createIcon('chest-of-drawers', [
  ['rect', { x: 4, y: 3.5, width: 16, height: 15, rx: 2.5 }],
  ['path', { d: 'M4 8.5h16M4 13.5h16M6.5 18.5v2M17.5 18.5v2' }],
  ['circle', { cx: 12, cy: 6, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 11, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 16, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconClassicalColumn = createIcon('classical-column', [
  ['path', { d: 'M5.75 7.75a1.75 1.75 0 1 1 1.75-1.75h9a1.75 1.75 0 1 1 1.75 1.75' }],
  ['path', { d: 'M8 8v10.5M16 8v10.5' }],
  ['rect', { x: 5.5, y: 18.5, width: 13, height: 2.5, rx: 1 }],
  ['path', { d: 'M12 10v6.5' }],
]);
export const IconCoffeeTable = createIcon('coffee-table', [
  ['ellipse', { cx: 12, cy: 9.5, rx: 8.5, ry: 3 }],
  ['path', { d: 'M5 11.25v6.5M19 11.25v6.5M12 12.5v6' }],
]);
export const IconColourSwatch = createIcon('colour-swatch', [
  ['path', { d: 'M10.5 17a3.5 3.5 0 0 1-7 0V5.5A2.5 2.5 0 0 1 6 3h2a2.5 2.5 0 0 1 2.5 2.5Z' }],
  ['path', { d: 'M10.5 8.5l2.25-2.25a2.5 2.5 0 0 1 3.5 0l1.5 1.5a2.5 2.5 0 0 1 0 3.5L9.5 19.5' }],
  ['path', { d: 'M16 13.5h2.5A2.5 2.5 0 0 1 21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H7' }],
  ['circle', { cx: 7, cy: 17, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCushion = createIcon('cushion', [
  ['path', { d: 'M5 5c3 1 11 1 14 0-1 3-1 11 0 14-3-1-11-1-14 0 1-3 1-11 0-14Z' }],
  ['circle', { cx: 12, cy: 12, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDesk = createIcon('desk', [
  ['rect', { x: 2.5, y: 6, width: 19, height: 3, rx: 1.5 }],
  ['rect', { x: 13.5, y: 9, width: 6.5, height: 11.5, rx: 1.5 }],
  ['path', { d: 'M5 9v11.5' }],
  ['circle', { cx: 16.75, cy: 12.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDiningChair = createIcon('dining-chair', [
  ['path', { d: 'M7.5 20.5V5a1.5 1.5 0 0 1 3 0v7.5' }],
  ['path', { d: 'M7.5 12.5h8.25a1.5 1.5 0 0 1 1.5 1.5v6.5' }],
]);
export const IconDiningTable = createIcon('dining-table', [
  ['rect', { x: 2.5, y: 7, width: 19, height: 3, rx: 1.5 }],
  ['path', { d: 'M5 10v10.5M19 10v10.5' }],
]);
export const IconDraftingCompass = createIcon('drafting-compass', [
  ['path', { d: 'M12 2.5v2' }],
  ['circle', { cx: 12, cy: 6.25, r: 1.75 }],
  ['path', { d: 'M11.2 7.8 7 20.5M12.8 7.8 17 20.5' }],
  ['path', { d: 'M8.75 15.75a6 6 0 0 0 6.5 0' }],
]);
export const IconDraftingSetSquare = createIcon('drafting-set-square', [
  ['path', { d: 'M4.5 4v15.5H20Z' }],
  ['path', { d: 'M8 11.5v4.5h4.5Z' }],
]);
export const IconFlowerVase = createIcon('flower-vase', [
  ['path', { d: 'M8 13h8l-1 6a2 2 0 0 1-2 1.5h-2A2 2 0 0 1 9 19Z' }],
  ['path', { d: 'M12 13V7M12 13 8.5 8.5M12 13l3.5-4.5' }],
  ['circle', { cx: 12, cy: 5.25, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.5, cy: 7, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 7, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGardenBench = createIcon('garden-bench', [
  ['rect', { x: 3, y: 5.5, width: 18, height: 4, rx: 2 }],
  ['path', { d: 'M3 13.5h18M5.5 9.5v10M18.5 9.5v10' }],
]);
export const IconHouseplant = createIcon('houseplant', [
  ['path', { d: 'M7 14h10l-1.25 6.5h-7.5Z' }],
  ['path', { d: 'M12 14V9.5' }],
  ['path', { d: 'M12 11.5C12 8 9.5 6 6 6c0 3.5 2.5 5.5 6 5.5ZM12 9.5c0-3 2-5.5 5.5-5.5 0 3.25-2 5.5-5.5 5.5Z' }],
]);
export const IconInteriorBunkBed = createIcon('interior-bunk-bed', [
  ['path', { d: 'M4 3v18M20 3v18' }],
  ['path', { d: 'M4 10h16M4 17.5h16' }],
  ['ellipse', { cx: 7.25, cy: 8.25, rx: 1.5, ry: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['ellipse', { cx: 7.25, cy: 15.75, rx: 1.5, ry: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconInteriorCeilingFan = createIcon('interior-ceiling-fan', [
  ['path', { d: 'M12 3v5.5' }],
  ['circle', { cx: 12, cy: 10.25, r: 1.75 }],
  ['path', { d: 'M10.25 9.5H4a1 1 0 0 0 0 2h6.25M13.75 9.5H20a1 1 0 0 1 0 2h-6.25' }],
]);
export const IconInteriorCurtains = createIcon('interior-curtains', [
  ['path', { d: 'M3 3.5h18' }],
  ['path', { d: 'M4.5 3.5V20a.5.5 0 0 0 .5.5h1.25c.6-5 2.5-9 4.75-11V3.5' }],
  ['path', { d: 'M19.5 3.5V20a.5.5 0 0 1-.5.5h-1.25c-.6-5-2.5-9-4.75-11V3.5' }],
]);
export const IconInteriorFireplace = createIcon('interior-fireplace', [
  ['path', { d: 'M2.5 7.5h19M4.5 7.5v13M19.5 7.5v13' }],
  ['path', { d: 'M8 20.5V15a4 4 0 0 1 8 0v5.5' }],
  ['path', { d: 'M12 19.75c-1.2 0-2-.8-2-1.9 0-1.2 1-1.8 2-3.1 1 1.3 2 1.9 2 3.1 0 1.1-.8 1.9-2 1.9Z' }],
]);
export const IconInteriorFloorLamp = createIcon('interior-floor-lamp', [
  ['path', { d: 'M9.25 3h5.5a1 1 0 0 1 .95.7l1.3 4.1a1 1 0 0 1-.95 1.2h-8.1a1 1 0 0 1-.95-1.2l1.3-4.1a1 1 0 0 1 .95-.7Z' }],
  ['path', { d: 'M12 9v11.5' }],
  ['path', { d: 'M8.5 20.5h7' }],
]);
export const IconInteriorFloorPlan = createIcon('interior-floor-plan', [
  ['rect', { x: 3, y: 3.5, width: 18, height: 17, rx: 2.5 }],
  ['path', { d: 'M11 3.5V9M11 12.5v8M11 12.5h3M17.5 12.5H21' }],
]);
export const IconInteriorOfficeChair = createIcon('interior-office-chair', [
  ['rect', { x: 7.5, y: 2.75, width: 9, height: 8, rx: 2.5 }],
  ['rect', { x: 5, y: 12, width: 14, height: 2.75, rx: 1.25 }],
  ['path', { d: 'M12 14.75v4' }],
  ['path', { d: 'M7 20.5l5-1.75 5 1.75' }],
]);
export const IconInteriorRockingChair = createIcon('interior-rocking-chair', [
  ['path', { d: 'M7.5 3.5 10 13.5h7' }],
  ['path', { d: 'M10 13.5 8.5 19.5M17 13.5l.75 6' }],
  ['path', { d: 'M4.5 18.5c4.5 2.25 10.5 2.25 15.5 0' }],
]);
export const IconInteriorSofa = createIcon('interior-sofa', [
  ['path', { d: 'M5.5 11.5V9a2.5 2.5 0 0 1 2.5-2.5h8A2.5 2.5 0 0 1 18.5 9v2.5' }],
  ['path', { d: 'M3 13a2 2 0 0 1 4 0v1.5h10V13a2 2 0 0 1 4 0v3.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5Z' }],
  ['path', { d: 'M5.5 18v1.5M18.5 18v1.5' }],
]);
export const IconInteriorStaircase = createIcon('interior-staircase', [
  ['path', { d: 'M3 20.5h4.5v-4.25H12V12h4.5V7.75H21V20.5Z' }],
]);
export const IconInteriorTapeMeasure = createIcon('interior-tape-measure', [
  ['rect', { x: 2.75, y: 3.5, width: 14, height: 14, rx: 4 }],
  ['path', { d: 'M10 17.5v3h11.25V16' }],
  ['path', { d: 'M16.75 17.5h4.5' }],
  ['circle', { cx: 9.75, cy: 10.5, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconInteriorToilet = createIcon('interior-toilet', [
  ['rect', { x: 4, y: 3.5, width: 5.5, height: 7.5, rx: 1.5 }],
  ['path', { d: 'M4 11h16v.5a6 6 0 0 1-6 6h-1l.5 3H8l.5-3.4A5 5 0 0 1 4 12.5Z' }],
]);
export const IconInteriorWardrobe = createIcon('interior-wardrobe', [
  ['rect', { x: 5, y: 3, width: 14, height: 16.5, rx: 2.5 }],
  ['path', { d: 'M12 3v16.5M7.5 19.5v1.5M16.5 19.5v1.5' }],
  ['circle', { cx: 10.25, cy: 11.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 11.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconInteriorWindow = createIcon('interior-window', [
  ['rect', { x: 4.5, y: 3.5, width: 15, height: 17, rx: 2.5 }],
  ['path', { d: 'M12 3.5v17M4.5 12h15' }],
]);
export const IconKitchenFaucet = createIcon('kitchen-faucet', [
  ['path', { d: 'M7.5 20.5V9a4.5 4.5 0 0 1 9 0v2' }],
  ['path', { d: 'M4.5 20.5h6M7.5 14H4.5' }],
  ['circle', { cx: 16.5, cy: 14.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPanelDoor = createIcon('panel-door', [
  ['path', { d: 'M6 20.5V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v15.5M3.5 20.5h17' }],
  ['circle', { cx: 15, cy: 12, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPendantLight = createIcon('pendant-light', [
  ['path', { d: 'M12 2.5v6' }],
  ['path', { d: 'M5 15.5a7 7 0 0 1 14 0Z' }],
  ['path', { d: 'M10 18.25a2 2 0 0 0 4 0' }],
]);
export const IconRadiator = createIcon('radiator', [
  ['path', { d: 'M4.5 7.5a1.5 1.5 0 0 1 3 0V15h1V7.5a1.5 1.5 0 0 1 3 0V15h1V7.5a1.5 1.5 0 0 1 3 0V15h1V7.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M7 18v2.5M17 18v2.5' }],
]);
export const IconRug = createIcon('rug', [
  ['rect', { x: 5, y: 4.5, width: 14, height: 15, rx: 2.5 }],
  ['path', { d: 'M12 8.5l3 3.5-3 3.5-3-3.5Z' }],
  ['path', { d: 'M6 4.5l1.5-2 1.5 2 1.5-2 1.5 2 1.5-2 1.5 2 1.5-2 1.5 2M6 19.5l1.5 2 1.5-2 1.5 2 1.5-2 1.5 2 1.5-2 1.5 2 1.5-2' }],
]);
export const IconShowerHead = createIcon('shower-head', [
  ['path', { d: 'M4 3.5h6a3 3 0 0 1 3 3V8' }],
  ['path', { d: 'M8 12.5a5 4.5 0 0 1 10 0Z' }],
  ['path', { d: 'M10.5 15.5l-1 4M13 15.5v4.5M15.5 15.5l1 4' }],
]);
export const IconTableLamp = createIcon('table-lamp', [
  ['path', { d: 'M8.6 3.5h6.8a1 1 0 0 1 .93.63l2.4 6a1 1 0 0 1-.93 1.37H6.2a1 1 0 0 1-.93-1.37l2.4-6a1 1 0 0 1 .93-.63Z' }],
  ['path', { d: 'M12 11.5v3.5' }],
  ['rect', { x: 8, y: 15, width: 8, height: 5.5, rx: 2.5 }],
]);
export const IconTrackLighting = createIcon('track-lighting', [
  ['path', { d: 'M2.75 4h18.5' }],
  ['rect', { x: 5.5, y: 5, width: 4.5, height: 7.5, rx: 1.5, transform: 'rotate(25 7.75 5)' }],
  ['rect', { x: 14, y: 5, width: 4.5, height: 7.5, rx: 1.5, transform: 'rotate(-25 16.25 5)' }],
  ['circle', { cx: 4.5, cy: 17, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 17, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconWallMirror = createIcon('wall-mirror', [
  ['ellipse', { cx: 12, cy: 10, rx: 5.5, ry: 7.5 }],
  ['path', { d: 'M9.5 8.5a3 3 0 0 1 2-3' }],
  ['path', { d: 'M12 17.5v3M8.5 20.5h7' }],
]);
export const IconWallSconce = createIcon('wall-sconce', [
  ['rect', { x: 3.5, y: 8, width: 3.5, height: 11, rx: 1.75 }],
  ['path', { d: 'M7 13.5h4.5a2 2 0 0 0 2-2V9.5' }],
  ['path', { d: 'M10.4 3.5h6.2a1 1 0 0 1 .95 1.3l-1.1 3.75a1.25 1.25 0 0 1-1.2.95h-3.5a1.25 1.25 0 0 1-1.2-.95L9.45 4.8a1 1 0 0 1 .95-1.3Z' }],
]);
export const IconWashbasin = createIcon('washbasin', [
  ['path', { d: 'M10 9.5V6.25a2 2 0 0 1 4 0v.75' }],
  ['path', { d: 'M3.5 9.5h17a8.5 6.5 0 0 1-17 0Z' }],
  ['path', { d: 'M10.25 15.9v4.6h3.5v-4.6' }],
]);
