/**
 * Every tenant under tenants/ except the site's own brand (house): adding a folder adds a preset. A tenant is data,
 * not code: brand.json (≤6 inputs) + content.json (copy). The JSON is shape-checked at load so a malformed file fails
 * loudly with the path, not as a blank preview.
 */
import { TYPE_PAIRS, isValidHex, type BrandInput } from '@syntara/theme-engine';
import type { TenantContent } from './preview/content-types';

const brandFiles = import.meta.glob('../../../tenants/*/brand.json', { eager: true, import: 'default' });
const contentFiles = import.meta.glob('../../../tenants/*/content.json', { eager: true, import: 'default' });

/** Folder name under tenants/, e.g. "vela". */
export type TenantId = string;

export interface Tenant {
  id: TenantId;
  brand: BrandInput;
  content: TenantContent;
}

const NEUTRALS = ['cool', 'neutral', 'warm', 'paper'];
const SHAPES = ['sharp', 'soft', 'round'];
const DENSITIES = ['comfortable', 'compact'];

function fail(path: string, problem: string): never {
  throw new Error(`Syntara: tenants/${path} ${problem}`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function checkBrand(id: TenantId, raw: unknown): BrandInput {
  const path = `${id}/brand.json`;
  if (!isRecord(raw)) fail(path, 'must be a JSON object');
  const { name, primary, accent, neutral, shape, typePair, density } = raw;
  if (typeof name !== 'string' || !name) fail(path, '"name" must be a non-empty string');
  if (typeof primary !== 'string' || !isValidHex(primary)) fail(path, '"primary" must be a hex colour');
  if (accent !== undefined && (typeof accent !== 'string' || !isValidHex(accent)))
    fail(path, '"accent" must be a hex colour when present');
  if (typeof neutral !== 'string' || !NEUTRALS.includes(neutral)) fail(path, `"neutral" must be one of ${NEUTRALS.join(', ')}`);
  if (typeof shape !== 'string' || !SHAPES.includes(shape)) fail(path, `"shape" must be one of ${SHAPES.join(', ')}`);
  if (typeof typePair !== 'string' || !Object.hasOwn(TYPE_PAIRS, typePair))
    fail(path, `"typePair" must be one of ${Object.keys(TYPE_PAIRS).join(', ')}`);
  if (typeof density !== 'string' || !DENSITIES.includes(density)) fail(path, `"density" must be one of ${DENSITIES.join(', ')}`);
  return raw as unknown as BrandInput;
}

function checkContent(id: TenantId, raw: unknown): TenantContent {
  const path = `${id}/content.json`;
  if (!isRecord(raw)) fail(path, 'must be a JSON object');
  if (typeof raw.locale !== 'string') fail(path, '"locale" must be a BCP 47 string');
  if (raw.dir !== 'ltr' && raw.dir !== 'rtl') fail(path, '"dir" must be "ltr" or "rtl"');
  if (typeof raw.currency !== 'string') fail(path, '"currency" must be an ISO 4217 code');
  if (!isRecord(raw.product) || !isRecord(raw.overview)) fail(path, 'needs "product" and "overview" objects');
  if (!Array.isArray(raw.nav)) fail(path, '"nav" must be an array');
  return raw as unknown as TenantContent;
}

/** The three reference tenants in the order the brief introduces them; any others follow alphabetically. */
const ORDER = ['vela', 'harbor', 'qamar'];
const rank = (id: string) => (ORDER.includes(id) ? ORDER.indexOf(id) : ORDER.length);
const folder = (file: string) => /tenants\/([^/]+)\/[^/]+\.json$/.exec(file)?.[1] ?? '';

export const TENANTS: Tenant[] = Object.entries(brandFiles)
  .map(([file, brand]) => {
    const id = folder(file);
    return { id, brand, content: contentFiles[file.replace(/brand\.json$/, 'content.json')] };
  })
  // The generator previews a screen of copy, so a tenant needs content.json to be a preset.
  .filter(({ id, content }) => id !== 'house' && content !== undefined)
  .map(({ id, brand, content }) => ({ id, brand: checkBrand(id, brand), content: checkContent(id, content) }))
  .sort((a, b) => rank(a.id) - rank(b.id) || a.id.localeCompare(b.id));

/** The preset a URL without `?tenant=` opens on. */
export const DEFAULT_TENANT: TenantId = (TENANTS[0] as Tenant).id;

export function isTenantId(value: unknown): value is TenantId {
  return typeof value === 'string' && TENANTS.some((t) => t.id === value);
}

export function getTenant(id: TenantId): Tenant {
  return TENANTS.find((t) => t.id === id) ?? (TENANTS[0] as Tenant);
}

/**
 * One-line descriptor shown on preset cards, from content.json: the industry and the language, each in the tenant's
 * own language ("Neobank · English", "بقالة ومكافآت · العربية").
 */
export function tenantTagline(tenant: Tenant): { industry: string; language: string; languageLang: string } {
  const lang = tenant.content.locale.split('-')[0] ?? 'en';
  let language = lang;
  try {
    language = new Intl.DisplayNames([lang], { type: 'language' }).of(lang) ?? lang;
  } catch {
    /* unknown tag: show it as written */
  }
  return { industry: tenant.content.product.industry, language, languageLang: lang };
}
