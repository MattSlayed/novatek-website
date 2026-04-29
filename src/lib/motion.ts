import type { Variants, Transition } from 'framer-motion'

export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
}

export const duration = {
  micro: 0.15,
  standard: 0.25,
  entrance: 0.6,
  hero: 0.9,
  page: 0.4,
}

export const tween = (overrides: Partial<Transition> = {}): Transition => ({
  type: 'tween',
  duration: duration.entrance,
  ease: ease.out,
  ...overrides,
})

export const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: tween() },
}

export const fadeUpStagger = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  },
})

export const wordReveal: Variants = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: tween({ duration: 0.6 }) },
}

export const scaleIn: Variants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: tween({ duration: 0.7 }) },
}

export const viewport = { once: true, amount: 0.15 } as const
