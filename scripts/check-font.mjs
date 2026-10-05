#!/usr/bin/env node
/**
 * Checks a brand font against docs/design/custom-fonts.md (ADR-051) and prints the result in plain words.
 * Prototype entry for the first example; `npx syntara init --font` will call the same checkFont after Anuj approves.
 *
 *   node scripts/check-font.mjs Manrope                       a Google font, English
 *   node scripts/check-font.mjs Mukta --script=devanagari
 *   node scripts/check-font.mjs Manrope --heading=Fraunces    two fonts
 *   node scripts/check-font.mjs --files=a-400.woff2,a-700.woff2 --family="Acme Sans"
 *   node scripts/check-font.mjs Manrope --out=<brand.json> --brand='{"name":"…","primary":"#…",…}'
 *                                                             on a pass, write a brand file with the measured font
 *   node scripts/check-font.mjs --record Inter "DM Sans" …    measure each; add the passes to passed.json
 *   --json=<file>                                             also write the raw result
 *
 * Uses the Chrome or Edge on this computer ($SYNTARA_CHROME to choose). Needs network for Google Fonts.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

// The engine is TypeScript source in the repo: load tsx first (as check-script-clipping.mjs does), then the checker.
const req = createRequire(new URL('../packages/theme-engine/package.json', import.meta.url));
(await import(pathToFileURL(req.resolve('tsx/esm/api')).href)).register();
const { checkFont } = await import('../packages/syntara/src/fonts/check.js');
const { fontReport } = await import('../packages/syntara/src/fonts/report.js');

const args = process.argv.slice(2);
const option = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split('=').slice(1).join('=');
const positional = args.filter((a) => !a.startsWith('--'));
const script = option('script') ?? 'latin';
const version = JSON.parse(readFileSync(new URL('../packages/syntara/package.json', import.meta.url), 'utf8')).version;
const plain = (s) => s.replace(/\*\*/g, '');
const request = (family) => ({
  body: option('files') ? { family: option('family'), files: option('files').split(','), category: option('category') } : { google: family },
  ...(option('heading') ? { heading: { google: option('heading') } } : {}),
  script,
});

if (args.includes('--record')) {
  const file = new URL('../packages/syntara/src/fonts/passed.json', import.meta.url);
  let db;
  try {
    db = JSON.parse(readFileSync(file, 'utf8'));
  } catch {
    db = { note: 'Google fonts that passed every check in docs/design/custom-fonts.md. Written by scripts/check-font.mjs --record.', fonts: {} };
  }
  for (const family of positional) {
    const t0 = performance.now();
    const result = await checkFont(request(family), { version });
    const s = ((performance.now() - t0) / 1000).toFixed(1);
    console.log(`${family}: ${result.pass ? `pass, ${result.cases} cases, ${JSON.stringify(result.font.measured.lineHeight)}, x-height ${result.font.measured.xHeight}` : `FAIL ${result.failures.map((f) => f.kind).join(', ')}`} (${s} s)`);
    const list = (db.fonts[script] ??= []).filter((p) => p.family !== family);
    if (result.pass) list.push({ family, lineHeight: result.font.measured.lineHeight, xHeight: result.font.measured.xHeight, cases: result.cases, by: result.font.measured.by, date: result.font.measured.date });
    db.fonts[script] = list.sort((a, b) => a.family.localeCompare(b.family));
  }
  writeFileSync(file, JSON.stringify(db, null, 2) + '\n');
} else {
  const family = positional[0] ?? option('family') ?? '';
  const t0 = performance.now();
  const result = await checkFont(request(family), { version, onProgress: (l) => console.error(l) });
  console.error(`(${((performance.now() - t0) / 1000).toFixed(1)} s)`);
  console.log('\n' + plain(fontReport(result, { script, family: option('heading') ? `${family} / ${option('heading')}` : family })));
  if (option('json')) writeFileSync(option('json'), JSON.stringify(result, null, 2) + '\n');
  if (result.pass && option('out')) {
    const brand = { ...JSON.parse(option('brand') ?? '{}'), font: result.font };
    writeFileSync(option('out'), JSON.stringify(brand, null, 2) + '\n');
    console.error(`Wrote ${option('out')}`);
  }
  if (!result.pass) process.exitCode = 1;
}
