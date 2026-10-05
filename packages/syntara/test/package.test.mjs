// The one-install package re-exports the four packages it promises, and nothing else.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('depends on exactly the four app packages', () => {
  assert.deepEqual(Object.keys(pkg.dependencies).sort(), ['@syntara/icons', '@syntara/react', '@syntara/theme-engine', '@syntara/tokens']);
});

test('each entry re-exports its package', () => {
  for (const [file, name] of [['index', '@syntara/react'], ['icons', '@syntara/icons'], ['theme-engine', '@syntara/theme-engine']]) {
    for (const ext of ['js', 'd.ts']) {
      const src = readFileSync(new URL(`../src/${file}.${ext}`, import.meta.url), 'utf8');
      assert.match(src, new RegExp(`export \\* from '${name}';`), `${file}.${ext}`);
    }
  }
});

test('exports the single stylesheet', () => {
  assert.equal(pkg.exports['./styles.css'], './dist/styles.css');
});
