import { Footer } from './components/layout/Footer'
import { Header } from './components/manual/Header'
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

// Página principal (servida em /). Estrutura baseada na página da Manual,
// com a identidade visual do Viriatum. A home antiga fica em /pagina02 (legado.html).
export function App() {
  useEffect(() => forwardQuizParams(), [])

  return (
    <>
      <Header />
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
