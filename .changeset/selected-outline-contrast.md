---
'@syntara/react': patch
---

State outlines now reach 3:1 against the page in every brand (WCAG 1.4.11).

The selected radio card, a file-upload zone with a file dragged over it, and a slider thumb while dragging drew their
outline in `action.primary.bg`, which the engine only proves against its own label. Against the page it fell below 3:1
in six tenant × scheme pairs — a selected Qamar card in light mode measured 1.93:1, Vela's in dark 2.80:1. They now use
`text.brand`, which the engine proves at 4.5:1 or more on every surface: the same cards measure 5.24:1 and 9.59:1.
Light-mode outlines barely move (Vela 6.53 → 6.42:1); dark-mode ones become clearly visible.
