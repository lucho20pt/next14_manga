import { Hero } from '@/components/hero'
import { AnimeCard } from '@/components/anime'
import { data } from '@/app/lib/placeholder-data'

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center max-w-6xl mx-auto px-2 gap-20">
      <Hero />
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((el, i) => (
          <AnimeCard key={el.id} anime={el} index={i} />
        ))}
      </section>
    </main>
  )
}
