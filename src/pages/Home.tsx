import { Hero } from '@/sections/Hero'
import { Marquee } from '@/sections/Marquee'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { Integrations } from '@/sections/Integrations'
import { Platforms } from '@/sections/Platforms'
import { ContractAnalyst } from '@/sections/ContractAnalyst'
import { Novaflow } from '@/sections/Novaflow'
import { CaseStudies } from '@/sections/CaseStudies'
import { Team } from '@/sections/Team'
import { Compliance } from '@/sections/Compliance'
import { Faq } from '@/sections/Faq'
import { CtaStrip } from '@/sections/CtaStrip'
import { Contact } from '@/sections/Contact'
import { Seo } from '@/components/Seo'

export function Home() {
  return (
    <>
      <Seo
        title="NOVATEK® - The Next Industrial Era. Human-led, AI-amplified."
        description="Operations intelligence for mid-market industrial enterprises in regulated, resource-driven economies: power generation, heavy engineering, mining services and fabrication. Based in Johannesburg. POPIA-native, B-BBEE Level 1."
        path="/"
      />
      <Hero />
      <Marquee />
      <Platforms />
      <ContractAnalyst />
      <Services />
      <About />
      <Integrations />
      <Novaflow />
      <CaseStudies />
      <Team />
      <Compliance />
      <Faq />
      <CtaStrip />
      <Contact />
    </>
  )
}
