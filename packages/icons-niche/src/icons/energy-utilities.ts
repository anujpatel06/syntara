/** Domain: energy utilities. Style spec: @syntara/icons create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '@syntara/icons';

export const IconBatteryBank = createIcon('battery-bank', [
  ['rect', { x: 3, y: 4, width: 18, height: 7, rx: 2.5 }],
  ['rect', { x: 3, y: 13, width: 18, height: 7, rx: 2.5 }],
  ['path', { d: 'M7 7.5h3M7 16.5h3' }],
]);
export const IconBiofuel = createIcon('biofuel', [
  ['path', { d: 'M12 3c3.0625 3.5 5.25 5.95 5.25 8.75a5.25 5.25 0 0 1-10.5 0c0-2.8000000000000003 2.1875-5.25 5.25-8.75Z' }],
  ['path', { d: 'M12 15c0-2.5 1.25-4 3-4.5-.25 2.5-1.25 4-3 4.5Z' }],
]);
export const IconCarbonReduction = createIcon('carbon-reduction', [
  ['path', { d: 'M7.5 15.5a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.5 1.5 3.25 3.25 0 0 1 0 6.5' }],
  ['path', { d: 'M12 11v9.5M9.5 18l2.5 2.5 2.5-2.5' }],
]);
export const IconCircuitBreaker = createIcon('circuit-breaker', [
  ['rect', { x: 6, y: 3, width: 12, height: 18, rx: 3 }],
  ['rect', { x: 10, y: 6.5, width: 4, height: 7, rx: 1.5 }],
  ['path', { d: 'M9.5 17h5' }],
]);
export const IconCoolingTower = createIcon('cooling-tower', [
  ['path', { d: 'M6 20.5c1.5-4 1.5-7.5 0-10.5h12c-1.5 3-1.5 6.5 0 10.5Z' }],
  ['path', { d: 'M9 7.5c-1-1.25 0-2.75 1.5-2.5.25-1.5 2.5-2 3.5-.75 1-.75 2.75 0 2.5 1.5' }],
]);
export const IconEcoBulb = createIcon('eco-bulb', [
  ['path', { d: 'M9 17.5v-1.25c0-1.5-3-3-3-6.75a6 6 0 0 1 12 0c0 3.75-3 5.25-3 6.75v1.25Z' }],
  ['path', { d: 'M10 20.5h4' }],
  ['path', { d: 'M12 14c0-2.5 1-4 3-4.5-.25 2.5-1.25 4-3 4.5Z' }],
]);
export const IconElectricMeter = createIcon('electric-meter', [
  ['rect', { x: 5, y: 3, width: 14, height: 18, rx: 3.25 }],
  ['circle', { cx: 12, cy: 10, r: 4 }],
  ['path', { d: 'M12 10l2-2' }],
  ['path', { d: 'M9.5 17h5' }],
]);
export const IconElectricityBill = createIcon('electricity-bill', [
  ['path', { d: 'M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21Z' }],
  ['path', { d: 'M13 7.5l-3 4.5h4l-3 4.5' }],
]);
export const IconElectricityPylon = createIcon('electricity-pylon', [
  ['path', { d: 'M9 21 11 3.5h2l2 17.5' }],
  ['path', { d: 'M5 7.5h14M6.5 12h11' }],
  ['circle', { cx: 5, cy: 9, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19, cy: 9, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6.5, cy: 13.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 13.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconEnergyRating = createIcon('energy-rating', [
  ['path', { d: 'M4 5h8l1.5 1.5L12 8H4M4 10.5h11l1.5 1.5L15 13.5H4M4 16h14l1.5 1.5L18 19H4' }],
]);
export const IconEvCharger = createIcon('ev-charger', [
  ['rect', { x: 5, y: 3, width: 10, height: 17.5, rx: 3 }],
  ['path', { d: 'M11 7.5l-3 4.5h4l-3 4.5' }],
  ['path', { d: 'M15 9h1.5a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V7' }],
]);
export const IconFuseBox = createIcon('fuse-box', [
  ['rect', { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3.25 }],
  ['path', { d: 'M8 8v5M12 8v5M16 8v5' }],
]);
export const IconGasBurner = createIcon('gas-burner', [
  ['path', { d: 'M12 15.5c-2.25 0-3.75-1.4-3.75-3.5 0-2.25 1.75-3.25 2.25-5.75 1 .75 1.5 1.75 1.5 3 .6-.6 1-1.4 1-2.5 1.75 1.5 2.75 3.25 2.75 5.25 0 2.1-1.5 3.5-3.75 3.5Z' }],
  ['path', { d: 'M4 17.5h16M7 20.5h10' }],
]);
export const IconGasMeter = createIcon('gas-meter', [
  ['rect', { x: 5.5, y: 5, width: 13, height: 15, rx: 3 }],
  ['path', { d: 'M12 17c-2.25 0-3.75-1.4-3.75-3.5 0-2.25 1.75-3.25 2.25-5.75 1 .75 1.5 1.75 1.5 3 .6-.6 1-1.4 1-2.5 1.75 1.5 2.75 3.25 2.75 5.25 0 2.1-1.5 3.5-3.75 3.5Z' }],
  ['path', { d: 'M2.5 9h3M18.5 9h3' }],
]);
export const IconGeothermal = createIcon('geothermal', [
  ['path', { d: 'M3.5 14c0 3.5 3.8 6.5 8.5 6.5s8.5-3 8.5-6.5' }],
  ['path', { d: 'M8 11.5c-1.25-1.75 1.25-3 0-5.5M12 11.5c-1.25-1.75 1.25-3 0-5.5M16 11.5c-1.25-1.75 1.25-3 0-5.5' }],
  ['path', { d: 'M2.5 14h19' }],
]);
export const IconHeatPump = createIcon('heat-pump', [
  ['rect', { x: 2.5, y: 5, width: 19, height: 13, rx: 3 }],
  ['circle', { cx: 14.5, cy: 11.5, r: 4 }],
  ['circle', { cx: 14.5, cy: 11.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M5.5 18v2.5M18.5 18v2.5' }],
]);
export const IconHighVoltageSign = createIcon('high-voltage-sign', [
  ['path', { d: 'M10.3 4.2a2 2 0 0 1 3.4 0l7.4 12.8a2 2 0 0 1-1.7 3H4.6a2 2 0 0 1-1.7-3Z' }],
  ['path', { d: 'M13 9l-3 4.5h4l-3 4.5' }],
]);
export const IconHydroDam = createIcon('hydro-dam', [
  ['path', { d: 'M4 8.5h16l-3 12H7Z' }],
  ['path', { d: 'M2.5 5c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0' }],
  ['path', { d: 'M13 10.5l-3 4.5h4l-3 4.5' }],
]);
export const IconManholeCover = createIcon('manhole-cover', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['path', { d: 'M6.5 9h11M5.5 12h13M6.5 15h11' }],
]);
export const IconOilBarrel = createIcon('oil-barrel', [
  ['path', { d: 'M6 5c0-1 2.7-1.5 6-1.5s6 .5 6 1.5v14c0 1-2.7 1.5-6 1.5s-6-.5-6-1.5Z' }],
  ['path', { d: 'M6 5c0 1 2.7 1.5 6 1.5S18 6 18 5' }],
  ['path', { d: 'M12 9.5c1.3125 1.5 2.25 2.55 2.25 3.75a2.25 2.25 0 0 1-4.5 0c0-1.2000000000000002 0.9375-2.25 2.25-3.75Z' }],
]);
export const IconOilDerrick = createIcon('oil-derrick', [
  ['path', { d: 'M8 21 12 3l4 18' }],
  ['path', { d: 'M9.5 14h5M5 21h14' }],
]);
export const IconOilPumpjack = createIcon('oil-pumpjack', [
  ['path', { d: 'M3 20.5h18' }],
  ['path', { d: 'M8 20.5 11 9.5l3 11' }],
  ['path', { d: 'M4.5 11 17.5 7.5c1.75 0 2.5 2 2 4.5' }],
  ['path', { d: 'M19.5 12v8.5' }],
  ['circle', { cx: 5.5, cy: 13.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPipeLeak = createIcon('pipe-leak', [
  ['path', { d: 'M2.5 6.5h19M2.5 11.5h19' }],
  ['path', { d: 'M12 14c1.3125 1.5 2.25 2.55 2.25 3.75a2.25 2.25 0 0 1-4.5 0c0-1.2000000000000002 0.9375-2.25 2.25-3.75Z' }],
]);
export const IconPipeline = createIcon('pipeline', [
  ['rect', { x: 8.5, y: 7, width: 7, height: 10, rx: 2 }],
  ['path', { d: 'M2.5 9.5h6M15.5 9.5h6M2.5 14.5h6M15.5 14.5h6' }],
]);
export const IconPowerGenerator = createIcon('power-generator', [
  ['rect', { x: 3, y: 6, width: 18, height: 12, rx: 3 }],
  ['path', { d: 'M13 7.5l-3 4.5h4l-3 4.5' }],
  ['path', { d: 'M6 18v2.5M18 18v2.5' }],
]);
export const IconPowerInverter = createIcon('power-inverter', [
  ['rect', { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3.25 }],
  ['path', { d: 'M5.5 18.5l13-13' }],
  ['path', { d: 'M7 8.5h4M7 10.5h4' }],
  ['path', { d: 'M13 15c.75-1.25 1.5-1.25 2.25 0s1.5 1.25 2.25 0' }],
]);
export const IconPowerLines = createIcon('power-lines', [
  ['path', { d: 'M5 4v16.5M19 4v16.5' }],
  ['path', { d: 'M5 7.5c4 3 10 3 14 0M5 11.5c4 3 10 3 14 0' }],
]);
export const IconPowerOutage = createIcon('power-outage', [
  ['path', { d: 'M9 17.5v-1.25c0-1.5-3-3-3-6.75a6 6 0 0 1 12 0c0 3.75-3 5.25-3 6.75v1.25Z' }],
  ['path', { d: 'M10 20.5h4' }],
  ['path', { d: 'M4 3.5l16 16' }],
]);
export const IconPowerOutlet = createIcon('power-outlet', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['circle', { cx: 12, cy: 12, r: 5.5 }],
  ['circle', { cx: 9.75, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPowerStrip = createIcon('power-strip', [
  ['rect', { x: 2.5, y: 8.5, width: 15, height: 7, rx: 3 }],
  ['circle', { cx: 6.5, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M17.5 12h4' }],
]);
export const IconPropaneTank = createIcon('propane-tank', [
  ['rect', { x: 3, y: 9, width: 18, height: 9, rx: 4.5 }],
  ['path', { d: 'M12 9V6M10 6h4' }],
  ['path', { d: 'M7 18v2.5M17 18v2.5' }],
]);
export const IconRadiationHazard = createIcon('radiation-hazard', [
  ['path', { d: 'M10.625 9.619 8.5 5.938A7 7 0 0 1 15.5 5.938L13.375 9.619A2.75 2.75 0 0 0 10.625 9.619ZM14.75 12 19 12A7 7 0 0 1 15.5 18.062L13.375 14.381A2.75 2.75 0 0 0 14.75 12ZM10.625 14.381 8.5 18.062A7 7 0 0 1 5 12L9.25 12A2.75 2.75 0 0 0 10.625 14.381Z' }],
  ['circle', { cx: 12, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSmartMeter = createIcon('smart-meter', [
  ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 3.25 }],
  ['rect', { x: 7, y: 7, width: 10, height: 5, rx: 1.25 }],
  ['circle', { cx: 8.5, cy: 16, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 16, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.5, cy: 16, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSolarHome = createIcon('solar-home', [
  ['path', { d: 'M3.5 12 11 5.5l7.5 6.5v8.5h-15Z' }],
  ['path', { d: 'M8.5 20.5V16h5v4.5' }],
  ['circle', { cx: 19, cy: 4.75, r: 2.25 }],
]);
export const IconSolarPanel = createIcon('solar-panel', [
  ['path', { d: 'M5 4h14l2 10H3Z' }],
  ['path', { d: 'M12 4v10M4 9h16' }],
  ['path', { d: 'M12 14v6.5M8.5 20.5h7' }],
]);
export const IconSubstation = createIcon('substation', [
  ['rect', { x: 3, y: 6, width: 18, height: 14.5, rx: 3 }],
  ['path', { d: 'M13 8.5l-3 4.5h4l-3 4.5' }],
  ['path', { d: 'M7 6V3.5M17 6V3.5' }],
]);
export const IconThermostat = createIcon('thermostat', [
  ['circle', { cx: 12, cy: 12, r: 9.25 }],
  ['path', { d: 'M10.75 13.2V7.75a1.25 1.25 0 0 1 2.5 0v5.45a2.5 2.5 0 1 1-2.5 0Z' }],
]);
export const IconWaterHeater = createIcon('water-heater', [
  ['rect', { x: 6, y: 3, width: 12, height: 16.5, rx: 4 }],
  ['path', { d: 'M12 16c-2.25 0-3.75-1.4-3.75-3.5 0-2.25 1.75-3.25 2.25-5.75 1 .75 1.5 1.75 1.5 3 .6-.6 1-1.4 1-2.5 1.75 1.5 2.75 3.25 2.75 5.25 0 2.1-1.5 3.5-3.75 3.5Z' }],
  ['path', { d: 'M9 19.5V21M15 19.5V21' }],
]);
export const IconWaterMeter = createIcon('water-meter', [
  ['circle', { cx: 12, cy: 12, r: 6.5 }],
  ['path', { d: 'M2.5 12h3M18.5 12h3' }],
  ['path', { d: 'M12 8.5c1.4000000000000001 1.6 2.4000000000000004 2.72 2.4000000000000004 4a2.4000000000000004 2.4000000000000004 0 0 1-4.800000000000001 0c0-1.2800000000000002 1-2.4000000000000004 2.4000000000000004-4Z' }],
]);
export const IconWaterPurification = createIcon('water-purification', [
  ['path', { d: 'M12 6c1.75 2 3 3.4 3 5a3 3 0 0 1-6 0c0-1.6 1.25-3 3-5Z' }],
  ['path', { d: 'M5 12a7 7 0 0 1 11.5-5.4M19 12a7 7 0 0 1-11.5 5.4' }],
  ['path', { d: 'M16.5 3.5v3h-3M7.5 20.5v-3h3' }],
]);
export const IconWaterTap = createIcon('water-tap', [
  ['path', { d: 'M4 8.5h9a4 4 0 0 1 4 4V14' }],
  ['path', { d: 'M8 8.5V5.5M5.5 5h5' }],
  ['path', { d: 'M17 16.5c1.05 1.2 1.7999999999999998 2.04 1.7999999999999998 3a1.7999999999999998 1.7999999999999998 0 0 1-3.5999999999999996 0c0-0.96 0.75-1.7999999999999998 1.7999999999999998-3Z' }],
]);
export const IconWaterTower = createIcon('water-tower', [
  ['rect', { x: 6, y: 3, width: 12, height: 8, rx: 3 }],
  ['path', { d: 'M8 11l-1.5 9.5M16 11l1.5 9.5M8.5 15.5h7' }],
]);
export const IconWaterWheel = createIcon('water-wheel', [
  ['circle', { cx: 12, cy: 12, r: 7.5 }],
  ['path', { d: 'M12 4.5v15M4.5 12h15M6.7 6.7l10.6 10.6M17.3 6.7 6.7 17.3' }],
  ['circle', { cx: 12, cy: 12, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconWaveEnergy = createIcon('wave-energy', [
  ['path', { d: 'M13 3l-3 4.5h4l-3 4.5' }],
  ['path', { d: 'M2.5 15.5c1.5 1.25 3 1.25 4.75 0s3.25-1.25 4.75 0 3.25 1.25 4.75 0 3.25-1.25 4.75 0' }],
  ['path', { d: 'M2.5 20c1.5 1.25 3 1.25 4.75 0s3.25-1.25 4.75 0 3.25 1.25 4.75 0 3.25-1.25 4.75 0' }],
]);
export const IconWindTurbine = createIcon('wind-turbine', [
  ['path', { d: 'M17.6 12.25 12 9V2.5' }],
  ['path', { d: 'M6.4 12.25 12 9v11.5' }],
  ['path', { d: 'M9 20.5h6' }],
  ['circle', { cx: 12, cy: 9, r: 1.5, fill: 'currentColor', stroke: 'none' }],
]);
