import { AnimatedSection } from '../ui/AnimatedSection'
import { Arrow, Check, Stethoscope, Box } from './icons'
import { QUIZ_URL } from '../../lib/quiz'

const included = [
  'Consulta online com médico especialista',
  'Protocolo individualizado para o seu caso',
  'Acompanhamento contínuo com a equipe',
]

export function About() {
  return (
    <section className="mn-wrap mn-about" id="sobre" data-navbar-theme="light">
      <AnimatedSection>
        <span className="mn-eyebrow">Sobre o Instituto Viriatum</span>
        <h2 className="mn-display mn-display--sm">Cuidado completo e descomplicado</h2>
        <p className="mn-sub mn-about__text">
          Nós cuidamos de tudo para que você possa se tratar com tranquilidade. No Viriatum, você é atendido
          pelo Dr. Fábio A. de Andrade (CRM 60877/PR), com mais de 10 anos dedicados à saúde masculina,
          e conta com uma equipe que acompanha sua evolução de perto.
        </p>
      </AnimatedSection>

      <h3 className="mn-about__plans-title">Como podemos te ajudar</h3>

      <AnimatedSection className="mn-plan mn-plan--main">
        <img src="/header.webp" alt="Dr. Fábio A. de Andrade em consulta" className="mn-plan__img" />
        <div className="mn-plan__body">
          <h4 className="mn-plan__title">Cuidado Completo</h4>
          <p className="mn-plan__desc">Consulta médica, protocolo individualizado e acompanhamento contínuo.</p>
          <span className="mn-plan__inc">Está incluso</span>
          <ul className="mn-plan__list">
            {included.map((i) => <li key={i}><Check />{i}</li>)}
          </ul>
          <a href={QUIZ_URL} id="cta-plano" className="mn-btn mn-btn--gold">Iniciar avaliação</a>
        </div>
      </AnimatedSection>

      <div className="mn-plan__row">
        <AnimatedSection className="mn-plan mn-plan--small">
          <div>
            <h4 className="mn-plan__title">Conheça o médico</h4>
            <p className="mn-plan__desc">Dr. Fábio A. de Andrade — foco em saúde sexual masculina, atendimento baseado em evidências e livre de julgamentos.</p>
          </div>
          <span className="mn-plan__badge"><Stethoscope /></span>
        </AnimatedSection>
        <AnimatedSection className="mn-plan mn-plan--small" delay={0.1}>
          <div>
            <h4 className="mn-plan__title">Tratamentos</h4>
            <p className="mn-plan__desc">Conheça as opções de tratamento disponíveis e entenda qual combina com o seu caso.</p>
            <a href="/tratamentos" id="link-tratamentos" className="mn-plan__link">Ver tratamentos <Arrow /></a>
          </div>
          <span className="mn-plan__badge"><Box /></span>
        </AnimatedSection>
      </div>
    </section>
  )
}
