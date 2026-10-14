import { AnimatedSection } from '../ui/AnimatedSection'
import { Heart, Pulse, Search } from './icons'
import { QUIZ_URL } from '../../lib/quiz'

const steps = [
  { icon: <Pulse />, title: 'Fluxo comprometido', text: 'Vasos, hormônios ou ansiedade' },
  { icon: <Search />, title: 'Causa investigada', text: 'Na consulta com o médico' },
  { icon: <Heart />, title: 'Tratamento direcionado', text: 'A função volta a responder' },
]

export function Science() {
  return (
    <section className="mn-wrap mn-science mn-band-2" data-navbar-theme="light">
      <AnimatedSection>
        <span className="mn-eyebrow">A ciência por trás</span>
        <h2 className="mn-h2">Disfunção erétil não é fraqueza. É fisiologia.</h2>
        <p className="mn-sub">
          A ereção depende de circulação, hormônios e sistema nervoso funcionando juntos. Quando algo falha,
          o corpo dá o sinal — e na maioria dos casos existe uma causa tratável.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mn-science__panel" delay={0.1}>
        {steps.map((s) => (
          <div key={s.title} className="mn-science__step">
            <span className="mn-science__icon">{s.icon}</span>
            <strong>{s.title}</strong>
            <span className="mn-science__rule" aria-hidden="true" />
            <span>{s.text}</span>
          </div>
        ))}
      </AnimatedSection>

      <p className="mn-sub mn-center-text">Quanto mais cedo você trata, mais simples tende a ser o caminho.</p>
      <div className="mn-center">
        <a href={QUIZ_URL} id="cta-ciencia" className="mn-btn mn-btn--gold">Quero começar meu tratamento</a>
      </div>
    </section>
  )
}
