import { type SbBlokData, storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'

import type { CarouselSectionType } from '@/types/types.storyblok.generated'

interface CarouselSectionProps {
  blok: CarouselSectionType
}

export default function CarouselSection({ blok }: CarouselSectionProps) {
  return (
    <section
      className="flex flex-col px-4 py-6 md:items-center md:p-8 xl:px-15 xl:py-12"
      {...storyblokEditable(blok as SbBlokData)}
    >
      <div className="flex w-full max-w-330 flex-col justify-between gap-10 2xl:flex-row">
        <div className="flex flex-col justify-between gap-6 md:flex-row lg:gap-8 2xl:flex-col">
          {blok.text_blocks.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>

        {blok.carousel.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  )
}
