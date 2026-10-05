# Landing page spec (after fora.so)

Measured from https://fora.so on 2026-10-05 at 1440 × 900, with Playwright reading computed styles
(Playwright, reading `getComputedStyle` and sampling the page at several scroll and pointer positions). Every number below came from those runs.
We copy the **system** (layout, rhythm, type scale, motion, materials). We do **not** copy Fora's photos,
copy text, illustrations or code.

## 1. The page at a glance

Total height 10,230 px. Black page (`#000`), one font family, almost no colour. The only colour on the
whole page comes from photographs of landscapes (dusk hills at the top, pink dunes at the bottom).

| # | Section | Height | What it is |
|---|---|---|---|
| 0 | Nav | 48 | Logo left, 5 links centred, Login + pill button right. Transparent, sits on the hero. |
| 1 | Hero `#hero` | 1,269 | Dusk sky gradient, pill tag, 2-line headline, 1 sentence, 1 button. App window rising from behind hills. |
| 2 | Intro `#about` | 952 | Three short paragraphs, large text, that brighten from grey to white as you scroll. |
| 3 | Features `#features` | 1,229 | Two-tone heading + paragraph, a 4-tab bar, a big framed screenshot that changes per tab, arrows + caption. |
| 4 | What you get | 2,286 | Two-tone heading, then 3 large cards stacked: text half + product half, alternating sides. |
| 5 | Pricing | 1,133 | Heading, 3 plan cards, the middle one raised. |
| 6 | FAQ | 958 | Heading + paragraph; category tabs on the left, accordion on the right, "Got questions?" card. |
| 7 | Blog | 1,033 | Heading + "Visit blog →", 3 cards with an image on top. |
| 8 | Closing CTA | 910 | Headline + sentence + button on the left, the app on the right, dunes across the bottom. |
| 9 | Footer | 460 | Logo + badges left, 3 link columns right, a hairline. |

## 2. Layout

- Content column: **1,080 px** wide (max-width 1080), centred. Section side padding **24 px** (40 px on the nav and section 4).
- Hero app window: **960 px** wide. Reading column in the intro: **~620 px**.
- Gaps used, and nothing else: 4, 6, 8, 10, 12, 16, 20, 24, 28, 36, 48, 64, 80, 120.
- Section headers are **split**: heading on the start side, a 3-line paragraph on the end side, aligned to the top.
- Every section begins with a small **pill label** ("Intro", "Core Features", "Pricing", "FAQ"): a 7 px dot + 14 px text, 30 px tall, fully rounded, background white at 10 %.

## 3. Type (Inter / Inter Display, one family)

| Role | Size / line | Weight | Tracking | Colour |
|---|---|---|---|---|
| Hero headline | 56 / 72.8 | 400 | −2.24 px (−0.04 em) | warm white `#FFF3F0` |
| Section heading | 40 / 54 | 500 | −1.6 px (−0.04 em) | white; **second line** white at 65 % ("two-tone") |
| Card heading | 28 / 37.8 | 400 | −0.84 px (−0.03 em) | warm white |
| Price | 36 / 48.6 | 400 | −0.72 px | warm white |
| Body | 16 / 24 | 400 | −0.16 px | white at 80 % |
| Small / nav / buttons | 14 / 21 | 400 | −0.28 px (−0.02 em) | white at 80 % |
| Caption | 12 / 18 | 400 | −0.24 px | white at 65 % |

Takeaways: headlines are **regular weight (400)**, not bold. Tracking is always tight. Only three greys:
100 %, 80 %, 65 %. The "white" is warm (`#FFF3F0`), which is a big part of why it feels soft.

## 4. Materials (this is the signature)

- **Lit-edge card.** Every card is two layers: an outer box 1 px larger, filled with a radial gradient
  (white 25 % → transparent, 735 px wide), and an inner box filled with near-black at 85 %
  (`rgba(15,15,15,.85)` or `rgba(0,0,0,.85)`), radius 1 px smaller. The result is a hairline border that
  glows from one point and fades around the card.
- **The light follows the mouse.** The gradient's centre is `0 0` at rest; moving the pointer to (900, 500)
  moved it to (607, 293); to (300, 300) moved it to (201, 173). It eases toward the pointer instead of jumping.
  Small controls (tabs) use a tighter, brighter version: 195 px wide, white at 65 %.
- **Frosted glass.** App windows: `rgba(23,23,23,.85)` + `backdrop-filter: blur(24px)`. Nav buttons: white
  at 10 % + `blur(5px)`.
- **Radii.** Buttons and pills fully round. Cards 16 px, big frames 24 px, hero app 24 px top corners only
  (its bottom is hidden behind the hills). Inner image wells 8 px / 4 px, asymmetric toward the edge they touch.
