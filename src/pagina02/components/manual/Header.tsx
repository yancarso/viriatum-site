import { useEffect, useState } from 'react'
import { QUIZ_URL } from '../../lib/quiz'
import { Shield } from './icons'

// Cabeçalho flutuante em vidro (opção B escolhida).

const LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '/tratamentos', label: 'Tratamentos' },
]

function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return scrolled
}

function Logo() {
  return (
    <a href="/" className="mn-head__logo-link" aria-label="Instituto Viriatum — página principal">
      <img src="/logo-horizontal.svg" alt="Instituto Viriatum" className="mn-head__logo" />
    </a>
  )
}

function Cta() {
  return (
    <a href={QUIZ_URL} id="nav-cta-quiz" className="mn-head__cta">
      Iniciar avaliação
    </a>
  )
}

/* B — barra flutuante em vidro, arredondada */
function HeaderB({ scrolled }: { scrolled: boolean }) {
  return (
    <header className={`mn-head mn-head--b${scrolled ? ' is-scrolled' : ''}`}>
      <div className="mn-head__pill">
        <Logo />
        <nav className="mn-head__center">
          {LINKS.map((l) => <a key={l.href} href={l.href} className="mn-head__link">{l.label}</a>)}
        </nav>
        <div className="mn-head__right">
          <span className="mn-head__trust"><Shield />Sigiloso</span>
          <Cta />
        </div>
      </div>
    </header>
  )
}

export function Header() {
  const scrolled = useScrolled()
  return <HeaderB scrolled={scrolled} />
}
