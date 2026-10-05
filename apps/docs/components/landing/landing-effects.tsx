'use client';

import { useEffect } from 'react';

/** Scroll distance over which a `data-rise` element climbs to its full rise. */
const RISE_OVER = 320;

/**
 * The page's scroll and pointer effects, run once for the whole landing page. Each one is measured from fora.so
 * (docs/design/landing.md §6), sampling computed transforms at 20 scroll positions:
 *
 * 1. Parallax. `[data-speed]` elements move down by scroll × speed while the hero is on screen. The far hills
 *    at 0.31 and the front ridge not at all. Fora's app window moves at 0.2; ours at 0.1, so it sinks only a
 *    little: at 0.2 too much of the Hero slide went behind the ridge (Anuj, 2026-10-05).
 * 2. Reveal. `[data-reveal]` elements start 24px low and transparent, and rise in over 0.8s once they enter the
 *    viewport. `data-reveal="2"` waits two steps of 0.12s, so a tag, its heading and its paragraph arrive in turn.
 *    `data-reveal="zoom"` starts at 110% scale instead (the feature pictures).
 * 3. Stacking cards. Each `[data-stack]` card sticks below the header; as the next one slides over it, it shrinks
 *    to 90%, rises 24px and fades out.
 * 4. Lit edges. Every `[data-lit]` card's 1px ring is lit from a point that eases toward the pointer (12% of the
 *    gap per frame). On fora.so, moving the pointer to (900, 500) moved the light to (607, 293).
 *
 * 5. Smooth scrolling for the mouse wheel, eased like fora.so's.
 *
 * Reduced motion: no parallax, no stacking motion, no smoothing, reveals are already shown, and the light jumps to
 * the pointer.
 */
export function LandingEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* 2 ── reveal on entering the viewport. Hidden only once this script runs, so no-JS shows everything. */
    const reveals = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    let io: IntersectionObserver | undefined;
    if (!still) {
      root.dataset.landingMotion = '';
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            (e.target as HTMLElement).dataset.shown = '';
            io?.unobserve(e.target);
          }
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      for (const el of reveals) {
        /* already on screen at load: show without animating */
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.dataset.shown = '';
        else io.observe(el);
      }
    }

    /* 1 and 3 ── per frame, driven by scroll position */
    const layers = [...document.querySelectorAll<HTMLElement>('[data-speed]')];
    const stack = [...document.querySelectorAll<HTMLElement>('[data-stack]')];
    let queued = 0;
    const onScroll = () => {
      queued = 0;
      const y = window.scrollY;
      if (y < window.innerHeight * 1.6) {
        for (const l of layers) {
          /* data-rise: the element first climbs this many px over the first RISE_OVER px of scroll, then moves
             at data-speed, so the app window comes up out of the hills before it settles */
          const rise = Number(l.dataset.rise ?? 0);
          const speed = Number(l.dataset.speed);
          const t = rise
            ? -rise * Math.min(1, y / RISE_OVER) + speed * Math.max(0, y - RISE_OVER)
            : y * speed;
          l.style.transform = `translateY(${t.toFixed(1)}px)`;
        }
      }
      for (let i = 0; i < stack.length - 1; i++) {
        const card = stack[i]!;
        const next = stack[i + 1]!;
        const stickAt = parseFloat(getComputedStyle(card).top) || 0;
        const span = card.offsetHeight;
        /* 0 while the next card is a full card-height away, 1 when it has covered this one */
        const p = Math.min(1, Math.max(0, 1 - (next.getBoundingClientRect().top - stickAt) / span));
        card.style.transform = `translateY(${(-24 * p).toFixed(1)}px) scale(${(1 - 0.1 * p).toFixed(4)})`;
        card.style.opacity = (1 - p).toFixed(3);
      }
    };
    const request = () => {
      if (!queued) queued = requestAnimationFrame(onScroll);
    };
    if (!still) {
      window.addEventListener('scroll', request, { passive: true });
      window.addEventListener('resize', request);
      onScroll();
    }

    /* 5 ── smooth wheel scrolling, like fora.so (Lenis-style: the page eases toward where the wheel sends it).
       Wheel only: keyboard, scrollbar, touch and find-in-page scroll natively, and resync the target. Skipped
       for pinch-zoom (ctrl), for anything inside its own scroll box, and under reduced motion. */
    let target = window.scrollY;
    /* kept as a float: the browser rounds scrollY, and tiny steps would otherwise never arrive */
    let current = window.scrollY;
    let smoothing = 0;
    const glide = () => {
      current += (target - current) * 0.1;
      if (Math.abs(target - current) < 0.5) current = target;
      window.scrollTo({ top: current, behavior: 'instant' });
      smoothing = current === target ? 0 : requestAnimationFrame(glide);
    };
    const scrollsItself = (el: EventTarget | null) => {
      for (let n = el as HTMLElement | null; n && n !== document.body; n = n.parentElement) {
        const o = getComputedStyle(n).overflowY;
        if ((o === 'auto' || o === 'scroll') && n.scrollHeight > n.clientHeight) return true;
      }
      return false;
    };
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.defaultPrevented || Math.abs(e.deltaX) > Math.abs(e.deltaY) || scrollsItself(e.target)) return;
      e.preventDefault();
      if (!smoothing) target = current = window.scrollY;
      const step = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
      target = Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, target + step));
      if (!smoothing) smoothing = requestAnimationFrame(glide);
    };
    if (!still) window.addEventListener('wheel', onWheel, { passive: false });

    /* 4 ── lit edges */
    const ease = still ? 1 : 0.12;
    let px = -1e4;
    let py = -1e4;
    const at = new WeakMap<Element, { x: number; y: number }>();
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    let raf = 0;
    const tick = () => {
      for (const el of document.querySelectorAll<HTMLElement>('[data-lit]')) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) continue;
        const p = at.get(el) ?? { x: 0, y: 0 };
        p.x += (px - r.left - p.x) * ease;
        p.y += (py - r.top - p.y) * ease;
        at.set(el, p);
        el.style.setProperty('--lx', `${p.x.toFixed(1)}px`);
        el.style.setProperty('--ly', `${p.y.toFixed(1)}px`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      io?.disconnect();
      cancelAnimationFrame(raf);
      cancelAnimationFrame(queued);
      cancelAnimationFrame(smoothing);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      delete root.dataset.landingMotion;
    };
  }, []);
  return null;
}
