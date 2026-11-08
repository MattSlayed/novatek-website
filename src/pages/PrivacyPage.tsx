import { Link } from 'react-router-dom'
import { CompanyDetails, LegalPage, LegalSection, Placeholder } from '@/components/LegalPage'
import { Seo } from '@/components/Seo'
import { company } from '@/data/site'

// Section 04 is a factual claim about the build. Recheck it if forms, cookies,
// analytics or third-party scripts are ever added to the site.
export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | NOVATEK"
        description="What personal information the NOVATEK website and enquiries involve, and your rights under POPIA. Draft for legal review."
        path="/privacy"
      />
      <LegalPage
        title="Privacy Policy"
        intro="This site has no forms, no accounts, no cookies and no analytics. We receive personal information in two ways: when you contact us, and through the technical logs our hosting provider keeps. This policy explains both, as the Protection of Personal Information Act 4 of 2013 (POPIA) requires."
      >
        <LegalSection num="01" title="Who is responsible">
          <p>{company.legalName} is the responsible party for the personal information described here.</p>
          <CompanyDetails>
            <dt className="font-medium text-navy-500">Information Officer</dt>
            <dd>{company.informationOfficer}</dd>
            <dt className="font-medium text-navy-500">Information Officer email</dt>
            <dd>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </dd>
          </CompanyDetails>
        </LegalSection>

        <LegalSection num="02" title="What this policy covers">
          <p>
            It covers this website and the enquiries you send us. If you or your employer is a
            client, the personal information in our work together is covered by the service agreement
            and its Data Processing Disclosure.
          </p>
        </LegalSection>

        <LegalSection num="03" title="What we receive">
          <ul>
            <li>
              <strong className="font-medium text-navy-500">When you email us:</strong> your email
              address, your name and whatever you include in your message.
            </li>
            <li>
              <strong className="font-medium text-navy-500">When you phone us:</strong> your number
              and what you tell us on the call.
            </li>
            <li>
              <strong className="font-medium text-navy-500">When you visit the site:</strong> our
              hosting provider handles technical information about each request: your IP address,
              browser and device details, the page requested, and the date and time.
            </li>
          </ul>
          <p>
            We do not ask for special personal information, such as health or biometric details.
            Please do not send it to us in an enquiry.
          </p>
        </LegalSection>

        <LegalSection num="04" title="What this site does not do">
          <ul>
            <li>It has no enquiry forms, sign-ups or accounts.</li>
            <li>It sets no cookies and stores nothing in your browser.</li>
            <li>It runs no analytics, advertising or tracking scripts.</li>
            <li>
              It serves its fonts and images from our own domain, so loading a page does not send
              your details to a font or image service.
            </li>
          </ul>
          <p>
            We do not sell personal information, and we do not add you to a marketing list unless you
            ask us to.
          </p>
        </LegalSection>

        <LegalSection num="05" title="Why we use it">
          <ul>
            <li>
              To reply to you and to prepare any work you ask us about. This is a step towards a
              contract (POPIA section 11(1)(b)).
            </li>
            <li>
              To run our business and keep the site secure and working. This is our legitimate
              interest (section 11(1)(f)).
            </li>
            <li>To keep records that the law requires us to keep (section 11(1)(c)).</li>
          </ul>
        </LegalSection>

        <LegalSection num="06" title="Who else handles it">
          <ul>
            <li>
              <strong className="font-medium text-navy-500">Vercel</strong> hosts this site and
              handles the technical information described above.
            </li>
            <li>
              <strong className="font-medium text-navy-500">Google Workspace</strong> provides our
              email, so Google holds the messages you send us.
            </li>
            <li>
              Professional advisers or authorities, if we need to share information with them or the
              law requires it.
            </li>
          </ul>
        </LegalSection>

        <LegalSection num="07" title="Information leaving South Africa">
          <p>
            Vercel and Google are United States companies that operate in several countries, so this
            information may be processed outside South Africa, including in the United States.
          </p>
          <p>
            Basis for the transfer under POPIA section 72:{' '}
            <Placeholder>section 72 transfer basis</Placeholder>
          </p>
        </LegalSection>

        <LegalSection num="08" title="How long we keep it">
          <ul>
            <li>
              Enquiries that do not lead to work: 12 months after our last contact with you.
            </li>
            <li>
              Hosting logs: about 1 hour in our Vercel account. Vercel may keep some records for
              longer under{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                its own privacy policy
              </a>
              .
            </li>
          </ul>
          <p>
            We keep information for longer only where the law requires it or a dispute needs it. After
            that we delete it or remove what identifies you.
          </p>
        </LegalSection>

        <LegalSection num="09" title="Keeping it safe">
          <p>
            The site is served over HTTPS only, and only the people who need your enquiry can see it.
            If we have reason to believe someone has gained unauthorised access to your personal
            information, we will tell you and the Information Regulator, as POPIA section 22 requires.
          </p>
        </LegalSection>

        <LegalSection num="10" title="Your rights">
          <p>Under POPIA you may:</p>
          <ul>
            <li>ask whether we hold personal information about you, and ask for a copy;</li>
            <li>ask us to correct or delete it;</li>
            <li>object to how we use it; and</li>
            <li>complain to the Information Regulator.</li>
          </ul>
          <p>
            To use these rights, contact the Information Officer named above. Our{' '}
            <Link to="/paia">PAIA manual</Link> explains how to request records.
          </p>
          <p>
            You can reach the Information Regulator at{' '}
            <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer">
              inforegulator.org.za
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection num="11" title="Children">
          <p>
            This site is for businesses. We do not knowingly collect personal information from anyone
            under 18.
          </p>
        </LegalSection>

        <LegalSection num="12" title="Other sites">
          <p>
            We link to partner organisations and other sites. They run their own privacy practices,
            and this policy does not cover them.
          </p>
        </LegalSection>

        <LegalSection num="13" title="Changes to this policy">
          <p>
            We may update this policy. The effective date above shows when it last changed, and the
            version on this page is the one that applies.
          </p>
        </LegalSection>
      </LegalPage>
    </>
  )
}
