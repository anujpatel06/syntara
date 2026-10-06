/** Domain: sports fitness. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAbWheel = createIcon('ab-wheel', [
  ['circle', { cx: 12, cy: 12, r: 5.5 }],
  ['path', { d: 'M3 12h3.5M17.5 12H21' }],
  ['circle', { cx: 12, cy: 12, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconAerobicStep = createIcon('aerobic-step', [
  ['path', { d: 'M3.5 20 5 15.5a2 2 0 0 1 1.9-1.5h10.2a2 2 0 0 1 1.9 1.5L20.5 20Z' }],
  ['path', { d: 'M7 10.5c1.25-3 3.5-4.75 7-5' }],
  ['path', { d: 'M12 3.75l2 1.75-1.75 2' }],
]);
export const IconAmericanFootball = createIcon('american-football', [
  ['ellipse', { cx: 12, cy: 12, rx: 9, ry: 5.25, transform: 'rotate(-45 12 12)' }],
  ['path', { d: 'M9.5 14.5l5-5' }],
  ['path', { d: 'M10.25 11.75l2 2M11.75 10.25l2 2' }],
]);
export const IconArcheryTarget = createIcon('archery-target', [
  ['circle', { cx: 12, cy: 10, r: 7 }],
  ['circle', { cx: 12, cy: 10, r: 3.5 }],
  ['circle', { cx: 12, cy: 10, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M8 16l-2.25 5M16 16l2.25 5' }],
]);
export const IconAwardRosette = createIcon('award-rosette', [
  ['path', { d: 'M17 9Q18.18 11.01 16.05 11.94Q15.82 14.26 13.55 13.76Q12 15.5 10.45 13.76Q8.18 14.26 7.95 11.94Q5.82 11.01 7 9Q5.82 6.99 7.95 6.06Q8.18 3.74 10.45 4.24Q12 2.5 13.55 4.24Q15.82 3.74 16.05 6.06Q18.18 6.99 17 9Z' }],
  ['path', { d: 'M9.25 13.5 8 20.5l2.25-1.25L12 20.5l1.75-1.25L16 20.5l-1.25-7' }],
  ['circle', { cx: 12, cy: 9, r: 2.25 }],
]);
export const IconBarbell = createIcon('barbell', [
  ['path', { d: 'M2.75 12h18.5' }],
  ['rect', { x: 5, y: 6.5, width: 3, height: 11, rx: 1.5 }],
  ['rect', { x: 16, y: 6.5, width: 3, height: 11, rx: 1.5 }],
]);
export const IconBaseballBat = createIcon('baseball-bat', [
  ['path', { d: 'M13.75 5.25a3 3 0 0 1 4.25 4.25L9.5 17 7 14.5Z' }],
  ['path', { d: 'M7.75 16.25 4.5 19.5' }],
  ['circle', { cx: 17.5, cy: 17.5, r: 2.5 }],
]);
export const IconBasketball = createIcon('basketball', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M12 3.25v17.5M3.25 12h17.5' }],
  ['path', { d: 'M6 5.5c2.5 2 3.5 4 3.5 6.5S8.5 16.5 6 18.5M18 5.5c-2.5 2-3.5 4-3.5 6.5s1 4.5 3.5 6.5' }],
]);
export const IconBasketballHoop = createIcon('basketball-hoop', [
  ['rect', { x: 4, y: 3, width: 16, height: 10, rx: 2.5 }],
  ['path', { d: 'M7.5 13h9' }],
  ['path', { d: 'M8.5 13l1 6.5h5l1-6.5M10 16.5h4' }],
]);
export const IconBathroomScale = createIcon('bathroom-scale', [
  ['rect', { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4.5 }],
  ['path', { d: 'M8 10a4 4 0 0 1 8 0' }],
  ['path', { d: 'M12 10l1.5-2' }],
]);
export const IconBowling = createIcon('bowling', [
  ['path', { d: 'M16 3.25c1.25 0 2 1 2 2.25 0 1.25-.75 2-.75 3 0 1.5 2 3.5 2 6.5 0 2.5-1 4.5-1.5 5.5h-3.5c-.5-1-1.5-3-1.5-5.5 0-3 2-5 2-6.5 0-1-.75-1.75-.75-3 0-1.25.75-2.25 2-2.25Z' }],
  ['circle', { cx: 8, cy: 15.25, r: 5.25 }],
  ['circle', { cx: 6.75, cy: 13.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9.25, cy: 13.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBoxingGlove = createIcon('boxing-glove', [
  ['path', { d: 'M7 15V8.5A5.5 5.5 0 0 1 12.5 3h.5a5.5 5.5 0 0 1 5.5 5.5V13a2.5 2.5 0 0 1-2.5 2.5H7' }],
  ['path', { d: 'M7 10c-1.75 0-3 1.25-3 2.75S5.25 15.5 7 15.5' }],
  ['rect', { x: 7, y: 15.5, width: 10.5, height: 5, rx: 1.75 }],
]);
export const IconBoxingRing = createIcon('boxing-ring', [
  ['path', { d: 'M3 9h18M3 13h18M3 17h18' }],
  ['path', { d: 'M4.5 6v14.5M19.5 6v14.5' }],
]);
export const IconCarabiner = createIcon('carabiner', [
  ['path', { d: 'M7 15a5 5 0 0 0 10 0V7.5a3 3 0 0 0-3-3h-4a2 2 0 0 0-2 2v1.5', transform: 'rotate(30 12 12)' }],
  ['path', { d: 'M7 15 10 9.25', transform: 'rotate(30 12 12)' }],
]);
export const IconCricketBat = createIcon('cricket-bat', [
  ['rect', { x: 9.25, y: 9, width: 5.5, height: 12, rx: 2.5, transform: 'rotate(40 12 12)' }],
  ['path', { d: 'M12 9V3.25', transform: 'rotate(40 12 12)' }],
  ['circle', { cx: 6, cy: 6.5, r: 2 }],
]);
export const IconCricketStumps = createIcon('cricket-stumps', [
  ['path', { d: 'M7 20.5V7M12 20.5V7M17 20.5V7' }],
  ['path', { d: 'M6.5 4.5h5M12.5 4.5h5' }],
]);
export const IconCurlingStone = createIcon('curling-stone', [
  ['path', { d: 'M6 11.5a6 4 0 0 1 12 0' }],
  ['path', { d: 'M10 7.5V6a1.5 1.5 0 0 1 1.5-1.5h6' }],
  ['path', { d: 'M4 14a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 14v3.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5Z' }],
  ['path', { d: 'M4 15.75h16' }],
]);
export const IconCyclingHelmet = createIcon('cycling-helmet', [
  ['path', { d: 'M3.5 15c0-5 4-9 9-9 4.5 0 8 3.25 8 7.5V15Z' }],
  ['path', { d: 'M9 7.25l1.5 3.5M13.75 6.25v4.25' }],
  ['path', { d: 'M3.5 15c0 1.5 1 2.5 2.5 2.5' }],
]);
export const IconExerciseBall = createIcon('exercise-ball', [
  ['path', { d: 'M7.5 19.25A8.25 8 0 1 1 16.5 19.25Z' }],
  ['path', { d: 'M3.9 11.5c3.5 2 12.7 2 16.2 0' }],
  ['path', { d: 'M3.5 19.25h17' }],
]);
export const IconFishingRod = createIcon('fishing-rod', [
  ['path', { d: 'M4 20.5 18 3.5' }],
  ['path', { d: 'M18 3.5 20 6v9' }],
  ['path', { d: 'M20 15a1.5 1.5 0 1 1-1.5 1.5' }],
  ['circle', { cx: 7.5, cy: 14.5, r: 1.75 }],
]);
export const IconFitnessBand = createIcon('fitness-band', [
  ['path', { d: 'M9 3.5h6v17H9Z' }],
  ['rect', { x: 7.5, y: 8, width: 9, height: 8, rx: 2.5 }],
]);
export const IconFlyingDisc = createIcon('flying-disc', [
  ['ellipse', { cx: 13.5, cy: 9.5, rx: 7.5, ry: 3 }],
  ['path', { d: 'M6 9.5v1.25c0 1.75 3.25 3.25 7.5 3.25S21 12.5 21 10.75V9.5' }],
  ['path', { d: 'M2.75 16h4.5M4.5 19h5' }],
]);
export const IconFootballGoal = createIcon('football-goal', [
  ['path', { d: 'M3 19.5V5.5h18v14' }],
  ['path', { d: 'M3 5.5l3 3.5v10.5M21 5.5 18 9v10.5M6 9h12' }],
]);
export const IconFootballPitch = createIcon('football-pitch', [
  ['rect', { x: 2.5, y: 4.5, width: 19, height: 15, rx: 2.5 }],
  ['path', { d: 'M12 4.5v15' }],
  ['circle', { cx: 12, cy: 12, r: 2.75 }],
]);
export const IconGolfBag = createIcon('golf-bag', [
  ['rect', { x: 7, y: 8.5, width: 10, height: 12, rx: 3 }],
  ['path', { d: 'M9.5 8.5V4.5M12.5 8.5V3.5M15 8.5V5' }],
  ['path', { d: 'M7 12.5h10' }],
]);
export const IconGolfClub = createIcon('golf-club', [
  ['path', { d: 'M17 3 9.5 17.5' }],
  ['path', { d: 'M9.75 17l-.75 1.75A2 2 0 0 1 7.15 20H4.5a1.5 1.5 0 0 1 0-3h5.25' }],
  ['circle', { cx: 17, cy: 18.5, r: 1.6, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGolfTee = createIcon('golf-tee', [
  ['circle', { cx: 12, cy: 8, r: 4.75 }],
  ['path', { d: 'M7.5 14h9l-3.25 2.5v4h-2.5v-4Z' }],
]);
export const IconGymBag = createIcon('gym-bag', [
  ['path', { d: 'M3 11a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z' }],
  ['path', { d: 'M8.5 8a3.5 3.5 0 0 1 7 0' }],
  ['path', { d: 'M7 12h10' }],
]);
export const IconGymLocker = createIcon('gym-locker', [
  ['rect', { x: 5, y: 2.5, width: 14, height: 19, rx: 2.5 }],
  ['path', { d: 'M8.5 6h7M8.5 8.5h7' }],
  ['circle', { cx: 15.5, cy: 13, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconGymnasticsRings = createIcon('gymnastics-rings', [
  ['path', { d: 'M8 3v9M16 3v9' }],
  ['circle', { cx: 8, cy: 15.5, r: 3.5 }],
  ['circle', { cx: 16, cy: 15.5, r: 3.5 }],
]);
export const IconHalfPipe = createIcon('half-pipe', [
  ['path', { d: 'M2.75 20V6.5h2.5v1c0 5.25 3 8.5 6.75 8.5s6.75-3.25 6.75-8.5v-1h2.5V20Z' }],
]);
export const IconHockeyStick = createIcon('hockey-stick', [
  ['path', { d: 'M15.5 3 8.75 18.75a2 2 0 0 1-1.85 1.25H3.5' }],
  ['rect', { x: 13.5, y: 17, width: 7, height: 3, rx: 1.5 }],
]);
export const IconHurdle = createIcon('hurdle', [
  ['rect', { x: 3.5, y: 6.5, width: 17, height: 4, rx: 1.5 }],
  ['path', { d: 'M5.5 10.5v10M18.5 10.5v10M3 20.5h5M16 20.5h5' }],
]);
export const IconIceHockeyPuck = createIcon('ice-hockey-puck', [
  ['ellipse', { cx: 13.5, cy: 10.5, rx: 7.5, ry: 3 }],
  ['path', { d: 'M6 10.5v3.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-3.5' }],
  ['path', { d: 'M2.75 18.5h4.5M2.75 21h8' }],
]);
export const IconIceSkate = createIcon('ice-skate', [
  ['path', { d: 'M6 3.5h5v6l5.5 2.5a2.5 2.5 0 0 1 1.5 2.25V16.5H6Z' }],
  ['path', { d: 'M4.5 20h13.5a2 2 0 0 0 2-2' }],
  ['path', { d: 'M8 16.5V20M15 16.5V20' }],
]);
export const IconJumpRope = createIcon('jump-rope', [
  ['rect', { x: 3.5, y: 3, width: 3, height: 7, rx: 1.5 }],
  ['rect', { x: 17.5, y: 3, width: 3, height: 7, rx: 1.5 }],
  ['path', { d: 'M5 10c0 7 3 10.5 7 10.5S19 17 19 10' }],
]);
export const IconKayak = createIcon('kayak', [
  ['path', { d: 'M2.5 13c3-2 15-2 19 0-4 2-16 2-19 0Z' }],
  ['path', { d: 'M6.5 18.5l11-11M17.5 7.5c.5-2 2-3.5 3.5-3.5 0 1.5-1.5 3-3.5 3.5ZM6.5 18.5c-.5 2-2 3.5-3.5 3.5 0-1.5 1.5-3 3.5-3.5Z' }],
]);
export const IconKettlebell = createIcon('kettlebell', [
  ['path', { d: 'M8 10.5 7.5 7a3 3 0 0 1 3-3.5h3a3 3 0 0 1 3 3.5l-.5 3.5' }],
  ['path', { d: 'M12 8.5a6 6 0 0 1 5.5 8.5l-.75 2a2 2 0 0 1-1.85 1.5H9.1a2 2 0 0 1-1.85-1.5l-.75-2A6 6 0 0 1 12 8.5Z' }],
]);
export const IconKickScooter = createIcon('kick-scooter', [
  ['path', { d: 'M6.5 18h9.5' }],
  ['path', { d: 'M16 18l2.5-13.5h-2M18.5 4.5h2' }],
  ['circle', { cx: 4.5, cy: 18.5, r: 2 }],
  ['circle', { cx: 18.5, cy: 18.5, r: 2 }],
]);
export const IconLaurelWreath = createIcon('laurel-wreath', [
  ['path', { d: 'M10.5 20.5C6.5 19.5 4.25 15.5 4.25 11.5c0-2.5.75-4.5 2-6M13.5 20.5c4-1 6.25-5 6.25-9 0-2.5-.75-4.5-2-6' }],
  ['path', { d: 'M4.6 9.5Q5.1 7.5 3.25 6.6Q2.74 8.6 4.6 9.5ZM5.1 13.75Q4.36 11.82 2.33 12.15Q3.06 14.08 5.1 13.75ZM7.25 17.25Q5.9 15.69 4.1 16.69Q5.44 18.25 7.25 17.25ZM19.4 9.5Q21.26 8.6 20.75 6.6Q18.9 7.5 19.4 9.5ZM18.9 13.75Q20.94 14.08 21.67 12.15Q19.64 11.82 18.9 13.75ZM16.75 17.25Q18.56 18.25 19.9 16.69Q18.1 15.69 16.75 17.25Z', fill: 'currentColor' }],
]);
export const IconMartialArtsBelt = createIcon('martial-arts-belt', [
  ['path', { d: 'M3 9.5h7M14 9.5h7' }],
  ['rect', { x: 10, y: 7.5, width: 4, height: 4, rx: 1.5 }],
  ['path', { d: 'M10.5 11.5l-3 7.5 2.25.75 2.25-8M13.5 11.5l3 7.5-2.25.75-2.25-8' }],
]);
export const IconMedal = createIcon('medal', [
  ['path', { d: 'M8 3l2.75 7.5M16 3l-2.75 7.5' }],
  ['circle', { cx: 12, cy: 15, r: 5.25 }],
  ['path', { d: 'M11.25 13.5l.75-.5v4' }],
]);
export const IconPenaltyCard = createIcon('penalty-card', [
  ['rect', { x: 4, y: 5, width: 9, height: 13, rx: 2, transform: 'rotate(-10 8.5 11.5)' }],
  ['rect', { x: 11, y: 6, width: 9, height: 13, rx: 2, transform: 'rotate(10 15.5 12.5)' }],
]);
export const IconPodium = createIcon('podium', [
  ['path', { d: 'M3 20.5v-6h6v6M9 20.5V10h6v10.5M15 20.5v-8h6v8M2.5 20.5h19' }],
  ['circle', { cx: 12, cy: 6.5, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPommelHorse = createIcon('pommel-horse', [
  ['rect', { x: 2.75, y: 8, width: 18.5, height: 5, rx: 2.5 }],
  ['path', { d: 'M8.5 8V6.5a1.5 1.5 0 0 1 3 0V8M12.5 8V6.5a1.5 1.5 0 0 1 3 0V8' }],
  ['path', { d: 'M6.5 13 5 20.5M17.5 13l1.5 7.5' }],
]);
export const IconProteinShaker = createIcon('protein-shaker', [
  ['path', { d: 'M6.5 9h11l-1.25 10.25a1.5 1.5 0 0 1-1.5 1.25h-5.5a1.5 1.5 0 0 1-1.5-1.25Z' }],
  ['rect', { x: 6, y: 6, width: 12, height: 3, rx: 1.25 }],
  ['path', { d: 'M9.5 6V4h3v2' }],
]);
export const IconPunchingBag = createIcon('punching-bag', [
  ['path', { d: 'M12 2.75V5' }],
  ['rect', { x: 7, y: 5, width: 10, height: 15.5, rx: 4.5 }],
  ['path', { d: 'M7 9h10' }],
]);
export const IconRaceBib = createIcon('race-bib', [
  ['rect', { x: 4, y: 5, width: 16, height: 14, rx: 3 }],
  ['path', { d: 'M11 10.25l1.5-1v6' }],
  ['circle', { cx: 6.75, cy: 7.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.25, cy: 7.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6.75, cy: 16.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.25, cy: 16.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRollerSkate = createIcon('roller-skate', [
  ['path', { d: 'M5 3.5h5v6l6 2a3 3 0 0 1 2 2.8v2.2H5Z' }],
  ['circle', { cx: 7.5, cy: 19, r: 1.75 }],
  ['circle', { cx: 15.5, cy: 19, r: 1.75 }],
]);
export const IconRowingOars = createIcon('rowing-oars', [
  ['path', { d: 'M5 20 17 8M19 20 7 8' }],
  ['path', { d: 'M17 8c-.5-2 .5-4 3-4.5.5 2.5-1 4-3 4.5ZM7 8c.5-2-.5-4-3-4.5-.5 2.5 1 4 3 4.5Z' }],
]);
export const IconRugbyPosts = createIcon('rugby-posts', [
  ['path', { d: 'M7 3v17.5M17 3v17.5M7 11h10' }],
]);
export const IconRunningShoe = createIcon('running-shoe', [
  ['path', { d: 'M3 16.5V8.5a1 1 0 0 1 1.3-.95L8.5 9c1.5.5 2.5 0 3-1l.5-1L19 12.5c1.5.75 2 2 2 3.25v.75Z' }],
  ['path', { d: 'M3 16.5v2a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-2' }],
  ['path', { d: 'M10.5 10.25l1.5-1M13 12l1.5-1' }],
]);
export const IconRunningTrack = createIcon('running-track', [
  ['path', { d: 'M9 6h6a6 6 0 0 1 0 12H9A6 6 0 0 1 9 6Z' }],
  ['path', { d: 'M9.5 9.25h5a2.75 2.75 0 0 1 0 5.5h-5a2.75 2.75 0 0 1 0-5.5Z' }],
]);
export const IconScoreboard = createIcon('scoreboard', [
  ['rect', { x: 2.5, y: 4.5, width: 19, height: 13, rx: 2.5 }],
  ['path', { d: 'M6 8.5h3v5.5H6ZM15 8.5h3v5.5h-3Z' }],
  ['path', { d: 'M8.5 17.5v3M15.5 17.5v3' }],
  ['circle', { cx: 12, cy: 9.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 12.75, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconShuttlecock = createIcon('shuttlecock', [
  ['path', { d: 'M9.5 16.5 6 3.5h12l-3.5 13' }],
  ['path', { d: 'M7.6 9.5h8.8' }],
  ['path', { d: 'M9.5 16.5h5a2.5 2.5 0 0 1-5 0Z' }],
]);
export const IconSkateboard = createIcon('skateboard', [
  ['path', { d: 'M2.75 10.5c.5 1.25 1.25 2 2.5 2h13.5c1.25 0 2-.75 2.5-2' }],
  ['circle', { cx: 7, cy: 16, r: 1.75 }],
  ['circle', { cx: 17, cy: 16, r: 1.75 }],
]);
export const IconSkiBoot = createIcon('ski-boot', [
  ['path', { d: 'M7 3h6.5l.75 6.25 4.75 3.25a2.5 2.5 0 0 1 1 2V18H5.5Z' }],
  ['path', { d: 'M3.5 21h17' }],
  ['path', { d: 'M7.25 8h6.5M7 12.5h8.5' }],
]);
export const IconSkiGondola = createIcon('ski-gondola', [
  ['path', { d: 'M2.5 5.5 21.5 3' }],
  ['path', { d: 'M12 4.25V8' }],
  ['rect', { x: 6.5, y: 8, width: 11, height: 12, rx: 3 }],
  ['path', { d: 'M6.5 13h11' }],
]);
export const IconSled = createIcon('sled', [
  ['path', { d: 'M3 16.5h15a3 3 0 0 0 3-3' }],
  ['path', { d: 'M5 12.5h12M7 12.5v4M15 12.5v4' }],
  ['path', { d: 'M17 12.5c1.75-1.5 2.5-3.5 2-6' }],
]);
export const IconSoccerBall = createIcon('soccer-ball', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M12 8.75L15.09 11L13.91 14.63L10.09 14.63L8.91 11Z' }],
  ['path', { d: 'M12 5.75L9.49 3.78L14.51 3.78ZM17.94 10.07L19.04 7.07L20.6 11.85ZM15.67 17.06L18.87 17.18L14.8 20.13ZM8.33 17.06L9.2 20.13L5.13 17.18ZM6.06 10.07L3.4 11.85L4.96 7.07Z', fill: 'currentColor' }],
]);
export const IconSportsBottle = createIcon('sports-bottle', [
  ['rect', { x: 7, y: 8, width: 10, height: 12.5, rx: 3 }],
  ['path', { d: 'M9 8V5.5h6V8M12 5.5V3' }],
]);
export const IconSportsJersey = createIcon('sports-jersey', [
  ['path', { d: 'M8.5 3.5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5H17c0 2.5.5 4 2 5v12H5v-12c1.5-1 2-2.5 2-5Z' }],
  ['path', { d: 'M10.5 11.5h3l-2 5.5' }],
]);
export const IconStationaryBike = createIcon('stationary-bike', [
  ['path', { d: 'M3.5 20.5h16' }],
  ['path', { d: 'M7 20.5 10 9.5M8 9.5h4M16 15.5l-1.5-8.5h3' }],
  ['circle', { cx: 16, cy: 15.5, r: 3.5 }],
]);
export const IconSwimFins = createIcon('swim-fins', [
  ['path', { d: 'M6 3.5c1.5 0 2.5 1 2.5 2.5v4l2 9a1.5 1.5 0 0 1-1.5 1.75H4.5A1.5 1.5 0 0 1 3 19l.5-9V6c0-1.5 1-2.5 2.5-2.5Z' }],
  ['path', { d: 'M18 3.5c1.5 0 2.5 1 2.5 2.5v4l.5 9a1.5 1.5 0 0 1-1.5 1.75H15a1.5 1.5 0 0 1-1.5-1.75l2-9V6c0-1.5 1-2.5 2.5-2.5Z' }],
]);
export const IconSwimGoggles = createIcon('swim-goggles', [
  ['path', { d: 'M3.5 10.5A2.5 2.5 0 0 1 6 8h2a2.5 2.5 0 0 1 2.5 2.5v1a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3ZM20.5 10.5A2.5 2.5 0 0 0 18 8h-2a2.5 2.5 0 0 0-2.5 2.5v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3Z' }],
  ['path', { d: 'M10.5 10.5c.75-.6 2.25-.6 3 0' }],
]);
export const IconTableTennisTable = createIcon('table-tennis-table', [
  ['rect', { x: 2.5, y: 9.5, width: 19, height: 3.5, rx: 1.5 }],
  ['path', { d: 'M12 5.5v4' }],
  ['path', { d: 'M5 13v7.5M19 13v7.5' }],
]);
export const IconTennisBall = createIcon('tennis-ball', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M5.75 5.75c3 3 3 9.5 0 12.5M18.25 5.75c-3 3-3 9.5 0 12.5' }],
]);
export const IconTennisRacket = createIcon('tennis-racket', [
  ['ellipse', { cx: 10, cy: 10, rx: 4.5, ry: 6.75, transform: 'rotate(-45 10 10)' }],
  ['path', { d: 'M10 4.25v11.5M5.75 10h8.5', transform: 'rotate(-45 10 10)' }],
  ['path', { d: 'M14.25 14.25l6 6' }],
]);
export const IconTreadmill = createIcon('treadmill', [
  ['path', { d: 'M3.5 17h14a1.5 1.5 0 0 1 0 3h-14a1.5 1.5 0 0 1 0-3Z' }],
  ['path', { d: 'M17 17 14.5 5h-2.5M14.5 5h4.5' }],
]);
export const IconVolleyball = createIcon('volleyball', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M12 12c0-4 1.5-6.75 4.5-8.25M12 12c-3.5 2-6.75 2.25-8.75 1M12 12c3.5 2 5 4.75 4.75 7.75' }],
]);
export const IconWeightBench = createIcon('weight-bench', [
  ['rect', { x: 3, y: 10, width: 13, height: 3, rx: 1.5 }],
  ['path', { d: 'M5 13v7.5M14 13v7.5' }],
  ['path', { d: 'M18.5 20.5V5.5M16 5.5h5' }],
]);
export const IconWeightPlate = createIcon('weight-plate', [
  ['ellipse', { cx: 9.5, cy: 12, rx: 5, ry: 8.75 }],
  ['path', { d: 'M9.5 3.25h3.5c2.75 0 5 3.9 5 8.75s-2.25 8.75-5 8.75H9.5' }],
  ['ellipse', { cx: 9.5, cy: 12, rx: 1.4, ry: 2.25 }],
]);
export const IconWhistle = createIcon('whistle', [
  ['path', { d: 'M20.5 7.5H8.5a5.5 5.5 0 1 0 5.25 3.75h6.75Z' }],
  ['circle', { cx: 8.5, cy: 13, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
