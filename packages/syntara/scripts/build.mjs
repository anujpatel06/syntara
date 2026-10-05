#!/usr/bin/env node
/**
 * Builds dist/styles.css: one stylesheet that pulls in every tenant's tokens, then the component styles. It imports
 * them from the installed packages rather than copying them in, so the component CSS always matches the installed
 * @syntara/react (a copy would freeze whatever this machine had built, released or not). Vite, Next.js and other
 * bundlers resolve package paths in CSS @import.
 */
import { mkdirSync, writeFileSync } from 'node:fs';

const css = `/* syntara/styles.css: every tenant's tokens, then the component styles. Built by scripts/build.mjs. */
@import '@syntara/tokens/dist/syntara.css';
@import '@syntara/react/styles.css';
`;
mkdirSync(new URL('../dist/', import.meta.url), { recursive: true });
writeFileSync(new URL('../dist/styles.css', import.meta.url), css);
console.log('dist/styles.css written');
