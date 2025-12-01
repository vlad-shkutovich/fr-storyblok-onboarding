import { getStoryblokApi, StoryblokComponent } from '@storyblok/react'

export default async function Page({ params }: any) {
  const slug = params.slug ? params.slug.join('/') : 'home'

  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  })

  const story = data.story

  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  )
}
