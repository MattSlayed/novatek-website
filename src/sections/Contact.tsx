import { motion } from 'framer-motion'
import { Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { company, eyebrowFor } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

// Deliberately no enquiry form. The previous one had no backend: it handed a
// mailto: URL to the browser, which does nothing at all when the visitor has no
// mail client registered - common on desktop, where most people use webmail in a
// tab. The visitor saw no error and no confirmation, and the enquiry was lost.
// A plain, visible address is worse-looking and strictly better-performing.
export function Contact() {
  return (
    <Section id="contact" tone="canvas">
      <Container size="wide">
        <motion.div
          variants={fadeUpStagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.span variants={fadeUp} className="eyebrow">
              {eyebrowFor('contact')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h1 text-navy-500 tracking-tight">
              Let's build something{' '}
              <span className="italic font-light text-cobalt-600">intelligent.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-charcoal/85 max-w-xl leading-relaxed"
            >
              Tell us what you're trying to make decidable. We'll come back with what we can
              defensibly commit to - and what we can't.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="card-surface p-6 md:p-10 flex flex-col gap-8">
              <a
                href={`mailto:${company.email}`}
                className="group flex flex-col gap-3 focus-visible:outline-none"
              >
                <span className="text-micro font-mono uppercase tracking-[0.14em] text-charcoal/60">
                  Email us
                </span>
                <span className="inline-flex flex-wrap items-center gap-2 text-h2 font-semibold text-navy-500 tracking-tight transition-colors group-hover:text-cobalt-600 break-all">
                  {company.email}
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 text-cobalt-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>

              <div className="border-t border-slate-200" />

              <dl className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600">
                    <Phone className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-micro font-mono uppercase tracking-[0.14em] text-charcoal/60">
                      Telephone
                    </dt>
                    <dd>
                      <a
                        href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}
                        className="text-charcoal hover:text-cobalt-600 transition-colors"
                      >
                        {company.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600">
                    <MapPin className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-micro font-mono uppercase tracking-[0.14em] text-charcoal/60">
                      Based in
                    </dt>
                    <dd className="text-charcoal">Johannesburg, {company.region}</dd>
                  </div>
                </div>
              </dl>

              <p className="text-xs text-slate-500 leading-relaxed">
                We respond within one working day. Tell us the operation, the constraint and what
                you need to decide, and we'll come back with a scoped view of what is achievable.
                POPIA-compliant - this site collects and stores no data.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
