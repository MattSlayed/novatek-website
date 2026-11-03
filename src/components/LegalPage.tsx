import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { company } from '@/data/site'

/** A fact only NOVATEK can supply. Stays visible on the page until it is filled in. */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-sharp border border-dashed border-cobalt-600 bg-cobalt-50 px-1 font-mono text-[0.8em] text-cobalt-700">
      [{children}]
    </mark>
  )
}

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string
  intro: ReactNode
  children: ReactNode
}) {
  return (
    <Section tone="canvas" className="pt-28 md:pt-36">
      <Container size="narrow">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-charcoal/70 hover:text-cobalt-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to NOVATEK
        </Link>

        <span className="eyebrow mt-10 block">Legal</span>
        <h1 className="text-h1 mt-3">{title}</h1>

        <div className="mt-8 border-l-2 border-cobalt-600 bg-cobalt-50 p-5 text-sm leading-relaxed text-navy-500">
          <strong className="font-semibold">Draft for legal review.</strong> A lawyer has not yet
          reviewed this text. Items in [brackets] are still to be filled in by NOVATEK.
        </div>

        <p className="mt-6 text-sm text-charcoal/70">
          Effective date: <Placeholder>effective date</Placeholder>
        </p>
        <p className="mt-6 text-body-lg text-charcoal/85">{intro}</p>

        <div className="mt-12 flex flex-col gap-10">{children}</div>
      </Container>
    </Section>
  )
}

export function LegalSection({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-slate-200 pt-8">
      <span className="taxonomy-num">{num}</span>
      <h2 className="text-h3 mt-2">{title}</h2>
      <div className="mt-4 flex flex-col gap-3 leading-relaxed text-charcoal/85 [&_a]:text-cobalt-600 [&_a]:underline [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}

export function CompanyDetails({ children }: { children?: ReactNode }) {
  return (
    <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[12rem_1fr]">
      <dt className="font-medium text-navy-500">Legal name</dt>
      <dd>NOVATEK LLC</dd>
      <dt className="font-medium text-navy-500">Registration number</dt>
      <dd>{company.registrationNumber}</dd>
      <dt className="font-medium text-navy-500">Registered address</dt>
      <dd>
        <Placeholder>registered address</Placeholder>
      </dd>
      <dt className="font-medium text-navy-500">Email</dt>
      <dd>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </dd>
      <dt className="font-medium text-navy-500">Telephone</dt>
      <dd>
        <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>{company.phone}</a>
      </dd>
      {children}
    </dl>
  )
}
