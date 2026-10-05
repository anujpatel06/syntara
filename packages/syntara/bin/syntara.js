#!/usr/bin/env node
// `npx syntara <command>`. The commands live in src/cli/; this file only wires them to a real terminal.
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { runBuild, runInit } from '../src/cli/init.js';

const HELP = `Syntara: brand in, accessible theme out.

  npx syntara init     Everything in one go: a few questions about your brand (Enter takes the suggestion),
                       then your theme file, the install, and Syntara added to your app's entry file
  npx syntara build    Rebuild the theme after editing syntara.brand.json

Options for init (anything you give here is not asked):
  --yes, -y            No questions: the Clear look, named "My Brand"
  --look <id>          Start from a look: clear, warm, editorial, technical, bold
  --name <name>        Brand name
  --primary <#hex>     Main brand colour
  --accent <#hex>      Accent colour
  --grey <tone>        cool, neutral, warm, paper
  --corners <style>    sharp, soft, round
  --fonts <pair>       precise, calm, friendly, technical, editorial, modern,
                       bilingual-round, bilingual-classic, bilingual-devanagari
  --spacing <density>  comfortable, compact
  --out <path>         Where to write the theme CSS (default: src/syntara-theme.css, or ./ without src/)
  --force              Replace existing files
  --no-install         Don't offer to add syntara to package.json
  --no-edit            Don't change your app's entry file; print the lines to add instead

Docs: https://syntara.live`;

/** Lockfile → the install command that project uses. */
function installCommand(cwd) {
  if (!existsSync(join(cwd, 'package.json'))) return undefined;
  if (existsSync(join(cwd, 'pnpm-lock.yaml'))) return 'pnpm add syntara';
  if (existsSync(join(cwd, 'yarn.lock'))) return 'yarn add syntara';
  if (existsSync(join(cwd, 'bun.lockb')) || existsSync(join(cwd, 'bun.lock'))) return 'bun add syntara';
  return 'npm install syntara';
}

function isInstalled(cwd) {
  try {
    const pkg = JSON.parse(readFileSync(join(cwd, 'package.json'), 'utf8'));
    return Boolean(pkg.dependencies?.syntara || pkg.devDependencies?.syntara);
  } catch {
    return false;
  }
}

const [command = 'help', ...rest] = process.argv.slice(2);
const interactive = Boolean(process.stdin.isTTY && process.stdout.isTTY);
const rl = interactive ? createInterface({ input: process.stdin, output: process.stdout }) : undefined;

const io = {
  cwd: process.cwd(),
  interactive,
  ask: (q) => (rl ? rl.question(q) : Promise.resolve('')),
  say: (line = '') => console.log(line),
  isInstalled,
  installCommand,
  run: (cmd) => spawnSync(cmd, { cwd: process.cwd(), stdio: 'inherit', shell: true }).status === 0,
};

try {
  let code = 0;
  if (command === 'init') code = await runInit(rest, io);
  else if (command === 'build') code = await runBuild(rest, io);
  else if (command === 'help' || command === '--help' || command === '-h') console.log(HELP);
  else {
    console.error(`Unknown command "${command}".\n\n${HELP}`);
    code = 1;
  }
  process.exitCode = code;
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
} finally {
  rl?.close();
}
