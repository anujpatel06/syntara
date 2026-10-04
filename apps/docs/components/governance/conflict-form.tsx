'use client';

/**
 * The conflict form, on the site. The site is a static export with no server, so it cannot file an issue
 * itself: it collects the answers here and opens GitHub's Conflict issue form (.github/ISSUE_TEMPLATE/conflict.yml)
 * with every field already filled in, using GitHub's issue-form query parameters (one per field `id`). The person
 * then presses Submit on GitHub. Nothing is stored here and no token is involved.
 *
 * KINDS must match the template's dropdown options word for word, or GitHub leaves the dropdown empty.
 */
import { useState, type FormEvent } from 'react';
import { Button, Radio, RadioGroup, TextArea, TextField } from '@syntara/react';
import { IconArrowUpRight } from '@syntara/icons';
import { GITHUB_URL } from '@/lib/site';
import styles from './conflict-form.module.css';

const KINDS = [
  {
    value: 'Two rules clash (settled by the priority order)',
    title: 'Two rules clash',
    description: 'Two of Syntara’s own rules point different ways. The priority order settles it.',
  },
  {
    value: 'I disagree with a past decision (needs new information)',
    title: 'I disagree with a past decision',
    description: 'Reopened only with new information: a measurement, a bug, or a need nobody knew about.',
  },
  {
    value: 'Two products or brands want opposite things',
    title: 'Two products or brands want opposite things',
    description: 'First we look for a prop, variant or brand input that serves both.',
  },
  { value: 'Not sure', title: 'Not sure', description: 'Raise it anyway; it gets sorted when it’s read.' },
] as const;

/** The GitHub URL that opens the Conflict form with these answers. Exported so the mapping can be checked. */
export function conflictIssueUrl(answers: { title: string; kind: string; clash: string; where: string; evidence: string }) {
  const params = new URLSearchParams({ template: 'conflict.yml', title: `Conflict: ${answers.title.trim()}` });
  for (const id of ['kind', 'clash', 'where', 'evidence'] as const) {
    const value = answers[id].trim();
    if (value) params.set(id, value);
  }
  return `${GITHUB_URL}/issues/new?${params.toString()}`;
}

export function ConflictForm() {
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState('');
  const [clash, setClash] = useState('');
  const [where, setWhere] = useState('');
  const [evidence, setEvidence] = useState('');
  const pastDecision = kind === KINDS[1].value;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(conflictIssueUrl({ title, kind, clash, where, evidence }), '_blank', 'noopener,noreferrer');
  };

  return (
    <form className={styles.form} onSubmit={submit} aria-labelledby="conflict-form-title">
      <h3 id="conflict-form-title" className={styles.title}>
        Tell us what clashes
      </h3>
      <p className={styles.lead}>
        Answer here, then GitHub opens with everything filled in. Press Submit there to raise it. You need a GitHub
        account; nothing you type is stored on this site.
      </p>

      <RadioGroup label="What kind of conflict is it?" variant="card" isRequired value={kind} onChange={setKind}>
        {KINDS.map((k) => (
          <Radio key={k.value} value={k.value} description={k.description}>
            {k.title}
          </Radio>
        ))}
      </RadioGroup>

      <TextField
        label="Short title"
        description="One line, e.g. “Button focus ring vs Harbor’s outline style”."
        isRequired
        value={title}
        onChange={setTitle}
      />
      <TextArea
        label="What clashes"
        description="Name both sides. For a rule clash, name both rules. For a past decision, link its record."
        isRequired
        rows={3}
        autoResize
        value={clash}
        onChange={setClash}
      />
      <TextArea
        label="Where it shows up"
        description="Which screen, product or brand. You can attach a screenshot on GitHub."
        isRequired
        rows={2}
        autoResize
        value={where}
        onChange={setWhere}
      />
      {pastDecision && (
        <TextArea
          label="New information"
          description="A measurement, a bug, or a user need nobody knew about when the decision was made. Disagreeing with the trade-off isn’t new information."
          isRequired
          rows={3}
          autoResize
          value={evidence}
          onChange={setEvidence}
        />
      )}

      <div className={styles.actions}>
        <Button type="submit">
          Raise conflict on GitHub
          <IconArrowUpRight aria-hidden />
        </Button>
        <span className={styles.hint}>Opens in a new tab.</span>
      </div>
    </form>
  );
}
