import type { ReactNode } from 'react'

import StoryblokProvider from '@/providers/StoryblokProvider'

export default function Providers({ children }: { children: ReactNode }) {
  return <StoryblokProvider>{children}</StoryblokProvider>
}
