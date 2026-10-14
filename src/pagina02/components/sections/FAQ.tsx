import { useState } from 'react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'
import { motion, AnimatePresence } from 'motion/react'

const faqs = [
  {
    q: 'Como funciona a teleconsulta?',
    a: 'Você agenda pelo sistema, realiza a consulta por vídeo no horário escolhido e recebe o protocolo digitalmente. Sem deslocamentos, sem filas, sem exposição desnecessária.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Todos os dados são protegidos com criptografia e jamais compartilhados com terceiros sem sua autorização expressa. Usamos nomenclatura neutra em todos os contatos.',
  },
  {
    q: 'Quanto tempo leva para ver resultados?',
    a: 'Varia conforme o caso. Na avaliação inicial, o médico estabelece expectativas realistas com base no seu quadro específico. Não prometemos resultados instantâneos.',
  },
  {
    q: 'Preciso de exames para começar?',
    a: 'Não necessariamente. A triagem inicial orienta sobre os próximos passos, incluindo se exames são indicados para o seu caso e quais são necessários.',
  },
  {
    q: 'O tratamento é entregue em casa?',
    a: 'Sim, quando aplicável, com embalagem discreta e remetente neutro. Sem identificação externa do conteúdo, sem branding visível.',
  },
  {
    q: 'É possível cancelar o acompanhamento a qualquer momento?',
    a: 'Sim. Você decide com informação e mantém controle total sobre o processo. Não existem contratos de fidelidade ou cobranças indevidas.',
  },
]

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="faq-item">
      <button className="faq-item__trigger" onClick={() => setOpen(!open)}>
        <span className="faq-item__question">{q}</span>
        <svg
          className={`faq-item__icon${open ? ' faq-item__icon--open' : ''}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="10" y1="4" x2="10" y2="16" strokeLinecap="round" />
          <line x1="4" y1="10" x2="16" y2="10" strokeLinecap="round" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-item__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="section" id="faq" data-navbar-theme="dark">
      <div className="faq-v2">
        <div className="faq-v2__left">
          <span className="label-tag">— DÚVIDAS FREQUENTES</span>
          <h2 className="faq-v2__title">
            Respostas honestas<br />para dúvidas reais.
          </h2>
          <div className="faq-v2__cta">
            <p className="faq-v2__cta-sub">Ainda tem dúvidas? Nossa equipe responde com clareza e discrição.</p>
            <a id="cta-faq-triagem" href="#triagem" className="btn btn--outline faq-v2__cta-btn">Falar com a equipe</a>
          </div>
        </div>

        <AnimatedSection className="faq-v2__right" direction="right" delay={0.1}>
          <StaggerContainer staggerDelay={0.07}>
            {faqs.map((f, i) => (
              <StaggerItem key={f.q}>
                <FaqItem q={f.q} a={f.a} defaultOpen={i === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  )
}
