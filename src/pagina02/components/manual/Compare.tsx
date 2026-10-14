import { AnimatedSection } from '../ui/AnimatedSection'
import { Check, Cross } from './icons'

type Item = { ok: boolean; text: string }

const pharmacy: Item[] = [
  { ok: false, text: 'Sem avaliação médica' },
  { ok: false, text: 'Não saber se a medicação é segura para você' },
  { ok: false, text: 'Causas de base ignoradas' },
  { ok: false, text: 'Sem suporte em caso de efeito colateral' },
  { ok: true, text: 'Disponível rapidamente' },
]

const viriatum: Item[] = [
  { ok: true, text: 'Consulta com médico especialista' },
  { ok: true, text: 'Protocolo individualizado para o seu caso' },
  { ok: true, text: 'Investigação das causas, não só do sintoma' },
  { ok: true, text: 'Acompanhamento contínuo pelo WhatsApp' },
  { ok: true, text: 'Atendimento 100% online e sigiloso' },
  { ok: true, text: 'Médico com CRM ativo' },
]

const office: Item[] = [
  { ok: true, text: 'Avaliação médica presencial' },
  { ok: false, text: 'Espera por consulta (semanas)' },
  { ok: false, text: 'Exposição na sala de espera' },
  { ok: false, text: 'Sem suporte contínuo incluso' },
  { ok: false, text: 'Deslocamento a cada retorno' },
]

function List({ items }: { items: Item[] }) {
  return (
    <ul className="mn-compare__list">
      {items.map((it) => (
        <li key={it.text} className={it.ok ? 'is-ok' : 'is-no'}>
          {it.ok ? <Check /> : <Cross />}
          {it.text}
        </li>
      ))}
    </ul>
  )
}

export function Compare() {
  return (
    <section className="mn-wrap mn-compare" data-navbar-theme="light">
      <AnimatedSection className="mn-compare__col">
        <span className="mn-compare__kicker">Farmácia</span>
        <h3 className="mn-compare__title">Comprar por conta própria</h3>
        <List items={pharmacy} />
      </AnimatedSection>

      <AnimatedSection className="mn-compare__col mn-compare__col--main" delay={0.1}>
        <span className="mn-compare__badge">Recomendado</span>
        <img src="/logo-horizontal.svg" alt="Instituto Viriatum" className="mn-compare__logo" />
        <span className="mn-compare__kicker mn-compare__kicker--gold">sem sair de casa</span>
        <List items={viriatum} />
        <a href="#triagem" id="cta-comparativo" className="mn-btn mn-btn--gold mn-btn--block">Iniciar minha avaliação</a>
      </AnimatedSection>

      <AnimatedSection className="mn-compare__col" delay={0.2}>
        <span className="mn-compare__kicker">Consultório</span>
        <h3 className="mn-compare__title">Consulta presencial tradicional</h3>
        <List items={office} />
      </AnimatedSection>
    </section>
  )
}
