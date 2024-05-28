'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface SliderProps {
  title: string
  source: string[]
}

export const Slider = ({ title, source }: SliderProps) => {
  const plugin = useRef(Autoplay({ delay: 4000 }))
  const item = source.map((path, i) => (
    <Image
      key={i}
      alt={title}
      width={800}
      height={800}
      src={path}
      objectFit="contain"
    />
  ))

  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      plugins={[plugin.current]}
      className="h-auto md:h-96 p-0 overflow-hidden rounded-t-full md:rounded-t-none"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>{item}</CarouselContent>
    </Carousel>
  )
}
