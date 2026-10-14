import { QUIZ_URL } from '../../lib/quiz'
export function BannerCta() {
  return (
    <section className="mn-wrap mn-banner" data-navbar-theme="light">
      <div className="mn-banner__card">
        <img className="mn-banner__img" src="/lf-image-card.webp" alt="" aria-hidden="true" />
        <div className="mn-banner__shade" aria-hidden="true" />
        <div className="mn-banner__content">
          <h2 className="mn-banner__title">A disfunção erétil tem tratamento.<br />Dê o primeiro passo.</h2>
          <a href={QUIZ_URL} id="cta-banner" className="mn-btn mn-btn--gold">Quero minha confiança de volta</a>
        </div>
      </div>
    </section>
  )
}
