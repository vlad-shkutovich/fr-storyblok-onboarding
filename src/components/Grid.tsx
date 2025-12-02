import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'

export default function Grid({ blok }: any) {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}
