'use client';

import { Accordion, AccordionItem } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const faqs = [
  { id: 'change-plan', q: 'Can I change my plan mid-year?', a: 'Yes. The new plan starts on the first day of next month and we adjust the premium from then.' },
  { id: 'family', q: 'How do I add a family member?', a: 'Open Members, choose Add member and upload an ID document. Cover starts once we verify it.' },
  { id: 'abroad', q: 'Am I covered when travelling abroad?', a: 'Emergency treatment is covered for trips up to 30 days. Planned treatment abroad needs pre-approval.' },
  { id: 'cancel', q: 'How do I cancel?', a: 'Contact support at least 15 days before your renewal date. Unused premium is refunded pro rata.' },
];

export default function Example() {
  const t = useCopy();
  return (
    <Accordion allowsMultipleExpanded defaultExpandedKeys={['change-plan', 'abroad']}>
      {faqs.map((f) => (
        <AccordionItem key={f.id} id={f.id} title={f.q} headingLevel={4}>
          {f.a}
        </AccordionItem>
      ))}
      <AccordionItem id="pause" title={t('Can I pause my cover? (Not available on your plan)')} isDisabled>
        {t('Pausing is available on annual plans only.')}
      </AccordionItem>
    </Accordion>
  );
}
