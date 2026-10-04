'use client';

import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  IconTile,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from '@syntara/react';
import { IconLayoutDashboard, IconSparkles, IconTrendingUp, IconWallet } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <div style={{ blockSize: 520, display: 'flex', maxInlineSize: '100%', minInlineSize: 0 }}>
      <Sidebar aria-label={t('Main')} variant="floating">
        <SidebarHeader logo={<IconTile tint="solid" size="sm"><IconSparkles /></IconTile>} title="Ledger" subtitle={t('Free plan')} />
        <SidebarSection title={t('Overview')}>
          <SidebarItem href="#dashboard" icon={<IconLayoutDashboard />} isCurrent>{t('Dashboard')}</SidebarItem>
          <SidebarItem href="#wallets" icon={<IconWallet />}>{t('Wallets')}</SidebarItem>
          <SidebarItem href="#insights" icon={<IconTrendingUp />} badge="Pro">{t('Insights')}</SidebarItem>
        </SidebarSection>
        <SidebarFooter>
          <Card variant="feature" stars>
            <CardHeader>
              <CardTitle level={2}>{t('Go further with Pro')}</CardTitle>
              <CardDescription>{t('Forecasts, shared wallets and priority support.')}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button size="sm">{t('Upgrade')}</Button>
            </CardFooter>
          </Card>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
