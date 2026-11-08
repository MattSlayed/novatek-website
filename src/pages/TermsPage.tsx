import { Link } from 'react-router-dom'
import { CompanyDetails, LegalPage, LegalSection } from '@/components/LegalPage'
import { Seo } from '@/components/Seo'

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms and Conditions | NOVATEK"
        description="The terms that apply when you use the NOVATEK website. Draft for legal review."
        path="/terms"
      />
      <LegalPage
        title="Terms and Conditions"
        intro="These terms apply when you use www.novatekllc.co.za. By using the site you accept them. If you do not accept them, please do not use the site."
      >
        <LegalSection num="01" title="Who we are">
          <p>
            This site is run by NOVATEK LLC, a technology company based in Johannesburg, South
            Africa. In these terms, “we” and “NOVATEK” mean NOVATEK LLC.
          </p>
          <CompanyDetails />
        </LegalSection>

        <LegalSection num="02" title="What this site is">
          <p>
            The site gives general information about NOVATEK, our services and our platforms. It is
            not an offer, a quote or professional advice. You cannot buy anything through it, and
            using it does not make you a client.
          </p>
          <p>
            Our services are governed by a separate written agreement. If that agreement conflicts
            with these terms, the agreement applies.
          </p>
        </LegalSection>

        <LegalSection num="03" title="Information on the site">
          <p>
            We work to keep the site accurate and current, but we do not promise that it is complete
            or free of errors. Please confirm anything important with us before you rely on it.
          </p>
          <p>
            Figures and case studies describe specific past engagements. Your results will depend on
            your own operation. Demonstrations may use simulated or sample data, and what we describe
            may change as our products develop.
          </p>
        </LegalSection>

        <LegalSection num="04" title="Using the site">
          <p>You may use the site for lawful purposes. You may not:</p>
          <ul>
            <li>try to gain unauthorised access to the site or the systems behind it;</li>
            <li>interfere with how the site works, or with anyone else using it; or</li>
            <li>present our content as your own.</li>
          </ul>
        </LegalSection>

        <LegalSection num="05" title="Our content">
          <p>
            The text, graphics, logos and software on this site belong to NOVATEK or to those who
            have licensed them to us. You may view, print and share pages for your own business
            purposes if you say where they came from. Anything else needs our written permission.
          </p>
          <p>Partner names and logos belong to their owners.</p>
        </LegalSection>

        <LegalSection num="06" title="Links to other sites">
          <p>
            We link to partner organisations and other sites. Their own terms and privacy policies
            apply there, and we are not responsible for their content.
          </p>
        </LegalSection>

        <LegalSection num="07" title="Contacting us">
          <p>
            Contacting us does not commit either of us to anything. Email is not a secure channel, so
            please do not send confidential information until we have agreed how to handle it.
          </p>
        </LegalSection>

        <LegalSection num="08" title="Availability">
          <p>We may change, suspend or remove any part of the site at any time, without notice.</p>
        </LegalSection>

        <LegalSection num="09" title="Liability">
          <p>
            We provide the site as it is. As far as the law allows, NOVATEK LLC is not liable for any
            loss that comes from using the site or relying on what it says.
          </p>
          <p>
            Nothing in these terms limits a right you have under the Consumer Protection Act 68 of
            2008, or any other right or liability that the law does not allow us to limit.
          </p>
        </LegalSection>

        <LegalSection num="10" title="Privacy">
          <p>
            Our <Link to="/privacy">Privacy Policy</Link> explains what personal information we
            receive and what we do with it.
          </p>
        </LegalSection>

        <LegalSection num="11" title="Law and disputes">
          <p>
            South African law governs these terms. Disputes go to the High Court of South Africa,
            Gauteng Division, Johannesburg, unless the law gives you the right to use another forum.
          </p>
        </LegalSection>

        <LegalSection num="12" title="Changes to these terms">
          <p>
            We may update these terms. The effective date above shows when they last changed, and
            the version on this page is the one that applies.
          </p>
        </LegalSection>
      </LegalPage>
    </>
  )
}
