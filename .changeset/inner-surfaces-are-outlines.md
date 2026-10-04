---
'@syntara/react': minor
'@syntara/sdui': minor
---

Inside a card, inner surfaces are outlines (ADR-045).

An Alert, a StatTile (`default` or `outline`), a Card inside a Card and FileUpload's file rows used to paint their own
face, hairline and shadow, so a dashboard card read as filled boxes in a filled box. Inside a Card they now drop the
face and shadow and keep only a faint `border.subtle` hairline; on the bare page they look exactly as before. Toast and
anything inside a `feature` card keep their faces.

New optional prop `surface?: 'auto' | 'raised'` on Alert, StatTile and Card: `raised` keeps the filled face inside a
card. Box sizes don't change, and the status shapes and text are re-proven on every plain card face (shape ≥ 5.41:1,
`text.subtle` ≥ 5.96:1, for the tenants and 1,000 fuzz brands). Browsers without container style queries keep the
filled look.

`@syntara/sdui`: schema 1.2.0 adds the `surface` prop to Alert, Card and StatTile.
