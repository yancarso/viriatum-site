import { Check } from './icons'
import { QUIZ_URL } from '../../lib/quiz'

export function FinalCta() {
  return (
    <section className="mn-wrap mn-final" data-navbar-theme="dark">
      <div className="mn-final__card">
        <span className="mn-final__eyebrow">Comece agora</span>
        <p className="mn-final__kicker">Cada mês adiado é um mês a mais convivendo com o problema.</p>
        <h2 className="mn-final__title">Comece hoje sua avaliação com o Dr. Fábio</h2>
        <a href={QUIZ_URL} id="cta-final" className="mn-btn mn-btn--gold">Começar avaliação</a>
        <div className="mn-final__checks">
          <span><Check />Médico com CRM ativo</span>
          <span><Check />100% online</span>
          <span><Check />Sigilo absoluto</span>
        </div>
      </div>
    </section>
  )
}
