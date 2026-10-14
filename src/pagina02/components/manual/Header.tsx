import { useEffect, useState } from 'react'
import { QUIZ_URL } from '../../lib/quiz'
import { Lock, Shield } from './icons'

// Três propostas de cabeçalho em teste. Escolha via ?header=a|b|c
export type HeaderVariant = 'a' | 'b' | 'c'

const LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '/tratamentos', label: 'Tratamentos' },
]

export function getHeaderVariant(): HeaderVariant {
  const v = new URLSearchParams(window.location.search).get('header')
  return v === 'b' || v === 'c' ? v : 'a'
}

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

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="mn-head__logo-link" aria-label="Instituto Viriatum — página principal">
      <img src="/logo-horizontal.svg" alt="Instituto Viriatum" className={`mn-head__logo${light ? ' mn-head__logo--light' : ''}`} />
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

/* A — estilo Manual: barra branca, logo centralizada, faixa de anúncio marrom */
function HeaderA({ scrolled }: { scrolled: boolean }) {
  return (
    <header className={`mn-head mn-head--a${scrolled ? ' is-scrolled' : ''}`}>
      <div className="mn-head__bar">
        <nav className="mn-head__side">
          {LINKS.slice(0, 2).map((l) => <a key={l.href} href={l.href} className="mn-head__link">{l.label}</a>)}
        </nav>
        <Logo />
        <div className="mn-head__side mn-head__side--right">
          {LINKS.slice(2).map((l) => <a key={l.href} href={l.href} className="mn-head__link">{l.label}</a>)}
          <Cta />
        </div>
      </div>
      <div className="mn-head__announce">
        <Lock className="mn-head__announce-icon" />
        <span><strong>Avaliação online e 100% sigilosa</strong> — comece agora em poucos minutos</span>
      </div>
    </header>
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

/* C — marrom profundo, integrado ao hero, com selo de confiança */
function HeaderC({ scrolled }: { scrolled: boolean }) {
  return (
    <header className={`mn-head mn-head--c${scrolled ? ' is-scrolled' : ''}`}>
      <div className="mn-head__strip">
        <span>★ 4.9 de satisfação</span>
        <span className="mn-head__dot" aria-hidden="true" />
        <span>+4.000 homens atendidos</span>
        <span className="mn-head__dot" aria-hidden="true" />
        <span>Atendimento 100% online e sigiloso</span>
      </div>
      <div className="mn-head__bar">
        <Logo light />
        <nav className="mn-head__center">
          {LINKS.map((l) => <a key={l.href} href={l.href} className="mn-head__link">{l.label}</a>)}
        </nav>
        <Cta />
      </div>
    </header>
  )
}

export function Header({ variant }: { variant: HeaderVariant }) {
  const scrolled = useScrolled()
  if (variant === 'b') return <HeaderB scrolled={scrolled} />
  if (variant === 'c') return <HeaderC scrolled={scrolled} />
  return <HeaderA scrolled={scrolled} />
}

/* Seletor visível só quando a URL tem ?header= (para comparar as opções) */
export function HeaderSwitcher({ variant }: { variant: HeaderVariant }) {
  if (!new URLSearchParams(window.location.search).has('header')) return null
  const go = (v: HeaderVariant) => {
    const p = new URLSearchParams(window.location.search)
    p.set('header', v)
    window.location.search = p.toString()
  }
  return (
    <div className="mn-switch" role="group" aria-label="Opções de cabeçalho">
      <span>Cabeçalho</span>
      {(['a', 'b', 'c'] as const).map((v) => (
        <button key={v} onClick={() => go(v)} className={v === variant ? 'is-on' : ''}>{v.toUpperCase()}</button>
      ))}
    </div>
  )
}
