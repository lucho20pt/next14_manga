// import { data } from '@/app/lib/placeholder-data'
import { fetchAnime } from '@/app/lib/actions'

import { Hero } from '@/components/hero'
import { AnimeCard, AnimeCardProps } from '@/components/anime'
import { LodingSpinner } from '@/components/loading-spinner'

export default async function Home() {
  const data = await fetchAnime(1, 8, 'popularity')

  return (
    <main className="flex h-full flex-col items-center max-w-6xl mx-auto px-2 gap-20">
      <Hero />
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeCardProps, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LodingSpinner />
    </main>
  )
}
