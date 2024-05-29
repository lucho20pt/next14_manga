'use server'

const baseApi: string = 'https://shikimori.one/api'

export const fetchAnime = async () => {
  const response = await fetch(
    `${baseApi}/animes?page=${1}&limit=${8}&order=${'popularity'}`
  )
  const data = await response.json()
  return data
}
