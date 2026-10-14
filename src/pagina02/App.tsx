import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { TopBar } from './components/manual/TopBar'
import { HeroCard } from './components/manual/HeroCard'
import { TrustStats } from './components/manual/TrustStats'
import { CostTable } from './components/manual/CostTable'
import { ResultsCarousel } from './components/manual/ResultsCarousel'
import { HowTimeline } from './components/manual/HowTimeline'
import { VideoCta } from './components/manual/VideoCta'
import { Compare } from './components/manual/Compare'
import { BannerCta } from './components/manual/BannerCta'
import { Evidence } from './components/manual/Evidence'
import { Science } from './components/manual/Science'
import { About } from './components/manual/About'
import { FaqSafety } from './components/manual/FaqSafety'
import { FinalCta } from './components/manual/FinalCta'
import { StickyBar } from './components/manual/StickyBar'
import { useEffect } from 'react'
import { forwardQuizParams } from './lib/quiz'

// Cópia de trabalho da página principal, servida em /pagina02.
// Estrutura baseada na página da Manual, com a identidade visual do Viriatum.
export function App() {
  useEffect(() => forwardQuizParams(), [])

  return (
    <>
      <Navbar />
      <TopBar />
      <main className="mn-page">
        <HeroCard />
        <TrustStats />
        <CostTable />
        <ResultsCarousel />
        <HowTimeline />
        <VideoCta />
        <Compare />
        <BannerCta />
        <Evidence />
        <Science />
        <About />
        <FaqSafety />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
    </>
  )
}
