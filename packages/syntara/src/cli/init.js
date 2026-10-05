// `npx syntara init` and `npx syntara build`: a brand in, a checked theme file out (ADR-049).
// The pure parts (brand from answers, files, report, preview link) are exported for tests; `runInit` and `runBuild`
// do the asking and writing through an injected `io`, so tests never touch a terminal.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { brandFidelity, generateTheme, googleFontsHref, isValidHex, TYPE_PAIRS, toCSS } from '@syntara/theme-engine';
import { findLook, LOOKS } from './looks.js';
import { findEntry, planWire } from './wire.js';

/** @typedef {import('@syntara/theme-engine').BrandInput} BrandInput */
/** @typedef {import('@syntara/theme-engine').Theme} Theme */

export const CONFIG_FILE = 'syntara.brand.json';
export const SITE = 'https://syntara.live';

const NEUTRALS = ['cool', 'neutral', 'warm', 'paper'];
const SHAPES = ['sharp', 'soft', 'round'];
const DENSITIES = ['comfortable', 'compact'];
// The two-script pairs are for Arabic and Hindi brands; they are offered too, last.
const TYPE_PAIR_IDS = /** @type {import('@syntara/theme-engine').TypePairId[]} */ (Object.keys(TYPE_PAIRS));

/**
 * "Acme Pay" → "acme-pay", "Café" → "cafe". The theme id that ThemeScope and the CSS selector use. A name with no
 * Latin letters (e.g. Arabic or Hindi) falls back to "my-brand"; change `theme` in syntara.brand.json, then build.
 */
export function themeId(name) {
  const id = String(name)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return id || 'my-brand';
}

/** The stylesheet for one brand: its fonts, then its tokens under [data-syntara-theme="<id>"]. */
export function themeCss(theme, id) {
  const fonts = googleFontsHref(TYPE_PAIRS[theme.input.typePair]);
  return `@import url("${fonts}");\n\n${toCSS(theme, { selector: `[data-syntara-theme="${id}"]` })}`;
}

/** A link that opens this exact brand in the docs site's theme preview. */
export function previewUrl(brand) {
  const q = new URLSearchParams({
    primary: brand.primary.replace('#', ''),
    accent: (brand.accent ?? brand.primary).replace('#', ''),
    neutral: brand.neutral,
    shape: brand.shape,
    type: brand.typePair,
    density: brand.density,
  });
  return `${SITE}/themes?${q}`;
}

/** How far a shipped colour is from the asked one, in words (thresholds from the engine's fidelity.ts). */
function distanceWords(deltaE) {
  if (deltaE < 2) return 'too small to see side by side';
  if (deltaE <= 10) return 'visible side by side';
  return 'reads as a different colour';
}

/** Plain-English lines about what the engine checked and changed. Every number comes from the theme. */
export function reportLines(theme) {
  const { checks, passed, failed } = theme.summary;
  const lines = [];
  lines.push(
    failed === 0
      ? `✓ ${passed} of ${checks} contrast checks pass, in light and dark (WCAG 2.2 AA).`
      : `✗ ${failed} of ${checks} contrast checks fail. Please report this: it should not happen.`,
  );
  for (const input of /** @type {const} */ (['primary', 'accent'])) {
    if (input === 'accent' && theme.input.accent === theme.input.primary) continue;
    const records = brandFidelity(theme).filter((r) => r.input === input);
    const name = input === 'primary' ? 'Main colour' : 'Accent colour';
    if (records.every((r) => r.exact)) {
      lines.push(`✓ ${name} ${theme.input[input]} is kept exactly, in light and dark.`);
      continue;
    }
    const parts = records.map((r) =>
      r.exact ? `kept exactly in ${r.scheme}` : `changed to ${r.shipped} in ${r.scheme} (${distanceWords(r.deltaE)})`,
    );
    lines.push(`• ${name} ${theme.input[input]}: ${parts.join('; ')}, so text on it stays readable.`);
  }
  const fixes = theme.adjustments.filter((a) => a.kind !== 'choice');
  if (fixes.length > 0) {
    lines.push(`• Syntara made ${fixes.length} small colour ${fixes.length === 1 ? 'fix' : 'fixes'} so everything passes:`);
    for (const a of fixes.slice(0, 4)) lines.push(`    ${a.message}`);
    if (fixes.length > 4) lines.push(`    …and ${fixes.length - 4} more, listed in the preview's Accessibility tab.`);
  }
  return lines;
}

