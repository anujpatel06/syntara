# ADR-045: Inside a card, inner surfaces are outlines

- **Status:** Accepted. **Anuj** chose style A (2026-10-04) and chose "automatic inside a card" over an opt-in prop
  or an outline everywhere (option 1 of 3, Claude recommended, Anuj accepted). The home page brand rail's flat card
  is **Anuj**'s call too (2026-10-04, "flatten the card instead" over removing the frame).
- **Date:** 2026-10-04
- **Scope:** `packages/react` (Card, Alert, StatTile, FileUpload; meta.json; tests), `packages/sdui` (schema 1.2.0),
  `packages/react/CONVENTIONS.md` (Surface recipe), `apps/docs/components/home` (brand rail).

## Context

Pieces that sit inside a card each painted their own face (`surface.raised`), a hairline and the raised shadow, so a
dashboard card read as filled boxes stacked in a filled box. Anuj's reference was the home page's brand cards
(greeting, an Alert, a StatTile, two buttons) across Vela, Harbor, Qamar and Care.

Styles mocked for Anuj: **A** the outer card keeps its face, inner pieces become outlines only (no face, no shadow,
a `border.subtle` hairline); **B** no inner boxes at all, only divider lines. Anuj chose A. Buttons and avatars were
out of scope.

How to ship A, put to Anuj: **1** automatic inside a Card, with a prop to keep the face; **2** an opt-in prop
(`surface="outline"`), nothing changes unless asked; **3** outlines everywhere, on the bare page too. Anuj chose 1.

Two later tries were rejected on the same day and are recorded so they aren't re-proposed as new: "lit from above"
faces from two dark-dashboard references (Helios Investments, Luxury Store Admin), first with large glows ("glows
too big") and then with small ones; Anuj went back to the flat card.

## Decision

1. **Card publishes `--syntara-surface-nest: card`** (an inherited custom property) and
   `--syntara-surface-nest-face` (its own fill). A `feature` card publishes `none`: its glow isn't a plain surface,
   so pieces inside it keep their faces.
2. **Alert, StatTile (`default`, `outline`), a nested Card (`default`, `outline`) and FileUpload's file rows** read it
   with `@container style(--syntara-surface-nest: card)` and drop their face, rim and shadow, keeping a
   `--syntara-hairline` edge in `border.subtle`. A FileUpload row in error keeps its danger border.
3. **`surface?: 'auto' | 'raised'`** on Alert, StatTile and Card. `auto` is the default; `raised` keeps the face inside a
   card. A nested Card with an explicit `rim` keeps its face too.
4. **Left alone:** Toast (it floats, so it keeps the recipe's face); controls and indicators that happen to be filled
   (Pagination's current pill, the selected Tabs pill, ToggleButton, PromptComposer's field, EmptyState's and
   FileUpload's icon tiles); `CardContent variant="inset"` (a sunken well, no shadow). Anuj may widen this.
5. Browsers without container style queries keep today's filled look. Nothing breaks; it just isn't refined there.

## Why it isn't a breaking change

GOVERNANCE.md §5 counts "changing a default" as breaking but "a visual refinement that keeps size and contrast" as not.
The box size is unchanged (the 1px transparent border stays). Contrast is re-proven below. The DOM, roles and
`data-*` attributes a consumer could already target are unchanged. The only new `data-*` value is
`data-surface="raised"`, set only when asked for. So: a minor release with a changeset, no deprecation and no codemod.

## Contrast

Without a face, the status shape and the text sit on the card's face. Default and outline cards are `surface.raised`,
showcase cards `surface.raised` (light) or `surface.sunken` (dark), and a ghost card shows the page
(`surface.canvas` / `surface.default`). The proof measures all four in both schemes, for the five tenants and the
engine's 1,000 fuzz brands (`pnpm --filter @syntara/react exec vitest run test/alert.test.tsx`, "every plain card face"):

| What | Needs | Worst measured | Where |
|---|---|---|---|
| Status shape `feedback.<tone>.fg` | 3:1 | 5.41:1 | fuzz#77, light, success on `surface.sunken` |
| `text.subtle` | 4.5:1 | 5.96:1 | fuzz#39, light, on `surface.sunken` |
| `text.default` | 4.5:1 | 14.31:1 | fuzz#94, light, on `surface.sunken` |

Tenants alone: shape 5.41, subtle 5.98, text 14.34 (Harbor/Vela light on `surface.sunken`). The knocked-out glyph is
measured against the shape, not the surface, so its proof (≥ 5.43:1, `test/alert.test.tsx`) is unchanged.

## Consequences

- `@syntara/sdui` schema 1.1.0 → 1.2.0: the wire gained the `surface` prop on Alert, Card and StatTile (a minor;
  `pnpm --filter @syntara/sdui generate` enforces it).
- In dark mode the `border.subtle` hairline is very faint. Anuj saw it and approved; if it's too faint later, the
  next step is `border.default`, a one-token change in four files.
- A tile nested two cards deep gets a transparent sparkline-dot ring (the inner card's fill is transparent). Harmless.
