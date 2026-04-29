import { motion } from 'framer-motion'
import { LinkButton } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { fadeUp, viewport } from '@/lib/motion'

export function CtaStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dots opacity-[0.08]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(closest-side, rgba(255,255,255,0.2), transparent)',
        }}
      />
      <Container size="wide" className="py-[clamp(4rem,2rem+8vw,8rem)] relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-10 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="text-micro font-mono uppercase tracking-[0.14em] text-cobalt-200">
              Ready when you are
            </span>
            <h2 className="text-h1 text-white tracking-tight">
              Build something{' '}
              <span className="italic font-light text-white/85">measurable.</span>
            </h2>
            <p className="text-body-lg text-white/75 max-w-2xl leading-relaxed">
              Whether it's an AI readiness review, a contract-analysis pipeline, or a full
              BusinessBrain pilot — the conversation starts with what you actually need.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <LinkButton href="#contact" variant="inverse" size="lg" withArrow>
              Let's talk
            </LinkButton>
            <LinkButton href="/businessbrain" variant="ghost" size="lg" className="!border-white/20 !text-white hover:!border-white hover:!text-white">
              Read the BusinessBrain brief
            </LinkButton>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
