---
'syntara': minor
---

`npx syntara init` now finishes the setup in your app too. It finds your entry file (`src/main.tsx` or `src/index.tsx`
in Vite and Create React App, `app/layout.tsx` or `pages/_app.tsx` in Next.js), shows the two style imports and the
`ThemeScope` it will add, and asks before saving (Enter = yes; `--yes` and runs without a terminal don't ask). It only
edits a file where the thing it wraps (`<App />`, `{children}`, `<Component {...pageProps} />`) appears exactly once,
follows the file's quotes, semicolons and line endings, and leaves a file that already imports `syntara/styles.css`
alone. Anything else is left unchanged, with the lines to add by hand. `--no-edit` skips it.
