// Starting looks for `npx syntara init` when someone has no brand guidelines (ADR-049). Each is a complete set of
// the six brand inputs, so the engine checks it like any brand. The first one is the default: Enter picks it.

/** @typedef {import('@syntara/theme-engine').BrandInput} BrandInput */

/** @type {ReadonlyArray<{ id: string, label: string, fits: string, brand: Omit<BrandInput, 'name'> }>} */
export const LOOKS = [
  {
    id: 'clear',
    label: 'Clear',
    fits: 'calm blue, soft corners. Fits most products',
    brand: { primary: '#2f5bea', accent: '#0f9d8a', neutral: 'cool', shape: 'soft', typePair: 'modern', density: 'comfortable' },
  },
  {
    id: 'warm',
    label: 'Warm',
    fits: 'orange and teal, round corners. Consumer and lifestyle apps',
    brand: { primary: '#c2410c', accent: '#0e7490', neutral: 'warm', shape: 'round', typePair: 'friendly', density: 'comfortable' },
  },
  {
    id: 'editorial',
    label: 'Editorial',
    fits: 'serif headings on paper tones. Content, media and publishing',
    brand: { primary: '#25533f', accent: '#b7791f', neutral: 'paper', shape: 'sharp', typePair: 'editorial', density: 'comfortable' },
  },
  {
    id: 'technical',
    label: 'Technical',
    fits: 'deep green and blue, sharp and compact. Dashboards and developer tools',
    brand: { primary: '#047857', accent: '#0369a1', neutral: 'neutral', shape: 'sharp', typePair: 'technical', density: 'compact' },
  },
  {
    id: 'bold',
    label: 'Bold',
    fits: 'violet and pink, round corners. Brands that want to stand out',
    brand: { primary: '#7b2ff7', accent: '#df2866', neutral: 'neutral', shape: 'round', typePair: 'precise', density: 'comfortable' },
  },
];

/** @param {string | undefined} id */
export function findLook(id) {
  return LOOKS.find((look) => look.id === id);
}
