import { getStoryblokApi } from '@/lib/getStoryblokApi'
import { StoryblokStory } from '@storyblok/react/rsc'

export default async function Page({ params }: any) {
  const { slug } = await params

  const fullSlug = slug ? slug.join('/') : 'home'

  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: 'draft',
  })

  return <StoryblokStory story={data.story} />
}
