// `npx syntara init` / `build`, driven with scripted answers in a temporary folder (ADR-049).
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { brandFidelity, generateTheme } from '@syntara/theme-engine';
import { LOOKS } from '../src/cli/looks.js';
import { CONFIG_FILE, parseArgs, previewUrl, reportLines, runBuild, runInit, themeId } from '../src/cli/init.js';

let cwd: string;
beforeEach(() => {
  cwd = mkdtempSync(join(tmpdir(), 'syntara-init-'));
});
afterEach(() => rmSync(cwd, { recursive: true, force: true }));

/** A fake terminal: answers are consumed in order; everything said is kept. */
function fakeIO(answers: string[], extra: Partial<{ interactive: boolean; installed: boolean; install: string; runOk: boolean }> = {}) {
  const said: string[] = [];
  const asked: string[] = [];
  const ran: string[] = [];
  return {
    said,
    asked,
    ran,
    io: {
      cwd,
      interactive: extra.interactive ?? true,
      ask: async (q: string) => {
        asked.push(q);
        if (answers.length === 0) throw new Error(`No scripted answer for: ${q}`);
        return answers.shift()!;
      },
      say: (line = '') => said.push(line),
      isInstalled: () => extra.installed ?? false,
      installCommand: () => extra.install,
      run: (cmd: string) => (ran.push(cmd), extra.runOk ?? true),
    },
  };
}

const readConfig = () => JSON.parse(readFileSync(join(cwd, CONFIG_FILE), 'utf8'));

describe('starting looks', () => {
  it.each(LOOKS.map((l) => [l.id, l] as const))('%s passes every contrast check', (_, look) => {
    const theme = generateTheme({ name: 'Look', ...look.brand });
    expect(theme.summary.failed).toBe(0);
  });

  it.each(LOOKS.map((l) => [l.id, l] as const))('%s keeps its own colours exactly, in light and dark', (_, look) => {
    const off = brandFidelity(generateTheme({ name: 'Look', ...look.brand })).filter((r) => !r.exact);
    expect(off.map((r) => `${r.input} ${r.scheme} ${r.asked}→${r.shipped}`)).toEqual([]);
  });

  it('have unique ids, and Clear is the default', () => {
    expect(new Set(LOOKS.map((l) => l.id)).size).toBe(LOOKS.length);
    expect(LOOKS[0]!.id).toBe('clear');
  });
});

