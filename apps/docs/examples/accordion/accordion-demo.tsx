'use client';

import { Accordion, AccordionItem } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Accordion defaultExpandedKeys={['documents']}>
      <AccordionItem id="documents" title={t('Which documents do I need?')}>
        {t('An itemised invoice, the prescription or referral, and a discharge summary for hospital stays.')}
      </AccordionItem>
      <AccordionItem id="timeline" title={t('How long does a review take?')}>
        {t('Most claims are reviewed within 3 working days. We email you if we need anything else.')}
      </AccordionItem>
      <AccordionItem id="payment" title={t('When will I be paid?')}>
        {t('Approved amounts reach your bank account within 5 working days of approval.')}
      </AccordionItem>
    </Accordion>
  );
}
