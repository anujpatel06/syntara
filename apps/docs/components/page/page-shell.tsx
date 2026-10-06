import { Eyebrow } from '@syntara/react';
import type { ReactNode } from 'react';
import styles from './page-shell.module.css';

/**
 * Frame for top-level pages outside /docs (home, blocks, themes, colors): <main id="main">, the site
 * container and gutters, and an optional page header. Wave-2 pages render their content as children.
 */
export function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
  width = 'default',
  density = 'default',
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  /** `default` = site container, `narrow` = prose width. */
  width?: 'default' | 'narrow';
  /** `compact` = smaller title, actions beside it on wide screens, less space above. For tool pages (themes). */
  density?: 'default' | 'compact';
}) {
  return (
    <main id="main" tabIndex={-1} className={styles.main}>
      <div className={styles.container} data-width={width} data-density={density}>
        {(title || description) && (
          <header className={styles.header}>
            <div className={styles.heading}>
              {eyebrow && (
                <Eyebrow lead="rule" className={styles.eyebrow}>
                  {eyebrow}
                </Eyebrow>
              )}
              {title && <h1 className={styles.title}>{title}</h1>}
              {description && <p className={styles.description}>{description}</p>}
            </div>
            {actions && <div className={styles.actions}>{actions}</div>}
          </header>
        )}
        {children}
      </div>
    </main>
  );
}
