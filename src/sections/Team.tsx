import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { team } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

export function Team() {
  return (
    <Section id="team" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow="05 / Our team"
          title="A small, deliberate team —"
          italic="role-led, not name-led."
          description="We deliberately publish capabilities, not bios. The people change; the discipline doesn't. Engagements are scoped to the role, not the headcount."
        />

        <motion.div
          variants={fadeUpStagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.role}
              variants={fadeUp}
              className="group card-surface p-6 flex flex-col gap-5 hover:border-cobalt-600 hover:-translate-y-0.5 hover:shadow-navy-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-hero text-white">
                  <Users className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="taxonomy-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-h4 text-navy-500">{member.role}</h3>
                <p className="text-sm text-cobalt-600 font-medium">
                  {member.focus}
                </p>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {member.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/75 bg-slate-100 border border-slate-200 px-2 py-1 rounded-sharp"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
