# Niche icon pack — domain list (draft, pending Anuj)

Goal: 2,000 outline icons at niche level (after the 2026-10-06 review removed 41 same-object duplicates there are 1,959; the targets below are the original plan), in `@syntara/icons`, behind the entry `@syntara/icons/niche`.
Outline only; duotone comes later, per domain. Style is the existing spec in
`packages/icons/src/create-icon.tsx` (ADR-014): 24×24 grid, 1.5 stroke, round caps and joins,
curvy, ≤ 3 subpaths, `currentColor` only.

Status: **draft for approval. Nothing is drawn yet.** Pack home: same package (Anuj); own entry point (Claude recommended, pending Anuj).

## Bar for every icon (measurable)

- Fits the 2→22 drawing area; nothing touches the viewBox edge.
- Strokes: aim for 3; **hard cap 5** stroked subpaths per icon (every `M` in a path, plus every circle, rect and ellipse; Anuj accepted the cap, 2026-10-06). The checker fails anything above 5. About 46% of the set sits at 4 or 5; the shipped `@syntara/icons` set bends the aim of 3 too.
- Filled dots r≈1 are free of the stroke count but **capped at 4 per icon** (checker fails above 4; only `loading-spinner`, a ring of dots by definition, is exempt). Dots may not be used to replace outline parts of an object.
- No inner detail lines.
- Readable at 16px and 24px (checked on the review sheet at both sizes).
- Unique name `domain-thing` in kebab-case; no duplicates of the core set (a script checks).
- No brand logos, no real people, no trademarked symbols (e.g. no Rod of Asclepius redraw with brand marks).
- Where an object cannot be drawn recognisably in the style, it is cut from the list, not forced.

## Domains and targets (sum = 2,000)

| # | Domain | Target | Niches inside |
|---|---|---|---|
| 1 | Healthcare, specialties | 85 | cardiology, neurology, orthopaedics, paediatrics, oncology, radiology, dermatology, ophthalmology, ENT, gynaecology, urology, nephrology, gastroenterology, pulmonology, endocrinology, psychiatry, haematology, rheumatology, anaesthesia, emergency |
| 2 | Healthcare, dental | 35 | tooth types, braces, implants, extraction, scaling, root canal, dental chair |
| 3 | Healthcare, equipment and lab | 65 | stethoscope, scanners, ventilator, IV, syringes, microscope, test tubes, sterilisers |
| 4 | Healthcare, body and anatomy | 55 | organs, bones, joints, systems |
| 5 | Pharmacy and wellness | 40 | tablets, syrups, inhalers, vitamins, yoga, sleep, nutrition |
| 6 | Veterinary and pets | 40 | species, vet tools, grooming, feeding |
| 7 | Finance and banking | 65 | accounts, cards, loans, forex, tax, audit, insurance |
| 8 | Insurance and legal | 60 | policies, claims, courts, contracts, IP, notary |
| 9 | Real estate and construction | 75 | house types, rooms, surveying, cranes, tools, materials |
| 10 | Architecture and interiors | 45 | furniture, lighting, floor plans, fixtures |
| 11 | Education | 70 | levels, subjects, classroom, exams, lab apparatus |
| 12 | Science and research | 70 | physics, chemistry, biology, astronomy, geology |
| 13 | Software and engineering | 75 | dev tools, cloud, data, security, DevOps, QA |
| 14 | Electronics and hardware | 55 | components, boards, sensors, connectors |
| 15 | Telecom and networking | 30 | towers, routers, cables, satellites |
| 16 | Manufacturing and industry | 60 | machines, assembly, welding, CNC, safety |
| 17 | Energy and utilities | 45 | solar, wind, hydro, nuclear, grid, water, gas |
| 18 | Agriculture and farming | 60 | crops, livestock, machinery, irrigation, greenhouse |
| 19 | Food and restaurants | 75 | dishes, cuisines, kitchen tools, bakery, beverages |
| 20 | Hospitality and travel | 55 | hotel, booking, luggage, sights |
| 21 | Transport and logistics | 70 | vehicles, ports, warehouse, cargo, tracking |
| 22 | Automotive | 45 | parts, service, EV, fuel, tyres |
| 23 | Aviation and maritime | 40 | aircraft parts, airport, ships, navigation |
| 24 | Retail and e-commerce | 55 | store types, POS, packaging, returns |
| 25 | Fashion and beauty | 60 | garments, accessories, salon, cosmetics |
| 26 | Sports and fitness | 75 | ball games, racket sports, athletics, water, winter, gym |
| 27 | Music and audio | 30 | instruments, studio gear |
| 28 | Film, photo and media | 40 | cameras, lenses, lighting, editing, press |
| 29 | Gaming and toys | 30 | consoles, board games, puzzle |
| 30 | Art, craft and design | 45 | drawing tools, printmaking, pottery, textiles, type |
| 31 | Weather, nature and environment | 55 | weather, plants, trees, animals, habitats, recycling |
| 32 | Government and public service | 30 | civic, elections, police, fire, postal |
| 33 | Military and security | 25 | safety, surveillance, access (no weapons graphics) |
| 34 | Religion and culture | 30 | places of worship, festivals (neutral objects only) |
| 35 | Family, events and life | 40 | weddings, baby, birthdays, celebrations |
| 36 | HR, office and business | 55 | roles, meetings, hiring, payroll, workspace |
| 37 | Marketing and sales | 30 | funnels, campaigns, SEO, social |
| 38 | Home and household | 45 | appliances, cleaning, repair, garden |
| 39 | Space and mining | 25 | rockets, planets, drills, minerals |
| 40 | Crypto, fintech and web3 | 15 | wallets, chains, tokens (generic symbols) |
| | **Total** | **2,000** | |

## How it will run

1. Anuj approves or edits this list (add, cut, rebalance counts).
2. **One before many:** the 50 healthcare-specialty icons from row 1 are drawn first on one review sheet, at 16 and 24px. Anuj approves the look.
3. Then the other domains fan out in parallel (one worktree and branch per session; each owns one source file per domain; no commits by subagents).
4. Per domain, a script reports: icon count, duplicate names, subpath over-limit, edge-touching. Counts are quoted from the command, not from memory.
5. Honest limit: the drawings are made by writing SVG paths by hand, so I expect some to need redraws after review. The sheet is how we catch them.
