// Helper compartilhado para os iframes de captação (www.escritoriovtm.com).
//
// O iframe envia mensagens via postMessage:
//   - iv_captacao_height   → ajusta a altura do iframe
//   - iv_captacao_redirect → redireciona a página pai
//   - iv_captacao_submit   → lead enviou o form (dispara conversão)
//
// O submit é tratado aqui porque o iframe impede que o Event Setup Tool do
// Meta detecte o clique no botão — então a conversão é disparada pela
// página pai (pixel + dataLayer/GTM).

export interface CaptacaoMessageOptions {
  formId: string
  formName: string
  iframe: HTMLIFrameElement | null
  /** Sobrescreve a URL de redirect (ex.: /obrigado_google). */
  redirectTo?: string
}

export function createCaptacaoHandler(opts: CaptacaoMessageOptions) {
  const { formId, formName, iframe, redirectTo } = opts

  return function handleMessage(event: MessageEvent) {
    if (!event.data || event.data.formId !== formId) return

    if (event.data.type === 'iv_captacao_height' && iframe) {
      iframe.style.height = Math.max(event.data.height, 0) + 'px'
      return
    }

    if (event.data.type === 'iv_captacao_redirect' && typeof event.data.url === 'string') {
      window.location.href = redirectTo ?? event.data.url
      return
    }

    if (event.data.type === 'iv_captacao_submit') {
      try {
        // Meta Pixel (caso esteja carregado).
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', {
            content_name: formName,
            content_category: 'captacao_viriatum',
          })
        }
        // Google Tag Manager / dataLayer.
        if (window.dataLayer && typeof window.dataLayer.push === 'function') {
          window.dataLayer.push({
            event: 'iv_captacao_submit',
            form_id: formId,
            form_name: formName,
            lead: event.data.lead || {},
          })
        }
        // Tracker do Escritório Viriatum.
        window.ivTrack?.('Lead')
      } catch {
        /* silent */
      }
    }
  }
}
