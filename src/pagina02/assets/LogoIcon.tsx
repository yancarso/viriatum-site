import React from 'react'

export function LogoIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role="img"
      aria-label="Instituto Viriatum ícone"
    >
      <polygon points="18,5 40,3 48,40" fill="currentColor" />
      <polygon points="9,37 17,47 48,40" fill="currentColor" />
      <polygon points="48,40 32,46 27,62" fill="currentColor" />
    </svg>
  )
}
