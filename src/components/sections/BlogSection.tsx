import {
  renderRichText,
  type SbBlokData,
  storyblokEditable,
  StoryblokServerComponent,
  type StoryblokRichTextNode,
} from '@storyblok/react/rsc'

import type { BlogSectionType } from '@/types/types.storyblok.generated'

interface BlogSectionProps {
  blok: BlogSectionType
}

// TODO: Fix this component
export default function BlogSection({ blok }: BlogSectionProps) {
  return (
    <section
      className="flex flex-col px-4 py-6 md:items-center md:p-8 xl:px-15 xl:py-12"
      {...storyblokEditable(blok as SbBlokData)}
    >
      <div className="flex w-full max-w-330 flex-col justify-between gap-10 2xl:flex-row">
        {renderRichText(blok.heading as StoryblokRichTextNode)}

        <p>{blok.cta_label}</p>
        <p>{blok.cta_link.url}</p>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between lg:gap-8 2xl:flex-col 2xl:justify-start">
          {blok.blog_items?.map((item) => {
            if (typeof item === 'string') return null

            return <StoryblokServerComponent blok={item.content} key={item.uuid} />
          })}
        </div>
      </div>
    </section>
  )
}
