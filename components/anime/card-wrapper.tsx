import Image from 'next/image'
import { AnimeCard, AnimeCardProps } from '@/components/anime'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'

interface CardWrapperProps {
  anime: AnimeCardProps
  index: number
}

export const CardWrapper = ({ anime, index }: CardWrapperProps) => {
  return (
    <Card className="hover:bg-sky-500/10 shadow-lg shadow-cyan-500/20">
      <CardHeader>
        <CardTitle>{anime.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          key={anime.id}
          alt={anime.name}
          src={`https://shikimori.one${anime.image.original}`}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </CardContent>
      <CardFooter>
        <span>{anime.score}</span>
      </CardFooter>
    </Card>
  )
}