- **Shadows.** Almost none. One soft `0 1px 32px rgba(0,0,0,.35)` on a floating card. Depth comes from light and blur, not shadow.

## 5. Buttons

- Primary: white at 80 % fill, black 14 px text, fully round, 48 px tall, 36 px side padding. Hover: fill goes
  to warm white `#FFF3F0`. No lift, no shadow.
- Secondary (nav): white at 10 % + blur, 36 px tall, 24 px padding.
- Transition on colour only: **0.4 s, `cubic-bezier(0.44, 0, 0.56, 1)`** (a gentle ease-in-out).

## 6. Motion

1. **Hero parallax.** Three hill layers in front of the app. When you scroll 700 px, the back layer is pushed
   down 217 px, the middle 119 px, the front 0. So the far hills move about a third slower than the page, the
   middle about a sixth slower, the front at page speed. The app window scrolls normally and sinks behind them.
2. **Hero app cycles.** The app's main panel shows one community cover after another ("Frame & Light",
   "The Writer's Room"), each a soft blurred gradient picture with a name and a member count.
3. **Scroll-lit intro.** The paragraph is grey and turns white line by line as it passes the middle of the screen.
4. **Tabs + carousel.** 4 tabs and an indicator 216 × 2 px; the screenshot changes; arrows step through it.
5. **Spotlight borders** follow the mouse (section 4).
Nothing bounces, nothing spins, nothing loops fast.

## 7. Photography

Full-width transparent PNGs of landscapes: grass hills (3 layers, 1,440 wide, 285–531 tall) and sand dunes
(1,440 × 190). The hero sky is a CSS gradient, not a photo:
`radial-gradient(200% 83% at 50% 0, #1B2228 0%, #353F44 42%, #D39794 100%)`: slate at the top, warm pink at the horizon.

## 8. How Syntara uses it (built: `apps/docs/components/landing`)

| Fora | Syntara |
|---|---|
| Dusk hills, app window behind the front ridge | Space instead of land ("tara" is star in Hindi and Sanskrit): the Milky Way over a planet's lit edge, and the app window sits on that edge, which glows behind it. Drawn in code by `scripts/landscapes/galaxy.py` (`python3 scripts/landscapes/galaxy.py` → `apps/docs/public/landing`; needs numpy and Pillow). Empty sky is exactly the page colour, so no picture shows an edge. No photographs, nothing to license. |
| App window cycling community covers | Cycles the tenants. Each cover is the tenant's dark theme: its primary and accent blurred into a wash, its product name, and a Card of its real `content.json` copy built from Syntara components. Pause toggle; paused under reduced motion. |
| Scroll-lit intro | `IntroReveal`: words go from 22% to 100% of text.default over 120px of scroll. Full strength without JS or with reduced motion. |
| 4-tab carousel | Syntara `Tabs` (pill): Components, Brands, Contrast, Agents. Panels are live components in a tenant's dark theme. Contrast shows the engine's own `Theme.checks` ratios, never a second formula. |
| 3 alternating feature cards | Theme engine (pick a brand, the card re-themes), Every script (English / Arabic / Hindi from the tenants' copy, RTL flips), For agents. |
| Pricing | Install: tokens, React, MCP, each with the site's `InstallCommand`. |
| FAQ with topics | Toggle group of topics + `Accordion`. Answers moved from the previous homepage. |
| Blog | From the log: RFC-003, ADR-045, ADR-046. |
| Closing over dunes | `tenants/vela/brand.json` in an app window, a planet's lit edge rising in front. |
| Footer | The `Footer` component (wordmark), with the site footer's columns. |

Every colour on the page is a house dark token or a mix of one with transparent; sizes are token multiples, with the
Fora measure noted beside each calc in `landing.module.css`.

## 9. Anti-list (what would make it generic)

- Brand colour on page chrome. Brand colour lives only inside the live product.
- Bold headlines. Headlines are weight 400–500.
- Drop shadows, glows, gradients on buttons.
- Any number not read from a file or the engine. Fake logos, "4,000+ companies", star ratings.
- Text below AA. Fora's 65% white on black passes; over the space pictures it must be measured, not assumed.
- Motion that can't be paused or ignores reduced motion.

## 10. Decisions

- Page always dark (house theme, scheme dark), whatever the site's scheme: the space pictures are the light source. Claude recommended, pending Anuj.
- Geist, not Inter: the house type pair. Claude recommended, pending Anuj.
- Pictures drawn in code, not photographs. Claude recommended, pending Anuj.
- Space, not landscapes: the Milky Way, a spiral galaxy and a planet's lit edge replace the hills and dunes. The galleries inside the app windows stay as they are, because they show a customer's brand, not Syntara's. Anuj, 2026-10-05.
