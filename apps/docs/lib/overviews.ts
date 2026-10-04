/**
 * Components whose page opens with an overview instead of the usual preview: every style side by side, with no
 * brand, scheme or direction controls. Each tile links to that style's own page (/docs/components/<name>/<example>),
 * which has the full preview and its controls. Anuj, 2026-10-04: "list all the hero sections here … when I click on
 * a particular hero section, the new page will open, and you have the option there to change the theme".
 *
 * The overview is an example file (apps/docs/examples/<name>/<overview>.tsx) that is not listed in meta.examples, so
 * it doesn't appear again among the examples further down.
 */
export const OVERVIEWS: Record<string, string> = {
  hero: 'hero-styles',
};
