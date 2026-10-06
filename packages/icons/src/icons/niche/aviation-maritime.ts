/** Domain: aviation maritime. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAirlineSeat = createIcon('airline-seat', [
  ['path', { d: 'M7.5 3.5c-1 0-1.6.8-1.4 1.8l1.8 9.2h8.35a1.75 1.75 0 0 1 0 3.5H8.5' }],
  ['path', { d: 'M10.75 18l-1.5 2.5M14.75 18l1.5 2.5' }],
  ['path', { d: 'M9.25 11h5' }],
]);
export const IconAirlinerFront = createIcon('airliner-front', [
  ['circle', { cx: 12, cy: 11.5, r: 3 }],
  ['path', { d: 'M9.4 13 2.5 10.75M14.6 13l6.9-2.25' }],
  ['path', { d: 'M12 8.5V3.5' }],
  ['circle', { cx: 6.5, cy: 13.75, r: 1.5, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 13.75, r: 1.5, fill: 'currentColor', stroke: 'none' }],
]);
export const IconAirplaneLanding = createIcon('airplane-landing', [
  ['path', { d: 'M 18.08 13.51 Q 17.59 14.35 16.24 13.57 L 13.2 11.82 L 7.67 15.16 L 6.49 14.47 L 10.67 10.36 L 7.8 8.7 L 5.74 9.54 L 4.72 8.95 L 6.76 6.98 L 7.45 4.22 L 8.47 4.81 L 8.77 7.01 L 11.64 8.67 L 13.12 2.99 L 14.3 3.67 L 14.18 10.13 L 17.22 11.89 Q 18.57 12.67 18.08 13.51 Z' }],
  ['path', { d: 'M3.5 20.5h17' }],
]);
export const IconAirplaneTakeoff = createIcon('airplane-takeoff', [
  ['path', { d: 'M 18.08 6.99 Q 18.57 7.83 17.22 8.61 L 14.18 10.37 L 14.3 16.83 L 13.12 17.51 L 11.64 11.83 L 8.77 13.49 L 8.47 15.69 L 7.45 16.28 L 6.76 13.52 L 4.72 11.55 L 5.74 10.96 L 7.8 11.8 L 10.67 10.14 L 6.49 6.03 L 7.67 5.34 L 13.2 8.68 L 16.24 6.93 Q 17.59 6.15 18.08 6.99 Z' }],
  ['path', { d: 'M3.5 20.5h17' }],
]);
export const IconAirplaneWindow = createIcon('airplane-window', [
  ['rect', { x: 6, y: 2.5, width: 12, height: 19, rx: 6 }],
  ['rect', { x: 8.75, y: 5.25, width: 6.5, height: 13.5, rx: 3.25 }],
  ['path', { d: 'M8.75 10h6.5' }],
]);
export const IconAirportRunway = createIcon('airport-runway', [
  ['path', { d: 'M9.5 3.5 5 20.5M14.5 3.5l4.5 17' }],
  ['path', { d: 'M12 5v1.5M12 10v2.25M12 16v3' }],
]);
export const IconAirship = createIcon('airship', [
  ['ellipse', { cx: 11, cy: 10.5, rx: 7.5, ry: 4.25 }],
  ['path', { d: 'M17 7.25l3.5-2.5v11.5L17 13.75' }],
  ['rect', { x: 9, y: 16.5, width: 4.5, height: 2.75, rx: 1.25 }],
]);
export const IconBaggageTag = createIcon('baggage-tag', [
  ['path', { d: 'M8.5 10.5Q8.5 9.5 9.25 8.75L12 6l2.75 2.75Q15.5 9.5 15.5 10.5V19a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 19Z' }],
  ['circle', { cx: 12, cy: 10, r: 1.1 }],
  ['path', { d: 'M12 6C10.5 4 8 3 5.5 3.25' }],
]);
export const IconBaggageTrolley = createIcon('baggage-trolley', [
  ['path', { d: 'M3.5 4h2l2.5 13.5h11' }],
  ['rect', { x: 10, y: 7, width: 8.5, height: 7.5, rx: 2.5 }],
  ['circle', { cx: 9.5, cy: 20, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 20, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBinoculars = createIcon('binoculars', [
  ['circle', { cx: 7, cy: 16, r: 3.75 }],
  ['circle', { cx: 17, cy: 16, r: 3.75 }],
  ['path', { d: 'M3.25 16V7a2 2 0 0 1 4 0v5.25M20.75 16V7a2 2 0 0 0-4 0v5.25M10.75 14.5h2.5' }],
]);
export const IconBoardingPass = createIcon('boarding-pass', [
  ['rect', { x: 2.5, y: 6, width: 19, height: 12, rx: 2.5 }],
  ['path', { d: 'M15.5 6v12' }],
  ['path', { d: 'M 13.5 12 Q 13.5 12.63 12.5 12.63 L 10.25 12.63 L 8.25 16.25 L 7.38 16.25 L 8.38 12.63 L 6.25 12.63 L 5.38 13.75 L 4.63 13.75 L 5.13 12 L 4.63 10.25 L 5.38 10.25 L 6.25 11.38 L 8.38 11.38 L 7.38 7.75 L 8.25 7.75 L 10.25 11.38 L 12.5 11.38 Q 13.5 11.38 13.5 12 Z' }],
]);
export const IconCargoContainer = createIcon('cargo-container', [
  ['path', { d: 'M3.5 6.5h17v12H8.5l-5-4.5Z' }],
  ['path', { d: 'M12 6.5v12M16.25 6.5v12' }],
]);
export const IconCompassRose = createIcon('compass-rose', [
  ['path', { d: 'M12 2.75l2.1 7.15 7.15 2.1-7.15 2.1L12 21.25l-2.1-7.15L2.75 12l7.15-2.1Z' }],
  ['circle', { cx: 12, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconContainerShip = createIcon('container-ship', [
  ['path', { d: 'M2.5 14h19l-1.75 4a2.5 2.5 0 0 1-2.25 1.5h-11A2.5 2.5 0 0 1 4.25 18Z' }],
  ['path', { d: 'M4.5 14v-4h9v4M9 10v4M6.75 10V7h4.5v3' }],
  ['path', { d: 'M16 14V8h3v6' }],
]);
export const IconControlTower = createIcon('control-tower', [
  ['path', { d: 'M7.5 4.5h9a1 1 0 0 1 .95 1.3L16.5 9.5h-9L6.55 5.8A1 1 0 0 1 7.5 4.5Z' }],
  ['path', { d: 'M9.5 9.5 9 20.5M14.5 9.5l.5 11M6.5 20.5h11' }],
  ['path', { d: 'M12 4.5V2.75' }],
]);
export const IconCruiseShip = createIcon('cruise-ship', [
  ['path', { d: 'M2.5 14.5h19l-1.5 3.5a2.5 2.5 0 0 1-2.3 1.5H6.3A2.5 2.5 0 0 1 4 18Z' }],
  ['path', { d: 'M5 14.5v-3h14v3M7.5 11.5V9h9v2.5' }],
  ['path', { d: 'M13 9V5.5h2.5V9' }],
]);
export const IconDrone = createIcon('drone', [
  ['path', { d: 'M2.75 7.5h6.5M14.75 7.5h6.5' }],
  ['path', { d: 'M6 7.5v3.5h12V7.5' }],
  ['path', { d: 'M9.5 11 7.75 17M14.5 11l1.75 6' }],
  ['circle', { cx: 12, cy: 13.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconHarbourCrane = createIcon('harbour-crane', [
  ['path', { d: 'M2.5 8h19' }],
  ['path', { d: 'M13 21V8l3-4.5L19 8v13' }],
  ['path', { d: 'M16 3.5 5 8' }],
  ['path', { d: 'M7 8v4' }],
  ['rect', { x: 4.5, y: 12, width: 5, height: 3.5, rx: 0.5 }],
]);
export const IconHelicopter = createIcon('helicopter', [
  ['path', { d: 'M3.5 4.5h14M10.5 4.5V8' }],
  ['path', { d: 'M20.5 9v3h-5v1.75a2.5 2.5 0 0 1-2.5 2.5H9.75a4.13 4.13 0 0 1 0-8.25H13a2.5 2.5 0 0 1 2.5 2.5V12' }],
  ['path', { d: 'M6.5 19.5h9M11.5 16.25v3.25' }],
]);
export const IconHelipad = createIcon('helipad', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M9.25 7.5v9M14.75 7.5v9M9.25 12h5.5' }],
]);
export const IconHotAirBalloon = createIcon('hot-air-balloon', [
  ['path', { d: 'M8.5 16C5.5 14 4.5 11.5 4.5 9.5a7.5 7.5 0 0 1 15 0c0 2-1 4.5-4 6.5Z' }],
  ['path', { d: 'M10 16C8 12 8.5 5 12 2c3.5 3 4 10 2 14' }],
  ['path', { d: 'M8.5 16l1 3v2.5h5V19l1-3' }],
  ['path', { d: 'M9.5 19h5' }],
]);
export const IconLifeJacket = createIcon('life-jacket', [
  ['path', { d: 'M9 3.5c0 2 1.25 3.5 3 3.5s3-1.5 3-3.5h2l2 4V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V7.5l2-4Z' }],
  ['path', { d: 'M12 7v13.5' }],
  ['path', { d: 'M5 12.5h14M5 16.25h14' }],
]);
export const IconLifebuoy = createIcon('lifebuoy', [
  ['path', { d: 'M16.75 19.05A8.5 8.5 0 0 1 7.25 19.05L9.76 15.32A4 4 0 0 0 14.24 15.32Z' }],
  ['path', { d: 'M4.95 16.75A8.5 8.5 0 0 1 4.95 7.25L8.68 9.76A4 4 0 0 0 8.68 14.24Z' }],
  ['path', { d: 'M7.25 4.95A8.5 8.5 0 0 1 16.75 4.95L14.24 8.68A4 4 0 0 0 9.76 8.68Z' }],
  ['path', { d: 'M19.05 7.25A8.5 8.5 0 0 1 19.05 16.75L15.32 14.24A4 4 0 0 0 15.32 9.76Z' }],
]);
export const IconLighthouse = createIcon('lighthouse', [
  ['path', { d: 'M9 20.5 10 9.5h4l1 11M6.5 20.5h11' }],
  ['path', { d: 'M10 9.5V7a2 2 0 0 1 4 0v2.5' }],
  ['path', { d: 'M6 5.5l2 1.25M18 5.5l-2 1.25' }],
]);
export const IconMarkerBuoy = createIcon('marker-buoy', [
  ['path', { d: 'M8 17.5 10 8h4l2 9.5Z' }],
  ['path', { d: 'M12 8V5.5' }],
  ['circle', { cx: 12, cy: 4, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M2.75 20.25q2.3-1.5 4.6 0t4.6 0 4.6 0 4.6 0' }],
]);
export const IconMooringBollard = createIcon('mooring-bollard', [
  ['path', { d: 'M5 20.5h3v-8C6 12.5 5 11.5 5 10s2-3 7-3 7 1.5 7 3-1 2.5-3 2.5v8h3' }],
  ['path', { d: 'M8 15c2.5 1.25 5.5 1.25 8 0 1.75-.9 3.25-1 5-.75' }],
]);
export const IconMotorboat = createIcon('motorboat', [
  ['path', { d: 'M2.5 13.5h19l-1.5 3.5a3 3 0 0 1-2.75 1.75H7.5A5 5 0 0 1 2.5 13.5Z' }],
  ['path', { d: 'M8.5 13.5l2.5-4.5h3.5' }],
  ['path', { d: 'M2.75 21q2.3-1.5 4.6 0t4.6 0 4.6 0 4.6 0' }],
]);
export const IconOilRig = createIcon('oil-rig', [
  ['path', { d: 'M6 18.5V12h12v6.5M3.5 12h17' }],
  ['path', { d: 'M9.5 12 12 3.5l2.5 8.5' }],
  ['path', { d: 'M2.75 20q2.3-1.5 4.6 0t4.6 0 4.6 0 4.6 0' }],
]);
export const IconParachute = createIcon('parachute', [
  ['path', { d: 'M3.5 11a8.5 8.5 0 0 1 17 0q-2.125-1.5-4.25 0t-4.25 0-4.25 0-4.25 0Z' }],
  ['path', { d: 'M3.75 11.25 10.25 18M20.25 11.25 13.75 18' }],
  ['rect', { x: 10, y: 18, width: 4, height: 3, rx: 1.25 }],
]);
export const IconPassport = createIcon('passport', [
  ['rect', { x: 5, y: 2.5, width: 14, height: 19, rx: 2.5 }],
  ['circle', { cx: 12, cy: 10, r: 3.5 }],
  ['path', { d: 'M9.5 16.75h5' }],
]);
export const IconPier = createIcon('pier', [
  ['path', { d: 'M3 9.5h18M6 9.5v9M12 9.5v9M18 9.5v9' }],
  ['path', { d: 'M2.75 15.75q2.3-1.5 4.6 0t4.6 0 4.6 0 4.6 0' }],
]);
export const IconPilotCap = createIcon('pilot-cap', [
  ['path', { d: 'M6 14.5v-3c-1.5-.5-2.5-1-2.5-2 0-2.5 4-4.5 8.5-4.5s8.5 2 8.5 4.5c0 1-1 1.5-2.5 2v3Z' }],
  ['path', { d: 'M6 11.5h12' }],
  ['path', { d: 'M6 14.5c1.5 3 10.5 3 12 0' }],
  ['circle', { cx: 12, cy: 8.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPorthole = createIcon('porthole', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['circle', { cx: 12, cy: 12, r: 5.25 }],
  ['circle', { cx: 16.95, cy: 7.05, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.05, cy: 7.05, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.05, cy: 16.95, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.95, cy: 16.95, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPropeller = createIcon('propeller', [
  ['path', { d: 'M 12 12 C 10.25 9.5 10.25 5.25 12 3.25 C 13.75 5.25 13.75 9.5 12 12 Z M 12 12 C 15.04 11.73 18.72 13.86 19.58 16.38 C 16.97 16.89 13.29 14.77 12 12 Z M 12 12 C 10.71 14.77 7.03 16.89 4.42 16.38 C 5.28 13.86 8.96 11.73 12 12 Z' }],
  ['circle', { cx: 12, cy: 12, r: 1.75 }],
]);
export const IconRadar = createIcon('radar', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M12 12l5-5' }],
  ['path', { d: 'M12 6a6 6 0 1 0 6 6' }],
  ['circle', { cx: 15.25, cy: 10, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSailboat = createIcon('sailboat', [
  ['path', { d: 'M11 3.5 5 15h6Z' }],
  ['path', { d: 'M13 6.5 18.5 15H13Z' }],
  ['path', { d: 'M3.5 17.5h17l-1.5 2.25a1.5 1.5 0 0 1-1.25.75H6.25a1.5 1.5 0 0 1-1.25-.75Z' }],
]);
export const IconShipWheel = createIcon('ship-wheel', [
  ['circle', { cx: 12, cy: 12, r: 5.5 }],
  ['path', { d: 'M12 2.75v18.5M2.75 12h18.5M5.46 5.46l13.08 13.08M18.54 5.46 5.46 18.54' }],
  ['circle', { cx: 12, cy: 12, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSpyglass = createIcon('spyglass', [
  ['rect', { x: 2.75, y: 11, width: 5, height: 3, rx: 1.25, transform: 'rotate(-25 12 12)' }],
  ['rect', { x: 7.5, y: 10.5, width: 6, height: 4, rx: 1.5, transform: 'rotate(-25 12 12)' }],
  ['rect', { x: 13.25, y: 9.5, width: 8, height: 6, rx: 2.5, transform: 'rotate(-25 12 12)' }],
]);
export const IconSubmarine = createIcon('submarine', [
  ['path', { d: 'M7.5 10.5h9a3.75 3.75 0 0 1 0 7.5h-9a3.75 3.75 0 0 1 0-7.5Z' }],
  ['path', { d: 'M9.5 10.5V7.5h4.5v3' }],
  ['path', { d: 'M11.5 7.5V4.5h2' }],
  ['circle', { cx: 8.5, cy: 14.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 14.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.5, cy: 14.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconWindsock = createIcon('windsock', [
  ['path', { d: 'M5 21V3.5' }],
  ['path', { d: 'M5 5.5l14 2v3l-14 2' }],
  ['path', { d: 'M10.5 6.3v5.4' }],
]);
