import type { ReactElement } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Check, Heart, Pulse, Search, Shield, TrendDown, TrendUp } from './icons'
import { QUIZ_URL } from '../../lib/quiz'

type Row = {
  label: string
  without: { icon: ReactElement; text: string }
  with: { icon: ReactElement; text: string }
}

const rows: Row[] = [
  { label: 'Qualidade da ereção', without: { icon: <TrendDown />, text: 'Tende a piorar' }, with: { icon: <TrendUp />, text: 'Tratada e acompanhada' } },
  { label: 'Ansiedade de desempenho', without: { icon: <TrendUp />, text: 'Aumenta a cada episódio' }, with: { icon: <Shield />, text: 'Sob controle' } },
  { label: 'Relacionamento', without: { icon: <Heart />, text: 'Desgaste e afastamento' }, with: { icon: <Heart />, text: 'Mais leve e próximo' } },
  { label: 'Causas de base', without: { icon: <Search />, text: 'Ignoradas' }, with: { icon: <Pulse />, text: 'Investigadas pelo médico' } },
]

export function CostTable() {
  return (
    <section className="mn-wrap mn-cost" data-navbar-theme="light">
      <AnimatedSection>
        <h2 className="mn-h2">O custo real de não tratar</h2>
        <p className="mn-sub">A disfunção erétil raramente melhora sozinha. Veja o que muda quando você trata:</p>
      </AnimatedSection>

      <AnimatedSection className="mn-cost__table" delay={0.1}>
        <div className="mn-cost__row mn-cost__row--head">
          <span>Situação</span>
          <span>Sem tratamento</span>
          <span className="mn-cost__brand">Com o Viriatum</span>
        </div>
        {rows.map((r) => (
          <div key={r.label} className="mn-cost__row">
            <span className="mn-cost__label">{r.label}</span>
            <span className="mn-cost__cell mn-cost__cell--bad">{r.without.icon}{r.without.text}</span>
            <span className="mn-cost__cell mn-cost__cell--good">{r.with.icon}{r.with.text}</span>
          </div>
        ))}
      </AnimatedSection>

      <div className="mn-center">
        <a href={QUIZ_URL} id="cta-custo" className="mn-btn mn-btn--gold">Iniciar agora <Check className="mn-btn__icon" /></a>
      </div>
    </section>
  )
}
