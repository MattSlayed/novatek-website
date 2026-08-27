import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { LinkButton } from '@/components/ui/Button'
import { PlatformOrbit } from '@/sections/visuals/PlatformOrbit'
import { platformCapabilities, platform, platformQuotes } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport, wordReveal } from '@/lib/motion'
import { Seo } from '@/components/Seo'

const headline = ['Institutional', 'memory.', 'Engineered.']

export function PlatformPage() {
  return (
    <>
      <Seo
        title="NOVACORE - Institutional Memory, Engineered | NOVATEK®"
        description="NOVACORE: an institutional-memory platform for SA mid-market enterprise - a graph-and-agent retrieval layer over your M365, Google Cloud and Postgres systems."
        path="/platform"
      />
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
                NOVACORE · The platform
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
                A retrieval-and-reasoning layer that sits over your existing Microsoft 365, Google Cloud,
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
              <PlatformOrbit />
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
                'Critical relationships between contracts, vendors, projects, and decisions live in employees\' heads - and lapse with staff turnover.',
                'Multi-hop questions ("which open invoices relate to contracts signed by Vendor X against cost-centre Y in Q1?") break vector RAG.',
                'POPIA s.23 subject-access requests become manual reconstruction projects - exactly what POPIA was designed to disincentivise.',
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

      {/* How the map is built. This replaced a four-tier table that named
          Claude Agent SDK, Neo4j, pgvector, the MCP server list, Microsoft
          Graph and Google Cloud Storage. Business Plan v3.1 s4 describes
          commitments rather than implementations, on the reasoning that
          naming a particular store as an identity is a mistake. A buyer does
          not choose between graph databases, and the table dated the moment
          any one component changed. */}
      <Section id="architecture" tone="inverse">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col"
          >
            <motion.span variants={fadeUp} className="eyebrow text-cobalt-400">
              Architecture
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h2 text-white mt-3 max-w-3xl">
              {platform.mechanism.title.split(', and')[0]}.{' '}
              <span className="italic font-light text-white/65">
                And why it answers.
              </span>
            </motion.h2>

            <motion.ol
              variants={fadeUp}
              className="mt-10 grid gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden sm:grid-cols-3"
            >
              {platform.sequence.map((step) => (
                <li key={step.num} className="bg-navy-500 p-6 flex flex-col gap-2">
                  <span className="taxonomy-num text-cobalt-400">{step.num}</span>
                  <span className="text-h4 text-white">{step.title}</span>
                  <p className="text-sm text-white/70 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </motion.ol>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden"
            >
              {platform.stack.tiers.map((tier) => (
                <div
                  key={tier.label}
                  className="bg-navy-500 p-5 md:p-6 grid gap-2 md:grid-cols-12 md:items-center"
                >
                  <div className="md:col-span-3 flex flex-col">
                    <span className="eyebrow text-cobalt-400">{tier.label}</span>
                    <span className="text-xs text-white/55">{tier.note}</span>
                  </div>
                  <ul className="md:col-span-9 flex flex-wrap gap-2">
                    {tier.items.map((it) => (
                      <li
                        key={it}
                        className="text-xs font-mono tracking-[0.04em] text-white/80 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-sharp"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 text-sm italic text-white/60">
              {platform.stack.caption}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 grid gap-6 lg:grid-cols-2">
              <p className="text-body-lg text-white/75 leading-relaxed">
                {platform.mechanism.body}
              </p>
              <p className="text-body-lg text-white/75 leading-relaxed">
                {platform.mechanism.graphRag}
              </p>
            </motion.div>
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
            {platformCapabilities.map((cap) => (
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
            {platformQuotes.map((q) => (
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
                    'POPIA-native provenance - citation chains by construction',
                    'Data residency by jurisdiction: client data stored in-country, routine processing in-region, and any cross-border inference for frontier models disclosed explicitly. South Africa today, under POPIA; the same pattern applies wherever the rules do',
                    'Load-shedding-resilient by design - degraded-mode is an operating assumption',
                    'Human Confirmation Gate is permanent, not a temporary scaffold',
                    'Source systems remain authoritative - NOVACORE reads and proposes, never the truth',
                  ],
                },
                {
                  label: 'Aspirational',
                  tone: 'bg-amber-soft/15 border-amber-soft/40 text-amber',
                  items: [
                    'SA-language entity resolution (isiZulu, isiXhosa, Afrikaans) - actively researched, not yet shipped',
                    'Multi-hop query faithfulness materially higher than tuned vector RAG (falsifiable hypothesis under test)',
                  ],
                },
                {
                  label: 'Undefendable',
                  tone: 'bg-slate-100 border-slate-300 text-slate-600',
                  items: [
                    '"We understand SA business better than competitors" - not architecturally provable; we don\'t lean on it',
                    'Eliminating labour, replacing judgement, or eliminating hallucination - none of these are claims we make',
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
                Ready to scope a NOVACORE pilot for your enterprise?
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
