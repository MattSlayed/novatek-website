import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { compliance, governancePillars } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function Compliance() {
  return (
    <Section id="compliance" tone="subtle">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="06 / Governance"
              title="Compliance and"
              italic="data sovereignty."
              description="POPIA-native by construction, not by retrofit. BBBEE Level 1 verified. Data residency in af-south-1, with mTLS across every service boundary."
            />

            <motion.div
              variants={fadeUpStagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-10 flex flex-col gap-3"
            >
              {compliance.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="card-surface p-5 flex gap-4 items-start hover:border-cobalt-600"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600">
                    <c.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-h4 text-navy-500">{c.title}</h3>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpStagger(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-7 grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden"
          >
            {governancePillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-white p-6 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-500/5 text-navy-500">
                    <p.icon className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <span className="taxonomy-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="text-h4 text-navy-500">{p.title}</h4>
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
