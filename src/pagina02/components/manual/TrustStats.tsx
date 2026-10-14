const stats = [
  { num: '+2.000', label: 'homens atendidos' },
  { num: '100%', label: 'online, da consulta ao acompanhamento' },
  { num: '4.9 ★', label: 'nota média de satisfação' },
]

export function TrustStats() {
  return (
    <section className="mn-wrap mn-stats" data-navbar-theme="light">
      <div className="mn-stats__card">
        {stats.map((s) => (
          <div key={s.label} className="mn-stats__item">
            <span className="mn-stats__num">{s.num}</span>
            <span className="mn-stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
