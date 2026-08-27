import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { team, eyebrowFor, type TeamMember } from '@/data/site'
import { fadeUp, fadeUpStagger, viewport } from '@/lib/motion'

const filled = team.filter((m) => m.status === 'now')
const funded = team.filter((m) => m.status === 'funded')

function Card({ member, index }: { member: TeamMember; index: number }) {
  // A card without a name is a role this round funds, not a person. The dashed
  // treatment carries that distinction visually, so it survives a reader who
  // skims past the headings.
  const isFunded = member.status === 'funded'
  return (
    <motion.div
      variants={fadeUp}
      className={
        isFunded
          ? 'group bg-white/60 border border-dashed border-slate-300 rounded-lg p-6 flex flex-col gap-4 hover:border-cobalt-600/60 transition-colors duration-200'
          : 'group card-surface p-6 flex flex-col gap-4 hover:border-cobalt-600 hover:-translate-y-0.5 hover:shadow-navy-md'
      }
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={
            isFunded
              ? 'text-[11px] font-mono uppercase tracking-[0.1em] text-charcoal/45'
              : 'text-[11px] font-mono uppercase tracking-[0.1em] text-cobalt-600'
          }
        >
          {member.group}
        </span>
        <span className="taxonomy-num">{String(index).padStart(2, '0')}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h3
          className={
            isFunded ? 'text-h4 text-navy-500/70' : 'text-h4 text-navy-500'
          }
        >
          {member.name ?? member.role}
        </h3>
        {member.name && (
          <p className="text-sm text-cobalt-600 font-medium">{member.role}</p>
        )}
      </div>

      {member.note && (
        <p
          className={
            isFunded
              ? 'text-sm text-charcoal/55 leading-relaxed'
              : 'text-sm text-charcoal/80 leading-relaxed'
          }
        >
          {member.note}
        </p>
      )}

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
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
          italic="named, and honestly staged."
          description="Who is here today, and who this funding round hires. We publish the distinction because it tells you more about this company than a headcount would."
        />

        {/* In place today. Solid treatment, so the contrast with the funded
            roles below is legible without reading the headings. */}
        <div className="mt-14">
          <h3 className="eyebrow text-cobalt-600">In place today</h3>
          <motion.div
            variants={fadeUpStagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filled.map((member, i) => (
              <Card
                key={member.name ?? member.role}
                member={member}
                index={i + 1}
              />
            ))}
          </motion.div>
        </div>

        {/* Funded, not filled. These are line items in section 10.2 of the
            funding plan. A reader must not be able to mistake them for staff. */}
        <div className="mt-12">
          <h3 className="eyebrow text-charcoal/60">
            Funded by the current round - not yet filled
          </h3>
          <motion.div
            variants={fadeUpStagger(0.06)}
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
          The platform, the anchor engagement and the client relationship still route through the
          founder. We state that here because we state it in our business plan and to every funder:
          it is the company&rsquo;s principal key-person risk, and the second delivery lead above is
          the hire that closes it. Project-dependent work is extended by a vetted associate bench
          engaged per project, which lets a single engagement scale to the size the work demands
          without carrying, or passing on, the overhead of a large permanent team.
        </motion.p>
      </Container>
    </Section>
  )
}
