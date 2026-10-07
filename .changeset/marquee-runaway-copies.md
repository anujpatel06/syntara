---
'@syntara/react': patch
---

Marquee no longer copies itself without end inside a parent that sizes to its content, such as a centring grid. The strip's width now never comes from its own copies, so it stays at a few copies instead of growing until the page freezes.
