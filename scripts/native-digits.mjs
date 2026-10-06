#!/usr/bin/env node
/**
 * Writes the digits people read in Arabic and Hindi copy in the language's own digits (ADR-048):
 *   node scripts/native-digits.mjs            # rewrite in place
 *   node scripts/native-digits.mjs --check    # exit 1 if any copy still has 0–9 where native digits belong
 *
 * Files: every tenants/<id>/content.json whose locale asks for native digits (`-u-nu-arab` → ٠–٩, `-u-nu-deva` → ०–९;
 * today Qamar and Haat), and the docs examples' word lists apps/docs/examples/_copy/ar.json and hi.json.
 *
 * Left alone, because a program reads them or they are codes, not numbers to read:
 * - keys `date`, `lastActive`, `id`, `reference`, and anything under `copyReview`. Form `value`s and placeholders are
 *   converted like the rest: a Select's `value` must match its converted option word for word;
 * - digits touching a Latin letter, hyphen, slash or underscore: QM-58213, HR-2026-40102, MP4, H.264;
 * - digits inside {braces}: ICU placeholders.
 * Numbers stored as JSON numbers (amounts, stats) need nothing: Intl formats them in the locale's digits.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const SYSTEMS = {
  arab: { zero: 0x0660, group: '٬', decimal: '٫' },
  deva: { zero: 0x0966, group: ',', decimal: '.' },
};
/** A tenant's numbering system from its content.json locale, e.g. "ar-AE-u-nu-arab" → "arab". */
const tenantFiles = readdirSync(`${root}tenants`, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(`${root}tenants/${d.name}/content.json`))
  .map((d) => {
    const path = `tenants/${d.name}/content.json`;
    const system = /-u-(?:.*-)?nu-([a-z]+)/.exec(JSON.parse(readFileSync(`${root}${path}`, 'utf8')).locale ?? '')?.[1];
    return { path, system };
  })
  .filter((f) => f.system && Object.hasOwn(SYSTEMS, f.system));
const FILES = [
  ...tenantFiles,
  { path: 'apps/docs/examples/_copy/ar.json', system: 'arab', flat: true },
  { path: 'apps/docs/examples/_copy/hi.json', system: 'deva', flat: true },
];
const SKIP_KEYS = new Set(['date', 'lastActive', 'id', 'reference', 'copyReview', 'locale', 'currency', 'dir']);

/** A run of digits with , or . between digits, not touching a Latin letter, - / _ or another digit-code character. */
const NUMBER = /(?<![A-Za-z0-9_\-/.{])\d+(?:[.,]\d+)*(?![A-Za-z0-9_\-/])/g;

export function nativeDigits(text, system) {
  const s = SYSTEMS[system];
  // keep {placeholders} as written
  return text.split(/(\{[^}]*\})/).map((part) => (part.startsWith('{') ? part : part.replace(NUMBER, (n) =>
    [...n].map((c) => (c >= '0' && c <= '9' ? String.fromCodePoint(s.zero + Number(c)) : c === ',' ? s.group : c === '.' ? s.decimal : c)).join(''),
  ))).join('');
}

const check = process.argv.includes('--check');
let changed = 0;
for (const f of FILES) {
  const file = `${root}${f.path}`;
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const walk = (o, key) => {
    // a skipped key protects a value, not a whole section: `details.date` is an object whose `description` is copy
    if (SKIP_KEYS.has(key) && (typeof o === 'string' || key === 'copyReview')) return o;
    if (typeof o === 'string') {
      const n = nativeDigits(o, f.system);
      if (n !== o) changed++;
      return n;
    }
    if (Array.isArray(o)) return o.map((v) => walk(v, key));
    if (o && typeof o === 'object') return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, walk(v, f.flat ? '' : k)]));
    return o;
  };
  const out = walk(data, '');
  if (!check) writeFileSync(file, `${JSON.stringify(out, null, 2)}\n`);
}
console.log(`${check ? 'would change' : 'changed'} ${changed} strings`);
if (check && changed) process.exit(1);
