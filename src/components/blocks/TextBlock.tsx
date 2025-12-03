import type { TextBlockType } from '@/types/types.storyblok.generated'
import { type SbBlokData, storyblokEditable } from '@storyblok/react/rsc'

interface TextBlockProps {
  blok: TextBlockType
}

export default function TextBlock({ blok }: TextBlockProps) {
  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      {blok.headline}
      {blok.description}
    </div>
  )
}
