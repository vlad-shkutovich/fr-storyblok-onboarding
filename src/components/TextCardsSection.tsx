import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'

export default function TextCardsSection({ blok }: any) {
  return (
    <section
      className="grid max-w-330 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      {...storyblokEditable(blok)}
    >
      {blok.cards?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  )
}
