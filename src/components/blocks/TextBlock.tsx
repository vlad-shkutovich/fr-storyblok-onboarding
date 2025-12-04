import type { TextBlockType } from '@/types/types.storyblok.generated'
import { type SbBlokData, storyblokEditable } from '@storyblok/react/rsc'

interface TextBlockProps {
  blok: TextBlockType
}

export default function TextBlock({ blok }: TextBlockProps) {
  return (
    <div className="space-y-0.5" {...storyblokEditable(blok as SbBlokData)}>
      <h4 className="text-4xl leading-12 md:text-[40px]">{blok.headline}</h4>
      <p className="text-sm">{blok.description}</p>
    </div>
  )
}
