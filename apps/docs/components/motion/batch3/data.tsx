'use client';

/**
 * Batch 3 (data): how each component is drawn on the stage, and its tile drawing. See docs/design/motion-lab.md §12.
 *
 * Every motion here is the component's own CSS. Things that animate as they mount (charts drawing in, tags and person
 * chips popping, card parts fading up) are mounted again each loop with key={cycle} and gone while 'closed'.
 * Progress and Data table are switched through their own props. Spinner and Skeleton loop by themselves, so they are
 * drawn in every phase. Chart's motion (the hover crosshair and readout) only answers a pointer, so the loop moves a
 * pointer over a real AreaChart. Alert's only motion is its close button's hover and press, which React Aria sets
 * from real input, so it loops as a stand-in wearing alert.module.css.
 */
import { IconInfoCircleFilled, IconX } from '@syntara/icons';
import {
  AreaChart,
  Badge,
  BarChart,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DataTable,
  PersonChip,
  PersonChipGroup,
  ProgressBar,
  Skeleton,
  SkeletonText,
  Spinner,
  Tag,
  useSortedRows,
  type DataTableColumn,
} from '@syntara/react';
import { useEffect, useRef } from 'react';
import { on, type SpecimenProps, type SpecimenRender, type ThumbRender } from '../specimen-types';
import { useCopy } from '../../../examples/_copy/use-copy';
/* Same files as the components import, so the same class names: a stand-in can't drift from its component. */
import alertCss from '../../../../../packages/react/src/ui/alert.module.css';
import chartCss from '../../../../../packages/react/src/ui/chart.module.css';
import lab from '../motion-lab.module.css';
import styles from './data.module.css';

/* ---- Charts: mounted again each loop, so they draw in (data from area-chart-demo and bar-chart-demo) ---- */

const REVENUE = [
  { month: 'Jan', revenue: 18400 }, { month: 'Feb', revenue: 21200 }, { month: 'Mar', revenue: 19800 },
  { month: 'Apr', revenue: 24600 }, { month: 'May', revenue: 23100 }, { month: 'Jun', revenue: 27900 },
  { month: 'Jul', revenue: 26400 }, { month: 'Aug', revenue: 31200 }, { month: 'Sep', revenue: 29800 },
  { month: 'Oct', revenue: 34500 }, { month: 'Nov', revenue: 33100 }, { month: 'Dec', revenue: 38700 },
];
const SPEND = [
  { month: 'May', spend: 2140 }, { month: 'Jun', spend: 2680 }, { month: 'Jul', spend: 1920 },
  { month: 'Aug', spend: 2410 }, { month: 'Sep', spend: 3050 }, { month: 'Oct', spend: 2290 },
];
const USD = { value: { style: 'currency', currency: 'USD', maximumFractionDigits: 0 } } as const;

function RevenueChart() {
  const t = useCopy();
  return (
    <Card className={styles.chartCard}>
      <CardHeader>
        <CardDescription>{t('Revenue this year')}</CardDescription>
        <CardTitle>$328,700</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart
          aria-label={t('Revenue by month')}
          data={REVENUE}
          x="month"
          xLabel={t('Month')}
          series={[{ key: 'revenue', label: t('Revenue') }]}
          format={USD}
        />
      </CardContent>
    </Card>
  );
}

function AreaChartSpecimen({ phase, cycle }: SpecimenProps) {
  return <div className={`${lab.specimen} ${lab.specimenWide}`}>{phase !== 'closed' && <RevenueChart key={cycle} />}</div>;
}

function BarChartSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${lab.specimen} ${lab.specimenWide}`}>
      {phase !== 'closed' && (
        <Card key={cycle} className={styles.chartCard}>
          <CardHeader>
            <CardDescription>{t('Card spending')}</CardDescription>
            <CardTitle>{t('$2,290 in October')}</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              aria-label={t('Card spending by month')}
              data={SPEND}
              x="month"
              xLabel={t('Month')}
              highlight="Oct"
              series={[{ key: 'spend', label: t('Spending') }]}
              format={USD}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

/* ---- Chart: the shared frame's hover layer, driven by a pointer moving over a real AreaChart ---- */

/**
 * ChartFrame keeps its hover position in its own state and reads it from pointer events, so the loop sends it the
 * same events a mouse would: onto March as it enters, across to October while it holds, then off the plot. The
 * crosshair's fade, the readout's glide and the point's pop are all chart.module.css and area-chart.module.css.
 */
function pointAt(plot: Element, fraction: number) {
  const r = plot.getBoundingClientRect();
  const x = r.left + r.width * fraction;
  plot.dispatchEvent(new PointerEvent('pointermove', { bubbles: true, clientX: x, clientY: r.top + r.height / 2, pointerType: 'mouse' }));
}

function ChartSpecimen({ phase }: SpecimenProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const plot = ref.current?.querySelector(`.${chartCss.plot}`);
    if (!plot) return;
    /* Point charts run edge to edge: month i of 12 sits at i / 11 of the plot's width. */
    if (phase === 'entering') pointAt(plot, 2 / 11);
    else if (phase === 'open') pointAt(plot, 9 / 11);
    else plot.dispatchEvent(new PointerEvent('pointerout', { bubbles: true, relatedTarget: null, pointerType: 'mouse' }));
  }, [phase]);
  return (
    <div ref={ref} className={`${lab.specimen} ${lab.specimenWide}`}>
      <RevenueChart />
    </div>
  );
}

/* ---- Data table: real selection and sort props (rows from data-table-selection) ---- */

type Claim = { id: string; member: string; status: 'In review' | 'Approved' | 'Needs info'; amount: number };
const CLAIMS: Claim[] = [
  { id: 'CLM-20480', member: 'Asha Menon', status: 'In review', amount: 25 },
  { id: 'CLM-20481', member: 'Mei Lin', status: 'Needs info', amount: 382.55 },
  { id: 'CLM-20482', member: 'Kiran Rao', status: 'Approved', amount: 740.84 },
  { id: 'CLM-20483', member: 'Daniel Okafor', status: 'In review', amount: 199.13 },
];
const TONES = { 'In review': 'info', Approved: 'success', 'Needs info': 'warning' } as const;
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const ACCESSORS = { amount: (r: Claim) => r.amount };

function DataTableSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  const isOn = on(phase);
  const sort = { column: 'amount', direction: isOn ? 'descending' : 'ascending' } as const;
  const rows = useSortedRows(CLAIMS, sort, ACCESSORS);
  const columns: DataTableColumn<Claim>[] = [
    { id: 'id', header: t('Claim'), isRowHeader: true, cell: (r) => r.id },
    { id: 'member', header: t('Member'), cell: (r) => r.member },
    { id: 'status', header: t('Status'), cell: (r) => <Badge variant="status" tone={TONES[r.status]}>{t(r.status)}</Badge> },
    { id: 'amount', header: t('Amount'), align: 'end', allowsSorting: true, cell: (r) => money.format(r.amount) },
  ];
  return (
    <div className={`${lab.specimen} ${styles.tableWide}`}>
      <DataTable
        aria-label={t('Claims')}
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        selectionMode="multiple"
        selectedKeys={isOn ? ['CLM-20481', 'CLM-20483'] : []}
        sortDescriptor={sort}
      />
    </div>
  );
}

/* ---- Progress: the real bar, its value switched ---- */

function ProgressSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${lab.specimen} ${lab.specimenWide}`}>
      <ProgressBar label={t('Uploading receipts')} value={on(phase) ? 64 : 12} showValue />
    </div>
  );
}

/* ---- Skeleton and Spinner: they loop by themselves ---- */

function SkeletonSpecimen() {
  return (
    <div className={`${lab.specimen} ${lab.specimenWide}`}>
      <Card aria-busy="true">
        <CardHeader>
          <Skeleton blockSize={18} inlineSize="50%" />
          <Skeleton blockSize={12} inlineSize="75%" />
        </CardHeader>
        <CardContent className={styles.skeletonBody}>
          <Skeleton blockSize={120} radius="container" />
          <SkeletonText lines={3} />
        </CardContent>
      </Card>
    </div>
  );
}

function SpinnerSpecimen() {
  return (
    <div className={lab.specimen}>
      <div className={`${lab.specimenRow} ${styles.brandInk}`}>
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
      </div>
    </div>
  );
}

/* ---- Tag and Person chip: mounted again each loop, so they pop in ---- */

function TagSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={lab.specimen}>
      {phase !== 'closed' && (
        <div key={cycle} className={lab.specimenRow}>
          <Tag tone="success" uppercase>
            {t('Cashless')}
          </Tag>
          <Tag uppercase>{t('Own pocket')}</Tag>
          <Tag>{t('Prescription required')}</Tag>
          <Tag>{t('Home collection')}</Tag>
        </div>
      )}
    </div>
  );
}

function PersonChipSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={lab.specimen}>
      {phase !== 'closed' && (
        <PersonChipGroup key={cycle} aria-label={t('Covered members')}>
          <PersonChip name="Arjun Shah" />
          <PersonChip name="Priya Shah" />
          <PersonChip name="Aarav Shah" />
          <PersonChip name={t('Father')} placeholder />
        </PersonChipGroup>
      )}
    </div>
  );
}

/* ---- Alert: a stand-in, because its only motion is the close button under a real pointer ---- */

/**
 * Alert has no motion of its own; its close button fades a tint in on hover and gives (scale 0.9 on the spring) while
 * pressed. React Aria sets data-hovered and data-pressed from real input only, so this copies Alert's markup with
 * alert.module.css and sets them by phase: hovered and pressed as it enters, released as it exits (the spring's
 * overshoot), the pointer gone while it rests. A span, not a button: the stage is decoration.
 */
function AlertStandIn({ phase }: SpecimenProps) {
  const t = useCopy();
  const hovered = phase !== 'closed';
  const pressed = on(phase);
  return (
    <div className={`${lab.specimen} ${lab.specimenWide}`}>
      <div className={alertCss.alert} data-tone="info" data-dismissible="" aria-hidden inert>
        <div className={alertCss.layout}>
          <div className={alertCss.main}>
            <div className={alertCss.lead}>
              <span className={alertCss.icon}>
                <IconInfoCircleFilled />
              </span>
              <div className={alertCss.content}>
                <div className={alertCss.title}>{t('Scheduled maintenance')}</div>
                <div className={alertCss.body}>
                  {t("Claims can't be submitted on Sunday between 02:00 and 04:00 UTC. Anything in progress is saved.")}
                </div>
              </div>
            </div>
          </div>
          <span className={alertCss.dismiss} data-hovered={hovered || undefined} data-pressed={pressed || undefined}>
            <IconX stroke={2} />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---- Card: mounted again each loop, so its parts fade up (card-demo) ---- */

function CardSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${lab.specimen} ${lab.specimenWide}`}>
      {phase !== 'closed' && (
        <Card key={cycle}>
          <CardHeader>
            <CardTitle>{t('Family Floater Plan')}</CardTitle>
            <CardDescription>{t('Renews on 1 April 2027')}</CardDescription>
            <CardAction>
              <Badge tone="success">{t('Active')}</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className={styles.cardRows}>
            <div className={styles.cardRow}>
              <span className={styles.muted}>{t('Sum insured')}</span>
              <span>₹10,00,000</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.muted}>{t('Members')}</span>
              <span>4</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.muted}>{t('Claims this year')}</span>
              <span>2</span>
            </div>
          </CardContent>
          <CardFooter divider>
            <Button variant="outline" size="sm">
              {t('Download policy')}
            </Button>
            <Button size="sm">{t('Manage plan')}</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

export const RENDER: Record<string, SpecimenRender> = {
  'area-chart': AreaChartSpecimen,
  'bar-chart': BarChartSpecimen,
  chart: ChartSpecimen,
  'data-table': DataTableSpecimen,
  progress: ProgressSpecimen,
  skeleton: SkeletonSpecimen,
  spinner: SpinnerSpecimen,
  tag: TagSpecimen,
  'person-chip': PersonChipSpecimen,
  alert: AlertStandIn,
  card: CardSpecimen,
};

/* ---- Tile drawings: spans and inline SVG only (they sit inside a <button>), brand tokens only ---- */

function AreaChartThumb() {
  return (
    <span className={lab.ct}>
      <svg viewBox="0 0 60 30" className={styles.tArea} preserveAspectRatio="none">
        <path className={styles.tAreaFill} d="M1 25 L8 21 L14 22 L20 16 L26 17 L32 12 L38 9 L44 11 L50 6 L59 3 L59 30 L1 30 Z" />
        <path className={styles.tAreaLine} d="M1 25 L8 21 L14 22 L20 16 L26 17 L32 12 L38 9 L44 11 L50 6 L59 3" />
      </svg>
    </span>
  );
}

const BAR_HEIGHTS = [55, 75, 40, 65, 95, 70];

function BarChartThumb() {
  return (
    <span className={lab.ct}>
      <span className={styles.tBars}>
        {BAR_HEIGHTS.map((h, i) => (
          <span key={i} className={`${styles.tBar} ${i === 5 ? styles.tBarOn : ''}`} style={{ blockSize: `${h}%` }} />
        ))}
      </span>
    </span>
  );
}

function ChartThumb() {
  return (
    <span className={lab.ct}>
      <span className={styles.tChart}>
        <svg viewBox="0 0 60 30" className={styles.tChartSvg} preserveAspectRatio="none">
          <path className={styles.tChartLine} d="M1 24 L10 20 L19 21 L28 14 L37 15 L46 9 L59 5" />
          <path className={styles.tCross} d="M37 2 L37 30" />
        </svg>
        <span className={styles.tReadout} />
      </span>
    </span>
  );
}

function DataTableThumb() {
  return (
    <span className={`${lab.ct} ${lab.ctStack}`}>
      <span className={`${styles.tRow} ${styles.tRowHead}`}>
        <span className={lab.ctLineShort} />
      </span>
      {[false, true, false].map((sel, i) => (
        <span key={i} className={`${styles.tRow} ${sel ? styles.tRowOn : ''}`}>
          <span className={lab.ctLineShort} />
        </span>
      ))}
    </span>
  );
}

function ProgressThumb() {
  return (
    <span className={`${lab.ct} ${lab.ctStack}`}>
      <span className={styles.tLabelRow}>
        <span className={lab.ctLineShort} />
        <span className={styles.tValue} />
      </span>
      <span className={lab.ctMeter}>
        <span className={`${lab.ctMeterFill} ${styles.tProgressFill}`} />
      </span>
    </span>
  );
}

function SkeletonThumb() {
  return (
    <span className={`${lab.ct} ${lab.ctStack}`}>
      <span className={styles.tSkelHead}>
        <span className={styles.tSkelCircle} />
        <span className={`${styles.tSkel} ${styles.tSkelShort}`} />
      </span>
      <span className={`${styles.tSkel} ${styles.tSkelBlock}`} />
      <span className={styles.tSkel} />
      <span className={`${styles.tSkel} ${styles.tSkelShort}`} />
    </span>
  );
}

function SpinnerThumb() {
  return (
    <span className={lab.ct}>
      <svg viewBox="0 0 24 24" className={styles.tSpinner}>
        {Array.from({ length: 8 }, (_, i) => (
          <line key={i} x1="12" y1="3" x2="12" y2="7" transform={`rotate(${i * 45} 12 12)`} opacity={1 - i * 0.11} />
        ))}
      </svg>
    </span>
  );
}

function TagThumb() {
  return (
    <span className={`${lab.ct} ${lab.ctWrapRow}`}>
      <span className={`${styles.tTag} ${styles.tTagOn}`} />
      <span className={styles.tTag} />
      <span className={`${styles.tTag} ${styles.tTagWide}`} />
    </span>
  );
}

function PersonChipThumb() {
  return (
    <span className={`${lab.ct} ${lab.ctWrapRow}`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className={styles.tPerson}>
          <span className={`${styles.tFace} ${i === 0 ? styles.tFaceOn : ''}`} />
          <span className={styles.tName} />
        </span>
      ))}
    </span>
  );
}

function AlertThumb() {
  return (
    <span className={lab.ct}>
      <span className={styles.tAlert}>
        <span className={styles.tAlertIcon} />
        <span className={styles.tAlertText}>
          <span className={lab.ctLine} />
          <span className={lab.ctLineShort} />
        </span>
        <span className={styles.tAlertClose} />
      </span>
    </span>
  );
}

function CardThumb() {
  return (
    <span className={lab.ct}>
      <span className={styles.tCard}>
        <span className={lab.ctLine} />
        <span className={lab.ctLineShort} />
        <span className={styles.tCardRule} />
        <span className={lab.ctActions}>
          <span className={lab.ctGhost} />
          <span className={lab.ctPrimary} />
        </span>
      </span>
    </span>
  );
}

export const THUMBS: Record<string, ThumbRender> = {
  'area-chart': AreaChartThumb,
  'bar-chart': BarChartThumb,
  chart: ChartThumb,
  'data-table': DataTableThumb,
  progress: ProgressThumb,
  skeleton: SkeletonThumb,
  spinner: SpinnerThumb,
  tag: TagThumb,
  'person-chip': PersonChipThumb,
  alert: AlertThumb,
  card: CardThumb,
};
