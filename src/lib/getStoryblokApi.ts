import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import Feature from '@/components/Feature'
import Grid from '@/components/Grid'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
  },
  bridge: true,
})
