import { motion } from 'motion/react'
import { Check } from './icons'
import { QUIZ_URL } from '../../lib/quiz'

const bullets = [
  'Consulta com médico especialista, sem sair de casa',
  'Protocolo individualizado para o seu caso',
  'Acompanhamento contínuo e total discrição',
]

const ease = [0.25, 0.1, 0.25, 1] as const

export function HeroCard() {
  return (
    <section className="mn-hero" id="inicio" data-navbar-theme="light">
      <div className="mn-hero__card">
        <img className="mn-hero__photo" src="/doctor.webp" alt="" aria-hidden="true" />
        <div className="mn-hero__shade" aria-hidden="true" />
        <div className="mn-hero__content">
          <motion.h1
            className="mn-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            E se você pudesse voltar a <em>confiar</em> no seu desempenho?
          </motion.h1>
          <motion.p
            className="mn-hero__lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Mais de 2.000 homens já começaram.
          </motion.p>
          <motion.ul
            className="mn-hero__bullets"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            {bullets.map((b) => (
              <li key={b}><Check className="mn-hero__check" />{b}</li>
            ))}
          </motion.ul>
          <motion.a
            href={QUIZ_URL}
            id="cta-hero"
            className="mn-btn mn-btn--gold"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            Iniciar minha avaliação
          </motion.a>
        </div>
      </div>
    </section>
  )
}
