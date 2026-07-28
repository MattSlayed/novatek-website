import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { values, eyebrowFor } from '@/data/site'
import { ease, fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function About() {
  const [open, setOpen] = useState(false)

  return (
    <Section id="about" tone="canvas" className="pb-[clamp(2rem,1rem+3vw,4rem)]">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-8 text-charcoal/85 leading-relaxed">
            <SectionHeader
              eyebrow={eyebrowFor('about')}
              title="A South African team that turns scattered data into"
              italic="decisions you can act on."
            />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="about-details"
              className="group flex w-full items-start gap-3 text-left text-body-lg font-medium text-cobalt-600 transition-colors hover:text-cobalt-700 focus-visible:outline-none focus-visible:text-cobalt-700"
            >
              <span className="flex-1">
                A Johannesburg-based AI and operations-intelligence consultancy, working with
                South African industrial enterprises of 50 to 500 employees across power
                generation, heavy engineering, mining services and fabrication.
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`mt-1.5 h-5 w-5 shrink-0 text-cobalt-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id="about-details"
                  key="about-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: ease.out }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-6">
                    <p>
                      We help operations teams make better decisions with the data they already
                      have. That means AI tools that read contracts, dashboards that surface real
                      risks, and automation that takes the busywork off your plate. Large
                      consultancies price the industrial mid-market out; technology agencies lack
                      the domain knowledge industrial operations demand. We sit in that gap, and we
                      implement the work ourselves.
                    </p>
                    <p>
                      Every system we build keeps a person in the loop — no black-box AI making
                      calls on your behalf and no dependencies you can&apos;t audit. We also serve
                      B-BBEE-conscious procurement across government, SOEs and large enterprise,
                      and deliver across the border into SADC. You stay in control. We just make
                      the work faster and clearer.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
