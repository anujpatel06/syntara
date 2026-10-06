// `npx syntara init` adds Syntara to the app's entry file: the two style imports and a ThemeScope around the app.
// This edits someone else's code, so it is deliberately narrow: it only changes a file it recognises, only when the
// thing it wraps appears exactly once, and otherwise changes nothing and says what to add by hand. Pure functions;
// `init.js` does the asking and writing.

import { existsSync } from 'node:fs';
import { dirname, join, posix, relative, sep } from 'node:path';

const EXTS = ['.tsx', '.jsx', '.ts', '.js'];

/**
 * The files we know how to edit, most specific first. A Next.js app with both routers is wired through the App
 * Router's layout. `src/index` is Create React App's entry; a library's `src/index.ts` has no `<App />`, so it is
 * left alone by the "exactly once" rule below.
 */
const ENTRIES = /** @type {const} */ ([
  { kind: 'next-app', bases: ['app/layout', 'src/app/layout'] },
  { kind: 'next-pages', bases: ['pages/_app', 'src/pages/_app'] },
  { kind: 'react', bases: ['src/main', 'src/index'] },
]);

/** What gets wrapped in each kind of entry file, and how it is described when it is not found. */
const TARGETS = {
  // Only as a JSX child (after a tag's `>`), not the `{ children }` the layout's parameters destructure.
  'next-app': { pattern: /(?<=>\s*)\{\s*children\s*\}/g, label: '{children}' },
  'next-pages': { pattern: /<Component\s+\{\s*\.\.\.pageProps\s*\}\s*\/>/g, label: '<Component {...pageProps} />' },
  react: { pattern: /<App\s*\/>/g, label: '<App />' },
};

/** @typedef {'next-app' | 'next-pages' | 'react'} EntryKind */

/** The app's entry file, relative to the project folder (forward slashes), or undefined when none is recognised. */
export function findEntry(cwd) {
  for (const { kind, bases } of ENTRIES) {
    for (const base of bases) {
      for (const ext of EXTS) {
        if (existsSync(join(cwd, base + ext))) return { kind, path: base + ext };
      }
    }
  }
  return undefined;
}

/** `./syntara-theme.css` from `src/main.tsx`, `../syntara-theme.css` from `app/layout.tsx`. */
export function relativeImport(fromFile, toFile) {
  const rel = relative(dirname(fromFile), toFile).split(sep).join(posix.sep);
  return rel.startsWith('.') ? rel : `./${rel}`;
}

/**
 * Where new imports go: after the last import at the top of the file (an import may span lines), or after leading
 * comments and directives ('use client') when there are none. Returns a line index.
 */
