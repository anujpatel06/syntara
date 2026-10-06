/** Domain: gaming toys. Style spec: @syntara/icons create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '@syntara/icons';

export const IconArcadeCabinet = createIcon('arcade-cabinet', [
  ['path', { d: 'M7.5 3h9a1 1 0 0 1 1 1v6.5l2 2.5v7.5h-15V13l2-2.5V4a1 1 0 0 1 1-1Z' }],
  ['rect', { x: 9, y: 5.25, width: 6, height: 4.25, rx: 1 }],
  ['path', { d: 'M6.5 13h11' }],
  ['circle', { cx: 9.5, cy: 16.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.5, cy: 16.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconChessKnight = createIcon('chess-knight', [
  ['path', { d: 'M7.5 16.5c0-2.75 1.25-4.5 3.5-6l-2.5 1.25a1.5 1.5 0 0 1-1.85-.45l-.45-.6a1.5 1.5 0 0 1 .15-1.95L10 5.25 10.5 3l2 1.75c3.5.75 5.5 5 5 11.75' }],
  ['rect', { x: 5.5, y: 16.5, width: 13, height: 4, rx: 1.5 }],
  ['circle', { cx: 11, cy: 7.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconChessPawn = createIcon('chess-pawn', [
  ['circle', { cx: 12, cy: 6.25, r: 2.75 }],
  ['path', { d: 'M9 10h6M10.25 10c0 3-1.25 5-2.75 6.75M13.75 10c0 3 1.25 5 2.75 6.75' }],
  ['rect', { x: 5.5, y: 16.75, width: 13, height: 3.75, rx: 1.5 }],
]);
export const IconChessRook = createIcon('chess-rook', [
  ['path', { d: 'M7 4a.5.5 0 0 1 .5-.5h1.5v2h2v-2h2v2h2v-2h1.5a.5.5 0 0 1 .5.5v4.5l-1.5 1.5v6.5h-7V10L7 8.5Z' }],
  ['rect', { x: 5.5, y: 16.5, width: 13, height: 4, rx: 1.5 }],
]);
export const IconClawMachine = createIcon('claw-machine', [
  ['rect', { x: 4.5, y: 2.75, width: 15, height: 18.5, rx: 2.5 }],
  ['path', { d: 'M4.5 14h15' }],
  ['path', { d: 'M12 2.75V7.5M9.25 11.25V9.5a2.75 2 0 0 1 5.5 0v1.75' }],
  ['path', { d: 'M13.5 17.5h3' }],
  ['circle', { cx: 7.5, cy: 12.25, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 12.25, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDice = createIcon('dice', [
  ['rect', { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
  ['circle', { cx: 8.5, cy: 8.5, r: 1.25, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.5, cy: 8.5, r: 1.25, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 8.5, cy: 15.5, r: 1.25, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.5, cy: 15.5, r: 1.25, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDomino = createIcon('domino', [
  ['rect', { x: 7, y: 2.75, width: 10, height: 18.5, rx: 3 }],
  ['path', { d: 'M7 12h10' }],
  ['circle', { cx: 12, cy: 7.4, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9.75, cy: 14.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 16.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 18.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGameCartridge = createIcon('game-cartridge', [
  ['path', { d: 'M6.5 3.5h9l3 3v12.5a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V4.5a1 1 0 0 1 1-1Z' }],
  ['rect', { x: 8, y: 6.5, width: 8, height: 7, rx: 1.25 }],
  ['circle', { cx: 9.5, cy: 17.25, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 17.25, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.5, cy: 17.25, r: 0.7, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGameController = createIcon('game-controller', [
  ['path', { d: 'M7.25 6.5h9.5a4.5 4.5 0 0 1 4.35 3.4l1.1 5.1a2.75 2.75 0 0 1-4.6 2.6l-2.1-2.1h-6.9l-2.1 2.1a2.75 2.75 0 0 1-4.6-2.6l1.1-5.1A4.5 4.5 0 0 1 7.25 6.5Z', transform: 'matrix(.92 0 0 .92 .96 .96)' }],
  ['path', { d: 'M8 9.75v3.5M6.25 11.5h3.5' }],
  ['circle', { cx: 15.5, cy: 10.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 12.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGameGhost = createIcon('game-ghost', [
  ['path', { d: 'M5.5 20V11a6.5 6.5 0 0 1 13 0v9l-2.15-1.5-2.15 1.5-2.2-1.5-2.15 1.5-2.15-1.5Z' }],
  ['circle', { cx: 9.75, cy: 11, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 11, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGamingHeadset = createIcon('gaming-headset', [
  ['path', { d: 'M4.5 13.5V12a7.5 7.5 0 0 1 15 0v1.5' }],
  ['path', { d: 'M5 12.5h0.5a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1 -1.75 1.75h-0.5a1.75 1.75 0 0 1 -1.75 -1.75v-3a1.75 1.75 0 0 1 1.75 -1.75ZM18.5 12.5h0.5a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1 -1.75 1.75h-0.5a1.75 1.75 0 0 1 -1.75 -1.75v-3a1.75 1.75 0 0 1 1.75 -1.75Z' }],
  ['path', { d: 'M5.25 19v.25a1.5 1.5 0 0 0 1.5 1.5h3.5' }],
  ['circle', { cx: 10.75, cy: 20.75, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconHandheldConsole = createIcon('handheld-console', [
  ['rect', { x: 2.5, y: 6, width: 19, height: 12, rx: 4 }],
  ['rect', { x: 7.75, y: 8.5, width: 8.5, height: 7, rx: 1.25 }],
  ['path', { d: 'M5.25 10.75v2.5M4 12h2.5' }],
  ['circle', { cx: 18.25, cy: 10.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.25, cy: 13.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconJoystick = createIcon('joystick', [
  ['path', { d: 'M4 17.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z' }],
  ['path', { d: 'M12 15.5V9.25' }],
  ['circle', { cx: 12, cy: 6.5, r: 2.75 }],
  ['circle', { cx: 16.5, cy: 13.25, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconKite = createIcon('kite', [
  ['path', { d: 'M12 2.75 17.5 9.5 12 16.75 6.5 9.5Z' }],
  ['path', { d: 'M6.5 9.5h11M12 2.75v14' }],
  ['path', { d: 'M12 16.75c-1.5 1.25.5 2.25-.75 3.75' }],
]);
export const IconLeaderboardPodium = createIcon('leaderboard-podium', [
  ['path', { d: 'M3.5 20.5V14a1 1 0 0 1 1-1H9V9.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V15h4.5a1 1 0 0 1 1 1v4.5Z' }],
  ['path', { d: 'M12 2.5l.59 1.44 1.55.11-1.19 1.01.37 1.51L12 5.75l-1.32.82.37-1.51-1.19-1.01 1.55-.11Z' }],
]);
export const IconMarbles = createIcon('marbles', [
  ['circle', { cx: 12, cy: 8, r: 4 }],
  ['circle', { cx: 7.75, cy: 15.75, r: 4 }],
  ['circle', { cx: 16.25, cy: 15.75, r: 4 }],
  ['circle', { cx: 10.75, cy: 6.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6.5, cy: 14.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 14.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMaze = createIcon('maze', [
  ['path', { d: 'M3.5 8V6A2.5 2.5 0 0 1 6 3.5h14.5v10M20.5 17v1a2.5 2.5 0 0 1-2.5 2.5H3.5V11.5' }],
  ['path', { d: 'M7 7v10h6.5M10.5 7H17v6.5M10.5 10.5v3h3' }],
]);
export const IconPinwheel = createIcon('pinwheel', [
  ['path', { d: 'M12 9.5V3c2.5 0 4.5 2 4.5 4.5ZM12 9.5h6.5c0 2.5-2 4.5-4.5 4.5ZM12 9.5V16c-2.5 0-4.5-2-4.5-4.5ZM12 9.5H5.5c0-2.5 2-4.5 4.5-4.5Z' }],
  ['path', { d: 'M12 16v5' }],
]);
export const IconPlayingCards = createIcon('playing-cards', [
  ['rect', { x: 9.5, y: 4, width: 10.5, height: 15.5, rx: 2.5 }],
  ['path', { d: 'M9.5 7 6 7.9a2 2 0 0 0-1.45 2.4l2.3 8.9a2 2 0 0 0 2.4 1.45l.5-.15' }],
  ['path', { d: 'M14.75 14.75c-1.75-1.25-2.75-2.25-2.75-3.4a1.4 1.4 0 0 1 2.75-.4 1.4 1.4 0 0 1 2.75.4c0 1.15-1 2.15-2.75 3.4Z' }],
]);
export const IconPotionBottle = createIcon('potion-bottle', [
  ['path', { d: 'M9.75 3.25h4.5M10.5 3.25v4.5a6.5 6.5 0 1 0 3 0v-4.5' }],
  ['path', { d: 'M5.75 14.25c2-1 4.15-1 6.25 0s4.25 1 6.25 0' }],
  ['circle', { cx: 10.5, cy: 17, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 16.25, r: 0.6, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPuzzlePiece = createIcon('puzzle-piece', [
  ['path', { d: 'M4.5 6.5H9a2 2 0 1 1 4 0h4.5V11a2 2 0 1 1 0 4v4.5H13a2 2 0 1 0-4 0H4.5V15a2 2 0 1 0 0-4Z' }],
]);
export const IconRubberDuck = createIcon('rubber-duck', [
  ['circle', { cx: 9.5, cy: 7.5, r: 3.25 }],
  ['path', { d: 'M12 10c0 1-.25 1.75-.75 2.25 2.75.25 5.75-.25 8.25-2.25.75 3 .5 5.5-1 7.25-1.5 1.75-4 2.25-6.75 2.25C7 19.5 4.25 17.5 4.25 14.5c0-1.5.75-2.25 2-2.25.75 0 1.5.25 2.5.25' }],
  ['path', { d: 'M6.4 7 3.75 7.75l2.5.9' }],
  ['circle', { cx: 9.75, cy: 6.75, r: 0.75, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSpinningTop = createIcon('spinning-top', [
  ['path', { d: 'M12 3.5v3' }],
  ['path', { d: 'M5 11c0-2.5 3.1-4.5 7-4.5s7 2 7 4.5c0 3-4 6.5-7 9.5-3-3-7-6.5-7-9.5Z' }],
  ['path', { d: 'M5.25 12.25c2 1 4.35 1.5 6.75 1.5s4.75-.5 6.75-1.5' }],
]);
export const IconStackingRings = createIcon('stacking-rings', [
  ['path', { d: 'M7.5 15.5h9a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-9a2 2 0 0 1 -2 -2v0a2 2 0 0 1 2 -2ZM9 11.5h6a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v0a2 2 0 0 1 2 -2ZM10.5 7.5h3a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2v0a2 2 0 0 1 2 -2Z' }],
  ['circle', { cx: 12, cy: 5.25, r: 2 }],
  ['path', { d: 'M4 20.75h16' }],
]);
export const IconTeddyBear = createIcon('teddy-bear', [
  ['circle', { cx: 12, cy: 9, r: 4.5 }],
  ['path', { d: 'M7.93 7.07A2 2 0 1 1 9.6 5.19M14.4 5.19A2 2 0 1 1 16.07 7.07' }],
  ['path', { d: 'M8.25 14c-1.75 1-2.75 2.5-2.75 4a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5c0-1.5-1-3-2.75-4' }],
  ['circle', { cx: 10.25, cy: 8.5, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 8.5, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 10.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTicTacToe = createIcon('tic-tac-toe', [
  ['path', { d: 'M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17' }],
  ['rect', { x: 10, y: 11.3, width: 4, height: 1.4, rx: 0.7, fill: 'currentColor', stroke: 'none', transform: 'rotate(45 12 12)' }],
  ['rect', { x: 10, y: 11.3, width: 4, height: 1.4, rx: 0.7, fill: 'currentColor', stroke: 'none', transform: 'rotate(-45 12 12)' }],
  ['circle', { cx: 18, cy: 18, r: 1.5 }],
]);
export const IconToyBlocks = createIcon('toy-blocks', [
  ['rect', { x: 8, y: 3.5, width: 8, height: 8, rx: 1.75 }],
  ['rect', { x: 3.5, y: 12.5, width: 8, height: 8, rx: 1.75 }],
  ['rect', { x: 12.5, y: 12.5, width: 8, height: 8, rx: 1.75 }],
]);
export const IconToyBrick = createIcon('toy-brick', [
  ['rect', { x: 3, y: 9, width: 18, height: 10, rx: 2.5 }],
  ['path', { d: 'M6 9V7.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V9M13 9V7.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V9' }],
]);
export const IconTreasureChest = createIcon('treasure-chest', [
  ['path', { d: 'M3.5 11V9A4.5 4.5 0 0 1 8 4.5h8A4.5 4.5 0 0 1 20.5 9v2' }],
  ['rect', { x: 3.5, y: 11, width: 17, height: 9, rx: 2 }],
  ['rect', { x: 10.5, y: 9.5, width: 3, height: 4, rx: 1 }],
]);
export const IconVrHeadset = createIcon('vr-headset', [
  ['path', { d: 'M4.5 9h15a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-1.6-.8l-1.2-1.6a1.5 1.5 0 0 0-2.4 0l-1.2 1.6a2 2 0 0 1-1.6.8H4.5a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z' }],
  ['path', { d: 'M4 9c.75-3 4-5 8-5s7.25 2 8 5' }],
]);
