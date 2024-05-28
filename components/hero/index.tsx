import { HeroWrapper } from '@/components/hero/hero-wrapper'

export const Hero = () => {
  return (
    <HeroWrapper
      headerTitle="Unleash Imagination:"
      headerSubTitle="Explore, Read, and Enjoy Our Extensive Manga Collection!"
      banner={[
        '/assets/hero/hero_01.jpg',
        '/assets/hero/hero_02.jpg',
        '/assets/hero/hero_03.jpg',
        '/assets/hero/hero_04.jpg',
      ]}
    />
  )
}
