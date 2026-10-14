import { AnimatedSection } from '../ui/AnimatedSection'

const creds = [
  'CRM 60877/PR — registro ativo no Conselho Regional de Medicina',
  'Mais de 10 anos dedicados à saúde masculina',
  'Atendimento 100% online com total discrição',
  'Protocolos baseados em evidências clínicas',
  'Acompanhamento contínuo após a consulta',
]

function CheckIcon() {
  return (
    <svg
      className="doctor-v2__cred-icon"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Doctor() {
  return (
    <section className="doctor-v2" id="medico" data-navbar-theme="dark">
      {/* Metade esquerda — conteúdo */}
      <AnimatedSection className="doctor-v2__content" direction="left">
        <div className="doctor-v2__inner">
          <span className="label-tag">— O MÉDICO</span>

          <h2 className="doctor-v2__title">
            Dr. Fábio A. de Andrade
          </h2>
          <p className="doctor-v2__subtitle">
            Médico com foco em saúde sexual masculina
          </p>

          <p className="doctor-v2__bio">
            O Dr. Fábio acredita que cada homem merece uma avaliação individual,
            baseada em ciência e livre de julgamentos. Com mais de uma década dedicada
            à saúde masculina, construiu um método que une rigor clínico, escuta ativa
            e total discrição — do primeiro contato até o acompanhamento contínuo.
          </p>

          <div className="doctor-v2__creds">
            {creds.map((c) => (
              <div key={c} className="doctor-v2__cred">
                <CheckIcon />
                <span className="doctor-v2__cred-label">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Metade direita — imagem */}
      <div className="doctor-v2__media">
        <img src="/doctor-section.webp" alt="Dr. Fábio A. de Andrade" className="doctor-v2__photo" />
      </div>
    </section>
  )
}
