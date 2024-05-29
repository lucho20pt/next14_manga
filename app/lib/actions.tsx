'use server'

import { AnimeCard, AnimeCardProps } from '@/components/anime'
import { MotionDiv } from '@/components/motion-div'

const baseApi: string = 'https://shikimori.one/api'

export const fetchAnime = async (
  page: number = 1,
  limit: number = 8,
  order: string = 'popularity'
) => {
  const response = await fetch(
    `${baseApi}/animes?page=${page}&limit=${limit}&order=${order}`
  )
  const data = await response.json()
  const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  return data.map((item: AnimeCardProps, index: number) => (
    <MotionDiv
      key={item.id}
      className="flex"
      variants={variants}
      initial={'hidden'}
      animate={'visible'}
      transition={{
        delay: index * 0.25,
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <AnimeCard anime={item} index={index} />
    </MotionDiv>
  ))
}
