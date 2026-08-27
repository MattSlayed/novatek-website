import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { team, eyebrowFor, type TeamMember } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

function Card({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group card-surface p-6 flex flex-col gap-4 hover:border-cobalt-600 hover:-translate-y-0.5 hover:shadow-navy-md"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-cobalt-600">
          {member.group}
        </span>
        <span className="taxonomy-num">{String(index).padStart(2, '0')}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-h4 text-navy-500">{member.name}</h3>
        <p className="text-sm text-cobalt-600 font-medium">{member.role}</p>
      </div>

      {member.note && (
        <p className="text-sm text-charcoal/80 leading-relaxed">{member.note}</p>
      )}

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
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
  )
}

export function Team() {
  return (
    <Section id="team" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow={eyebrowFor('team')}
          title="A small, deliberate team."
          italic="named, and accountable."
          description="Six people, an executive line, an advisory bench and delivery. Engagements are scoped to the capability the work needs, not to a headcount."
        />

        <motion.div
          variants={fadeUpStagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member, i) => (
            <Card key={member.name} member={member} index={i + 1} />
          ))}
        </motion.div>

        {/* The key-person disclosure lives here rather than on a card. It is the
            same statement the business plan and the pitch deck both make, and it
            is stated plainly because a funder will find it either way. */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 max-w-3xl text-charcoal/80 leading-relaxed"
        >
          The platform, the anchor engagement and the client relationship still route through the
          founder. We say so here because we say so in our business plan and to every funder: it is
          the company&rsquo;s principal key-person risk, and a second delivery lead is the first
          hire the current funding round makes. Project-dependent work is extended by a vetted
          associate bench engaged per project, and junior engineering is fed by a Wits Crucible
          graduate pipeline. That lets a single engagement scale to the size the work demands
          without carrying, or passing on, the overhead of a large permanent team.
        </motion.p>
      </Container>
    </Section>
  )
}
