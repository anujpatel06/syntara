/** Domain: telecom networking. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconBandwidthGauge = createIcon('bandwidth-gauge', [
  ['path', { d: 'M4 17a8 8 0 1 1 16 0' }],
  ['path', { d: 'M12 17l4-5' }],
  ['circle', { cx: 12, cy: 17, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCallCenterHeadset = createIcon('call-center-headset', [
  ['path', { d: 'M5 13v-1a7 7 0 0 1 14 0v1' }],
  ['rect', { x: 3.5, y: 12, width: 3.5, height: 6, rx: 1.75 }],
  ['rect', { x: 17, y: 12, width: 3.5, height: 6, rx: 1.75 }],
  ['path', { d: 'M18.75 18c0 1.75-1.25 3-3.25 3h-2.5' }],
]);
export const IconCellTower = createIcon('cell-tower', [
  ['path', { d: 'M8 21l4-11.5L16 21' }],
  ['path', { d: 'M9.5 5.5a3.5 3.5 0 0 0 0 5M14.5 5.5a3.5 3.5 0 0 1 0 5M7 3.5a6.5 6.5 0 0 0 0 9M17 3.5a6.5 6.5 0 0 1 0 9' }],
  ['circle', { cx: 12, cy: 8, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCoaxConnector = createIcon('coax-connector', [
  ['path', { d: 'M2.5 12H6' }],
  ['path', { d: 'M8 7.5h4.5l2 4.5-2 4.5H8L6 12Z' }],
  ['rect', { x: 14.5, y: 9.5, width: 3.5, height: 5, rx: 1 }],
  ['path', { d: 'M18 12h3.5' }],
]);
export const IconDeskPhone = createIcon('desk-phone', [
  ['rect', { x: 3, y: 4, width: 18, height: 16, rx: 3 }],
  ['rect', { x: 6, y: 6.5, width: 4, height: 11, rx: 2 }],
  ['rect', { x: 12.5, y: 6.5, width: 5.5, height: 3, rx: 1 }],
  ['circle', { cx: 13.5, cy: 13, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 13, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 16.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 16.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconEthernetPort = createIcon('ethernet-port', [
  ['path', { d: 'M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H15v2.5H9v-2.5H6.5a2 2 0 0 1-2-2Z' }],
  ['path', { d: 'M9 8v3M12 8v3M15 8v3' }],
]);
export const IconFaxMachine = createIcon('fax-machine', [
  ['rect', { x: 3, y: 10, width: 18, height: 10.5, rx: 3 }],
  ['path', { d: 'M7 10V3.5h7.5L17 6v4' }],
  ['rect', { x: 5.5, y: 12.5, width: 3, height: 5.5, rx: 1.5 }],
  ['circle', { cx: 13, cy: 14, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 14, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13, cy: 17.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 17.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFiberOptic = createIcon('fiber-optic', [
  ['rect', { x: 9.75, y: 15, width: 4.5, height: 6.5, rx: 1.5 }],
  ['path', { d: 'M12 15V6' }],
  ['path', { d: 'M11 15c0-4-2.5-6.5-6-8.5M13 15c0-4 2.5-6.5 6-8.5' }],
  ['circle', { cx: 12, cy: 4.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 4.5, cy: 6, r: 1.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 6, r: 1.6, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFirewall = createIcon('firewall', [
  ['rect', { x: 3, y: 5, width: 18, height: 14, rx: 2.5 }],
  ['path', { d: 'M3 9.67h18M3 14.33h18' }],
  ['path', { d: 'M9 5v4.67M15 9.67v4.66' }],
]);
export const IconFlipPhone = createIcon('flip-phone', [
  ['rect', { x: 7, y: 2.75, width: 10, height: 8.5, rx: 2.5 }],
  ['rect', { x: 6.5, y: 12.25, width: 11, height: 9, rx: 2.5 }],
  ['rect', { x: 9.25, y: 5, width: 5.5, height: 4, rx: 1 }],
  ['circle', { cx: 10.25, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.25, cy: 18.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 18.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMeshNetwork = createIcon('mesh-network', [
  ['path', { d: 'M12 4.5 19.5 12 12 19.5 4.5 12ZM12 4.5v15M4.5 12h15' }],
  ['circle', { cx: 12, cy: 4.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 12, r: 1.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 19.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 4.5, cy: 12, r: 1.6, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMobileSignal = createIcon('mobile-signal', [
  ['rect', { x: 3.5, y: 4, width: 9, height: 16, rx: 2.5 }],
  ['path', { d: 'M16 15v2M18.5 12v5M21 9v8' }],
]);
export const IconModem = createIcon('modem', [
  ['rect', { x: 7, y: 3, width: 10, height: 18, rx: 3 }],
  ['circle', { cx: 12, cy: 7, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 10, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 13, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M10 17.5h4' }],
]);
export const IconNetworkRouter = createIcon('network-router', [
  ['rect', { x: 3, y: 12.5, width: 18, height: 7.5, rx: 2.5 }],
  ['path', { d: 'M7 12.5 5.5 5.5M17 12.5l1.5-7' }],
  ['circle', { cx: 7, cy: 16.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 16.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconNetworkSwitch = createIcon('network-switch', [
  ['rect', { x: 2.5, y: 7.5, width: 19, height: 9, rx: 2.5 }],
  ['rect', { x: 5.2, y: 11, width: 2.2, height: 2, rx: 0.4, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 9, y: 11, width: 2.2, height: 2, rx: 0.4, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 12.8, y: 11, width: 2.2, height: 2, rx: 0.4, fill: 'currentColor', stroke: 'none' }],
  ['rect', { x: 16.6, y: 11, width: 2.2, height: 2, rx: 0.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconNetworkTopology = createIcon('network-topology', [
  ['rect', { x: 9, y: 3, width: 6, height: 5, rx: 1.5 }],
  ['rect', { x: 3, y: 16, width: 6, height: 5, rx: 1.5 }],
  ['rect', { x: 15, y: 16, width: 6, height: 5, rx: 1.5 }],
  ['path', { d: 'M12 8v4M6 16v-4h12v4' }],
]);
export const IconNfc = createIcon('nfc', [
  ['rect', { x: 4, y: 3.5, width: 9, height: 17, rx: 2.5 }],
  ['path', { d: 'M16 9a4 4 0 0 1 0 6M18.75 6.5a7.5 7.5 0 0 1 0 11' }],
]);
export const IconPager = createIcon('pager', [
  ['rect', { x: 3.5, y: 7, width: 17, height: 10, rx: 3 }],
  ['rect', { x: 6.5, y: 9.5, width: 8, height: 5, rx: 1.5 }],
  ['circle', { cx: 17.5, cy: 12, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRadio = createIcon('radio', [
  ['rect', { x: 3, y: 8, width: 18, height: 12.5, rx: 3 }],
  ['circle', { cx: 9, cy: 14.25, r: 3 }],
  ['path', { d: 'M14.5 12.5h3M14.5 16h3' }],
  ['path', { d: 'M6 8l9-4.5' }],
]);
export const IconRingNetwork = createIcon('ring-network', [
  ['circle', { cx: 12, cy: 12, r: 7.5 }],
  ['circle', { cx: 12, cy: 4.5, r: 1.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 12, r: 1.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 19.5, r: 1.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 4.5, cy: 12, r: 1.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRj45Plug = createIcon('rj45-plug', [
  ['path', { d: 'M7 4.5h10v8.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z' }],
  ['path', { d: 'M10 4.5v3M12 4.5v3M14 4.5v3' }],
  ['path', { d: 'M12 15v6.5' }],
]);
export const IconSatellite = createIcon('satellite', [
  ['circle', { cx: 12, cy: 12, r: 2.75, transform: 'rotate(-45 12 12)' }],
  ['rect', { x: 3.5, y: 7.5, width: 4.5, height: 9, rx: 1, transform: 'rotate(-45 12 12)' }],
  ['rect', { x: 16, y: 7.5, width: 4.5, height: 9, rx: 1, transform: 'rotate(-45 12 12)' }],
  ['path', { d: 'M8 12h1.25M14.75 12H16', transform: 'rotate(-45 12 12)' }],
]);
export const IconSatelliteDish = createIcon('satellite-dish', [
  ['path', { d: 'M4.5 8.5a8 8 0 0 0 11 11Z' }],
  ['path', { d: 'M10 14l4.5-4.5' }],
  ['circle', { cx: 15, cy: 9, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M7.5 17.5 6 21h5' }],
]);
export const IconSignalStrength = createIcon('signal-strength', [
  ['path', { d: 'M5 19v-2M9.5 19v-5M14 19v-8.5M18.5 19V5' }],
]);
export const IconSimCard = createIcon('sim-card', [
  ['path', { d: 'M8 3h6.5l4 4v11.5a2.5 2.5 0 0 1-2.5 2.5H8a2.5 2.5 0 0 1-2.5-2.5v-13A2.5 2.5 0 0 1 8 3Z' }],
  ['rect', { x: 8.5, y: 10.5, width: 7, height: 7, rx: 1.5 }],
]);
export const IconStarNetwork = createIcon('star-network', [
  ['circle', { cx: 12, cy: 12, r: 3 }],
  ['path', { d: 'M9.9 9.9 6 6M14.1 9.9 18 6M9.9 14.1 6 18M14.1 14.1 18 18' }],
  ['circle', { cx: 5.5, cy: 5.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18.5, cy: 5.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 5.5, cy: 18.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18.5, cy: 18.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTelephonePole = createIcon('telephone-pole', [
  ['path', { d: 'M12 3v18M6 6.5h12M7.5 10.5h9' }],
  ['circle', { cx: 7, cy: 5.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 5.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9, cy: 9.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 9.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconVoicemail = createIcon('voicemail', [
  ['circle', { cx: 7, cy: 13, r: 3.5 }],
  ['circle', { cx: 17, cy: 13, r: 3.5 }],
  ['path', { d: 'M7 16.5h10' }],
]);
export const IconWirelessAccessPoint = createIcon('wireless-access-point', [
  ['rect', { x: 4, y: 15.5, width: 16, height: 5, rx: 2.5 }],
  ['path', { d: 'M8.5 11a5 5 0 0 1 7 0M6 8a8.5 8.5 0 0 1 12 0' }],
  ['circle', { cx: 12, cy: 13, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconYagiAntenna = createIcon('yagi-antenna', [
  ['path', { d: 'M3 8h18' }],
  ['path', { d: 'M12 8v13' }],
  ['path', { d: 'M5 4v8M9.5 5v6M16.5 6v4' }],
]);
