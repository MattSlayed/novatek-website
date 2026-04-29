import { motion } from 'framer-motion'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  italic?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  italic,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
      variants={fadeUpStagger(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn('text-h2 max-w-3xl', align === 'center' && 'mx-auto')}
      >
        {title}
        {italic && (
          <>
            {' '}
            <span className="italic font-light text-slate-500">{italic}</span>
          </>
        )}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'text-body-lg text-charcoal/80 max-w-2xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
