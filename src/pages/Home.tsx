import { Hero } from '@/sections/Hero'
import { Marquee } from '@/sections/Marquee'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { BusinessBrain } from '@/sections/BusinessBrain'
import { CaseStudies } from '@/sections/CaseStudies'
import { Team } from '@/sections/Team'
import { Compliance } from '@/sections/Compliance'
import { CtaStrip } from '@/sections/CtaStrip'
import { Contact } from '@/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <BusinessBrain />
      <CaseStudies />
      <Team />
      <Compliance />
      <CtaStrip />
      <Contact />
    </>
  )
}
