// What Google Fonts says about a family: whether it exists by that exact name, its real weights, its files and its
// category (serif or sans, for the fallback stack). Checks 1 and 2 in docs/design/custom-fonts.md.

const CSS2 = 'https://fonts.googleapis.com/css2';
const METADATA = 'https://fonts.google.com/metadata/fonts';
export const REQUIRED_WEIGHTS = [400, 500, 600, 700];

const familyParam = (family) => encodeURIComponent(family.trim()).replace(/%20/g, '+');
/** Google prefixes its metadata JSON with `)]}'` so it can't be run as a script. */
const metadataJson = (text) => JSON.parse(text.replace(/^\)\]\}'\s*/, ''));

/** Faces in a css2 response. Without a browser's User-Agent, Google answers with one full .ttf per weight. */
function faces(css) {
  return [...css.matchAll(/@font-face\s*{([^}]*)}/g)].map(([, body]) => ({
    weight: Number(/font-weight:\s*(\d+)/.exec(body)?.[1] ?? 400),
    style: /font-style:\s*italic/.test(body) ? 'italic' : 'normal',
    url: /url\(([^)]+)\)/.exec(body)?.[1] ?? '',
  }));
}

/** On a miss: the family Google does have, matched ignoring case and spaces ("manrope" → "Manrope"). */
async function closest(family) {
  try {
    const res = await fetch(METADATA);
    if (!res.ok) return undefined;
    const key = (s) => s.toLowerCase().replace(/\s+/g, '');
    return metadataJson(await res.text()).familyMetadataList.find((f) => key(f.family) === key(family))?.family;
  } catch {
    return undefined;
  }
}

/**
 * @param {string} family exactly as Google spells it, e.g. "Manrope"
 * @returns {Promise<{ found: false, didYouMean?: string } | { found: true, family: string, weights: number[], files: { weight: number, url: string }[], category: 'sans' | 'serif' }>}
 */
export async function googleFont(family) {
  const wanted = await fetch(`${CSS2}?family=${familyParam(family)}:wght@${REQUIRED_WEIGHTS.join(';')}`);
  // css2 answers 400 both for an unknown family and for weights a known family doesn't have; plain ?family= tells them apart.
  const res = wanted.ok ? wanted : await fetch(`${CSS2}?family=${familyParam(family)}`);
  if (!res.ok) return { found: false, didYouMean: await closest(family) };
  const list = faces(await res.text()).filter((f) => f.style === 'normal' && f.url);
  let category = 'sans';
  try {
    const meta = await fetch(`${METADATA}/${familyParam(family)}`);
    if (meta.ok && metadataJson(await meta.text()).category === 'Serif') category = 'serif';
  } catch {}
  return {
    found: true,
    family: family.trim(),
    weights: [...new Set(list.map((f) => f.weight))].sort((a, b) => a - b),
    files: list.map(({ weight, url }) => ({ weight, url })),
    category,
  };
}