describe('init', () => {
  it('with no guidelines, Enter on every question gives the Clear look', async () => {
    const { io, said } = fakeIO(['', '', '', '']);
    expect(await runInit(['--no-install'], io)).toBe(0);
    const config = readConfig();
    expect(config.theme).toBe('my-brand');
    expect(config.brand).toMatchObject({ name: 'My Brand', ...LOOKS[0]!.brand });
    const css = readFileSync(join(cwd, 'syntara-theme.css'), 'utf8');
    expect(css.startsWith('@import url("https://fonts.googleapis.com/css2?')).toBe(true);
    expect(css).toContain('[data-syntara-theme="my-brand"]');
    expect(css).toContain('[data-syntara-theme="my-brand"][data-syntara-scheme="dark"]');
    expect(said.join('\n')).toContain('<ThemeScope theme="my-brand"');
  });

  it('picks a look by number and keeps a typed main colour', async () => {
    const { io } = fakeIO(['n', 'Acme Pay', '3', '#0b6e4f']);
    expect(await runInit(['--no-install'], io)).toBe(0);
    const config = readConfig();
    expect(config.theme).toBe('acme-pay');
    expect(config.brand).toMatchObject({ ...LOOKS[2]!.brand, primary: '#0b6e4f', name: 'Acme Pay' });
  });

  it('with guidelines, asks each input and re-asks after a bad answer', async () => {
    const { io, said } = fakeIO(['y', 'Harbor Lite', 'blue', '#123456', '', '3', '1', '2', '2']);
    expect(await runInit(['--no-install'], io)).toBe(0);
    expect(said).toContain('  Use a hex colour such as #2f5bea.');
    expect(readConfig().brand).toEqual({
      name: 'Harbor Lite',
      primary: '#123456',
      accent: '#123456',
      neutral: 'warm',
      shape: 'sharp',
      typePair: 'calm',
      density: 'compact',
    });
  });

  it('--yes asks nothing; so does a run with no terminal', async () => {
    for (const [args, interactive] of [[['--yes', '--no-install'], true], [['--no-install', '--force'], false]] as const) {
      const { io, asked } = fakeIO([], { interactive });
      expect(await runInit([...args], io)).toBe(0);
      expect(asked).toEqual([]);
    }
  });

  it('flags fill answers: --look, --name, --primary, --out', async () => {
    const { io } = fakeIO([]);
    await runInit(['--look', 'bold', '--name', 'Zing', '--primary', '#ff0066', '--out', 'styles/theme.css', '--no-install'], io);
    expect(readConfig()).toMatchObject({ theme: 'zing', css: 'styles/theme.css', brand: { primary: '#ff0066', typePair: 'precise' } });
    expect(existsSync(join(cwd, 'styles/theme.css'))).toBe(true);
  });

  it('a full command from /themes asks only the name', async () => {
    const args = ['--primary', '#c2410c', '--accent', '#0e7490', '--grey', 'warm', '--corners', 'round', '--fonts', 'friendly', '--spacing', 'compact'];
    const { io, asked } = fakeIO(['Acme']);
    expect(await runInit([...args, '--no-install'], io)).toBe(0);
    expect(asked).toEqual(['Brand name (My Brand): ']);
    expect(readConfig().brand).toEqual({
      name: 'Acme',
      primary: '#c2410c',
      accent: '#0e7490',
      neutral: 'warm',
      shape: 'round',
      typePair: 'friendly',
      density: 'compact',
    });
  });

  it('asks only what the flags leave out', async () => {
    // --fonts settles "guidelines?"; then main colour, accent, grey, corners and spacing are asked; fonts is not.
    const { io, asked } = fakeIO(['Zed', '', '', '', '', '']);
    await runInit(['--fonts', 'editorial', '--no-install'], io);
    expect(asked.some((q) => q.startsWith('Do you have brand guidelines'))).toBe(false);
    expect(asked).toHaveLength(6);
    expect(readConfig().brand.typePair).toBe('editorial');
  });

  it('rejects a flag value that is not an option, naming the options', () => {
    expect(() => parseArgs(['--grey', 'blue'])).toThrow('--grey "blue" is not an option. Pick one of: cool, neutral, warm, paper.');
    expect(() => parseArgs(['--fonts', 'comic'])).toThrow('--fonts "comic" is not an option.');
    expect(() => parseArgs(['--accent', 'pink'])).toThrow('--accent "pink" is not a colour.');
  });

  it('writes into src/ when the project has one', async () => {
    mkdirSync(join(cwd, 'src'));
    const { io } = fakeIO([]);
    await runInit(['--yes', '--no-install'], io);
    expect(existsSync(join(cwd, 'src/syntara-theme.css'))).toBe(true);
  });

  it('never replaces existing files without --force or a yes', async () => {
    writeFileSync(join(cwd, CONFIG_FILE), 'mine');
    const quiet = fakeIO([]);
    expect(await runInit(['--yes', '--no-install'], quiet.io)).toBe(1);
    expect(readFileSync(join(cwd, CONFIG_FILE), 'utf8')).toBe('mine');

    const declined = fakeIO(['n', '', '', '', 'n']);
    expect(await runInit(['--no-install'], declined.io)).toBe(1);
    expect(readFileSync(join(cwd, CONFIG_FILE), 'utf8')).toBe('mine');

    const forced = fakeIO([]);
    expect(await runInit(['--yes', '--force', '--no-install'], forced.io)).toBe(0);
    expect(readConfig().theme).toBe('my-brand');
  });

  it('offers the install that matches the project, and skips it when syntara is already there', async () => {
    const offer = fakeIO(['', '', '', '', 'y'], { install: 'pnpm add syntara' });
    await runInit([], offer.io);
    expect(offer.ran).toEqual(['pnpm add syntara']);

    const already = fakeIO([], { installed: true, install: 'pnpm add syntara' });
    await runInit(['--yes', '--force'], already.io);
    expect(already.ran).toEqual([]);
    expect(already.said.join('\n')).not.toContain('npm install syntara');
  });
});

