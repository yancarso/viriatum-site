// Ícones de traço fino usados nas seções da pagina02.
type P = { className?: string }
const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const Check = ({ className }: P) => <svg {...base} className={className}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
export const Cross = ({ className }: P) => <svg {...base} className={className}><path d="M6 6l12 12M18 6L6 18" /></svg>
export const TrendUp = ({ className }: P) => <svg {...base} className={className}><path d="M3 17l6-6 4 4 8-8M15 7h6v6" /></svg>
export const TrendDown = ({ className }: P) => <svg {...base} className={className}><path d="M3 7l6 6 4-4 8 8M15 17h6v-6" /></svg>
export const Shield = ({ className }: P) => <svg {...base} className={className}><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
export const Heart = ({ className }: P) => <svg {...base} className={className}><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" /></svg>
export const Search = ({ className }: P) => <svg {...base} className={className}><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4-4" /></svg>
export const Phone = ({ className }: P) => <svg {...base} className={className}><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg>
export const Stethoscope = ({ className }: P) => <svg {...base} className={className}><path d="M6 3v5a4 4 0 008 0V3" /><path d="M10 12v3a5 5 0 0010 0v-1" /><circle cx="20" cy="12" r="2" /></svg>
export const Box = ({ className }: P) => <svg {...base} className={className}><path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>
export const Chat = ({ className }: P) => <svg {...base} className={className}><path d="M4 5h16v11H9l-5 4V5z" /></svg>
export const Lock = ({ className }: P) => <svg {...base} className={className}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>
export const Clock = ({ className }: P) => <svg {...base} className={className}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
export const Arrow = ({ className }: P) => <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
export const Chevron = ({ className }: P) => <svg {...base} className={className}><path d="M6 9l6 6 6-6" /></svg>
export const Pulse = ({ className }: P) => <svg {...base} className={className}><path d="M3 12h4l2-5 4 10 2-5h6" /></svg>
export const WhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0012.04 2zm0 18.15h-.01a8.23 8.23 0 01-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.24 8.24 0 018.24 8.25c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
  </svg>
)
