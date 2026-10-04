// The hero blocks each carry an identical copy of hero.content.ts (registry installs need self-contained folders).
// This fails while any copy differs from apps/docs/blocks/hero/hero.content.ts.  node scripts/check-hero-content.mjs
import { readFileSync } from 'node:fs';

const dir = new URL('../apps/docs/blocks/', import.meta.url);
const source = readFileSync(new URL('hero/hero.content.ts', dir), 'utf8');
const copies = ['hero-orbit', 'hero-gallery', 'hero-cards', 'hero-aurora'];
const stale = copies.filter((name) => readFileSync(new URL(`${name}/${name}.content.ts`, dir), 'utf8') !== source);
if (stale.length) {
  console.error(`Out of date with hero/hero.content.ts: ${stale.join(', ')}. Copy it over each.`);
  process.exit(1);
}
console.log(`All ${copies.length} hero content copies match hero/hero.content.ts.`);
