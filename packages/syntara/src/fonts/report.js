// A font check's result in plain words (docs/design/custom-fonts.md, "How a failure reads"): one sentence per failed
// check, what it means for the people using the product, and what to do. A failure ends with Google fonts that have
// passed the same checks (ADR-051: Anuj asked for a list to choose from), read from passed.json, never guessed.

import { readFileSync } from 'node:fs';

const WEIGHT_NAMES = { 100: 'Thin', 200: 'Extra Light', 300: 'Light', 400: 'Regular', 500: 'Medium', 600: 'Semibold', 700: 'Bold', 800: 'Extra Bold', 900: 'Black' };
const SCRIPT_WORDS = { latin: 'English', arabic: 'Arabic', devanagari: 'Hindi' };
const SCRIPT_LETTERS = { latin: 'English letters', arabic: 'Arabic letters', devanagari: 'Hindi (Devanagari) letters' };
const STEP_WORDS = { tight: 'headings and buttons', snug: 'labels and short text', normal: 'paragraphs' };

const names = (ws) => {
  const n = ws.map((w) => WEIGHT_NAMES[w] ?? String(w));
  return n.length < 2 ? n.join('') : `${n.slice(0, -1).join(', ')} and ${n[n.length - 1]}`;
};
const roleWords = (role) => (role === 'heading' ? ' (your heading font)' : '');

/** Google fonts that passed every check, per script: written by `node scripts/check-font.mjs --record`. */
export function passedFonts() {
  try {
    return JSON.parse(readFileSync(new URL('./passed.json', import.meta.url), 'utf8'));
  } catch {
    return { fonts: {} };
  }
}

/** @param {import('./check.js').Failure} f */
export function failureSentence(f) {
  const name = `**${f.family}**${roleWords(f.role)}`;
  switch (f.kind) {
    case 'not-on-google':
      return f.didYouMean
        ? `${name} isn't on Google Fonts under that spelling. Did you mean **${f.didYouMean}**? Names are case-sensitive.`
        : `${name} isn't on Google Fonts. Check the spelling on fonts.google.com, or give your own font file instead.`;
    case 'no-files':
      return `No font files were given${roleWords(f.role)}. Give the paths to your .woff2, .woff, .ttf or .otf files, separated by commas.`;
    case 'unreadable-file':
      return `\`${f.file}\` couldn't be read as a font. Syntara needs a .woff2, .woff, .ttf or .otf file.`;
    case 'weights':
      return (
        `${name} comes in ${f.has.length === 1 ? 'one weight only' : `${f.has.length} weights`} (${names(f.has)}), and has no ${names(f.missing)}. ` +
        `Syntara needs four, Regular, Medium, Semibold and Bold, for body text, labels, buttons and headings. ` +
        `Without them the browser fakes bold by smearing the letters.`
      );
    case 'coverage': {
      // Most of the script's own letters missing: say so plainly; Latin-range gaps (₹, –) are named after it.
      const others = f.otherMissing.length ? ` It also has no ${f.otherMissing.join(' ')}.` : '';
      if (f.script !== 'latin' && f.ownMissing >= f.ownTotal / 2) {
        return `${name} has no ${SCRIPT_LETTERS[f.script]}, so your ${SCRIPT_WORDS[f.script]} text would be drawn by a different font, with different shapes and spacing.${others}`;
      }
      return `${name} is missing ${f.missing.length} of the ${f.total} characters in Syntara's ${SCRIPT_WORDS[f.script]} test text (${f.missing.slice(0, 6).join(' ')}), so those would show in a different font.`;
    }
    case 'did-not-load':
      return `${name}'s ${WEIGHT_NAMES[f.weight] ?? f.weight} file didn't load in the browser, so it can't be checked. The file may be damaged.`;
    case 'x-height':
      return (
        `${name} has short lower-case letters (${f.xHeight} of its size; Syntara needs at least 0.45). ` +
        `At 12px, labels and captions would read smaller than 10px Inter.`
      );
    case 'line-height':
      return (
        `${name} cuts off accents and marks in ${STEP_WORDS[f.step]} even with lines spaced ${f.max} times its size ` +
        `(${f.clipped} measured cases), and Syntara's limit is ${f.max}: past it, a line no longer fits inside a compact button.`
      );
    case 'no-chrome':
      return `Checking a font needs Chrome or Edge on this computer, and neither was found. Install one, or pick one of the ready-made type pairs.`;
    default:
      return `Checking ${name} failed: ${f.detail ?? f.kind}.`;
  }
}

/**
 * The whole report. Passing: one line with the line heights it measured. Failing: a sentence per failure, then fonts
 * that passed for this script and the ready-made pairs.
 */
export function fontReport(result, { script = 'latin', family = '' } = {}) {
  if (result.pass) {
    const lh = result.font.measured.lineHeight;
    return [
      `**${family}** passes all six checks for ${SCRIPT_WORDS[script]}.`,
      `- No letter is cut off in ${result.cases.toLocaleString('en-US')} measured cases, at line spacing ${lh.tight} (headings), ${lh.snug} (labels) and ${lh.normal} (paragraphs).`,
      `- Regular, Medium, Semibold and Bold are all real. Every test character is drawn by the font itself. x-height ${result.font.measured.xHeight}.`,
    ].join('\n');
  }
  const lines = [`This font can't be used yet:`, ...result.failures.map((f) => `- ${failureSentence(f)}`)];
  const passed = passedFonts().fonts?.[script] ?? [];
  if (passed.length && !result.failures.some((f) => f.kind === 'no-chrome')) {
    lines.push('', `Google fonts that pass every check for ${SCRIPT_WORDS[script]}: ${passed.map((p) => p.family).join(', ')}.`);
  }
  lines.push(`Or pick one of the nine ready-made type pairs.`);
  return lines.join('\n');
}
