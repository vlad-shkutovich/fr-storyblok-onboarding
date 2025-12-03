import { type SbBlokData, storyblokEditable } from '@storyblok/react/rsc'

import type { CarouselItemType } from '@/types/types.storyblok.generated'

interface CarouselItemProps {
  blok: CarouselItemType
}

export default function CarouselItemBlock({ blok }: CarouselItemProps) {
  return <div {...storyblokEditable(blok as SbBlokData)}>{blok.quote}</div>
}