function importInsertLine(lines) {
  let after = 0;
  let i = 0;
  let inComment = false;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (inComment) {
      if (line.includes('*/')) inComment = false;
      i++;
      continue;
    }
    if (line === '' || line.startsWith('//')) {
      i++;
      continue;
    }
    if (line.startsWith('/*')) {
      if (!line.includes('*/')) inComment = true;
      i++;
      continue;
    }
    if (/^(['"])use (client|strict)\1;?$/.test(line)) {
      after = i + 1;
      i++;
      continue;
    }
    if (/^import\b/.test(line)) {
      // Read to the line that ends this import: `… from 'x'` or a bare `import 'x'`.
      let j = i;
      while (j < lines.length && !/(from\s*|^import\s*)(['"])[^'"]+\2\s*;?\s*$/.test(lines[j].trim())) j++;
      if (j === lines.length) return after; // not an import we understand; stay above it
      after = j + 1;
      i = j + 1;
      continue;
    }
    break;
  }
  return after;
}

/**
 * The edit for one entry file. Returns
 *   { status: 'ready', source, added, wrapped }   the new file, the import lines added and the wrap, in words
 *   { status: 'already' }                          the file already imports syntara/styles.css; nothing to do
 *   { status: 'manual', reason }                   not safe to edit; the reason says what was not found
 * @param {string} source
 * With `welcomePath`, it also imports the welcome card (welcome.js) and puts it first inside the ThemeScope.
 * @param {{ kind: EntryKind, entryPath: string, cssPath: string, id: string, welcomePath?: string }} where
 */
export function planWire(source, { kind, entryPath, cssPath, id, welcomePath }) {
  if (/['"]syntara\/styles\.css['"]/.test(source)) return { status: 'already' };

  const { pattern, label } = TARGETS[kind];
  const matches = [...source.matchAll(pattern)];
  if (matches.length !== 1) {
    return {
      status: 'manual',
      reason: matches.length === 0 ? `${label} was not found in ${entryPath}` : `${label} appears ${matches.length} times in ${entryPath}`,
    };
  }
  if (kind === 'next-app' && !/<body[\s>]/.test(source)) {
    return { status: 'manual', reason: `${entryPath} has no <body>` };
  }

  // Follow the file's own style: the quote and semicolon of its first import, read to its end (it may span lines).
  const firstImport = source.match(/^import\b[^;'"]*?(['"])[^'"\n]+\1(;?)/m);
  const q = firstImport?.[1] ?? "'";
  const semi = !firstImport || firstImport[2] === ';' ? ';' : '';
  const added = [
    `import { ThemeScope } from ${q}syntara${q}${semi}`,
    `import ${q}syntara/styles.css${q}${semi}`,
    `import ${q}${relativeImport(entryPath, cssPath)}${q}${semi}`,
  ];
  if (welcomePath) {
    added.push(`import { SyntaraWelcome } from ${q}${relativeImport(entryPath, welcomePath).replace(/\.[jt]sx?$/, '')}${q}${semi}`);
  }
  const welcome = welcomePath ? '<SyntaraWelcome />' : '';

  const eol = source.includes('\r\n') ? '\r\n' : '\n';
  // 'auto' follows the computer's light or dark setting, as the app's own CSS usually does; a fixed 'light' painted
  // a light page under an app whose text had switched to dark mode, and its headings disappeared.
  const open = `<ThemeScope theme="${id}" scheme="auto" style={{ minHeight: '100vh' }}>`;
  const close = '</ThemeScope>';
  const match = matches[0];
  const start = /** @type {number} */ (match.index);
  const end = start + match[0].length;

  // Wrap on its own lines when the target sits alone on a line; inline otherwise.
  const lineStart = source.lastIndexOf('\n', start - 1) + 1;
  const lineEndRaw = source.indexOf('\n', end);
  const lineEnd = lineEndRaw === -1 ? source.length : lineEndRaw;
  const before = source.slice(lineStart, start);
  const after = source.slice(end, lineEnd).replace(/\r$/, '');
  let wrappedSource;
  if (before.trim() === '' && after.trim() === '') {
    const indent = before;
    const inner = welcome ? [`${indent}  ${welcome}`, `${indent}  ${match[0]}`] : [`${indent}  ${match[0]}`];
    const block = [`${indent}${open}`, ...inner, `${indent}${close}`].join(eol);
    wrappedSource = source.slice(0, lineStart) + block + source.slice(lineStart + before.length + match[0].length + after.length);
  } else {
    wrappedSource = source.slice(0, start) + open + welcome + match[0] + close + source.slice(end);
  }

  const lines = wrappedSource.split(eol);
  const at = importInsertLine(lines);
  // Keep a blank line between a directive and the imports, as people write it.
  const directiveAbove = at > 0 && /^(['"])use (client|strict)\1;?$/.test(lines[at - 1].trim());
  const insert = directiveAbove && !/^import\b/.test((lines[at] ?? '').trim()) ? ['', ...added] : added;
  lines.splice(at, 0, ...insert);

  return { status: 'ready', source: lines.join(eol), added, wrapped: `${match[0]}  →  ${open}${welcome}${match[0]}${close}` };
}
