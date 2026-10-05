---
'@syntara/react': patch
---

`Button`: the rule that trims a leading icon's padding now weighs no more than the button's own class, so a `className`
that sets padding wins again. It looks the same; it had been overriding padding set by consumers.
