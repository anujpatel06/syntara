# syntara

Everything Syntara in one install, set up by one command.

```bash
npx syntara init
```

Run it in your app's folder. It is the whole setup:

1. **Asks about your brand.** A few questions, each with a suggestion: press Enter to take it. No brand guidelines?
   Pick one of five starting looks (Clear, Warm, Editorial, Technical, Bold).
2. **Writes your theme.** `syntara-theme.css` is a light and dark theme that passes every WCAG 2.2 AA contrast check.
   `syntara.brand.json` keeps your answers. It tells you in plain words what it adjusted.
3. **Installs Syntara.** It offers to run your project's own package manager. `--no-install` skips this.
4. **Adds it to your app.** In your entry file (Vite `src/main.tsx`, Next `app/layout.tsx` or `pages/_app.tsx`) it
   adds two style imports and a `ThemeScope` around your app that follows the computer's light or dark setting
   (`scheme="auto"`), plus a welcome card (`syntara-welcome.tsx`) that shows your brand on real components when you
   start the app. Delete that file and its two lines when you are done with it; `--no-welcome` skips it. It shows you
   the change and asks first. `--no-edit`
   skips this, and you add the lines yourself:

```tsx
import 'syntara/styles.css';
import './syntara-theme.css';

<ThemeScope theme="my-brand" scheme="auto">…</ThemeScope>
```

Just want the package? `npm install syntara`.

Your own font instead of a ready-made pair: `--font Manrope` (any Google font) or `--font-file fonts/acme.woff2`, plus
`--heading-font` for headings and `--script hindi` or `arabic`. It is used only if it passes six checks, run in a minute
or two in your Chrome or Edge: real Regular to Bold, every letter drawn by the font, no letter cut off at any size,
line spacing within limits, and lower-case letters tall enough to read at 12px. If it fails, you get the reason in a
sentence and a list of Google fonts that pass.

Every answer can be a flag instead (`--primary '#c2410c' --fonts friendly …`), and anything you pass is not asked.
Edit `syntara.brand.json` later and run `npx syntara build`. `npx syntara init --yes` asks nothing; `npx syntara help`
lists the options.

## What's in the package

| Import | What you get |
|---|---|
| `syntara` | Every component and `ThemeScope` (same as `@syntara/react`) |
| `syntara/styles.css` | The tokens for every brand and the component styles, in one file |
| `syntara/icons` | The icon set (same as `@syntara/icons`) |
| `syntara/theme-engine` | The theme engine: six brand inputs to a checked light and dark theme |

```tsx
// app root, once
import 'syntara/styles.css';

import { Button, ThemeScope } from 'syntara';

export default function App() {
  return (
    <ThemeScope theme="vela" scheme="dark">
      <Button>Continue</Button>
    </ThemeScope>
  );
}
```

`ThemeScope` paints the brand's background (`--syntara-color-surface-canvas`), but only as far as its own box. For a
whole page, so dark mode reaches the edges of the window, let the scope fill it and drop the browser's default margin:

```tsx
<ThemeScope theme="vela" scheme="dark" style={{ minHeight: '100vh' }}>
```

```css
body { margin: 0; }
```

React 19 is a peer dependency. The separate `@syntara/*` packages are still published and stay the way to install
one piece on its own. Docs: https://syntara.live
