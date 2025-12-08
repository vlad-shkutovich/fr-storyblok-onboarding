import type { CaterogyItemType } from '@/types/types.storyblok.generated'
import { type SbBlokData, storyblokEditable } from '@storyblok/react/rsc'

interface CategoryItemProps {
  blok: CaterogyItemType
}

export default function CategoryItemBlock({ blok }: CategoryItemProps) {
  return (
    <p
      className="text-secondary-foreground w-max rounded-xl border border-solid px-4 py-2 text-xs"
      {...storyblokEditable(blok as SbBlokData)}
    >
      {blok.name}
    </p>
  )
}
