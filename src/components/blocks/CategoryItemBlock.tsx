import type { CaterogyItemType } from '@/types/types.storyblok.generated'
import { type SbBlokData, storyblokEditable } from '@storyblok/react/rsc'

interface CategoryItemProps {
  blok: CaterogyItemType
}

// TODO: Fix this component
export default function CategoryItemBlock({ blok }: CategoryItemProps) {
  return (
    <p className="text-secondary px-2 py-1 text-xs" {...storyblokEditable(blok as SbBlokData)}>
      {blok.name}
    </p>
  )
}
