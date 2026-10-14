import { useEffect, useRef } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { createCaptacaoHandler } from '../../lib/captacao'

const DEFAULT_FORM_ID = 'e7e33513-2927-4de5-b0ed-57a385f675c7'

interface LeadFormProps {
  formId?: string
  redirectTo?: string
}

const stats = [
  { value: '+500', label: 'Pacientes atendidos' },
  { value: '10', label: 'Anos de experiencia' },
  { value: '24h', label: 'Resposta medica' },
]

export function LeadForm({ formId = DEFAULT_FORM_ID, redirectTo }: LeadFormProps = {}) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const formSrc = `https://www.escritoriovtm.com/captacao/${formId}?embed=1`

  useEffect(() => {
    const handleMessage = createCaptacaoHandler({
      formId,
      formName: 'Form 2 - embaixo',
      iframe: iframeRef.current,
      redirectTo,
    })
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [formId, redirectTo])

  return (
    <section className="lf" id="triagem" data-navbar-theme="light">
      <div className="lf__inner">

        {/* Coluna esquerda */}
        <AnimatedSection className="lf__left" direction="left">
          <span className="label-tag">— AGENDE SUA CONSULTA</span>

          <h2 className="lf__title">
            Preencha seus dados. Nossa equipe agenda sua consulta.
          </h2>

          <p className="lf__sub">
            Sem triagem, sem burocracia. Deixe seu contato e um de
            nossos especialistas vai te chamar para agendar com discrição.
          </p>

          <div className="lf__stats">
            {stats.map((s) => (
              <div key={s.label} className="lf__stat">
                <span className="lf__stat-value">{s.value}</span>
                <span className="lf__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Card imagem */}
          <div className="lf__image-card" aria-hidden="true">
            <div className="lf__image-ph">
              <img src="/lf-image-card.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </div>
            <div className="lf__image-footer">
              <span className="lf__image-quote">"Ciencia impecavel.<br />Discrição impecavel."</span>
              <span className="lf__image-attr">Instituto Viriatum</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Coluna direita — formulário iframe */}
        <AnimatedSection className="lf__form-wrap" direction="right">
          <iframe
            ref={iframeRef}
            src={formSrc}
            title="Form 2 - embaixo"
            scrolling="no"
            loading="lazy"
            className="lf__form-iframe"
          />
        </AnimatedSection>

      </div>
    </section>
  )
}
