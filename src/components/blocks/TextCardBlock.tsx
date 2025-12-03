import Image from 'next/image'

import { type SbBlokData, storyblokEditable } from '@storyblok/react/rsc'
import type { TextCardType } from '@/types/types.storyblok.generated'

interface TextCardProps {
  blok: TextCardType
}

export default function TextCardBlock({ blok }: TextCardProps) {
  return (
    <div className="flex flex-col gap-2" {...storyblokEditable(blok as SbBlokData)}>
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-[#D3EBEA] p-1 dark:bg-[#25d4ce]">
          <Image
            width={12}
            height={9}
            className="h-4 w-4"
            src={blok.icon.filename ?? ''}
            alt={blok.icon.alt ?? blok.heading}
          />
        </div>
        <h3 className="w-max text-lg leading-7 font-semibold">{blok.heading}</h3>
      </div>
      <p className="text-sm">{blok.description}</p>
    </div>
  )
}
