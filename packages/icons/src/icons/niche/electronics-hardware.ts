/** Domain: electronics hardware. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAcPower = createIcon('ac-power', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['path', { d: 'M7 12c1.25-3 3.75-3 5 0s3.75 3 5 0' }],
]);
export const IconAudioJack = createIcon('audio-jack', [
  ['path', { d: 'M12 3.5a1.25 1.25 0 0 1 1.25 1.25V11h-2.5V4.75A1.25 1.25 0 0 1 12 3.5Z' }],
  ['path', { d: 'M10.75 7.5h2.5' }],
  ['rect', { x: 8.5, y: 11, width: 7, height: 7, rx: 2 }],
  ['path', { d: 'M12 18v3.5' }],
]);
export const IconBatteryCell = createIcon('battery-cell', [
  ['rect', { x: 7, y: 5, width: 10, height: 16, rx: 2.5 }],
  ['path', { d: 'M10 5V3.5h4V5' }],
  ['path', { d: 'M12 10v4M10 12h4' }],
]);
export const IconBenchPowerSupply = createIcon('bench-power-supply', [
  ['rect', { x: 2.5, y: 5, width: 19, height: 14, rx: 3 }],
  ['rect', { x: 5.5, y: 8.5, width: 7, height: 4, rx: 1 }],
  ['circle', { cx: 16.5, cy: 12, r: 2.5 }],
  ['circle', { cx: 7, cy: 15.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.5, cy: 15.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBreadboard = createIcon('breadboard', [
  ['rect', { x: 3, y: 5, width: 18, height: 14, rx: 3 }],
  ['path', { d: 'M3 12h18' }],
  ['path', { d: 'M8 8.75c0 3.5 8 3 8 6.5' }],
  ['circle', { cx: 8, cy: 8.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16, cy: 8.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 8, cy: 15.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16, cy: 15.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCapacitor = createIcon('capacitor', [
  ['path', { d: 'M2.5 12h7M9.5 6v12' }],
  ['path', { d: 'M14.5 6v12M14.5 12h7' }],
]);
export const IconCircuitBoard = createIcon('circuit-board', [
  ['rect', { x: 3, y: 3.5, width: 18, height: 17, rx: 3.25 }],
  ['path', { d: 'M7 8h4.5l2.5 2.5V16M17 8v5' }],
  ['circle', { cx: 7, cy: 8, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 16, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 8, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 13, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCoinCell = createIcon('coin-cell', [
  ['ellipse', { cx: 12, cy: 9, rx: 8, ry: 4 }],
  ['path', { d: 'M4 9v5c0 2.2 3.6 4 8 4s8-1.8 8-4V9' }],
  ['path', { d: 'M12 7.5v3M10.5 9h3' }],
]);
export const IconComputerMouse = createIcon('computer-mouse', [
  ['rect', { x: 6.5, y: 3, width: 11, height: 18, rx: 5.5 }],
  ['path', { d: 'M12 7v3' }],
]);
export const IconCrystalOscillator = createIcon('crystal-oscillator', [
  ['path', { d: 'M2.5 12h4.5M17 12h4.5' }],
  ['path', { d: 'M7 7v10M17 7v10' }],
  ['rect', { x: 9.75, y: 8, width: 4.5, height: 8, rx: 0.75 }],
]);
export const IconDiode = createIcon('diode', [
  ['path', { d: 'M2.5 12h5M16.5 12h5' }],
  ['path', { d: 'M7.5 7v10l9-5Z' }],
  ['path', { d: 'M16.5 7v10' }],
]);
export const IconDipSwitch = createIcon('dip-switch', [
  ['rect', { x: 3, y: 6, width: 18, height: 12, rx: 3 }],
  ['rect', { x: 6.25, y: 8.5, width: 2.5, height: 7, rx: 1.25 }],
  ['rect', { x: 10.75, y: 8.5, width: 2.5, height: 7, rx: 1.25 }],
  ['rect', { x: 15.25, y: 8.5, width: 2.5, height: 7, rx: 1.25 }],
]);
export const IconElectricMotor = createIcon('electric-motor', [
  ['rect', { x: 2.5, y: 6, width: 13, height: 12, rx: 2 }],
  ['path', { d: 'M2.5 10h13v4h-13' }],
  ['path', { d: 'M15.5 8.5h2v7h-2' }],
  ['path', { d: 'M17.5 12h4' }],
  ['path', { d: 'M5 18v2.5h8V18' }],
]);
export const IconElectricalGround = createIcon('electrical-ground', [
  ['path', { d: 'M12 3.5v8M5 11.5h14M8 15.5h8M10.5 19.5h3' }],
]);
export const IconElectricalSwitch = createIcon('electrical-switch', [
  ['path', { d: 'M2.5 15.5h5M16.5 15.5h5' }],
  ['path', { d: 'M8 15.5l8-6' }],
  ['circle', { cx: 8, cy: 15.5, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 15.5, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconElectrolyticCapacitor = createIcon('electrolytic-capacitor', [
  ['rect', { x: 7, y: 3, width: 10, height: 13, rx: 3.5 }],
  ['path', { d: 'M10 16v5M14 16v5' }],
  ['path', { d: 'M10.5 7.5h3' }],
]);
export const IconElectronicsTransformer = createIcon('electronics-transformer', [
  ['path', { d: 'M6.5 3.5V5a2.25 2.25 0 0 1 0 4.5 2.25 2.25 0 0 1 0 4.5 2.25 2.25 0 0 1 0 4.5v2' }],
  ['path', { d: 'M17.5 3.5V5a2.25 2.25 0 0 0 0 4.5 2.25 2.25 0 0 0 0 4.5 2.25 2.25 0 0 0 0 4.5v2' }],
  ['path', { d: 'M11 4v16M13 4v16' }],
]);
export const IconFuse = createIcon('fuse', [
  ['rect', { x: 5, y: 8.5, width: 14, height: 7, rx: 3.5 }],
  ['path', { d: 'M2.5 12h19' }],
]);
export const IconGpu = createIcon('gpu', [
  ['rect', { x: 2.5, y: 6, width: 16, height: 10, rx: 2.5 }],
  ['circle', { cx: 7, cy: 11, r: 2.75 }],
  ['circle', { cx: 14, cy: 11, r: 2.75 }],
  ['path', { d: 'M6 16v2.5h7V16M19.5 4H21v14.5' }],
]);
export const IconHardDisk = createIcon('hard-disk', [
  ['rect', { x: 3.5, y: 3, width: 17, height: 18, rx: 3.25 }],
  ['circle', { cx: 12, cy: 10.5, r: 4.5 }],
  ['circle', { cx: 12, cy: 10.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.5, cy: 17.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconHdmiPort = createIcon('hdmi-port', [
  ['path', { d: 'M3.5 8.5h17v4l-3 3h-11l-3-3Z' }],
  ['path', { d: 'M7.5 11.5h9' }],
]);
export const IconHeatSink = createIcon('heat-sink', [
  ['rect', { x: 3.5, y: 17, width: 17, height: 3.5, rx: 1.5 }],
  ['path', { d: 'M6 17V9M10 17V5M14 17V5M18 17V9' }],
]);
export const IconIcChip = createIcon('ic-chip', [
  ['rect', { x: 6, y: 6, width: 12, height: 12, rx: 2.5 }],
  ['path', { d: 'M9.5 6V3.5M14.5 6V3.5M9.5 18v2.5M14.5 18v2.5' }],
  ['rect', { x: 3, y: 8.75, width: 3, height: 1.5, rx: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 3, y: 13.75, width: 3, height: 1.5, rx: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 18, y: 8.75, width: 3, height: 1.5, rx: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 18, y: 13.75, width: 3, height: 1.5, rx: 0.75, fill: 'currentColor', stroke: 'none' }],
]);
export const IconInductor = createIcon('inductor', [
  ['path', { d: 'M2.5 15.5h2a2.5 4.5 0 0 1 5 0 2.5 4.5 0 0 1 5 0 2.5 4.5 0 0 1 5 0h2' }],
  ['path', { d: 'M4.5 7.5h15' }],
]);
export const IconJumperWire = createIcon('jumper-wire', [
  ['path', { d: 'M6 17V10a3 3 0 0 1 6 0v4a3 3 0 0 0 6 0V7' }],
  ['rect', { x: 4.5, y: 17, width: 3, height: 4, rx: 1 }],
  ['rect', { x: 16.5, y: 3, width: 3, height: 4, rx: 1 }],
]);
export const IconLcdModule = createIcon('lcd-module', [
  ['rect', { x: 2.5, y: 5, width: 19, height: 14, rx: 3 }],
  ['rect', { x: 5.5, y: 9, width: 13, height: 6.5, rx: 1.5 }],
  ['circle', { cx: 6, cy: 7, r: 0.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 8, cy: 7, r: 0.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 7, r: 0.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 7, r: 0.6, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLed = createIcon('led', [
  ['path', { d: 'M7.5 14V8.5a4.5 4.5 0 0 1 9 0V14' }],
  ['path', { d: 'M5.5 14h13' }],
  ['path', { d: 'M10 14v7M14 14v5' }],
]);
export const IconLogicAndGate = createIcon('logic-and-gate', [
  ['path', { d: 'M6 5.5h5a6.5 6.5 0 0 1 0 13H6Z' }],
  ['path', { d: 'M2.5 9H6M2.5 15H6M17.5 12h4' }],
]);
export const IconLogicNotGate = createIcon('logic-not-gate', [
  ['path', { d: 'M5 5.5v13l10-6.5Z' }],
  ['circle', { cx: 16.75, cy: 12, r: 1.75 }],
  ['path', { d: 'M2.5 12H5M18.5 12h3' }],
]);
export const IconLogicOrGate = createIcon('logic-or-gate', [
  ['path', { d: 'M5 5.5h4.5c4 0 7 2.5 9 6.5-2 4-5 6.5-9 6.5H5c1.5-2 2.25-4.25 2.25-6.5S6.5 7.5 5 5.5Z' }],
  ['path', { d: 'M2.5 9h4.25M2.5 15h4.25M18.5 12h3' }],
]);
export const IconMemoryModule = createIcon('memory-module', [
  ['rect', { x: 2.5, y: 6, width: 19, height: 10, rx: 2.5 }],
  ['path', { d: 'M6 16v2.5M9 16v2.5M15 16v2.5M18 16v2.5' }],
]);
export const IconMotionSensor = createIcon('motion-sensor', [
  ['path', { d: 'M6.5 20.5a5.5 5.5 0 0 1 11 0Z' }],
  ['path', { d: 'M8.5 12.5a5 5 0 0 1 7 0M5.75 9.5a9 9 0 0 1 12.5 0' }],
]);
export const IconMultimeter = createIcon('multimeter', [
  ['rect', { x: 5, y: 2.5, width: 14, height: 19, rx: 3.25 }],
  ['rect', { x: 8, y: 5.5, width: 8, height: 4.5, rx: 1.5 }],
  ['circle', { cx: 12, cy: 15, r: 2.75 }],
  ['circle', { cx: 12, cy: 13, r: 0.7, fill: 'currentColor', stroke: 'none' }],
]);
export const IconOscilloscope = createIcon('oscilloscope', [
  ['rect', { x: 2.5, y: 4, width: 19, height: 16, rx: 3.25 }],
  ['path', { d: 'M5.5 12c1-3 2-3 3 0s2 3 3 0 2-3 3 0' }],
  ['circle', { cx: 18, cy: 9, r: 1.5 }],
  ['circle', { cx: 18, cy: 15, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPanelMeter = createIcon('panel-meter', [
  ['rect', { x: 3, y: 4.5, width: 18, height: 15, rx: 3.25 }],
  ['path', { d: 'M7 15.5a5 5 0 0 1 10 0' }],
  ['path', { d: 'M12 15.5l2.5-4.5' }],
]);
export const IconPcFan = createIcon('pc-fan', [
  ['rect', { x: 3, y: 3, width: 18, height: 18, rx: 4.5 }],
  ['path', { d: 'M12 12C10.25 9.5 10.5 6.5 13 4.75c1.75 2.25 1.75 5.25-1 7.25Z' }],
  ['path', { d: 'M12 12C10.25 9.5 10.5 6.5 13 4.75c1.75 2.25 1.75 5.25-1 7.25Z', transform: 'rotate(120 12 12)' }],
  ['path', { d: 'M12 12C10.25 9.5 10.5 6.5 13 4.75c1.75 2.25 1.75 5.25-1 7.25Z', transform: 'rotate(240 12 12)' }],
  ['circle', { cx: 12, cy: 12, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPiezoBuzzer = createIcon('piezo-buzzer', [
  ['circle', { cx: 11, cy: 10.5, r: 6 }],
  ['circle', { cx: 11, cy: 10.5, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M9 16.5V21M13 16.5V21' }],
  ['path', { d: 'M19.5 7.5a6 6 0 0 1 0 6' }],
]);
export const IconPinHeader = createIcon('pin-header', [
  ['rect', { x: 3, y: 12, width: 18, height: 5, rx: 2 }],
  ['path', { d: 'M7 12V3.5M12 12V3.5M17 12V3.5' }],
  ['circle', { cx: 7, cy: 20, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 20, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 20, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPotentiometer = createIcon('potentiometer', [
  ['circle', { cx: 12, cy: 13.5, r: 6.5 }],
  ['path', { d: 'M12 13.5V9' }],
  ['circle', { cx: 4.5, cy: 9.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 4, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 9.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPowerAdapter = createIcon('power-adapter', [
  ['rect', { x: 5, y: 3, width: 14, height: 12, rx: 3 }],
  ['path', { d: 'M12 15v2.5a3 3 0 0 0 3 3h5' }],
  ['path', { d: 'M12.75 5.75l-2 3.25h2.5l-2 3.25' }],
]);
export const IconResistor = createIcon('resistor', [
  ['path', { d: 'M2.5 12h3.5l1.5-4 3 8 3-8 3 8 1.5-4h3.5' }],
]);
export const IconSdCard = createIcon('sd-card', [
  ['path', { d: 'M9 3h7.5A2.5 2.5 0 0 1 19 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 18.5V7Z' }],
  ['path', { d: 'M10 6.5V9M13 6.5V9M16 6.5V9' }],
]);
export const IconSevenSegment = createIcon('seven-segment', [
  ['rect', { x: 4, y: 2.5, width: 16, height: 19, rx: 3.25 }],
  ['path', { d: 'M8.5 10.5V6.5h7v4' }],
  ['path', { d: 'M8.5 12h7' }],
  ['path', { d: 'M8.5 13.5v4h7v-4' }],
]);
export const IconSiliconWafer = createIcon('silicon-wafer', [
  ['path', { d: 'M8.5 19.75A8.5 8.5 0 1 1 15.5 19.75Z' }],
  ['rect', { x: 8.25, y: 8.25, width: 3, height: 3, rx: 0.5, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 12.75, y: 8.25, width: 3, height: 3, rx: 0.5, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 8.25, y: 12.75, width: 3, height: 3, rx: 0.5, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 12.75, y: 12.75, width: 3, height: 3, rx: 0.5, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSmartwatch = createIcon('smartwatch', [
  ['rect', { x: 6, y: 6, width: 12, height: 12, rx: 3.5 }],
  ['path', { d: 'M9 6l.5-3h5l.5 3M9 18l.5 3h5l.5-3' }],
  ['path', { d: 'M12 9.5V12l1.5 1.5' }],
]);
export const IconSolderingIron = createIcon('soldering-iron', [
  ['rect', { x: 2.5, y: 10, width: 9, height: 4, rx: 2, transform: 'rotate(-45 12 12)' }],
  ['path', { d: 'M11.5 11h3.5l.5 1-.5 1h-3.5', transform: 'rotate(-45 12 12)' }],
  ['path', { d: 'M16 12h5', transform: 'rotate(-45 12 12)' }],
]);
export const IconTactileButton = createIcon('tactile-button', [
  ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 3.25 }],
  ['circle', { cx: 12, cy: 12, r: 4 }],
  ['circle', { cx: 6.75, cy: 6.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.25, cy: 6.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6.75, cy: 17.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.25, cy: 17.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTransistor = createIcon('transistor', [
  ['circle', { cx: 12, cy: 12, r: 7.5 }],
  ['path', { d: 'M3 12h6M9 8v8' }],
  ['path', { d: 'M9 10.5l4.5-3V3M9 13.5l4.5 3V21' }],
]);
export const IconTweezers = createIcon('tweezers', [
  ['path', { d: 'M12 3.5C10.5 3.5 9 4.5 9 6.5l1.75 14M12 3.5c1.5 0 3 1 3 3l-1.75 14' }],
]);
export const IconUltrasonicSensor = createIcon('ultrasonic-sensor', [
  ['rect', { x: 2.5, y: 6, width: 19, height: 12, rx: 3 }],
  ['circle', { cx: 8, cy: 12, r: 3 }],
  ['circle', { cx: 16, cy: 12, r: 3 }],
]);
export const IconUsb = createIcon('usb', [
  ['circle', { cx: 12, cy: 19, r: 2 }],
  ['path', { d: 'M12 17V4M10 6l2-2 2 2' }],
  ['path', { d: 'M12 14.5 7.5 12V9.5M12 12l4.5-2.5V8' }],
  ['circle', { cx: 7.5, cy: 8.75, r: 1.25, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 15.5, y: 5.5, width: 2, height: 2, rx: 0.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconUsbCPort = createIcon('usb-c-port', [
  ['rect', { x: 3.5, y: 8.5, width: 17, height: 7, rx: 3.5 }],
  ['path', { d: 'M8 12h8' }],
]);
export const IconUsbDrive = createIcon('usb-drive', [
  ['rect', { x: 7.5, y: 9, width: 9, height: 12, rx: 2.5 }],
  ['path', { d: 'M9.5 9V3.5h5V9' }],
  ['circle', { cx: 11, cy: 6, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13, cy: 6, r: 0.7, fill: 'currentColor', stroke: 'none' }],
]);
export const IconVoltageRegulator = createIcon('voltage-regulator', [
  ['path', { d: 'M6 10V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 5v5' }],
  ['circle', { cx: 12, cy: 6.75, r: 1.4 }],
  ['rect', { x: 5, y: 10, width: 14, height: 5, rx: 1 }],
  ['path', { d: 'M8.5 21v-6H12v6-6h3.5v6' }],
]);
export const IconWebcam = createIcon('webcam', [
  ['circle', { cx: 12, cy: 10, r: 6.5 }],
  ['circle', { cx: 12, cy: 10, r: 2.5 }],
  ['path', { d: 'M8 20.5h8M12 16.5v4' }],
]);
