import Image from 'next/image'

import { storyblokEditable } from '@storyblok/react/rsc'

export default function TextCard({ blok }: any) {
  return (
    <div className="flex flex-col gap-2 text-[#09151C]" {...storyblokEditable(blok)}>
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-[#D3EBEA] p-1">
          <Image
            width={12}
            height={9}
            className="h-4 w-4"
            src={blok.icon.filename}
            alt={blok.icon.alt || blok.heading}
          />
        </div>
        <h3 className="w-max text-lg leading-7 font-semibold">{blok.heading}</h3>
      </div>
      <p className="text-sm">{blok.description}</p>
    </div>
  )
}
