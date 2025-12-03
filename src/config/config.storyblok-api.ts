import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import Carousel from '@/components/blocks/Carousel'
import TextBlock from '@/components/blocks/TextBlock'
import TextCard from '@/components/blocks/TextCard'
import HomePage from '@/components/pages/HomePage'
import CarouselSection from '@/components/sections/CarouselSection'
import TextCardsSection from '@/components/sections/TextCardsSection'
import CarouselItem from '@/components/blocks/CarouselItem'

const pages = {
  home_page: HomePage,
}

const blocks = {
  text_card: TextCard,
  text_block: TextBlock,
  carousel: Carousel,
  carousel_item: CarouselItem,
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
