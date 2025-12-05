import type { BlogItemType } from '@/types/types.storyblok.generated'
import {
  renderRichText,
  type SbBlokData,
  storyblokEditable,
  type StoryblokRichTextNode,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'
import Image from 'next/image'

interface BlogItemProps {
  blok: BlogItemType
}

// TODO: Fix this component
export default function BlogItemBlock({ blok }: BlogItemProps) {
  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      <div className="bg-secondary flex min-h-[420px] w-full flex-col rounded-lg md:flex-row">
        <Image
          src={blok.image?.filename ?? ''}
          alt={blok.image?.alt ?? ''}
          width={500}
          height={500}
        />
        <div className="flex flex-col">
          {typeof blok.category !== 'string' && (
            <StoryblokServerComponent blok={blok.category.content} />
          )}
          <h3 className="text-2xl leading-8 font-light">{blok.title}</h3>
          <p className="text-secondary text-sm">{blok.publish_date}</p>
          <p className="text-secondary text-sm">
            {renderRichText(blok.excerpt as StoryblokRichTextNode)}
          </p>
        </div>
      </div>
    </div>
  )
}
