import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import Page from '@/components/Page'
import TextCard from '@/components/TextCard'
import TextCardsSection from '@/components/TextCardsSection'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components: {
    text_card: TextCard,
    text_cards_section: TextCardsSection,
    page: Page,
  },
  bridge: true,
})
