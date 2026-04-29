import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import {
  businessBrainCapabilities,
  businessBrainTiers,
  businessBrainQuotes,
} from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function BusinessBrain() {
  return (
    <Section id="businessbrain" tone="inverse" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-dots opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(closest-side, rgba(37,99,235,0.55), transparent)',
        }}
      />

      <Container size="wide">
        <motion.div
          variants={fadeUpStagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-10 lg:grid-cols-12 lg:gap-16 mb-20"
        >
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.span variants={fadeUp} className="eyebrow text-cobalt-400">
              03 / Flagship platform
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-h1 text-white tracking-tight"
            >
              BusinessBrain.{' '}
              <span className="font-light italic text-white/65">
                Institutional memory that survives the people who built it.
              </span>
            </motion.h2>
            <motion.blockquote
              variants={fadeUp}
              className="border-l-2 border-cobalt-400 pl-5 text-body-lg text-white/85 max-w-3xl leading-relaxed"
            >
              "The graph is the memory. The agents are the interface. MCP is the
              integration seam." A retrieval-and-reasoning layer over your existing
              Microsoft 365, AWS, and Postgres systems — not a new system of record.
            </motion.blockquote>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2">
              <LinkButton
                href="/businessbrain"
                size="lg"
                variant="inverse"
                withArrow
              >
                Read the architecture brief
              </LinkButton>
              <Link
                to="/businessbrain#feasibility"
                className="inline-flex items-center gap-1 text-sm text-cobalt-400 hover:text-white transition-colors"
              >
                Feasibility review &amp; open questions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            <span className="text-micro font-mono uppercase tracking-[0.14em] text-cobalt-400">
              Architecture · top-to-bottom flow
            </span>
            <ol className="flex flex-col rounded-lg overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              {businessBrainTiers.map((tier, i) => (
                <li
                  key={tier.label}
                  className="grid grid-cols-[auto_1fr] gap-4 p-5 border-b border-white/5 last:border-b-0 hover:bg-white/[0.04] transition-colors"
                >
                  <span className="taxonomy-num text-cobalt-400 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">{tier.label}</span>
                    <span className="text-sm text-white/65">{tier.sub}</span>
                    <span className="text-xs text-white/45 font-mono mt-1">
                      {tier.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="text-xs text-white/40 mt-1 flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-amber"
                aria-hidden="true"
              />
              Amber edges denote provenance-carrying flows.
            </div>
          </motion.div>
        </motion.div>

        {/* Capability grid */}
        <motion.div
          variants={fadeUpStagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden"
        >
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-white/10">
            {businessBrainCapabilities.map((cap) => (
              <motion.div
                key={cap.num}
                variants={fadeUp}
                className="bg-navy-500 p-6 flex flex-col gap-3 hover:bg-navy-700 transition-colors duration-200 ease-out-quart group"
              >
                <div className="flex items-center justify-between">
                  <span className="taxonomy-num text-cobalt-400">{cap.num}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cobalt-600/20 text-cobalt-400 group-hover:bg-cobalt-600 group-hover:text-white transition-colors">
                    <cap.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                </div>
                <h3 className="text-h4 text-white leading-tight">{cap.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pull quotes */}
        <motion.div
          variants={fadeUpStagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-20 grid gap-6 md:grid-cols-2"
        >
          {businessBrainQuotes.slice(0, 2).map((q) => (
            <motion.figure
              key={q}
              variants={fadeUp}
              className="border-l-2 border-cobalt-400 pl-6 py-2 text-body-lg text-white/85 italic font-light leading-relaxed"
            >
              {q}
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
