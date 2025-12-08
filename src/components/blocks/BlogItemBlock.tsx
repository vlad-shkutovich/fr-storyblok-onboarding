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
    <div {...storyblokEditable(blok as SbBlokData)} className="group">
      <div className="flex min-h-77 flex-col rounded-lg">
        <Image
          src={blok.image?.filename ?? ''}
          alt={blok.image?.alt ?? ''}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            {typeof blok.category !== 'string' && (
              <StoryblokServerComponent blok={blok.category.content} />
            )}
            <p className="text-secondary-foreground text-sm">{formatDate(blok.publish_date)}</p>
          </div>
          <h3 className="text-2xl leading-8 font-light group-[:not(:first-child)]:text-base group-[:not(:first-child)]:leading-5">
            {blok.title}
          </h3>
          <span className="text-secondary-foreground text-sm group-[:not(:first-child)]:hidden">
            {render(blok.excerpt)}
          </span>
        </div>
      </div>
    </div>
  )
}
