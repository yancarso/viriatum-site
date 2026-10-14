import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

interface AnimatedCounterProps {
  value: string
  duration?: number
}

function parseValue(str: string): { prefix: string; num: number; suffix: string } {
  const match = str.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { prefix: '', num: 0, suffix: str }
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] }
}

export function AnimatedCounter({ value, duration = 1800 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduce = useReducedMotion()
  const { prefix, num, suffix } = parseValue(value)
  const [display, setDisplay] = useState(shouldReduce ? num : 0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!isInView || startedRef.current || shouldReduce) return
    startedRef.current = true

    const start = performance.now()
    const isInt = Number.isInteger(num)

    function step(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = num * ease
      setDisplay(isInt ? Math.floor(current) : parseFloat(current.toFixed(1)))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isInView, num, duration, shouldReduce])

  return (
    <span ref={ref}>
      {prefix}
      {Number.isInteger(num) ? display : display.toFixed(1)}
      {suffix}
    </span>
  )
}
