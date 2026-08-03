import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Check, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { LinkButton } from '@/components/ui/Button'
import { NovaflowWaves } from '@/sections/visuals/NovaflowWaves'
import { novaflow } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport, wordReveal } from '@/lib/motion'
import { Seo } from '@/components/Seo'

const headline = ['Reliability,', 'proven', 'with data.']

export function NovaflowPage() {
  return (
    <>
      <Seo
        title="NOVAFLOW by NOVATEK® - Pump and Valve Reliability, Proven with Data"
        description="NOVAFLOW is NOVATEK's flow-assets division: brand-agnostic service, repair and reliability for pumps and valves, with cross-brand asset intelligence and local-content compliance built in."
        path="/novaflow"
        image="https://www.novatekllc.co.za/og-novaflow.png"
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
                {novaflow.lockup} · {novaflow.byline}
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
                {novaflow.lede}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-2"
              >
                {novaflow.tags.map((t) => (
                  <li
                    key={t}
                    className="text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/75 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-sharp"
                  >
                    {t}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap gap-3"
              >
                <LinkButton href="#scope" size="lg" withArrow>
                  Scope boundaries
                </LinkButton>
                <LinkButton href="#approach" size="lg" variant="ghost">
                  How it is built
                </LinkButton>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <NovaflowWaves />
            </div>
          </div>
        </Container>
      </section>

      {/* Why it exists */}
      <Section tone="subtle">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-12 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-5 flex flex-col gap-5">
              <motion.span variants={fadeUp} className="eyebrow">
                Why it exists
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-h1 text-navy-500 tracking-tight">
                Models are commodities.{' '}
                <span className="font-light italic text-slate-500">
                  The operating record they are correct about is not.
                </span>
              </motion.h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-charcoal/85 text-body-lg leading-relaxed">
              <motion.p variants={fadeUp}>
                Every competitor can license the same models. None of them has the maintenance
                record of the Highveld&apos;s installed base, and none can acquire it by writing
                code. NOVAFLOW is how we acquire it, and three structural facts are worth stating
                up front.
              </motion.p>
              <motion.ul variants={fadeUp} className="flex flex-col gap-3">
                {novaflow.structure.map((f, i) => (
                  <li key={f} className="flex items-start gap-3 text-base">
                    <span className="taxonomy-num mt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Evidence */}
      <Section id="evidence" tone="canvas">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5 max-w-3xl"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              The evidence
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h1 text-navy-500 tracking-tight">
              The value is in reliability,{' '}
              <span className="font-light italic text-slate-500">not in the box.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-charcoal/85 leading-relaxed">
              Across every major manufacturer the aftermarket earns roughly double the margin of new
              equipment, and it is where operators feel the pain. NOVAFLOW is built on the
              profitable half of that split.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-10 overflow-x-auto"
          >
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="py-3 pr-6 eyebrow font-normal">Manufacturer</th>
                  <th className="py-3 pr-6 eyebrow font-normal">New equipment</th>
                  <th className="py-3 pr-6 eyebrow font-normal">Service / aftermarket</th>
                  <th className="py-3 eyebrow font-normal">As of</th>
                </tr>
              </thead>
              <tbody>
                {novaflow.margins.map((m) => (
                  <tr key={m.company} className="border-b border-slate-200/70">
                    <td className="py-4 pr-6 font-medium text-navy-500">{m.company}</td>
                    <td className="py-4 pr-6 text-charcoal/75 tabular-numerals">
                      {m.newEquipment}
                    </td>
                    <td className="py-4 pr-6 text-cobalt-600 font-medium tabular-numerals">
                      {m.aftermarket}
                    </td>
                    <td className="py-4 text-charcoal/60 font-mono text-xs">{m.asOf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            variants={fadeUpStagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-8 sm:grid-cols-3"
          >
            {novaflow.lifecycle.map((l) => (
              <motion.div key={l.label} variants={fadeUp} className="flex flex-col gap-1">
                <span className="text-h1 font-semibold text-navy-500 tabular-numerals leading-none">
                  {l.value}
                </span>
                <span className="text-sm text-charcoal/75">{l.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-8 max-w-3xl text-charcoal/85 leading-relaxed"
          >
            Over a 15 to 20 year life the pump itself is roughly a tenth of total cost. Pump systems
            consume up to 20% of global electricity, on Europump&apos;s estimate. The defensible rand
            values live in energy and reliability, not in the purchase price.
          </motion.p>
        </Container>
      </Section>

      {/* Scope boundaries */}
      <Section id="scope" tone="inverse">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5 max-w-3xl"
          >
            <motion.span variants={fadeUp} className="eyebrow text-cobalt-400">
              Scope
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h1 text-white tracking-tight">
              Two columns.{' '}
              <span className="font-light italic text-white/65">
                The right-hand one matters more.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-white/75 leading-relaxed">
              Scope boundaries are published, not implied. NOVAFLOW is a service and intelligence
              business. It is not a distributor, and nothing on this page should be read as one.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUpStagger(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h3 className="text-micro font-mono uppercase tracking-[0.14em] text-cobalt-400">
                NOVAFLOW does
              </h3>
              <ul className="flex flex-col gap-3">
                {novaflow.scope.does.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-white/85 leading-relaxed">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-cobalt-400"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h3 className="text-micro font-mono uppercase tracking-[0.14em] text-white/50">
                NOVAFLOW does not
              </h3>
              <ul className="flex flex-col gap-3">
                {novaflow.scope.doesNot.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-white/85 leading-relaxed">
                    <X
                      className="mt-1 h-4 w-4 shrink-0 text-white/40"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Markets */}
      <Section tone="subtle">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5 max-w-3xl"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Markets
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h1 text-navy-500 tracking-tight">
              Built for South Africa&apos;s flow challenge,{' '}
              <span className="font-light italic text-slate-500">and for the region.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeUpStagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-8 md:grid-cols-2"
          >
            {novaflow.markets.map((m) => (
              <motion.div key={m.region} variants={fadeUp} className="card-surface p-6 md:p-8">
                <h3 className="text-h3 text-navy-500">{m.region}</h3>
                <ul className="mt-5 flex flex-col gap-4">
                  {m.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-3 text-sm text-charcoal/80 leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-cobalt-600"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Approach */}
      <Section id="approach" tone="canvas">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5 max-w-3xl"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Approach
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h1 text-navy-500 tracking-tight">
              A disciplined, staged build.{' '}
              <span className="font-light italic text-slate-500">Each stage earns the next.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-charcoal/85 leading-relaxed">
              NOVAFLOW grows the way a reliability business should: intelligence first, service
              second, scale last. Every stage is self-funded, reversible and gated on evidence
              rather than on optimism.
            </motion.p>
          </motion.div>

          <motion.ol
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {novaflow.stages.map((s) => (
              <motion.li key={s.num} variants={fadeUp} className="card-surface p-6 flex flex-col gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-hero text-white font-mono text-sm">
                  {s.num}
                </span>
                <span className="eyebrow">{s.when}</span>
                <h3 className="text-h4 text-navy-500 leading-tight">{s.title}</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">{s.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </Container>
      </Section>

      {/* Partnership */}
      <Section tone="subtle">
        <Container size="wide">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5 max-w-3xl"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Partnership
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h1 text-navy-500 tracking-tight">
              Complementary,{' '}
              <span className="font-light italic text-slate-500">not competitive.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-charcoal/85 leading-relaxed">
              NOVAFLOW is designed to work with the ecosystem rather than against it. Established
              distributors, local manufacturers and equipment brands bring product, manufacturing
              and installed base. We bring the intelligence, reliability and compliance layer.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUpStagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {novaflow.partnership.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="card-surface p-6 md:p-8 flex flex-col gap-3">
                <h3 className="text-h4 text-navy-500">{p.title}</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="canvas">
        <Container size="narrow">
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="card-surface p-8 md:p-12 flex flex-col gap-5 text-center items-center"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Flow-asset enquiries
            </motion.span>
            <motion.h3 variants={fadeUp} className="text-h2 text-navy-500 tracking-tight">
              Talk to us about a flow-asset engagement.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-charcoal/80 leading-relaxed max-w-xl">
              We start with the digital layer on assets you already run. You get a scoped, evidenced
              view of what reliability is actually costing you before anything physical is committed.
            </motion.p>
            <motion.div variants={fadeUp}>
              <LinkButton href="/#contact" size="lg" withArrow>
                Start a conversation
              </LinkButton>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
