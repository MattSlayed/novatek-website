import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { NumberedRow } from '@/components/ui/NumberedRow'
import { services } from '@/data/site'

export function Services() {
  return (
    <Section id="services" tone="canvas">
      <Container size="wide">
        <SectionHeader
          eyebrow="02 / What we do"
          title="Six disciplines."
          italic="One integrated approach."
          description="Every engagement starts with the same question — what does Defensible look like for this client, this industry, this constraint set? Then we build only what stays standing."
        />

        <div className="mt-12">
          {services.map((service) => (
            <NumberedRow
              key={service.num}
              num={service.num}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bullets={service.bullets}
            />
          ))}
          <div className="border-t border-slate-200" />
        </div>
      </Container>
    </Section>
  )
}
