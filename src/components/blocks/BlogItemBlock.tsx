import type { BlogItemType } from '@/types/types.storyblok.generated'
import { type SbBlokData, storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'
import Image from 'next/image'
import { render } from 'storyblok-rich-text-react-renderer'

interface BlogItemProps {
  blok: BlogItemType
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogItemBlock({ blok }: BlogItemProps) {
  return (
    <div {...storyblokEditable(blok as SbBlokData)} className="group h-full">
      <div className="flex h-full flex-col rounded-lg">
        <div className="relative aspect-39/22 overflow-hidden rounded-lg group-first:aspect-27/16">
          <Image
            src={blok.image?.filename ?? ''}
            alt={blok.image?.alt ?? ''}
            width={648}
            height={384}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            {typeof blok.category !== 'string' && (
              <StoryblokServerComponent blok={blok.category.content} />
            )}
            <p className="text-secondary-foreground text-sm">{formatDate(blok.publish_date)}</p>
          </div>
          <h3 className="text-base leading-5 font-light md:group-first:text-xl md:group-first:leading-7 lg:group-first:text-2xl lg:group-first:leading-8">
            {blok.title}
          </h3>
          <span className="text-secondary-foreground hidden text-sm md:group-first:block">
            {render(blok.excerpt)}
          </span>
        </div>
      </div>
    </div>
  )
}
