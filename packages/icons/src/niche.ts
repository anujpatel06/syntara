/**
 * The niche icon pack, 2,000 outline icons in 40 domains (ADR-053): `import { IconCardiology } from '@syntara/icons/niche'`.
 * Its own entry point on purpose: the main entry stays the 480-icon set that the server-driven UI renderer, the docs
 * gallery and `syntara/icons` import wholesale. Same package, same style spec, same `createIcon`.
 */
export { nicheDomains, type NicheDomain } from './niche-domains';
export * from './icons/niche/agriculture-farming';
export * from './icons/niche/architecture-interiors';
export * from './icons/niche/art-craft-design';
export * from './icons/niche/automotive';
export * from './icons/niche/aviation-maritime';
export * from './icons/niche/crypto-fintech';
export * from './icons/niche/education';
export * from './icons/niche/electronics-hardware';
export * from './icons/niche/energy-utilities';
export * from './icons/niche/family-events';
export * from './icons/niche/fashion-beauty';
export * from './icons/niche/film-photo-media';
export * from './icons/niche/finance-banking';
export * from './icons/niche/food-restaurants';
export * from './icons/niche/gaming-toys';
export * from './icons/niche/government-public';
export * from './icons/niche/healthcare-anatomy';
export * from './icons/niche/healthcare-dental';
export * from './icons/niche/healthcare-equipment';
export * from './icons/niche/healthcare-specialties';
export * from './icons/niche/home-household';
export * from './icons/niche/hospitality-travel';
export * from './icons/niche/hr-office-business';
export * from './icons/niche/insurance-legal';
export * from './icons/niche/manufacturing-industry';
export * from './icons/niche/marketing-sales';
export * from './icons/niche/military-security';
export * from './icons/niche/music-audio';
export * from './icons/niche/pharmacy-wellness';
export * from './icons/niche/real-estate-construction';
export * from './icons/niche/religion-culture';
export * from './icons/niche/retail-ecommerce';
export * from './icons/niche/science-research';
export * from './icons/niche/software-engineering';
export * from './icons/niche/space-mining';
export * from './icons/niche/sports-fitness';
export * from './icons/niche/telecom-networking';
export * from './icons/niche/transport-logistics';
export * from './icons/niche/veterinary-pets';
export * from './icons/niche/weather-nature';
