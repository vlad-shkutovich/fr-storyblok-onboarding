import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import HomePage from '@/components/HomePage'
import TextCard from '@/components/TextCard'
import TextCardsSection from '@/components/TextCardsSection'

const pages = {
  home_page: HomePage,
}

const blocks = {
  text_card: TextCard,
  text_cards_section: TextCardsSection,
}

export const setupStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components: { ...pages, ...blocks },
  bridge: true,
})
