/** Batch 3 (data): plain data for the motion lab's component list. Owned by one helper; see docs/design/motion-lab.md §12. */
import type { SpecimenInfo } from '../specimen-list';

export const LIST: readonly SpecimenInfo[] = [
  { id: 'area-chart', label: 'Area chart', group: 'Data', moves: 'The line draws, the area fades up.', example: 'area-chart-demo' },
  { id: 'bar-chart', label: 'Bar chart', group: 'Data', moves: 'Bars grow from the baseline in turn.', example: 'bar-chart-demo' },
  { id: 'chart', label: 'Chart', group: 'Data', moves: 'The crosshair fades in, the readout glides.', example: 'chart-tooltip' },
  { id: 'data-table', label: 'Data table', group: 'Data', moves: 'Selection bars grow, the sort arrow turns.', example: 'data-table-selection' },
  { id: 'progress', label: 'Progress', group: 'Data', moves: 'The bar glides to its new value.', example: 'progress-demo' },
  { id: 'skeleton', label: 'Skeleton', group: 'Data', moves: 'A soft shimmer sweeps across.', example: 'skeleton-card' },
  { id: 'spinner', label: 'Spinner', group: 'Data', moves: 'Spokes fade round in a circle.', example: 'spinner-demo' },
  { id: 'tag', label: 'Tag', group: 'Data', moves: 'Each tag pops in.', example: 'tag-demo' },
  { id: 'person-chip', label: 'Person chip', group: 'Data', moves: 'Chips pop in one after another.', example: 'person-chip-demo' },
  { id: 'alert', label: 'Alert', group: 'Data', moves: 'The close button gives under a press.', example: 'alert-demo', standIn: true },
  { id: 'card', label: 'Card', group: 'Data', moves: 'Header, content and footer fade up.', example: 'card-demo' },
];
