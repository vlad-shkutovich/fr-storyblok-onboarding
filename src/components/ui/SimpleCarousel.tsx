'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { type ReactNode, useEffect, useState, type PropsWithChildren } from 'react'

interface SimpleCarouselProps {
  slidesCount: number
  actionButton: ReactNode
}

export function SimpleCarousel({
  slidesCount,
  children,
  actionButton,
}: PropsWithChildren<SimpleCarouselProps>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      <div className="flex justify-between gap-4">
        <div className="bg-secondary flex items-center gap-2 rounded-2xl px-3 py-2.5">
          {Array.from({ length: slidesCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                selectedIndex === i ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {actionButton}
      </div>
    </div>
  )
}
