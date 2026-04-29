import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { values, company } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function About() {
  return (
    <Section id="about" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow="01 / Who we are"
          title="A consultancy engineered for"
          italic="the realities of South African industry."
          description="NOVATEK is a small, deliberate team. We build evidence-led AI and data systems for power generation, engineering, and industrial operations — and we measure every engagement against falsifiable outcomes, not slideware."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-6 text-charcoal/85 leading-relaxed">
            <p className="text-body-lg">
              {company.description}
            </p>
            <p>
              We work with mid-market enterprises (500–5,000 employees) where the IT team is two
              to six people — not a dedicated ML platform function. That constraint shapes every
              architecture we ship: declarative MCP topologies over bespoke connectors, a permanent
              human confirmation gate on every write action, and a hot-subgraph cache that keeps
              reads working through Stage 4–6 load-shedding.
            </p>
            <p>
              We do not claim to eliminate labour, replace judgement, or eliminate hallucination.
              We claim that institutional memory survives staff transitions, that the audit
              surface satisfies POPIA, and that the system never acts irreversibly without human
              consent.
            </p>
          </div>

          <motion.dl
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="bg-white p-6 flex flex-col gap-2"
              >
                <span className="taxonomy-num">{String(i + 1).padStart(2, '0')}</span>
                <dt className="text-h4 text-navy-500">{v.title}</dt>
                <dd className="text-sm text-charcoal/80 leading-relaxed">{v.description}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </Section>
  )
}
