/** Batch 3 (overlays): plain data for the motion lab's component list. Owned by one helper; see docs/design/motion-lab.md §12. */
import type { SpecimenInfo } from '../specimen-list';

/*
 * Every one of these is a stand-in (ADR-055): opening the real component moves focus and hides the page, and a real
 * toast speaks through a live region, so looping them would steal focus or talk over a screen reader every loop.
 * Each stand-in wears the component's own stylesheet, so the motion is the component's.
 */
export const LIST: readonly SpecimenInfo[] = [
  { id: 'popover', label: 'Popover', group: 'Overlays', moves: 'Grows out of its button.', example: 'popover-demo', standIn: true },
  { id: 'select', label: 'Select', group: 'Overlays', moves: 'The list drops open, rows step in.', example: 'select-demo', standIn: true },
  { id: 'menu', label: 'Menu', group: 'Overlays', moves: 'Opens from its button, rows step in.', example: 'menu-demo', standIn: true },
  { id: 'combobox', label: 'Combobox', group: 'Overlays', moves: 'Suggestions drop open, rows step in.', example: 'combobox-demo', standIn: true },
  { id: 'date-picker', label: 'Date picker', group: 'Overlays', moves: 'The calendar grows from the field.', example: 'date-picker-demo', standIn: true },
  { id: 'command', label: 'Command', group: 'Overlays', moves: 'The palette rises over the page.', example: 'command-demo', standIn: true },
  { id: 'toast', label: 'Toast', group: 'Overlays', moves: 'Slides up from the edge, drops away.', example: 'toast-demo', standIn: true },
];
