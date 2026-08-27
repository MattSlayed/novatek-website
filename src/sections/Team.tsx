import { motion } from 'framer-motion'
import { Users, UserPlus } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { team, eyebrowFor, type TeamMember } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

const filled = team.filter((m) => m.status === 'now')
const funded = team.filter((m) => m.status === 'funded')

function Card({ member, index }: { member: TeamMember; index: number }) {
  const isFunded = member.status === 'funded'
  return (
    <motion.div
      variants={fadeUp}
      className={
        isFunded
          ? 'group bg-white/60 border border-dashed border-slate-300 rounded-lg p-6 flex flex-col gap-5 hover:border-cobalt-600/60 transition-colors duration-200'
          : 'group card-surface p-6 flex flex-col gap-5 hover:border-cobalt-600 hover:-translate-y-0.5 hover:shadow-navy-md'
      }
    >
      <div className="flex items-center justify-between">
        <span
          className={
            isFunded
              ? 'flex h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-charcoal/50 border border-slate-200'
              : 'flex h-11 w-11 items-center justify-center rounded-md bg-gradient-hero text-white'
          }
        >
          {isFunded ? (
            <UserPlus className="h-5 w-5" strokeWidth={1.6} />
          ) : (
            <Users className="h-5 w-5" strokeWidth={1.6} />
          )}
        </span>
        <span className="taxonomy-num">{String(index).padStart(2, '0')}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3
          className={
            isFunded ? 'text-h4 text-navy-500/70' : 'text-h4 text-navy-500'
          }
        >
          {member.role}
        </h3>
        <p
          className={
            isFunded
              ? 'text-sm text-charcoal/55 font-medium'
              : 'text-sm text-cobalt-600 font-medium'
          }
        >
          {member.focus}
        </p>
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {member.capabilities.map((cap) => (
          <li
            key={cap}
            className={
              isFunded
                ? 'text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/50 bg-transparent border border-dashed border-slate-300 px-2 py-1 rounded-sharp'
                : 'text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/75 bg-slate-100 border border-slate-200 px-2 py-1 rounded-sharp'
            }
          >
            {cap}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Team() {
  return (
    <Section id="team" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow={eyebrowFor('team')}
          title="A small, deliberate team."
          italic="role-led, not name-led."
          description="We deliberately publish capabilities, not bios. We also publish which roles are filled today and which the current funding round hires — the distinction tells you more about this company than a headcount would."
        />

        {/* Filled today. Kept visually solid so the contrast with the funded
            roles below is legible without reading the headings. */}
        <div className="mt-14">
          <h3 className="eyebrow text-cobalt-600">In place today</h3>
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filled.map((member, i) => (
              <Card key={member.role} member={member} index={i + 1} />
            ))}
          </motion.div>
        </div>

        {/* Funded, not filled. These are line items in the funding plan. The
            dashed treatment is the point: a reader must not be able to mistake
            them for staff at a glance. */}
        <div className="mt-12">
          <h3 className="eyebrow text-charcoal/60">
            Funded by the current round — not yet filled
          </h3>
          <motion.div
            variants={fadeUpStagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {funded.map((member, i) => (
              <Card
                key={member.role}
                member={member}
                index={filled.length + i + 1}
              />
            ))}
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 max-w-3xl text-charcoal/80 leading-relaxed"
        >
          Today the platform, the anchor engagement and the client relationship all route through
          one person. We state that here because we state it in our business plan and to every
          funder: it is the company&rsquo;s principal key-person risk, and closing it is what this
          round is for. NOVAFLOW is led separately, by a divisional head with more than 45 years in
          rotating equipment. Junior engineering roles are fed by a Wits Crucible graduate pipeline,
          and project-dependent work is extended by a vetted associate bench engaged per project.
          That lets a single engagement scale to the size the work demands without carrying, or
          passing on, the overhead of a large permanent team.
        </motion.p>
      </Container>
    </Section>
  )
}
