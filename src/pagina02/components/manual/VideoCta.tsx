import { QUIZ_URL } from '../../lib/quiz'
import { Check } from './icons'

const points = [
  'Perguntas simples, uma por vez',
  'Leva poucos minutos, direto do celular',
  'Respostas 100% confidenciais',
]

// Demonstração do quiz em um celular (na Manual: "Responda nosso questionário...").
export function VideoCta() {
  return (
    <section className="mn-wrap mn-videocta" data-navbar-theme="light">
      <div className="mn-videocta__text">
        <span className="mn-eyebrow">Avaliação online</span>
        <h2 className="mn-h2">Responda o questionário em poucos minutos.</h2>
        <ul className="mn-videocta__points">
          {points.map((p) => <li key={p}><Check />{p}</li>)}
        </ul>
        <a href={QUIZ_URL} id="cta-video" className="mn-btn mn-btn--gold">Começar agora</a>
      </div>
      <div className="mn-phone">
        <div className="mn-phone__screen">
          <video
            className="mn-phone__video"
            src="/media/quiz-demo.mp4"
            poster="/media/quiz-demo-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Demonstração do questionário de avaliação"
          />
        </div>
      </div>
    </section>
  )
}
