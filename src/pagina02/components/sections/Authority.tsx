import { AnimatedSection } from '../ui/AnimatedSection'

const creds = [
  { label: 'Médicos com formação especializada em saúde masculina' },
  { label: 'Protocolos validados por medicina baseada em evidências' },
  { label: 'Privacidade dos dados garantida por criptografia' },
  { label: 'Teleconsulta com CRM ativo e registro de consulta' },
  { label: 'Reavaliações periódicas para ajuste do protocolo' },
]

function CheckIcon() {
  return (
    <svg className="authority-cred__icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Authority() {
  return (
    <section className="section section--alt" id="autoridade" data-navbar-theme="light">
      <div className="container authority-section">
        <AnimatedSection direction="left">
          <div>
            <div className="section-label">
              <span className="section-label__line" />
              <span className="mono-sm text-muted">Método</span>
            </div>
            <div className="section-title" style={{ marginBottom: 'var(--space-8)' }}>
              <h2 className="section-title__heading h2">
                Medicina de precisão com acompanhamento real.
              </h2>
            </div>
            <blockquote className="quote" style={{ marginBottom: 'var(--space-8)' }}>
              "Cada protocolo é construído a partir de dados, não de suposições."
            </blockquote>
            <p className="body-md text-muted" style={{ maxWidth: '40ch' }}>
              Sábio na medicina. Governante na experiência. Nossos pacientes recebem clareza clínica
              e um processo estruturado — sem atalhos, sem promessas vazias.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2}>
          <div>
            <div className="section-label">
              <span className="section-label__line" />
              <span className="mono-sm text-muted">Credenciais</span>
            </div>
            <div className="authority-creds">
              {creds.map((c) => (
                <div key={c.label} className="authority-cred">
                  <CheckIcon />
                  <span className="authority-cred__label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
