import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeUp, viewport } from '@/lib/motion'

interface NumberedRowProps {
  num: string
  title: string
  description: string
  icon?: LucideIcon
  bullets?: string[]
  children?: ReactNode
}

export function NumberedRow({ num, title, description, icon: Icon, bullets }: NumberedRowProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="group relative grid grid-cols-12 gap-6 border-t border-slate-200 py-8 md:py-10 transition-all duration-300 ease-out-quart hover:border-navy-500/30"
    >
      <div className="col-span-12 md:col-span-1 flex items-start">
        <span className="taxonomy-num">{num}</span>
      </div>

      <div className="col-span-12 md:col-span-4 flex items-start gap-3">
        {Icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600 transition-colors duration-200 group-hover:bg-cobalt-600 group-hover:text-white">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </span>
        )}
        <h3 className="text-h3 leading-tight transition-transform duration-300 ease-out-quart group-hover:translate-x-1">
          {title}
        </h3>
      </div>

      <div className="col-span-12 md:col-span-6 text-charcoal/85 text-body-lg leading-relaxed">
        <p>{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
            {bullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <span
                  className="inline-block h-1 w-1 rounded-full bg-cobalt-600"
                  aria-hidden="true"
                />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="hidden md:flex col-span-1 items-start justify-end">
        <ChevronRight
          className={cn(
            'h-5 w-5 text-slate-300 transition-all duration-300 ease-out-quart',
            'group-hover:text-cobalt-600 group-hover:translate-x-1',
          )}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  )
}
