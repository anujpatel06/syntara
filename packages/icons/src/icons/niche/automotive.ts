/** Domain: automotive. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAlloyWheel = createIcon('alloy-wheel', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M12 4.5V12l7.13-2.32' }],
  ['path', { d: 'M16.41 18.07 12 12l-4.41 6.07' }],
  ['path', { d: 'M12 12 4.87 9.68' }],
  ['circle', { cx: 12, cy: 12, r: 2.25, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBrakeDisc = createIcon('brake-disc', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['circle', { cx: 12, cy: 12, r: 2.5 }],
  ['rect', { x: 3.75, y: 6.5, width: 4, height: 7.5, rx: 2, transform: 'rotate(35 5.75 10.25)' }],
  ['circle', { cx: 12, cy: 6.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.55, cy: 9.4, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.55, cy: 14.6, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 17.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBrakeWarning = createIcon('brake-warning', [
  ['circle', { cx: 12, cy: 12, r: 5.5 }],
  ['path', { d: 'M12 9v3.25' }],
  ['circle', { cx: 12, cy: 14.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M5 6.5a8 8 0 0 0 0 11M19 6.5a8 8 0 0 1 0 11' }],
]);
export const IconCarBattery = createIcon('car-battery', [
  ['rect', { x: 3, y: 7.5, width: 18, height: 12, rx: 3 }],
  ['rect', { x: 6.5, y: 5, width: 3, height: 2.5, rx: 0.5, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 14.5, y: 5, width: 3, height: 2.5, rx: 0.5, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M6.5 13.5h3M8 12v3M14.5 13.5h3' }],
]);
export const IconCarDoor = createIcon('car-door', [
  ['path', { d: 'M3.5 12.5 9 5.5h10a1 1 0 0 1 1 1V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19Z' }],
  ['path', { d: 'M3.5 12.5H20' }],
  ['path', { d: 'M14.5 15.5h3' }],
]);
export const IconCarFront = createIcon('car-front', [
  ['path', { d: 'M4 17.5v-5l2-5a2 2 0 0 1 1.9-1.5h8.2a2 2 0 0 1 1.9 1.5l2 5v5Z' }],
  ['path', { d: 'M5 12h14' }],
  ['path', { d: 'M5.5 17.5v2.25h2.5V17.5M16 17.5v2.25h2.5V17.5' }],
  ['circle', { cx: 7.5, cy: 14.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 14.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCarInsurance = createIcon('car-insurance', [
  ['path', { d: 'M12 3 5 5.75v5.5c0 4.5 3 8 7 9.75 4-1.75 7-5.25 7-9.75v-5.5Z' }],
  ['path', { d: 'M8.5 14.5v-2l1-2.25a1 1 0 0 1 .9-.6h3.2a1 1 0 0 1 .9.6l1 2.25v2Z' }],
]);
export const IconCarKey = createIcon('car-key', [
  ['rect', { x: 7, y: 3, width: 10, height: 11, rx: 3.5 }],
  ['path', { d: 'M12 14v6.5M12 17.25h1.75M12 20.5h1.75' }],
  ['circle', { cx: 12, cy: 6.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 10, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCarLift = createIcon('car-lift', [
  ['path', { d: 'M4.75 16.5H4.5a1.25 1.25 0 0 1-1.25-1.25v-2a2.5 2.5 0 0 1 2.5-2.5h.75Q7.25 10.75 7.6 10.05L8.4 8.5C9.1 7.2 10.2 6.5 11.75 6.5h1C14.3 6.5 15.4 7.2 16.1 8.5l.8 1.55Q17.25 10.75 18 10.75h.25a2.5 2.5 0 0 1 2.5 2.5v2a1.25 1.25 0 0 1-1.25 1.25h-.25a2.75 2.75 0 0 0-5.5 0h-3.5a2.75 2.75 0 0 0-5.5 0Z', transform: 'translate(0 -3.5)' }],
  ['circle', { cx: 7.5, cy: 16.5, r: 1.75, transform: 'translate(0 -3.5)' }],
  ['circle', { cx: 16.5, cy: 16.5, r: 1.75, transform: 'translate(0 -3.5)' }],
  ['path', { d: 'M3.5 15.5h17M12 15.5v5' }],
]);
export const IconCarSpanner = createIcon('car-spanner', [
  ['path', { d: 'M14.5 3.75a4.5 4.5 0 0 0-4.2 6.1L4.4 15.75a2.1 2.1 0 0 0 3 3l5.9-5.9a4.5 4.5 0 0 0 6.1-4.2l-2.9 1.05-2.4-.85-.85-2.4Z' }],
]);
export const IconCarWash = createIcon('car-wash', [
  ['path', { d: 'M4.75 16.5H4.5a1.25 1.25 0 0 1-1.25-1.25v-2a2.5 2.5 0 0 1 2.5-2.5h.75Q7.25 10.75 7.6 10.05L8.4 8.5C9.1 7.2 10.2 6.5 11.75 6.5h1C14.3 6.5 15.4 7.2 16.1 8.5l.8 1.55Q17.25 10.75 18 10.75h.25a2.5 2.5 0 0 1 2.5 2.5v2a1.25 1.25 0 0 1-1.25 1.25h-.25a2.75 2.75 0 0 0-5.5 0h-3.5a2.75 2.75 0 0 0-5.5 0Z', transform: 'translate(0 3.5)' }],
  ['circle', { cx: 7.5, cy: 16.5, r: 1.75, transform: 'translate(0 3.5)' }],
  ['circle', { cx: 16.5, cy: 16.5, r: 1.75, transform: 'translate(0 3.5)' }],
  ['path', { d: 'M8 3.25c-.6.9-.9 1.5-.9 2a.9.9 0 0 0 1.8 0c0-.5-.3-1.1-.9-2ZM12 2.75c-.6.9-.9 1.5-.9 2a.9.9 0 0 0 1.8 0c0-.5-.3-1.1-.9-2ZM16 3.25c-.6.9-.9 1.5-.9 2a.9.9 0 0 0 1.8 0c0-.5-.3-1.1-.9-2Z', fill: 'currentColor', stroke: 'none' }],
]);
export const IconCheckEngine = createIcon('check-engine', [
  ['path', { d: 'M6.5 9h9l2 2h1v-1.5h2v7h-2V15h-1l-2 2.5H9.5l-3-3Z' }],
  ['path', { d: 'M3.5 10.25v5.5M3.5 13h3' }],
  ['path', { d: 'M9 9V6.5h5M11.5 6.5V9' }],
]);
export const IconCoilSpring = createIcon('coil-spring', [
  ['path', { d: 'M7 4h10M7 20h10' }],
  ['path', { d: 'M9 4c-3 0-3 3 0 3h6c3 0 3 3 0 3H9c-3 0-3 3 0 3h6c3 0 3 3 0 3H9' }],
]);
export const IconCoolantTemperature = createIcon('coolant-temperature', [
  ['path', { d: 'M12 3.25a1.75 1.75 0 0 1 1.75 1.75v7.75a3.25 3.25 0 1 1-3.5 0V5A1.75 1.75 0 0 1 12 3.25Z' }],
  ['path', { d: 'M13.75 7h2.5M13.75 10h2.5' }],
  ['path', { d: 'M3.5 19.5q2.1-1.5 4.25 0M16.25 19.5q2.1-1.5 4.25 0' }],
]);
export const IconDrivingLicence = createIcon('driving-licence', [
  ['rect', { x: 3, y: 5, width: 18, height: 14, rx: 3 }],
  ['circle', { cx: 8.5, cy: 10.25, r: 2 }],
  ['path', { d: 'M5.5 16a3 3 0 0 1 6 0' }],
  ['path', { d: 'M14 10h4M14 13.5h3' }],
]);
export const IconElectricCar = createIcon('electric-car', [
  ['path', { d: 'M4.75 16.5H4.5a1.25 1.25 0 0 1-1.25-1.25v-2a2.5 2.5 0 0 1 2.5-2.5h.75Q7.25 10.75 7.6 10.05L8.4 8.5C9.1 7.2 10.2 6.5 11.75 6.5h1C14.3 6.5 15.4 7.2 16.1 8.5l.8 1.55Q17.25 10.75 18 10.75h.25a2.5 2.5 0 0 1 2.5 2.5v2a1.25 1.25 0 0 1-1.25 1.25h-.25a2.75 2.75 0 0 0-5.5 0h-3.5a2.75 2.75 0 0 0-5.5 0Z', transform: 'translate(0 3)' }],
  ['circle', { cx: 7.5, cy: 16.5, r: 1.75, transform: 'translate(0 3)' }],
  ['circle', { cx: 16.5, cy: 16.5, r: 1.75, transform: 'translate(0 3)' }],
  ['path', { d: 'M12.75 2.75 10.5 6h3l-2 3' }],
]);
export const IconEvBattery = createIcon('ev-battery', [
  ['rect', { x: 3, y: 6.5, width: 18, height: 11, rx: 3 }],
  ['path', { d: 'M12.75 8.75 10.5 12h3l-2.25 3.25' }],
]);
export const IconEvChargingStation = createIcon('ev-charging-station', [
  ['path', { d: 'M4 20.5v-15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15M3 20.5h12' }],
  ['path', { d: 'M9.75 7 7.75 11h2.5l-2 4' }],
  ['path', { d: 'M14 9h1.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 0 3 0V8l-2.5-2.5' }],
]);
export const IconEvConnector = createIcon('ev-connector', [
  ['path', { d: 'M8.25 4.5h7.5a8.25 8.25 0 1 1-7.5 0Z' }],
  ['circle', { cx: 9.5, cy: 8.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.5, cy: 8.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.75, cy: 12.25, r: 1.25 }],
  ['circle', { cx: 12, cy: 12.25, r: 1.25 }],
  ['circle', { cx: 16.25, cy: 12.25, r: 1.25 }],
  ['circle', { cx: 10, cy: 16, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 16, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconExhaustPipe = createIcon('exhaust-pipe', [
  ['path', { d: 'M15.5 10.5h-11a2.5 2.5 0 0 0 0 5h11' }],
  ['ellipse', { cx: 15.5, cy: 13, rx: 1.25, ry: 2.5 }],
  ['circle', { cx: 19.5, cy: 8.5, r: 1.75 }],
  ['circle', { cx: 17, cy: 5, r: 1.25 }],
]);
export const IconFuelPump = createIcon('fuel-pump', [
  ['path', { d: 'M4 20.5v-15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15M3 20.5h12' }],
  ['rect', { x: 6.5, y: 6, width: 5, height: 4, rx: 1 }],
  ['path', { d: 'M14 9h1.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 0 3 0V8l-2.5-2.5' }],
]);
export const IconGarage = createIcon('garage', [
  ['path', { d: 'M3 20.5V9.5L12 4l9 5.5v11' }],
  ['path', { d: 'M7 20.5v-8h10v8M7 15.25h10M7 18h10' }],
]);
export const IconGearStick = createIcon('gear-stick', [
  ['circle', { cx: 14.5, cy: 5.5, r: 3 }],
  ['path', { d: 'M13.5 8.25 11.5 15' }],
  ['path', { d: 'M7.5 20.5 9 15h5l1.5 5.5' }],
  ['path', { d: 'M4.5 20.5h15' }],
]);
export const IconHazardLights = createIcon('hazard-lights', [
  ['path', { d: 'M10.27 3.9q1.73-2.9 3.46 0l6.1 10.25q1.73 2.9-1.73 2.9H5.9q-3.46 0-1.73-2.9Z', transform: 'translate(0 1.5)' }],
  ['path', { d: 'M11.13 9.25q.87-1.5 1.74 0l2.4 4.1q.87 1.5-.87 1.5h-4.8q-1.74 0-.87-1.5Z' }],
]);
export const IconHeadlight = createIcon('headlight', [
  ['path', { d: 'M12.5 6.5c3.5 0 7 2 7 5.5s-3.5 5.5-7 5.5c-1 0-1.5-2.5-1.5-5.5s.5-5.5 1.5-5.5Z' }],
  ['path', { d: 'M3.5 8h5M3.5 12h5M3.5 16h5' }],
]);
export const IconJerryCan = createIcon('jerry-can', [
  ['path', { d: 'M8 4h5.5l5.5 5.5v10a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5V7a3 3 0 0 1 3-3Z' }],
  ['path', { d: 'M8.5 4v3h3.5V4' }],
  ['path', { d: 'M15.75 6.25 17.5 4.5 20 7l-1.75 1.75' }],
]);
export const IconLowBeam = createIcon('low-beam', [
  ['path', { d: 'M12.5 6.5c3.5 0 7 2 7 5.5s-3.5 5.5-7 5.5c-1 0-1.5-2.5-1.5-5.5s.5-5.5 1.5-5.5Z' }],
  ['path', { d: 'M3.5 8.5l5 1.25M3.5 12.25l5 1.25M3.5 16l5 1.25' }],
]);
export const IconManualGearbox = createIcon('manual-gearbox', [
  ['path', { d: 'M6 6.5v11M12 6.5v11M18 4.5V12M6 12h12' }],
  ['circle', { cx: 6, cy: 5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6, cy: 19, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 19, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconNumberPlate = createIcon('number-plate', [
  ['rect', { x: 2.75, y: 7, width: 18.5, height: 10, rx: 2.5 }],
  ['path', { d: 'M8 12h8' }],
  ['circle', { cx: 5.5, cy: 9.5, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18.5, cy: 9.5, r: 0.75, fill: 'currentColor', stroke: 'none' }],
]);
export const IconOilCan = createIcon('oil-can', [
  ['path', { d: 'M7 10h6l2 2 5.5-2.5-5.25 6a1.5 1.5 0 0 1-1.1.5H8.5A1.5 1.5 0 0 1 7 14.5Z' }],
  ['path', { d: 'M7 11.5H4.75a1.25 1.25 0 0 1-1.25-1.25V9' }],
  ['path', { d: 'M9 10V8h2.5v2' }],
  ['circle', { cx: 20, cy: 13.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconParkingBrake = createIcon('parking-brake', [
  ['circle', { cx: 12, cy: 12, r: 5.5 }],
  ['path', { d: 'M10.5 15V9h2a1.75 1.75 0 0 1 0 3.5h-2' }],
  ['path', { d: 'M5 6.5a8 8 0 0 0 0 11M19 6.5a8 8 0 0 1 0 11' }],
]);
export const IconPickupTruck = createIcon('pickup-truck', [
  ['path', { d: 'M4.75 16.5H4.25A1.25 1.25 0 0 1 3 15.25v-3a.5.5 0 0 1 .5-.5H12V7.5a1 1 0 0 1 1-1h3.25a1.5 1.5 0 0 1 1.3.75l2.2 4.25a2.5 2.5 0 0 1 1 2v1.75a1.25 1.25 0 0 1-1.25 1.25h-.25a2.75 2.75 0 0 0-5.5 0h-3.5a2.75 2.75 0 0 0-5.5 0Z' }],
  ['circle', { cx: 7.5, cy: 16.5, r: 1.75 }],
  ['circle', { cx: 16.5, cy: 16.5, r: 1.75 }],
]);
export const IconPiston = createIcon('piston', [
  ['rect', { x: 7, y: 3.25, width: 10, height: 7.25, rx: 2 }],
  ['path', { d: 'M7 6.5h10' }],
  ['path', { d: 'M12 10.5v5.5' }],
  ['circle', { cx: 12, cy: 18.25, r: 2.25 }],
]);
export const IconRearDefrost = createIcon('rear-defrost', [
  ['rect', { x: 3.5, y: 3.5, width: 17, height: 10.5, rx: 3 }],
  ['path', { d: 'M8 21c-1-1.1 1-1.9 0-3s1-1.9 0-3M12 21c-1-1.1 1-1.9 0-3s1-1.9 0-3M16 21c-1-1.1 1-1.9 0-3s1-1.9 0-3' }],
]);
export const IconSeatBelt = createIcon('seat-belt', [
  ['circle', { cx: 12, cy: 5.5, r: 2.25 }],
  ['path', { d: 'M6.5 20.5v-4.5a5.5 5.5 0 0 1 11 0v4.5' }],
  ['path', { d: 'M9 10.75 15.5 20.5' }],
]);
export const IconSparkPlug = createIcon('spark-plug', [
  ['path', { d: 'M12 2.75V5M10 13.5v4h4v-4M12 17.5v2.75h2' }],
  ['rect', { x: 10, y: 5, width: 4, height: 5, rx: 1.5 }],
  ['rect', { x: 8.5, y: 10, width: 7, height: 3.5, rx: 1 }],
]);
export const IconSpeedometer = createIcon('speedometer', [
  ['path', { d: 'M4.75 17.5a8.5 8.5 0 1 1 14.5 0' }],
  ['path', { d: 'M12 14l4-4.5' }],
  ['circle', { cx: 12, cy: 14, r: 1.25, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSportsCar = createIcon('sports-car', [
  ['path', { d: 'M4.75 16.5H4a1 1 0 0 1-1-1v-1.75a2 2 0 0 1 1.5-1.9l4-1.1 2.75-2.25a2 2 0 0 1 1.25-.5h2.25a3 3 0 0 1 2 .75l2.5 2.25 1.25.25a2 2 0 0 1 1.5 1.95v1.55a1 1 0 0 1-1 1h-.75a2.75 2.75 0 0 0-5.5 0h-3.5a2.75 2.75 0 0 0-5.5 0Z' }],
  ['circle', { cx: 7.5, cy: 16.5, r: 1.75 }],
  ['circle', { cx: 16.5, cy: 16.5, r: 1.75 }],
]);
export const IconSteeringWheel = createIcon('steering-wheel', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['circle', { cx: 12, cy: 12, r: 2.25 }],
  ['path', { d: 'M3.5 10.75h6.25M14.25 10.75h6.25M12 14.25v6.25' }],
]);
export const IconTowTruck = createIcon('tow-truck', [
  ['path', { d: 'M4.75 17H4a1 1 0 0 1-1-1v-3.5l1.75-4A1 1 0 0 1 5.66 8H9v9h6.5M9 12h11v4a1 1 0 0 1-1 1h-.75' }],
  ['circle', { cx: 7, cy: 17, r: 1.75 }],
  ['circle', { cx: 17, cy: 17, r: 1.75 }],
  ['path', { d: 'M13 12l5.5-7.5v3.25a1.25 1.25 0 0 1-2.5 0' }],
]);
export const IconTractionControl = createIcon('traction-control', [
  ['path', { d: 'M5 14l1.5-5a2 2 0 0 1 1.9-1.5h7.2a2 2 0 0 1 1.9 1.5L19 14v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z' }],
  ['path', { d: 'M7.5 18.75c-1 .75.75 1.5-.25 2.25M17 18.75c-1 .75.75 1.5-.25 2.25' }],
  ['path', { d: 'M5 14h14' }],
]);
export const IconTurbocharger = createIcon('turbocharger', [
  ['path', { d: 'M13 12a1.5 1.5 0 1 1-1.5-1.5 4 4 0 0 1 4 4 6 6 0 0 1-12 0 7.5 7.5 0 0 1 7.5-7.5h9v4.5' }],
  ['path', { d: 'M18.75 9h3.25' }],
]);
export const IconTyre = createIcon('tyre', [
  ['ellipse', { cx: 9.5, cy: 12, rx: 5.5, ry: 8.5 }],
  ['path', { d: 'M9.5 3.5h4c3 0 5.5 3.8 5.5 8.5s-2.5 8.5-5.5 8.5h-4' }],
  ['ellipse', { cx: 9.5, cy: 12, rx: 2, ry: 3.25 }],
]);
export const IconTyrePressure = createIcon('tyre-pressure', [
  ['path', { d: 'M6.75 4.5C4.75 7 3.75 10 3.75 13s1 5 2.5 6.5h11.5c1.5-1.5 2.5-3.5 2.5-6.5s-1-6-3-8.5' }],
  ['path', { d: 'M8.5 19.5v1.5M12 19.5v1.5M15.5 19.5v1.5' }],
  ['path', { d: 'M12 8.25v4.75' }],
  ['circle', { cx: 12, cy: 16, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconWindscreenWiper = createIcon('windscreen-wiper', [
  ['path', { d: 'M5 18.5 3.25 9.75c5.75-3 11.75-3 17.5 0L19 18.5Z' }],
  ['path', { d: 'M12 18.5l4.5-7' }],
  ['circle', { cx: 12, cy: 18.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
