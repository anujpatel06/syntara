/** Domain: film photo media. Style spec: @syntara/icons create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '@syntara/icons';

export const Icon3dGlasses = createIcon('3d-glasses', [
  ['path', { d: 'M3 8.5h18v6a2 2 0 0 1-2 2h-3.75l-1.75-2.5h-3l-1.75 2.5H5a2 2 0 0 1-2-2Z' }],
  ['path', { d: 'M12 8.5v3' }],
]);
export const IconAperture = createIcon('aperture', [
  ['path', { d: 'M12.00 8.40L8.58 10.89L3.61 14.49A8.75 8.75 0 0 1 7.04 4.79M15.42 10.89L12.00 8.40L7.04 4.79A8.75 8.75 0 0 1 17.32 5.05M14.12 14.91L15.42 10.89L17.32 5.05A8.75 8.75 0 0 1 20.25 14.91M9.88 14.91L14.12 14.91L20.25 14.91A8.75 8.75 0 0 1 11.78 20.75M8.58 10.89L9.88 14.91L11.78 20.75A8.75 8.75 0 0 1 3.61 14.49' }],
]);
export const IconAspectRatio = createIcon('aspect-ratio', [
  ['rect', { x: 2.75, y: 5.5, width: 18.5, height: 13, rx: 3 }],
  ['path', { d: 'M6.25 11.25v-2.5h2.75M17.75 12.75v2.5H15' }],
]);
export const IconAutofocus = createIcon('autofocus', [
  ['path', { d: 'M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2M16 3.5h2A2.5 2.5 0 0 1 20.5 6v2M20.5 16v2a2.5 2.5 0 0 1-2.5 2.5h-2M8 20.5H6A2.5 2.5 0 0 1 3.5 18v-2' }],
  ['circle', { cx: 12, cy: 12, r: 3.25 }],
  ['circle', { cx: 12, cy: 12, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBroadcastVan = createIcon('broadcast-van', [
  ['path', { d: 'M4.5 18.5A1.5 1.5 0 0 1 3 17v-6.5a2 2 0 0 1 2-2h9.5a2 2 0 0 1 1.6.8l3.4 4.7a2 2 0 0 1 1.5 1.94V17a1.5 1.5 0 0 1-1.5 1.5Z' }],
  ['circle', { cx: 7.25, cy: 19.25, r: 1.75 }],
  ['circle', { cx: 16.75, cy: 19.25, r: 1.75 }],
  ['path', { d: 'M4.25 2.75a5 5 0 0 0 6.25 5.75Z' }],
  ['circle', { cx: 9.5, cy: 3.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCamcorder = createIcon('camcorder', [
  ['rect', { x: 4.5, y: 8.5, width: 11, height: 9, rx: 2.5 }],
  ['path', { d: 'M15.5 11l4.5-2v8l-4.5-2' }],
  ['path', { d: 'M7.5 8.5V6.5a1 1 0 0 1 1-1h5' }],
  ['path', { d: 'M4.5 10.5H2.75v5H4.5' }],
]);
export const IconCameraDrone = createIcon('camera-drone', [
  ['rect', { x: 9.5, y: 9.5, width: 5, height: 5, rx: 1.75 }],
  ['path', { d: 'M9.5 9.5 6 6M14.5 9.5 18 6M9.5 14.5 6 18M14.5 14.5 18 18' }],
  ['ellipse', { cx: 5.75, cy: 5.25, rx: 3, ry: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['ellipse', { cx: 18.25, cy: 5.25, rx: 3, ry: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['ellipse', { cx: 5.75, cy: 17.75, rx: 3, ry: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['ellipse', { cx: 18.25, cy: 17.75, rx: 3, ry: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCameraLens = createIcon('camera-lens', [
  ['path', { d: 'M3.5 9.5A1.5 1.5 0 0 1 5 8h3l2-2.5h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-2-2.5H5a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M14 5.5v13' }],
  ['path', { d: 'M20 8.5c1.25 1.25 1.25 5.75 0 7' }],
]);
export const IconCameraTripod = createIcon('camera-tripod', [
  ['rect', { x: 8, y: 3, width: 8, height: 5.5, rx: 1.75 }],
  ['path', { d: 'M12 8.5V12M12 12l-6 8.5M12 12l6 8.5M12 12v8.5' }],
]);
export const IconClapperboard = createIcon('clapperboard', [
  ['rect', { x: 3.5, y: 10, width: 17, height: 10.5, rx: 2.5 }],
  ['path', { d: 'M3.5 13.75h17' }],
  ['rect', { x: 3.25, y: 6, width: 17.5, height: 3.5, rx: 1.25, transform: 'rotate(-14 3.5 9.5)' }],
  ['path', { d: 'M7.5 6h2.25l-1.5 3.5H6ZM12.5 6h2.25l-1.5 3.5H11ZM17.5 6h2.25l-1.5 3.5H16Z', fill: 'currentColor', stroke: 'none', transform: 'rotate(-14 3.5 9.5)' }],
]);
export const IconClosedCaptions = createIcon('closed-captions', [
  ['rect', { x: 2.75, y: 5, width: 18.5, height: 14, rx: 3.25 }],
  ['path', { d: 'M10.75 10.1A2.5 2.5 0 1 0 10.75 13.9M17.25 10.1A2.5 2.5 0 1 0 17.25 13.9' }],
]);
export const IconDirectorChair = createIcon('director-chair', [
  ['rect', { x: 5, y: 3.5, width: 14, height: 4.5, rx: 1.75 }],
  ['path', { d: 'M6.5 8v4h11V8' }],
  ['path', { d: 'M7 12l10 8.5M17 12 7 20.5' }],
]);
export const IconFilmCamera = createIcon('film-camera', [
  ['circle', { cx: 7.75, cy: 6.5, r: 3 }],
  ['circle', { cx: 14.25, cy: 6.5, r: 3 }],
  ['rect', { x: 3, y: 9.5, width: 13, height: 10, rx: 2.5 }],
  ['path', { d: 'M16 13.25 20.25 11v7L16 15.75' }],
]);
export const IconFilmCanister = createIcon('film-canister', [
  ['rect', { x: 3.5, y: 6, width: 9, height: 14, rx: 2.5 }],
  ['path', { d: 'M6.5 6V4h3v2' }],
  ['path', { d: 'M12.5 9.5h6l2.5 2.75v4.25h-8.5' }],
  ['circle', { cx: 14.75, cy: 11.5, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 11.5, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.75, cy: 14.5, r: 0.7, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.5, cy: 14.5, r: 0.7, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFilmProjector = createIcon('film-projector', [
  ['rect', { x: 3, y: 11.5, width: 11.5, height: 8, rx: 2.25 }],
  ['circle', { cx: 6, cy: 7.75, r: 2.75 }],
  ['circle', { cx: 11.75, cy: 7.25, r: 3.25 }],
  ['path', { d: 'M21 9.5 14.5 14.25 21 19' }],
]);
export const IconFilmReel = createIcon('film-reel', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M10.25 7.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0ZM14.77 10.53a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0ZM13.04 15.84a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0ZM7.460000000000001 15.84a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0ZM5.73 10.53a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0Z', fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M12 20.75h8.75' }],
]);
export const IconFilmStrip = createIcon('film-strip', [
  ['rect', { x: 5, y: 3, width: 14, height: 18, rx: 3 }],
  ['path', { d: 'M8.75 3v18M15.25 3v18M8.75 12h6.5' }],
  ['circle', { cx: 6.9, cy: 7.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6.9, cy: 16.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.1, cy: 7.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.1, cy: 16.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconInstantPhoto = createIcon('instant-photo', [
  ['rect', { x: 4.5, y: 3, width: 15, height: 18, rx: 2.5 }],
  ['rect', { x: 7, y: 5.5, width: 10, height: 10, rx: 1 }],
]);
export const IconLiveStream = createIcon('live-stream', [
  ['path', { d: 'M10.25 9.5v5a.6.6 0 0 0 .9.5l4-2.5a.6.6 0 0 0 0-1l-4-2.5a.6.6 0 0 0-.9.5Z' }],
  ['path', { d: 'M7.25 8a7 7 0 0 0 0 8M16.75 8a7 7 0 0 1 0 8M4.5 5.5a12 12 0 0 0 0 13M19.5 5.5a12 12 0 0 1 0 13' }],
]);
export const IconPhotoAlbum = createIcon('photo-album', [
  ['rect', { x: 4.5, y: 3, width: 15, height: 18, rx: 2.5 }],
  ['path', { d: 'M8 3v18' }],
  ['rect', { x: 10.5, y: 7.5, width: 6.5, height: 6.5, rx: 1 }],
  ['path', { d: 'M10.5 12.5l2.25-2 2.25 2' }],
  ['circle', { cx: 15.25, cy: 9.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPhotoCrop = createIcon('photo-crop', [
  ['path', { d: 'M7 3.5V17h13.5M3.5 7H17v13.5' }],
]);
export const IconPhotoEdit = createIcon('photo-edit', [
  ['path', { d: 'M20.5 11V6.5a3 3 0 0 0-3-3h-11a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3H11' }],
  ['path', { d: 'M3.75 15.75 8 11.5l3.5 3.5' }],
  ['path', { d: 'M18.25 13.25l2 2-5.5 5.5H12.75v-2Z' }],
]);
export const IconPhotoExposure = createIcon('photo-exposure', [
  ['rect', { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3.25 }],
  ['path', { d: 'M19.5 4.5l-15 15' }],
  ['path', { d: 'M6.5 8.5h4M8.5 6.5v4M13.5 15.5h4' }],
]);
export const IconPhotoStack = createIcon('photo-stack', [
  ['path', { d: 'M7 3.5h10.5a3 3 0 0 1 3 3V17' }],
  ['rect', { x: 3.5, y: 7, width: 13.5, height: 13.5, rx: 3 }],
  ['path', { d: 'M3.75 17.75 8 13.5l3.5 3.5 1.5-1.5 3.75 3.75' }],
  ['circle', { cx: 12.75, cy: 11, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPictureFrame = createIcon('picture-frame', [
  ['rect', { x: 3.5, y: 7, width: 17, height: 13.5, rx: 2.5 }],
  ['path', { d: 'M8 7l4-3.75L16 7' }],
  ['path', { d: 'M6.5 17.5l3.5-3.5 3 3 1.5-1.5 3 3' }],
]);
export const IconPodcast = createIcon('podcast', [
  ['circle', { cx: 12, cy: 10.5, r: 1.75, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M8.99 13.51A4.25 4.25 0 1 1 15.01 13.51M6.52 15.98A7.75 7.75 0 1 1 17.48 15.98' }],
  ['path', { d: 'M12 13.75h0a1.25 1.25 0 0 1 1.25 1.25v4.5a1.25 1.25 0 0 1 -1.25 1.25h0a1.25 1.25 0 0 1 -1.25 -1.25v-4.5a1.25 1.25 0 0 1 1.25 -1.25Z' }],
]);
export const IconPopcorn = createIcon('popcorn', [
  ['path', { d: 'M5.5 10h13l-1.4 9.65a1 1 0 0 1-1 .85H7.9a1 1 0 0 1-1-.85Z' }],
  ['path', { d: 'M10 10l.5 10.5M14 10l-.5 10.5' }],
  ['path', { d: 'M5.5 10a2.25 2.25 0 0 1 2-3.5 2.75 2.75 0 0 1 4.5-2 2.75 2.75 0 0 1 4.5 2 2.25 2.25 0 0 1 2 3.5' }],
]);
export const IconPressMicrophone = createIcon('press-microphone', [
  ['circle', { cx: 12, cy: 5.75, r: 3.25, transform: 'rotate(-30 12 12)' }],
  ['rect', { x: 8.75, y: 9, width: 6.5, height: 5, rx: 1.25, transform: 'rotate(-30 12 12)' }],
  ['path', { d: 'M12 14v7.25', transform: 'rotate(-30 12 12)' }],
]);
export const IconPressPass = createIcon('press-pass', [
  ['path', { d: 'M8.5 3.5 12 9l3.5-5.5' }],
  ['rect', { x: 4.5, y: 9, width: 15, height: 12, rx: 2.5 }],
  ['circle', { cx: 9, cy: 13.25, r: 1.5 }],
  ['path', { d: 'M6.75 18a2.25 2.25 0 0 1 4.5 0M13.75 14.75h3' }],
]);
export const IconProjectorScreen = createIcon('projector-screen', [
  ['path', { d: 'M3.5 4h17' }],
  ['path', { d: 'M5 4v10a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 14V4M12 15.5v3' }],
  ['circle', { cx: 12, cy: 19.75, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRetroTv = createIcon('retro-tv', [
  ['rect', { x: 3, y: 7.5, width: 18, height: 13, rx: 3 }],
  ['path', { d: 'M8.5 3.5 12 7.5l3.5-4' }],
  ['rect', { x: 5.5, y: 10, width: 9.5, height: 8, rx: 1.5 }],
  ['circle', { cx: 18, cy: 11.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18, cy: 15, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconRgbChannels = createIcon('rgb-channels', [
  ['circle', { cx: 12, cy: 8.5, r: 5 }],
  ['circle', { cx: 8.5, cy: 14.5, r: 5 }],
  ['circle', { cx: 15.5, cy: 14.5, r: 5 }],
]);
export const IconRingLight = createIcon('ring-light', [
  ['circle', { cx: 12, cy: 9.25, r: 6.5 }],
  ['rect', { x: 10.5, y: 6.75, width: 3, height: 5, rx: 1 }],
  ['path', { d: 'M12 15.75v4.75M8.5 20.5h7' }],
]);
export const IconRuleOfThirds = createIcon('rule-of-thirds', [
  ['rect', { x: 3, y: 4.5, width: 18, height: 15, rx: 3 }],
  ['path', { d: 'M9 4.5v15M15 4.5v15M3 9.5h18M3 14.5h18' }],
]);
export const IconSelfie = createIcon('selfie', [
  ['rect', { x: 6.5, y: 2.75, width: 11, height: 18.5, rx: 3 }],
  ['circle', { cx: 12, cy: 9.5, r: 2.25 }],
  ['path', { d: 'M8.75 16.25a3.25 3.25 0 0 1 6.5 0' }],
]);
export const IconStageCurtains = createIcon('stage-curtains', [
  ['path', { d: 'M3 4h18' }],
  ['path', { d: 'M4.5 4v16.5c2 0 3.5-.6 4.5-2C7.25 14.5 7 9 9.5 4M19.5 4v16.5c-2 0-3.5-.6-4.5-2 1.75-4 2-9.5-.5-14.5' }],
]);
export const IconTypewriter = createIcon('typewriter', [
  ['rect', { x: 7, y: 3.5, width: 10, height: 6.5, rx: 1 }],
  ['path', { d: 'M5 10h14a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z' }],
  ['path', { d: 'M9 17.5h6' }],
  ['circle', { cx: 7.5, cy: 13.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.5, cy: 13.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 13.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 13.75, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconVideoPlaylist = createIcon('video-playlist', [
  ['path', { d: 'M6.5 4h11a3 3 0 0 1 3 3v8.5' }],
  ['rect', { x: 3.5, y: 7.5, width: 14, height: 12.5, rx: 3 }],
  ['path', { d: 'M9 11.5v5a.6.6 0 0 0 .9.5l4-2.5a.6.6 0 0 0 0-1l-4-2.5a.6.6 0 0 0-.9.5Z' }],
]);
export const IconVideoTimeline = createIcon('video-timeline', [
  ['path', { d: 'M4.25 8h6a1.25 1.25 0 0 1 1.25 1.25v1a1.25 1.25 0 0 1 -1.25 1.25h-6a1.25 1.25 0 0 1 -1.25 -1.25v-1a1.25 1.25 0 0 1 1.25 -1.25ZM14.25 8h5.5a1.25 1.25 0 0 1 1.25 1.25v1a1.25 1.25 0 0 1 -1.25 1.25h-5.5a1.25 1.25 0 0 1 -1.25 -1.25v-1a1.25 1.25 0 0 1 1.25 -1.25ZM4.25 14h3a1.25 1.25 0 0 1 1.25 1.25v1a1.25 1.25 0 0 1 -1.25 1.25h-3a1.25 1.25 0 0 1 -1.25 -1.25v-1a1.25 1.25 0 0 1 1.25 -1.25ZM11.25 14h8.5a1.25 1.25 0 0 1 1.25 1.25v1a1.25 1.25 0 0 1 -1.25 1.25h-8.5a1.25 1.25 0 0 1 -1.25 -1.25v-1a1.25 1.25 0 0 1 1.25 -1.25Z' }],
  ['path', { d: 'M15.5 4.5v16' }],
  ['circle', { cx: 15.5, cy: 3.75, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconVideoTrim = createIcon('video-trim', [
  ['path', { d: 'M7 5H5.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1H7M17 5h1.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H17' }],
  ['rect', { x: 8, y: 8.5, width: 8, height: 7, rx: 1.5 }],
]);
