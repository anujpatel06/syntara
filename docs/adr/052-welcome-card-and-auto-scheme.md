# ADR-052: After setup, a welcome card shows the brand, and the app follows the computer's light or dark setting

- **Status:** Accepted — **Anuj** (2026-10-06) on what to fix, the welcome card, its bigger title and its footer
  line, approved in screenshots. How the dark-mode fix works (`scheme="auto"`) is **Claude recommended, Anuj accepted**.
- **Date:** 2026-10-06
- **Scope:** `packages/syntara` (`src/cli/welcome.js`, `wire.js`, `init.js`, `bin/syntara.js`, README),
  `packages/react` (`ThemeScope`: `scheme="auto"`).

## Context

`npx syntara init` was run as a new user would, in a fresh `create-vite` React app, pressing Enter at every question
(log 2026-10-06). The questions went smoothly. What came after did not:

1. **Dark-mode computers got a broken page.** The `ThemeScope` that `init` added defaulted to `scheme="light"` and
   painted a light page, while the app's own CSS had switched its text to dark mode. The starter's headings came out
   `rgb(243, 244, 246)`, near-white on light (read with `getComputedStyle` in the browser).
2. **No "it worked" moment.** The app looked as before; the only proof was a link to syntara.live.

## Options put to Anuj (for 2)

(a) A welcome card in the app showing the brand on real components, deleted by the user when done; (b) a better
closing message with a snippet to paste; (c) open the syntara.live preview. Claude recommended (a). **Anuj chose (a).**

## Decision

1. **`ThemeScope` accepts `scheme="auto"`**, and `init` uses it. The token CSS already switched on
   `[data-syntara-scheme="auto"]` inside `@media (prefers-color-scheme: dark)` (`export/css.ts`); only the prop's
   type and `color-scheme` were missing. Pure CSS, so no flash on a server-rendered page. Additive: `'light'` stays
   the default.
2. **The welcome card** is one file `init` writes beside the theme CSS (`syntara-welcome.tsx`, or `.jsx` for a
   JavaScript entry) and puts first inside the `ThemeScope`. It shows "This is <brand>", the contrast count from this
   run's theme, a text field, a switch, the primary and outline buttons, a link to every component and "Hide for
   now". The file's first lines and the terminal say how to remove it. It is written only with a fresh edit of the
   entry file, never over an existing file, and `--no-welcome` skips it.
3. **Title at `font-size-2xl`** (24px), two steps above a card title. **Anuj** asked for bigger; the step is Claude's.
4. **The card's footer line uses `border.default`.** The card's own `border.subtle` measured `#202327` on a
   `#191c20` card in dark mode and all but disappears; `border.default` is `#2f3338`. Fixed in the welcome card only.

## Consequences

- A new user sees their brand in their own app, light or dark, the first time they start it.
- **Open:** every `CardFooter divider` has the same faint line in dark mode. `Card` is beta, so changing it for all
  cards goes through GOVERNANCE §5 and is a decision for Anuj.
- A user who deletes the card and runs `init --force` again gets no card back, since the entry file already loads
  Syntara.
