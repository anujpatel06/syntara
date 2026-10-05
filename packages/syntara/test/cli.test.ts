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
