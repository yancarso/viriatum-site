const items = [
  { num: '2.000+',  label: 'Homens atendidos em teleconsulta' },
  { num: '4.9 ★',   label: 'nota média de satisfação' },
  { num: '24h',     label: 'resposta após triagem' },
  { num: '100%',    label: 'teleconsulta — sem exposição' },
  { num: '10 anos', label: 'de experiência em saúde masculina' },
  { num: '98%',     label: 'de pacientes relatam melhora clínica' },
]

// Duplica para criar loop contínuo e seamless
const track = [...items, ...items, ...items]

export function StatsBar() {
  return (
    <div className="ticker-bar" aria-hidden="true">
      <div className="ticker-bar__track">
        {track.map((item, i) => (
          <span key={i} className="ticker-bar__group">
            <span className="ticker-bar__item">
              <span className="ticker-bar__num">{item.num}</span>
              <span className="ticker-bar__label">{item.label}</span>
            </span>
            <span className="ticker-bar__sep" aria-hidden="true">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
