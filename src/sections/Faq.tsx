import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { faqs, eyebrowFor } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" tone="canvas">
      <Container size="default">
        <SectionHeader
          eyebrow={eyebrowFor('faq')}
          title="The questions we get asked"
          italic="before anyone signs anything."
          description="These answers are also published as structured data, so they have to be the same answers we would give you on a call."
        />

        <motion.div
          variants={fadeUpStagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 border-t border-slate-200"
        >
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div key={f.q} variants={fadeUp} className="border-b border-slate-200">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-body-lg font-medium text-navy-500 group-hover:text-cobalt-600 transition-colors">
                      {f.q}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`mt-1 h-5 w-5 shrink-0 text-cobalt-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                {/*
                  The answer stays mounted whether open or closed. Collapsing via
                  grid-template-rows rather than unmounting keeps the text in the
                  DOM, which is what makes the FAQPage structured data on this
                  page truthful to a crawler.
                */}
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-300 ease-out-quart ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-charcoal/85 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
