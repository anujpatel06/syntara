'use client';

import { Accordion, AccordionItem, ToggleButton, ToggleButtonGroup } from '@syntara/react';
import { useState, type ReactNode } from 'react';
import styles from './landing.module.css';

/**
 * Fora's FAQ: topics on the start side, the questions for the chosen topic on the end side, and a "still have a
 * question?" card under the topics. The topics are a single-choice toggle group (not tabs: the answers below are
 * one list that changes, not separate panels), the questions a Syntara Accordion.
 */
export function LandingFaq({
  topics,
  items,
  ask,
}: {
  topics: readonly string[];
  items: readonly { q: string; topic: string; a: ReactNode }[];
  ask: ReactNode;
}) {
  const [topic, setTopic] = useState(topics[0] ?? '');
  const shown = items.filter((i) => i.topic === topic);
  return (
    <div className={styles.faq}>
      <div>
        <div className={`${styles.lit} ${styles.cats}`} data-lit="" data-reveal="">
          <div className={`${styles.litFace} ${styles.catsFace}`}>
            <ToggleButtonGroup
              aria-label="Question topics"
              orientation="vertical"
              selectionMode="single"
              disallowEmptySelection
              selectedKeys={[topic]}
              onSelectionChange={(k) => setTopic(String([...k][0] ?? topic))}
              style={{ inlineSize: '100%' }}
            >
              {topics.map((t) => (
                <ToggleButton key={t} id={t}>
                  {t}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </div>
        <div className={`${styles.lit} ${styles.ask}`} data-lit="" data-reveal="2">
          <div className={`${styles.litFace} ${styles.askFace}`}>{ask}</div>
        </div>
      </div>
      <div className={`${styles.lit} ${styles.answers}`} data-lit="" data-reveal="2">
        <div className={`${styles.litFace} ${styles.answersFace}`}>
          <Accordion key={topic} defaultExpandedKeys={[`${topic}-0`]}>
            {shown.map((item, i) => (
              <AccordionItem key={item.q} id={`${topic}-${i}`} title={item.q}>
                <p className={styles.answer}>{item.a}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
