import { useEffect, useState } from 'react'

// Barra fixa no rodapé da tela, aparece depois que o hero sai de vista.
export function StickyBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const update = () => setShow(window.scrollY > window.innerHeight * 0.7)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className={`mn-sticky${show ? ' mn-sticky--show' : ''}`}>
      <p className="mn-sticky__text">Trate a disfunção erétil com médico especialista, 100% online e com total discrição.</p>
      <a href="#triagem" id="cta-sticky" className="mn-btn mn-btn--gold mn-sticky__btn">Começar avaliação</a>
    </div>
  )
}
