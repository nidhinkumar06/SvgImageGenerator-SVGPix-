import Footer from '@/components/footer'
import HeroPrompt from '@/components/heroprompt'
import LandingHero from '@/components/landinghero'
import SampleSVG from '@/components/samplesvg'
import Image from 'next/image'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F8F8F8]">
      <LandingHero />
      <HeroPrompt />
      <SampleSVG />
      {/* FAQ's */}
      <Footer />
      <Toaster theme='dark' />
    </main>
  )
}
