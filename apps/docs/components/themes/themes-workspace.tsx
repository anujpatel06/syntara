'use client';

import { IconDownload, IconMoon, IconSun } from '@syntara/icons';
import { Button, Tab, TabList, TabPanel, Tabs, ToggleButton, ToggleButtonGroup } from '@syntara/react';
import type { Key } from 'react-aria-components';
import { AccessibilityPanel } from './accessibility-panel';
import { ControlsPanel } from './controls-panel';
import { ExportDialog } from './export-panel';
import { plural } from './format';
import { PreviewPanel } from './preview-panel';
import { SCHEMES, TABS, oneOf, type Tab as TabId } from './state';
import { useThemes } from './themes-provider';
import { TokensPanel } from './tokens-panel';
import styles from './themes.module.css';

const TAB_LABEL: Record<TabId, string> = {
  preview: 'Preview',
  accessibility: 'Accessibility',
  tokens: 'Tokens',
};

/** One Export button per place it can show; CSS shows the one that fits the width (top of the inputs, or the tab row). */
function ExportButton({ className }: { className?: string }) {
  const { dispatch } = useThemes();
  return (
    <Button size="sm" onPress={() => dispatch({ type: 'setExportOpen', open: true })} className={className}>
      <IconDownload aria-hidden />
      Export
    </Button>
  );
}

function SchemeToggle() {
  const { state, dispatch } = useThemes();
  return (
    <ToggleButtonGroup
      aria-label="Colour scheme"
      size="sm"
      disallowEmptySelection
      selectedKeys={[state.scheme]}
      onSelectionChange={(keys) => {
        const [first] = keys;
        const scheme = oneOf(first == null ? undefined : String(first), SCHEMES);
        if (scheme) dispatch({ type: 'setScheme', scheme });
      }}
    >
      <ToggleButton id="light">
        <IconSun aria-hidden />
        Light
      </ToggleButton>
      <ToggleButton id="dark">
        <IconMoon aria-hidden />
        Dark
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

/**
 * Views of the generated theme in tabs on the start side, inputs on the end side (sticky on wide screens), like the
 * Motion lab's settings panel. The inputs come after the views in the source too, so focus order matches what you see.
 */
export function ThemesWorkspace() {
  const { state, dispatch, theme } = useThemes();
  const { adjustments } = theme.summary;

  return (
    <div className={styles.workspace}>
      <Tabs
        selectedKey={state.tab}
        onSelectionChange={(key: Key) => {
          const tab = oneOf(String(key), TABS);
          if (tab) dispatch({ type: 'setTab', tab });
        }}
        className={styles.views}
      >
        <div className={styles.tabbar}>
          <TabList aria-label="Theme views" className={styles.tablist}>
            {TABS.map((id) =>
              id === 'accessibility' ? (
                <Tab key={id} id={id} count={adjustments} aria-label={`${TAB_LABEL[id]}, ${plural(adjustments, 'solver adjustment')}`}>
                  {TAB_LABEL[id]}
                </Tab>
              ) : (
                <Tab key={id} id={id}>
                  {TAB_LABEL[id]}
                </Tab>
              ),
            )}
          </TabList>
          <div className={styles.tabActions}>
            <SchemeToggle />
            <ExportButton className={styles.exportNarrow} />
          </div>
        </div>
        <TabPanel id="preview" className={styles.panel}>
          <PreviewPanel />
        </TabPanel>
        <TabPanel id="accessibility" className={styles.panel}>
          <AccessibilityPanel />
        </TabPanel>
        <TabPanel id="tokens" className={styles.panel}>
          <TokensPanel />
        </TabPanel>
      </Tabs>
      <ExportDialog />
      <div className={styles.controls}>
        {/* Export heads the inputs column, level with the tab row: the page's one primary action, top right. */}
        <div className={styles.exportRow}>
          <ExportButton />
        </div>
        <ControlsPanel />
      </div>
    </div>
  );
}
