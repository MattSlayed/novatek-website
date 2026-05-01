import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { values } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function About() {
  return (
    <Section id="about" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow="01 / Who we are"
          title="A South African team that turns scattered data into"
          italic="decisions you can act on."
          description="A small Johannesburg-based AI and data consultancy, working with industrial enterprises across power, engineering, and manufacturing."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-6 text-charcoal/85 leading-relaxed">
            <p className="text-body-lg">
              We help operations teams make better decisions with the data they already have. That
              means AI tools that read contracts, dashboards that surface real risks, and automation
              that takes the busywork off your plate.
            </p>
            <p>
              Every system we build keeps a person in the loop — no black-box AI making calls on
              your behalf, no offshore data, no dependencies you can&apos;t audit. You stay in control.
              We just make the work faster and clearer.
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
