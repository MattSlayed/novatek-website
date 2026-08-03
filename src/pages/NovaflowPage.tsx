import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Construction } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { LinkButton } from '@/components/ui/Button'
import { Seo } from '@/components/Seo'

// The full NOVAFLOW brief has been pulled down for a content rebuild. The
// previous page, its data and its hero visual are preserved in
// /archive/novaflow-page for restoration - see the README there.
export function NovaflowPage() {
  return (
    <>
      <Seo
        title="NOVAFLOW by NOVATEK® - Page Under Development"
        description="The NOVAFLOW brief is being rebuilt. Check back soon, or get in touch directly about a flow-asset engagement."
        path="/novaflow"
        noindex
      />

      <Section tone="canvas" className="pt-28 md:pt-36">
        <Container size="narrow">
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
            className="card-surface p-8 md:p-14 flex flex-col items-center gap-6 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-gradient-hero text-white">
              <Construction className="h-6 w-6" aria-hidden="true" strokeWidth={2} />
            </span>

            <span className="eyebrow">NOVAFLOW by NOVATEK®</span>

            <h1 className="text-h1 text-navy-500 tracking-tight">
              This page is <span className="font-light italic text-cobalt-600">under development.</span>
            </h1>

            <p className="text-body-lg text-charcoal/85 max-w-xl leading-relaxed">
              We are rebuilding the NOVAFLOW brief. In the meantime, if you would like to talk
              about a flow-asset engagement - pumps, valves, service and reliability - reach out
              directly and we will pick it up from there.
            </p>

            <LinkButton href="/#contact" size="lg" withArrow>
              Get in touch
            </LinkButton>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
