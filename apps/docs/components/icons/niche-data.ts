/**
 * Server-only: the niche pack's domains, read from the package itself (`@syntara/icons/niche`) so the page cannot
 * drift from what ships. Labels are written here because a slug like `healthcare-specialties` reads better as
 * "Healthcare: specialties".
 */
import { nicheDomains } from '@syntara/icons/niche';
import type { IconGroup } from './icon-data';

const LABELS: Record<string, string> = {
  'healthcare-specialties': 'Healthcare: specialties',
  'healthcare-dental': 'Healthcare: dental',
  'healthcare-equipment': 'Healthcare: equipment and lab',
  'healthcare-anatomy': 'Healthcare: body and anatomy',
  'pharmacy-wellness': 'Pharmacy and wellness',
  'veterinary-pets': 'Veterinary and pets',
  'finance-banking': 'Finance and banking',
  'insurance-legal': 'Insurance and legal',
  'real-estate-construction': 'Real estate and construction',
  'architecture-interiors': 'Architecture and interiors',
  education: 'Education',
  'science-research': 'Science and research',
  'software-engineering': 'Software and engineering',
  'electronics-hardware': 'Electronics and hardware',
  'telecom-networking': 'Telecom and networking',
  'manufacturing-industry': 'Manufacturing and industry',
  'energy-utilities': 'Energy and utilities',
  'agriculture-farming': 'Agriculture and farming',
  'food-restaurants': 'Food and restaurants',
  'hospitality-travel': 'Hospitality and travel',
  'transport-logistics': 'Transport and logistics',
  automotive: 'Automotive',
  'aviation-maritime': 'Aviation and maritime',
  'retail-ecommerce': 'Retail and e-commerce',
  'fashion-beauty': 'Fashion and beauty',
  'sports-fitness': 'Sports and fitness',
  'music-audio': 'Music and audio',
  'film-photo-media': 'Film, photo and media',
  'gaming-toys': 'Gaming and toys',
  'art-craft-design': 'Art, craft and design',
  'weather-nature': 'Weather, nature and environment',
  'government-public': 'Government and public service',
  'military-security': 'Security',
  'religion-culture': 'Religion and culture',
  'family-events': 'Family, events and life',
  'hr-office-business': 'HR, office and business',
  'marketing-sales': 'Marketing and sales',
  'home-household': 'Home and household',
  'space-mining': 'Space and mining',
  'crypto-fintech': 'Crypto, fintech and web3',
};

/** `anatomy-skull` → `IconAnatomySkull`, the export name createIcon's file gives it. */
export const exportName = (kebab: string) => 'Icon' + kebab.split('-').map((s) => s[0]!.toUpperCase() + s.slice(1)).join('');

export function getNicheGroups(): IconGroup[] {
  // The order of LABELS is the domain list's order (docs/design/icon-domains.md), so the healthcare domains sit together.
  const order = Object.keys(LABELS);
  const rank = (id: string) => (order.includes(id) ? order.indexOf(id) : order.length);
  return Object.entries(nicheDomains)
    .sort(([a], [b]) => rank(a) - rank(b))
    .map(([id, names]) => ({ id, label: LABELS[id] ?? id, niche: true, names: [...names].sort().map(exportName) }));
}
