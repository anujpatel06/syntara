'use client';

import { Footer, FooterColumn, FooterLink, FooterSocialLink, FooterStatus } from '@syntara/react';
import { IconCode, IconMail, IconRss, IconVideo } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const columns = [
    { title: t('Product'), links: [t('Automations'), t('Audiences'), t('Broadcasts'), t('Inbound'), t('Templates'), t('Webhooks')] },
    { title: t('Resources'), links: [t('Changelog'), t('Pricing'), t('Enterprise'), t('Security'), t('Privacy')] },
    { title: t('Company'), links: [t('About'), t('Blog'), t('Careers'), t('Customers')] },
    { title: t('Help'), links: [t('Support'), t('Status'), t('Migrate'), t('Knowledge base'), t('Legal')] },
    { title: t('Community'), links: [t('Events'), t('Open source'), t('Wallpapers')] },
  ];
  return (
    <Footer
      wordmark={t('Syntara')}
      aside={
        <>
          <address>
            {t('14 Harbour Lane, Suite 300')}
            <br />
            {t('Bengaluru 560001')}
          </address>
          <div style={{ display: 'flex', gap: 'var(--syntara-space-3)' }}>
            <FooterSocialLink href="#" aria-label={t('Newsletter')}><IconMail /></FooterSocialLink>
            <FooterSocialLink href="#" aria-label={t('Source code')}><IconCode /></FooterSocialLink>
            <FooterSocialLink href="#" aria-label={t('Videos')}><IconVideo /></FooterSocialLink>
            <FooterSocialLink href="#" aria-label={t('Feed')}><IconRss /></FooterSocialLink>
          </div>
          <FooterStatus>{t('All systems operational')}</FooterStatus>
        </>
      }
    >
      {columns.map((col) => (
        <FooterColumn key={col.title} title={col.title}>
          {col.links.map((label) => (
            <FooterLink key={label} href="#">{label}</FooterLink>
          ))}
        </FooterColumn>
      ))}
    </Footer>
  );
}
