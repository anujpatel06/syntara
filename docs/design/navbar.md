# Navbar spec (after superpower.com)

Measured from https://superpower.com on 2026-10-08 in the Claude desktop browser at 1024 × 768 and 375 × 812,
reading `getComputedStyle` and element boxes at the top of the page, after scrolling 1,000 px, while hovering a
link, with the menu open, and at phone width. Every number below came from those reads. Their root font is
14.12 px at 1024 wide (so 1 rem there is 14.12 px) and 16 px at 375. We copy the **system** (layout, rhythm,
the scroll morph, the hover, the drawer). We do **not** copy Superpower's logo, words, colours or code.

## 1. What the bar is

A bar over the top of the page that does three things:

1. **At rest it is invisible.** No background, no line, no shadow. Only the words and the one dark pill button sit on
   the page. The logo is dead centre. Links on the start side, "Log in" + the pill button + a dots button on the end side.
2. **Once you scroll, it folds into a floating pill.** The whole row shrinks to a dark, blurred, fully rounded capsule
   in the middle of the screen; the words turn light, the logo shrinks to 3/4, the pill button inverts to light, and
   the dots button becomes its own matching circle beside the capsule. One ease-out move, a quarter second.
3. **The dots open a drawer** from the end edge: a title, the same two actions, a list of big links, then two small
   columns. Hovering a link dims its neighbours and grows a short dash in front of it.

## 2. At rest (wide screens, ≥ 992 px wide)

| Part | Measured | Syntara |
|---|---|---|
| Bar | fixed to the top, full width, 78.5 px tall, transparent, no blur, no border | sticky, transparent, `padding-block: space-5` (20) around a `control-height` (40) row = 80 px; content flows under it |
| Side padding | 63.5 px (4.5 rem) | `clamp(space-4, 6cqi, space-16)` (16 → 64) |
| Logo | centred on the bar (left 50 %), 148 px wide, dark | centred, `font-heading` `font-size-lg` semibold wordmark or any node; `text.default` |
| Links | 12.35 px (0.875 rem), weight 400, no underline, dark; 21 px gap; start group 395 px wide | `font-size-sm` + `tracking-sm`, regular, `text.default`; gap `space-6` (24) |
| End group | "Log in" link, the pill button, the dots button; 14 px gaps; 360 px wide | same link; `NavbarAction`; the dots button; gap `space-4` (16) |
| Pill button | dark fill, light text, 12.35 px, padding 8.8 / 17.6 px, 36 px tall, fully round | `surface.inverse` / `text.inverse`, `font-size-sm`, 32 px tall (`control-height − space-2`), `control-padding-inline`, `radius-pill` |
| Dots button | 28 px square; nine 4.4 px dots in a 16 px 3 × 3 grid; no fill | `space-8` (32) square, 24 px target met; dots drawn at `space-1`, gap `space-1`; `text.default` |

## 3. Scrolled (the pill)

Toggles when the page has moved under the bar (Superpower adds `is-scrolled` by script). Transition **0.25 s
`cubic-bezier(0.16, 1, 0.3, 1)`** on width, background, padding, gap, blur, and the logo's transform.

| Part | Measured | Syntara |
|---|---|---|
| Bar padding | 14 px block (1 rem) | the row keeps the bar's height and moves up `space-2` (8) by `translate`, so nothing below it jumps |
| Capsule | max 790 px wide (56 rem), 43 px tall, `rgba(0,0,0,.6)` + `blur(21px)`, fully round, padding 5.3 px (and 21 px at the start), 56 px between the groups | max `space-16 × 12.5` (800), `control-height` tall, `surface.inverse` at the glass opacity + 8 points, `blur(glass-blur) saturate(1.6)`, `radius-pill`, padding `space-1` / start `space-5`, gap `space-12` (48) |
| Links | white | `text.inverse` |
| Logo | `scale(0.75)`, white, loses its invert filter | `scale: 0.75`, `text.inverse` |
| Pill button | inverts: white fill, dark text, padding 7 / 14 px, 32.6 px tall | `surface.default` / `text.default`; same height |
| Dots button | its own 43 px circle, the capsule's fill and blur, 7 px from the capsule; dots white | `control-height` circle, same face, gap `space-2`; `text.inverse` |
| Bar height | 71.5 px | 80 (unchanged in flow; the row rides up inside it) |

Motion tokens: `motion-duration-normal` (200 ms) + `motion-easing-out`. With reduced motion the capsule simply
switches; colour fades may stay.

## 4. Hover

