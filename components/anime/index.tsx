import { CardWrapper } from '@/components/anime/card-wrapper'

export interface AnimeCardProps {
  id: string
  name: string
  image: { original: string }
  kind: string
  episodes: number
  episodes_aired: number
  score: string
}

interface Props {
  anime: AnimeCardProps
  index: number
}

export const AnimeCard = ({ anime, index }: Props) => {
  return <CardWrapper anime={anime} index={index} />
}
