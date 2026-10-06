import type { Metadata } from 'next';
import { CodeBlock } from '@/components/mdx/code-block';
import { MotionLab } from '@/components/motion/motion-lab';
import { SPECIMEN_LIST } from '@/components/motion/specimen-list';
import { readExampleSource } from '@/lib/examples';
import { HOUSE_ID } from '@/lib/house';
import { getThemePresets } from '@/lib/theme-presets';

export const metadata: Metadata = {
  title: 'Motion lab',
  description: 'Pick a component, a brand and a motion style, watch it move, and export the tokens.',
};

/**
 * docs/design/motion-lab.md, ADR-055. An editor, not a page with a header (spec §11), so it renders its own <main>
 * (the skip link's target) instead of PageShell. Components come from components/motion/specimens.tsx; brands are the five product tenants (house is the site).
 */
export default function Motion() {
  const brands = getThemePresets().filter((p) => p.id !== HOUSE_ID);
  // Each component's docs example, highlighted here on the server, for the Export dialog's second tab.
  const componentCode = Object.fromEntries(
    SPECIMEN_LIST.map((s) => {
      const example = readExampleSource(s.example);
      return [s.id, example ? <CodeBlock code={example.source} lang="tsx" title={`${s.example}.tsx`} /> : null];
    }),
  );

  return (
    <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
      <MotionLab
        brands={brands}
        initialBrand="harbor"
        componentCode={componentCode}
      />
    </main>
  );
}