describe('build', () => {
  it('rebuilds the CSS after the brand file is edited', async () => {
    await runInit(['--yes', '--no-install'], fakeIO([]).io);
    const config = readConfig();
    config.brand.primary = '#aa0000';
    writeFileSync(join(cwd, CONFIG_FILE), JSON.stringify(config));
    const before = readFileSync(join(cwd, 'syntara-theme.css'), 'utf8');
    expect(await runBuild([], fakeIO([]).io)).toBe(0);
    expect(readFileSync(join(cwd, 'syntara-theme.css'), 'utf8')).not.toBe(before);
  });

  it('says what to do when there is no brand file', async () => {
    const { io, said } = fakeIO([]);
    expect(await runBuild([], io)).toBe(1);
    expect(said[0]).toContain('npx syntara init');
  });
});

describe('pieces', () => {
  it('theme ids are safe CSS attribute values', () => {
    expect(themeId('Acme Pay!')).toBe('acme-pay');
    expect(themeId('Café Ünïcode')).toBe('cafe-unicode');
    expect(themeId('***')).toBe('my-brand');
  });

  it('the report states the check counts from the theme, never a fixed number', () => {
    const theme = generateTheme({ name: 'x', ...LOOKS[0]!.brand });
    expect(reportLines(theme)[0]).toBe(
      `✓ ${theme.summary.passed} of ${theme.summary.checks} contrast checks pass, in light and dark (WCAG 2.2 AA).`,
    );
  });

  it('the preview link carries every input', () => {
    const url = new URL(previewUrl({ name: 'x', ...LOOKS[1]!.brand }));
    expect(url.origin + url.pathname).toBe('https://syntara.live/themes');
    expect(Object.fromEntries(url.searchParams)).toEqual({
      primary: 'c2410c',
      accent: '0e7490',
      neutral: 'warm',
      shape: 'round',
      type: 'friendly',
      density: 'comfortable',
    });
  });

  it('rejects bad flags with a sentence that says how to fix them', () => {
    expect(() => parseArgs(['--look', 'neon'])).toThrow('Pick one of: clear, warm, editorial, technical, bold.');
    expect(() => parseArgs(['--primary', 'blue'])).toThrow('Use a hex value');
    expect(() => parseArgs(['--colour'])).toThrow('Unknown option --colour');
  });
});

/* ------------------------------------------------------------------ a brand's own font (ADR-050) */

