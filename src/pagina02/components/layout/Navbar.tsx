import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const NAV_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/contato', label: 'Contato' },
  { href: '/tratamentos', label: 'Tratamentos' },
]

export function Navbar({ hideCta = false }: { hideCta?: boolean } = {}) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'

  useEffect(() => {
    const update = () => {
      const y = window.scrollY + 40
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-navbar-theme]')
      )
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) {
          setTheme(sections[i].dataset.navbarTheme as 'dark' | 'light')
          return
        }
      }
      setTheme('dark')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <motion.nav
      className={`navbar navbar--${theme}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <a
        id="nav-logo"
        className="navbar__logo-link"
        href="/"
        aria-label="Instituto Viriatum — página principal"
      >
        <img src="/logo-horizontal.svg" className="navbar__logo" alt="Instituto Viriatum" />
      </a>

      <div className="navbar__menu">
        {NAV_ITEMS.map((item) => {
          const isActive = currentPath === item.href
          const slug = item.href === '/' ? 'home' : item.href.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')
          return (
            <a
              key={item.href}
              id={`nav-link-${slug}`}
              href={item.href}
              className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          )
        })}
      </div>

      {!hideCta && (
        <div className="navbar__actions">
          <a id="nav-cta-triagem" href="#triagem" className="navbar__btn">
            INICIAR TRIAGEM
          </a>
        </div>
      )}
    </motion.nav>
  )
}
