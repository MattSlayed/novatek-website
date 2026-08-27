import { motion } from 'framer-motion'
import { FileSearch } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { contractAnalyst, eyebrowFor } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

/**
 * Business Plan v3.1 section 3.3, and deliberately its own section rather than
 * a card beside the platform. This is the only capability in the portfolio with
 * a `measured` outcome and the only one currently being paid for. As one tile
 * in a product grid it read as equal to things that are not built yet; here it
 * is the proof the rest of the argument leans on.
 */
export function ContractAnalyst() {
  return (
    <Section id="contract-analyst" tone="subtle">
      <Container size="wide">
        <SectionHeader
          eyebrow={eyebrowFor('contract-analyst')}
          title="The thing that pays for it today."
          italic={`${contractAnalyst.name}.`}
          description={contractAnalyst.lede}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-hero text-white">
                <FileSearch className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/75 bg-slate-100 border border-slate-200 px-2 py-1 rounded-sharp">
                {contractAnalyst.maturity}
              </span>
            </div>

            <p className="text-charcoal/85 leading-relaxed">
              {contractAnalyst.description}
            </p>

            <div className="card-surface p-6 flex flex-col gap-3">
              <h3 className="text-h4 text-navy-500">
                {contractAnalyst.localContent.title}
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                {contractAnalyst.localContent.description}
              </p>
              <ul className="flex flex-wrap gap-1.5 pt-1">
                {contractAnalyst.localContent.tags.map((t) => (
                  <li
                    key={t}
                    className="text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/75 bg-slate-100 border border-slate-200 px-2 py-1 rounded-sharp"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {contractAnalyst.metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className={
                  m.emphasis
                    ? 'card-surface p-6 flex flex-col gap-1 border-cobalt-600'
                    : 'card-surface p-6 flex flex-col gap-1'
                }
              >
                <span
                  className={
                    m.emphasis
                      ? 'tabular-numerals text-4xl md:text-5xl font-semibold tracking-tight text-cobalt-600'
                      : 'tabular-numerals text-3xl font-semibold tracking-tight text-navy-500'
                  }
                >
                  {m.value}
                </span>
                <span className="eyebrow text-charcoal">{m.label}</span>
                {m.detail && (
                  <span className="text-sm text-slate-500">{m.detail}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
