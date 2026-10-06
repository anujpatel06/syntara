// `npx syntara init` editing the app's entry file (wire.js). The fixtures are the files today's starters write
// (create-vite react-ts, create-next-app, a Pages Router _app, Create React App), so a change that breaks the common
// case fails here first.
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { runInit } from '../src/cli/init.js';
import { welcomePathFor, welcomeSource } from '../src/cli/welcome.js';
import { findEntry, planWire, relativeImport } from '../src/cli/wire.js';

const VITE_MAIN = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`;

const NEXT_LAYOUT = `import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={\`\${geistSans.variable} antialiased\`}
      >
        {children}
      </body>
    </html>
  );
}
`;

const PAGES_APP = `import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
`;

const CRA_INDEX = `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;

let cwd: string;
beforeEach(() => {
  cwd = mkdtempSync(join(tmpdir(), 'syntara-wire-'));
});
afterEach(() => rmSync(cwd, { recursive: true, force: true }));

function put(path: string, content: string) {
  mkdirSync(dirname(join(cwd, path)), { recursive: true });
  writeFileSync(join(cwd, path), content);
}

describe('findEntry', () => {
  it.each([
    ['src/main.tsx', 'react'],
    ['src/main.jsx', 'react'],
    ['src/index.tsx', 'react'],
    ['app/layout.tsx', 'next-app'],
    ['src/app/layout.js', 'next-app'],
    ['pages/_app.tsx', 'next-pages'],
    ['src/pages/_app.jsx', 'next-pages'],
  ])('recognises %s', (path, kind) => {
    put(path, '');
    expect(findEntry(cwd)).toEqual({ kind, path });
  });

  it('prefers the App Router when both routers exist', () => {
    put('pages/_app.tsx', '');
    put('app/layout.tsx', '');
    expect(findEntry(cwd)?.path).toBe('app/layout.tsx');
  });

  it('finds nothing in a folder with no app', () => {
    expect(findEntry(cwd)).toBeUndefined();
  });
});

describe('relativeImport', () => {
  it('points from the entry file to the theme file', () => {
    expect(relativeImport('src/main.tsx', 'src/syntara-theme.css')).toBe('./syntara-theme.css');
    expect(relativeImport('app/layout.tsx', 'syntara-theme.css')).toBe('../syntara-theme.css');
    expect(relativeImport('src/app/layout.tsx', 'src/syntara-theme.css')).toBe('../syntara-theme.css');
    expect(relativeImport('pages/_app.tsx', 'styles/syntara-theme.css')).toBe('../styles/syntara-theme.css');
  });
});

describe('planWire', () => {
  it('Vite: imports after the last import, App wrapped on its own lines, no semicolons like the file', () => {
    const plan = planWire(VITE_MAIN, { kind: 'react', entryPath: 'src/main.tsx', cssPath: 'src/syntara-theme.css', id: 'acme' });
    expect(plan.status).toBe('ready');
    expect(plan.source).toBe(`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeScope } from 'syntara'
import 'syntara/styles.css'
import './syntara-theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeScope theme="acme" scheme="auto" style={{ minHeight: '100vh' }}>
      <App />
    </ThemeScope>
  </StrictMode>,
)
`);
  });

  it('Next App Router: wraps {children} in <body>, not the destructured parameter; double quotes like the file', () => {
    const plan = planWire(NEXT_LAYOUT, { kind: 'next-app', entryPath: 'app/layout.tsx', cssPath: 'syntara-theme.css', id: 'acme' });
    expect(plan.status).toBe('ready');
    expect(plan.source).toContain(`import "./globals.css";