- **Links:** the hovered link keeps its colour; every other link in the same group fades, 0.15 s ease-out, to 50 %
  opacity. Syntara: the others go to `text.subtle` (4.5:1 is proven for it), over `motion-duration-fast`. Inside the
  capsule they go to a mix of `text.inverse` and `surface.inverse` that the test proves ≥ 4.5:1 on every tenant and the fuzz brands.
- **Pill button:** background 0.25 s; press `scale(0.96)` over 150 ms. Syntara: hover = Button's contrast hover mix;
  press `scale: 0.96` on the spring (CONVENTIONS "press").
- **Dots button:** opacity 0.8 on hover. Syntara: the standard hover tint, press `scale: 0.9`.

## 5. Narrow (≤ 991 px; measured at 375)

| Part | Measured | Syntara |
|---|---|---|
| Bar | 74 px, white at 70 % + `blur(24px)`, bottom hairline `rgba(24,24,27,.08)`, padding 16 / 24 px | glass (`glass-bg`, `glass-blur`), hairline `border.subtle`; `padding: space-4 space-5` |
| Logo | at the start, 136 px | at the start (no absolute centring) |
| Links, "Log in" | hidden | hidden (`NavbarLink`s disappear; `NavbarAction` stays) |
| Pill button | stays, 160 × 41, padding 12 / 20 | stays |
| Dots | 32 px | `space-8` |
| Scroll | no capsule | no capsule |

Width is the bar's own (a container query, like Footer), so it also works inside a frame. The breakpoint is **640 px**, not Superpower's 992: the docs preview stage is 655 px wide at a 1440 px window (measured on the built page) and the playground 720, and a bar with three short links, a centred wordmark and the end group fits from 640 (four collided with the wordmark at 720; four fit from 960, where the link gap widens from `space-4` to `space-6`). Narrow bars hide the links, so they must also be in the menu.

## 6. The drawer

| Part | Measured | Syntara |
|---|---|---|
| Panel | from the right, 452 px (32 rem), full height, white + `blur(21px)`, left corners 21 px, padding 21 px, gap 14 px; slides from `translateX(100%)` in 0.3 s `cubic-bezier(0.16,1,0.3,1)`; black 50 % overlay fades in 0.3 s | `Sheet side="end"` (the system's panel: glass, `radius-container`, slides in over `motion-duration-slow`) |
| Header row | "Menu" 28 px (2 rem) regular, tracking −0.56 px; then "Log in", a dark pill, a 42 px round close | Sheet title (`font-size-lg`), the bar's `actions` again, Sheet's close |
| Big links | 28 / 33.5 px, weight 400, tracking −0.56 px (−0.02 em), 5 px apart, under a 12.35 px label at 50 % | `NavbarMenuGroup` label `text.subtle` `font-size-sm`; `NavbarMenuLink` `font-size-2xl` + `tracking-2xl`, regular, `line-height-snug`, gap `space-1` |
| Big link hover | a dash grows in front, 0 → 7 px wide (0.5 rem), 0.15 s; siblings fade to 50 % | a `space-2` dash scales in from the start and the text slides `space-2` (transforms only, nothing reflows); siblings → `text.subtle` |
| Columns | two, label at 50 %, 12.35 px links 7 px apart | `NavbarMenuGroup size="sm"`: `font-size-sm` links, gap `space-2` |
| Narrow | 90 vw (min 20 rem), 14 px corners, title 1.25 rem | Sheet's own narrow rule |

## 7. Accessibility

- `<header>` root; the links and actions sit in one `<nav aria-label="Main">` as two lists. The logo link names the brand.
- `NavbarLink isCurrent` sets `aria-current="page"`.
- The dots button is a real button named by `menuLabel` ("Menu"); the drawer is a dialog named the same, Escape closes it,
  focus returns to the button (all from React Aria's DialogTrigger + Sheet).
- Every target ≥ 24 px; focus ring on every part; hover-dimmed links keep ≥ 4.5:1 (never opacity).
- Reduced motion: the capsule and the dash don't animate size; fades may stay.

## 8. Not this (the anti-list)

- Not a glass bar at rest. At rest there is nothing behind the words.
- Not a sticky bar that pushes the page down: the page runs under it, like the hero under Superpower's.
- No underline on nav links, no border on the capsule, no shadow at rest.
- No fade-to-50 % that leaves text under 4.5:1.
- No hamburger lines: the menu button is the nine-dot grid.
- Not a mega-menu, no dropdowns on hover.

## 9. What is not copied

Superpower's logo, words, colours, type (NB International), photos and scripts. Syntara gives the bar the brand's
own tokens, so a sharp brand still gets a capsule (`radius-pill`, like Badge) but its own fonts, colours and density.
