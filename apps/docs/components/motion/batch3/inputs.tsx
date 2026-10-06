'use client';

/**
 * Batch 3 (inputs): how each component is drawn on the stage, and its tile drawing. See docs/design/motion-lab.md §12.
 *
 * Pagination and Calendar are the real components, driven through their own controlled props (`page`, `value`).
 * The rest move on hover, press or focus, which React Aria sets from real input only (data-hovered, data-pressed,
 * data-focused, data-focus-within, data-dragging). Those are stand-ins: the component's markup wearing its OWN
 * stylesheet (imported, never copied), with those attributes set by the loop. Four beats where the component has
 * them: entering = pointer arrives, open = press/grab (held), exiting = release, closed = pointer leaves.
 */
import { parseDate } from '@internationalized/date';
import { IconArrowRight, IconChevronRight, IconDots, IconPlus, IconSearch, IconX } from '@syntara/icons';
import { Calendar, Pagination } from '@syntara/react';
import { useCopy } from '../../../examples/_copy/use-copy';
import { on, type Phase, type SpecimenProps, type SpecimenRender } from '../specimen-types';
import breadcrumbsCss from '../../../../../packages/react/src/ui/breadcrumbs.module.css';
import buttonCss from '../../../../../packages/react/src/ui/button.module.css';
import linkCss from '../../../../../packages/react/src/ui/link.module.css';
import searchCss from '../../../../../packages/react/src/ui/search-field.module.css';
import sliderCss from '../../../../../packages/react/src/ui/slider.module.css';
import textAreaCss from '../../../../../packages/react/src/ui/text-area.module.css';
import fieldCss from '../../../../../packages/react/src/ui/text-field.module.css';
import lab from '../motion-lab.module.css';
import s from './inputs.module.css';

/** Present-or-absent data attribute, as React Aria writes them. */
const attr = (v: boolean): true | undefined => v || undefined;

/** Pointer story for pressables: arrives (hover), presses and holds, releases, leaves. */
const hovered = (phase: Phase) => phase !== 'closed';
const pressed = (phase: Phase) => phase === 'open';

/* ---- Controls ---- */

function ButtonStandIn({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={lab.specimen} aria-hidden inert>
      <button
        type="button"
        tabIndex={-1}
        className={buttonCss.root}
        data-variant="primary"
        data-size="md"
        data-hovered={attr(hovered(phase))}
        data-pressed={attr(pressed(phase))}
      >
        <IconPlus aria-hidden />
        {t('New request')}
      </button>
    </div>
  );
}

function LinkStandIn({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={lab.specimen} aria-hidden inert>
      <a
        className={linkCss.root}
        data-variant="standalone"
        data-hovered={attr(hovered(phase))}
        data-pressed={attr(pressed(phase))}
      >
        {t('View all claims')}
        <IconArrowRight aria-hidden />
      </a>
    </div>
  );
}

function Separator() {
  return (
    <span className={breadcrumbsCss.separator}>
      <IconChevronRight size="1em" />
    </span>
  );
}

/**
 * Collapsed trail → the dots are pressed → the trail opens and the hidden steps slide in (breadcrumbs' own
 * .revealed class, as the component adds it). The real trail stays open once expanded; the loop folds it back
 * between runs, without motion, so the reveal can play again.
 */
function BreadcrumbsStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  const open = phase === 'open';
  const crumb = (label: string, revealed = false) => (
    <li className={`${breadcrumbsCss.item} ${revealed ? breadcrumbsCss.revealed : ''}`}>
      <a className={breadcrumbsCss.link}>{label}</a>
      <Separator />
    </li>
  );
  return (
    <div className={lab.specimen} aria-hidden inert>
      <nav className={breadcrumbsCss.nav}>
        <ol className={breadcrumbsCss.list} key={open ? `open-${cycle}` : 'collapsed'}>
          {crumb(t('Home'))}
          {open ? (
            <>
              {crumb(t('Settings'), true)}
              {crumb(t('Team'), true)}
              {crumb(t('Roles'), true)}
            </>
          ) : (
            <li className={breadcrumbsCss.item}>
              <span
                className={breadcrumbsCss.ellipsis}
                data-hovered={attr(phase === 'entering')}
                data-pressed={attr(phase === 'entering')}
              >
                <IconDots size="1.15em" />
              </span>
              <Separator />
            </li>
          )}
          {crumb(t('Reviewer'))}
          <li className={breadcrumbsCss.item}>
            <span className={breadcrumbsCss.link} data-current>
              {t('Permissions')}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}

