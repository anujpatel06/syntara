#!/usr/bin/env node
/**
 * Builds dist/styles.css: the token CSS for every tenant (@syntara/tokens/dist/syntara.css) followed by the
 * component styles (@syntara/react/dist/styles.css), so an app imports one stylesheet. Tokens come first because
 * the component rules read the variables they define. Both files must already be built (they are, before this
 * package packs: pnpm publishes dependencies first).
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/* the installed package's folder; read directly, because in the workspace a package's `exports` list only its source */
const here = fileURLToPath(new URL('..', import.meta.url));
const pkgDir = (name) => join(here, 'node_modules', name);
const parts = [
  ['@syntara/tokens', join(pkgDir('@syntara/tokens'), 'dist', 'syntara.css')],
  ['@syntara/react', join(pkgDir('@syntara/react'), 'dist', 'styles.css')],
];
const out = new URL('../dist/styles.css', import.meta.url);
mkdirSync(new URL('../dist/', import.meta.url), { recursive: true });
let css = '/* syntara/styles.css: every tenant\'s tokens, then the component styles. Built by scripts/build.mjs. */\n';
for (const [name, file] of parts) {
  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch {
    console.error(`missing ${file}: build ${name} first (pnpm --filter ${name} build)`);
    process.exit(1);
  }
  css += `\n/* ── ${name} ── */\n${text}\n`;
}
writeFileSync(out, css);
console.log(`dist/styles.css  ${(Buffer.byteLength(css) / 1024).toFixed(0)} KB`);
