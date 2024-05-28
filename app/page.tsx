import Image from 'next/image'
import { Hero } from '@/components/hero/index'

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center max-w-5xl mx-auto">
      <Hero></Hero>
      <a href="http://">link</a>
    </main>
  )
}