/** The real Pagination: `page` moves, and the raised key pops onto the new page. */
function PaginationSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${lab.specimen} ${lab.specimenWide}`}>
      <Pagination label={t('Claims pages')} page={on(phase) ? 5 : 2} pageCount={7} />
    </div>
  );
}

/* ---- Inputs ---- */

/** Focus arrives: the ring's offset and the halo grow on the spring; blur shrinks them back quickly. */
function TextFieldStandIn({ phase }: SpecimenProps) {
  const t = useCopy();
  const focused = on(phase);
  return (
    <div className={lab.specimen} aria-hidden inert>
      <div className={s.field}>
        <div className={fieldCss.field} data-field-size="md">
          <span className={fieldCss.label}>{t('Email')}</span>
          <input
            type="email"
            tabIndex={-1}
            className={fieldCss.input}
            defaultValue="priya.raman@example.com"
            data-hovered={attr(phase === 'entering')}
            data-focused={attr(focused)}
          />
          <span className={fieldCss.description}>{t('We’ll send receipts and claim updates here.')}</span>
        </div>
      </div>
    </div>
  );
}

function TextAreaStandIn({ phase }: SpecimenProps) {
  const t = useCopy();
  const focused = on(phase);
  return (
    <div className={lab.specimen} aria-hidden inert>
      <div className={s.fieldWide}>
        <div className={textAreaCss.field}>
          <span className={fieldCss.label}>{t('What happened?')}</span>
          <textarea
            rows={3}
            tabIndex={-1}
            className={textAreaCss.textarea}
            defaultValue={t('Slipped on the stairs at work on 2 October. Seen at City Hospital the same day.')}
            data-hovered={attr(phase === 'entering')}
            data-focused={attr(focused)}
          />
          <div className={textAreaCss.footer}>
            <span className={fieldCss.description}>{t('Include dates, places and anyone involved.')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Focus arrives (the field group's halo), and the clear button pops in from 0.6 once there is text. The real
 * SearchField's `value` prop alone would show the clear button but not the focus, so this is a stand-in.
 */
function SearchFieldStandIn({ phase }: SpecimenProps) {
  const t = useCopy();
  const focused = on(phase);
  const typed = phase === 'open';
  return (
    <div className={lab.specimen} aria-hidden inert>
      <div className={s.field}>
        <div className={searchCss.field} data-field-size="md" data-empty={attr(!typed)}>
          <div className={`${fieldCss.group} ${searchCss.group}`} data-focus-within={attr(focused)}>
            <IconSearch className={searchCss.icon} aria-hidden />
            <input
              type="search"
              tabIndex={-1}
              readOnly
              className={`${fieldCss.input} ${searchCss.input}`}
              placeholder={t('Search transactions')}
              value={typed ? t('Physiotherapy') : ''}
            />
            <span className={searchCss.clear}>
              <IconX aria-hidden />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * The thumb under the pointer: it grows on hover (1.1) and more while held (1.2), with its halo, on the spring.
 * The value stays put: a drag moves the thumb with the pointer, not with a transition, so moving it here would be
 * a jump, not the component's motion.
 */
function SliderStandIn({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={lab.specimen} aria-hidden inert>
      <div className={s.field}>
        <div className={sliderCss.slider}>
          <div className={sliderCss.header}>
            <span className={fieldCss.label}>{t('Monthly budget')}</span>
            <span className={sliderCss.output}>60</span>
          </div>
          <div className={`${sliderCss.track} ${s.track}`}>
            <div className={sliderCss.rail}>
              <div className={`${sliderCss.fill} ${s.fill}`} />
            </div>
            <div
              className={`${sliderCss.thumb} ${s.thumb}`}
              data-hovered={attr(hovered(phase))}
              data-dragging={attr(pressed(phase))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Fixed dates, so the page is the same on any day. */
const DAY_A = parseDate('2026-10-05');
const DAY_B = parseDate('2026-10-14');

/** The real Calendar: `value` moves, and the newly selected day pops in on the spring. */
function CalendarSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={lab.specimen}>
      <Calendar aria-label={t('Appointment date')} value={on(phase) ? DAY_B : DAY_A} />
    </div>
  );
}

export const RENDER: Record<string, SpecimenRender> = {
  button: ButtonStandIn,
  link: LinkStandIn,
  breadcrumbs: BreadcrumbsStandIn,
  pagination: PaginationSpecimen,
  'text-field': TextFieldStandIn,
  'text-area': TextAreaStandIn,
  'search-field': SearchFieldStandIn,
  slider: SliderStandIn,
  calendar: CalendarSpecimen,
};
