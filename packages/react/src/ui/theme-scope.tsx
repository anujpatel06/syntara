'use client';

import type { HTMLAttributes, JSX } from 'react';
import { I18nProvider } from 'react-aria-components';
import styles from './theme-scope.module.css';

export interface ThemeScopeProps extends HTMLAttributes<HTMLDivElement> {
  /** Tenant id whose token CSS is loaded under [data-syntara-theme="<id>"]. Omit to inherit (e.g. a :root theme). */
  theme?: string;
  /** `'auto'` follows the visitor's system setting (light or dark), with no flash: the token CSS switches by media query. */
  scheme?: 'light' | 'dark' | 'auto';
  /** Omit to use the tenant's default density. */
  density?: 'comfortable' | 'compact';
  /**
   * BCP 47 locale for the subtree, e.g. "ar-AE". Sets React Aria's locale (keyboard direction, date formats,
   * popover placement) and, unless you pass them, `lang` and `dir`. React Aria reads direction from the locale,
   * not from the DOM, so right-to-left regions need this.
   */
  locale?: string;
  /**
   * Which digits dates and numbers use inside the scope. `'native'` switches to the language's own digits where it
   * has them (Arabic ١٢٣, Hindi १२३); `'latin'` forces 1 2 3. Omit to let the locale choose, which for ar-AE and
   * hi-IN is 1 2 3. Needs `locale`; it overrides any `-u-nu-` already in it.
   */
  numerals?: 'native' | 'latin';
}

/**
 * Read the scope's locale and direction. Re-exported here because a consumer installs @syntara/react, not
 * react-aria-components, and ThemeScope is what sets the locale they would be reading.
 */
export { useLocale } from 'react-aria-components';

const RTL_LANGUAGES = new Set(['ar', 'he', 'fa', 'ur', 'ps', 'yi', 'dv', 'ku', 'sd', 'ug']);

/** A language's own digits (CLDR numbering systems), for `numerals="native"`. Unlisted languages keep the locale's. */
const NATIVE_DIGITS: Record<string, string> = {
  ar: 'arab', fa: 'arabext', ur: 'arabext', ps: 'arabext',
  hi: 'deva', mr: 'deva', ne: 'deva', bn: 'beng', gu: 'gujr', pa: 'guru', ta: 'tamldec', te: 'telu', kn: 'knda', ml: 'mlym',
  th: 'thai', lo: 'laoo', my: 'mymr', km: 'khmr',
};

/** The locale with its numbering system set (BCP 47 `-u-nu-`), which every Intl and React Aria formatter reads. */
function withNumerals(locale: string, language: string | undefined, numerals: 'native' | 'latin' | undefined): string {
  const system = numerals === 'latin' ? 'latn' : numerals === 'native' && language ? NATIVE_DIGITS[language] : undefined;
  if (!system) return locale;
  try {
    return new Intl.Locale(locale, { numberingSystem: system }).toString();
  } catch {
    return locale;
  }
}

/**
 * Applies a Syntara theme to a subtree. Token CSS (from @syntara/tokens or the theme engine's toCSS) keys off
 * these data attributes, which must sit on the SAME element. Overlays (dialogs, menus, toasts) portal to <body>
 * and copy these attributes from the nearest scope when they open, so they match the region they came from.
 */
export function ThemeScope({
  theme,
  scheme = 'light',
  density,
  locale,
  numerals,
  lang,
  dir,
  className,
  ...rest
}: ThemeScopeProps): JSX.Element {
  const language = locale?.split('-')[0]?.toLowerCase();
  const scope = (
    <div
      data-syntara-theme={theme}
      data-syntara-scheme={scheme}
      data-syntara-density={density}
      lang={lang ?? language}
      dir={dir ?? (language ? (RTL_LANGUAGES.has(language) ? 'rtl' : 'ltr') : undefined)}
      className={[styles.scope, className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
  return locale ? <I18nProvider locale={withNumerals(locale, language, numerals)}>{scope}</I18nProvider> : scope;
}
