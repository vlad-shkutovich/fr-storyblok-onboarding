import { storyblokEditable, StoryblokServerComponent, type SbBlokData } from '@storyblok/react/rsc'
import { render } from 'storyblok-rich-text-react-renderer'

import { Button } from '@/components/ui/Button'
import type { BlogSectionType } from '@/types/types.storyblok.generated'
import { ArrowRight } from 'lucide-react'

interface BlogSectionProps {
  blok: BlogSectionType
}

export default function BlogSection({ blok }: BlogSectionProps) {
  return (
    <section
      className="flex flex-col px-4 py-6 md:items-center md:p-8 xl:px-15 xl:py-12"
      {...storyblokEditable(blok as SbBlokData)}
    >
      <div className="flex w-full max-w-330 flex-col justify-between gap-10">
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          {render(blok.heading)}

          <Button className="w-full md:w-auto">
            {blok.cta_label}
            <ArrowRight />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:*:first:col-span-2 lg:grid-cols-4 lg:*:first:col-span-2 lg:*:first:row-span-2">
          {blok.blog_items?.map((item) => {
            if (typeof item === 'string') return null

            return <StoryblokServerComponent blok={item.content} key={item.uuid} />
          })}
        </div>
      </div>
    </section>
  )
}
