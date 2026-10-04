'use client';

import { Button, Hero } from '@syntara/react';
import { IconArrowRight } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

/*
 * variant="gallery": your pictures on a slowly turning wall between the headline and the description.
 * Sample pictures: Unsplash License (free to use, commercial use included), credited anyway — Sebastian Svenson,
 * Milad Fakurian, SIMON LEE, Dynamic Wang, Enis Can Ceyhan, Alexander Park, Marcel Strauß, mymind.
 */
const IMAGES = [
  { src: '/hero-gallery/01-floating-cubes-and-glowing-yello.webp' },
  { src: '/hero-gallery/02-pastel-spheres-on-gradient.webp' },
  { src: '/hero-gallery/03-blue-layered-waves.webp' },
  { src: '/hero-gallery/04-spiral-of-dark-blue-blades.webp' },
  { src: '/hero-gallery/05-metallic-cubes-blue-and-purple.webp' },
  { src: '/hero-gallery/07-spiral-of-colourful-discs.webp' },
  { src: '/hero-gallery/08-floating-cube.webp' },
  { src: '/hero-gallery/09-flower-with-a-rainbow.webp' },
  { src: '/hero-gallery/10-3d-purple-flower.webp' },
  { src: '/hero-gallery/12-orange-orb-on-blue.webp' },
];

export default function Example() {
  const t = useCopy();
  return (
    <Hero
      variant="gallery"
      images={IMAGES}
      headingLevel={2}
      title={t('Every idea, one canvas')}
      description={t('Collect references, sketch with your team and ship the version everyone agreed on.')}
      actions={
        <Button size="lg">
          {t('Start a board')}
          <IconArrowRight aria-hidden />
        </Button>
      }
      style={{ inlineSize: '100%' }}
    />
  );
}
