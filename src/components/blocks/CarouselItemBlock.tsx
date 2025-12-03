import { Button } from '@/components/ui/Button'
import type { CarouselItemType } from '@/types/types.storyblok.generated'
import { type SbBlokData, storyblokEditable } from '@storyblok/react/rsc'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface CarouselItemProps {
  blok: CarouselItemType
}

export default function CarouselItemBlock({ blok }: CarouselItemProps) {
  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      className="bg-secondary flex min-h-[420px] w-full flex-col rounded-lg md:flex-row"
    >
      <div className="order-2 flex flex-col justify-between gap-y-8 p-8 md:order-1">
        <div className="space-y-6">
          <h3 className="text-2xl leading-8 font-light">{blok.quote}</h3>

          <p className="text-primary text-sm">{blok.category}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-primary hidden max-w-xs text-base md:block">{blok.footer_text}</p>

          {blok.cta_link?.url && (
            <Button className="w-full md:w-auto">
              {blok.cta_label}
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>

      <div className="relative order-1 md:order-2 md:min-w-84">
        <Image
          src={blok.right_image_background?.filename ?? ''}
          alt={blok.right_image_background?.alt ?? ''}
          fill
          loading="eager"
          className="rounded-t-lg md:rounded-t-none md:rounded-r-lg"
        />

        <div className="relative z-10 flex h-full w-full flex-col items-center px-4">
          <Image
            src={blok.right_image?.filename ?? ''}
            alt={blok.right_image?.alt ?? ''}
            width={120}
            height={120}
            className="flex-1 self-center object-contain py-16"
          />

          <div className="border-foreground flex w-full gap-3 border-t-2 py-4">
            <Image
              src={blok.person_avatar?.filename ?? ''}
              alt={blok.person_avatar?.alt ?? ''}
              width={48}
              height={48}
              className="rounded-full"
            />

            <div>
              <p>{blok.person_name}</p>
              <p className="text-primary text-sm">{blok.person_role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
