/**
 * The components the motion lab can animate, as plain data (docs/design/motion-lab.md §12). Kept apart from
 * specimens.tsx so the server page can read it: a list exported from a 'use client' file reaches the server as a
 * client reference, not as the array.
 */
import { LIST as DATA_LIST } from './batch3/data-list';
import { LIST as INPUTS_LIST } from './batch3/inputs-list';
import { LIST as OVERLAYS_LIST } from './batch3/overlays-list';
import { LIST as PAGE_LIST } from './batch3/page-list';

/** Panel groups, in order. */
export const SPECIMEN_GROUPS = ['Overlays', 'Controls', 'Inputs', 'Content', 'Data', 'Page'] as const;

export interface SpecimenInfo {
  id: string;
  label: string;
  group: (typeof SPECIMEN_GROUPS)[number];
  /** What moves, in a few words, for the component card. */
  moves: string;
  /** The docs example whose code the Export dialog shows (apps/docs/examples/<folder>/<name>.tsx). */
  example: string;
  /** True when the stage draws a stand-in rather than the component (Dialog is modal; ADR-055). */
  standIn?: boolean;
}

const BATCHES_1_2: readonly SpecimenInfo[] = [
  // Overlays
  { id: 'dialog', label: 'Dialog', group: 'Overlays', moves: 'Opens over the page, settles, closes.', example: 'dialog-demo', standIn: true },
  { id: 'sheet', label: 'Sheet', group: 'Overlays', moves: 'Slides in from the edge, slides away.', example: 'sheet-demo', standIn: true },
  { id: 'tooltip', label: 'Tooltip', group: 'Overlays', moves: 'Grows from its trigger.', example: 'tooltip-demo' },
  // Controls
  { id: 'switch', label: 'Switch', group: 'Controls', moves: 'The thumb springs across.', example: 'switch-demo' },
  { id: 'checkbox', label: 'Checkbox', group: 'Controls', moves: 'The tick draws in.', example: 'checkbox-demo' },
  { id: 'radio-group', label: 'Radio group', group: 'Controls', moves: 'The dot springs to the new choice.', example: 'radio-group-demo' },
  { id: 'toggle-group', label: 'Toggle group', group: 'Controls', moves: 'The pill slides to the new option.', example: 'toggle-group-demo' },
  { id: 'chip', label: 'Chip', group: 'Controls', moves: 'A tick grows in as a filter turns on.', example: 'chip-demo' },
  { id: 'tabs', label: 'Tabs', group: 'Controls', moves: 'The underline slides to the new tab.', example: 'tabs-demo' },
  { id: 'steps', label: 'Steps', group: 'Controls', moves: 'A step completes and the next lights up.', example: 'steps-demo' },
  // Content
  { id: 'accordion', label: 'Accordion', group: 'Content', moves: 'A section opens and closes.', example: 'accordion-demo' },
  { id: 'stat-tile', label: 'Stat tile', group: 'Content', moves: 'Figures fade up one after another.', example: 'stat-tile-caption' },
  { id: 'badge', label: 'Badge', group: 'Content', moves: 'Each badge pops in.', example: 'badge-demo' },
  { id: 'meter', label: 'Meter', group: 'Content', moves: 'The bar fills to its value.', example: 'meter-demo' },
  { id: 'sparkline', label: 'Sparkline', group: 'Content', moves: 'The line draws itself.', example: 'sparkline-demo' },
  { id: 'avatar', label: 'Avatar', group: 'Content', moves: 'Faces pop in.', example: 'avatar-demo' },
];

/** Batches 1 and 2, then batch 3's four lists (batch3/*-list.ts), in group order on the panel. */
export const SPECIMEN_LIST: readonly SpecimenInfo[] = [...BATCHES_1_2, ...OVERLAYS_LIST, ...INPUTS_LIST, ...DATA_LIST, ...PAGE_LIST];
