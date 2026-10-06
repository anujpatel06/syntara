/**
 * The `npx syntara init` command that recreates the theme on /themes in someone's own app (ADR-049). Every input is a
 * flag, so the command asks only the brand's name. Flag names are the `syntara` CLI's (packages/syntara/src/cli/init.js,
 * BRAND_FLAGS); packages/syntara/test/cli.test.ts parses this function's output to keep the two in step.
 *
 * Colours go without their "#": the CLI accepts both, and in a shell a word starting with "#" is a comment, so
 * `--primary #c2410c` would silently drop the colour.
 */
import type { BrandInput } from '@syntara/theme-engine';

const hex = (value: string) => value.replace(/^#/, '').toLowerCase();

export function initCommand(brand: Required<Omit<BrandInput, 'name' | 'font'>> & Pick<BrandInput, 'name'>): string {
  return [
    'npx syntara init',
    `--primary ${hex(brand.primary)}`,
    `--accent ${hex(brand.accent)}`,
    `--grey ${brand.neutral}`,
    `--corners ${brand.shape}`,
    `--fonts ${brand.typePair}`,
    `--spacing ${brand.density}`,
  ].join(' ');
}
