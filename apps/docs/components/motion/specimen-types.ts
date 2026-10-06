/**
 * Shared shapes for motion lab specimens, so specimens.tsx and the batch-3 files (batch3/*) can both use them
 * without importing each other.
 */
import type { ReactNode } from 'react';

export type Phase = 'entering' | 'open' | 'exiting' | 'closed';

export interface SpecimenProps {
  phase: Phase;
  /** Bumps once per loop, for specimens that replay by remounting. */
  cycle: number;
}

export type SpecimenRender = (props: SpecimenProps) => ReactNode;

/** "On" is entering + open: the state a control is switched to, or an overlay is open. */
export const on = (phase: Phase): boolean => phase === 'entering' || phase === 'open';
