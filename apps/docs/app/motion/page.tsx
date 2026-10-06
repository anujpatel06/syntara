import type { Metadata } from 'next';
import { CodeBlock } from '@/components/mdx/code-block';
import { MotionLab } from '@/components/motion/motion-lab';
import { readExampleSource } from '@/lib/examples';
import { HOUSE_ID } from '@/lib/house';
import { getThemePresets } from '@/lib/theme-presets';

export const metadata: Metadata = {
  title: 'Motion lab',
  description: 'Pick a brand and a motion style, watch a Syntara Dialog open and close in it, and export the tokens.',
};

/**
 * docs/design/motion-lab.md, ADR-054. An editor, not a page with a header (spec §11), so it renders its own <main>
 * (the skip link's target) instead of PageShell. v1 is Dialog only, in the five product brands (house is the site).
 */
export default function Motion() {
  const brands = getThemePresets().filter((p) => p.id !== HOUSE_ID);
  const example = readExampleSource('dialog-demo');

  return (
    <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
      <MotionLab
        brands={brands}
        initialBrand="harbor"
        componentCode={example ? <CodeBlock code={example.source} lang="tsx" title="dialog-demo.tsx" /> : null}
      />
    </main>
  );
}
