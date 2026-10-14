import { useState } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Chat, Phone, Shield, Stethoscope } from './icons'

const steps = [
  { icon: <Phone />, label: 'Triagem\nonline' },
  { icon: <Stethoscope />, label: 'Consulta\nmédica' },
  { icon: <Shield />, label: 'Protocolo\ndiscreto' },
  { icon: <Chat />, label: 'Suporte\ncontínuo' },
]

const phases = [
  { tag: 'Primeiro contato', title: 'Triagem', text: 'Você responde um questionário rápido e sigiloso sobre seus sintomas e histórico. Leva poucos minutos.' },
  { tag: 'Semana 1', title: 'Consulta', text: 'Avaliação online com o médico: histórico, possíveis causas e, se necessário, pedido de exames. Sem julgamentos.' },
  { tag: 'Primeiras semanas', title: 'Início do protocolo', text: 'O tratamento é individualizado e começa de forma gradual. O médico acompanha como seu corpo responde.' },
  { tag: 'Mês 2 em diante', title: 'Ajustes e evolução', text: 'Com base no seu retorno, o protocolo é ajustado. O objetivo é resultado consistente, não um efeito pontual.' },
]

export function HowTimeline() {
  const [i, setI] = useState(0)
  const p = phases[i]

  return (
    <section className="mn-wrap mn-how" id="como-funciona" data-navbar-theme="light">
      <AnimatedSection className="mn-how__left" direction="left">
        <span className="mn-eyebrow">Como funciona</span>
        <h2 className="mn-display">Simples, discreto e online</h2>
        <p className="mn-sub">Responda um questionário rápido sobre o seu caso — nossa equipe cuida de todo o resto, sem você sair de casa.</p>
        <ol className="mn-how__steps">
          {steps.map((s, idx) => (
            <li key={s.label} className="mn-how__step">
              <span className="mn-how__icon">{s.icon}</span>
              <span className="mn-how__label">{s.label}</span>
              {idx < steps.length - 1 && <span className="mn-how__chev" aria-hidden="true">›</span>}
            </li>
          ))}
        </ol>
      </AnimatedSection>

      <AnimatedSection className="mn-how__right" direction="right">
        <span className="mn-eyebrow">O que esperar, sem ansiedade</span>
        <h3 className="mn-how__right-title">Cada etapa tem seu tempo. Veja o caminho real.</h3>
        <div className="mn-timeline">
          <video className="mn-timeline__media" src="/mans.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <div className="mn-timeline__bar">
            <span>Arraste e veja etapa por etapa</span>
            <strong>{i + 1}/{phases.length}</strong>
          </div>
          <input
            className="mn-timeline__range"
            type="range"
            min={0}
            max={phases.length - 1}
            step={1}
            value={i}
            onChange={(e) => setI(Number(e.target.value))}
            aria-label="Etapa do tratamento"
          />
          <div className="mn-timeline__phase">
            <strong>{p.title}</strong>
            <span className="mn-timeline__tag">{p.tag}</span>
          </div>
          <p className="mn-timeline__text">{p.text}</p>
        </div>
      </AnimatedSection>
    </section>
  )
}