/** Everything the command writes, as { path: content }. Paths are relative to the project folder. */
export function buildFiles(brand, { id = themeId(brand.name), cssPath } = {}) {
  const theme = generateTheme(brand);
  const config = { theme: id, css: cssPath, brand: theme.input };
  return {
    theme,
    id,
    files: {
      [CONFIG_FILE]: JSON.stringify(config, null, 2) + '\n',
      [cssPath]: themeCss(theme, id),
    },
  };
}

/** Where the theme file goes: next to the app's code when there is a src/ folder. */
export function defaultCssPath(cwd) {
  return existsSync(join(cwd, 'src')) ? 'src/syntara-theme.css' : 'syntara-theme.css';
}

// The brand flags, by the words people see in the questions and on /themes ("grey", "corners"), mapped to the
// engine's field names. `/themes` builds a full command from these (apps/docs/components/themes/use-command.ts).
export const BRAND_FLAGS = /** @type {const} */ ({
  '--primary': 'primary',
  '--accent': 'accent',
  '--grey': 'neutral',
  '--corners': 'shape',
  '--fonts': 'typePair',
  '--spacing': 'density',
});
const CHOICES = { neutral: NEUTRALS, shape: SHAPES, typePair: TYPE_PAIR_IDS, density: DENSITIES };

/** --flag value / --flag / -y. Unknown flags and bad values are reported with how to fix them, not ignored. */
export function parseArgs(argv) {
  const opts = { yes: false, force: false, install: true, edit: true, look: undefined, name: undefined, out: undefined, brand: {} };
  const takes = { '--look': 'look', '--name': 'name', '--out': 'out' };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--yes' || arg === '-y') opts.yes = true;
    else if (arg === '--force') opts.force = true;
    else if (arg === '--no-install') opts.install = false;
    else if (arg === '--no-edit') opts.edit = false;
    else if (arg in takes || arg in BRAND_FLAGS) {
      const value = argv[++i];
      if (value === undefined || value.startsWith('--')) throw new Error(`${arg} needs a value.`);
      if (arg in takes) opts[takes[arg]] = value;
      else opts.brand[BRAND_FLAGS[arg]] = value;
    } else throw new Error(`Unknown option ${arg}. Run "npx syntara help" to see the options.`);
  }
  if (opts.look !== undefined && !findLook(opts.look)) {
    throw new Error(`There is no look called "${opts.look}". Pick one of: ${LOOKS.map((l) => l.id).join(', ')}.`);
  }
  for (const [flag, field] of Object.entries(BRAND_FLAGS)) {
    const value = opts.brand[field];
    if (value === undefined) continue;
    if (field === 'primary' || field === 'accent') {
      if (!isValidHex(value)) throw new Error(`${flag} "${value}" is not a colour. Use a hex value such as #2f5bea.`);
    } else if (!CHOICES[field].includes(value)) {
      throw new Error(`${flag} "${value}" is not an option. Pick one of: ${CHOICES[field].join(', ')}.`);
    }
  }
  return opts;
}

/**
 * @typedef {object} IO
 * @property {string} cwd
 * @property {boolean} interactive  false when there is no terminal to ask in (CI, pipes): every answer is the default
 * @property {(question: string) => Promise<string>} ask
 * @property {(line?: string) => void} say
 * @property {(cwd: string) => boolean} isInstalled  syntara is already in this project's package.json
 * @property {(cwd: string) => string | undefined} installCommand  how to add syntara here; undefined without a package.json
 * @property {(command: string) => boolean} run
 */

/** Asks until the answer is valid. Enter gives the default. */
async function askValid(io, question, fallback, valid, hint) {
  for (;;) {
    const raw = (await io.ask(`${question} (${fallback}): `)).trim();
    const answer = raw === '' ? fallback : raw;
    if (valid(answer)) return answer;
    io.say(`  ${hint}`);
  }
}

/** A numbered list; Enter picks the first. Returns the chosen item. */
async function choose(io, question, items, label) {
  io.say(question);
  items.forEach((item, i) => io.say(`  ${i + 1}. ${label(item)}`));
  const n = await askValid(
    io,
    'Type a number',
    '1',
    (a) => /^\d+$/.test(a) && Number(a) >= 1 && Number(a) <= items.length,
    `Type a number from 1 to ${items.length}.`,
  );
  return items[Number(n) - 1];
}

