import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LinkButton } from '@/components/ui/Button'
import { platform, eyebrowFor } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function Platforms() {
  return (
    <Section id="platforms" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow={eyebrowFor('platforms')}
          title="One platform."
          italic={`${platform.name}.`}
          description={platform.lede}
        />

        {/* What it is, before how it is built. The three cards carry the two
            resolutions this section depends on: single VIEW not single record,
            and current rather than real time. Both are load-bearing - the first
            keeps us a processor rather than an owner, the second keeps us out
            of a claim about telemetry we do not ingest. */}
        <motion.div
          variants={fadeUpStagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {platform.positioning.map((p) => (
            <motion.div key={p.title} variants={fadeUp} className="card-surface p-6 flex flex-col gap-2">
              <h3 className="text-h4 text-navy-500">{p.title}</h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>






        <motion.div
          variants={fadeUpStagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 grid gap-4 lg:grid-cols-2"
        >
          {platform.surfaces.map((s) => (
            <motion.article
              key={s.num}
              variants={fadeUp}
              className="card-surface p-6 md:p-8 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600">
                  <s.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="taxonomy-num">{s.num}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-h3 text-navy-500 leading-tight">{s.name}</h3>
                <p className="text-sm text-cobalt-600 font-medium">{s.where}</p>
                <span className="mt-1 self-start text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/75 bg-slate-100 border border-slate-200 px-2 py-1 rounded-sharp">
                  {s.maturity}
                </span>
              </div>

              <p className="text-sm text-charcoal/80 leading-relaxed">{s.description}</p>

              <ul className="flex flex-col gap-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-charcoal/70">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-cobalt-600"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Modes, not products. Nesting them inside the surface is the
                  point: Ask is a way of working within the twin, and the old
                  site sold it as a peer product, which was a category error. */}
              {s.modes && (
                <div className="mt-2 border-t border-slate-200 pt-4 flex flex-col gap-3">
                  <span className="eyebrow text-charcoal/60">
                    Three ways of working, inside {s.name}
                  </span>
                  {s.modes.map((m) => (
                    <div key={m.name} className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-navy-500">{m.name}</span>
                      <p className="text-xs text-charcoal/70 leading-relaxed">{m.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {s.demo && (
                <div className="mt-auto pt-3 flex flex-col gap-2">
                  <LinkButton
                    href={s.demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                    size="sm"
                    withArrow
                  >
                    {s.demo.label}
                  </LinkButton>
                  <p className="text-xs text-charcoal/60 leading-relaxed">{s.demo.boundary}</p>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-6"
        >
          <LinkButton href={platform.href} size="lg" withArrow>
            Read the architecture brief
          </LinkButton>
        </motion.div>

      </Container>
    </Section>
  )
}
