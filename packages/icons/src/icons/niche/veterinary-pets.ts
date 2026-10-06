/** Domain: veterinary pets. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAquarium = createIcon('aquarium', [
  ['rect', { x: 2.75, y: 5, width: 18.5, height: 14.5, rx: 3 }],
  ['path', { d: 'M2.75 9q2.3-1.5 4.6 0t4.6 0 4.6 0 4.7 0' }],
  ['path', { d: 'M9.5 14.5c1-1.4 2.4-2 3.75-2 1.5 0 2.5.9 3.25 2-.75 1.1-1.75 2-3.25 2-1.35 0-2.75-.6-3.75-2Zm0 0L8 13v3Z' }],
]);
export const IconBirdCage = createIcon('bird-cage', [
  ['path', { d: 'M5.5 20v-9a6.5 6.5 0 0 1 13 0v9' }],
  ['path', { d: 'M4 20.5h16' }],
  ['path', { d: 'M12 4.5V20M9 5.25V20M15 5.25V20' }],
  ['circle', { cx: 12, cy: 3, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCatFace = createIcon('cat-face', [
  ['path', { d: 'M4.75 10.25V4.25l4.25 3.25q3-1.1 6 0l4.25-3.25v6c.6 1 .95 2.1.95 3.25 0 4-3.6 7-8.2 7s-8.2-3-8.2-7c0-1.15.35-2.25.95-3.25Z' }],
  ['circle', { cx: 9.25, cy: 12.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.75, cy: 12.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 15.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCatToyMouse = createIcon('cat-toy-mouse', [
  ['path', { d: 'M4 16.5c0-4 3.25-7 7-7 3.25 0 6 2.5 8.5 7Z' }],
  ['circle', { cx: 9.75, cy: 8.75, r: 1.9 }],
  ['path', { d: 'M4 16.5c-1.5 0-1.75 2-.5 2.75 1.5.9 4 .5 5.5 1.5' }],
  ['circle', { cx: 15, cy: 13.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDogBone = createIcon('dog-bone', [
  ['path', { d: 'M8 9.75h8a2.25 2.25 0 1 1 2.25 2.25 2.25 2.25 0 1 1-2.25 2.25H8a2.25 2.25 0 1 1-2.25-2.25A2.25 2.25 0 1 1 8 9.75Z' }],
]);
export const IconDogFace = createIcon('dog-face', [
  ['path', { d: 'M7.5 8.5a4.5 4.5 0 0 1 9 0v6.25a4.5 4.5 0 0 1-9 0Z' }],
  ['path', { d: 'M8.25 5.75C6 4.75 3.75 5.5 3.5 8c-.2 2.25.25 4.5 1.75 5.5.75.5 1.75-.25 2.25-1.25M15.75 5.75C18 4.75 20.25 5.5 20.5 8c.2 2.25-.25 4.5-1.75 5.5-.75.5-1.75-.25-2.25-1.25' }],
  ['path', { d: 'M10.75 16.5q1.25 1 2.5 0' }],
  ['circle', { cx: 10.25, cy: 10.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 10.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 13.75, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDogHouse = createIcon('dog-house', [
  ['path', { d: 'M2.75 11.25 12 3.75l9.25 7.5' }],
  ['path', { d: 'M5 9.5V19a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19V9.5' }],
  ['path', { d: 'M9 20.5v-4a3 3 0 0 1 6 0v4' }],
]);
export const IconDogLeash = createIcon('dog-leash', [
  ['path', { d: 'M3.5 13.5 4.25 11.5c.5-1.25 1.5-2 2.75-2h.75l1.5 3h7.75l2.75-2.5M18.5 12.75v7.75h-2V16.5h-6.5v4h-2v-5.5L6.25 14Z' }],
  ['path', { d: 'M9.25 12.5 14.4 6.4' }],
  ['circle', { cx: 15.75, cy: 4.75, r: 2.1 }],
]);
export const IconFishBowl = createIcon('fish-bowl', [
  ['path', { d: 'M7.5 4.5h9' }],
  ['path', { d: 'M8.5 4.75C5.75 6.5 4 9.25 4 12.5a8 8 0 0 0 16 0c0-3.25-1.75-6-4.5-7.75' }],
  ['path', { d: 'M5 12q1.75-1.25 3.5 0t3.5 0 3.5 0 3.5 0' }],
]);
export const IconHamsterWheel = createIcon('hamster-wheel', [
  ['circle', { cx: 12, cy: 10.5, r: 7.25 }],
  ['path', { d: 'M8.5 20.5 12 10.5l3.5 10M6.5 20.5h11' }],
  ['circle', { cx: 12, cy: 10.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPawPrint = createIcon('paw-print', [
  ['path', { d: 'M12 12c-2.5 0-5 3-5 5.25 0 1.5 1 2.25 2.25 2.25 1.1 0 1.75-.6 2.75-.6s1.65.6 2.75.6c1.25 0 2.25-.75 2.25-2.25C17 15 14.5 12 12 12Z' }],
  ['path', { d: 'M4.4 10.5a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0M7.75 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0M12.75 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0M16.4 10.5a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0' }],
]);
export const IconPetAdoption = createIcon('pet-adoption', [
  ['path', { d: 'M12 20.25C7.5 17 3.5 13.75 3.5 9.25A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.5 2.25c0 4.5-4 7.75-8.5 11Z' }],
  ['path', { d: 'M12 11.75c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 10.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 9.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 10.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetBall = createIcon('pet-ball', [
  ['circle', { cx: 12, cy: 12, r: 8.25 }],
  ['path', { d: 'M5.6 6.75c2.75 2.75 2.75 7.75 0 10.5M18.4 6.75c-2.75 2.75-2.75 7.75 0 10.5' }],
]);
export const IconPetBath = createIcon('pet-bath', [
  ['path', { d: 'M3 11.5h18v2a5.5 5.5 0 0 1-5.5 5.5h-7A5.5 5.5 0 0 1 3 13.5Z' }],
  ['path', { d: 'M7 19l-1 1.75M17 19l1 1.75' }],
  ['path', { d: 'M12 5.5c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 4, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 3, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 4, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetBed = createIcon('pet-bed', [
  ['path', { d: 'M3 14c0-1.9 1.3-3.25 3-3.25 1.4 0 2.25.75 2.5 1.75h7c.25-1 1.1-1.75 2.5-1.75 1.7 0 3 1.35 3 3.25v2.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z' }],
  ['path', { d: 'M12 5.5c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 4, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 3, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 4, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetBird = createIcon('pet-bird', [
  ['path', { d: 'M15.5 9.5a3.5 3.5 0 0 0-7 0v1C6 12 4.5 15 4 19.25c4.5.25 8.25-.5 10.25-3 .8-1 1.25-2.25 1.25-3.75Z' }],
  ['path', { d: 'M15.5 8.5l2.75 1.25-2.75 1.25' }],
  ['path', { d: 'M8.5 20.5h9' }],
  ['circle', { cx: 12.5, cy: 9, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetBrush = createIcon('pet-brush', [
  ['rect', { x: 4, y: 3.5, width: 16, height: 8, rx: 3 }],
  ['rect', { x: 10.5, y: 11.5, width: 3, height: 9, rx: 1.5 }],
  ['circle', { cx: 7.75, cy: 7.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.75, cy: 7.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.25, cy: 7.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.25, cy: 7.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetCarrier = createIcon('pet-carrier', [
  ['rect', { x: 3, y: 8, width: 18, height: 12.5, rx: 3.25 }],
  ['path', { d: 'M8.5 8V6.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V8' }],
  ['path', { d: 'M9 11.5v6M12 11.5v6M15 11.5v6' }],
]);
export const IconPetCollar = createIcon('pet-collar', [
  ['ellipse', { cx: 12, cy: 8, rx: 8.5, ry: 3.75 }],
  ['path', { d: 'M12 11.75V14' }],
  ['circle', { cx: 12, cy: 17, r: 3 }],
]);
export const IconPetComb = createIcon('pet-comb', [
  ['rect', { x: 3.5, y: 5.5, width: 17, height: 4.5, rx: 2 }],
  ['path', { d: 'M6.5 10v8M10.25 10v8M13.75 10v8M17.5 10v8' }],
]);
export const IconPetDoor = createIcon('pet-door', [
  ['rect', { x: 5, y: 2.75, width: 14, height: 18.5, rx: 3 }],
  ['rect', { x: 7, y: 8.75, width: 10, height: 10, rx: 3 }],
  ['path', { d: 'M12 13.25c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 11.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 10.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 11.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetFish = createIcon('pet-fish', [
  ['path', { d: 'M6.5 12C8.5 8.5 11.5 6.5 14.5 6.5c3.25 0 5.5 2.5 6.75 5.5-1.25 3-3.5 5.5-6.75 5.5-3 0-6-2-8-5.5ZM6.5 12 3 8.25v7.5Z' }],
  ['circle', { cx: 16.5, cy: 11, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetFoodBag = createIcon('pet-food-bag', [
  ['rect', { x: 5.5, y: 7, width: 13, height: 14, rx: 3 }],
  ['path', { d: 'M7 7l.75-3.25h8.5L17 7' }],
  ['path', { d: 'M12 14c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 12.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 11.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 12.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetFoodBowl = createIcon('pet-food-bowl', [
  ['path', { d: 'M3.5 12.5h17l-1.6 5.75A2.5 2.5 0 0 1 16.5 20h-9a2.5 2.5 0 0 1-2.4-1.75Z' }],
  ['circle', { cx: 8.75, cy: 10.4, r: 1.15, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 10.4, r: 1.15, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.25, cy: 10.4, r: 1.15, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.4, cy: 7.6, r: 1.15, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetIdTag = createIcon('pet-id-tag', [
  ['circle', { cx: 12, cy: 14, r: 6.25 }],
  ['path', { d: 'M10.25 4.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0M12 6.5v1.25' }],
  ['path', { d: 'M12 13.5c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 12, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 11, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 12, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetInsurance = createIcon('pet-insurance', [
  ['path', { d: 'M12 3.25c2 1.25 4.5 2 6.75 2.25V11c0 4.5-2.7 7.5-6.75 9.5C7.95 18.5 5.25 15.5 5.25 11V5.5C7.5 5.25 10 4.5 12 3.25Z' }],
  ['path', { d: 'M12 11.25c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 9.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 8.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 9.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetMedicalRecord = createIcon('pet-medical-record', [
  ['rect', { x: 5, y: 4.5, width: 14, height: 16.5, rx: 3 }],
  ['rect', { x: 9, y: 3, width: 6, height: 3, rx: 1.25 }],
  ['path', { d: 'M12 13c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 11.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 10.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 11.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetMedicine = createIcon('pet-medicine', [
  ['rect', { x: 6.5, y: 8, width: 11, height: 13, rx: 3 }],
  ['rect', { x: 5.5, y: 3, width: 13, height: 5, rx: 1.75 }],
  ['path', { d: 'M12 11.75v5.5M9.25 14.5h5.5' }],
]);
export const IconPetNursingBottle = createIcon('pet-nursing-bottle', [
  ['path', { d: 'M10.5 6.5V5a1.5 1.5 0 0 1 3 0v1.5' }],
  ['rect', { x: 8.5, y: 6.5, width: 7, height: 2.5, rx: 1.25 }],
  ['rect', { x: 8, y: 9, width: 8, height: 11.5, rx: 3 }],
]);
export const IconPetScale = createIcon('pet-scale', [
  ['rect', { x: 3.5, y: 4, width: 17, height: 16, rx: 4 }],
  ['path', { d: 'M9.5 8a2.5 2.5 0 0 1 5 0' }],
  ['path', { d: 'M12 13.75c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 12.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 11.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 12.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetShampoo = createIcon('pet-shampoo', [
  ['rect', { x: 6.5, y: 9.5, width: 11, height: 11, rx: 3 }],
  ['path', { d: 'M10.5 9.5V7h3v2.5M12 7V4.5H8.5' }],
  ['path', { d: 'M12 14.75c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 13.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 12.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 13.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetTracker = createIcon('pet-tracker', [
  ['path', { d: 'M12 21c-3.5-3.5-7-7-7-11a7 7 0 0 1 14 0c0 4-3.5 7.5-7 11Z' }],
  ['path', { d: 'M12 9.25c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 7.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 6.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 7.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPetTreatJar = createIcon('pet-treat-jar', [
  ['rect', { x: 5, y: 8, width: 14, height: 12.5, rx: 3.25 }],
  ['rect', { x: 6.5, y: 3.5, width: 11, height: 4.5, rx: 1.5 }],
  ['path', { d: 'M10 13.25h4a1 1 0 1 1 1 1 1 1 0 1 1-1 1h-4a1 1 0 1 1-1-1 1 1 0 1 1 1-1Z' }],
]);
export const IconPetWaterBowl = createIcon('pet-water-bowl', [
  ['path', { d: 'M3.5 12.5h17l-1.6 5.75A2.5 2.5 0 0 1 16.5 20h-9a2.5 2.5 0 0 1-2.4-1.75Z' }],
  ['path', { d: 'M12 3.75c1.75 2.1 3 3.5 3 5a3 3 0 0 1-6 0c0-1.5 1.25-2.9 3-5Z' }],
]);
export const IconRabbit = createIcon('rabbit', [
  ['circle', { cx: 12, cy: 15.25, r: 5.25 }],
  ['ellipse', { cx: 9.5, cy: 6.5, rx: 1.75, ry: 4, transform: 'rotate(-12 9.5 6.5)' }],
  ['ellipse', { cx: 14.5, cy: 6.5, rx: 1.75, ry: 4, transform: 'rotate(12 14.5 6.5)' }],
  ['circle', { cx: 10, cy: 14.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 14.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 16.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSnake = createIcon('snake', [
  ['path', { d: 'M3.5 19.5h11a3 3 0 0 0 0-6h-5a3 3 0 0 1 0-6h3.25c.75-1.5 2.25-2 3.5-2 1.75 0 3 .9 3.25 2-.25 1.1-1.5 2-3.25 2-1.25 0-2.75-.5-3.5-2' }],
  ['circle', { cx: 16.5, cy: 6.75, r: 0.65, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M19.5 7.5h1.25l.75-.75M20.75 7.5l.75.75' }],
]);
export const IconTurtle = createIcon('turtle', [
  ['path', { d: 'M3.5 16a7 7 0 0 1 14 0Z' }],
  ['circle', { cx: 19.5, cy: 13.5, r: 1.75 }],
  ['path', { d: 'M6 16v2.25M15 16v2.25' }],
]);
export const IconVetAppointment = createIcon('vet-appointment', [
  ['rect', { x: 3.5, y: 5, width: 17, height: 15.5, rx: 3.25 }],
  ['path', { d: 'M8 3.25V6.5M16 3.25V6.5M3.5 9.5h17' }],
  ['path', { d: 'M12 14c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 12.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 11.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 12.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconVetClinic = createIcon('vet-clinic', [
  ['path', { d: 'M3.75 11 12 4l8.25 7M5.75 9.5V19a1.5 1.5 0 0 0 1.5 1.5h9.5a1.5 1.5 0 0 0 1.5-1.5V9.5' }],
  ['path', { d: 'M12 13.75c-1.5 0-2.75 1.5-2.75 2.75 0 .9.6 1.25 1.25 1.25.6 0 .9-.3 1.5-.3s.9.3 1.5.3c.65 0 1.25-.35 1.25-1.25 0-1.25-1.25-2.75-2.75-2.75Z' }],
  ['circle', { cx: 9.6, cy: 12.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 11.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.4, cy: 12.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
