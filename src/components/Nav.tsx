import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { LinkButton } from './ui/Button'
import { Container } from './ui/Container'
import { navLinks } from '@/data/site'
import { cn } from '@/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // On non-root pages, hash-style anchors should send us back to "/" first.
  const onRoot = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleAnchor = (href: string) => (e: React.MouseEvent) => {
    if (!onRoot) return // let normal navigation send us to /, then anchor
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-quart',
        scrolled || open
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            aria-label="NOVATEK home"
            onClick={() => onRoot && window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo variant="gradient" size="md" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={onRoot ? link.href : `/${link.href}`}
                onClick={handleAnchor(link.href)}
                className="text-sm font-medium text-charcoal/80 hover:text-cobalt-600 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LinkButton
              href={onRoot ? '#contact' : '/#contact'}
              onClick={onRoot ? handleAnchor('#contact') : undefined}
              variant="primary"
              size="sm"
              withArrow
              className="hidden md:inline-flex"
            >
              Let's talk
            </LinkButton>

            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-500 hover:bg-slate-100"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile primary"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-slate-200 bg-white"
          >
            <Container size="wide" className="py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={onRoot ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (!onRoot) {
                      navigate('/' + link.href)
                      setOpen(false)
                      return
                    }
                    handleAnchor(link.href)(e)
                  }}
                  className="px-3 py-3 text-base font-medium text-charcoal hover:bg-slate-50 rounded-md"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={onRoot ? '#contact' : '/#contact'}
                onClick={(e) => onRoot && handleAnchor('#contact')(e)}
                className="mt-2 mx-3 inline-flex items-center justify-center rounded-sharp bg-cobalt-600 text-white h-11 font-medium hover:bg-cobalt-700"
              >
                Let's talk
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
