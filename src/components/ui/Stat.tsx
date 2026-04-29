import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/motion'

interface StatProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
  detail?: string
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg'
  decimals?: number
}

const sizes = {
  sm: 'text-3xl',
  md: 'text-4xl md:text-5xl',
  lg: 'text-5xl md:text-6xl',
}

/** Stat counter with viewport-triggered count-up. Uses ease.out so digits decelerate decisively. */
export function Stat({
  value,
  prefix = '',
  suffix = '',
  label,
  detail,
  align = 'left',
  size = 'md',
  decimals = 0,
}: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplayed(value)
      return
    }
    const start = performance.now()
    const dur = 1600
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1)
      // ease.out cubic-bezier (approx by 1 - (1-p)^3)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplayed(eased * value)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  const formatted =
    decimals > 0 ? displayed.toFixed(decimals) : Math.floor(displayed).toString()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: ease.out }}
      className={cn(
        'flex flex-col gap-2',
        align === 'center' && 'items-center text-center',
      )}
    >
      <div
        className={cn(
          'tabular-numerals font-semibold tracking-tight text-cobalt-600',
          sizes[size],
        )}
      >
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div className="eyebrow text-charcoal">{label}</div>
      {detail && <div className="text-sm text-slate-500 max-w-xs">{detail}</div>}
    </motion.div>
  )
}
