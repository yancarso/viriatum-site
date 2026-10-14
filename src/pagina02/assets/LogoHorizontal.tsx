export function LogoHorizontal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Instituto Viriatum"
    >
      <polygon points="18,5 40,3 48,40" fill="currentColor" />
      <polygon points="9,37 17,47 48,40" fill="currentColor" />
      <polygon points="48,40 32,46 27,62" fill="currentColor" />
      <text
        x="66"
        y="55"
        fontFamily="Petrona, Georgia, 'Times New Roman', serif"
        fontSize="48"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        Instituto Viriatum
        <tspan fontSize="22" dy="-4" dx="1">®</tspan>
      </text>
    </svg>
  )
}
