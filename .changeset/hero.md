---
'@syntara/react': minor
---

Add `Hero` (alpha): the opening section of a website page (RFC-003).

Slots for an `eyebrow`, a `title` with an optional muted `titleSecondary`, a `description` and `actions`, over slow
lights in the brand's primary and accent (`variant="aurora"`, the first of four styles; more follow). Follows the
page's light or dark scheme by default; `scheme="dark"` keeps it dark on any page (it copies the tenant id from the
nearest themed ancestor and scopes itself to the brand's dark roles; pass `theme` to render dark on the server). A pause toggle meets WCAG 2.2.2; with reduced motion,
nothing moves.
