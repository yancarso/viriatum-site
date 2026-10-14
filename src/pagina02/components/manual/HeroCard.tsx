import { motion } from 'motion/react'
import { Check } from './icons'
import { QUIZ_URL } from '../../lib/quiz'

const bullets = [
  'Consulta com médico especialista, sem sair de casa',
  'Protocolo individualizado para o seu caso',
  'Acompanhamento contínuo e total discrição',
]

// Prévia da versão compacta no celular (botão na primeira dobra): ?hero=compacto
const bulletsShort = ['Médico especialista, 100% online', 'Tratamento individualizado', 'Sigilo total']
const compact = new URLSearchParams(window.location.search).get('hero') === 'compacto'

const ease = [0.25, 0.1, 0.25, 1] as const

export function HeroCard() {
  return (
    <section className={`mn-hero${compact ? ' mn-hero--compact' : ''}`} id="inicio" data-navbar-theme="light">
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
            Falta de ereção tem <em>solução</em> se tratada corretamente.
          </motion.h1>
          <motion.p
            className="mn-hero__lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Mais de 4.000 homens já começaram.
          </motion.p>
          <motion.ul
            className="mn-hero__bullets"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            {bullets.map((b, i) => (
              <li key={b}>
                <Check className="mn-hero__check" />
                {compact ? <><span className="mn-hero__long">{b}</span><span className="mn-hero__short">{bulletsShort[i]}</span></> : b}
              </li>
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
