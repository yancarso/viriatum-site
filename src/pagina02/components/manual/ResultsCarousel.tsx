import { useRef } from 'react'
import { Arrow } from './icons'
import { QUIZ_URL } from '../../lib/quiz'

const testimonials = [
  { tag: 'Protocolo individual', quote: 'Havia tentado outras abordagens sem resultado. Aqui recebi uma avaliação séria e um plano que faz sentido para o meu caso, sem promessas exageradas.', name: 'M.R., 42 anos' },
  { tag: 'Teleconsulta', quote: 'O processo é completamente discreto. Nenhum constrangimento, só clareza médica e acompanhamento de verdade. Exatamente o que eu precisava.', name: 'F.L., 38 anos' },
  { tag: 'Acompanhamento', quote: 'Voltei a me sentir com energia e confiança. O protocolo foi ajustado ao longo do tempo conforme minha evolução, isso fez toda a diferença.', name: 'C.A., 51 anos' },
  { tag: 'Protocolo individual', quote: 'Finalmente um médico que me ouviu de verdade. O diagnóstico foi preciso e o tratamento trouxe resultados que eu já não acreditava serem possíveis.', name: 'R.S., 47 anos' },
  { tag: 'Teleconsulta', quote: 'A telemedicina facilitou tudo. Consulta rápida, discreta e com acompanhamento real. Não precisei sair de casa para resolver algo que me incomodava há anos.', name: 'T.M., 35 anos' },
]

export function ResultsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section className="mn-results" id="depoimentos" data-navbar-theme="dark">
      <div className="mn-results__panel">
        <span className="mn-eyebrow mn-eyebrow--gold">Depoimentos</span>
        <h2 className="mn-h2 mn-h2--gold">Veja o que nossos pacientes dizem</h2>

        <div className="mn-results__track" ref={trackRef}>
          {testimonials.map((t) => (
            <article key={t.name} className="mn-results__card">
              <span className="mn-results__stars" aria-label="5 estrelas">★★★★★</span>
              <span className="mn-results__tag">{t.tag}</span>
              <p className="mn-results__quote">{t.quote}</p>
              <footer className="mn-results__footer">
                <strong>{t.name}</strong>
                <span>Paciente Viriatum</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="mn-results__nav">
          <button onClick={() => scroll(-1)} aria-label="Anterior" className="mn-results__arrow mn-results__arrow--prev"><Arrow /></button>
          <button onClick={() => scroll(1)} aria-label="Próximo" className="mn-results__arrow"><Arrow /></button>
        </div>

        <div className="mn-results__bottom">
          <p className="mn-fine mn-fine--light">Os resultados são individuais e podem variar de acordo com cada organismo.</p>
          <a href={QUIZ_URL} id="cta-depoimentos" className="mn-btn mn-btn--gold">Quero recuperar minha confiança</a>
        </div>
      </div>
    </section>
  )
}
