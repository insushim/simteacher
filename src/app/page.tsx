import { HeroSection } from '@/components/home/HeroSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}
