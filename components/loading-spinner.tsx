'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { AnimeCard } from '@/components/anime'
import { fetchAnime } from '@/app/lib/actions'

export type AnimeCard = JSX.Element

export const LodingSpinner = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<AnimeCard[]>([])
  const [page, setPage] = useState(2)

  useEffect(() => {
    if (inView) {
      fetchAnime(page, 4).then((res) => {
        setData((prevData) => [...prevData, res])
        setPage((prevPage) => prevPage + 1)
      })
    }
  }, [inView, page])

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>

      <aside ref={ref}>
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
