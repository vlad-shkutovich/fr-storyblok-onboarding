import { StoryblokServerComponent } from '@storyblok/react/rsc'

export default function Page({ blok }: any) {
  return (
    <main className="flex flex-col items-center bg-white px-4 py-6 md:p-8 xl:px-15 xl:py-12">
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
