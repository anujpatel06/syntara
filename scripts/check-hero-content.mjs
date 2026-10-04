// The hero blocks each carry an identical copy of their content file (registry installs need self-contained folders).
// hero-orbit's copy is the source; this fails while any other copy differs.  node scripts/check-hero-content.mjs
import { readFileSync } from 'node:fs';

const dir = new URL('../apps/docs/blocks/', import.meta.url);
const source = readFileSync(new URL('hero-orbit/hero-orbit.content.ts', dir), 'utf8');
const copies = ['hero-gallery', 'hero-cards', 'hero-aurora'];
const stale = copies.filter((name) => readFileSync(new URL(`${name}/${name}.content.ts`, dir), 'utf8') !== source);
if (stale.length) {
  console.error(`Out of date with hero-orbit/hero-orbit.content.ts: ${stale.join(', ')}. Copy it over each.`);
  process.exit(1);
}
console.log(`All ${copies.length} hero content copies match hero-orbit/hero-orbit.content.ts.`);
