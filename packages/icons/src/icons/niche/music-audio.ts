/** Domain: music audio. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAccordion = createIcon('accordion', [
  ['rect', { x: 3, y: 5, width: 4.5, height: 14, rx: 1.75 }],
  ['rect', { x: 16.5, y: 5, width: 4.5, height: 14, rx: 1.75 }],
  ['path', { d: 'M7.5 6.5 9.75 5.25 12 6.5l2.25-1.25 2.25 1.25v11l-2.25 1.25L12 17.5l-2.25 1.25-2.25-1.25Z' }],
  ['path', { d: 'M12 6.5v11' }],
]);
export const IconAcousticGuitar = createIcon('acoustic-guitar', [
  ['path', { d: 'M9.75 12.6A3.25 3.25 0 1 1 14.25 12.6A4.5 4.5 0 1 1 9.75 12.6Z', transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M12 7V3.25M10.75 3.25h2.5', transform: 'rotate(45 12 12)' }],
  ['circle', { cx: 12, cy: 16, r: 1.5, transform: 'rotate(45 12 12)' }],
]);
export const IconAudioKnob = createIcon('audio-knob', [
  ['circle', { cx: 12, cy: 12.5, r: 4.75 }],
  ['path', { d: 'M12 12.5 9.5 10' }],
  ['path', { d: 'M5.6 18.9A9 9 0 1 1 18.4 18.9' }],
]);
export const IconAudioMixer = createIcon('audio-mixer', [
  ['path', { d: 'M6 3.5v17M12 3.5v17M18 3.5v17' }],
  ['path', { d: 'M5.25 12h1.5a1.25 1.25 0 0 1 1.25 1.25v1a1.25 1.25 0 0 1 -1.25 1.25h-1.5a1.25 1.25 0 0 1 -1.25 -1.25v-1a1.25 1.25 0 0 1 1.25 -1.25ZM11.25 6h1.5a1.25 1.25 0 0 1 1.25 1.25v1a1.25 1.25 0 0 1 -1.25 1.25h-1.5a1.25 1.25 0 0 1 -1.25 -1.25v-1a1.25 1.25 0 0 1 1.25 -1.25ZM17.25 10h1.5a1.25 1.25 0 0 1 1.25 1.25v1a1.25 1.25 0 0 1 -1.25 1.25h-1.5a1.25 1.25 0 0 1 -1.25 -1.25v-1a1.25 1.25 0 0 1 1.25 -1.25Z', fill: 'currentColor' }],
]);
export const IconAudioWaveform = createIcon('audio-waveform', [
  ['path', { d: 'M4 10.5v3M8 7v10M12 3.5v17M16 8v8M20 10.5v3' }],
]);
export const IconBoombox = createIcon('boombox', [
  ['rect', { x: 2.75, y: 8, width: 18.5, height: 12, rx: 3 }],
  ['path', { d: 'M7 8V6.25a1.75 1.75 0 0 1 1.75-1.75h6.5A1.75 1.75 0 0 1 17 6.25V8' }],
  ['circle', { cx: 7.75, cy: 14, r: 2.75 }],
  ['circle', { cx: 16.25, cy: 14, r: 2.75 }],
]);
export const IconCassetteTape = createIcon('cassette-tape', [
  ['rect', { x: 2.75, y: 5, width: 18.5, height: 14, rx: 3 }],
  ['circle', { cx: 8.5, cy: 11, r: 1.75 }],
  ['circle', { cx: 15.5, cy: 11, r: 1.75 }],
  ['path', { d: 'M7 19l1.25-3.25h7.5L17 19' }],
]);
export const IconCymbal = createIcon('cymbal', [
  ['ellipse', { cx: 12, cy: 9.5, rx: 8.5, ry: 2.5 }],
  ['path', { d: 'M10.25 7.15a1.75 1.75 0 0 1 3.5 0' }],
  ['path', { d: 'M12 12v5.5M12 17.5l-3.5 3M12 17.5l3.5 3' }],
]);
export const IconFlute = createIcon('flute', [
  ['rect', { x: 2.5, y: 10.75, width: 19, height: 2.5, rx: 1.25, transform: 'rotate(-35 12 12)' }],
  ['circle', { cx: 5.5, cy: 12, r: 0.85, fill: 'currentColor', stroke: 'none', transform: 'rotate(-35 12 12)' }],
  ['circle', { cx: 11, cy: 12, r: 0.85, fill: 'currentColor', stroke: 'none', transform: 'rotate(-35 12 12)' }],
  ['circle', { cx: 14.25, cy: 12, r: 0.85, fill: 'currentColor', stroke: 'none', transform: 'rotate(-35 12 12)' }],
  ['circle', { cx: 17.5, cy: 12, r: 0.85, fill: 'currentColor', stroke: 'none', transform: 'rotate(-35 12 12)' }],
]);
export const IconGong = createIcon('gong', [
  ['path', { d: 'M4.5 20.5V4.5h15v16' }],
  ['path', { d: 'M12 4.5v2.75' }],
  ['circle', { cx: 12, cy: 12.75, r: 5.5 }],
  ['circle', { cx: 12, cy: 12.75, r: 1.75 }],
]);
export const IconHarmonica = createIcon('harmonica', [
  ['rect', { x: 2.75, y: 7, width: 18.5, height: 10, rx: 2.5 }],
  ['circle', { cx: 6, cy: 10.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9.75, cy: 10.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 10.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.25, cy: 10.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M2.75 13.75h18.5' }],
]);
export const IconHarp = createIcon('harp', [
  ['path', { d: 'M6 20.5V4.5c2.5-1.5 4.5 1.5 7 1.25S17 3.75 18.5 5L9.5 20.5Z' }],
  ['path', { d: 'M9 5.4v13.5M12 5.9v9.4M15 5.5v5.2' }],
]);
export const IconMaracas = createIcon('maracas', [
  ['ellipse', { cx: 8.5, cy: 8, rx: 3.25, ry: 4.25, transform: 'rotate(-25 8.5 8)' }],
  ['ellipse', { cx: 15.5, cy: 8, rx: 3.25, ry: 4.25, transform: 'rotate(25 15.5 8)' }],
  ['path', { d: 'M10.3 11.85 13.3 18.25M13.7 11.85l-3 6.4' }],
]);
export const IconMetronome = createIcon('metronome', [
  ['path', { d: 'M10 3.5h4a1.5 1.5 0 0 1 1.45 1.1l3.6 14.5a1.5 1.5 0 0 1-1.45 1.9H6.4a1.5 1.5 0 0 1-1.45-1.9L8.55 4.6A1.5 1.5 0 0 1 10 3.5Z' }],
  ['path', { d: 'M6.5 16h11' }],
  ['path', { d: 'M12 16 16 6.5' }],
  ['circle', { cx: 14.3, cy: 10.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMusicAlbum = createIcon('music-album', [
  ['rect', { x: 3, y: 4.5, width: 12.5, height: 15, rx: 2.5 }],
  ['path', { d: 'M15.5 6.15a6.25 6.25 0 0 1 0 11.7' }],
  ['circle', { cx: 9.25, cy: 12, r: 2.5 }],
]);
export const IconMusicPlaylist = createIcon('music-playlist', [
  ['path', { d: 'M3.5 6h11M3.5 10.5h11M3.5 15h6' }],
  ['circle', { cx: 15.25, cy: 17.5, r: 2.25 }],
  ['path', { d: 'M17.5 17.5V8.5h3' }],
]);
export const IconMusicStand = createIcon('music-stand', [
  ['rect', { x: 5, y: 3, width: 14, height: 9.5, rx: 2 }],
  ['path', { d: 'M12 12.5v4.5l-4 3.5M12 17l4 3.5' }],
  ['path', { d: 'M11.25 9.25V5.75l2.25.75' }],
  ['circle', { cx: 10.25, cy: 9.25, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPiano = createIcon('piano', [
  ['rect', { x: 3, y: 4.5, width: 18, height: 15, rx: 3 }],
  ['path', { d: 'M7.25 4.5h2.5V11a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1ZM14.25 4.5h2.5V11a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1Z', fill: 'currentColor' }],
  ['path', { d: 'M12 4.5v15M8.5 12v7.5M15.5 12v7.5' }],
]);
export const IconRetroRadio = createIcon('retro-radio', [
  ['rect', { x: 3, y: 9, width: 18, height: 11.5, rx: 3 }],
  ['path', { d: 'M7.5 9 17 3.5' }],
  ['circle', { cx: 15.75, cy: 14.75, r: 2.5 }],
  ['path', { d: 'M6.5 13h4M6.5 16.5h4' }],
]);
export const IconSaxophone = createIcon('saxophone', [
  ['path', { d: 'M9 5v10.5a4 4 0 0 0 8 0v-3l2.25-2h-7l1.75 2v3a1 1 0 0 1-2 0V5Z' }],
  ['path', { d: 'M10.5 5c0-1.25-.75-2-2-2H5.5' }],
  ['circle', { cx: 10.5, cy: 8, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.5, cy: 10.5, r: 0.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.5, cy: 13, r: 0.75, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSheetMusic = createIcon('sheet-music', [
  ['rect', { x: 4.5, y: 3, width: 15, height: 18, rx: 3.25 }],
  ['circle', { cx: 10.25, cy: 15.5, r: 2 }],
  ['path', { d: 'M12.25 15.5V7.5l3 1.25' }],
]);
export const IconSnareDrum = createIcon('snare-drum', [
  ['ellipse', { cx: 12, cy: 10.5, rx: 7.5, ry: 2.75 }],
  ['path', { d: 'M4.5 10.5v7c0 1.5 3.4 2.75 7.5 2.75s7.5-1.25 7.5-2.75v-7' }],
  ['path', { d: 'M10.25 8.75 7 3.75M13.75 8.75 17 3.75' }],
  ['circle', { cx: 7, cy: 3.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17, cy: 3.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSpeakerBox = createIcon('speaker-box', [
  ['rect', { x: 5.5, y: 3, width: 13, height: 18, rx: 3.25 }],
  ['circle', { cx: 12, cy: 14.5, r: 3.5 }],
  ['circle', { cx: 12, cy: 7.75, r: 1.5 }],
]);
export const IconTambourine = createIcon('tambourine', [
  ['ellipse', { cx: 12, cy: 10, rx: 8.5, ry: 4.5, transform: 'rotate(-15 12 12)' }],
  ['path', { d: 'M3.5 10v3c0 2.5 3.8 4.5 8.5 4.5s8.5-2 8.5-4.5v-3', transform: 'rotate(-15 12 12)' }],
  ['ellipse', { cx: 7, cy: 14.4, rx: 1.4, ry: 0.9, fill: 'currentColor', transform: 'rotate(-15 12 12)' }],
  ['ellipse', { cx: 12, cy: 15.4, rx: 1.4, ry: 0.9, fill: 'currentColor', transform: 'rotate(-15 12 12)' }],
  ['ellipse', { cx: 17, cy: 14.4, rx: 1.4, ry: 0.9, fill: 'currentColor', transform: 'rotate(-15 12 12)' }],
]);
export const IconTriangleInstrument = createIcon('triangle-instrument', [
  ['path', { d: 'M7 19h12.1a1 1 0 0 0 .87-1.5L13.3 6a1.5 1.5 0 0 0-2.6 0L4.4 17' }],
  ['path', { d: 'M12 5.25v-2' }],
  ['path', { d: 'M16.5 12.75 20.75 9.5' }],
  ['circle', { cx: 20.75, cy: 9.5, r: 1.2, fill: 'currentColor', stroke: 'none' }],
]);
export const IconTrumpet = createIcon('trumpet', [
  ['path', { d: 'M14.5 11.75c2.5 0 4.5-1.25 6-3.25v9c-1.5-2-3.5-3.25-6-3.25Z' }],
  ['path', { d: 'M3.5 13h11' }],
  ['path', { d: 'M7 13v3a1.5 1.5 0 0 0 1.5 1.5H13a1.5 1.5 0 0 0 1.5-1.5v-1.75' }],
  ['path', { d: 'M7.6 8h1.5v5H7.6ZM10.35 8h1.5v5h-1.5ZM13.1 8h1.5v5h-1.5Z', fill: 'currentColor', stroke: 'none' }],
]);
export const IconTuningFork = createIcon('tuning-fork', [
  ['path', { d: 'M8.5 3v6a3.5 3.5 0 0 0 7 0V3' }],
  ['path', { d: 'M12 12.5V21' }],
  ['path', { d: 'M5.25 4.5c-.75 1-.75 2.5 0 3.5M18.75 4.5c.75 1 .75 2.5 0 3.5' }],
]);
export const IconTurntable = createIcon('turntable', [
  ['rect', { x: 3, y: 4.5, width: 18, height: 15, rx: 3 }],
  ['circle', { cx: 10.5, cy: 12, r: 4.75 }],
  ['path', { d: 'M17.5 7v6.25l-3 3' }],
  ['circle', { cx: 10.5, cy: 12, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconVinylRecord = createIcon('vinyl-record', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['circle', { cx: 12, cy: 12, r: 3 }],
  ['path', { d: 'M12 5.75A6.25 6.25 0 0 1 18.25 12' }],
  ['circle', { cx: 12, cy: 12, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconXylophone = createIcon('xylophone', [
  ['path', { d: 'M4.25 4h0a1.25 1.25 0 0 1 1.25 1.25v13.5a1.25 1.25 0 0 1 -1.25 1.25h0a1.25 1.25 0 0 1 -1.25 -1.25v-13.5a1.25 1.25 0 0 1 1.25 -1.25ZM8 5.5h0a1.25 1.25 0 0 1 1.25 1.25v10.5a1.25 1.25 0 0 1 -1.25 1.25h0a1.25 1.25 0 0 1 -1.25 -1.25v-10.5a1.25 1.25 0 0 1 1.25 -1.25ZM11.75 7h0a1.25 1.25 0 0 1 1.25 1.25v7.5a1.25 1.25 0 0 1 -1.25 1.25h0a1.25 1.25 0 0 1 -1.25 -1.25v-7.5a1.25 1.25 0 0 1 1.25 -1.25ZM15.5 8.5h0a1.25 1.25 0 0 1 1.25 1.25v4.5a1.25 1.25 0 0 1 -1.25 1.25h0a1.25 1.25 0 0 1 -1.25 -1.25v-4.5a1.25 1.25 0 0 1 1.25 -1.25Z' }],
  ['path', { d: 'M21 20.5 19.5 10' }],
  ['circle', { cx: 19.35, cy: 8.75, r: 1.6, fill: 'currentColor', stroke: 'none' }],
]);
