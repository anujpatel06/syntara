/** Domain: manufacturing industry. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const Icon3dPrinter = createIcon('3d-printer', [
  ['rect', { x: 4, y: 3, width: 16, height: 17.5, rx: 2.5 }],
  ['path', { d: 'M4 8h16' }],
  ['path', { d: 'M10.5 8h3v2.5L12 12l-1.5-1.5Z' }],
  ['path', { d: 'M8.5 20.5 12 15l3.5 5.5' }],
]);
export const IconAgvRobot = createIcon('agv-robot', [
  ['rect', { x: 2.5, y: 12.5, width: 19, height: 5.5, rx: 2.5 }],
  ['rect', { x: 5, y: 5, width: 8, height: 7.5, rx: 1.5 }],
  ['path', { d: 'M16.5 5a4.5 4.5 0 0 1 4.5 4.5' }],
  ['circle', { cx: 16.75, cy: 9.25, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6.5, cy: 20, r: 1.5, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 20, r: 1.5, fill: 'currentColor', stroke: 'none' }],
]);
export const IconAirCompressor = createIcon('air-compressor', [
  ['rect', { x: 2.5, y: 10, width: 19, height: 8, rx: 4 }],
  ['circle', { cx: 12, cy: 6, r: 2.5 }],
  ['path', { d: 'M12 8.5V10' }],
  ['circle', { cx: 6, cy: 20, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18, cy: 20, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconAnvil = createIcon('anvil', [
  ['path', { d: 'M3 6.5h12.5c0 3 2 4.5 5.5 4.5-1 2-3 3-5.5 3H15v3l2.5 3.5h-11L9 17v-3H8c-3 0-5-3-5-7.5Z' }],
]);
export const IconAssemblyLine = createIcon('assembly-line', [
  ['path', { d: 'M2.5 18.5h19' }],
  ['rect', { x: 4, y: 12.5, width: 5.5, height: 6, rx: 1.25 }],
  ['rect', { x: 14.5, y: 12.5, width: 5.5, height: 6, rx: 1.25 }],
  ['path', { d: 'M9.5 6.5h5M13 5l1.5 1.5L13 8' }],
]);
export const IconBallBearing = createIcon('ball-bearing', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['circle', { cx: 12, cy: 12, r: 3.5 }],
  ['circle', { cx: 16.24, cy: 7.76, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.24, cy: 16.24, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.76, cy: 16.24, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.76, cy: 7.76, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBenchVise = createIcon('bench-vise', [
  ['rect', { x: 4, y: 5, width: 6.5, height: 7, rx: 1.5 }],
  ['rect', { x: 13.5, y: 5, width: 6.5, height: 7, rx: 1.5 }],
  ['path', { d: 'M7 12v3.5h3.5v5M13.5 20.5v-5H17V12' }],
  ['path', { d: 'M5 20.5h14' }],
]);
export const IconCClamp = createIcon('c-clamp', [
  ['path', { d: 'M17 3.5H8A4.5 4.5 0 0 0 3.5 8v7A4.5 4.5 0 0 0 8 19.5h9v-3H8.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2H17Z' }],
  ['path', { d: 'M15 21.5V10' }],
  ['path', { d: 'M13 10h4M12.5 21.5h5' }],
]);
export const IconCentrifugalPump = createIcon('centrifugal-pump', [
  ['path', { d: 'M18 3.5v9a6.5 6.5 0 1 1-6.5-6.5H15V3.5' }],
  ['circle', { cx: 11.5, cy: 12.5, r: 2 }],
  ['path', { d: 'M5.5 21h12' }],
]);
export const IconCncMachine = createIcon('cnc-machine', [
  ['rect', { x: 3, y: 3, width: 18, height: 18, rx: 3.25 }],
  ['path', { d: 'M12 3v6.5' }],
  ['path', { d: 'M10.5 9.5h3L12 12.5Z' }],
  ['path', { d: 'M6.5 16.5h11' }],
]);
export const IconCompressionSpring = createIcon('compression-spring', [
  ['path', { d: 'M7 3.5h10M7 20.5h10' }],
  ['path', { d: 'M16 3.5 8 6.4 16 9.3 8 12.2 16 15.1 8 18 16 20.5' }],
]);
export const IconControlPanel = createIcon('control-panel', [
  ['rect', { x: 3, y: 4, width: 18, height: 16, rx: 3.25 }],
  ['circle', { cx: 8.5, cy: 12, r: 2.5 }],
  ['circle', { cx: 14.5, cy: 9.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 9.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M14 14.5h4' }],
]);
export const IconConveyorBelt = createIcon('conveyor-belt', [
  ['rect', { x: 2.5, y: 14, width: 19, height: 6, rx: 3 }],
  ['rect', { x: 8, y: 6.5, width: 7, height: 7.5, rx: 1.5 }],
  ['circle', { cx: 5.5, cy: 17, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 17, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18.5, cy: 17, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCrucible = createIcon('crucible', [
  ['path', { d: 'M5 8h14l-1.5 10a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 18Z' }],
  ['path', { d: 'M8.5 3.5 9.25 5M12 3v2M15.5 3.5 14.75 5' }],
]);
export const IconDrillPress = createIcon('drill-press', [
  ['path', { d: 'M4.5 20.5h12M7 20.5V3.5M7 15h9' }],
  ['rect', { x: 7, y: 3.5, width: 10, height: 5.5, rx: 1.5 }],
  ['path', { d: 'M14 9v3.5' }],
]);
export const IconEarDefenders = createIcon('ear-defenders', [
  ['path', { d: 'M6 12v-1a6 6 0 0 1 12 0v1' }],
  ['rect', { x: 3.5, y: 12, width: 5, height: 8, rx: 2.5 }],
  ['rect', { x: 15.5, y: 12, width: 5, height: 8, rx: 2.5 }],
]);
export const IconEmergencyStop = createIcon('emergency-stop', [
  ['path', { d: 'M3.5 11c0-3 3.8-5 8.5-5s8.5 2 8.5 5Z' }],
  ['path', { d: 'M10 11v3M14 11v3' }],
  ['rect', { x: 6, y: 14, width: 12, height: 6.5, rx: 2 }],
]);
export const IconEndMillBit = createIcon('end-mill-bit', [
  ['rect', { x: 9, y: 2.5, width: 6, height: 7, rx: 1.5 }],
  ['path', { d: 'M9 9.5V18l3 3 3-3V9.5' }],
  ['path', { d: 'M9 12.5l6 2.5M9 17l6-2' }],
]);
export const IconExhaustFan = createIcon('exhaust-fan', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['path', { d: 'M12 12c-1-3 0-5.5 2.5-6.5 1.5 2 1 5-2.5 6.5ZM12 12c3 .5 4.75 2.5 4.25 5.25-2.5.25-4.25-2-4.25-5.25ZM12 12c-2 2.25-4.75 2.75-6.75 1 1-2.5 3.75-3 6.75-1Z' }],
]);
export const IconFactory = createIcon('factory', [
  ['path', { d: 'M3 20.5V11l4.5 3v-3l4.5 3v-3l4.5 3V4.5h4v16Z' }],
]);
export const IconFeedHopper = createIcon('feed-hopper', [
  ['path', { d: 'M4 4h16l-5.5 8v5h-5v-5Z' }],
  ['path', { d: 'M10.5 20.5h3' }],
]);
export const IconFurnace = createIcon('furnace', [
  ['path', { d: 'M5 20.5V9a7 7 0 0 1 14 0v11.5Z' }],
  ['path', { d: 'M12 18c-2 0-3-1.25-3-2.75 0-2 2-3 3-5 1 2 3 3 3 5 0 1.5-1 2.75-3 2.75Z' }],
]);
export const IconGantryCrane = createIcon('gantry-crane', [
  ['path', { d: 'M3.5 20.5V5.5h17v15' }],
  ['path', { d: 'M12 5.5v6' }],
  ['path', { d: 'M12 11.5V14a2 2 0 1 1-2 2' }],
]);
export const IconGrindingWheel = createIcon('grinding-wheel', [
  ['circle', { cx: 10, cy: 12, r: 6.5 }],
  ['circle', { cx: 10, cy: 12, r: 1.5 }],
  ['path', { d: 'M18.5 8.5l3-1.5M19 12h2.5M18.5 15.5l3 1.5' }],
]);
export const IconHazardFlammable = createIcon('hazard-flammable', [
  ['path', { d: 'M12 2.5 21.5 12 12 21.5 2.5 12Z' }],
  ['path', { d: 'M12 16.5c-1.75 0-2.75-1-2.75-2.5 0-1.75 1.75-2.75 2.75-4.75 1 2 2.75 3 2.75 4.75 0 1.5-1 2.5-2.75 2.5Z' }],
]);
export const IconHexBolt = createIcon('hex-bolt', [
  ['rect', { x: 7, y: 3, width: 10, height: 4.5, rx: 1.5 }],
  ['path', { d: 'M9.5 7.5V19a2.5 2.5 0 0 0 5 0V7.5' }],
  ['path', { d: 'M9.5 11.5h5M9.5 15h5' }],
]);
export const IconHexNut = createIcon('hex-nut', [
  ['path', { d: 'M12 3 19.8 7.5v9L12 21l-7.8-4.5v-9Z' }],
  ['circle', { cx: 12, cy: 12, r: 3.5 }],
]);
export const IconHorseshoeMagnet = createIcon('horseshoe-magnet', [
  ['path', { d: 'M6 4v8a6 6 0 0 0 12 0V4h-3.5v8a2.5 2.5 0 0 1-5 0V4Z' }],
  ['path', { d: 'M6 8h3.5M14.5 8H18' }],
]);
export const IconHydraulicPress = createIcon('hydraulic-press', [
  ['path', { d: 'M4.5 20.5V3.5h15v17M2.5 20.5h19' }],
  ['path', { d: 'M12 3.5V8' }],
  ['rect', { x: 7, y: 8, width: 10, height: 3.5, rx: 1.25 }],
  ['rect', { x: 8.5, y: 16.5, width: 7, height: 4, rx: 1 }],
]);
export const IconIndustrialValve = createIcon('industrial-valve', [
  ['path', { d: 'M3.5 11v8l8.5-4 8.5 4v-8l-8.5 4Z' }],
  ['path', { d: 'M12 15V6.5' }],
  ['path', { d: 'M8 6.5h8' }],
]);
export const IconLaserCutter = createIcon('laser-cutter', [
  ['path', { d: 'M9 3.5h6V8l-3 2.5L9 8Z' }],
  ['path', { d: 'M12 11.5V16' }],
  ['path', { d: 'M3.5 17h17' }],
  ['circle', { cx: 9, cy: 15, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 15, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLatheChuck = createIcon('lathe-chuck', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['circle', { cx: 12, cy: 12, r: 2 }],
  ['path', { d: 'M12 3.5V8M4.64 16.25l3.9-2.25M19.36 16.25l-3.9-2.25' }],
]);
export const IconLiftingHook = createIcon('lifting-hook', [
  ['circle', { cx: 12, cy: 5, r: 2.25 }],
  ['path', { d: 'M12 7.25v8.25a4 4 0 1 1-8 0V14' }],
  ['path', { d: 'M4 14l1.75 1.75' }],
]);
export const IconLockoutTagout = createIcon('lockout-tagout', [
  ['path', { d: 'M6 10V7.5a3 3 0 0 1 6 0V10' }],
  ['rect', { x: 4, y: 10, width: 10, height: 8.5, rx: 2.5 }],
  ['rect', { x: 15, y: 12.5, width: 5, height: 8, rx: 1.5, transform: 'rotate(-20 17.5 16.5)' }],
  ['circle', { cx: 16.75, cy: 14.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMetalIngots = createIcon('metal-ingots', [
  ['path', { d: 'M2.5 20 4.25 15h6.5l1.75 5Z' }],
  ['path', { d: 'M11.5 20l1.75-5h6.5l1.75 5Z' }],
  ['path', { d: 'M7 13 8.75 8h6.5L17 13Z' }],
]);
export const IconMixingTank = createIcon('mixing-tank', [
  ['rect', { x: 5, y: 5, width: 14, height: 15.5, rx: 3 }],
  ['path', { d: 'M12 2.5V15M8.5 15h7' }],
]);
export const IconPipeElbow = createIcon('pipe-elbow', [
  ['path', { d: 'M3.5 6H11a7 7 0 0 1 7 7v7.5' }],
  ['path', { d: 'M3.5 12h7.5a1 1 0 0 1 1 1v7.5' }],
  ['path', { d: 'M3.5 4.5v9M10.5 20.5h9' }],
]);
export const IconPlatformScale = createIcon('platform-scale', [
  ['rect', { x: 3, y: 15, width: 18, height: 5.5, rx: 2 }],
  ['rect', { x: 7, y: 3.5, width: 10, height: 6.5, rx: 2 }],
  ['path', { d: 'M12 10v5' }],
]);
export const IconPressureGauge = createIcon('pressure-gauge', [
  ['circle', { cx: 12, cy: 10.5, r: 7.5 }],
  ['path', { d: 'M12 10.5l3-3' }],
  ['path', { d: 'M10.25 18v3h3.5v-3' }],
]);
export const IconPulleyBlock = createIcon('pulley-block', [
  ['circle', { cx: 12, cy: 7.5, r: 4 }],
  ['path', { d: 'M8 7.5v13M16 7.5v8' }],
  ['rect', { x: 13.5, y: 15.5, width: 5, height: 5, rx: 1.25 }],
  ['circle', { cx: 12, cy: 7.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPunchClock = createIcon('punch-clock', [
  ['rect', { x: 5, y: 3, width: 14, height: 18, rx: 3.25 }],
  ['circle', { cx: 12, cy: 9.5, r: 3.5 }],
  ['path', { d: 'M12 8v1.5l1 1' }],
  ['path', { d: 'M8.5 16.5h7' }],
]);
export const IconQualityCheck = createIcon('quality-check', [
  ['rect', { x: 5, y: 4, width: 14, height: 17, rx: 3 }],
  ['path', { d: 'M9.5 4V3h5v1' }],
  ['path', { d: 'M9 13l2 2 4-4' }],
]);
export const IconRobotArm = createIcon('robot-arm', [
  ['rect', { x: 4.5, y: 17.5, width: 8, height: 3, rx: 1.25 }],
  ['path', { d: 'M8.5 17.5 6.5 10l7.5-4' }],
  ['path', { d: 'M14 6l1.5-2.5H19M14 6l2.5 2H20' }],
  ['circle', { cx: 6.5, cy: 10, r: 1.5, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSafetyBoot = createIcon('safety-boot', [
  ['path', { d: 'M5.5 3.5h6v8l5.5 2c2 .75 3.5 2.25 3.5 4.5v2.5h-15Z' }],
  ['path', { d: 'M5.5 17h15' }],
]);
export const IconSafetyCone = createIcon('safety-cone', [
  ['path', { d: 'M10 4h4l4.5 16.5h-13Z' }],
  ['path', { d: 'M8.6 9.5h6.8M7.2 15h9.6' }],
  ['path', { d: 'M3.5 20.5h17' }],
]);
export const IconSafetyGoggles = createIcon('safety-goggles', [
  ['path', { d: 'M3 10.5C3 9 4 8 5.5 8h13C20 8 21 9 21 10.5V13c0 2-1.5 3.5-3.5 3.5-1.5 0-2.5-.75-3.5-2-.5-.75-1-1-2-1s-1.5.25-2 1c-1 1.25-2 2-3.5 2C4.5 16.5 3 15 3 13Z' }],
]);
export const IconSafetyHelmet = createIcon('safety-helmet', [
  ['path', { d: 'M3.5 17.5h17' }],
  ['path', { d: 'M5.5 17.5V15a6.5 6.5 0 0 1 13 0v2.5' }],
  ['path', { d: 'M10.5 8.75V7h3v1.75' }],
]);
export const IconSafetyVest = createIcon('safety-vest', [
  ['path', { d: 'M8.5 3.5 5 6v14.5h5.5v-8L12 9.5l1.5 3v8H19V6l-3.5-2.5L12 9.5Z' }],
  ['path', { d: 'M5 15.5h5.5M13.5 15.5H19' }],
]);
export const IconSawBlade = createIcon('saw-blade', [
  ['path', { d: 'M12.00 2.75L14.85 5.61L16.62 3.99L17.66 7.89L20.01 7.38L18.96 11.27L21.25 12.00L18.39 14.85L20.01 16.62L16.11 17.66L16.62 20.01L12.73 18.96L12.00 21.25L9.15 18.39L7.38 20.01L6.34 16.11L3.99 16.63L5.04 12.73L2.75 12.00L5.61 9.15L3.99 7.37L7.89 6.34L7.37 3.99L11.27 5.04Z' }],
  ['circle', { cx: 12, cy: 12, r: 2.5 }],
]);
export const IconScissorLift = createIcon('scissor-lift', [
  ['path', { d: 'M5 6.5h14' }],
  ['path', { d: 'M7 6.5 17 13.5 7 20.5M17 6.5 7 13.5l10 7' }],
  ['path', { d: 'M4 20.5h16' }],
]);
export const IconSheetMetal = createIcon('sheet-metal', [
  ['path', { d: 'M3 16.5 7.5 13.5h13.5l-4.5 3Z' }],
  ['path', { d: 'M3 12.5 7.5 9.5h13.5l-4.5 3Z' }],
  ['path', { d: 'M3 16.5V20h13.5l4.5-3v-3.5' }],
]);
export const IconSmokestack = createIcon('smokestack', [
  ['path', { d: 'M8.5 20.5l1-11h5l1 11' }],
  ['path', { d: 'M3.5 20.5h17' }],
  ['path', { d: 'M12 7c-1.5-.5-2-2-1-3s2.5-.5 3 .5c.5-1.5 2.5-2 3.5-1s.5 2.5-.5 3' }],
]);
export const IconSteelDrum = createIcon('steel-drum', [
  ['path', { d: 'M6 5c0-1 2.7-1.5 6-1.5s6 .5 6 1.5v14c0 1-2.7 1.5-6 1.5s-6-.5-6-1.5Z' }],
  ['path', { d: 'M6 5c0 1 2.7 1.5 6 1.5S18 6 18 5' }],
  ['path', { d: 'M6 12.5c2 .6 10 .6 12 0' }],
]);
export const IconSteelIBeam = createIcon('steel-i-beam', [
  ['path', { d: 'M5.5 4h13v3.5H14v9h4.5V20h-13v-3.5H10v-9H5.5Z' }],
]);
export const IconStorageTank = createIcon('storage-tank', [
  ['circle', { cx: 12, cy: 10, r: 7 }],
  ['path', { d: 'M5 10h14' }],
  ['path', { d: 'M7 14.9 6 20.5M17 14.9l1 5.6' }],
]);
export const IconToolChest = createIcon('tool-chest', [
  ['rect', { x: 4, y: 3.5, width: 16, height: 15.5, rx: 3 }],
  ['path', { d: 'M4 8.75h16M4 13.75h16' }],
  ['circle', { cx: 12, cy: 6.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 11.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 16.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M6.75 20.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0M15.25 20.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0' }],
]);
export const IconVernierCaliper = createIcon('vernier-caliper', [
  ['path', { d: 'M3.5 5.5h17V9h-17Z' }],
  ['path', { d: 'M5.5 9v10L8 15.5V9M14 9v10l2.5-3.5V9' }],
]);
export const IconWeldingHelmet = createIcon('welding-helmet', [
  ['path', { d: 'M5 11a7 7 0 0 1 14 0v4.5a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5Z' }],
  ['rect', { x: 8, y: 10.5, width: 8, height: 3.5, rx: 1.25 }],
]);
export const IconWorkGlove = createIcon('work-glove', [
  ['path', { d: 'M7.5 17.5 5 10.5a1.5 1.5 0 0 1 2.8-1L9 12V5a1.5 1.5 0 0 1 3 0v6V4.5a1.5 1.5 0 0 1 3 0V11V6a1.5 1.5 0 0 1 3 0v8.5c0 1.5-.5 2.25-1 3' }],
  ['rect', { x: 7, y: 17.5, width: 10, height: 3.5, rx: 1.25 }],
]);
export const IconWorkbench = createIcon('workbench', [
  ['path', { d: 'M3 9.5h18M5 9.5v11M19 9.5v11M5 15h14' }],
  ['rect', { x: 9, y: 5, width: 6, height: 4.5, rx: 1 }],
]);
