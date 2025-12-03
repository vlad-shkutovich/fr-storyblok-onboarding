import { type SbBlokData, storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'

import type { CarouselSectionType } from '@/types/types.storyblok.generated'

interface CarouselSectionProps {
  blok: CarouselSectionType
}

export default function CarouselSection({ blok }: CarouselSectionProps) {
  return (
    <section {...storyblokEditable(blok as SbBlokData)}>
      {blok.text_blocks.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <StoryblokServerComponent blok={blok.carousel[0]} />
    </section>
  )
}