const hexHint = 'Use a hex colour such as #2f5bea.';

/**
 * The questions. Returns a BrandInput. Anything given as a flag is not asked. Without a terminal or with --yes,
 * nothing is asked: missing inputs come from --look, or the first look.
 */
async function askBrand(io, opts) {
  const given = opts.brand;
  const look = findLook(opts.look);
  const base = (look ?? LOOKS[0]).brand;
  if (opts.yes || !io.interactive) return { name: opts.name ?? 'My Brand', ...base, ...given };

  const askName = async () => opts.name ?? (await askValid(io, 'Brand name', 'My Brand', (a) => a.length > 0, 'Type a name.'));
  // A look, or any input beyond the main colour (e.g. a command copied from /themes), answers "guidelines?" already.
  const settled = look !== undefined || Object.keys(given).some((field) => field !== 'primary');
  if (settled && look) return { name: await askName(), ...base, ...given };

  const has = settled
    ? 'y'
    : await askValid(io, 'Do you have brand guidelines? y or n', 'n', (a) => /^(y|yes|n|no)$/i.test(a), 'Type y or n.');
  const name = await askName();

  if (/^n/i.test(has)) {
    const picked = await choose(io, 'Pick a starting look. You can change any of it later.', LOOKS, (l) => `${l.label}: ${l.fits}`);
    const primary =
      given.primary ?? (await askValid(io, 'Main colour, or Enter to keep the look’s', picked.brand.primary, isValidHex, hexHint));
    return { name, ...picked.brand, primary };
  }

  const primary = given.primary ?? (await askValid(io, 'Main brand colour', base.primary, isValidHex, hexHint));
  const accent = given.accent ?? (await askValid(io, 'Accent colour, or Enter to use the main colour', primary, isValidHex, hexHint));
  const neutral = given.neutral ?? (await choose(io, 'Grey tone', NEUTRALS, (n) => n));
  const shape = given.shape ?? (await choose(io, 'Corners', SHAPES, (x) => x));
  const typePair = given.typePair ?? (await choose(io, 'Fonts', TYPE_PAIR_IDS, (id) => TYPE_PAIRS[id].label));
  const density = given.density ?? (await choose(io, 'Spacing', DENSITIES, (d) => d));
  return { name, primary, accent, neutral, shape, typePair, density };
}

/** Writes files, refusing to replace existing ones unless --force or the person says yes. */
async function writeAll(io, files, opts) {
  const existing = Object.keys(files).filter((p) => existsSync(join(io.cwd, p)));
  if (existing.length > 0 && !opts.force) {
    const canAsk = io.interactive && !opts.yes;
    const ok =
      canAsk &&
      /^y/i.test(await askValid(io, `${existing.join(' and ')} already exist. Replace? y or n`, 'n', (a) => /^(y|yes|n|no)$/i.test(a), 'Type y or n.'));
    if (!ok) {
      io.say(`Nothing written: ${existing.join(' and ')} already exist. Run again with --force to replace them.`);
      return false;
    }
  }
  for (const [path, content] of Object.entries(files)) {
    mkdirSync(dirname(join(io.cwd, path)), { recursive: true });
    writeFileSync(join(io.cwd, path), content);
  }
  return true;
}

function sayNextSteps(io, { id, cssPath, brand, installed, wired }) {
  io.say('');
  io.say('Next:');
  let step = 1;
  if (!installed) io.say(`  ${step++}. Install Syntara:  npm install syntara`);
  if (!wired) {
    // The entry file usually sits in src/ (main.tsx, app/layout.tsx), so the path is given from there when it can be.
    const inSrc = cssPath.startsWith('src/');
    io.say(`  ${step++}. In your app's entry file${inSrc ? ' (e.g. src/main.tsx)' : ''}, import the styles once:`);
    io.say(`       import 'syntara/styles.css';`);
    io.say(`       import './${inSrc ? cssPath.slice(4) : cssPath}';${inSrc ? '' : '   (path from your project folder)'}`);
    io.say(`  ${step++}. Wrap your app:`);
    io.say(`       <ThemeScope theme="${id}" style={{ minHeight: '100vh' }}>…</ThemeScope>`);
  }
  io.say(`  ${step++}. Use a component:  import { Button } from 'syntara';`);
  io.say('');
  io.say(`See it live:   ${previewUrl(brand)}`);
  io.say(`Change it:     edit ${CONFIG_FILE}, then run  npx syntara build`);
}

