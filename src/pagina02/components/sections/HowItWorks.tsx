import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'

const steps = [
  {
    num: '01',
    title: 'Preencha seus dados de contato',
    desc: 'Um formulário simples com seu nome e WhatsApp. Rápido, discreto, sem exposição.',
  },
  {
    num: '02',
    title: 'Nossa equipe entra em contato',
    desc: 'Um de nossos especialistas vai te ligar para agendar sua consulta no melhor horário.',
  },
  {
    num: '03',
    title: 'Consulta médica online com discrição',
    desc: 'Avaliação individual com o médico, protocolo personalizado e acompanhamento contínuo.',
  },
]

export function HowItWorks() {
  return (
    <section className="hiw-v2" id="como-funciona" data-navbar-theme="light">
      {/* Metade esquerda — mídia */}
      <div className="hiw-v2__media">
        <video
          className="hiw-v2__video"
          src="/mans.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hiw-v2__media-overlay" aria-hidden="true" />
      </div>

      {/* Metade direita — conteúdo */}
      <div className="hiw-v2__content">
        <AnimatedSection className="hiw-v2__headline" direction="right">
          <span className="hiw-v2__label-tag">— PROCESSO</span>
          <h2 className="hiw-v2__title">
            Preencha seus dados.<br />A gente agenda tudo.
          </h2>
          <p className="hiw-v2__subtitle">
            Você não precisa resolver isso sozinho.<br />
            Nossa equipe cuida do agendamento com discrição total.
          </p>
        </AnimatedSection>

        <StaggerContainer className="hiw-v2__steps" staggerDelay={0.12}>
          {steps.map((s) => (
            <StaggerItem key={s.num}>
              <div className="hiw-v2__step">
                <span className="hiw-v2__step-num">{s.num}</span>
                <div className="hiw-v2__step-body">
                  <h3 className="hiw-v2__step-title">{s.title}</h3>
                  <p className="hiw-v2__step-desc">{s.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
