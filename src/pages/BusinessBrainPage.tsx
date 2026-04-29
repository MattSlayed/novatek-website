import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { LinkButton } from '@/components/ui/Button'
import { BusinessBrainOrbit } from '@/sections/visuals/BusinessBrainOrbit'
import {
  businessBrainCapabilities,
  businessBrainTiers,
  businessBrainQuotes,
} from '@/data/site'
import { fadeUp, fadeUpStagger, viewport, wordReveal } from '@/lib/motion'

const headline = ['Institutional', 'memory.', 'Engineered.']

export function BusinessBrainPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 pb-[clamp(4rem,2rem+8vw,8rem)] md:pt-36 bg-gradient-to-b from-slate-50 via-white to-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dots opacity-[0.06]" />
        <div className="corner-bracket top-20 left-0 border-l-2 border-t-2" />
        <div className="corner-bracket top-20 right-0 border-r-2 border-t-2" />

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

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-7">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="eyebrow"
              >
                BusinessBrain · Feasibility Review v1.4
              </motion.span>

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
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-body-lg text-charcoal/85 max-w-2xl leading-relaxed"
              >
                A retrieval-and-reasoning layer that sits over your existing Microsoft 365, AWS,
                and Postgres systems and turns fragmented company knowledge into one connected,
                queryable brain. <strong className="font-semibold text-navy-500">
                  System of insight, never system of record.
                </strong>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                <LinkButton href="#capabilities" size="lg" withArrow>
                  Capabilities
                </LinkButton>
                <LinkButton href="#feasibility" size="lg" variant="ghost">
                  Feasibility &amp; honest limits
                </LinkButton>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <BusinessBrainOrbit />
            </div>
          </div>
        </Container>
      </section>

      {/* Why this exists */}
      <Section tone="subtle">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-12 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-5">
              <motion.span variants={fadeUp} className="eyebrow">
                The problem
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-h2 mt-3">
                Knowledge leaves when{' '}
                <span className="italic font-light text-slate-500">people leave.</span>
              </motion.h2>
            </div>
            <motion.ul
              variants={fadeUp}
              className="lg:col-span-7 grid gap-3 text-charcoal/85 text-body-lg leading-relaxed"
            >
              {[
                'Critical relationships between contracts, vendors, projects, and decisions live in employees\' heads — and lapse with staff turnover.',
                'Multi-hop questions ("which open invoices relate to contracts signed by Vendor X against cost-centre Y in Q1?") break vector RAG.',
                'POPIA s.23 subject-access requests become manual reconstruction projects — exactly what POPIA was designed to disincentivise.',
                'Generic US-built AI products are not priced, hosted, or wired to the source systems an SA mid-market enterprise actually runs.',
                'Stage 4–6 load-shedding breaks systems that fail hard when a data source goes briefly unreachable.',
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt-600"
                    aria-hidden="true"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </Container>
      </Section>

      {/* Architecture tiers */}
      <Section id="architecture" tone="inverse">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-5">
              <motion.span variants={fadeUp} className="eyebrow text-cobalt-400">
                Architecture
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-h2 text-white mt-3">
                Four tiers.{' '}
                <span className="italic font-light text-white/65">
                  Provenance is the vertical concern.
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-body-lg text-white/75 leading-relaxed">
                The reader's eye moves downward — chat surface to agents to graph substrate to MCP
                seam to authoritative sources. Reads traverse freely. Writes always pass through
                the human confirmation gate.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-6 flex items-center gap-2 text-xs text-white/60 font-mono"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
                Amber edges denote provenance-carrying flows.
              </motion.div>
            </div>

            <motion.ol
              variants={fadeUp}
              className="lg:col-span-7 flex flex-col rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              {businessBrainTiers.map((tier, i) => (
                <li
                  key={tier.label}
                  className="grid grid-cols-[auto_1fr] gap-5 p-6 border-b border-white/5 last:border-b-0"
                >
                  <span className="taxonomy-num text-cobalt-400 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-h4 text-white">{tier.label}</span>
                    <span className="text-sm text-white/65">{tier.sub}</span>
                    <span className="text-xs text-white/45 font-mono mt-1">
                      {tier.detail}
                    </span>
                  </div>
                </li>
              ))}
            </motion.ol>
          </motion.div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities" tone="canvas">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-12"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Capabilities
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h2 mt-3 max-w-3xl">
              Eight pillars.{' '}
              <span className="italic font-light text-slate-500">
                Each one defensible in isolation.
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeUpStagger(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {businessBrainCapabilities.map((cap) => (
              <motion.div
                key={cap.num}
                variants={fadeUp}
                className="bg-white p-6 flex flex-col gap-3 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="taxonomy-num">{cap.num}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600">
                    <cap.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                </div>
                <h3 className="text-h4 text-navy-500 leading-tight">{cap.title}</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Quotes */}
      <Section tone="subtle">
        <Container size="narrow">
          <motion.div
            variants={fadeUpStagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            {businessBrainQuotes.map((q) => (
              <motion.figure
                key={q}
                variants={fadeUp}
                className="relative pl-10 text-h3 text-navy-500 leading-tight"
              >
                <Quote
                  className="absolute left-0 top-1 h-6 w-6 text-cobalt-600"
                  aria-hidden="true"
                />
                {q}
              </motion.figure>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Feasibility / honest limits */}
      <Section id="feasibility" tone="canvas">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">Honest limits</span>
              <h2 className="text-h2 mt-3">
                What we{' '}
                <span className="italic font-light text-slate-500">won't</span> claim.
              </h2>
              <p className="mt-5 text-body-lg text-charcoal/80 leading-relaxed">
                The feasibility review (NVT-BB-CFR-001) explicitly separates Defensible claims
                from Aspirational and Undefendable. We publish all three.
              </p>
            </div>

            <motion.div
              variants={fadeUpStagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:col-span-8 grid gap-4"
            >
              {[
                {
                  label: 'Defensible',
                  tone: 'bg-cobalt-50 border-cobalt-200 text-cobalt-700',
                  items: [
                    'POPIA-native provenance — citation chains by construction',
                    'af-south-1-first data residency (Bedrock Cape Town · Neo4j Aura Africa)',
                    'Load-shedding-resilient by design — degraded-mode is an operating assumption',
                    'Human Confirmation Gate is permanent, not a temporary scaffold',
                    'Source systems remain authoritative — BusinessBrain reads and proposes, never the truth',
                  ],
                },
                {
                  label: 'Aspirational',
                  tone: 'bg-amber-soft/15 border-amber-soft/40 text-amber',
                  items: [
                    'SA-language entity resolution (isiZulu, isiXhosa, Afrikaans) — actively researched, not yet shipped',
                    'Multi-hop query faithfulness materially higher than tuned vector RAG (falsifiable hypothesis under test)',
                  ],
                },
                {
                  label: 'Undefendable',
                  tone: 'bg-slate-100 border-slate-300 text-slate-600',
                  items: [
                    '"We understand SA business better than competitors" — not architecturally provable; we don\'t lean on it',
                    'Eliminating labour, replacing judgement, or eliminating hallucination — none of these are claims we make',
                  ],
                },
              ].map((group) => (
                <motion.div
                  key={group.label}
                  variants={fadeUp}
                  className={`border rounded-lg p-5 flex flex-col gap-3 ${group.tone}`}
                >
                  <span className="text-micro font-mono uppercase tracking-[0.14em] font-semibold">
                    {group.label}
                  </span>
                  <ul className="flex flex-col gap-2 text-sm text-charcoal/85 leading-relaxed">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-current shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="canvas" className="!py-12">
        <Container size="wide">
          <div className="card-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gradient-subtle">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">Pilot enquiries</span>
              <h3 className="text-h3 text-navy-500">
                Ready to scope a BusinessBrain pilot for your enterprise?
              </h3>
              <p className="text-sm text-charcoal/75 max-w-xl">
                We start with a one-week feasibility scan against your real sources and constraints.
                You walk away with a defensible go / no-go either way.
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
