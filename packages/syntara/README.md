# syntara

Everything Syntara in one install.

```bash
npm install syntara
```

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
one piece on its own. Docs: https://syntara.pages.dev
