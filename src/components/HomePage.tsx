import { StoryblokServerComponent } from '@storyblok/react/rsc'

import type { HomePageType } from '@/types/types.storyblok.generated'

interface HomePageProps {
  blok: HomePageType
}

export default function HomePage({ blok }: HomePageProps) {
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