import { ThemeScope } from "syntara";
import "syntara/styles.css";
import "../syntara-theme.css";
`);
    expect(plan.source).toContain(`      >
        <ThemeScope theme="acme" scheme="auto" style={{ minHeight: '100vh' }}>
          {children}
        </ThemeScope>
      </body>`);
    expect(plan.source).toContain(`export default function RootLayout({
  children,
}`);
  });

  it('Next Pages Router: wraps the page inline when it shares a line', () => {
    const plan = planWire(PAGES_APP, { kind: 'next-pages', entryPath: 'pages/_app.tsx', cssPath: 'syntara-theme.css', id: 'acme' });
    expect(plan.status).toBe('ready');
    expect(plan.source).toContain(
      `return <ThemeScope theme="acme" scheme="auto" style={{ minHeight: '100vh' }}><Component {...pageProps} /></ThemeScope>;`,
    );
    expect(plan.source).toContain(`import "../syntara-theme.css";\n\nexport default`);
  });

  it('Create React App: src/index.tsx', () => {
    const plan = planWire(CRA_INDEX, { kind: 'react', entryPath: 'src/index.tsx', cssPath: 'src/syntara-theme.css', id: 'acme' });
    expect(plan.status).toBe('ready');
    expect(plan.source).toContain(`import App from './App';\nimport { ThemeScope } from 'syntara';\n`);
    expect(plan.source).toContain(`    <ThemeScope theme="acme" scheme="auto" style={{ minHeight: '100vh' }}>\n      <App />\n    </ThemeScope>`);
  });

  it('reads a multi-line import to its end before adding', () => {
    const src = `import {\n  StrictMode,\n} from 'react';\nimport App from './App';\n\nrender(<App />);\n`;
    const plan = planWire(src, { kind: 'react', entryPath: 'src/main.tsx', cssPath: 'src/syntara-theme.css', id: 'x' });
    expect(plan.source).toBe(
      `import {\n  StrictMode,\n} from 'react';\nimport App from './App';\nimport { ThemeScope } from 'syntara';\nimport 'syntara/styles.css';\nimport './syntara-theme.css';\n\nrender(<ThemeScope theme="x" scheme="auto" style={{ minHeight: '100vh' }}><App /></ThemeScope>);\n`,
    );
  });

  it("keeps 'use client' first", () => {
    const src = `'use client';\n\nexport default function Root({ children }) {\n  return <body>{children}</body>;\n}\n`;
    const plan = planWire(src, { kind: 'next-app', entryPath: 'app/layout.jsx', cssPath: 'syntara-theme.css', id: 'x' });
    expect(plan.source?.startsWith(`'use client';\n\nimport { ThemeScope } from 'syntara';\n`)).toBe(true);
  });

  it('keeps Windows line endings', () => {
    const plan = planWire(VITE_MAIN.replace(/\n/g, '\r\n'), { kind: 'react', entryPath: 'src/main.tsx', cssPath: 'src/syntara-theme.css', id: 'acme' });
    expect(plan.source?.replace(/\r\n/g, '')).not.toContain('\n');
    expect(plan.source?.replace(/\r\n/g, '\n')).toBe(
      planWire(VITE_MAIN, { kind: 'react', entryPath: 'src/main.tsx', cssPath: 'src/syntara-theme.css', id: 'acme' }).source,
    );
  });

  it('changes nothing when the app is not there once', () => {
    const none = planWire(`export const x = 1;\n`, { kind: 'react', entryPath: 'src/index.ts', cssPath: 'src/t.css', id: 'x' });
    expect(none).toEqual({ status: 'manual', reason: '<App /> was not found in src/index.ts' });
    const two = planWire(`render(<App />);\nrender(<App />);\n`, { kind: 'react', entryPath: 'src/main.tsx', cssPath: 'src/t.css', id: 'x' });
    expect(two).toEqual({ status: 'manual', reason: '<App /> appears 2 times in src/main.tsx' });
  });

  it('leaves a file that already loads Syntara alone', () => {
    const once = planWire(VITE_MAIN, { kind: 'react', entryPath: 'src/main.tsx', cssPath: 'src/syntara-theme.css', id: 'acme' });
    expect(planWire(once.source!, { kind: 'react', entryPath: 'src/main.tsx', cssPath: 'src/syntara-theme.css', id: 'acme' })).toEqual({
      status: 'already',
    });
  });
});

/** The same fake terminal as cli.test.ts. */
function fakeIO(answers: string[], interactive = true) {
  const said: string[] = [];
  return {
    said,
    io: {
      cwd,
      interactive,
      ask: async (q: string) => {
        if (answers.length === 0) throw new Error(`No scripted answer for: ${q}`);
        return answers.shift()!;
      },
      say: (line = '') => said.push(line),
      isInstalled: () => true,
      installCommand: () => undefined,
      run: () => true,
    },
  };
}

describe('init changes the entry file', () => {
  it('shows the change, asks, and writes it on Enter', async () => {
    put('src/main.tsx', VITE_MAIN);
    // guidelines? name, look, colour, then "Change src/main.tsx?"
    const { io, said } = fakeIO(['', 'Acme', '', '', '']);
    expect(await runInit([], io)).toBe(0);
    const main = readFileSync(join(cwd, 'src/main.tsx'), 'utf8');
    expect(main).toContain(`import './syntara-theme.css'`);
    expect(main).toContain(`<ThemeScope theme="acme"`);
    const out = said.join('\n');
    expect(out).toContain(`  + import 'syntara/styles.css'`);
    expect(out).toContain('Changed src/main.tsx');
    // The manual steps are not repeated once the file is done.
    expect(out).not.toContain('Wrap your app');
  });

  it('leaves the file alone on "n", and prints the steps instead', async () => {
    put('src/main.tsx', VITE_MAIN);
    const { io, said } = fakeIO(['', 'Acme', '', '', 'n']);
    expect(await runInit([], io)).toBe(0);
    expect(readFileSync(join(cwd, 'src/main.tsx'), 'utf8')).toBe(VITE_MAIN);
    expect(said.join('\n')).toContain('Wrap your app');
  });

  it('--no-edit does not look at the file', async () => {
    put('src/main.tsx', VITE_MAIN);
    const { io, said } = fakeIO([]);
    expect(await runInit(['--yes', '--no-edit'], io)).toBe(0);
    expect(readFileSync(join(cwd, 'src/main.tsx'), 'utf8')).toBe(VITE_MAIN);
    expect(said.join('\n')).toContain('Wrap your app');
  });

  it('--yes changes it without asking, and a second run leaves it as it is', async () => {
    put('app/layout.tsx', NEXT_LAYOUT);
    expect(await runInit(['--yes'], fakeIO([]).io)).toBe(0);
    const first = readFileSync(join(cwd, 'app/layout.tsx'), 'utf8');
    expect(first).toContain(`import "../syntara-theme.css";`);
    const again = fakeIO([]);
    expect(await runInit(['--yes', '--force'], again.io)).toBe(0);
    expect(readFileSync(join(cwd, 'app/layout.tsx'), 'utf8')).toBe(first);
    expect(again.said.join('\n')).toContain('already loads Syntara');
  });

  it('says why when it cannot change the file safely', async () => {
    put('src/main.tsx', `render(<Root />);\n`);
    const { io, said } = fakeIO([]);
    expect(await runInit(['--yes'], io)).toBe(0);
    expect(readFileSync(join(cwd, 'src/main.tsx'), 'utf8')).toBe(`render(<Root />);\n`);
    expect(said.join('\n')).toContain('src/main.tsx was not changed: <App /> was not found in src/main.tsx.');
  });
});

describe('welcome card', () => {
  it('sits beside the theme CSS, in the entry file\'s language', () => {
    expect(welcomePathFor('src/syntara-theme.css', 'src/main.tsx')).toBe('src/syntara-welcome.tsx');
    expect(welcomePathFor('syntara-theme.css', 'app/layout.tsx')).toBe('syntara-welcome.tsx');
    expect(welcomePathFor('src/syntara-theme.css', 'src/index.jsx')).toBe('src/syntara-welcome.jsx');
    expect(welcomePathFor('src/syntara-theme.css', 'src/index.js')).toBe('src/syntara-welcome.jsx');
  });

  it('is imported and placed first inside the ThemeScope, in the file\'s own quotes', () => {
    const plan = planWire(VITE_MAIN, {
      kind: 'react',
      entryPath: 'src/main.tsx',
      cssPath: 'src/syntara-theme.css',
      id: 'acme',
      welcomePath: 'src/syntara-welcome.tsx',
    });
    expect(plan.source).toContain(`import { SyntaraWelcome } from './syntara-welcome'\n`);
    expect(plan.source).toContain(`    <ThemeScope theme="acme" scheme="auto" style={{ minHeight: '100vh' }}>\n      <SyntaraWelcome />\n      <App />\n    </ThemeScope>`);
    const next = planWire(NEXT_LAYOUT, { kind: 'next-app', entryPath: 'app/layout.tsx', cssPath: 'syntara-theme.css', id: 'acme', welcomePath: 'syntara-welcome.tsx' });
    expect(next.source).toContain(`import { SyntaraWelcome } from "../syntara-welcome";`);
    expect(next.source).toMatch(/<SyntaraWelcome \/>\s*\{children\}/);
  });

  it('shows the brand name and the check counts it is given, and says how to remove it', () => {
    const src = welcomeSource({ name: 'Zing "Co"', entryPath: 'src/main.tsx', welcomePath: 'src/syntara-welcome.tsx', checks: { passed: 117, checks: 118 } });
    expect(src.startsWith(`'use client';`)).toBe(true);
    expect(src).toContain(`{"This is Zing \\"Co\\""}`);
    expect(src).toContain('117 of 118 contrast checks pass.');
    expect(src).toContain('delete src/syntara-welcome.tsx and the two SyntaraWelcome lines in src/main.tsx');
    // The same text works as .jsx: nothing TypeScript-only.
    expect(src).not.toMatch(/\bas const\b|: React\.|<[A-Z]\w*>\(/);
  });

  it('init writes it with the edit, and a run that finds one already there leaves it alone', async () => {
    put('src/main.tsx', VITE_MAIN);
    const { io, said } = fakeIO([]);
    expect(await runInit(['--yes', '--name', 'Acme'], io)).toBe(0);
    const card = readFileSync(join(cwd, 'src/syntara-welcome.tsx'), 'utf8');
    expect(card).toContain('This is Acme');
    expect(readFileSync(join(cwd, 'src/main.tsx'), 'utf8')).toContain('<SyntaraWelcome />');
    expect(said.join('\n')).toContain('Wrote src/syntara-welcome.tsx');

    put('src/main.tsx', VITE_MAIN);
    put('src/syntara-welcome.tsx', '// mine\n');
    expect(await runInit(['--yes', '--force'], fakeIO([]).io)).toBe(0);
    expect(readFileSync(join(cwd, 'src/syntara-welcome.tsx'), 'utf8')).toBe('// mine\n');
    expect(readFileSync(join(cwd, 'src/main.tsx'), 'utf8')).not.toContain('SyntaraWelcome');
  });

  it('--no-welcome skips it', async () => {
    put('src/main.tsx', VITE_MAIN);
    expect(await runInit(['--yes', '--no-welcome'], fakeIO([]).io)).toBe(0);
    expect(readFileSync(join(cwd, 'src/main.tsx'), 'utf8')).not.toContain('SyntaraWelcome');
    expect(() => readFileSync(join(cwd, 'src/syntara-welcome.tsx'))).toThrow();
  });
});
