import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Header } from '@/components/hero/header'
import { Slider } from '@/components/hero/slider'

interface HeroWrapperProps {
  headerTitle: string
  headerSubTitle?: string
  banner: string[]
}

export function HeroWrapper({
  headerTitle,
  headerSubTitle,
  banner,
}: HeroWrapperProps) {
  return (
    <Card className="flex flex-col-reverse md:flex-row items-center overflow-hidden md:rounded-e-full border-0 md:border">
      <CardHeader className="w-full items-center">
        <Header title={headerTitle} subtitle={headerSubTitle} />
      </CardHeader>
      <CardContent className="w-full p-0">
        <Slider title={headerTitle} source={banner} />
      </CardContent>
    </Card>
  )
}
