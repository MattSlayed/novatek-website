import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Container } from './ui/Container'
import { company, navLinks } from '@/data/site'
import { Mail, Phone, MapPin, ShieldCheck, Lock } from 'lucide-react'

function useSastClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-ZA', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Africa/Johannesburg',
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function Footer() {
  const sast = useSastClock()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-500 text-white">
      <Container size="wide" className="py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Logo variant="white" size="md" />
            <p className="text-white/70 max-w-md leading-relaxed">
              {company.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span className="inline-flex h-2 w-2 rounded-full bg-cobalt-400 animate-pulse" />
              <span className="font-mono tabular-numerals">SAST {sast}</span>
              <span aria-hidden="true">·</span>
              <span>Johannesburg</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-micro font-mono uppercase tracking-[0.14em] text-white/50">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={`/${l.href}`}
                    className="text-white/80 hover:text-cobalt-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/businessbrain"
                  className="text-white/80 hover:text-cobalt-400 transition-colors"
                >
                  BusinessBrain platform
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-micro font-mono uppercase tracking-[0.14em] text-white/50">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cobalt-400" aria-hidden="true" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-cobalt-400 transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cobalt-400" aria-hidden="true" />
                <a
                  href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}
                  className="hover:text-cobalt-400 transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cobalt-400" aria-hidden="true" />
                <span>{company.region}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between text-xs text-white/50 font-mono uppercase tracking-[0.14em]">
          <span>
            © {year} {company.legalName}. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-5">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-cobalt-400" aria-hidden="true" />
              BBBEE Level 1
            </span>
            <span className="inline-flex items-center gap-2">
              <Lock className="h-3.5 w-3.5 text-cobalt-400" aria-hidden="true" />
              POPIA Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cobalt-400" />
              af-south-1
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
