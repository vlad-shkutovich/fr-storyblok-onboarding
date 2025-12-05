import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import BlogItemBlock from '@/components/blocks/BlogItemBlock'
import CarouselBlock from '@/components/blocks/CarouselBlock'
import CarouselItemBlock from '@/components/blocks/CarouselItemBlock'
import CategoryItemBlock from '@/components/blocks/CategoryItemBlock'
import TextBlock from '@/components/blocks/TextBlock'
import TextCardBlock from '@/components/blocks/TextCardBlock'
import HomePage from '@/components/pages/HomePage'
import BlogSection from '@/components/sections/BlogSection'
import CarouselSection from '@/components/sections/CarouselSection'
import TextCardsSection from '@/components/sections/TextCardsSection'

const pages = {
  home_page: HomePage,
}

const blocks = {
  text_card: TextCardBlock,
  text_block: TextBlock,
  carousel: CarouselBlock,
  carousel_item: CarouselItemBlock,
  category_item: CategoryItemBlock,
  blog_item: BlogItemBlock,
}

const sections = {
  text_cards_section: TextCardsSection,
  carousel_section: CarouselSection,
  blog_section: BlogSection,
}

export const setupStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components: { ...pages, ...blocks, ...sections },
  bridge: true,
})
