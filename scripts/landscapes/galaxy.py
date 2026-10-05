"""Renders the homepage's space pictures into apps/docs/public/landing (Anuj approved the look, 2026-10-05).
    python3 scripts/landscapes/galaxy.py            # needs numpy and Pillow; about 6 s on a Mac

Syntara: "tara" is star in Hindi and Sanskrit. Three pictures:
  galaxy-sky.webp     the Milky Way over a planet's lit edge. Hero, feature frames, log cards.
  galaxy-spiral.webp  a spiral galaxy over a cool blue edge. Feature cards, a log card.
  planet-rim.webp     only a planet's lit edge, transparent above. In front of the closing section.

Every scene is built as light on black, then *screened* over the page colour (the house canvas in dark,
rgb 13 13 14), so empty sky is exactly the page and a picture has no visible edge. The planets are the page
colour too, lit only at the rim. Seeded, so a re-run gives the same pictures."""
import numpy as np
from PIL import Image, ImageFilter
import sys
from pathlib import Path

OUT = sys.argv[1] if len(sys.argv) > 1 else str(Path(__file__).resolve().parents[2] / 'apps/docs/public/landing')
PAGE = np.array([13, 13, 14], np.float32) / 255


def noise(w, h, scales=(4, 8, 16, 32, 64, 128, 256), seed=0, falloff=0.55):
    r = np.random.default_rng(seed)
    acc = np.zeros((h, w), np.float32)
    amp, tot = 1.0, 0.0
    for s in scales:
        small = r.random((max(2, h * s // w), s)).astype(np.float32)
        im = Image.fromarray((small * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)
        acc += amp * np.asarray(im, np.float32) / 255
        tot += amp
        amp *= falloff
    return acc / tot


def ridged(w, h, seed):
    """Filament-like noise for dust lanes."""
    n = noise(w, h, scales=(6, 12, 24, 48, 96, 192, 384), seed=seed, falloff=0.6)
    return 1 - np.abs(n - 0.5) * 2


def blur1(a, r):
    m = float(a.max()) or 1.0
    im = Image.fromarray(np.clip(a / m * 255, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))
    return np.asarray(im, np.float32) / 255 * m


def blur(a, r):
    return np.stack([blur1(a[..., c], r) for c in range(3)], -1)


def splat(img, xs, ys, cols, w):
    h, wd = img.shape[:2]
    w = np.broadcast_to(np.asarray(w, np.float32).reshape(-1, 1) if np.ndim(w) else np.full((len(xs), 1), w, np.float32), (len(xs), 1))
    m = (xs >= 0) & (xs < wd) & (ys >= 0) & (ys < h)
    np.add.at(img, (ys[m].astype(int), xs[m].astype(int)), cols[m] * w[m])


def star_colours(r, n):
    # cool blue-white to warm orange, like real star temperatures
    t = r.random(n)
    blue, white, orange = np.array([0.75, 0.85, 1.0]), np.array([1, 0.97, 0.93]), np.array([1.0, 0.75, 0.5])
    c = np.where(t[:, None] < 0.35, blue, np.where(t[:, None] < 0.8, white, orange))
    return c


def starfield(img, n, seed, bright=1.0, mask=None):
    r = np.random.default_rng(seed)
    h, w = img.shape[:2]
    xs, ys = r.random(n) * w, r.random(n) * h
    b = (r.random(n) ** 7) * bright
    if mask is not None:
        b = b * mask[ys.astype(int).clip(0, h - 1), xs.astype(int).clip(0, w - 1)]
    cols = star_colours(r, n)
    layer = np.zeros_like(img)
    splat(layer, xs, ys, cols, b)
    img += layer * 0.8 + blur(layer, 0.9) * 2.2
    big = (r.random(n) > 0.9975)
    if mask is not None:
        big &= mask[ys.astype(int).clip(0, h - 1), xs.astype(int).clip(0, w - 1)] > 0.5
    halo = np.zeros_like(img)
    splat(halo, xs[big], ys[big], cols[big], 3.0)
    img += blur(halo, 2.5) * 1.6 + blur(halo, 9) * 1.2


def milky_way(img, x0, y0, x1, y1, width, seed, strength=1.0, core_t=0.42):
    h, w = img.shape[:2]
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    dx, dy = x1 - x0, y1 - y0
    L = np.hypot(dx, dy)
    d = ((xx - x0) * dy - (yy - y0) * dx) / L
    t = ((xx - x0) * dx + (yy - y0) * dy) / L**2
    n = noise(w, h, seed=seed)
    wob = (noise(w, h, scales=(3, 6, 12), seed=seed + 5) - 0.5) * width * 1.2
    dd = d + wob
    band = np.exp(-(dd / (width * (0.75 + 0.5 * n))) ** 2)
    core = np.exp(-((t - core_t) / 0.2) ** 2)
    # unresolved starlight: warm toward the core, blue-grey outward
    warm = np.array([1.0, 0.78, 0.58]) * core[..., None] + np.array([0.62, 0.68, 0.9]) * (1 - core[..., None])
    glow = band * (0.25 + 0.75 * core) * (0.35 + n * 0.9) * strength
    img += glow[..., None] * warm * 1.0
    # faint pink hydrogen clouds
    n3 = noise(w, h, scales=(8, 16, 32, 64), seed=seed + 3)
    img += (np.clip(n3 - 0.58, 0, 1) * 4)[..., None] * band[..., None] * [0.6, 0.18, 0.3] * strength
    # dense resolved stars inside the band
    r = np.random.default_rng(seed + 9)
    k = 260000
    tt = r.random(k)
    off = r.normal(0, width * 0.42, k)
    xs = x0 + dx * tt + off * dy / L
    ys = y0 + dy * tt - off * dx / L
    layer = np.zeros_like(img)
    splat(layer, xs, ys, star_colours(r, k), r.random(k) ** 9 * 0.8)
    img += layer * 0.35 + blur(layer, 0.7) * 0.6 + blur(layer, 4) * 2.5 + blur(layer, 14) * 4
    # dust: thin dark filaments along the band, strongest at its spine
    fil = ridged(w, h, seed + 1)
    dust = blur1(np.clip((fil - 0.6) * 3, 0, 1), 3) * np.exp(-((dd + width * 0.1) / (width * 0.45)) ** 2)
    big = np.clip((noise(w, h, scales=(8, 16, 32, 64, 128), seed=seed + 2) - 0.5) * 3, 0, 1) * np.exp(-(dd / (width * 0.3)) ** 2)
    img *= (1 - 0.7 * np.clip(dust + blur1(big, 6) * 0.6, 0, 1))[..., None]


def spiral(img, cx, cy, R, tilt, rot, seed):
    r = np.random.default_rng(seed)
    h, w = img.shape[:2]
    k = 600000
    arm = r.integers(0, 2, k)
    d = r.random(k) ** 1.05
    pitch = 0.32
    theta = np.log(np.maximum(d, 0.03) / 0.03) / np.tan(pitch)
    spread = r.normal(0, 0.75, k) * (1.15 - d * 0.55)
    a = arm * np.pi + theta + spread
    rad = d * R + r.normal(0, R * 0.07, k) * (0.3 + d)
    x, y = np.cos(a) * rad, np.sin(a) * rad * tilt
    xs = cx + x * np.cos(rot) - y * np.sin(rot)
    ys = cy + x * np.sin(rot) + y * np.cos(rot)
    inarm = np.exp(-(spread / 0.35) ** 2)
    col = np.where(d[:, None] < 0.18, [1.0, 0.82, 0.6], [0.72, 0.8, 1.0])
    layer = np.zeros_like(img)
    splat(layer, xs, ys, col, 0.014 * (0.5 + inarm) * (1.1 - d))
    disc = np.zeros_like(img)
    m2 = r.random(k) < 0.5
    dr = r.random(k) ** 1.8 * R * 0.9
    da = r.random(k) * 6.283
    dxs = cx + np.cos(da) * dr * np.cos(rot) - np.sin(da) * dr * tilt * np.sin(rot)
    dys = cy + np.cos(da) * dr * np.sin(rot) + np.sin(da) * dr * tilt * np.cos(rot)
    splat(disc, dxs[m2], dys[m2], np.tile([1.0, 0.88, 0.75], (m2.sum(), 1)), 0.01)
    img += blur(disc, 5) * 4
    # pink star-forming knots on the arms
    knots = (r.random(k) > 0.9985) & (d > 0.3)
    kn = np.zeros_like(img)
    splat(kn, xs[knots], ys[knots], np.tile([1.0, 0.45, 0.65], (knots.sum(), 1)), 0.9)
    img += layer * 1.2 + blur(layer, 1.5) * 2 + blur(layer, 7) * 3 + blur(kn, 1.5) * 1.2
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    ux = (xx - cx) * np.cos(-rot) - (yy - cy) * np.sin(-rot)
    uy = ((xx - cx) * np.sin(-rot) + (yy - cy) * np.cos(-rot)) / tilt
    rr = np.hypot(ux, uy)
    img += np.exp(-(rr / (R * 0.07)) ** 2)[..., None] * [1.0, 0.85, 0.62]
    img += np.exp(-(rr / (R * 0.22)) ** 2)[..., None] * [0.35, 0.28, 0.2]
    img += np.exp(-(rr / (R * 0.7)) ** 2)[..., None] * [0.06, 0.06, 0.09]
    # dust lane on the near side of the disc
    fil = ridged(w, h, seed + 4)
    lane = np.exp(-((uy - R * 0.12) / (R * 0.06)) ** 2) * np.exp(-(rr / (R * 0.75)) ** 4) * (uy > 0)
    img *= (1 - 0.6 * lane * (0.5 + 0.5 * fil))[..., None]


def horizon(img, cx, cy, R, rim, haze, seed, glow_x=None, glow_w=600, glow_strength=1.0):
    """Planet limb. Inside the planet the scene is removed (alpha), the rim and atmosphere are added as light."""
    h, w = img.shape[:2]
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    dist = np.hypot(xx - cx, yy - cy) - R
    inside = np.clip(0.5 - dist, 0, 1)
    up = np.clip((cy - yy) / R, 0, 1) ** 0.6
    gx = np.exp(-((xx - (glow_x if glow_x is not None else cx)) / glow_w) ** 2)
    shade = (0.35 + 0.65 * gx) * glow_strength
    light = np.zeros_like(img)
    light += (np.exp(-((dist + 1.5) / 1.8) ** 2) * up * shade)[..., None] * np.array(rim) * 1.6
    light += (np.exp(-((dist - 2) / 7) ** 2) * up * shade)[..., None] * np.array(rim) * 0.5
    out = np.clip(dist, 0, None)
    light += (np.exp(-out / 55) * (dist >= 0) * up * shade)[..., None] * np.array(haze) * 0.55
    light += (np.exp(-out / 220) * (dist >= 0) * up * shade)[..., None] * np.array(haze) * 0.22
    # night side: a whisper of surface texture just under the rim, fading to page
    n = noise(w, h, scales=(16, 32, 64, 128, 256), seed=seed)
    under = np.exp(-np.clip(-dist, 0, None) / 90) * (dist < 0) * shade
    light += (under * (0.4 + 0.6 * n))[..., None] * np.array(rim) * 0.05
    return light, inside


def finish(scene, alpha=None):
    """Tone-map light, then screen it over the page colour."""
    t = 1 - np.exp(-np.clip(scene, 0, None) * 1.25)
    rgb = 1 - (1 - PAGE) * (1 - t)
    return rgb, alpha


def save(rgb, name, alpha=None):
    a = (np.clip(rgb, 0, 1) * 255 + np.random.default_rng(0).random(rgb.shape) * 0.9).astype(np.uint8)  # dither, no banding
    if alpha is not None:
        im = Image.fromarray(np.dstack([a, (np.clip(alpha, 0, 1) * 255).astype(np.uint8)]))
    else:
        im = Image.fromarray(a)
    im.save(f'{OUT}/{name}.webp', quality=88)


# ── galaxy-sky.webp — hero. Milky Way arcing up; the planet limb sits just under the dashboard's top edge,
#    brightest in the middle so light rises from behind the dashboard. 1920x1200
W, H = 1920, 1200
s = np.zeros((H, W, 3), np.float32)
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
starfield(s, 9000, 1, bright=1.1)
milky_way(s, 120, 1100, 1800, -60, 150, 3, strength=1.0, core_t=0.36)
s += np.exp(-(((xx - 960) / 1100) ** 2 + ((yy - 640) / 260) ** 2))[..., None] * [0.16, 0.08, 0.1]
# a dark pool behind the headline, its tag, its sentence and its buttons (x 720–1200, y 115–441 at 1920 wide),
# so the text passes AA over every pixel, stars included (Anuj: "text is not fully readable", 2026-10-05)
pool = np.exp(-((np.abs(xx - 960) / 640) ** 4 + (np.abs(yy - 280) / 300) ** 4))
s *= (1 - 0.94 * pool)[..., None]
light, inside = horizon(s, 960, 700 + 3600, 3600, (1.0, 0.8, 0.62), (1.0, 0.55, 0.42), 5, glow_x=960, glow_w=520)
s = s * (1 - inside[..., None]) + light
rgb, _ = finish(s)
save(rgb, 'galaxy-sky')


# ── galaxy-spiral.webp — cards. A spiral galaxy over a cool blue limb. 1920x900
W, H = 1920, 900
s = np.zeros((H, W, 3), np.float32)
starfield(s, 6000, 11, bright=1.0)
spiral(s, 1000, 340, 470, 0.45, -0.3, 12)
light, inside = horizon(s, 960, 690 + 5200, 5200, (0.72, 0.82, 1.0), (0.35, 0.5, 1.0), 13, glow_x=760, glow_w=700)
s = s * (1 - inside[..., None]) + light
rgb, _ = finish(s)
save(rgb, 'galaxy-spiral')

# ── planet-rim.webp — closing section. A flatter warm limb low in the frame (830 of 900, ends at 868 so nothing is cut off), so the footer wordmark follows it
#    closely (Anuj: too much gap, 2026-10-05). Transparent above, page-coloured below.
s = np.zeros((H, W, 3), np.float32)
light, inside = horizon(s, 960, 830 + 12000, 12000, (1.0, 0.78, 0.6), (1.0, 0.55, 0.4), 14, glow_x=960, glow_w=650,
                         glow_strength=0.4)  # dimmed: at full strength the line glared (Anuj, 2026-10-05)
rgb, _ = finish(light)
lum = 1 - np.exp(-light.max(-1) * 1.25)
save(rgb, 'planet-rim', alpha=np.clip(inside + lum * 1.4, 0, 1))
print('ok')
