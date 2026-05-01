import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { integrations, integrationsQuote } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function Integrations() {
  return (
    <Section id="integrations" tone="subtle">
      <Container size="wide">
        <SectionHeader
          eyebrow="03 / Built on what you have"
          title="We integrate with the systems you already run."
          italic="Legacy or modern."
          description="Most consultancies tell you to throw out what you've built and start over. We don't. Whether your stack is a 1990s ERP, modern cloud services, or fifteen years of operational spreadsheets — that's where we begin."
        />

        <motion.div
          variants={fadeUpStagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {integrations.map((cat) => (
            <motion.div
              key={cat.num}
              variants={fadeUp}
              className="bg-white p-6 flex flex-col gap-4 hover:bg-cobalt-50/40 transition-colors duration-200 ease-out-quart group"
            >
              <div className="flex items-center justify-between">
                <span className="taxonomy-num">{cat.num}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600 group-hover:bg-cobalt-600 group-hover:text-white transition-colors duration-200">
                  <cat.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
              </div>
              <h3 className="text-h4 text-navy-500 leading-tight">{cat.title}</h3>
              <p className="text-sm text-charcoal/75 leading-relaxed font-mono">
                {cat.examples}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 mx-auto max-w-3xl border-l-2 border-cobalt-600 pl-6 py-2 text-body-lg text-charcoal/85 italic font-light leading-relaxed"
        >
          {integrationsQuote}
        </motion.figure>
      </Container>
    </Section>
  )
}
