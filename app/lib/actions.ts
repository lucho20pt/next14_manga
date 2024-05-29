'use server'

const baseApi: string = 'https://shikimori.one/api'

export const fetchAnime = async (
  page: number,
  limit: number = 4,
  order: string = 'popularity'
) => {
  const response = await fetch(
    `${baseApi}/animes?page=${page}&limit=${limit}&order=${order}`
  )
  const data = await response.json()
  return data
}
