/** Domain: art craft design. Style spec: @syntara/icons create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '@syntara/icons';

export const IconArtboard = createIcon('artboard', [
  ['rect', { x: 7, y: 7, width: 10, height: 10, rx: 1.25 }],
  ['path', { d: 'M7 3v2.5M3 7h2.5M17 21v-2.5M21 17h-2.5' }],
]);
export const IconBezierCurve = createIcon('bezier-curve', [
  ['path', { d: 'M4.25 15.5h2a1.25 1.25 0 0 1 1.25 1.25v2a1.25 1.25 0 0 1 -1.25 1.25h-2a1.25 1.25 0 0 1 -1.25 -1.25v-2a1.25 1.25 0 0 1 1.25 -1.25ZM17.75 4h2a1.25 1.25 0 0 1 1.25 1.25v2a1.25 1.25 0 0 1 -1.25 1.25h-2a1.25 1.25 0 0 1 -1.25 -1.25v-2a1.25 1.25 0 0 1 1.25 -1.25Z' }],
  ['path', { d: 'M5.25 15.5C5.25 10 10 6.25 16.5 6.25' }],
  ['path', { d: 'M5.25 6.25h7' }],
  ['circle', { cx: 5.25, cy: 6.25, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconClayVase = createIcon('clay-vase', [
  ['path', { d: 'M9 3.5h6M10 3.5V6c0 1-.6 1.6-1.6 2.3C6.6 9.6 5.5 11.4 5.5 13.75 5.5 17.6 8.4 20.5 12 20.5s6.5-2.9 6.5-6.75c0-2.35-1.1-4.15-2.9-5.45-1-.7-1.6-1.3-1.6-2.3V3.5' }],
]);
export const IconColorSwatches = createIcon('color-swatches', [
  ['rect', { x: 4, y: 3.5, width: 5.5, height: 16, rx: 2, transform: 'rotate(50 6.75 16.5)' }],
  ['rect', { x: 4, y: 3.5, width: 5.5, height: 16, rx: 2, transform: 'rotate(25 6.75 16.5)' }],
  ['rect', { x: 4, y: 3.5, width: 5.5, height: 16, rx: 2 }],
  ['circle', { cx: 6.75, cy: 16.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCraftKnife = createIcon('craft-knife', [
  ['rect', { x: 10.5, y: 10, width: 3, height: 11, rx: 1.5, transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M10 10h4', transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M10.75 10V6.5l2.5-3.5V10', transform: 'rotate(45 12 12)' }],
]);
export const IconCrayon = createIcon('crayon', [
  ['rect', { x: 9.5, y: 8, width: 5, height: 13, rx: 1.5, transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M9.5 8 12 3l2.5 5', transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M9.5 11.5h5M9.5 17.5h5', transform: 'rotate(45 12 12)' }],
]);
export const IconDesignLayers = createIcon('design-layers', [
  ['path', { d: 'M12 3.5l8.5 4.5L12 12.5 3.5 8ZM3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5' }],
]);
export const IconDrawingCompass = createIcon('drawing-compass', [
  ['circle', { cx: 12, cy: 4.75, r: 1.75 }],
  ['path', { d: 'M11.25 6.5 6 20.5M12.75 6.5 18 20.5' }],
  ['path', { d: 'M8.25 15c2.4.9 5.1.9 7.5 0' }],
]);
export const IconDrawingTablet = createIcon('drawing-tablet', [
  ['rect', { x: 3, y: 6, width: 18, height: 13, rx: 3 }],
  ['path', { d: 'M13 15.5l6.5-12' }],
  ['path', { d: 'M6.5 14c1.25-3 2.75-3 4 0' }],
]);
export const IconEasel = createIcon('easel', [
  ['rect', { x: 5, y: 3.5, width: 14, height: 10.5, rx: 2 }],
  ['path', { d: 'M8.5 14 6 20.5M15.5 14l2.5 6.5M12 14v4' }],
]);
export const IconEmbroideryHoop = createIcon('embroidery-hoop', [
  ['circle', { cx: 12, cy: 13, r: 7.5 }],
  ['circle', { cx: 12, cy: 13, r: 5.5 }],
  ['path', { d: 'M10.5 5.75V3.25h3v2.5' }],
  ['path', { d: 'M10.5 11.5l3 3M13.5 11.5l-3 3' }],
]);
export const IconEraser = createIcon('eraser', [
  ['rect', { x: 4, y: 8, width: 15, height: 8, rx: 2.5, transform: 'rotate(-45 11.5 12)' }],
  ['path', { d: 'M9.5 8v8', transform: 'rotate(-45 11.5 12)' }],
  ['path', { d: 'M12.5 20.5h8' }],
]);
export const IconEyedropper = createIcon('eyedropper', [
  ['rect', { x: 9.5, y: 2.75, width: 5, height: 6.25, rx: 2.5, transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M8.5 9h7', transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M10.5 9v8.5l1.5 3 1.5-3V9', transform: 'rotate(45 12 12)' }],
]);
export const IconLassoTool = createIcon('lasso-tool', [
  ['path', { d: 'M7 15.5C4.6 14.4 3 12.7 3 10.75 3 7 7 4 12 4s9 3 9 6.75-4 6.75-9 6.75c-1.25 0-2.5-.15-3.5-.5' }],
  ['path', { d: 'M8.5 14.75c-1.5 0-2.5 1-2.5 2.25s1 2 2 2.5c.75.5.5 1.5-.25 2' }],
]);
export const IconMannequin = createIcon('mannequin', [
  ['path', { d: 'M8 4h8c0 2-1 3-1 4.5s2 2.5 2 5.5-2 3.5-5 3.5-5-.5-5-3.5 2-4 2-5.5S8 6 8 4Z' }],
  ['path', { d: 'M12 17.5v3M8.5 20.5h7M12 4V2.75' }],
]);
export const IconMeasuringTape = createIcon('measuring-tape', [
  ['rect', { x: 3, y: 5.5, width: 13, height: 13, rx: 3.5 }],
  ['circle', { cx: 9.5, cy: 12, r: 2.5 }],
  ['path', { d: 'M16 15.5h4.5v3H16M18.25 15.5V17' }],
]);
export const IconOrigamiBoat = createIcon('origami-boat', [
  ['path', { d: 'M3.5 13.5h17l-3 6h-11Z' }],
  ['path', { d: 'M7 13.5 12 4.5l5 9M12 4.5v9' }],
]);
export const IconPaintBucket = createIcon('paint-bucket', [
  ['path', { d: 'M10 5.5l7.5 7.5-5 5a2 2 0 0 1-2.8 0L4.5 12.8a2 2 0 0 1 0-2.8Z' }],
  ['path', { d: 'M4.5 11.4h13' }],
  ['path', { d: 'M10 5.5 7.5 3' }],
  ['path', { d: 'M20 15c.75 1 1.25 1.85 1.25 2.6a1.25 1.25 0 0 1-2.5 0c0-.75.5-1.6 1.25-2.6Z' }],
]);
export const IconPaintDrip = createIcon('paint-drip', [
  ['path', { d: 'M3.5 4.5h17v4.75a1.75 1.75 0 0 1-3.5 0V8a1 1 0 0 0-2 0v6.75a2 2 0 0 1-4 0V9.5a1 1 0 0 0-2 0v1.25a1.75 1.75 0 0 1-3.5 0Z' }],
  ['path', { d: 'M18.75 13.5c.9 1.2 1.5 2.2 1.5 3a1.5 1.5 0 0 1-3 0c0-.8.6-1.8 1.5-3Z' }],
]);
export const IconPaintPalette = createIcon('paint-palette', [
  ['path', { d: 'M12 3.5a8.5 8.5 0 0 0 0 17c1.5 0 2-1 2-2 0-.75-.5-1.25-.5-2s.75-1.5 1.75-1.5H17a3.5 3.5 0 0 0 3.5-3.5C20.5 7 16.75 3.5 12 3.5Z' }],
  ['circle', { cx: 7.75, cy: 11.25, r: 1.05, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9.25, cy: 7.5, r: 1.05, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.25, cy: 6.75, r: 1.05, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 9, r: 1.05, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPaintRoller = createIcon('paint-roller', [
  ['rect', { x: 3.5, y: 3.5, width: 14, height: 5, rx: 2 }],
  ['path', { d: 'M17.5 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H12.5a1 1 0 0 0-1 1v2.5' }],
  ['rect', { x: 10, y: 14.5, width: 3, height: 6, rx: 1.25 }],
]);
export const IconPaintTube = createIcon('paint-tube', [
  ['path', { d: 'M7 3.5h10M7.75 3.5 9 13h6l1.25-9.5', transform: 'rotate(-40 12 12)' }],
  ['path', { d: 'M10 13v2h4v-2', transform: 'rotate(-40 12 12)' }],
  ['rect', { x: 9.5, y: 15, width: 5, height: 3.25, rx: 1, transform: 'rotate(-40 12 12)' }],
  ['circle', { cx: 19.25, cy: 17.25, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPaintbrush = createIcon('paintbrush', [
  ['path', { d: 'M12 2.75v8', transform: 'rotate(45 12 12)' }],
  ['rect', { x: 10, y: 10.75, width: 4, height: 3.5, rx: 0.75, transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M10 14.25h4v1.5c0 2-1 3.75-2 4.75-1-1-2-2.75-2-4.75Z', transform: 'rotate(45 12 12)' }],
]);
export const IconPenTool = createIcon('pen-tool', [
  ['path', { d: 'M12 3l5 8-2 5.5H9L7 11Z' }],
  ['path', { d: 'M12 3v6.5' }],
  ['circle', { cx: 12, cy: 11, r: 1.5 }],
  ['path', { d: 'M9.25 16.5h5.5a1.25 1.25 0 0 1 1.25 1.25v1.5a1.25 1.25 0 0 1 -1.25 1.25h-5.5a1.25 1.25 0 0 1 -1.25 -1.25v-1.5a1.25 1.25 0 0 1 1.25 -1.25Z' }],
]);
export const IconPinCushion = createIcon('pin-cushion', [
  ['ellipse', { cx: 12, cy: 12.5, rx: 7, ry: 4.75 }],
  ['path', { d: 'M6.5 16.5h11l-1.25 4h-8.5Z' }],
  ['path', { d: 'M10.5 7.9 13 3.75M14.25 8.1l3.25-3.6' }],
  ['circle', { cx: 13.25, cy: 3.4, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.8, cy: 4.15, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPotteryWheel = createIcon('pottery-wheel', [
  ['path', { d: 'M9.25 14.5c-1.5-1.5-2-3-1.5-5S10 6.5 9.5 4.5h5c-.5 2 1.5 3 2 5s0 3.5-1.5 5' }],
  ['ellipse', { cx: 12, cy: 15.5, rx: 8, ry: 2 }],
  ['path', { d: 'M12 17.5v3M8.5 20.5h7' }],
]);
export const IconProtractor = createIcon('protractor', [
  ['path', { d: 'M3.5 17a8.5 8.5 0 0 1 17 0Z' }],
  ['path', { d: 'M8.25 17a3.75 3.75 0 0 1 7.5 0' }],
  ['path', { d: 'M12 8.5v2M6 11l1.4 1.4M18 11l-1.4 1.4' }],
]);
export const IconQuill = createIcon('quill', [
  ['path', { d: 'M20 3.5C12.5 4 7.5 9 7 17c6-.5 11.5-5 13-13.5Z' }],
  ['path', { d: 'M4 20.5 14.5 10' }],
]);
export const IconRubberStamp = createIcon('rubber-stamp', [
  ['circle', { cx: 12, cy: 5.5, r: 2.5 }],
  ['path', { d: 'M10.75 7.75 10.25 12M13.25 7.75l.5 4.25' }],
  ['rect', { x: 4.5, y: 12, width: 15, height: 4.5, rx: 1.5 }],
  ['path', { d: 'M5.5 20h13' }],
]);
export const IconRuler = createIcon('ruler', [
  ['rect', { x: 2.5, y: 8, width: 19, height: 8, rx: 2, transform: 'rotate(-45 12 12)' }],
  ['path', { d: 'M6.5 8v3M10 8v2M13.5 8v3M17 8v2', transform: 'rotate(-45 12 12)' }],
]);
export const IconScissors = createIcon('scissors', [
  ['circle', { cx: 7, cy: 17, r: 2.75 }],
  ['circle', { cx: 17, cy: 17, r: 2.75 }],
  ['path', { d: 'M8.6 14.75 17 3.5M15.4 14.75 7 3.5' }],
]);
export const IconSculpture = createIcon('sculpture', [
  ['circle', { cx: 12, cy: 5.25, r: 2.5 }],
  ['path', { d: 'M7.25 13.5c0-3 2.1-5 4.75-5s4.75 2 4.75 5Z' }],
  ['rect', { x: 9, y: 13.5, width: 6, height: 5, rx: 0.75 }],
  ['path', { d: 'M7 20.5h10' }],
]);
export const IconSetSquare = createIcon('set-square', [
  ['path', { d: 'M4.5 5.25v13.25a1 1 0 0 0 1 1h13.25a.75.75 0 0 0 .53-1.28L5.78 4.72a.75.75 0 0 0-1.28.53Z' }],
  ['path', { d: 'M8.5 12v3.5H12Z' }],
]);
export const IconSewingButton = createIcon('sewing-button', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['circle', { cx: 12, cy: 12, r: 6.25 }],
  ['circle', { cx: 10.25, cy: 10.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 10.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.25, cy: 13.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 13.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSewingMachine = createIcon('sewing-machine', [
  ['path', { d: 'M7 9H5.5A1.5 1.5 0 0 1 4 7.5V6a1.5 1.5 0 0 1 1.5-1.5h12A1.5 1.5 0 0 1 19 6v10.5h-4V9Z' }],
  ['rect', { x: 3.5, y: 16.5, width: 17, height: 4, rx: 1.5 }],
  ['path', { d: 'M7 9v4' }],
  ['circle', { cx: 17, cy: 7, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSewingNeedle = createIcon('sewing-needle', [
  ['rect', { x: 10.75, y: 2.5, width: 2.5, height: 5.75, rx: 1.25, transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M12 8.25 12 21', transform: 'rotate(45 12 12)' }],
  ['path', { d: 'M16.75 7.25c2 1.5 2.5 4 1 6.5s-1.5 5 .75 6.75' }],
]);
export const IconShapes = createIcon('shapes', [
  ['circle', { cx: 7.5, cy: 7.5, r: 4 }],
  ['path', { d: 'M16.5 3.5l4 7h-8Z' }],
  ['rect', { x: 9.5, y: 12.5, width: 8, height: 8, rx: 2 }],
]);
export const IconSprayCan = createIcon('spray-can', [
  ['rect', { x: 6, y: 8.5, width: 9, height: 12.5, rx: 2.5 }],
  ['path', { d: 'M8 8.5V5.75h5V8.5M10.5 5.75V4.25' }],
  ['circle', { cx: 15.5, cy: 4.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18.25, cy: 3, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18.5, cy: 6, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 20.5, cy: 4.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSticker = createIcon('sticker', [
  ['path', { d: 'M20.5 12.5V6A2.5 2.5 0 0 0 18 3.5H6A2.5 2.5 0 0 0 3.5 6v12A2.5 2.5 0 0 0 6 20.5h6.5Z' }],
  ['path', { d: 'M12.5 20.5V16a3.5 3.5 0 0 1 3.5-3.5h4.5' }],
]);
export const IconTextTool = createIcon('text-tool', [
  ['path', { d: 'M5 7V4.5h14V7M12 4.5v15M9.25 19.5h5.5' }],
]);
export const IconThimble = createIcon('thimble', [
  ['path', { d: 'M7 18.5V10a5 5 0 0 1 10 0v8.5' }],
  ['rect', { x: 5.5, y: 18, width: 13, height: 3, rx: 1.25 }],
  ['circle', { cx: 10, cy: 10.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 10.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 14.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 14.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconThreadSpool = createIcon('thread-spool', [
  ['rect', { x: 5, y: 3, width: 14, height: 3, rx: 1.25 }],
  ['rect', { x: 5, y: 18, width: 14, height: 3, rx: 1.25 }],
  ['path', { d: 'M7.5 7.5l9 1.5-9 1.5 9 1.5-9 1.5 9 1.5-9 1.5' }],
]);
export const IconTypography = createIcon('typography', [
  ['path', { d: 'M3 19 7.75 5.5 12.5 19M5 14h5.5' }],
  ['circle', { cx: 17.25, cy: 15.75, r: 3.25 }],
  ['path', { d: 'M20.5 12.5V19' }],
]);
export const IconWatercolorSet = createIcon('watercolor-set', [
  ['rect', { x: 2.75, y: 7.5, width: 18.5, height: 9, rx: 2.5 }],
  ['path', { d: 'M5 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0ZM10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0ZM15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0Z' }],
]);
export const IconYarnBall = createIcon('yarn-ball', [
  ['circle', { cx: 10, cy: 11.5, r: 7 }],
  ['path', { d: 'M3.75 9c3.5-.5 8 1.25 10.25 7.25M6.25 5.5c3.75 1.25 7.25 4.75 7.5 12.5' }],
  ['path', { d: 'M10 18.5h10' }],
]);
