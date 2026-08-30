import { IntroPanel } from '@/components/home/IntroPanel'
import { Catalog } from '@/components/home/Catalog'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <div className="relative min-h-screen pt-28 md:pt-32 pb-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="aurora-blob aurora-violet w-[460px] h-[460px] -top-24 left-[6%] opacity-70" />
        <div className="aurora-blob aurora-cyan w-[420px] h-[420px] top-[45%] -right-32 opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IntroPanel />
        <Catalog />
      </div>

      <CTASection />
    </div>
  )
}
