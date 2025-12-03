import { type SbBlokData, storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'

import { SimpleCarousel } from '@/components/ui/SimpleCarousel'
import type { CarouselType } from '@/types/types.storyblok.generated'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface CarouselProps {
  blok: CarouselType
}

export default function CarouselBlock({ blok }: CarouselProps) {
  return (
    <article className="w-full 2xl:max-w-4xl" {...storyblokEditable(blok as SbBlokData)}>
      <SimpleCarousel
        slidesCount={blok.carousel_items.length}
        actionButton={
          <Button variant={'secondary'}>
            <Link href={blok.cta_link.url}>{blok.cta_label}</Link>
          </Button>
        }
      >
        {blok.carousel_items.map((nestedBlok) => (
          <div key={nestedBlok._uid} className="min-w-full">
            <StoryblokServerComponent blok={nestedBlok} />
          </div>
        ))}
      </SimpleCarousel>
    </article>
  )
}
