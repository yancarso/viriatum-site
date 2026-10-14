import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'
import { Zap, Heart, FlaskConical, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Disfunção Erétil',
    desc: 'Avaliação criteriosa e tratamento com protocolos baseados em evidências clínicas.',
    tag: 'MAIS PROCURADO',
    featured: true,
    icon: Zap,
  },
  {
    title: 'Saúde Sexual',
    desc: 'Abordagem completa do bem-estar sexual masculino — aspectos físicos, hormonais e psicológicos.',
    tag: null,
    featured: false,
    icon: Heart,
  },
  {
    title: 'Reposição Hormonal',
    desc: 'Protocolos individualizados com monitoramento contínuo e indicação criteriosa.',
    tag: null,
    featured: false,
    icon: FlaskConical,
  },
  {
    title: 'Bem-Estar Geral',
    desc: 'Cuidado preventivo focado na qualidade de vida masculina e saúde cardiovascular.',
    tag: null,
    featured: false,
    icon: ShieldCheck,
  },
]

export function Services() {
  return (
    <section className="services-v2" id="tratamentos" data-navbar-theme="dark">
      {/* Glow de fundo */}
      <div className="services-v2__glow" aria-hidden="true" />

      <div className="services-v2__inner">
        {/* Header: texto + imagem */}
        <AnimatedSection className="services-v2__header">
          <div className="services-v2__header-text">
            <span className="services-v2__label">— TRATAMENTOS</span>
            <h2 className="services-v2__title">
              Protocolos médicos<br />
              para cada situação.
            </h2>
            <p className="services-v2__subtitle">
              Cada caso é avaliado individualmente. Não existe protocolo
              genérico no Instituto Viriatum.
            </p>
          </div>

          {/* Imagem placeholder — usuário substitui pela foto real */}
          <div className="services-v2__header-image">
            <img
              src="/header.webp"
              alt=""
              aria-hidden="true"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </AnimatedSection>

        {/* Grade de 4 cards */}
        <StaggerContainer className="services-v2__grid" staggerDelay={0.1}>
          {services.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className={`service-v2-card${s.featured ? ' service-v2-card--featured' : ''}`}>
                <div className="service-v2-card__top">
                  <div className="service-v2-card__header-row">
                    <div className="service-v2-card__dot" aria-hidden="true">
                      <s.icon size={18} strokeWidth={1.5} />
                    </div>
                    {s.tag && (
                      <span className="service-v2-card__tag">{s.tag}</span>
                    )}
                  </div>
                  <h3 className="service-v2-card__title">{s.title}</h3>
                  <p className="service-v2-card__desc">{s.desc}</p>
                </div>
                <a id={`cta-service-${i + 1}-triagem`} href="#triagem" className="service-v2-card__btn">
                  INICIAR TRIAGEM
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
