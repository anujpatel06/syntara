# @syntara/icons

Syntara's own icon set (ADR-014). **480 React components: 243 outline drawings and 237 duotone twins.**

```tsx
import { IconArrowRight, IconShieldCheckDuotone } from '@syntara/icons';

<IconArrowRight aria-hidden />
<IconShieldCheckDuotone aria-hidden />
```

Peer dependency: React 19.

## The drawings

One stroke weight, one corner treatment, one grid — the style spec lives in `src/create-icon.tsx`, beside the code
that enforces it. Icons are `currentColor` and size to the text around them, so they inherit from the type they sit
in rather than carrying their own colour or size.

## Duotone

A twin is the same drawing with a tint layer painted behind it. **A twin never redraws its outline and never copies
a path string** — `createIcon` keeps the drawing on the component as `Icon.node` and each twin composes it, so the
two layers cannot drift apart. A test asserts the outline's nodes are the tail of every twin's, identical and in
order.

The tint defaults to `color-mix(in oklab, currentColor 16%, transparent)`, so duotone follows the text colour and
works on any surface with no setup. Set `--syntara-icon-tint` on a theme, a tenant or one component to make it a
real colour.

**54 of the 237 carry no tint.** A check, an arrow, a chevron, `plus`, `menu-2` and the other bare strokes enclose
no area, so there is nothing to fill; their twins exist and render exactly like the outline, which keeps the set 1:1
so a product can move its whole icon layer in one import change.

## Niche icons: `@syntara/icons/niche`

**2,000 more outline icons in 40 domains** (healthcare specialties, dental, anatomy, finance, legal, farming, aviation
and more), same style and same `createIcon`, in the same package under their own entry point (ADR-054):

```tsx
import { IconCardiology } from '@syntara/icons/niche';
import { nicheDomains } from '@syntara/icons/niche'; // domain → icon names, for docs, search and pickers
```

They sit behind their own entry on purpose: the main entry is imported wholesale by the server-driven UI renderer, the
docs gallery and `syntara/icons`, and 2,000 more icons there would grow all of them. Outline only; no duotone twins yet.
Every icon passes the pack rules (≤ 5 stroked subpaths, ≤ 4 filled dots, drawing inside the live area, a unique name
that does not clash with the main set), checked by `test/niche.test.tsx` and `check:niche-drawing`. What those cannot
prove is that an icon *reads* as its name; about 30 were flagged as weak in `docs/log.md`. The list of domains and
their target counts is `docs/design/icon-domains.md`.

## Scripts

```sh
pnpm --filter @syntara/icons sheet        # render the review sheet
pnpm --filter @syntara/icons check:tints  # find tint parts that overlap
pnpm --filter @syntara/icons check:niche-drawing  # niche icons stay inside the live area (real browser)
```

RTL: icons flip through prefix selectors on the components that use them (`[data-syntara-icon^='arrow']`), and a
twin's name is its outline's plus `Duotone`, so every twin flips exactly like the icon it copies.
