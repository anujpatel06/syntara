import {
  IconAccessible,
  IconAdjustmentsHorizontal,
  IconBaselineDensityMedium,
  IconBook,
  IconDeviceMobile,
  IconDownload,
  IconDroplet,
  IconHistory,
  IconMessage,
  IconMoon,
  IconPencil,
  IconRobot,
  IconScale,
  IconSparkles,
  IconTextDirectionRtl,
  type Icon,
} from '@syntara/icons';

/**
 * Sidebar icons for the hand-written guide pages, keyed by href. Components stay text-only (Anuj, 2026-10-05):
 * 58 names would need forced matches and turn the long list into a wall of glyphs. Lives client-side because
 * icon components can't cross the server → client prop boundary that NavGroup travels on.
 */
export const DOC_ICONS: Readonly<Record<string, Icon>> = {
  '/docs': IconBook,
  '/docs/installation': IconDownload,
  '/docs/mcp': IconRobot,
  '/docs/server-driven-ui': IconDeviceMobile,
  '/docs/figma': IconPencil,
  '/docs/theming': IconAdjustmentsHorizontal,
  '/docs/color': IconDroplet,
  '/docs/dark-mode': IconMoon,
  '/docs/rtl': IconTextDirectionRtl,
  '/docs/density': IconBaselineDensityMedium,
  '/docs/accessibility': IconAccessible,
  '/docs/icons': IconSparkles,
  '/docs/icons/niche': IconSparkles,
  '/docs/governance': IconScale,
  '/docs/raise-a-conflict': IconMessage,
  '/docs/changelog': IconHistory,
};
