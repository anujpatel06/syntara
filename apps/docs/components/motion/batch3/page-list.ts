/** Batch 3 (page): plain data for the motion lab's component list. Owned by one helper; see docs/design/motion-lab.md §12. */
import type { SpecimenInfo } from '../specimen-list';

export const LIST: readonly SpecimenInfo[] = [
  // Hero has no entrance: its only motion is the decoration's own loop (orbit: rings ripple out, every 6.4 s).
  { id: 'hero', label: 'Hero', group: 'Page', moves: 'Rings ripple out around the button.', example: 'hero-orbit' },
  { id: 'marquee', label: 'Marquee', group: 'Page', moves: 'The strip scrolls by itself.', example: 'marquee-demo' },
  { id: 'sidebar', label: 'Sidebar', group: 'Page', moves: 'A group opens and closes.', example: 'sidebar-demo' },
  // Footer only moves under the pointer, so the loop plays a hover on a social link, drawn as a stand-in.
  { id: 'footer', label: 'Footer', group: 'Page', moves: 'A social link lifts under the pointer.', example: 'footer-demo', standIn: true },
  { id: 'file-upload', label: 'File upload', group: 'Page', moves: 'Files rise in, progress glides, ticks pop.', example: 'file-upload-with-progress' },
  { id: 'prompt-composer', label: 'Prompt composer', group: 'Page', moves: 'Send lights up, the glow breathes.', example: 'prompt-composer-brand-glow' },
  // A stand-in wrapper, because the real one holds a live region; the words and sources are the real parts.
  { id: 'streaming-response', label: 'Streaming response', group: 'Page', moves: 'Words ink in, then sources pop.', example: 'streaming-response-demo', standIn: true },
];
