import { type SbBlokData, storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'

import type { CarouselType } from '@/types/types.storyblok.generated'

interface CarouselProps {
  blok: CarouselType
}

export default function CarouselBlock({ blok }: CarouselProps) {
  return (
    <article {...storyblokEditable(blok as SbBlokData)}>
      <div>
        {blok.carousel_items.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>

      <a href={blok.cta_link.target}>{blok.cta_label}</a>
    </article>
  )
}
