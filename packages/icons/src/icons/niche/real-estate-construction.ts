/** Domain: real estate construction. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAFrameHouse = createIcon('a-frame-house', [
  ['path', { d: 'M2.75 20.5 12 3.5l9.25 17Z' }],
  ['path', { d: 'M10 20.5v-4.5a2 2 0 0 1 4 0v4.5' }],
  ['path', { d: 'M12 9.5v2' }],
]);
export const IconApartmentBuilding = createIcon('apartment-building', [
  ['rect', { x: 5, y: 3, width: 14, height: 17.5, rx: 3 }],
  ['path', { d: 'M10.5 20.5v-3h3v3' }],
  ['circle', { cx: 9, cy: 7.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 7.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBalcony = createIcon('balcony', [
  ['path', { d: 'M8 20.5V8a4 4 0 0 1 8 0v12.5' }],
  ['path', { d: 'M2.75 13.5h18.5M2.75 20.5h18.5' }],
  ['path', { d: 'M4.5 13.5v7M19.5 13.5v7' }],
]);
export const IconBathroom = createIcon('bathroom', [
  ['path', { d: 'M3 12h18v1.5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z' }],
  ['path', { d: 'M7 18.5l-1 2M17 18.5l1 2' }],
  ['path', { d: 'M5.5 12V5.5a2 2 0 0 1 4 0' }],
]);
export const IconBlueprint = createIcon('blueprint', [
  ['rect', { x: 2.75, y: 3, width: 4.5, height: 15.5, rx: 2.25 }],
  ['path', { d: 'M7.25 5.25H19.5a1.5 1.5 0 0 1 1.5 1.5v12.5a1.5 1.5 0 0 1-1.5 1.5H5a2.25 2.25 0 0 1-2.25-2.25' }],
  ['path', { d: 'M11 9.5h6v7h-6Z' }],
]);
export const IconBoomLift = createIcon('boom-lift', [
  ['rect', { x: 3, y: 15, width: 10.5, height: 3.5, rx: 1.5 }],
  ['path', { d: 'M8 15 15.5 8' }],
  ['rect', { x: 14, y: 3, width: 7, height: 5, rx: 1.5 }],
  ['path', { d: 'M4.25 19.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0 -2.5 0M9.75 19.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0 -2.5 0' }],
]);
export const IconBrickWall = createIcon('brick-wall', [
  ['rect', { x: 2.75, y: 5, width: 18.5, height: 14, rx: 2.5 }],
  ['path', { d: 'M2.75 12h18.5' }],
  ['path', { d: 'M9 5v7M15 12v7' }],
]);
export const IconBuildingPermit = createIcon('building-permit', [
  ['rect', { x: 5, y: 4.5, width: 14, height: 16.5, rx: 3 }],
  ['rect', { x: 9, y: 3, width: 6, height: 3, rx: 1.25 }],
  ['path', { d: 'M9 14.25 12 11.5l3 2.75M10 13.5V17h4v-3.5' }],
]);
export const IconBulldozer = createIcon('bulldozer', [
  ['rect', { x: 2.75, y: 15, width: 13, height: 5.5, rx: 2.75 }],
  ['path', { d: 'M4.5 15v-4h3V6.5h5l1 4.5H15v4M15 12.5h3' }],
  ['path', { d: 'M18 9.5c1.75 1.25 3 3 3 5.5s-1.25 4.25-3 5.5Z' }],
]);
export const IconCinderBlock = createIcon('cinder-block', [
  ['rect', { x: 2.75, y: 6.5, width: 18.5, height: 11, rx: 2.5 }],
  ['rect', { x: 5.75, y: 9.25, width: 5, height: 5.5, rx: 1.5 }],
  ['rect', { x: 13.25, y: 9.25, width: 5, height: 5.5, rx: 1.5 }],
]);
export const IconClawHammer = createIcon('claw-hammer', [
  ['path', { d: 'M3.5 5.5A1.5 1.5 0 0 1 5 4h10.5v4H5a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M15.5 6c2.25 0 4-1 5-2.75' }],
  ['rect', { x: 8.5, y: 8, width: 3, height: 13, rx: 1.5 }],
]);
export const IconConcreteMixer = createIcon('concrete-mixer', [
  ['ellipse', { cx: 8.75, cy: 10, rx: 6, ry: 3.75, transform: 'rotate(-20 8.75 10)' }],
  ['path', { d: 'M2.75 15.5H15.5V9.5h2.25a1.5 1.5 0 0 1 1.2.6l1.25 1.65a1.5 1.5 0 0 1 .3.9V16.5a1.25 1.25 0 0 1-1.25 1.25' }],
  ['path', { d: 'M4.25 17.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0M16 17.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0' }],
]);
export const IconConstructionBarrier = createIcon('construction-barrier', [
  ['rect', { x: 2.5, y: 7, width: 19, height: 6, rx: 2 }],
  ['path', { d: 'M10 7l-3 6M16 7l-3 6' }],
  ['path', { d: 'M5.5 13v7.5M18.5 13v7.5' }],
]);
export const IconConstructionNail = createIcon('construction-nail', [
  ['rect', { x: 6.5, y: 3, width: 11, height: 2.5, rx: 1.25 }],
  ['path', { d: 'M10.75 5.5v11L12 21l1.25-4.5v-11' }],
]);
export const IconDiningRoom = createIcon('dining-room', [
  ['path', { d: 'M8.5 20v-9h7v9' }],
  ['path', { d: 'M3 6.5V20M3 14.5h3V20' }],
  ['path', { d: 'M21 6.5V20M21 14.5h-3V20' }],
]);
export const IconDuplex = createIcon('duplex', [
  ['path', { d: 'M2.5 12 7.25 7.5 12 12l4.75-4.5L21.5 12' }],
  ['path', { d: 'M4 10.5V19a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-8.5' }],
  ['path', { d: 'M12 12v8.5' }],
]);
export const IconExcavator = createIcon('excavator', [
  ['rect', { x: 2.75, y: 16, width: 12, height: 4.5, rx: 2.25 }],
  ['path', { d: 'M4 16v-5a1.5 1.5 0 0 1 1.5-1.5h4l2 3V16' }],
  ['path', { d: 'M11.5 12.5 16 5.5l4.5 4.5' }],
  ['path', { d: 'M20.5 10l.75 4.5H17Z' }],
]);
export const IconFence = createIcon('fence', [
  ['path', { d: 'M4 20.5V7l1.5-2.5L7 7v13.5M10.5 20.5V7L12 4.5 13.5 7v13.5M17 20.5V7l1.5-2.5L20 7v13.5' }],
  ['path', { d: 'M2.75 10.5h18.5M2.75 16h18.5' }],
]);
export const IconFireplace = createIcon('fireplace', [
  ['path', { d: 'M2.75 5h18.5' }],
  ['path', { d: 'M4.5 5v15.5h15V5' }],
  ['path', { d: 'M8 20.5V16a4 4 0 0 1 8 0v4.5' }],
  ['path', { d: 'M12 20c-1.1 0-1.75-.75-1.75-1.6 0-1 .9-1.6 1.1-2.65.75.5 1 1.1 1 1.6.25-.25.4-.5.4-.85.6.5.95 1.2.95 1.9 0 .85-.6 1.6-1.7 1.6Z' }],
]);
export const IconFloorArea = createIcon('floor-area', [
  ['rect', { x: 7.5, y: 7.5, width: 13, height: 13, rx: 2.5 }],
  ['path', { d: 'M7.5 5.25V3h13v2.25' }],
  ['path', { d: 'M5.25 7.5H3v13h2.25' }],
]);
export const IconFloorPlan = createIcon('floor-plan', [
  ['rect', { x: 3, y: 3, width: 18, height: 18, rx: 3 }],
  ['path', { d: 'M12 3v5.5M12 12v9M3 12h5.5M15.5 12H21' }],
]);
export const IconForSaleSign = createIcon('for-sale-sign', [
  ['path', { d: 'M5 21V3.5M5 6h13' }],
  ['path', { d: 'M9.5 6v2.5M16.5 6v2.5' }],
  ['rect', { x: 8, y: 8.5, width: 11, height: 7, rx: 2 }],
]);
export const IconFrontDoor = createIcon('front-door', [
  ['path', { d: 'M5.5 20.5V9a6.5 6.5 0 0 1 13 0v11.5' }],
  ['path', { d: 'M3.5 20.5h17' }],
  ['circle', { cx: 15.5, cy: 13.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGazebo = createIcon('gazebo', [
  ['path', { d: 'M2.75 9.5 12 3.5l9.25 6Z' }],
  ['path', { d: 'M5 9.5v11M19 9.5v11M12 9.5v11' }],
  ['path', { d: 'M5 15h14' }],
]);
export const IconHandSaw = createIcon('hand-saw', [
  ['rect', { x: 15, y: 6.5, width: 6, height: 9, rx: 2.5 }],
  ['path', { d: 'M15 7.5 3 12v2.5h12M3 14.5l1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1' }],
  ['rect', { x: 16.75, y: 9, width: 2.5, height: 4, rx: 1.25 }],
]);
export const IconHardHat = createIcon('hard-hat', [
  ['path', { d: 'M4.5 16a7.5 7.5 0 0 1 15 0' }],
  ['rect', { x: 2.5, y: 16, width: 19, height: 3, rx: 1.5 }],
  ['path', { d: 'M10 9V5.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75V9' }],
]);
export const IconHomeInspection = createIcon('home-inspection', [
  ['path', { d: 'M3.75 11 12 4l8.25 7M5.75 9.5V19a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5V9.5' }],
  ['path', { d: 'M9 14.25l2 2 4-4.5' }],
]);
export const IconHomeRenovation = createIcon('home-renovation', [
  ['path', { d: 'M3.75 11 12 4l8.25 7M5.75 9.5V19a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5V9.5' }],
  ['rect', { x: 8.5, y: 11, width: 6, height: 2.5, rx: 1 }],
  ['path', { d: 'M14.5 12.25h1v2.25H12V18' }],
]);
export const IconHouseBungalow = createIcon('house-bungalow', [
  ['path', { d: 'M2.5 11.5 12 5l9.5 6.5' }],
  ['path', { d: 'M4.5 10.25v8.25a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8.25' }],
  ['path', { d: 'M10 20.5V16h4v4.5' }],
]);
export const IconHouseKey = createIcon('house-key', [
  ['path', { d: 'M3.25 10.5 7.5 6.5l4.25 4V15A1.5 1.5 0 0 1 10.25 16.5h-5.5A1.5 1.5 0 0 1 3.25 15Z' }],
  ['path', { d: 'M11.75 13h9M18.5 13v2.75M15.5 13v2' }],
]);
export const IconHouseMailbox = createIcon('house-mailbox', [
  ['path', { d: 'M4 9.5a3.5 3.5 0 0 1 7 0V15H4Z' }],
  ['path', { d: 'M7.5 6h9a3.5 3.5 0 0 1 3.5 3.5V15h-9' }],
  ['path', { d: 'M12 15v6M14 10h2.5' }],
]);
export const IconHouseTwoStorey = createIcon('house-two-storey', [
  ['path', { d: 'M4 9 12 3l8 6' }],
  ['path', { d: 'M6 7.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19V7.5' }],
  ['circle', { cx: 9.75, cy: 11, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 11, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9.75, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconHouseboat = createIcon('houseboat', [
  ['path', { d: 'M2.75 14.5h18.5l-1.6 4.25a2 2 0 0 1-1.87 1.25H6.22a2 2 0 0 1-1.87-1.25Z' }],
  ['path', { d: 'M5.5 14.5V9l5-4 5 4v5.5' }],
  ['rect', { x: 15.5, y: 10, width: 3.5, height: 4.5, rx: 1 }],
]);
export const IconKitchen = createIcon('kitchen', [
  ['rect', { x: 4, y: 3, width: 16, height: 18, rx: 3 }],
  ['path', { d: 'M4 8h16' }],
  ['rect', { x: 7, y: 11, width: 10, height: 6.5, rx: 1.5 }],
  ['circle', { cx: 8, cy: 5.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 11, cy: 5.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLadder = createIcon('ladder', [
  ['path', { d: 'M7 21 9 3M17 21 15 3' }],
  ['path', { d: 'M8.5 7.5h7M8 12h8M7.5 16.5h9' }],
]);
export const IconLandPlot = createIcon('land-plot', [
  ['path', { d: 'M2.75 20 7 13h14.25L17 20Z' }],
  ['path', { d: 'M11.5 16.5V3.5l5.5 2.5-5.5 2.5' }],
]);
export const IconLivingRoom = createIcon('living-room', [
  ['path', { d: 'M5 10V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2' }],
  ['path', { d: 'M3 12.5a2 2 0 0 1 4 0V14h10v-1.5a2 2 0 0 1 4 0V18H3Z' }],
  ['path', { d: 'M5 18v2M19 18v2' }],
]);
export const IconLogCabin = createIcon('log-cabin', [
  ['path', { d: 'M2.75 11 12 4l9.25 7' }],
  ['path', { d: 'M5 9.5V19a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19V9.5' }],
  ['path', { d: 'M5 13h14M5 16.75h14' }],
]);
export const IconMeasuringWheel = createIcon('measuring-wheel', [
  ['circle', { cx: 15.5, cy: 16, r: 4.5 }],
  ['path', { d: 'M15.5 16 6 4.5M4.25 5.75 7.75 3.25' }],
  ['circle', { cx: 15.5, cy: 16, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMobileHome = createIcon('mobile-home', [
  ['rect', { x: 2.5, y: 6.5, width: 17, height: 10, rx: 2.5 }],
  ['path', { d: 'M5.75 18.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0M19.5 14.5h2' }],
  ['path', { d: 'M14 16.5v-6h3v6' }],
]);
export const IconMovingBox = createIcon('moving-box', [
  ['path', { d: 'M4 10h16v8.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z' }],
  ['path', { d: 'M4 10 2.5 6.5h7L12 10M20 10l1.5-3.5h-7L12 10' }],
]);
export const IconOfficeTower = createIcon('office-tower', [
  ['path', { d: 'M6.5 20.5V9.5a1.5 1.5 0 0 1 1.5-1.5h1.5V6.5A1.5 1.5 0 0 1 11 5h2a1.5 1.5 0 0 1 1.5 1.5V8H16a1.5 1.5 0 0 1 1.5 1.5v11' }],
  ['path', { d: 'M12 5V2.75M4 20.5h16' }],
  ['path', { d: 'M10 11.5v6M14 11.5v6' }],
]);
export const IconParkingSpace = createIcon('parking-space', [
  ['rect', { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
  ['path', { d: 'M9.5 17V7h3.5a3 3 0 0 1 0 6H9.5' }],
]);
export const IconPlumbBob = createIcon('plumb-bob', [
  ['path', { d: 'M7.5 3h9' }],
  ['path', { d: 'M12 3v5' }],
  ['path', { d: 'M8.5 8h7v2L12 20.75 8.5 10Z' }],
]);
export const IconPowerDrill = createIcon('power-drill', [
  ['rect', { x: 6, y: 4.5, width: 12, height: 6.5, rx: 3 }],
  ['path', { d: 'M6 7.75H2.5' }],
  ['path', { d: 'M12 11l-1.5 6h5L16 11' }],
  ['rect', { x: 9, y: 17, width: 7.5, height: 3.5, rx: 1.25 }],
]);
export const IconPropertyLocation = createIcon('property-location', [
  ['path', { d: 'M12 21c-3.5-3.5-7-7-7-11a7 7 0 0 1 14 0c0 4-3.5 7.5-7 11Z' }],
  ['path', { d: 'M9 11.25 12 8.5l3 2.75M10 10.5v3h4v-3' }],
]);
export const IconPropertyPriceTag = createIcon('property-price-tag', [
  ['path', { d: 'M3.5 4.75v6.4a2 2 0 0 0 .6 1.4l7.85 7.85a2 2 0 0 0 2.8 0l5.4-5.4a2 2 0 0 0 0-2.8L12.3 4.35a2 2 0 0 0-1.4-.6H4.5a1 1 0 0 0-1 1Z' }],
  ['circle', { cx: 7.25, cy: 7.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M10.5 13.25 13 11l2.5 2.25M11.25 12.75v2.75h3.5v-2.75' }],
]);
export const IconPropertySearch = createIcon('property-search', [
  ['circle', { cx: 10.5, cy: 10.5, r: 7 }],
  ['path', { d: 'M15.5 15.5 20.5 20.5' }],
  ['path', { d: 'M7.5 11.5 10.5 8.75l3 2.75M8.5 10.75V13.5h4v-2.75' }],
]);
export const IconPropertyValue = createIcon('property-value', [
  ['path', { d: 'M3.75 11 12 4l8.25 7M5.75 9.5V19a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5V9.5' }],
  ['path', { d: 'M13.6 12.4c-.25-.55-.85-.9-1.6-.9-.9 0-1.4.45-1.4 1 0 1.4 3.2.9 3.2 2.35 0 .6-.55 1.05-1.8 1.05-.8 0-1.45-.35-1.7-.9M12 10.5v1M12 15.9v1' }],
]);
export const IconPropertyViewing = createIcon('property-viewing', [
  ['path', { d: 'M3.75 11 12 4l8.25 7M5.75 9.5V19a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5V9.5' }],
  ['path', { d: 'M8 15c2.4-3 5.6-3 8 0-2.4 3-5.6 3-8 0Z' }],
  ['circle', { cx: 12, cy: 15, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRoadworkSign = createIcon('roadwork-sign', [
  ['rect', { x: 6.5, y: 4.5, width: 11, height: 11, rx: 2.5, transform: 'rotate(45 12 10)' }],
  ['path', { d: 'M12 7v3.75' }],
  ['path', { d: 'M9.5 15.5v5M14.5 15.5v5' }],
  ['circle', { cx: 12, cy: 13.25, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRoofTruss = createIcon('roof-truss', [
  ['path', { d: 'M2.5 17 12 5l9.5 12Z' }],
  ['path', { d: 'M12 5v12M7.25 11 12 17l4.75-6' }],
]);
export const IconSavedHome = createIcon('saved-home', [
  ['path', { d: 'M3.75 11 12 4l8.25 7M5.75 9.5V19a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5V9.5' }],
  ['path', { d: 'M12 17c-1.5-1.1-3-2.2-3-3.7a1.5 1.5 0 0 1 3-.45 1.5 1.5 0 0 1 3 .45c0 1.5-1.5 2.6-3 3.7Z' }],
]);
export const IconScaffolding = createIcon('scaffolding', [
  ['path', { d: 'M4 3v18M20 3v18' }],
  ['path', { d: 'M4 8h16M4 14h16' }],
  ['path', { d: 'M4 14 20 8' }],
]);
export const IconScrewdriver = createIcon('screwdriver', [
  ['rect', { x: 9.5, y: 2.75, width: 5, height: 8, rx: 2.5, transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M12 10.75V18.5', transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M11.25 18.5h1.5v1.75L12 21l-.75-.75Z', transform: 'rotate(45 12 12)' }],
]);
export const IconShovel = createIcon('shovel', [
  ['path', { d: 'M3.5 20.5V16l2.5-2.5 4.5 4.5L8 20.5Z' }],
  ['path', { d: 'M8.25 15.75 17.5 6.5' }],
  ['path', { d: 'M15.75 4.75l3.5 3.5' }],
]);
export const IconSkipBin = createIcon('skip-bin', [
  ['path', { d: 'M3 10h18l-2.25 8.75a2 2 0 0 1-1.95 1.5H7.2a2 2 0 0 1-1.95-1.5Z' }],
  ['path', { d: 'M6 10l2.5-3 2 1.5 3-3.5 2.5 2.75L18 10' }],
]);
export const IconSledgehammer = createIcon('sledgehammer', [
  ['rect', { x: 11.5, y: 5, width: 10, height: 5, rx: 1.75, transform: 'rotate(45 16.5 7.5)' }],
  ['path', { d: 'M3.75 20.25 14.75 9.25' }],
]);
export const IconSmartHome = createIcon('smart-home', [
  ['path', { d: 'M3.75 11 12 4l8.25 7M5.75 9.5V19a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5V9.5' }],
  ['path', { d: 'M9.25 13.25a4 4 0 0 1 5.5 0M10.6 15a2 2 0 0 1 2.8 0' }],
  ['circle', { cx: 12, cy: 17, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSpanner = createIcon('spanner', [
  ['path', { d: 'M14.5 3.5a5 5 0 0 0-4.6 6.9L3.75 16.5a2.47 2.47 0 0 0 3.5 3.5l6.1-6.15A5 5 0 0 0 20.25 9.1l-3 3-2.5-.5-.5-2.5 3-3a5 5 0 0 0-2.75-.6Z' }],
]);
export const IconSpiritLevel = createIcon('spirit-level', [
  ['rect', { x: 2.5, y: 8.5, width: 19, height: 7, rx: 2.5 }],
  ['rect', { x: 9.5, y: 10.5, width: 5, height: 3, rx: 1.5 }],
  ['circle', { cx: 12, cy: 12, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconStaircase = createIcon('staircase', [
  ['path', { d: 'M3 20.5h4.5V16H12v-4.5h4.5V7H21' }],
]);
export const IconSteelBeam = createIcon('steel-beam', [
  ['path', { d: 'M5 4.5h14v3h-5.25v9H19v3H5v-3h5.25v-9H5Z' }],
]);
export const IconTheodolite = createIcon('theodolite', [
  ['rect', { x: 8.5, y: 3.5, width: 7, height: 6.5, rx: 2 }],
  ['path', { d: 'M15.5 6.75h3' }],
  ['path', { d: 'M6.5 20.5 12 10l5.5 10.5' }],
  ['path', { d: 'M12 10v10.5' }],
]);
export const IconTimberLogs = createIcon('timber-logs', [
  ['path', { d: 'M3.75 16a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0 -7.5 0M12.75 16a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0 -7.5 0M8.25 8.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0 -7.5 0' }],
  ['circle', { cx: 7.5, cy: 16, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 16, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 8.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTinyHouse = createIcon('tiny-house', [
  ['path', { d: 'M4.5 15V9.5l5.75-5 5.75 5V15' }],
  ['path', { d: 'M2.75 15H18l3.25 1.75' }],
  ['path', { d: 'M6.25 17.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0M10.75 17.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0' }],
]);
export const IconToolbox = createIcon('toolbox', [
  ['rect', { x: 2.75, y: 8.5, width: 18.5, height: 12, rx: 3 }],
  ['path', { d: 'M8.5 8.5V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v2.5' }],
  ['path', { d: 'M2.75 13h7.75M13.5 13h7.75' }],
  ['rect', { x: 10.5, y: 11.5, width: 3, height: 3, rx: 1 }],
]);
export const IconTowerCrane = createIcon('tower-crane', [
  ['path', { d: 'M7.5 20.5V3l13.5 3.5' }],
  ['path', { d: 'M3 6.5h18' }],
  ['path', { d: 'M17 6.5V13c0 1.5 2 1.5 2 3s-2 1.75-2.75.5' }],
  ['path', { d: 'M4.5 20.5h6' }],
]);
export const IconTownhouse = createIcon('townhouse', [
  ['path', { d: 'M3 20.5v-10l3-3.5 3 3.5 3-3.5 3 3.5 3-3.5 3 3.5v10' }],
  ['path', { d: 'M9 10.5v10M15 10.5v10' }],
  ['path', { d: 'M2.5 20.5h19' }],
]);
export const IconTrowel = createIcon('trowel', [
  ['path', { d: 'M3.5 20.5 7 11.5l5.5 5.5Z' }],
  ['path', { d: 'M9.75 14.25 13 11' }],
  ['rect', { x: 12.5, y: 6, width: 8, height: 3, rx: 1.5, transform: 'rotate(-45 16.5 7.5)' }],
]);
export const IconWheelbarrow = createIcon('wheelbarrow', [
  ['path', { d: 'M3 8h12.5l-2.25 6.5H6.5Z' }],
  ['circle', { cx: 6.5, cy: 18, r: 2.5 }],
  ['path', { d: 'M8.5 14.5 7.5 15.75M13 14.5l1.5 5.5M15.5 8l5.75-1.5' }],
]);
export const IconWindowFrame = createIcon('window-frame', [
  ['rect', { x: 4, y: 3, width: 16, height: 18, rx: 3 }],
  ['path', { d: 'M12 3v18M4 12h16' }],
]);
export const IconWoodScrew = createIcon('wood-screw', [
  ['path', { d: 'M7 5.5a5 2 0 0 1 10 0Z' }],
  ['path', { d: 'M9.5 5.5v11l2.5 4.5 2.5-4.5v-11' }],
  ['path', { d: 'M9.5 9l5-1.5M9.5 12.25l5-1.5M9.5 15.5l5-1.5' }],
]);
export const IconWreckingBall = createIcon('wrecking-ball', [
  ['path', { d: 'M4 20.5 9 4l9 2' }],
  ['path', { d: 'M18 6v6' }],
  ['circle', { cx: 18, cy: 15.5, r: 3.5 }],
]);
