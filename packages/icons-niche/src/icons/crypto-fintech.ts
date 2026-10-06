/** Domain: crypto fintech. Style spec: @syntara/icons create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '@syntara/icons';

export const IconBlockExplorer = createIcon('block-explorer', [
  ['circle', { cx: 10.5, cy: 10.5, r: 7 }],
  ['path', { d: 'M15.5 15.5l5.25 5.25' }],
  ['path', { d: 'M10.50 7.00L13.53 8.75L13.53 12.25L10.50 14.00L7.47 12.25L7.47 8.75Z' }],
]);
export const IconBlockchain = createIcon('blockchain', [
  ['path', { d: 'M7.00 2.50L10.90 4.75L10.90 9.25L7.00 11.50L3.10 9.25L3.10 4.75Z' }],
  ['path', { d: 'M3.1 4.75 7 7l3.9-2.25' }],
  ['path', { d: 'M17.00 12.50L20.90 14.75L20.90 19.25L17.00 21.50L13.10 19.25L13.10 14.75Z' }],
  ['path', { d: 'M13.1 14.75 17 17l3.9-2.25M10.9 9.25l2.2 2.2' }],
]);
export const IconCryptoChain = createIcon('crypto-chain', [
  ['rect', { x: 3.5, y: 9, width: 11, height: 6, rx: 3, transform: 'rotate(-45 9 12)' }],
  ['rect', { x: 9.5, y: 9, width: 11, height: 6, rx: 3, transform: 'rotate(-45 15 12)' }],
]);
export const IconCryptoToken = createIcon('crypto-token', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M12.00 7.50L15.90 9.75L15.90 14.25L12.00 16.50L8.10 14.25L8.10 9.75Z' }],
]);
export const IconCryptoWallet = createIcon('crypto-wallet', [
  ['path', { d: 'M18 7.75v-2.5A2.25 2.25 0 0 0 15.75 3H5.5a2.5 2.5 0 0 0 0 5H18.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13' }],
  ['path', { d: 'M21 12.5h-3.25a2 2 0 0 0 0 4H21' }],
  ['path', { d: 'M10.00 11.25L12.60 12.75L12.60 15.75L10.00 17.25L7.40 15.75L7.40 12.75Z' }],
]);
export const IconDecentralizedNetwork = createIcon('decentralized-network', [
  ['path', { d: 'M5 7.5 17 4.5 19.5 16 7 19.5Z' }],
  ['path', { d: 'M5 7.5 19.5 16M17 4.5 7 19.5' }],
  ['circle', { cx: 5, cy: 7.5, r: 1.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 4.5, r: 1.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 16, r: 1.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7, cy: 19.5, r: 1.7, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGasFee = createIcon('gas-fee', [
  ['rect', { x: 4, y: 3, width: 9.5, height: 18, rx: 2 }],
  ['path', { d: 'M6.75 6h4v4h-4Z' }],
  ['path', { d: 'M13.5 11h2a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 0 3 0V8.5L17.5 6' }],
]);
export const IconHardwareWallet = createIcon('hardware-wallet', [
  ['rect', { x: 6.5, y: 8, width: 11, height: 13, rx: 2.5 }],
  ['path', { d: 'M9.5 8V3.25h5V8' }],
  ['path', { d: 'M12.00 11.50L14.60 13.00L14.60 16.00L12.00 17.50L9.40 16.00L9.40 13.00Z' }],
]);
export const IconMiningRig = createIcon('mining-rig', [
  ['rect', { x: 2.75, y: 5.5, width: 18.5, height: 11.5, rx: 2.5 }],
  ['circle', { cx: 9, cy: 11.25, r: 3.25 }],
  ['path', { d: 'M15.5 9v4.5' }],
  ['path', { d: 'M6 17v3h7v-3' }],
  ['circle', { cx: 9, cy: 11.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconNftArtwork = createIcon('nft-artwork', [
  ['path', { d: 'M12.00 2.75L20.01 7.37L20.01 16.63L12.00 21.25L3.99 16.63L3.99 7.37Z' }],
  ['path', { d: 'M7 15.25l3-3.5 2.25 2.25 1.75-1.75L17 15.25' }],
  ['circle', { cx: 14.25, cy: 8.75, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPrivateKey = createIcon('private-key', [
  ['path', { d: 'M7.50 7.50L11.40 9.75L11.40 14.25L7.50 16.50L3.60 14.25L3.60 9.75Z' }],
  ['path', { d: 'M11.4 12h9.6v3.25M17.25 12v2.5' }],
  ['circle', { cx: 7.5, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSeedPhrase = createIcon('seed-phrase', [
  ['rect', { x: 4.25, y: 2.75, width: 15.5, height: 18.5, rx: 2.5 }],
  ['path', { d: 'M10.5 8h5.5M10.5 12h5.5M10.5 16h5.5' }],
  ['circle', { cx: 7.75, cy: 8, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.75, cy: 12, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.75, cy: 16, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSmartContract = createIcon('smart-contract', [
  ['path', { d: 'M14 3H7.5A2.5 2.5 0 0 0 5 5.5v13A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V8Z' }],
  ['path', { d: 'M14 3v3.5A1.5 1.5 0 0 0 15.5 8H19' }],
  ['path', { d: 'M10 12 8 14l2 2M14 12l2 2-2 2' }],
]);
export const IconTokenAirdrop = createIcon('token-airdrop', [
  ['path', { d: 'M4 10a8 8 0 0 1 16 0 2.67 2.67 0 0 0-5.33 0 2.67 2.67 0 0 0-5.34 0A2.67 2.67 0 0 0 4 10Z' }],
  ['path', { d: 'M4 10l5.75 6.25M20 10l-5.75 6.25' }],
  ['circle', { cx: 12, cy: 18.25, r: 3 }],
  ['circle', { cx: 12, cy: 18.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTokenSwap = createIcon('token-swap', [
  ['circle', { cx: 7.5, cy: 7.5, r: 4.25 }],
  ['circle', { cx: 16.5, cy: 16.5, r: 4.25 }],
  ['path', { d: 'M13.5 4.75h3a3 3 0 0 1 3 3V10' }],
  ['path', { d: 'M17.25 7.75 19.5 10l2.25-2.25' }],
]);
