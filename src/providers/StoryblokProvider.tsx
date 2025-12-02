import { type ReactNode } from 'react'

import { getStoryblokApi } from '@/lib/getStoryblokApi'

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  getStoryblokApi()
  return children
}
