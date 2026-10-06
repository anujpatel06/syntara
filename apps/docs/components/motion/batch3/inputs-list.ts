/** Batch 3 (inputs): plain data for the motion lab's component list. Owned by one helper; see docs/design/motion-lab.md §12. */
import type { SpecimenInfo } from '../specimen-list';

/*
 * Stand-ins (standIn: true) are the components whose motion runs on hover, press or focus. React Aria sets those
 * states (data-hovered, data-pressed, data-focused…) from real input only, so the stand-in wears the component's own
 * stylesheet with the same attributes set by the loop. The rest are the real component, driven through a prop.
 */
export const LIST: readonly SpecimenInfo[] = [
  // Controls
  { id: 'button', label: 'Button', group: 'Controls', moves: 'Lifts on hover, dips on press.', example: 'button-demo', standIn: true },
  { id: 'link', label: 'Link', group: 'Controls', moves: 'The underline fades in, the arrow nudges.', example: 'link-standalone', standIn: true },
  { id: 'breadcrumbs', label: 'Breadcrumbs', group: 'Controls', moves: 'Hidden steps slide in from the dots.', example: 'breadcrumbs-collapsed', standIn: true },
  { id: 'pagination', label: 'Pagination', group: 'Controls', moves: 'The current page key pops across.', example: 'pagination-demo' },
  // Inputs
  { id: 'text-field', label: 'Text field', group: 'Inputs', moves: 'The focus ring arrives on a spring.', example: 'text-field-demo', standIn: true },
  { id: 'text-area', label: 'Text area', group: 'Inputs', moves: 'The focus ring arrives on a spring.', example: 'text-area-demo', standIn: true },
  { id: 'search-field', label: 'Search field', group: 'Inputs', moves: 'Focus arrives, the clear button pops in.', example: 'search-field-demo', standIn: true },
  { id: 'slider', label: 'Slider', group: 'Inputs', moves: 'The thumb grows as it is grabbed.', example: 'slider-demo', standIn: true },
  { id: 'calendar', label: 'Calendar', group: 'Inputs', moves: 'The chosen day pops in.', example: 'calendar-demo' },
];
