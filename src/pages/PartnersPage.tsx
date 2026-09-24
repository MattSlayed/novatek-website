import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { LinkButton } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Seo } from '@/components/Seo'
import { partners } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function PartnersPage() {
  return (
    <>
      <Seo
        title="Partners & Associations | NOVATEK®"
        description="LiquidC2, the South African Artificial Intelligence Association (SAAIA), and Wits Crucible - the network NOVATEK builds infrastructure, governance alignment and talent on."
        path="/partners"
      />

      <Section tone="canvas" className="pt-28 md:pt-36">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-charcoal/70 hover:text-cobalt-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to NOVATEK
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl"
          >
            <span className="eyebrow">Partners &amp; associations</span>
            <h1 className="text-display font-semibold text-navy-500 tracking-tight mt-3">
              A small, deliberate{' '}
              <span className="italic font-light text-cobalt-600">network.</span>
            </h1>
            <p className="mt-6 text-body-lg text-charcoal/85 leading-relaxed">
              These are our esteemed partners in building a more intelligently augmented
              society - each chosen for a specific reason: infrastructure, governance alignment
              or talent.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container size="wide">
          <SectionHeader
            eyebrow="Who we work alongside"
            title="Three relationships,"
            italic="three different jobs."
          />

          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-4"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.slug}
                variants={fadeUp}
                className="card-surface p-6 md:p-8 grid gap-6 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-4 flex flex-col gap-4">
                  <div className="flex h-12 items-center">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-full max-w-[180px] object-contain object-left"
                      />
                    ) : (
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600">
                        <partner.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-cobalt-600">
                      {partner.category}
                    </span>
                    <h3 className="text-h4 text-navy-500">{partner.name}</h3>
                  </div>
                </div>

                <div className="md:col-span-8 flex flex-col gap-4">
                  <p className="text-charcoal/85 leading-relaxed">{partner.description}</p>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-cobalt-600 hover:text-cobalt-700 transition-colors w-fit"
                  >
                    Visit {partner.name}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section tone="canvas" className="!py-12">
        <Container size="wide">
          <div className="card-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gradient-subtle">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">Get in touch</span>
              <h3 className="text-h3 text-navy-500">
                Want to know how these relationships show up in delivery?
              </h3>
              <p className="text-sm text-charcoal/75 max-w-xl">
                Ask us directly - we&rsquo;ll tell you exactly where each one is load-bearing and
                where it isn&rsquo;t.
              </p>
            </div>
            <LinkButton href="/#contact" size="lg" withArrow>
              Start a conversation
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
