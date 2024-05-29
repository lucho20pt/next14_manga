// import { data } from '@/app/lib/placeholder-data'
import { fetchAnime } from '@/app/lib/actions'

import { Hero } from '@/components/hero'
import { LodingSpinner } from '@/components/loading-spinner'

export default async function Home() {
  const data = await fetchAnime(1, 8, 'popularity')

  return (
    <main className="flex h-full flex-col items-center max-w-6xl mx-auto gap-20">
      <Hero />
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LodingSpinner />
    </main>
  )
}
