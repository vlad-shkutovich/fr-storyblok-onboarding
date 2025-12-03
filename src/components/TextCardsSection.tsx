import { type SbBlokData, storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'

import type { TextCardsSectionType } from '@/types/types.storyblok.generated'

interface TextCardsSectionProps {
  blok: TextCardsSectionType
}

export default function TextCardsSection({ blok }: TextCardsSectionProps) {
  return (
    <section
      className="flex flex-col items-center bg-white px-4 py-6 md:p-8 xl:px-15 xl:py-12"
      {...storyblokEditable(blok as SbBlokData)}
    >
      <div className="grid max-w-330 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {blok.cards?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  )
}
