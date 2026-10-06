#!/usr/bin/env node
/**
 * Copies the repo files the server reads into packages/mcp/data/, at the same repo-relative paths, so the npm
 * package works without a checkout. Runs on `prepack`, so `pnpm pack` and `pnpm publish` always ship a fresh copy.
 *
 * This list is the whole contract: if a tool starts reading a new file, add it here, and test/packed.test.ts
 * (which runs the packed package from an empty folder) fails until you do.
 */
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const pkg = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repo = resolve(pkg, '../..');
const out = join(pkg, 'data');

/** [repo-relative directory, which files in it]. Directories are walked one level unless `deep`. */
const SOURCES = [
  { dir: 'packages/react/meta', match: (f) => f.endsWith('.meta.json') },
  { dir: 'apps/docs/examples', match: (f) => f.endsWith('.tsx'), deep: true },
  { dir: 'apps/docs/blocks', match: (f, rel) => rel === 'blocks.json' || /^([a-z0-9-]+)\/\1\.tsx$/.test(rel), deep: true },
  { dir: 'packages/icons/src', match: (f, rel) => rel === 'index.ts' || /^icons\/[a-z0-9-]+\.ts$/.test(rel), deep: true },
  { dir: 'tenants', match: (f, rel) => /^[a-z0-9-]+\/brand\.json$/.test(rel), deep: true },
];
const FILES = ['AGENTS.md', 'GOVERNANCE.md'];

function walk(dir, deep) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (deep) files.push(...walk(path, deep));
    } else files.push(path);
  }
  return files;
}

if (!existsSync(join(repo, 'packages/react/meta'))) {
  console.error(`bundle-data: no Syntara repo at ${repo}; run this from a checkout.`);
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
let count = 0;
let bytes = 0;
const copy = (from) => {
  const to = join(out, relative(repo, from));
  mkdirSync(dirname(to), { recursive: true });
  cpSync(from, to);
  count += 1;
  bytes += statSync(from).size;
};

for (const { dir, match, deep } of SOURCES) {
  const base = join(repo, dir);
  for (const file of walk(base, deep)) {
    const rel = relative(base, file).split('\\').join('/');
    if (match(file, rel)) copy(file);
  }
}
for (const file of FILES) copy(join(repo, file));

console.error(`bundle-data: copied ${count} files (${bytes.toLocaleString('en')} bytes) to ${relative(repo, out)}`);
