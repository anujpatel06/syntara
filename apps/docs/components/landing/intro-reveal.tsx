'use client';

import { useEffect, useRef } from 'react';
import styles from './landing.module.css';

/**
 * Fora's intro: one paragraph is lit at a time. The paragraph nearest the middle of the screen is at full strength;
 * the ones above and below it rest at text.subtle. Fora rests at 25% white, which fails AA; Syntara rests at the
 * subtle role, which the engine solves to pass, and mixes up to text.default as a paragraph reaches the centre.
 *
 * The dimming is decoration. The text is in the DOM at every step for assistive tech, find-in-page and copy, and
 * with reduced motion, or before the script runs, every paragraph is at full strength.
 */
export function IntroReveal({ paragraphs }: { paragraphs: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ps = [...root.querySelectorAll<HTMLElement>('p')];
    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      const reach = window.innerHeight * 0.22;
      for (const p of ps) {
        const r = p.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        const k = Math.max(0, 1 - d / reach);
        p.style.setProperty('--o', `${(100 * k).toFixed(1)}%`);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={styles.reveal}>
      {paragraphs.map((p) => (
        <p key={p} className={styles.word}>
          {p}
        </p>
      ))}
    </div>
  );
}
