---
'@syntara/react': minor
---

Add `Hero` (alpha): the opening section of a website page (RFC-003).

Slots for an `eyebrow`, a `title` with an optional muted `titleSecondary`, a `description` and `actions`, over slow
lights in the brand's primary and accent (`variant="aurora"`, the first of four styles; more follow). Dark by default
(`scheme="dark"`): the hero copies the tenant id from the nearest themed ancestor and scopes itself to the brand's dark
roles, so the lights glow even on a light page and text keeps the engine's proven contrast; pass `theme` to render
dark on the server, or `scheme="inherit"` to follow the page. A pause toggle meets WCAG 2.2.2; with reduced motion,
nothing moves.
