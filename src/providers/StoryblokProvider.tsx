import { type ReactNode } from 'react'

import { setupStoryblokApi } from '@/config/config.storyblok-api'

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  setupStoryblokApi()
  return children
}
