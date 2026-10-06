/** Domain: food restaurants. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAvocado = createIcon('avocado', [
  ['path', { d: 'M12 3c-2.5 0-3.5 3-4.25 5.25S5 12.25 5 14.5a7 7 0 0 0 14 0c0-2.25-2-3.75-2.75-6.25S14.5 3 12 3Z' }],
  ['circle', { cx: 12, cy: 14.5, r: 2.75 }],
]);
export const IconBaguette = createIcon('baguette', [
  ['rect', { x: 2.75, y: 9.25, width: 18.5, height: 5.5, rx: 2.75, transform: 'rotate(-45 12 12)' }],
  ['path', { d: 'M8 13.25l1.5-2.5M11.25 13.25l1.5-2.5M14.5 13.25l1.5-2.5', transform: 'rotate(-45 12 12)' }],
]);
export const IconBanana = createIcon('banana', [
  ['path', { d: 'M6.25 6.25c-2 7.5 3 14.25 11.5 12.75 2-.35 3.25-1.25 3.25-2.25-7.25.25-11.25-4.25-12.25-10.5Z' }],
  ['path', { d: 'M6.25 6.25l.25-2.5h2l.25 2.5' }],
]);
export const IconBarbecueGrill = createIcon('barbecue-grill', [
  ['path', { d: 'M4 11h16a8 7 0 0 1-16 0Z' }],
  ['path', { d: 'M5.5 8.5a6.5 4.5 0 0 1 13 0Z' }],
  ['path', { d: 'M8 17l-2 4M16 17l2 4' }],
]);
export const IconBeerMug = createIcon('beer-mug', [
  ['rect', { x: 5, y: 8, width: 10, height: 12.5, rx: 2.5 }],
  ['path', { d: 'M15 10.5h1.75A2.25 2.25 0 0 1 19 12.75v2.5a2.25 2.25 0 0 1-2.25 2.25H15' }],
  ['path', { d: 'M5 8a2.5 2.5 0 0 1 2.5-3.5 2.75 2.75 0 0 1 5 0A2.5 2.5 0 0 1 15 8' }],
]);
export const IconBirthdayCake = createIcon('birthday-cake', [
  ['rect', { x: 4, y: 11, width: 16, height: 9.5, rx: 3 }],
  ['path', { d: 'M4 14.75q2 1.5 4 0t4 0 4 0 4 0' }],
  ['path', { d: 'M12 11V8' }],
  ['path', { d: 'M12 5.75c-.9-.85-.9-1.75 0-2.5.9.75.9 1.65 0 2.5Z' }],
]);
export const IconBlender = createIcon('blender', [
  ['path', { d: 'M7.5 3.25h9a.75.75 0 0 1 .75.85L16 14H8L6.75 4.1a.75.75 0 0 1 .75-.85Z' }],
  ['rect', { x: 6.5, y: 14, width: 11, height: 6.75, rx: 2.5 }],
  ['circle', { cx: 12, cy: 17.4, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBreadSlice = createIcon('bread-slice', [
  ['path', { d: 'M6.5 20.25h11V12.6a3.75 3.75 0 0 0 1.25-7.2A4 4 0 0 0 15.25 3.75h-6.5A4 4 0 0 0 5.25 5.4 3.75 3.75 0 0 0 6.5 12.6Z' }],
]);
export const IconBurger = createIcon('burger', [
  ['path', { d: 'M4.5 10.5a7.5 6.25 0 0 1 15 0Z' }],
  ['path', { d: 'M3.75 13.75q1.03 1 2.06 0t2.06 0 2.06 0 2.06 0 2.06 0 2.06 0 2.06 0 2.06 0' }],
  ['path', { d: 'M4.5 17h15v.5a2.5 2.5 0 0 1-2.5 2.5H7a2.5 2.5 0 0 1-2.5-2.5Z' }],
]);
export const IconCakeSlice = createIcon('cake-slice', [
  ['path', { d: 'M3.5 12.5 16.6 6.7a2.5 2.5 0 0 1 3.9 2.05V18.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M3.5 15.75h17' }],
  ['circle', { cx: 16.25, cy: 4.25, r: 1.05, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCarrot = createIcon('carrot', [
  ['path', { d: 'M15.5 8.5c-1.5-1.5-3.5-1.5-5 0L4 19.25c-.4.75.25 1.25 1 .9L15.5 13.5c1.5-1.5 1.5-3.5 0-5Z' }],
  ['path', { d: 'M15.75 8.25l.75-4.5M15.75 8.25l4.5-.75M15.75 8.25l3.5-3.5' }],
]);
export const IconCheeseGrater = createIcon('cheese-grater', [
  ['path', { d: 'M8.5 7.5h7l2.25 11.5a1.25 1.25 0 0 1-1.25 1.5h-9a1.25 1.25 0 0 1-1.25-1.5Z' }],
  ['path', { d: 'M10 7.5V5a1.5 1.5 0 0 1 1.5-1.5h1A1.5 1.5 0 0 1 14 5v2.5' }],
  ['circle', { cx: 10.5, cy: 11.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 11.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 16.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 16.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCheeseWedge = createIcon('cheese-wedge', [
  ['path', { d: 'M3.5 11 15 4.5l5.5 6.5v7.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M3.5 11h17' }],
  ['circle', { cx: 8.5, cy: 15.5, r: 1.5 }],
  ['circle', { cx: 15, cy: 16, r: 1.25 }],
]);
export const IconChefHat = createIcon('chef-hat', [
  ['path', { d: 'M7 16v-2.4A3.75 3.75 0 0 1 7.6 6.2a4.5 4.5 0 0 1 8.8 0 3.75 3.75 0 0 1 .6 7.4V16' }],
  ['rect', { x: 7, y: 16, width: 10, height: 4.25, rx: 2 }],
]);
export const IconCherries = createIcon('cherries', [
  ['circle', { cx: 7.25, cy: 16.5, r: 3.5 }],
  ['circle', { cx: 16.75, cy: 17, r: 3.5 }],
  ['path', { d: 'M7.25 13C8.5 8.5 11 5.5 15 3.5M16.75 13.5c-.5-4-1-7-1.75-10' }],
]);
export const IconChiliPepper = createIcon('chili-pepper', [
  ['path', { d: 'M14.5 8.5c-1 6-5 10.5-10.5 11 .5 1 2 1.5 3.5 1.5 6.5 0 11-5.25 11-10.75 0-1.25-1.75-2.25-4-1.75Z' }],
  ['path', { d: 'M16.5 8.25C16.5 5.75 17.75 4 20 3.5' }],
]);
export const IconChocolateChipCookie = createIcon('chocolate-chip-cookie', [
  ['path', { d: 'M20.5 12A8.5 8.5 0 1 1 12 3.5a2.5 2.5 0 0 0 2.5 3.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 3.5 3' }],
  ['circle', { cx: 8.5, cy: 9.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 11.5, cy: 14.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.5, cy: 15.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.5, cy: 15, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconChopsticks = createIcon('chopsticks', [
  ['path', { d: 'M4.5 19 17.5 3.5M8.25 20.5 20 6' }],
]);
export const IconCitrusSlice = createIcon('citrus-slice', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['circle', { cx: 12, cy: 12, r: 6.25 }],
  ['path', { d: 'M12 5.75v12.5M6.6 8.9l10.8 6.2M6.6 15.1l10.8-6.2' }],
]);
export const IconCocktailGlass = createIcon('cocktail-glass', [
  ['path', { d: 'M4.5 4.5h15l-6.65 7.6a1.1 1.1 0 0 1-1.7 0Z' }],
  ['path', { d: 'M12 12.5v8M8.5 20.5h7' }],
  ['circle', { cx: 10, cy: 7, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCoffeeBean = createIcon('coffee-bean', [
  ['ellipse', { cx: 12, cy: 12, rx: 5.75, ry: 8.25, transform: 'rotate(35 12 12)' }],
  ['path', { d: 'M10.5 4.25c3 3.5-2.5 11.5 3 15.5', transform: 'rotate(35 12 12)' }],
]);
export const IconCoffeeMug = createIcon('coffee-mug', [
  ['path', { d: 'M4.5 10h11v5.5a4.5 4.5 0 0 1-4.5 4.5H9a4.5 4.5 0 0 1-4.5-4.5Z' }],
  ['path', { d: 'M15.5 11.5h1.25a2.5 2.5 0 0 1 0 5H15.5' }],
  ['path', { d: 'M8 3.5c-.75 1 .75 2 0 3.75M12 3.5c-.75 1 .75 2 0 3.75' }],
]);
export const IconCookingPot = createIcon('cooking-pot', [
  ['path', { d: 'M5 10.5h14v6a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 16.5Z' }],
  ['path', { d: 'M5 13H3M19 13h2' }],
  ['path', { d: 'M4.5 7.75h15M10.25 7.75a1.75 1.75 0 0 1 3.5 0' }],
]);
export const IconCroissant = createIcon('croissant', [
  ['path', { d: 'M3.25 15.5C4 10 7.5 6.5 12 6.5s8 3.5 8.75 9c-1 1.25-2.75 1.25-3.75 0-1.25-2.5-2.75-3.75-5-3.75s-3.75 1.25-5 3.75c-1 1.25-2.75 1.25-3.75 0Z' }],
  ['path', { d: 'M9 7.25l1.25 4.5M15 7.25l-1.25 4.5' }],
]);
export const IconCupcake = createIcon('cupcake', [
  ['path', { d: 'M5.5 12.5c0-2 1-3 2.5-3.25C8 6.75 9.75 5.25 12 5.25s4 1.5 4 4c1.5.25 2.5 1.25 2.5 3.25Z' }],
  ['path', { d: 'M6.25 12.5l1.1 6.85a1.5 1.5 0 0 0 1.5 1.25h6.3a1.5 1.5 0 0 0 1.5-1.25l1.1-6.85' }],
  ['circle', { cx: 12, cy: 3.2, r: 1.05, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCutlery = createIcon('cutlery', [
  ['path', { d: 'M6.5 3.5V8a2 2 0 0 0 4 0V3.5M8.5 3.5v4M8.5 10v10.5' }],
  ['path', { d: 'M17 20.5V3.5c-2 1-3.25 3.5-3.25 6.75 0 1.5.75 2.5 2 2.5H17' }],
]);
export const IconDonut = createIcon('donut', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['circle', { cx: 12, cy: 12, r: 2.75 }],
  ['circle', { cx: 8, cy: 9, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.75, cy: 7.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.75, cy: 13.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9.25, cy: 16.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDrumstick = createIcon('drumstick', [
  ['ellipse', { cx: 15, cy: 9.25, rx: 5.75, ry: 4.25, transform: 'rotate(-45 15 9.25)' }],
  ['path', { d: 'M11.25 13 7.75 16.5' }],
  ['circle', { cx: 5.75, cy: 16.25, r: 1.5 }],
  ['circle', { cx: 8, cy: 18.5, r: 1.5 }],
]);
export const IconEgg = createIcon('egg', [
  ['path', { d: 'M12 3.5c3.5 0 6.5 5 6.5 9.75a6.5 6.5 0 0 1-13 0C5.5 8.5 8.5 3.5 12 3.5Z' }],
]);
export const IconFrenchFries = createIcon('french-fries', [
  ['path', { d: 'M6 10.5h12l-1.5 8.5a1.5 1.5 0 0 1-1.5 1.25H9A1.5 1.5 0 0 1 7.5 19Z' }],
  ['path', { d: 'M8 10.5 7.5 4.75M11 10.5V3.5M14 10.5l.5-6M16.5 10.5l1-4.75' }],
]);
export const IconFreshFish = createIcon('fresh-fish', [
  ['path', { d: 'M17 12c-2-3.5-4.75-5.5-8-5.5S3.5 9 2.75 12c.75 3 2.75 5.5 6.25 5.5s6-2 8-5.5l3.75-3.25v6.5Z' }],
  ['circle', { cx: 7, cy: 11, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFriedEgg = createIcon('fried-egg', [
  ['path', { d: 'M12 3.5c3 0 4.25 2 6 2.75s2.75 2.5 2.75 4.75-1.5 3.5-2.5 5-1.5 4.5-5.25 4.5-4.25-2-6-3S3.25 14.5 3.25 12 5 8 6.5 6.5 9 3.5 12 3.5Z' }],
  ['circle', { cx: 12, cy: 12, r: 3 }],
]);
export const IconFruitPie = createIcon('fruit-pie', [
  ['path', { d: 'M4 14.25h16l-1.1 3.9a1.75 1.75 0 0 1-1.7 1.35H6.8a1.75 1.75 0 0 1-1.7-1.35Z' }],
  ['path', { d: 'M2.75 14.25q1.16-1.5 2.31 0t2.31 0 2.31 0 2.31 0 2.31 0 2.31 0 2.31 0 2.31 0' }],
  ['path', { d: 'M4.5 12C5.5 8.75 8.5 7.25 12 7.25s6.5 1.5 7.5 4.75' }],
  ['path', { d: 'M9 10.5l1-1M14 10.5l1-1' }],
]);
export const IconFryingPan = createIcon('frying-pan', [
  ['path', { d: 'M2.75 11.5h12.5v.75a5 5 0 0 1-5 5h-2.5a5 5 0 0 1-5-5Z' }],
  ['path', { d: 'M15.25 12.25 21 10.5' }],
]);
export const IconGrapes = createIcon('grapes', [
  ['path', { d: 'M8.4 13.1A2.4 2.4 0 1 1 9.6 11A2.4 2.4 0 0 1 14.4 11A2.4 2.4 0 1 1 15.6 13.1A2.4 2.4 0 0 1 13.2 17.3A2.4 2.4 0 1 1 10.8 17.3A2.4 2.4 0 0 1 8.4 13.1Z' }],
  ['path', { d: 'M12 8.6V5c0-1 .75-1.75 2.75-2' }],
]);
export const IconHotDog = createIcon('hot-dog', [
  ['rect', { x: 3, y: 9, width: 18, height: 4.5, rx: 2.25 }],
  ['path', { d: 'M4.25 12.5v1a4 4 0 0 0 4 4h7.5a4 4 0 0 0 4-4v-1' }],
  ['path', { d: 'M7 11.25q1.25-1 2.5 0t2.5 0 2.5 0 2.5 0' }],
]);
export const IconIceCreamCone = createIcon('ice-cream-cone', [
  ['path', { d: 'M6.5 11a5.5 5.5 0 0 1 11 0Z' }],
  ['path', { d: 'M7.5 11 12 20.75 16.5 11' }],
]);
export const IconIceLolly = createIcon('ice-lolly', [
  ['path', { d: 'M7 15V8a5 5 0 0 1 10 0v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 15Z' }],
  ['path', { d: 'M12 16.5v4.25' }],
]);
export const IconKitchenKnife = createIcon('kitchen-knife', [
  ['path', { d: 'M13.5 9.25H3.5c0 3 2.5 5 6 5h4Z', transform: 'rotate(-35 12 12)' }],
  ['rect', { x: 13.5, y: 9.75, width: 7.5, height: 3.5, rx: 1.75, transform: 'rotate(-35 12 12)' }],
]);
export const IconLadle = createIcon('ladle', [
  ['path', { d: 'M3.5 12.5h11a5.5 5.5 0 0 1-11 0Z' }],
  ['path', { d: 'M13.75 12.5V5a1.5 1.5 0 0 1 3 0v1.25' }],
]);
export const IconLollipop = createIcon('lollipop', [
  ['circle', { cx: 12, cy: 9, r: 6 }],
  ['path', { d: 'M12 9a1.75 1.75 0 0 1 3.5 0 3.5 3.5 0 0 1-7 0 5.25 5.25 0 0 1 9.5-3' }],
  ['path', { d: 'M12 15v6' }],
]);
export const IconMeasuringCup = createIcon('measuring-cup', [
  ['path', { d: 'M4.5 5.5h11.5v11a3.5 3.5 0 0 1-3.5 3.5h-4.5A3.5 3.5 0 0 1 4.5 16.5Z' }],
  ['path', { d: 'M4.5 9.5h3M4.5 13h3M4.5 16.5h3' }],
  ['path', { d: 'M16 8h1.75a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H16' }],
]);
export const IconMicrowave = createIcon('microwave', [
  ['rect', { x: 2.75, y: 5, width: 18.5, height: 14, rx: 3.25 }],
  ['rect', { x: 5.75, y: 8, width: 9, height: 8, rx: 2 }],
  ['circle', { cx: 18, cy: 9.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18, cy: 13, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMilkCarton = createIcon('milk-carton', [
  ['path', { d: 'M7 10.5 9 7h6l2 3.5v8.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19Z' }],
  ['path', { d: 'M9 7V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7' }],
  ['path', { d: 'M7 10.5h10' }],
]);
export const IconMushroom = createIcon('mushroom', [
  ['path', { d: 'M3.5 12.25a8.5 8 0 0 1 17 0Z' }],
  ['path', { d: 'M9 12.25v5.75a2.5 2.5 0 0 0 2.5 2.5h1A2.5 2.5 0 0 0 15 18v-5.75' }],
  ['circle', { cx: 9, cy: 8.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.5, cy: 7.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconNonVegMark = createIcon('non-veg-mark', [
  ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 3.25 }],
  ['path', { d: 'M11.13 8.25q.87-1.5 1.74 0l2.75 4.75q.87 1.5-.87 1.5h-5.5q-1.74 0-.87-1.5Z', fill: 'currentColor' }],
]);
export const IconNoodleBowl = createIcon('noodle-bowl', [
  ['path', { d: 'M3.5 12h17a8.5 7.75 0 0 1-17 0Z' }],
  ['path', { d: 'M12.5 10.5 20.5 3M10 10 16.5 2.75' }],
  ['path', { d: 'M7 12c.75-1.25-.75-2 0-3.25M10 12c.75-1.25-.75-2 0-3.25' }],
]);
export const IconOnigiri = createIcon('onigiri', [
  ['path', { d: 'M10.27 4.9q1.73-2.9 3.46 0l6.1 10.25q1.73 2.9-1.73 2.9H5.9q-3.46 0-1.73-2.9Z' }],
  ['rect', { x: 9, y: 13, width: 6, height: 5.05, rx: 1.25 }],
]);
export const IconOvenMitt = createIcon('oven-mitt', [
  ['path', { d: 'M8.25 20.5h9.5V9a4.75 4.75 0 0 0-9.5 0v3.25L6.5 10.5a1.75 1.75 0 0 0-2.5 2.5l4.25 4.25' }],
  ['path', { d: 'M8.25 17.25h9.5V20.5' }],
]);
export const IconPancakes = createIcon('pancakes', [
  ['ellipse', { cx: 12, cy: 10.25, rx: 8.5, ry: 2.5 }],
  ['path', { d: 'M3.5 10.25v6.5c0 1.4 3.8 2.5 8.5 2.5s8.5-1.1 8.5-2.5v-6.5M3.5 13.5c0 1.4 3.8 2.5 8.5 2.5s8.5-1.1 8.5-2.5' }],
  ['rect', { x: 10, y: 6, width: 4, height: 2.5, rx: 1 }],
]);
export const IconPear = createIcon('pear', [
  ['path', { d: 'M12 6.5c-2 0-3 1.5-3 3.5 0 1.75-3.5 3.25-3.5 6.5a6.5 4.25 0 0 0 13 0c0-3.25-3.5-4.75-3.5-6.5 0-2-1-3.5-3-3.5Z' }],
  ['path', { d: 'M12 6.5V3.5M12 5c1-1.5 2.75-1.75 4-1.25-.75 1.5-2.5 1.75-4 1.25' }],
]);
export const IconPineapple = createIcon('pineapple', [
  ['ellipse', { cx: 12, cy: 15.25, rx: 5.5, ry: 6 }],
  ['path', { d: 'M9 9.75 7.25 5l3 2.25L12 2.75l1.75 4.5 3-2.25L15 9.75' }],
  ['path', { d: 'M6.75 13.25l2.6 2.5 2.65-2.5 2.65 2.5 2.6-2.5M7 17.5l2.35 2.25 2.65-2.5 2.65 2.5L17 17.5' }],
]);
export const IconPizzaSlice = createIcon('pizza-slice', [
  ['path', { d: 'M4.25 6.5Q12 2 19.75 6.5L12.8 20.2Q12 21.5 11.2 20.2Z' }],
  ['path', { d: 'M5.5 9q6.5-3.6 13 0' }],
  ['circle', { cx: 10.5, cy: 11.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 14.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPlaceSetting = createIcon('place-setting', [
  ['circle', { cx: 12, cy: 12, r: 5.5 }],
  ['path', { d: 'M3 4.5v4a1.25 1.25 0 0 0 2.5 0v-4M4.25 9.75v9.75' }],
  ['path', { d: 'M20.5 19.5V4.5c-1.25.5-2 2.25-2 4.25 0 1 .5 1.5 1.25 1.5h.75' }],
]);
export const IconPretzel = createIcon('pretzel', [
  ['path', { d: 'M12 7.25C10.25 3.75 3.5 3.75 3.5 10.25c0 5.25 4 9 8.5 9s8.5-3.75 8.5-9c0-6.5-6.75-6.5-8.5-3Z' }],
  ['path', { d: 'M7.5 17.5C9.5 15 14 11 14 7.25M16.5 17.5C14.5 15 10 11 10 7.25' }],
]);
export const IconRestaurantMenu = createIcon('restaurant-menu', [
  ['rect', { x: 4.75, y: 3.25, width: 14.5, height: 17.5, rx: 3.25 }],
  ['path', { d: 'M9 7.5v3.25a1.25 1.25 0 0 0 2.5 0V7.5M10.25 12v4.5' }],
  ['path', { d: 'M15 16.5v-9c-1.25.6-1.75 2-1.75 3.75 0 .75.5 1.25 1.25 1.25h.5' }],
]);
export const IconRiceBowl = createIcon('rice-bowl', [
  ['path', { d: 'M3.5 12h17a8.5 7.75 0 0 1-17 0Z' }],
  ['path', { d: 'M6 12a6 4.75 0 0 1 12 0' }],
  ['path', { d: 'M15.5 6.25 20.5 3' }],
]);
export const IconRollingPin = createIcon('rolling-pin', [
  ['rect', { x: 6, y: 9.75, width: 12, height: 4.5, rx: 2.25, transform: 'rotate(-45 12 12)' }],
  ['path', { d: 'M6 12H3M18 12h3', transform: 'rotate(-45 12 12)' }],
]);
export const IconSaladBowl = createIcon('salad-bowl', [
  ['path', { d: 'M3.5 12h17a8.5 7.75 0 0 1-17 0Z' }],
  ['path', { d: 'M8.5 12c-1.5-2-1-5.5 2.5-7 .75 3-.25 5.5-2.5 7M13 12c.25-3 2.5-5.25 6-5.5-.25 3-2.5 5.25-6 5.5' }],
]);
export const IconSaltShaker = createIcon('salt-shaker', [
  ['rect', { x: 7, y: 9, width: 10, height: 11.5, rx: 3 }],
  ['path', { d: 'M8.25 9V7.5a3.75 3.75 0 0 1 7.5 0V9' }],
  ['circle', { cx: 10.5, cy: 6.75, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 6.75, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 5, r: 0.7, fill: 'currentColor', stroke: 'none' }],
]);
export const IconServingCloche = createIcon('serving-cloche', [
  ['path', { d: 'M4.5 15.5a7.5 7.5 0 0 1 15 0' }],
  ['path', { d: 'M3 18.25h18' }],
  ['path', { d: 'M12 8V6.5' }],
  ['circle', { cx: 12, cy: 5.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSkewer = createIcon('skewer', [
  ['path', { d: 'M12 2.5v19' }],
  ['rect', { x: 8.5, y: 5, width: 7, height: 3.75, rx: 1 }],
  ['circle', { cx: 12, cy: 11.375, r: 2.625 }],
  ['rect', { x: 8.5, y: 14, width: 7, height: 3.75, rx: 1 }],
]);
export const IconSoftDrink = createIcon('soft-drink', [
  ['path', { d: 'M6.5 8.5h11l-1.3 10.7a1.5 1.5 0 0 1-1.5 1.3h-5.4a1.5 1.5 0 0 1-1.5-1.3Z' }],
  ['path', { d: 'M12.25 8.5 13.5 3.75h3' }],
]);
export const IconSoupBowl = createIcon('soup-bowl', [
  ['path', { d: 'M3.5 12h17a8.5 7.75 0 0 1-17 0Z' }],
  ['path', { d: 'M9 3.5c-.9 1.1.9 2.4 0 3.75s.9 2.4 0 3.25M15 3.5c-.9 1.1.9 2.4 0 3.75s.9 2.4 0 3.25' }],
]);
export const IconSpatula = createIcon('spatula', [
  ['rect', { x: 8, y: 2.75, width: 8, height: 8.75, rx: 2.5 }],
  ['path', { d: 'M10.75 5.5v3.25M13.25 5.5v3.25' }],
  ['path', { d: 'M12 11.5v9' }],
]);
export const IconStrawberry = createIcon('strawberry', [
  ['path', { d: 'M12 7.25c-4 0-7 1.5-7 5 0 4.5 4 8.5 7 8.5s7-4 7-8.5c0-3.5-3-5-7-5Z' }],
  ['path', { d: 'M8 7.75c1-1.5 2.5-2 4-1.5 1.5-.5 3 0 4 1.5M12 6.25V3.5' }],
  ['circle', { cx: 9.25, cy: 11.75, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.75, cy: 11.75, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 14.5, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 17.75, r: 0.75, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTakeawayBox = createIcon('takeaway-box', [
  ['path', { d: 'M5 10h14l-1.5 9a1.5 1.5 0 0 1-1.5 1.25H8A1.5 1.5 0 0 1 6.5 19Z' }],
  ['path', { d: 'M5 10l2-3.25h10L19 10' }],
  ['path', { d: 'M9 6.75C9 4 15 4 15 6.75' }],
]);
export const IconTakeawayCoffee = createIcon('takeaway-coffee', [
  ['path', { d: 'M7 9l1.2 9.9a1.5 1.5 0 0 0 1.5 1.35h4.6a1.5 1.5 0 0 0 1.5-1.35L17 9' }],
  ['path', { d: 'M5.75 9h12.5l-.6-2.4A1.5 1.5 0 0 0 16.2 5.5H7.8a1.5 1.5 0 0 0-1.45 1.1Z' }],
  ['path', { d: 'M10 5.5l.4-1.75h3.2l.4 1.75' }],
]);
export const IconTeacup = createIcon('teacup', [
  ['path', { d: 'M4.5 9.5h11v2.5a5.5 5.5 0 0 1-11 0Z' }],
  ['path', { d: 'M15.5 10.25h1a2.5 2.5 0 0 1 0 5h-1.75' }],
  ['path', { d: 'M3.5 20h13' }],
]);
export const IconTeapot = createIcon('teapot', [
  ['path', { d: 'M6.5 10h11v3.5a5.5 5.5 0 0 1-5.5 5.5h0a5.5 5.5 0 0 1-5.5-5.5Z' }],
  ['path', { d: 'M6.5 13c-1.75 0-2.75-1.25-3.25-3' }],
  ['path', { d: 'M17.5 11.25h.75a2.25 2.25 0 0 1 0 4.5h-1.25' }],
  ['path', { d: 'M10 10a2 2 0 0 1 4 0M12 8V6.25' }],
]);
export const IconToaster = createIcon('toaster', [
  ['rect', { x: 3, y: 11.25, width: 18, height: 9.25, rx: 3 }],
  ['path', { d: 'M8 11.25V8.1a2.4 2.4 0 0 1 .9-4.35h6.2a2.4 2.4 0 0 1 .9 4.35v3.15' }],
  ['circle', { cx: 16.75, cy: 15.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconVegMark = createIcon('veg-mark', [
  ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 3.25 }],
  ['circle', { cx: 12, cy: 12, r: 3.25, fill: 'currentColor', stroke: 'none' }],
]);
export const IconWatermelonSlice = createIcon('watermelon-slice', [
  ['path', { d: 'M3 8.5a9 9 0 0 0 18 0Z' }],
  ['path', { d: 'M5.75 8.5a6.25 6.25 0 0 0 12.5 0' }],
  ['circle', { cx: 9.5, cy: 11, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.5, cy: 11, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 13.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconWhisk = createIcon('whisk', [
  ['path', { d: 'M12 13.5c-3 0-4.75-3.75-4.75-6.5S9.25 2.75 12 2.75 16.75 4.25 16.75 7s-1.75 6.5-4.75 6.5Z' }],
  ['path', { d: 'M12 13.5c-1.1 0-1.75-3.5-1.75-6.5S11 2.75 12 2.75s1.75 1.25 1.75 4.25-.65 6.5-1.75 6.5Z' }],
  ['path', { d: 'M12 13.5v7.25' }],
]);
export const IconWineGlass = createIcon('wine-glass', [
  ['path', { d: 'M7.5 3.5h9c.75 1.75 1 3.25 1 4.25a5.5 5.5 0 0 1-11 0c0-1 .25-2.5 1-4.25Z' }],
  ['path', { d: 'M12 13.25v7.25M8.5 20.5h7' }],
]);
