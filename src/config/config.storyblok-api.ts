import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import CarouselBlock from '@/components/blocks/CarouselBlock'
import TextBlock from '@/components/blocks/TextBlock'
import TextCardBlock from '@/components/blocks/TextCardBlock'
import HomePage from '@/components/pages/HomePage'
import CarouselSection from '@/components/sections/CarouselSection'
import TextCardsSection from '@/components/sections/TextCardsSection'
import CarouselItemBlock from '@/components/blocks/CarouselItemBlock'

const pages = {
  home_page: HomePage,
}

const blocks = {
  text_card: TextCardBlock,
  text_block: TextBlock,
  carousel: CarouselBlock,
  carousel_item: CarouselItemBlock,
}

const sections = {
  text_cards_section: TextCardsSection,
  carousel_section: CarouselSection,
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
