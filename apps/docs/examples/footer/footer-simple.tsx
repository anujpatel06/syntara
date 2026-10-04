'use client';

import { Footer, FooterColumn, FooterLink } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Footer aside={<p>{t('Made for teams who ship every week.')}</p>}>
      <FooterColumn title={t('Product')}>
        <FooterLink href="#">{t('Pricing')}</FooterLink>
        <FooterLink href="#">{t('Changelog')}</FooterLink>
        <FooterLink href="#">{t('Security')}</FooterLink>
      </FooterColumn>
      <FooterColumn title={t('Company')}>
        <FooterLink href="#">{t('About')}</FooterLink>
        <FooterLink href="#">{t('Careers')}</FooterLink>
      </FooterColumn>
      <FooterColumn title={t('Help')}>
        <FooterLink href="#">{t('Support')}</FooterLink>
        <FooterLink href="#">{t('Legal')}</FooterLink>
      </FooterColumn>
    </Footer>
  );
}
