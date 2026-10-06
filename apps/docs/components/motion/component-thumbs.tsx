/**
 * Small still drawings of each component for the motion lab's component tiles. Spans only, because they sit inside
 * a <button>. Colours come from the stage's brand (the caller wraps them in the stage's data-syntara-theme), so the
 * tiles change with the brand like the stage does. Decorative: the tile's own label names the component.
 */
import type { JSX } from 'react';
import styles from './motion-lab.module.css';

function DialogThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctDim}`}>
      <span className={styles.ctPanel}>
        <span className={styles.ctLine} />
        <span className={styles.ctLineShort} />
        <span className={styles.ctActions}>
          <span className={styles.ctGhost} />
          <span className={styles.ctPrimary} />
        </span>
      </span>
    </span>
  );
}

function TooltipThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctColumn}`}>
      <span className={styles.ctTip} />
      <span className={styles.ctOutlineButton} />
    </span>
  );
}

function SwitchThumb() {
  return (
    <span className={styles.ct}>
      <span className={styles.ctRow}>
        <span className={styles.ctTrack}>
          <span className={styles.ctKnob} />
        </span>
        <span className={styles.ctLineShort} />
      </span>
    </span>
  );
}

function TabsThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctStack}`}>
      <span className={styles.ctTabs}>
        <span className={styles.ctTab} />
        <span className={`${styles.ctTab} ${styles.ctTabOn}`} />
        <span className={styles.ctTab} />
      </span>
      <span className={styles.ctLine} />
      <span className={styles.ctLineShort} />
    </span>
  );
}

function AccordionThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctStack}`}>
      <span className={styles.ctAccRow}>
        <span className={styles.ctAccTitle} />
      </span>
      <span className={styles.ctAccRow}>
        <span className={styles.ctAccTitle} />
        <span className={styles.ctLineShort} />
        <span className={styles.ctLineShort} />
      </span>
      <span className={styles.ctAccRow}>
        <span className={styles.ctAccTitle} />
      </span>
    </span>
  );
}

function StatTileThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctRow}`}>
      <span className={styles.ctStat}>
        <span className={styles.ctLineShort} />
        <span className={styles.ctFigure} />
      </span>
      <span className={styles.ctStat}>
        <span className={styles.ctLineShort} />
        <span className={styles.ctFigure} />
      </span>
    </span>
  );
}

export const COMPONENT_THUMBS: Record<string, () => JSX.Element> = {
  dialog: DialogThumb,
  tooltip: TooltipThumb,
  switch: SwitchThumb,
  tabs: TabsThumb,
  accordion: AccordionThumb,
  'stat-tile': StatTileThumb,
};
