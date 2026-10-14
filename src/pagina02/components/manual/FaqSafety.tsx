import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Chevron, WhatsApp } from './icons'

const WHATSAPP_URL = 'https://wa.me/5511946128600'

const faqs = [
  { q: 'Como funciona a teleconsulta?', a: 'Você preenche seus dados, nossa equipe entra em contato para agendar e a consulta acontece por vídeo no horário escolhido. Você recebe o protocolo digitalmente — sem deslocamentos, filas ou exposição.' },
  { q: 'Meus dados ficam seguros?', a: 'Sim. Todos os dados são protegidos com criptografia e jamais compartilhados com terceiros sem sua autorização expressa. Usamos nomenclatura neutra em todos os contatos.' },
  { q: 'Quanto tempo leva para ver resultados?', a: 'Varia conforme o caso. Na avaliação inicial, o médico estabelece expectativas realistas com base no seu quadro específico. Não prometemos resultados instantâneos.' },
  { q: 'Preciso de exames para começar?', a: 'Não necessariamente. A consulta orienta os próximos passos, incluindo se exames são indicados para o seu caso e quais são necessários.' },
  { q: 'O tratamento é entregue em casa?', a: 'Sim, quando aplicável, com embalagem discreta e remetente neutro. Sem identificação externa do conteúdo.' },
  { q: 'Posso cancelar o acompanhamento quando quiser?', a: 'Sim. Você decide com informação e mantém controle total sobre o processo. Não existem contratos de fidelidade.' },
]

function Item({ n, q, a }: { n: number; q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mn-faq__item">
      <button className="mn-faq__q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{n}. {q}</span>
        <Chevron className={`mn-faq__chev${open ? ' is-open' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            className="mn-faq__a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSafety() {
  return (
    <section className="mn-wrap mn-faq mn-band-2" id="duvidas" data-navbar-theme="light">
      <div className="mn-faq__left">
        <span className="mn-eyebrow">Perguntas frequentes</span>
        <h2 className="mn-h2">Ficou alguma dúvida?</h2>
        {faqs.map((f, i) => <Item key={f.q} n={i + 1} q={f.q} a={f.a} />)}
      </div>
      <aside className="mn-faq__safety">
        <span className="mn-faq__safety-rule" aria-hidden="true" />
        <h3>Segurança e transparência em primeiro lugar</h3>
        <p>
          Todo atendimento no Instituto Viriatum é feito por médico com registro ativo no Conselho Regional
          de Medicina (CRM 60877/PR). Nenhum tratamento é indicado sem avaliação individual, e seus dados
          são tratados com sigilo médico e conforme a LGPD.
        </p>
        <a href="/politica-de-privacidade" className="mn-faq__safety-link">Política de privacidade ›</a>
        <a
          href={WHATSAPP_URL}
          id="cta-whatsapp"
          className="mn-btn mn-btn--whats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
          Falar no WhatsApp
        </a>
        <span className="mn-faq__safety-num">+55 (11) 94612-8600</span>
      </aside>
    </section>
  )
}
