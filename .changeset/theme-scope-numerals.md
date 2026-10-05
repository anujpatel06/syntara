---
'@syntara/react': minor
---

`ThemeScope` gains `numerals="native" | "latin"`. `native` writes dates and numbers in the language's own digits
(Arabic ١٢٣, Hindi १२३) for every component inside the scope; `latin` forces 1 2 3. Omitted, nothing changes: the
locale chooses, as before.
