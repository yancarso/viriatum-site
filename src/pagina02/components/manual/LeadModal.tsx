import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { createCaptacaoHandler } from '../../lib/captacao'

const FORM_ID = 'e7e33513-2927-4de5-b0ed-57a385f675c7'
const FORM_NAME = 'Form 01 - Hero'
const FORM_SRC = `https://www.escritoriovtm.com/captacao/${FORM_ID}?embed=1`

// Qualquer link para #triagem (CTAs, navbar, rodapé) abre o modal com o formulário.
export function LeadModal() {
  const [open, setOpen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleMessage = createCaptacaoHandler({
      formId: FORM_ID,
      formName: FORM_NAME,
      iframe: iframeRef.current,
    })
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href="#triagem"]')
      if (!link) return
      e.preventDefault()
      setOpen(true)
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('message', handleMessage)
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('message', handleMessage)
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      {/* O iframe fica montado o tempo todo para o formulário já estar carregado ao abrir */}
      <div className={`mn-modal${open ? ' mn-modal--open' : ''}`} role="dialog" aria-modal="true" aria-label="Solicitar diagnóstico online" aria-hidden={!open}>
        <AnimatePresence>
          {open && (
            <motion.div
              className="mn-modal__backdrop"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <div className="mn-modal__panel">
          <button className="mn-modal__close" onClick={() => setOpen(false)} aria-label="Fechar">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
          <h2 className="mn-modal__title">Descubra o tratamento certo para você</h2>
          <p className="mn-modal__sub">Preencha seus dados e nossa equipe entra em contato para agendar sua consulta online.</p>
          <iframe
            ref={iframeRef}
            src={FORM_SRC}
            title={FORM_NAME}
            scrolling="no"
            className="mn-modal__iframe"
          />
          <button className="mn-modal__skip" onClick={() => setOpen(false)}>Continuar explorando</button>
        </div>
      </div>
    </>
  )
}
