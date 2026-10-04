/**
 * Content for the hero blocks. Replace this object to translate or rebrand it; the component never hard-codes copy.
 * `hero` is the section's own copy; `nav` and `overview` are the tenant's dashboard sample (the English default below
 * is copied from the dashboard-overview block), so a hero that pictures the product invents no numbers.
 *
 * Every hero block (hero, hero-orbit, hero-gallery, hero-cards, hero-aurora) carries an identical copy of this file,
 * so each installs from the registry on its own. Change this one, copy it over the others:
 * `node scripts/check-hero-content.mjs` fails while they differ.
 */
export interface HeroStat {
  label: string;
  /** Raw number, formatted with Intl in `locale` (and `currency`). */
  value: number;
  format: 'currency' | 'number' | 'percent';
}

export interface HeroRow {
  title: string;
  meta: string;
  /** Signed amount in `currency`. Negative = money out. */
  amount: number;
}

export interface HeroImage {
  /** URL of the picture. Portrait (2:3) crops best; it is cropped to fill the card. */
  src: string;
  /** Who made it, and where it came from: kept with the picture so credit travels with it. */
  credit?: string;
  source?: string;
}

export interface HeroContent {
  /** BCP 47 locale for numbers, e.g. "en-IN" or "ar-AE-u-nu-latn". */
  locale: string;
  /** ISO 4217 currency code. */
  currency: string;
  product: { name: string };
  /** The product's own navigation; the picture shows the first few as its top bar. */
  nav: string[];
  /** The tenant's dashboard sample, drawn as the product picture. Only these fields are read. */
  overview: {
    greeting: string;
    stats: HeroStat[];
    table: { title: string; rows: HeroRow[] };
    progress: { title: string; value: number; label: string };
  };
  hero: {
    /** The site's menu bar: a few links, a sign-in link and one button. */
    menu: { label: string; links: string[]; signIn: string; cta: string };
    /** The "what's new" pill above the headline. Omit to hide it. */
    announcement?: { badge: string; text: string };
    /** First half of the headline, in the default text colour. `*word*` emphasises (italic; brand colour in Arabic and Devanagari). */
    headline: string;
    /** Second half, same size, muted (Stripe's two-tone headline). Omit for a one-tone headline. */
    headlineTail?: string;
    /** A sentence or two under the headline. Heroes that use a two-tone headline may leave it out. */
    body?: string;
    primary: string;
    secondary: string;
    /** Small reassurance under the buttons ("Free to open. No minimum balance."). Omit to hide it. */
    trust?: string;
    /** What the product picture shows, for screen readers: it is a picture, not a working app. */
    pictureLabel: string;
    /** The ask-anything box some heroes put centre stage. `label` names it for screen readers. */
    prompt?: { label: string; placeholder: string; send: string };
    /** Pictures for heroes that show a wall of images (Gallery). Decorative. Defaults to GALLERY_IMAGES. */
    images?: HeroImage[];
    /** Names on the floating cursors some heroes show (Card fan): people from the sample, as if working alongside. */
    cursors?: string[];
    /** The search some heroes put centre stage (Aurora): its name, hint, button and quick-pick chips. */
    search?: { label: string; placeholder: string; button: string; chipsLabel: string; chips: string[] };
  };
}

export const heroContent: HeroContent = {
  locale: 'en-US',
  currency: 'USD',
  product: { name: 'Acme' },
  nav: ["Overview", "Payments", "Cards", "Savings", "Insights"],
  overview: {
    "greeting": "Good morning, Jordan",
    "stats": [
      {
        "label": "Available balance",
        "value": 12840.5,
        "format": "currency"
      },
      {
        "label": "Spent this month",
        "value": 3215.8,
        "format": "currency"
      },
      {
        "label": "Savings goals",
        "value": 8600,
        "format": "currency"
      }
    ],
    "table": {
      "title": "Recent activity",
      "rows": [
        {
          "title": "Brightwave Internet",
          "meta": "Autopay · October plan",
          "amount": -64.99
        },
        {
          "title": "Corner Roastery",
          "meta": "Card •• 4821",
          "amount": -6.4
        },
        {
          "title": "Transfer to Sam Ortiz",
          "meta": "Dinner split",
          "amount": -38
        },
        {
          "title": "Refund from Loomcraft Home",
          "meta": "Order LC-88213",
          "amount": 89.99
        },
        {
          "title": "Green Basket Market",
          "meta": "Card •• 4821",
          "amount": -112.36
        },
        {
          "title": "Skyfare Travel",
          "meta": "Online card limit reached",
          "amount": -642
        },
        {
          "title": "Payroll deposit",
          "meta": "Brightloom Labs · Direct deposit",
          "amount": 4180
        }
      ]
    },
    "progress": {
      "title": "Vacation fund",
      "value": 0.62,
      "label": "$1,860 of $3,000"
    }
  },
  hero: {
    menu: { label: 'Main', links: ['Personal', 'Business', 'Pricing'], signIn: 'Log in', cta: 'Get the app' },
    announcement: { badge: 'New', text: 'Shared savings pots are here' },
    headline: 'See where your money goes.',
    headlineTail: 'Every transaction, the moment it moves.',
    body: 'Payments, savings and card controls in one calm app. Every transaction shows up the moment it happens, in words you can read.',
    primary: 'Open an account',
    secondary: 'See how it works',
    trust: 'Free to open. No minimum balance.',
    pictureLabel: 'The Acme app: your balance, spending this month and recent payments.',
    cursors: ['Sam', 'Riley'],
    search: {
      label: 'Search Acme',
      placeholder: 'Search payments, cards and savings',
      button: 'Search',
      chipsLabel: 'Popular searches',
      chips: ['Bills', 'Food & drink', 'Savings pots', 'Card controls'],
    },
    prompt: { label: 'Ask Acme', placeholder: 'Ask about your money, like “What did I spend on food last month?”', send: 'Ask' },
  },
};

