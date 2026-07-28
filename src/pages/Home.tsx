import { Hero } from '@/sections/Hero'
import { Marquee } from '@/sections/Marquee'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { Integrations } from '@/sections/Integrations'
import { BusinessBrain } from '@/sections/BusinessBrain'
import { CaseStudies } from '@/sections/CaseStudies'
import { Team } from '@/sections/Team'
import { Compliance } from '@/sections/Compliance'
import { CtaStrip } from '@/sections/CtaStrip'
import { Contact } from '@/sections/Contact'
import { Seo } from '@/components/Seo'

export function Home() {
  return (
    <>
      <Seo
        title="NOVATEK® - Intelligent Solutions for South African Enterprise"
        description="South African AI, data and operations-intelligence consultancy for mid-market industrial enterprises across power generation, heavy engineering, mining services and fabrication. POPIA-native, B-BBEE Level 1."
        path="/"
      />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Integrations />
      <BusinessBrain />
      <CaseStudies />
      <Team />
      <Compliance />
      <CtaStrip />
      <Contact />
    </>
  )
}