describe('init with an own font', () => {
  const measured = { lineHeight: { tight: 1.36, snug: 1.36, normal: 1.5 }, xHeight: 0.545, by: 'syntara test', date: '2026-10-06' };
  /** Stands in for the real checks (Chrome, about a minute): Lobster fails on weights, anything else passes. */
  const checked: unknown[] = [];
  const fakeCheck = async (req: { body: { google?: string; files?: string[] }; heading?: { google?: string }; script: string }) => {
    checked.push(req);
    if (req.body.google === 'Lobster') {
      return { pass: false, failures: [{ check: 2, kind: 'weights', role: 'body', family: 'Lobster', has: [400], missing: [500, 600, 700] }] };
    }
    const source = (r: { google?: string; files?: string[] }) =>
      r.google ? { google: r.google, category: 'sans' } : { family: 'Acme Sans', category: 'sans', files: r.files!.map((url) => ({ url, weight: '400 700' })) };
    return { pass: true, cases: 3520, font: { body: source(req.body), ...(req.heading ? { heading: source(req.heading) } : {}), script: req.script, measured } };
  };
  const withCheck = (answers: string[], extra = {}) => {
    const f = fakeIO(answers, extra);
    return { ...f, io: { ...f.io, checkFont: fakeCheck } };
  };
  beforeEach(() => void (checked.length = 0));

  it('--font: checked, stored with its measurement, and loaded and spaced in the CSS', async () => {
    const { io, said } = withCheck([]);
    expect(await runInit(['--yes', '--font', 'Manrope', '--no-install'], io)).toBe(0);
    const brand = readConfig().brand;
    expect(brand.font).toEqual({ body: { google: 'Manrope', category: 'sans' }, script: 'latin', measured });
    expect(brand.typePair).toBe('modern');
    const css = readFileSync(join(cwd, 'syntara-theme.css'), 'utf8');
    expect(css).toContain('family=Manrope:wght@400;500;600;700');
    expect(css).toContain('--syntara-font-body: "Manrope", system-ui');
    expect(css).toContain('--syntara-line-height-tight: 1.36');
    const text = said.join('\n');
    expect(text).toContain('Manrope passes all six checks for English.');
    expect(text).toContain('✓ Font Manrope: passed Syntara’s font checks on 2026-10-06; line spacing 1.36 / 1.36 / 1.5.'.replace('’', "'"));
  });

  it('a failing font writes nothing under --yes, and says why', async () => {
    const { io, said } = withCheck([]);
    expect(await runInit(['--yes', '--font', 'Lobster', '--no-install'], io)).toBe(1);
    expect(existsSync(join(cwd, CONFIG_FILE))).toBe(false);
    expect(said.join('\n')).toContain('Lobster comes in one weight only (Regular)');
  });

  it('asked: "Your own font" is the last choice; a fail asks again, and the next font is used', async () => {
    const pairs = 9;
    // guidelines, name, main, accent, grey, corners, fonts → own, Lobster, same for headings, English, spacing,
    // then after the fail: own font again, Manrope, same, English.
    const { io, said } = withCheck(['y', 'Kestrel', '', '', '1', '2', String(pairs + 1), 'Lobster', '', '1', '1', '1', 'Manrope', '', '1']);
    expect(await runInit(['--no-install'], io)).toBe(0);
    expect(said).toContain(`  ${pairs + 1}. Your own font: a Google font, or your font files`);
    expect(said).toContain('Pick another font, or a ready-made pair');
    expect(checked).toHaveLength(2);
    expect(readConfig().brand.font.body).toEqual({ google: 'Manrope', category: 'sans' });
  });

  it('after a fail, a ready-made pair can be picked instead', async () => {
    const { io } = withCheck(['y', 'Kestrel', '', '', '1', '2', '10', 'Lobster', '', '1', '1', '2']);
    expect(await runInit(['--no-install'], io)).toBe(0);
    expect(readConfig().brand.font).toBeUndefined();
    expect(readConfig().brand.typePair).toBe('precise');
  });

  it('a Hindi brand keeps the Devanagari pair underneath, for its mono font and size floor', async () => {
    const { io } = withCheck([]);
    await runInit(['--yes', '--font', 'Mukta', '--script', 'hindi', '--no-install'], io);
    expect(readConfig().brand).toMatchObject({ typePair: 'bilingual-devanagari', font: { script: 'devanagari' } });
  });

  it('own files: checked from disk, then linked relative to the theme CSS', async () => {
    mkdirSync(join(cwd, 'src'));
    const { io, said } = withCheck([]);
    expect(await runInit(['--yes', '--font-file', 'public/fonts/acme.woff2', '--heading-font', 'Fraunces', '--no-install'], io)).toBe(0);
    expect((checked[0] as { body: { files: string[] } }).body.files).toEqual([join(cwd, 'public/fonts/acme.woff2')]);
    const brand = readConfig().brand;
    expect(brand.font.body.files).toEqual([{ url: '../public/fonts/acme.woff2', weight: '400 700' }]);
    expect(brand.font.heading).toEqual({ google: 'Fraunces', category: 'sans' });
    const css = readFileSync(join(cwd, 'src/syntara-theme.css'), 'utf8');
    expect(css).toContain('src: url("../public/fonts/acme.woff2") format("woff2");');
    expect(said.join('\n')).toContain('Their licence is yours to check.');
  });

  it('build keeps the measured font and never measures again', async () => {
    const { io } = withCheck([]);
    await runInit(['--yes', '--font', 'Manrope', '--no-install'], io);
    checked.length = 0;
    const b = withCheck([]);
    expect(await runBuild([], b.io)).toBe(0);
    expect(checked).toHaveLength(0);
    expect(readFileSync(join(cwd, 'syntara-theme.css'), 'utf8')).toContain('--syntara-line-height-tight: 1.36');
    expect(b.said.join('\n')).toContain('✓ Font Manrope');
  });

  it.each([
    [['--font', 'A', '--font-file', 'a.woff2'], /not both/],
    [['--heading-font', 'A'], /go with --font/],
    [['--font', 'A', '--script', 'greek'], /latin, arabic, hindi/],
    [['--font', 'A', '--fonts', 'calm'], /not both/],
  ])('rejects %j', (argv, message) => {
    expect(() => parseArgs(argv)).toThrow(message);
  });
});
