---
'syntara': minor
'@syntara/react': minor
---

`npx syntara init` now adds a welcome card to your app (`syntara-welcome.tsx`) that shows your brand on real components the first time you start it; delete the file and its two lines when you are done, or pass `--no-welcome`. The `ThemeScope` it adds follows the computer's light or dark setting (`scheme="auto"`), so an app whose own styles switch to dark mode no longer gets a light page under dark-mode text. `ThemeScope` accepts `scheme="auto"`.
