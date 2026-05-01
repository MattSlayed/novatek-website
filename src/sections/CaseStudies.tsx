import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { caseStudies } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function CaseStudies() {
  return (
    <Section id="cases" tone="subtle">
      <Container size="wide">
        <SectionHeader
          eyebrow="05 / Proven outcomes"
          title="Anonymised, but"
          italic="real."
          description="Every case study is a live engagement under NDA. Numbers are direct measurements; client names are withheld. Sectors are accurate."
        />

        <motion.div
          variants={fadeUpStagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 flex flex-col gap-6"
        >
          {caseStudies.map((cs) => (
            <motion.article
              key={cs.num}
              variants={fadeUp}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-navy-sm hover:shadow-navy-md transition-shadow duration-300"
            >
              <header className="flex flex-col gap-3 p-6 md:p-8 border-b border-slate-200 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-1">
                  <span className="taxonomy-num">CASE STUDY {cs.num}</span>
                  <span className="text-sm font-medium text-charcoal">
                    {cs.client}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center text-xs font-mono uppercase tracking-[0.12em] text-cobalt-700 bg-cobalt-50 border border-cobalt-100 px-2.5 py-1 rounded-sharp"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </header>

              <div className="grid md:grid-cols-12">
                <div className="md:col-span-4 bg-gradient-subtle border-b md:border-b-0 md:border-r border-slate-200 p-6 md:p-8 flex flex-col gap-6 justify-center">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <div
                        className={
                          m.emphasis
                            ? 'tabular-numerals text-4xl md:text-5xl font-semibold text-cobalt-600 tracking-tight'
                            : 'tabular-numerals text-2xl font-semibold text-navy-500'
                        }
                      >
                        {m.value}
                      </div>
                      <div className="text-micro font-mono uppercase tracking-[0.14em] text-slate-500">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-8 p-6 md:p-8 flex flex-col gap-6 justify-center">
                  <h3 className="text-h3 text-navy-500 leading-tight">
                    {cs.title}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                      ['Challenge', cs.challenge],
                      ['Solution', cs.solution],
                      ['Outcome', cs.outcome],
                    ].map(([label, body]) => (
                      <div key={label} className="flex flex-col gap-2">
                        <h4 className="eyebrow">{label}</h4>
                        <p className="text-sm text-charcoal/85 leading-relaxed">
                          {body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
