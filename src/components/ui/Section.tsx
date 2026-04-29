import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  children: ReactNode
  tone?: 'canvas' | 'subtle' | 'inverse'
}

const tones = {
  canvas: 'bg-white text-charcoal',
  subtle: 'bg-slate-50 text-charcoal',
  inverse: 'bg-navy-500 text-white',
}

export function Section({
  id,
  children,
  tone = 'canvas',
  className,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-20',
        tones[tone],
        'py-[clamp(4rem,2rem+8vw,9rem)]',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
