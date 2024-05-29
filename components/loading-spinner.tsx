'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { AnimeCard, AnimeCardProps } from '@/components/anime'
import { fetchAnime } from '@/app/lib/actions'

export const LodingSpinner = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<AnimeCardProps[]>([])
  const [page, setPage] = useState(3)

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData((prevData) => [...prevData, ...res])
        setPage((prevPage) => prevPage + 1)
      })
    }
  }, [inView, page])

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeCardProps, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>

      <aside ref={ref} className="">
        <Image
          alt=""
          src="/assets/spinner.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-20"
        />
      </aside>
    </>
  )
}
