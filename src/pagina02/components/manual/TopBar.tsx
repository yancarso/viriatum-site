import { Lock } from './icons'

// Faixa fixa logo abaixo da navbar (na Manual é o contador de desconto).
export function TopBar() {
  return (
    <div className="mn-topbar">
      <Lock className="mn-topbar__icon" />
      <span>Atendimento 100% online e sigiloso</span>
      <span className="mn-topbar__sep" aria-hidden="true">◆</span>
      <span>Retorno da equipe em até 24h</span>
    </div>
  )
}
