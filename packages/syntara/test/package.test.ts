// The one-install package re-exports the four packages it promises, and nothing else.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const read = (rel: string) => readFileSync(new URL(rel, import.meta.url), 'utf8');
const pkg = JSON.parse(read('../package.json')) as { dependencies: Record<string, string>; exports: Record<string, unknown> };

describe('syntara', () => {
  it('depends on exactly the four app packages', () => {
    expect(Object.keys(pkg.dependencies).sort()).toEqual(['@syntara/icons', '@syntara/react', '@syntara/theme-engine', '@syntara/tokens']);
  });

  it.each([
    ['index', '@syntara/react'],
    ['icons', '@syntara/icons'],
    ['theme-engine', '@syntara/theme-engine'],
  ])('%s re-exports %s, in JS and in types', (file, name) => {
    for (const ext of ['js', 'd.ts']) expect(read(`../src/${file}.${ext}`)).toContain(`export * from '${name}';`);
  });

  it('exports the single stylesheet', () => {
    expect(pkg.exports['./styles.css']).toBe('./dist/styles.css');
  });
});
