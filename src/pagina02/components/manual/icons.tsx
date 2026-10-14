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
