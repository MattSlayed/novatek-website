import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LinkButton } from '@/components/ui/Button'
import { partners, eyebrowFor } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function Partners() {
  return (
    <Section id="partners" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow={eyebrowFor('partners')}
          title="Backed by a small, deliberate network."
          italic="Not a logo wall."
          description="Three relationships that extend what NOVATEK can deliver: infrastructure, governance alignment and talent - each chosen for a specific reason, not for the badge."
        />

        <motion.div
          variants={fadeUpStagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.slug}
              variants={fadeUp}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-surface p-6 flex flex-col gap-4 hover:border-cobalt-600 hover:-translate-y-0.5 hover:shadow-navy-md"
            >
              <div className="flex h-10 items-center">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-full max-w-[150px] object-contain object-left"
                  />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600 group-hover:bg-cobalt-600 group-hover:text-white transition-colors duration-200">
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
              <p className="text-sm text-charcoal/80 leading-relaxed">{partner.summary}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10"
        >
          <LinkButton href="/partners" variant="ghost" size="lg" withArrow>
            Read more on our partners &amp; associations
          </LinkButton>
        </motion.div>
      </Container>
    </Section>
  )
}
