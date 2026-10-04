---
'@syntara/react': minor
---

`Hero` (alpha): **the default `scheme` changed from `"dark"` to `"inherit"`**, so the hero follows the page's light or
dark scheme (ADR-046, decided by Anuj). Pass `scheme="dark"` to keep the always-dark look. In light, aurora's lights
glow at full strength around the copy, which sits on a soft, blurred halo of the page colour (90%); text.default and text.subtle
stay at 4.5:1 or more over every combination of the lights, for every tenant and the engine's 1,000 fuzz brands
(`hero.test.tsx`). Alpha components may change their API in any release (GOVERNANCE.md §5), so there is no codemod.
