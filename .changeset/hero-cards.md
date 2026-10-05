---
'@syntara/react': minor
---

`Hero` gains `variant="cards"` (Card fan), the fourth and last style from RFC-003: centred copy over a fan of up to
five `cards` rising from the bottom edge, each a title and a small label straight on a different solved brand pair
(accent, inverse, primary in the middle, two tints), over an optional picture. Two optional `cursors` drift beside the
headline on wide screens. The fan spreads under the pointer, the hovered card lifts and the fan tilts toward the
pointer; reduced motion keeps the hover lift but drops the drift and tilt. Cards and cursors are decoration
(`aria-hidden`).
