import { AnimatedSection } from '../ui/AnimatedSection'
import { QUIZ_URL } from '../../lib/quiz'

export function Evidence() {
  return (
    <section className="mn-wrap mn-evidence" data-navbar-theme="light">
      <AnimatedSection className="mn-evidence__intro">
        A disfunção erétil é comum, estudada há décadas e tem tratamento.
      </AnimatedSection>

      <div className="mn-evidence__grid">
        <AnimatedSection className="mn-evidence__card">
          <span className="mn-evidence__kicker">Segundo estudo clínico de referência</span>
          <span className="mn-evidence__big">52%</span>
          <p className="mn-evidence__text">dos homens entre 40 e 70 anos têm algum grau de disfunção erétil.¹</p>
        </AnimatedSection>

        <AnimatedSection className="mn-evidence__card" delay={0.1}>
          <span className="mn-evidence__kicker">Entre nossos pacientes</span>
          <span className="mn-evidence__big">98%</span>
          <p className="mn-evidence__text">relatam melhora clínica com o acompanhamento.</p>
        </AnimatedSection>
      </div>

      <div className="mn-center">
        <a href={QUIZ_URL} id="cta-evidencias" className="mn-btn mn-btn--gold">Começar meu tratamento</a>
      </div>
      <p className="mn-fine mn-center-text">
        ¹ Feldman HA, et al. Impotence and its medical and psychosocial correlates: results of the Massachusetts Male Aging Study. J Urol. 1994;151(1):54-61.
      </p>
    </section>
  )
}
