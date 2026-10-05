# ADR-048: Arabic and Hindi write their own digits

- **Status:** Accepted — **Anuj** (2026-10-05). He chose "native digits, opt-in" from three options (native by
  default; opt-in; only on the landing calendar), and then "everywhere, including the copy" for Qamar and Haat.
- **Date:** 2026-10-05
- **Scope:** `@syntara/react` `ThemeScope` (new prop), tenants Qamar and Haat, the docs' Arabic and Hindi copy.

## Context

- On the landing page's "Every script" calendar, Arabic and Hindi showed 1 2 3. Anuj: "if I have selected Arabic,
  the calendar should be in Arabic … this should not happen with users if they install the design system."
- Nothing was broken: every formatter follows the locale, and CLDR's default for ar-AE and hi-IN is Latin digits.
  Qamar had asked for them explicitly (`ar-AE-u-nu-latn`, ADR-042). The gap was that choosing native digits meant
  knowing BCP 47's `-u-nu-` extension.

## Decision

1. **`ThemeScope` gains `numerals?: 'native' | 'latin'`.** `native` sets the language's own numbering system
   (Arabic `arab`, Hindi `deva`, Persian/Urdu `arabext`, Bengali, Tamil, Thai, and a few more) on the locale React Aria
   receives; `latin` forces `latn`. Omitted, nothing changes. Opt-in, so no existing install changes.
2. **Qamar and Haat use their own digits**: locales `ar-AE-u-nu-arab` and `hi-IN-u-nu-deva` in `content.json`, so
   every `Intl` call that reads the tenant locale follows, inside a `ThemeScope` or not.
3. **Copy matches.** Digits a reader reads in Qamar's and Haat's copy and in `examples/_copy/ar.json` / `hi.json` are
   written natively (`node scripts/native-digits.mjs`; `--check` fails on a 0–9 that should be native). Codes
   (QM-58213), stored dates, ids and form values stay as written.
4. **The preview's right-to-left stand-in** (any tenant flipped to RTL) is `ar-AE-u-nu-arab`, so it matches the
   Arabic copy it shows.

## Consequences

- Hand-written Arabic or Hindi in a new example needs native digits too; `native-digits.mjs --check` covers only the
  four copy files.
- Screenshots and the glyph-clipping check now see Arabic-Indic and Devanagari digits; both must be re-run.
- Supersedes ADR-042's `ar-AE-u-nu-latn` for Qamar. The rest of ADR-042 stands.
