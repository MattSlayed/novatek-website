import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { Stat } from '@/components/ui/Stat'
import { heroStats } from '@/data/site'
import { ease, wordReveal } from '@/lib/motion'
import { BusinessBrainOrbit } from './visuals/BusinessBrainOrbit'

// Hero line, from the Vision statement in Business Plan v3.0 section 2: an
// industrial sector "where decades of engineering expertise is amplified by
// intelligent automation". Human first, machine second - that ordering is the
// positioning, not a stylistic choice.
//
// Chunks are staggered word-by-word by wordReveal. Everything from
// ACCENT_FROM onward renders as the light-italic cobalt tail.
// Split per word rather than per phrase: each chunk is an inline-block, so
// multi-word chunks break atomically and strand short words on their own line.
const headline = ['South', 'Africa’s', 'next', 'industrial', 'era.', 'Human-led.', 'AI-amplified.']
const ACCENT_FROM = 5
const sub =
  'AI, operations intelligence and reliability engineering for the industries that keep the country running - power, mining, heavy engineering and water. Decades of plant expertise, amplified rather than replaced.'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-[clamp(4rem,2rem+8vw,8rem)] md:pt-36"
    >
      {/* Soft brand backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-dots opacity-[0.07]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-32 -z-10 h-[640px] w-[640px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(37,99,235,0.30), rgba(30,58,95,0.0))',
        }}
      />

      {/* Corner brackets - brand spec §9 */}
      <div className="corner-bracket top-20 left-0 border-l-2 border-t-2" />
      <div className="corner-bracket top-20 right-0 border-r-2 border-t-2" />

      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h1 className="text-display font-semibold text-navy-500 tracking-tight">
              <motion.span
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
                className="block"
              >
                {headline.map((word, i) => (
                  // Real whitespace between the spans, not a margin. These are
                  // inline-blocks, so a margin leaves the text layer with no word
                  // boundaries at all - screen readers and crawlers previously saw
                  // the headline as one run-on string.
                  <Fragment key={`${word}-${i}`}>
                    <motion.span variants={wordReveal} className="inline-block">
                      {i >= ACCENT_FROM ? (
                        <span className="italic font-light text-cobalt-600">{word}</span>
                      ) : (
                        word
                      )}
                    </motion.span>{' '}
                  </Fragment>
                ))}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: ease.out, delay: 0.4 }}
              className="text-body-lg text-charcoal/85 max-w-2xl leading-relaxed"
            >
              {sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: ease.out, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3"
            >
              <LinkButton href="#cases" size="lg" withArrow>
                See proven outcomes
              </LinkButton>
              <LinkButton href="/businessbrain" variant="ghost" size="lg">
                Meet BusinessBrain
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: ease.out }}
              className="flex items-center gap-2 text-xs text-slate-500 mt-2"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Johannesburg · Industrial enterprises of 50 to 500 employees · Residency and local content, by design
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <BusinessBrainOrbit />
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-[clamp(3rem,2rem+5vw,6rem)] border-t border-slate-200 pt-12">
          <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200">
            {heroStats.map((stat) => (
              <div key={stat.label} className="md:px-10 first:md:pl-0">
                <Stat
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  detail={stat.detail}
                  size="lg"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
