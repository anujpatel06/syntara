'use client';

import { Footer, FooterColumn, FooterLink } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Footer wordmark={t('Northwind')}>
      <FooterColumn title={t('Explore')}>
        <FooterLink href="#">{t('Guides')}</FooterLink>
        <FooterLink href="#">{t('Templates')}</FooterLink>
      </FooterColumn>
      <FooterColumn title={t('Company')}>
        <FooterLink href="#">{t('About')}</FooterLink>
        <FooterLink href="#">{t('Contact')}</FooterLink>
      </FooterColumn>
    </Footer>
  );
}
