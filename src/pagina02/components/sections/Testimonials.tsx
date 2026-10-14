const testimonials = [
  {
    quote: 'Havia tentado outras abordagens sem resultado. Aqui recebi uma avaliacao seria e um plano que faz sentido para o meu caso, sem promessas exageradas.',
    name: 'M.R., 42 anos',
  },
  {
    quote: 'O processo e completamente discreto. Nenhum constrangimento, so clareza medica e acompanhamento de verdade. Exatamente o que eu precisava.',
    name: 'F.L., 38 anos',
  },
  {
    quote: 'Voltei a me sentir com energia e confianca. O protocolo foi ajustado ao longo do tempo conforme minha evolucao, isso fez toda a diferenca.',
    name: 'C.A., 51 anos',
  },
  {
    quote: 'Finalmente um medico que me ouviu de verdade. O diagnostico foi preciso e o tratamento trouxe resultados que eu ja nao acreditava serem possiveis.',
    name: 'R.S., 47 anos',
  },
  {
    quote: 'A telemedicina facilitou tudo. Consulta rapida, discreta e com acompanhamento real. Nao precisei sair de casa para resolver algo que me incomodava ha anos.',
    name: 'T.M., 35 anos',
  },
]

const doubled = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section className="test-v4" id="depoimentos" data-navbar-theme="dark">

      <div className="test-v4__header">
        <span className="label-tag label-tag--gold">— DEPOIMENTOS</span>
        <h2 className="test-v4__title">
          Resultados que<br />falam por si.
        </h2>
      </div>

      <div className="test-v4__ticker-wrap">
        <div className="test-v4__ticker">
          {doubled.map((t, i) => (
            <div key={i} className="test-v4__card">
              <span className="test-v4__stars">★★★★★</span>
              <p className="test-v4__quote">"{t.quote}"</p>
              <span className="test-v4__name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