/**
 * Sample pictures for the Gallery hero: 20 abstract and 3D images from Unsplash, all under the Unsplash License
 * (free to use, commercial use included, no permission or credit required; credited here anyway). Downloaded at
 * 800px wide as WebP into apps/docs/public/hero-gallery (972 KB together, `du -ch`). Chosen by Anuj, 2026-10-04.
 * A real site replaces them with its own product shots through `hero.images`.
 */
export const GALLERY_IMAGES: HeroImage[] = [
  { src: '/hero-gallery/01-floating-cubes-and-glowing-yello.webp', credit: 'Sebastian Svenson', source: 'https://unsplash.com/photos/d2w-_1LJioQ' },
  { src: '/hero-gallery/02-pastel-spheres-on-gradient.webp', credit: 'Milad Fakurian', source: 'https://unsplash.com/photos/PGdW_bHDbpI' },
  { src: '/hero-gallery/03-blue-layered-waves.webp', credit: 'SIMON LEE', source: 'https://unsplash.com/photos/egWTpKFu8rU' },
  { src: '/hero-gallery/04-spiral-of-dark-blue-blades.webp', credit: 'Dynamic Wang', source: 'https://unsplash.com/photos/irn9H9-Kfq4' },
  { src: '/hero-gallery/05-metallic-cubes-blue-and-purple.webp', credit: 'Milad Fakurian', source: 'https://unsplash.com/photos/rPdxh2xl2-E' },
  { src: '/hero-gallery/06-pink-green-and-blue-abstract.webp', credit: 'Milad Fakurian', source: 'https://unsplash.com/photos/UYgrVfIhBec' },
  { src: '/hero-gallery/07-spiral-of-colourful-discs.webp', credit: 'Milad Fakurian', source: 'https://unsplash.com/photos/bMSA5-tLFao' },
  { src: '/hero-gallery/08-floating-cube.webp', credit: 'Enis Can Ceyhan', source: 'https://unsplash.com/photos/1QGxRD55taw' },
  { src: '/hero-gallery/09-flower-with-a-rainbow.webp', credit: 'Alexander Park', source: 'https://unsplash.com/photos/VYaB7HdEUWc' },
  { src: '/hero-gallery/10-3d-purple-flower.webp', credit: 'Marcel Strauß', source: 'https://unsplash.com/photos/Ys3a_SqPtuA' },
  { src: '/hero-gallery/11-large-white-flower.webp', credit: 'SIMON LEE', source: 'https://unsplash.com/photos/uCbsQrqSOWU' },
  { src: '/hero-gallery/12-orange-orb-on-blue.webp', credit: 'mymind', source: 'https://unsplash.com/photos/XUlsF9LYeVk' },
  { src: '/hero-gallery/13-iridescent-glass-sculpture.webp', credit: 'luthfi alfarizi', source: 'https://unsplash.com/photos/A8EsJFMCEU0' },
  { src: '/hero-gallery/14-blue-and-yellow-liquid.webp', credit: 'Rodion Kutsaiev', source: 'https://unsplash.com/photos/F573ZRbKOEw' },
  { src: '/hero-gallery/15-colourful-3d-object.webp', credit: 'Olga Deeva', source: 'https://unsplash.com/photos/NQI6PVxeDbA' },
  { src: '/hero-gallery/16-colourful-object-in-the-air.webp', credit: 'SIMON LEE', source: 'https://unsplash.com/photos/J-Fr6LalosU' },
  { src: '/hero-gallery/17-abstract-3d-design.webp', credit: 'Tiago Wolf', source: 'https://unsplash.com/photos/LvQJAkm_yzU' },
  { src: '/hero-gallery/18-pink-and-purple-object.webp', credit: 'SIMON LEE', source: 'https://unsplash.com/photos/fyZOY0HiF9A' },
  { src: '/hero-gallery/19-green-and-white-object.webp', credit: 'SIMON LEE', source: 'https://unsplash.com/photos/BRHLD4L1Hag' },
  { src: '/hero-gallery/20-purple-and-pink-waves.webp', credit: 'Milad Fakurian', source: 'https://unsplash.com/photos/nY14Fs8pxT8' },
];
