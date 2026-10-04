/**
 * GOVERNANCE.md §9 drawn for the site: raise → sort → decide → record, the three kinds a conflict sorts into, and
 * the priority order that settles a rule clash. Static content, so it renders on the server; the words follow §9
 * (and ADR-043) and must change with it.
 */
import styles from './conflict-flow.module.css';

const STEPS = [
  { n: 1, title: 'Raise', body: 'Fill in the form on Raise a conflict. It opens a Conflict issue on GitHub.' },
  { n: 2, title: 'Sort', body: 'Every conflict is one of three kinds, and each kind has its own rule.' },
  { n: 3, title: 'Decide', body: 'The design lead decides within the review times and writes the reason on the issue.' },
  { n: 4, title: 'Record', body: 'Every decided conflict ends in a decision record that names who decided.' },
];

const KINDS = [
  {
    title: 'Two rules clash',
    rule: 'The priority order settles it. The higher one wins, without a debate.',
    outcome: 'A one-line reply naming which rule won.',
  },
  {
    title: 'You disagree with a past decision',
    rule: 'Reopened only with significant new information: a measurement, a bug, or a need nobody knew about.',
    outcome: 'Without it, the decision stands and the reply links its record. With it, a new RFC.',
  },
  {
    title: 'Two products want opposite things',
    rule: 'First, can a prop, a variant or a brand input serve both? A brand is data, not a fork.',
    outcome: 'If not, a local override in that product, back to the system once three products need it.',
  },
];

const PRIORITY = ['Accessibility', 'Not breaking consumers', 'Brand wishes', 'Speed'];

export function ConflictFlow() {
  return (
    <div className={styles.root}>
      <ol className={styles.steps} aria-label="The conflict flow">
        {STEPS.map((s) => (
          <li key={s.n} className={styles.step} data-step={s.title.toLowerCase()}>
            <span className={styles.stepNumber} aria-hidden="true">
              {s.n}
            </span>
            <span className={styles.stepTitle}>{s.title}</span>
            <span className={styles.stepBody}>{s.body}</span>
          </li>
        ))}
      </ol>

      <section className={styles.kinds} aria-labelledby="conflict-kinds">
        <h3 id="conflict-kinds" className={styles.kindsTitle}>
          Step 2, sort: three kinds
        </h3>
        <ul className={styles.kindList}>
          {KINDS.map((k) => (
            <li key={k.title} className={styles.kind}>
              <span className={styles.kindTitle}>{k.title}</span>
              <span className={styles.kindRule}>{k.rule}</span>
              <span className={styles.kindOutcome}>{k.outcome}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.priority} aria-labelledby="conflict-priority">
        <h3 id="conflict-priority" className={styles.kindsTitle}>
          The priority order
        </h3>
        <p className={styles.priorityLead}>When two rules clash, the one earlier in this list wins.</p>
        <ol className={styles.ranks}>
          {PRIORITY.map((p, i) => (
            <li key={p} className={styles.rank}>
              <span className={styles.rankNumber} aria-hidden="true">
                {i + 1}
              </span>
              {p}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
