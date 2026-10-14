import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'

const pains = [
  {
    num: '01',
    text: 'Você percebeu uma queda no desempenho e não sabe por onde começar — e as buscas online só aumentam a confusão.',
  },
  {
    num: '02',
    text: 'Já pesquisou sobre o assunto mas encontrou informações contraditórias, sem saber em que confiar.',
  },
  {
    num: '03',
    text: 'Prefere um acompanhamento médico discreto, sem precisar de consultas presenciais nem exposição desnecessária.',
  },
]

export function PainPoints() {
  return (
    <section className="pain-v2" id="situacao" data-navbar-theme="dark">
      <div className="pain-v2__inner">

        {/* Header */}
        <AnimatedSection className="pain-v2__header">
          <span className="pain-v2__label-tag">— RECONHECE ESTA SITUAÇÃO?</span>
          <h2 className="pain-v2__title">
            A maioria dos homens enfrenta esses desafios em silêncio.
          </h2>
          <p className="pain-v2__subtitle">
            Aqui, você encontra clareza médica, sem julgamento.
          </p>
        </AnimatedSection>

        {/* Cards + testimonial */}
        <div className="pain-v2__cards">
          <StaggerContainer className="pain-v2__grid" staggerDelay={0.12}>
            {pains.map((p) => (
              <StaggerItem key={p.num}>
                <div className="pain-v2__card">
                  <span className="pain-v2__card-num">{p.num}</span>
                  <p className="pain-v2__card-text">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Testimonial card */}
          <AnimatedSection delay={0.2}>
            <div className="pain-v2__testimonial">
              <div className="pain-v2__testimonial-avatar" aria-hidden="true">
                <img src="/avatar-testimonial.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
              </div>
              <div className="pain-v2__testimonial-content">
                <blockquote className="pain-v2__testimonial-quote">
                  "Havia tentado outras abordagens sem resultado consistente. No Instituto Viriatum,
                  recebi uma avaliação séria, um plano baseado em evidências e acompanhamento real.
                  Em três meses, minha vida mudou."
                </blockquote>
                <div className="pain-v2__testimonial-byline">
                  <cite className="pain-v2__testimonial-author">Marcos R., 42 anos — paciente desde 2023</cite>
                  <p className="pain-v2__testimonial-consent">
                    Depoimento de paciente que concordou em se identificar.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
