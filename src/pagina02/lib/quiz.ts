// Destino de todos os botões de CTA da pagina02.
export const QUIZ_URL = 'https://institutoviriatum.com/tratamentos/quiz/01-campeao'

// Repassa os parâmetros da URL atual (UTMs, src) para o quiz no clique,
// para não perder a origem do lead.
export function forwardQuizParams() {
  const handleClick = (e: MouseEvent) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(`a[href^="${QUIZ_URL}"]`)
    if (!link || !window.location.search) return
    link.href = QUIZ_URL + window.location.search
  }
  document.addEventListener('click', handleClick, true)
  return () => document.removeEventListener('click', handleClick, true)
}
