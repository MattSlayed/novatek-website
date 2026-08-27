import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LinkButton } from '@/components/ui/Button'
import { platforms, eyebrowFor } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function Platforms() {
  return (
    <Section id="platforms" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow={eyebrowFor('platforms')}
          title="Five platforms."
          italic="Each labelled by the stage it is actually at."
          description="Consulting delivery produces tools. The tools that generalise become products. We publish where each one sits on that path, including the ones that are not finished."
        />

        <motion.div
          variants={fadeUpStagger(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {platforms.map((p) => (
            <motion.article
              key={p.num}
              variants={fadeUp}
              className="bg-white p-6 flex flex-col gap-4 hover:bg-cobalt-50/40 transition-colors duration-200 ease-out-quart group"
            >
              <div className="flex items-center justify-between">
                <span className="taxonomy-num">{p.num}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600 group-hover:bg-cobalt-600 group-hover:text-white transition-colors duration-200">
                  <p.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-h4 text-navy-500 leading-tight">
                  {p.name}
                  {p.flagship && (
                    <span className="ml-2 align-middle text-[11px] font-mono uppercase tracking-[0.1em] text-cobalt-700">
                      Flagship
                    </span>
                  )}
                </h3>
                {p.expanded && (
                  <p className="text-xs text-charcoal/60">{p.expanded}</p>
                )}
                <span className="mt-1 self-start text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/75 bg-slate-100 border border-slate-200 px-2 py-1 rounded-sharp">
                  {p.maturity}
                </span>
              </div>

              <p className="text-sm text-charcoal/80 leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-auto flex flex-col gap-1.5 pt-2">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-xs text-charcoal/70"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-cobalt-600"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {p.href && (
                <div className="pt-2">
                  <LinkButton href={p.href} variant="ghost" size="sm" withArrow>
                    Read the architecture brief
                  </LinkButton>
                </div>
              )}

              {p.demo && (
                <div className="pt-2 flex flex-col gap-2">
                  <LinkButton
                    href={p.demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                    size="sm"
                    withArrow
                  >
                    {p.demo.label}
                  </LinkButton>
                  <p className="text-xs text-charcoal/60 leading-relaxed">
                    {p.demo.boundary}
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
