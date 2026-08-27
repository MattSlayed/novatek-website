import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LinkButton } from '@/components/ui/Button'
import { NumberedRow } from '@/components/ui/NumberedRow'
import { novaflow, eyebrowFor } from '@/data/site'
import { fadeUp, viewport } from '@/lib/motion'

export function Novaflow() {
  return (
    <Section id="novaflow" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow={eyebrowFor('novaflow')}
          title="NOVAFLOW."
          italic="Reliability and asset intelligence for pumps and valves."
        />

        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 max-w-3xl border-l-2 border-cobalt-600 pl-6 py-2 text-body-lg text-charcoal/85 leading-relaxed"
        >
          {novaflow.summary}
        </motion.figure>

        <div className="mt-14">
          {novaflow.pillars.map((p) => (
            <NumberedRow
              key={p.num}
              num={p.num}
              title={p.title}
              description={p.description}
              icon={p.icon}
              bullets={p.bullets}
            />
          ))}
          <div className="border-t border-slate-200" />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="card-surface mt-12 p-6 md:p-8 flex flex-col gap-4"
        >
          <h3 className="eyebrow">Scope boundaries, published</h3>
          <p className="text-charcoal/85 leading-relaxed max-w-4xl">
            NOVAFLOW does not hold an equipment distributorship or agency. It does not import or
            stock equipment, and it carries no inventory. Spares are supplied back-to-back against
            confirmed orders. It does not undertake valve refurbishment or component manufacture,
            and it does not compete with the clients it serves.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <LinkButton href="#contact" size="lg" withArrow>
            Talk to us about a flow-asset engagement
          </LinkButton>
        </motion.div>
      </Container>
    </Section>
  )
}
