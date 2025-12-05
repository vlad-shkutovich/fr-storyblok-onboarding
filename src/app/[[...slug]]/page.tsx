import { setupStoryblokApi } from '@/config/config.storyblok-api'
import { StoryblokStory } from '@storyblok/react/rsc'

export default async function Page({ params }: PageProps<'/[[...slug]]'>) {
  const { slug } = await params

  const fullSlug = slug ? slug.join('/') : 'home'

  const storyblokApi = setupStoryblokApi()
  const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: 'draft',
    resolve_relations: ['blog_section.blog_items', 'blog_item.category'].join(','),
  })

  return <StoryblokStory story={data.story} />
}
