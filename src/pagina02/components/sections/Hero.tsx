import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { createCaptacaoHandler } from '../../lib/captacao'

const FORM_ID = 'e7e33513-2927-4de5-b0ed-57a385f675c7'
const FORM_NAME = 'Form 01 - Hero'
const FORM_SRC = `https://www.escritoriovtm.com/captacao/${FORM_ID}?embed=1`

function CaptacaoForm({ className = '' }: { className?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleMessage = createCaptacaoHandler({
      formId: FORM_ID,
      formName: FORM_NAME,
      iframe: iframeRef.current,
    })
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={FORM_SRC}
      title={FORM_NAME}
      scrolling="no"
      loading="lazy"
      className={`hero-captacao-iframe ${className}`}
    />
  )
}

export function Hero() {
  return (
    <section className="hero-v2" id="inicio" data-navbar-theme="dark">
      {/* Glow decorativo — lado esquerdo */}
      <div className="hero-v2__glow" aria-hidden="true" />

      {/* ── Painel esquerdo: headline ── */}
      <div className="hero-v2__left">
        <div className="hero-v2__headline-block">
          <motion.h1
            className="hero-v2__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Seu desempenho sexual está{' '}
            <u>afetando sua vida?</u>
          </motion.h1>

          <motion.p
            className="hero-v2__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Consulta médica online, protocolo individualizado e acompanhamento real. Nossa equipe agenda tudo para você.
          </motion.p>

          {/* Form visível apenas no mobile */}
          <CaptacaoForm className="hero-form-card--mobile" />
        </div>
      </div>

      {/* ── Painel direito: foto do médico + form na base ── */}
      <div className="hero-v2__right">
        <img
          className="hero-v2__bg-photo"
          src="/doctor.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-v2__right-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-form-card--desktop-wrapper"
          >
            {/* Form visível apenas no desktop */}
            <CaptacaoForm className="hero-form-card--desktop" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
