import { Footer, FooterColumn, FooterLink, FooterStatus, ThemeScope } from '@syntara/react';
import { IconCheck } from '@syntara/icons';
import Link from 'next/link';
import { InstallCommand } from '@/components/home/install-command';
import { FOOTER_COLUMNS } from '@/components/site/site-footer';
import { getComponentGroups } from '@/lib/meta';
import { GITHUB_URL, githubBlob } from '@/lib/site';
import { FAQ_TOPICS, faqItems } from './faq-items';
import { FeatureCards } from './feature-cards';
import { FeatureTabs } from './feature-tabs';
import { IntroReveal } from './intro-reveal';
import { getLandingTenants } from './landing-data';
import { LandingEffects } from './landing-effects';
import { LandingFaq } from './landing-faq';
import { LandingHero } from './landing-hero';
import styles from './landing.module.css';

/**
 * The homepage, after fora.so (measured spec: docs/design/landing.md). Always the house theme in dark: the page
 * is lit by its night-sky pictures, and a light canvas would put them on white. The site header sits over the
 * hero (components/site/home-chrome.tsx) and the site footer gives way to the Footer component here.
 */
export function Landing() {
  const tenants = getLandingTenants();
  const closing = tenants[0];
  const ticks = (items: string[]) => (
    <ul className={styles.ticks}>
      {items.map((i) => (
        <li key={i}>
          <IconCheck aria-hidden />
          {i}
        </li>
      ))}
    </ul>
  );

  return (
    <ThemeScope theme="house" scheme="dark" className={styles.landing}>
      <main id="main" tabIndex={-1}>
        <LandingEffects />
        <LandingHero tenants={tenants} />

        {/* 2 ── Intro */}
        <section className={`${styles.section} ${styles.intro}`} aria-label="Introduction">
          <div className={styles.wrap}>
            <span className={styles.tag} data-reveal="">Intro</span>
            <IntroReveal
              paragraphs={[
                'Syntara takes six brand inputs: a primary colour, an accent, a neutral, a shape, a type pair and a density. From them it builds a complete light and dark theme.',
                'Every colour pair it makes is checked against WCAG 2.2 AA before it ships. When a brand can’t pass, the engine adjusts the colour. It never rounds a ratio up.',
                'The same React components render every brand: right to left, Devanagari and editorial serifs included. A brand is data, not code.',
              ]}
            />
          </div>
        </section>

        {/* 3 ── Features */}
        <section className={styles.section} aria-labelledby="features-title">
          <div className={styles.wrap}>
            <span className={styles.tag} data-reveal="">Core features</span>
            <div className={styles.head} data-reveal="2">
              <h2 id="features-title" className={styles.h2}>
                One library for <span className={styles.h2Tail}>every brand you ship.</span>
              </h2>
              <p className={styles.body}>
                Components, themes, contrast checks and an agent-readable spec, all generated from the same files, so
                they never drift apart.
              </p>
            </div>
            {/* the first group of the components index, as the Components page shows it */}
            <FeatureTabs
              tenants={tenants}
              components={(getComponentGroups()[0]?.items ?? []).slice(0, 6).map((m) => ({ ...m, group: getComponentGroups()[0]!.label }))}
            />
          </div>
        </section>

        {/* 4 ── What you get */}
        <section className={`${styles.section} ${styles.featSection}`} aria-labelledby="get-title">
          <div className={styles.wrap}>
            <span className={styles.tag} data-reveal="">What you get</span>
            <div className={styles.head} data-reveal="2">
              <h2 id="get-title" className={styles.h2}>
                Set it up once. <span className={styles.h2Tail}>Every brand follows.</span>
              </h2>
              <p className={styles.body}>
                Write a brand in one small file. Syntara does the colour maths, the dark theme and the accessibility
                checks, and stays out of your way after that.
              </p>
            </div>
            <FeatureCards tenants={tenants} />
          </div>
        </section>

        {/* 5 ── Install (Fora's pricing) */}
        <section className={styles.section} aria-labelledby="install-title">
          <div className={styles.wrap}>
            <span className={styles.tag} data-reveal="">Install</span>
            <h2 id="install-title" className={styles.h2} style={{ marginBlockStart: 'var(--syntara-space-5)' }} data-reveal="2">
              Start in a minute. <span className={styles.h2Tail}>Free and open source.</span>
            </h2>
            <div className={styles.plans}>
              <div className={`${styles.lit} ${styles.plan}`} data-lit="" data-reveal="3">
                <div className={`${styles.litFace} ${styles.planFace}`}>
                  <div className={styles.planTop}>
                    <span className={styles.eyebrow}>Tokens</span>
                    <h3 className={styles.planName}>Any stack</h3>
                    <p className={`${styles.small} ${styles.planDesc}`}>
                      Your brand as CSS variables, design tokens or Figma variables. No React needed.
                    </p>
                    <InstallCommand command="npm install @syntara/tokens" block />
                  </div>
                  {ticks(['CSS custom properties', 'DTCG design tokens', 'Figma variables', 'Light and dark'])}
                </div>
              </div>
              <div className={`${styles.lit} ${styles.plan} ${styles.planMid}`} data-lit="" data-reveal="4">
                <div className={`${styles.litFace} ${styles.planFace}`}>
                  <div className={styles.planTop}>
                    <span className={styles.eyebrow}>Everything</span>
                    <h3 className={styles.planName}>One command</h3>
                    <p className={`${styles.small} ${styles.planDesc}`}>
                      Asks about your brand, or lets you pick a starting look. Writes your theme, installs Syntara and
                      adds it to your app.
                    </p>
                    <InstallCommand command="npx syntara init" label="Copy the setup command" block />
                  </div>
                  {ticks(['Components built on React Aria', 'The Syntara icon set', 'Tokens for every brand, light and dark', 'Your own brand, checked for contrast', 'The theme engine', 'One stylesheet: syntara/styles.css'])}
                </div>
              </div>
              <div className={`${styles.lit} ${styles.plan}`} data-lit="" data-reveal="5">
                <div className={`${styles.litFace} ${styles.planFace}`}>
                  <div className={styles.planTop}>
                    <span className={styles.eyebrow}>Agents</span>
                    <h3 className={styles.planName}>MCP server</h3>
                    <p className={`${styles.small} ${styles.planDesc}`}>
                      Give your coding agent the components, their rules and your brands.
                    </p>
                    <InstallCommand command="npm install @syntara/mcp" block />
                  </div>
                  {ticks(['Read-only, runs locally', 'Reads meta.json at request time', 'Works with any MCP client', 'Drift checks in @syntara/audit'])}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 ── FAQ */}
        <section className={styles.section} aria-labelledby="faq-title">
          <div className={styles.wrap}>
            <span className={styles.tag} data-reveal="">FAQ</span>
            <div className={styles.head} data-reveal="2">
              <h2 id="faq-title" className={styles.h2}>
                Answers to the questions <span className={styles.h2Tail}>that come up most.</span>
              </h2>
              <p className={styles.body}>What Syntara is, what it isn’t, and where the honest edges are.</p>
            </div>
            <LandingFaq
              topics={FAQ_TOPICS}
              items={faqItems()}
              ask={
                <>
                  <h3 className={styles.askTitle}>Still have a question?</h3>
                  <p className={styles.small}>Open an issue on GitHub. A person reads every one.</p>
                  <a className={styles.link} href={`${GITHUB_URL}/issues`}>
                    Ask on GitHub →
                  </a>
                </>
              }
            />
          </div>
        </section>

        {/* 7 ── From the log (Fora's blog) */}
        <section className={styles.section} aria-labelledby="log-title">
          <div className={styles.wrap}>
            <span className={styles.tag} data-reveal="">From the log</span>
            <div className={styles.logHead} data-reveal="2">
              <h2 id="log-title" className={styles.h2}>
                How it’s built, <span className={styles.h2Tail}>decision by decision.</span>
              </h2>
              <Link className={styles.link} href="/docs/changelog">
                Read the changelog →
              </Link>
            </div>
            <div className={styles.posts}>
              {[
                { href: '/docs/components/hero', img: '/landing/galaxy-sky.webp', pos: '30% 80%', title: 'The Hero component, and the four ways it opens a page', meta: ['RFC-003', 'Oct 4, 2026'] },
                { href: githubBlob('docs/adr/045-inner-surfaces-are-outlines.md'), img: '/landing/galaxy-spiral.webp', pos: 'center 75%', title: 'Inside a card, inner surfaces are outlines', meta: ['ADR-045', 'Oct 4, 2026'] },
                { href: githubBlob('docs/adr/046-hero-follows-the-page.md'), img: '/landing/galaxy-sky.webp', pos: '80% 85%', title: 'The Hero follows the page’s light or dark', meta: ['ADR-046', 'Oct 5, 2026'] },
              ].map((p, i) => (
                <a key={p.title} className={`${styles.lit} ${styles.post}`} data-lit="" data-reveal={String(i + 3)} href={p.href}>
                  <div className={`${styles.litFace} ${styles.postFace}`}>
                    <div className={styles.postImg} style={{ backgroundImage: `url(${p.img})`, backgroundPosition: p.pos }} />
                    <h3 className={styles.postTitle}>{p.title}</h3>
                    <p className={`${styles.caption} ${styles.postMeta}`}>
                      <span>{p.meta[0]}</span>·<span>{p.meta[1]}</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 8 ── Closing */}
        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={`${styles.wrap} ${styles.closingGrid}`}>
            <div data-reveal="">
              <h2 id="closing-title" className={styles.h2}>
                Your brand is one file away.
              </h2>
              <p className={styles.body}>Six inputs in a JSON file. Syntara builds the rest: themes, tokens, components and checks.</p>
              <Link href="/docs/installation" className={styles.cta}>
                Get started
              </Link>
            </div>
            {closing && (
              <div className={styles.app2} aria-hidden="true" data-reveal="2">
                <div>
                  {tenants.map((t, i) => (
                    <span key={t.id} className={styles.appNav} data-on={i === 0 ? '' : undefined} data-syntara-theme={t.id} data-syntara-scheme="dark">
                      <span className={styles.dot} />
                      {t.name}
                    </span>
                  ))}
                </div>
                <div className={styles.box}>
                  <pre className={styles.code}>{closing.brandJson}</pre>
                  <span className={styles.caption}>tenants/{closing.id}/brand.json</span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.planetRim} style={{ backgroundImage: 'url(/landing/planet-rim.webp)' }} aria-hidden="true" />
        </section>
      </main>

      {/* 9 ── Footer: the Footer component */}
      <div className={styles.footer}>
        <Footer
          wordmark="Syntara"
          aside={
            <>
              <p className={`${styles.small} ${styles.footerTag}`}>One React library, any brand, accessible by construction.</p>
              <FooterStatus>MIT licensed and open source</FooterStatus>
              <p className={styles.caption}>Designed by Anuj Patel, engineering paired with Claude.</p>
            </>
          }
        >
          {FOOTER_COLUMNS.map((col) => (
            <FooterColumn key={col.title} title={col.title}>
              {col.links.map((l) => (
                <FooterLink key={l.label} href={l.href} {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterColumn>
          ))}
        </Footer>
      </div>
    </ThemeScope>
  );
}
