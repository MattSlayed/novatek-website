import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')

  // Mailto fallback — works on any host with no backend.
  // Cloudflare Pages Functions can be added later at /functions/api/contact.ts to handle direct submits.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${name || 'NOVATEK website'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganisation: ${org}\n\n${message}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" tone="canvas">
      <Container size="wide">
        <motion.div
          variants={fadeUpStagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.span variants={fadeUp} className="eyebrow">
              07 / Contact
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h1 text-navy-500 tracking-tight">
              Let's build something{' '}
              <span className="italic font-light text-cobalt-600">intelligent.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-charcoal/85 max-w-xl leading-relaxed"
            >
              Tell us what you're trying to make decidable. We'll come back with what we can
              defensibly commit to — and what we can't.
            </motion.p>

            <motion.dl variants={fadeUp} className="mt-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600">
                  <Mail className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="text-charcoal hover:text-cobalt-600 transition-colors inline-flex items-center gap-1"
                >
                  {company.email}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cobalt-50 text-cobalt-600">
                  <Phone className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <a
                  href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}
                  className="text-charcoal hover:text-cobalt-600 transition-colors"
                >
                  {company.phone}
                </a>
              </div>
            </motion.dl>
          </div>

          <motion.form
            variants={fadeUp}
            onSubmit={onSubmit}
            className="lg:col-span-7 card-surface p-6 md:p-8 flex flex-col gap-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Name"
                value={name}
                onChange={setName}
                required
                autoComplete="name"
              />
              <Field
                label="Work email"
                type="email"
                value={email}
                onChange={setEmail}
                required
                autoComplete="email"
              />
            </div>
            <Field
              label="Organisation"
              value={org}
              onChange={setOrg}
              autoComplete="organization"
            />
            <Field
              label="What are you trying to make decidable?"
              value={message}
              onChange={setMessage}
              required
              multiline
              rows={5}
            />
            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                Submissions open your mail client and pre-fill a message to {company.email}.
                We respond within one working day. POPIA-compliant — no data is stored on this site.
              </p>
              <Button type="submit" size="md" withArrow>
                <Send className="h-4 w-4" aria-hidden="true" />
                Send enquiry
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </Container>
    </Section>
  )
}

interface FieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  required?: boolean
  multiline?: boolean
  rows?: number
  autoComplete?: string
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
  multiline,
  rows = 4,
  autoComplete,
}: FieldProps) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
  const baseInput =
    'w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-sm text-charcoal placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt-600 focus:border-cobalt-600 transition-colors'
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-xs font-mono uppercase tracking-[0.12em] text-charcoal/70">
        {label}
        {required && <span className="text-cobalt-600 ml-1">*</span>}
      </span>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          required={required}
          className={baseInput}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          autoComplete={autoComplete}
          className={baseInput}
        />
      )}
    </label>
  )
}
