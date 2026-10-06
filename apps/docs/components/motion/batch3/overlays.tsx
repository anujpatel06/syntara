'use client';

/**
 * Batch 3 (overlays): how each component is drawn on the stage, and its tile drawing. See docs/design/motion-lab.md §12.
 *
 * All seven are stand-ins, like Dialog and Sheet in specimens.tsx (ADR-055). Opening a real Popover, Select, Menu,
 * Combobox, Date picker or Command moves focus and hides or traps the page, and a real toast announces itself through a
 * live region, so looping them would steal focus or talk over a screen reader every loop. Each stand-in is the
 * component's open markup wearing the component's OWN stylesheet (imported, never copied), with the attributes that
 * stylesheet animates on (data-entering, data-exiting, data-placement, data-open, data-focus-within) set from the loop
 * phase. So every movement here is the component's own CSS. Nothing in a stand-in has a role or a live region.
 */
import {
  IconArchive,
  IconArrowsExchange,
  IconCalendar,
  IconCheck,
  IconChevronDown,
  IconCopy,
  IconCreditCard,
  IconDotsVertical,
  IconFileText,
  IconPencil,
  IconSealCheckFilled,
  IconSearch,
  IconSettings,
  IconTrash,
  IconUser,
} from '@syntara/icons';
import { Button, Calendar, Kbd, TextField, useLocale } from '@syntara/react';
import { parseDate } from '@internationalized/date';
import { DatePickerStateContext, type DatePickerState } from 'react-aria-components';
import type { CSSProperties, ReactNode } from 'react';
import { on, type Phase, type SpecimenRender, type SpecimenProps } from '../specimen-types';
import { useCopy } from '../../../examples/_copy/use-copy';
/* The components' own stylesheets: the same class names the components use, so a stand-in can't drift from them. */
import popoverCss from '../../../../../packages/react/src/ui/popover.module.css';
import selectCss from '../../../../../packages/react/src/ui/select.module.css';
import menuCss from '../../../../../packages/react/src/ui/menu.module.css';
import comboCss from '../../../../../packages/react/src/ui/combobox.module.css';
import dateCss from '../../../../../packages/react/src/ui/date-picker.module.css';
import commandCss from '../../../../../packages/react/src/ui/command.module.css';
import toastCss from '../../../../../packages/react/src/ui/toast.module.css';
import fieldCss from '../../../../../packages/react/src/ui/text-field.module.css';
import lab from '../motion-lab.module.css';
import styles from './overlays.module.css';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/** The attributes React Aria puts on an overlay while it animates in and out. */
const motion = (phase: Phase) => ({
  'data-entering': phase === 'entering' || undefined,
  'data-exiting': phase === 'exiting' || undefined,
});

/**
 * A trigger with its panel below it, as React Aria places a `bottom start` popover. The panel mounts afresh each
 * loop (key = cycle) so its entrance and its rows' stagger replay, and unmounts at rest, as the real one does.
 */
function Scene({ children, tight }: { children: ReactNode; tight?: boolean }) {
  return (
    <div className={cx(styles.scene, tight && styles.sceneTight)} aria-hidden inert>
      {children}
    </div>
  );
}

/* ---- Popover ---- */

function PopoverStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <Scene>
      <div className={cx(styles.anchor, styles.anchorStart, styles.originButton)}>
        <Button variant="outline">{t('Set spending limit')}</Button>
        {phase !== 'closed' && (
          <div key={cycle} className={cx(popoverCss.popover, styles.below, styles.belowWide)} data-placement="bottom" {...motion(phase)}>
            <div className={styles.popoverBody}>
              <div className={styles.popoverHead}>
                <strong className={styles.popoverTitle}>{t('Monthly limit')}</strong>
                <span className={styles.popoverHint}>{t('Card payments above this amount are declined.')}</span>
              </div>
              <TextField label={t('Amount')} defaultValue="25,000" prefix="₹" inputMode="numeric" />
              <Button size="sm">{t('Save limit')}</Button>
            </div>
          </div>
        )}
      </div>
    </Scene>
  );
}

/* ---- Select ---- */

const PLANS = ['Starter', 'Team', 'Business', 'Enterprise'];

function SelectStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <Scene>
      <div className={cx(selectCss.field, styles.anchor, styles.anchorField)} data-field-size="md" data-open={on(phase) || undefined}>
        <span className={fieldCss.label}>{t('Plan')}</span>
        <span className={selectCss.trigger}>
          <span className={selectCss.value}>
            <span className={selectCss.valueText}>{t('Team')}</span>
          </span>
          <span className={selectCss.chevronBox}>
            <IconChevronDown className={selectCss.chevron} />
          </span>
        </span>
        {phase !== 'closed' && (
          <div key={cycle} className={cx(selectCss.popover, styles.below)} data-placement="bottom" {...motion(phase)}>
            <div className={selectCss.listbox}>
              {PLANS.map((plan) => {
                const selected = plan === 'Team';
                return (
                  // Opening a Select moves focus to the chosen option, so that row is highlighted.
                  <div key={plan} className={selectCss.item} data-selected={selected || undefined} data-focused={selected || undefined}>
                    <span className={selectCss.itemText}>
                      <span className={selectCss.itemLabel}>{t(plan)}</span>
                    </span>
                    <IconCheck className={selectCss.check} data-visible={selected || undefined} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Scene>
  );
}

/* ---- Menu ---- */

function MenuStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  const items: Array<{ label: string; icon: ReactNode; danger?: boolean }> = [
    { label: 'Edit details', icon: <IconPencil /> },
    { label: 'Duplicate', icon: <IconCopy /> },
    { label: 'Archive', icon: <IconArchive /> },
  ];
  const row = ({ label, icon, danger }: (typeof items)[number]) => (
    <div key={label} className={menuCss.item} data-tone={danger ? 'danger' : undefined}>
      <span className={menuCss.icon}>{icon}</span>
      <span className={menuCss.text}>
        <span className={menuCss.label}>{t(label)}</span>
      </span>
    </div>
  );
  return (
    <Scene>
      <div className={cx(styles.anchor, styles.anchorStart, styles.originIcon)}>
        <Button variant="outline" size="icon" aria-label={t('Claim actions')}>
          <IconDotsVertical aria-hidden />
        </Button>
        {phase !== 'closed' && (
          <div key={cycle} className={cx(popoverCss.popover, menuCss.popover, styles.below)} data-placement="bottom" {...motion(phase)}>
            <div className={menuCss.menu}>
              {items.map(row)}
              <div className={menuCss.separator} />
              {row({ label: 'Delete claim', icon: <IconTrash />, danger: true })}
            </div>
          </div>
        )}
      </div>
    </Scene>
  );
}

/* ---- Combobox ---- */

const COUNTRIES = ['Argentina', 'Australia', 'Brazil', 'Canada', 'Egypt', 'France'];

function ComboboxStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <Scene>
      <div className={cx(comboCss.field, styles.anchor, styles.anchorField)} data-field-size="md" data-open={on(phase) || undefined}>
        <span className={fieldCss.label}>{t('Country')}</span>
        {/* While the list is open the caret is in the input, so the box wears its focus state. */}
        <div className={cx(fieldCss.group, comboCss.control)} data-focus-within={on(phase) || undefined}>
          <input className={fieldCss.input} placeholder={t('Search countries…')} readOnly tabIndex={-1} />
          <span className={comboCss.button}>
            <IconChevronDown className={comboCss.chevron} />
          </span>
        </div>
        {phase !== 'closed' && (
          <div key={cycle} className={cx(comboCss.popover, styles.below)} data-placement="bottom" {...motion(phase)}>
            <div className={comboCss.listbox}>
              {COUNTRIES.map((country) => (
                <div key={country} className={comboCss.item}>
                  <span className={comboCss.itemText}>
                    <span className={comboCss.itemLabel}>{t(country)}</span>
                  </span>
                  <IconCheck className={comboCss.check} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Scene>
  );
}

/* ---- Date picker ---- */

/** Fixed, so the page renders the same on any day (CLAUDE.md, docs examples). */
const DAY = parseDate('2026-10-05');
/*
 * Calendar reads only whether it sits in a picker (DatePickerStateContext is non-null) to switch to its glass styles,
 * which hide the neighbouring months' days. Nothing in Calendar reads the state itself (only DatePicker's own parts do),
 * so an empty placeholder gives the real in-picker look without a real picker.
 */
const IN_PICKER = {} as DatePickerState;

function DateSegments() {
  const { locale } = useLocale();
  const parts = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).formatToParts(
    Date.UTC(2026, 9, 5),
  );
  return (
    <span className={dateCss.input}>
      {parts.map((part, i) => (
        <span key={i} className={dateCss.segment} data-type={part.type}>
          {part.value}
        </span>
      ))}
    </span>
  );
}

function DatePickerStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <Scene tight>
      <div className={cx(dateCss.field, styles.anchor, styles.anchorField)} data-open={on(phase) || undefined}>
        <span className={fieldCss.label}>{t('Date of incident')}</span>
        <div className={cx(fieldCss.group, dateCss.control)}>
          <DateSegments />
          <span className={dateCss.button}>
            <IconCalendar className={dateCss.buttonIcon} />
          </span>
        </div>
        {phase !== 'closed' && (
          <div key={cycle} className={cx(dateCss.popover, styles.below, styles.belowCalendar)} data-placement="bottom" {...motion(phase)}>
            <div className={dateCss.dialog}>
              <DatePickerStateContext.Provider value={IN_PICKER}>
                <Calendar aria-label={t('Date of incident')} defaultValue={DAY} />
              </DatePickerStateContext.Provider>
            </div>
          </div>
        )}
      </div>
    </Scene>
  );
}

/* ---- Command: a stand-in like Dialog (it is modal) ---- */

function CommandStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  const item = (icon: ReactNode, label: string, meta?: string, description?: string) => (
    <div key={label} className={commandCss.item}>
      <span className={commandCss.icon}>{icon}</span>
      <span className={commandCss.text}>
        <span className={commandCss.label}>{t(label)}</span>
        {description && <span className={commandCss.description}>{t(description)}</span>}
      </span>
      {meta && <span className={commandCss.meta}>{meta.startsWith('⌘') ? meta : t(meta)}</span>}
    </div>
  );
  return (
    <>
      <div className={lab.page} aria-hidden inert>
        <Button variant="outline">
          <IconSearch aria-hidden />
          {t('Search…')}
          <Kbd>⌘K</Kbd>
        </Button>
      </div>
      {phase !== 'closed' && (
        <div key={cycle} aria-hidden inert className={cx(commandCss.overlay, lab.standin)} {...motion(phase)}>
          <div className={commandCss.panel} {...motion(phase)}>
            <div className={commandCss.dialog}>
              <div className={commandCss.search}>
                <IconSearch className={commandCss.searchIcon} size="1.125em" />
                <input className={commandCss.input} placeholder={t('Search pages and actions…')} readOnly tabIndex={-1} />
              </div>
              <div className={commandCss.list}>
                <div className={commandCss.section}>
                  <div className={commandCss.sectionTitle}>{t('Pages')}</div>
                  {item(<IconFileText />, 'Statements', 'Accounts')}
                  {item(<IconCreditCard />, 'Cards', 'Accounts')}
                  {item(<IconUser />, 'Profile', 'Settings')}
                </div>
                <div className={commandCss.section}>
                  <div className={commandCss.sectionTitle}>{t('Actions')}</div>
                  {item(<IconArrowsExchange />, 'Transfer money', undefined, 'Between your own accounts')}
                  {item(<IconSettings />, 'Open preferences', '⌘,')}
                </div>
              </div>
              <div className={commandCss.footer}>
                <span className={commandCss.hint}>
                  <kbd className={commandCss.kbd}>↑</kbd>
                  <kbd className={commandCss.kbd}>↓</kbd>
                  {t('to navigate')}
                </span>
                <span className={commandCss.hint}>
                  <kbd className={commandCss.kbd}>↵</kbd>
                  {t('to select')}
                </span>
                <span className={commandCss.hint}>
                  <kbd className={commandCss.kbd}>esc</kbd>
                  {t('to close')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---- Toast: the toast's own enter and exit, without the queue or its live region ---- */

/** What ToastRegion sets on the front toast of a one-toast stack. */
const FRONT = { '--_index': 0, zIndex: 1 } as CSSProperties;

function ToastStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <>
      <div className={lab.page} aria-hidden inert>
        <Button>{t('Submit claim')}</Button>
      </div>
      {/* The toast animates in as it mounts (as a real one does when it joins the stack), so it mounts each loop. */}
      {phase !== 'closed' && (
        <div key={cycle} aria-hidden inert className={cx(toastCss.region, lab.standin)} data-placement="bottom-end">
          <div className={toastCss.toast} data-tone="success" data-front="" data-exiting={phase === 'exiting' || undefined} style={FRONT}>
            <div className={toastCss.inner}>
              <div className={toastCss.lead}>
                <span className={toastCss.icon}>
                  <IconSealCheckFilled />
                </span>
                <div className={toastCss.content}>
                  <span className={toastCss.title}>{t('Claim submitted')}</span>
                  <span className={toastCss.description}>{t('Reference CLM-20931')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const RENDER: Record<string, SpecimenRender> = {
  popover: PopoverStandIn,
  select: SelectStandIn,
  menu: MenuStandIn,
  combobox: ComboboxStandIn,
  'date-picker': DatePickerStandIn,
  command: CommandStandIn,
  toast: ToastStandIn,
};
