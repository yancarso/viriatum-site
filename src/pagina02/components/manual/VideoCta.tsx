import { useRef, useState } from 'react'

// Bloco de vídeo com botão de som + CTA (na Manual: "Responda nosso questionário...").
export function VideoCta() {
  const ref = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  return (
    <section className="mn-wrap mn-videocta" data-navbar-theme="light">
      <h2 className="mn-h2 mn-center-text">Preencha seus dados em menos de 1 minuto.</h2>
      <div className="mn-videocta__frame">
        <video ref={ref} className="mn-videocta__video" src="/couple.mp4" autoPlay muted={muted} loop playsInline />
        <button
          className="mn-sound"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? 'Ativar som' : 'Desativar som'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      </div>
      <div className="mn-center">
        <a href="#triagem" id="cta-video" className="mn-btn mn-btn--gold">Começar agora</a>
      </div>
    </section>
  )
}