/**
 * Adds the imports and the ThemeScope to the app's entry file, after showing the change and asking (Enter = yes).
 * Returns true when the app loads Syntara afterwards, whether this run added it or it was there already.
 */
async function wireApp(io, { id, cssPath }, opts) {
  const entry = findEntry(io.cwd);
  if (!entry) return false;
  const file = join(io.cwd, entry.path);
  const plan = planWire(readFileSync(file, 'utf8'), { kind: entry.kind, entryPath: entry.path, cssPath, id });
  io.say('');
  if (plan.status === 'already') {
    io.say(`${entry.path} already loads Syntara, so it was left as it is.`);
    return true;
  }
  if (plan.status === 'manual') {
    io.say(`${entry.path} was not changed: ${plan.reason}. The steps below say what to add by hand.`);
    return false;
  }
  io.say(`To finish, Syntara will add these to ${entry.path}:`);
  for (const line of plan.added) io.say(`  + ${line}`);
  io.say(`  ~ ${plan.wrapped}`);
  const go =
    opts.yes ||
    !io.interactive ||
    /^y/i.test(await askValid(io, `Change ${entry.path}? y or n`, 'y', (a) => /^(y|yes|n|no)$/i.test(a), 'Type y or n.'));
  if (!go) return false;
  writeFileSync(file, plan.source);
  io.say(`Changed ${entry.path}: your app now loads your theme.`);
  return true;
}

/** `npx syntara init`. Returns the exit code. */
export async function runInit(argv, io) {
  const opts = parseArgs(argv);
  io.say('Syntara: set up your brand. Press Enter to take the suggestion in brackets.');
  io.say('');
  const brand = await askBrand(io, opts);
  const cssPath = opts.out ?? defaultCssPath(io.cwd);
  const { theme, id, files } = buildFiles(brand, { cssPath });

  io.say('');
  for (const line of reportLines(theme)) io.say(line);
  if (theme.summary.failed > 0) return 1;

  if (!(await writeAll(io, files, opts))) return 1;
  io.say('');
  io.say(`Wrote ${CONFIG_FILE} (your brand) and ${cssPath} (its theme, light and dark).`);

  let installed = io.isInstalled(io.cwd);
  const install = !installed && opts.install ? io.installCommand(io.cwd) : undefined;
  if (install) {
    const go =
      opts.yes ||
      !io.interactive ||
      /^y/i.test(await askValid(io, `Add Syntara to this project now with "${install}"? y or n`, 'y', (a) => /^(y|yes|n|no)$/i.test(a), 'Type y or n.'));
    installed = go && io.run(install);
    if (go && !installed) io.say(`The install did not finish. Run "${install}" yourself.`);
  }
  const wired = opts.edit ? await wireApp(io, { id, cssPath }, opts) : false;
  sayNextSteps(io, { id, cssPath, brand: theme.input, installed, wired });
  return 0;
}

/** `npx syntara build`: rebuilds the theme file after syntara.brand.json was edited by hand. */
export async function runBuild(argv, io) {
  if (argv.length > 0) throw new Error(`"build" takes no options. Edit ${CONFIG_FILE}, then run "npx syntara build".`);
  const path = join(io.cwd, CONFIG_FILE);
  if (!existsSync(path)) {
    io.say(`No ${CONFIG_FILE} here. Run "npx syntara init" first.`);
    return 1;
  }
  const config = JSON.parse(readFileSync(path, 'utf8'));
  const cssPath = config.css ?? defaultCssPath(io.cwd);
  const { theme, files } = buildFiles(config.brand, { id: config.theme, cssPath });
  for (const line of reportLines(theme)) io.say(line);
  if (theme.summary.failed > 0) return 1;
  writeFileSync(join(io.cwd, cssPath), files[cssPath]);
  io.say(`Rebuilt ${relative(io.cwd, join(io.cwd, cssPath))}.`);
  return 0;
}
