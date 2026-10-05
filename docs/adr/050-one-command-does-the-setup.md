# ADR-050: One command does the setup, including the edit to your app

- **Status:** Accepted — **Anuj** (2026-10-06) on showing one command and on `init` editing the user's entry file.
  The safety rules below are **Claude recommended, pending Anuj**.
- **Date:** 2026-10-06
- **Scope:** `packages/syntara` (`src/cli/wire.js`, `src/cli/init.js`, `bin/syntara.js`), the homepage hero and
  install section, `installation.mdx`, both READMEs.

## Context

The hero showed two commands side by side, `npm install syntara` and `npx syntara init` (ADR-047, ADR-049). Anuj: "As a
user, how will I know which command to install for what?" They were two steps of one job, and `init` already offered
to run the install. What it did not do was the last step: it printed two imports and a `ThemeScope` line to paste.

## Options put to Anuj

1. Show only `npx syntara init`, with `npm install syntara` as a quiet line under it.
2. Keep both, numbered "1. Install / 2. Make your brand".
3. Option 1, and `init` also adds the lines to the app itself.

Claude recommended 1 now and 3 later, because 3 edits files in someone else's project. **Anuj chose 3.**

## Decision

1. **One command in the hero**, `npx syntara init`, next to Get started; under it, "Just the package? `npm install
   syntara`" (Anuj, option 1 is part of 3).
2. **`init` edits the entry file** after writing the theme and installing: two style imports and a `ThemeScope` around
   the app. It shows the lines first and asks (Enter = yes). `--yes`, and runs with no terminal, don't ask, as the
   install step already behaves. `--no-edit` skips it.
3. **Safety rules** (Claude recommended, pending Anuj):
   - Only known files: `app/layout`, `src/app/layout` (Next.js App Router, preferred when both routers exist),
     `pages/_app`, `src/pages/_app`, `src/main`, `src/index`, each as `.tsx`, `.jsx`, `.ts` or `.js`.
   - Only when the thing to wrap appears **exactly once**: `{children}` as a JSX child inside `<body>`,
     `<Component {...pageProps} />`, or `<App />`. Otherwise nothing is changed and the reason is printed with the
     lines to add by hand.
   - A file that already imports `syntara/styles.css` is left alone, so running `init` twice changes nothing.
   - The file's own quotes, semicolons and line endings are followed; `'use client'` stays first.
   - Pattern matching, not a code parser: no new dependency, and anything unusual falls back to "by hand" rather than
     a guess.

## Consequences

- Run in a fresh `create-vite` react-ts app and a fresh `create-next-app` app with the packed package, `init` edited
  `src/main.tsx` and `app/layout.tsx`, and both apps built with a Syntara `Button` on the page (log 2026-10-06).
- `init` now changes a file the person wrote. A wrong edit is visible in their diff and undone with git; the change is
  shown before it is saved.
- Not covered: Remix / React Router, Astro, Gatsby, custom entry names. They get the printed steps, as before.
