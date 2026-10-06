# @syntara/icons-niche

**2,000 niche outline icons in 40 domains**, drawn in the same style as [`@syntara/icons`](../icons): curvy, minimal, 1.5 stroke on a 24px grid, `currentColor`. Outline only; duotone comes later, per domain.

```tsx
import { IconAnatomySkull, IconCardiology } from '@syntara/icons-niche';

<IconCardiology aria-label="Cardiology" />
```

Peer dependencies: `@syntara/icons` (the icon factory) and React 19. Every icon is a normal Syntara icon: it takes `size`, `stroke` and `aria-label`, is hidden from screen readers without a label, and keeps its drawing on `Icon.node`.

## Domains

`domains` maps each domain to its icon names (kebab-case), for docs, search and pickers:

```ts
import { domains } from '@syntara/icons-niche';
domains['healthcare-dental']; // ['aligner-tray', …]
```

Healthcare (specialties, dental, equipment and lab, anatomy, pharmacy), veterinary, finance, insurance and legal, real estate and construction, architecture, education, science, software, electronics, telecom, manufacturing, energy, agriculture, food, hospitality, transport, automotive, aviation and maritime, retail, fashion and beauty, sports, music, film and photo, gaming, art and craft, weather and nature, government, security, religion and culture, family and events, HR and office, marketing, home, space and mining, fintech. The list and target counts are in `docs/design/icon-domains.md`.

## The rules every icon passes

Checked by the tests and by `check:drawing`, not by eye:

- Unique kebab-case name, never one that already ships in `@syntara/icons`.
- At most **5** stroked subpaths (aim 3) and at most **4** filled dots; a ring of dots (`loading-spinner`) is the one exemption.
- Drawing inside the 2→22 live area, and not tiny.

What the checks cannot prove is that an icon *reads* as its name. About 30 icons were flagged by their drawers as weak; see `docs/log.md`.

## Scripts

```sh
pnpm --filter @syntara/icons-niche test           # names, caps, domain list, rendering
pnpm --filter @syntara/icons-niche check:drawing  # live-area geometry in a real browser
pnpm --filter @syntara/icons-niche build          # dist, one module per domain
```
