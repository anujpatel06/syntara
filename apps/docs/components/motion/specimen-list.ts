/**
 * The components the motion lab can animate, as plain data (docs/design/motion-lab.md §12). Kept apart from
 * specimens.tsx so the server page can read it: a list exported from a 'use client' file reaches the server as a
 * client reference, not as the array.
 */
export interface SpecimenInfo {
  id: string;
  label: string;
  group: 'Overlays' | 'Controls' | 'Content';
  /** What moves, in a few words, for the component card. */
  moves: string;
  /** The docs example whose code the Export dialog shows (apps/docs/examples/<folder>/<name>.tsx). */
  example: string;
  /** True when the stage draws a stand-in rather than the component (Dialog is modal; ADR-055). */
  standIn?: boolean;
}

export const SPECIMEN_LIST: readonly SpecimenInfo[] = [
  { id: 'dialog', label: 'Dialog', group: 'Overlays', moves: 'Opens over the page, settles, closes.', example: 'dialog-demo', standIn: true },
  { id: 'tooltip', label: 'Tooltip', group: 'Overlays', moves: 'Grows from its trigger.', example: 'tooltip-demo' },
  { id: 'switch', label: 'Switch', group: 'Controls', moves: 'The thumb springs across.', example: 'switch-demo' },
  { id: 'tabs', label: 'Tabs', group: 'Controls', moves: 'The underline slides to the new tab.', example: 'tabs-demo' },
  { id: 'accordion', label: 'Accordion', group: 'Content', moves: 'A section opens and closes.', example: 'accordion-demo' },
  { id: 'stat-tile', label: 'Stat tile', group: 'Content', moves: 'Figures fade up one after another.', example: 'stat-tile-caption' },
];

export const SPECIMEN_GROUPS = ['Overlays', 'Controls', 'Content'] as const;
