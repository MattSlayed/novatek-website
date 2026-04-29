import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/motion'

type Props = HTMLMotionProps<'div'> & { delay?: number }

export function MotionFadeUp({ delay = 0, transition, ...rest }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ ...transition, delay }}
      {...rest}
    />
  )
}
