#!/usr/bin/env node
/**
 * Renders the homepage landscapes from scripts/landscapes/terrain.html into apps/docs/public/landing.
 *   node scripts/render-landscapes.mjs
 * WebP with alpha. Needs a GPU-backed Chromium (a normal Mac is fine; a software renderer takes minutes).
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { launchBrowser } from './launch-browser.mjs';

const page = new URL('./landscapes/terrain.html', import.meta.url);
const out = new URL('../apps/docs/public/landing/', import.meta.url);
mkdirSync(out, { recursive: true });

/** file → query. `hills` is the whole scene; `hills-front` only the nearest ridge, to sit in front of the app window. */
const RENDERS = {
  'hills.webp': 's=vela&w=1920&h=1200',
  'hills-front.webp': 's=vela&w=1920&h=1200&layer=1&cut=48',
  'dunes.webp': 's=dunes&w=1920&h=900',
  'dunes-front.webp': 's=dunes&w=1920&h=900&layer=1&cut=200',
};

const browser = await launchBrowser({ args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const tab = await browser.newPage({ viewport: { width: 1440, height: 820 } });
for (const [file, query] of Object.entries(RENDERS)) {
  await tab.goto(`${page.href}?${query}`);
  await tab.waitForFunction('window.done === true', null, { timeout: 300_000 });
  const data = await tab.evaluate(() => window.png);
  const bytes = Buffer.from(data.split(',')[1], 'base64');
  writeFileSync(new URL(file, out), bytes);
  console.log(`${file}  ${(bytes.length / 1024).toFixed(0)} KB`);
}
await browser.close();
console.log(`→ ${fileURLToPath(out)}`);
