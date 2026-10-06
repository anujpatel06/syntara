/**
 * Small still drawings of each component for the motion lab's component tiles. Spans only, because they sit inside
 * a <button>. Colours come from the stage's brand (the caller wraps them in the stage's data-syntara-theme), so the
 * tiles change with the brand like the stage does. Decorative: the tile's own label names the component.
 */
import type { JSX } from 'react';
import { THUMBS as DATA_THUMBS } from './batch3/data';
import { THUMBS as INPUTS_THUMBS } from './batch3/inputs';
import { THUMBS as OVERLAYS_THUMBS } from './batch3/overlays';
import { THUMBS as PAGE_THUMBS } from './batch3/page';
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

function SheetThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctDim} ${styles.ctSheetWrap}`}>
      <span className={styles.ctSheet}>
        <span className={styles.ctLine} />
        <span className={styles.ctLineShort} />
        <span className={styles.ctLineShort} />
        <span className={styles.ctSheetFoot}>
          <span className={styles.ctPrimary} />
        </span>
      </span>
    </span>
  );
}

function CheckboxThumb() {
  return (
    <span className={styles.ct}>
      <span className={styles.ctRow}>
        <span className={styles.ctBox}>
          <svg viewBox="0 0 12 12" className={styles.ctTick}>
            <path d="M2.5 6.2 5 8.5l4.5-5" />
          </svg>
        </span>
        <span className={styles.ctLineShort} />
      </span>
    </span>
  );
}

function RadioThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctStack}`}>
      {[false, true, false].map((onRow, i) => (
        <span key={i} className={styles.ctRow}>
          <span className={`${styles.ctRadio} ${onRow ? styles.ctRadioOn : ''}`} />
          <span className={styles.ctLineShort} />
        </span>
      ))}
    </span>
  );
}

function ToggleGroupThumb() {
  return (
    <span className={styles.ct}>
      <span className={styles.ctSegmented}>
        <span className={styles.ctSeg} />
        <span className={`${styles.ctSeg} ${styles.ctSegOn}`} />
        <span className={styles.ctSeg} />
      </span>
    </span>
  );
}

function ChipThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctWrapRow}`}>
      <span className={styles.ctChip} />
      <span className={`${styles.ctChip} ${styles.ctChipOn}`} />
      <span className={styles.ctChip} />
      <span className={`${styles.ctChip} ${styles.ctChipOn}`} />
    </span>
  );
}

function StepsThumb() {
  return (
    <span className={styles.ct}>
      <span className={styles.ctSteps}>
        <span className={`${styles.ctStep} ${styles.ctStepDone}`} />
        <span className={`${styles.ctStepLink} ${styles.ctStepLinkDone}`} />
        <span className={`${styles.ctStep} ${styles.ctStepNow}`} />
        <span className={styles.ctStepLink} />
        <span className={styles.ctStep} />
      </span>
    </span>
  );
}

function BadgeThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctWrapRow}`}>
      <span className={styles.ctBadge} />
      <span className={`${styles.ctBadge} ${styles.ctBadgeSoft}`} />
      <span className={`${styles.ctBadge} ${styles.ctBadgeSolid}`} />
    </span>
  );
}

function MeterThumb() {
  return (
    <span className={`${styles.ct} ${styles.ctStack}`}>
      <span className={styles.ctLineShort} />
      <span className={styles.ctMeter}>
        <span className={styles.ctMeterFill} />
      </span>
    </span>
  );
}

function SparklineThumb() {
  return (
    <span className={styles.ct}>
      <svg viewBox="0 0 60 24" className={styles.ctSpark} preserveAspectRatio="none">
        <path d="M1 20 L8 17 L14 18 L20 13 L26 14 L32 10 L38 7 L44 9 L50 5 L59 2" />
      </svg>
    </span>
  );
}

function AvatarThumb() {
  return (
    <span className={styles.ct}>
      <span className={styles.ctAvatars}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={styles.ctAvatar} data-i={i} />
        ))}
      </span>
    </span>
  );
}

export const COMPONENT_THUMBS: Record<string, () => JSX.Element> = {
  ...OVERLAYS_THUMBS,
  ...INPUTS_THUMBS,
  ...DATA_THUMBS,
  ...PAGE_THUMBS,
  dialog: DialogThumb,
  tooltip: TooltipThumb,
  switch: SwitchThumb,
  tabs: TabsThumb,
  accordion: AccordionThumb,
  'stat-tile': StatTileThumb,
  sheet: SheetThumb,
  checkbox: CheckboxThumb,
  'radio-group': RadioThumb,
  'toggle-group': ToggleGroupThumb,
  chip: ChipThumb,
  steps: StepsThumb,
  badge: BadgeThumb,
  meter: MeterThumb,
  sparkline: SparklineThumb,
  avatar: AvatarThumb,
};
