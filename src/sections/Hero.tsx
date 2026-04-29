import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { Stat } from '@/components/ui/Stat'
import { heroStats } from '@/data/site'
import { ease, wordReveal } from '@/lib/motion'
import { BusinessBrainOrbit } from './visuals/BusinessBrainOrbit'

const headline = ['Intelligence', 'that survives', 'staff turnover.']
const sub = 'AI and data consulting for South African enterprise — engineered for the realities of mid-market industry, audited to the standard of regulated finance.'

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

      {/* Corner brackets — brand spec §9 */}
      <div className="corner-bracket top-20 left-0 border-l-2 border-t-2" />
      <div className="corner-bracket top-20 right-0 border-r-2 border-t-2" />

      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: ease.out }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur px-3 py-1.5 text-xs font-medium text-charcoal shadow-navy-sm"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cobalt-600 animate-pulse" />
              <ShieldCheck className="h-3.5 w-3.5 text-cobalt-600" aria-hidden="true" />
              BBBEE Level 1 · POPIA-native · af-south-1
            </motion.div>

            <h1 className="text-display font-semibold text-navy-500 tracking-tight">
              <motion.span
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
                className="block"
              >
                {headline.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    variants={wordReveal}
                    className="inline-block mr-3"
                  >
                    {i === headline.length - 1 ? (
                      <span className="italic font-light text-cobalt-600">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
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
              Johannesburg · serving SA mid-market enterprise (500–5,000 staff)
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
