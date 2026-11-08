import { Link } from 'react-router-dom'
import { CompanyDetails, LegalPage, LegalSection } from '@/components/LegalPage'
import { Seo } from '@/components/Seo'
import { company } from '@/data/site'

export function PaiaPage() {
  return (
    <>
      <Seo
        title="PAIA Manual | NOVATEK"
        description="How to request records from NOVATEK under the Promotion of Access to Information Act. Draft for legal review."
        path="/paia"
      />
      <LegalPage
        title="PAIA Manual"
        intro="The Promotion of Access to Information Act 2 of 2000 (PAIA) gives you the right to request records held by a private company where you need them to exercise or protect a right. This manual, required by section 51 of PAIA, explains what records we hold and how to ask for them."
      >
        <LegalSection num="01" title="Contact details">
          <p>
            The head of the company and Information Officer is {company.informationOfficer}. Send
            requests to the address below.
          </p>
          <CompanyDetails>
            <dt className="font-medium text-navy-500">Postal address</dt>
            <dd>{company.registeredAddress}</dd>
          </CompanyDetails>
        </LegalSection>

        <LegalSection num="02" title="The official guide to PAIA">
          <p>
            The Information Regulator publishes a guide on how to use PAIA and POPIA. You can get it
            from{' '}
            <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer">
              inforegulator.org.za
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection num="03" title="Records available without a request">
          <p>
            You do not need to make a request for what we publish on this website, including our{' '}
            <Link to="/terms">Terms and Conditions</Link> and{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </LegalSection>

        <LegalSection num="04" title="Records we keep because the law requires them">
          <p>Where they apply to us, we keep records under these laws:</p>
          <ul>
            <li>Companies Act 71 of 2008</li>
            <li>Income Tax Act 58 of 1962, Value-Added Tax Act 89 of 1991 and Tax Administration Act 28 of 2011</li>
            <li>Basic Conditions of Employment Act 75 of 1997 and Labour Relations Act 66 of 1995</li>
            <li>Employment Equity Act 55 of 1998</li>
            <li>Unemployment Insurance Act 63 of 2001</li>
            <li>Compensation for Occupational Injuries and Diseases Act 130 of 1993</li>
            <li>Broad-Based Black Economic Empowerment Act 53 of 2003</li>
            <li>Protection of Personal Information Act 4 of 2013</li>
          </ul>
        </LegalSection>

        <LegalSection num="05" title="Other records we hold">
          <ul>
            <li>Company records: incorporation documents, memorandum of incorporation and registers.</li>
            <li>Financial records: accounting records, invoices, tax records and banking details.</li>
            <li>People records: employment contracts, payroll and leave records.</li>
            <li>Client records: proposals, agreements and project records.</li>
            <li>Supplier records: agreements and correspondence.</li>
            <li>Technology records: system, access and security records.</li>
            <li>Enquiries and business correspondence.</li>
          </ul>
        </LegalSection>

        <LegalSection num="06" title="Personal information we process">
          <ul>
            <li>
              <strong className="font-medium text-navy-500">Whose:</strong> people who contact us,
              employees and job applicants, directors, and contacts at clients and suppliers.
            </li>
            <li>
              <strong className="font-medium text-navy-500">Why:</strong> to reply to enquiries,
              deliver services, employ people, manage suppliers and meet our legal duties.
            </li>
            <li>
              <strong className="font-medium text-navy-500">What:</strong> names, contact details,
              work details, and the financial and employment details those purposes need.
            </li>
            <li>
              <strong className="font-medium text-navy-500">Who receives it:</strong> our service
              providers, professional advisers, and authorities where the law requires it.
            </li>
            <li>
              <strong className="font-medium text-navy-500">Outside South Africa:</strong> some
              providers are based abroad, as our <Link to="/privacy">Privacy Policy</Link> explains.
              Client work is covered by the service agreement and its Data Processing Disclosure.
            </li>
            <li>
              <strong className="font-medium text-navy-500">Security:</strong> we limit access to the
              people who need it and use encrypted connections for this website.
            </li>
          </ul>
        </LegalSection>

        <LegalSection num="07" title="How to make a request">
          <p>
            Complete Form 2 from the PAIA regulations, available from the Information Regulator, and
            email it to {company.email}. Describe the record you want and the right you need it for.
            If you are asking on behalf of someone else, tell us in what capacity.
          </p>
          <p>
            We will reply within 30 days. We may extend this once, by up to 30 days, where PAIA allows
            it, and we will tell you if we do.
          </p>
          <p>
            PAIA regulations set the fees that may apply. We will tell you what is payable before we
            do the work.
          </p>
        </LegalSection>

        <LegalSection num="08" title="When we may refuse">
          <p>
            PAIA allows or requires us to refuse some requests, for example to protect another
            person’s privacy, commercial or confidential information, safety, or legally privileged
            records. If we refuse, we will give you our reasons.
          </p>
        </LegalSection>

        <LegalSection num="09" title="If you are not satisfied">
          <p>
            You may complain to the Information Regulator or apply to a court under PAIA. There is no
            internal appeal against a decision by a private company.
          </p>
        </LegalSection>

        <LegalSection num="10" title="Updates">
          <p>
            We review this manual when our records or processes change. The effective date above
            shows when it last changed.
          </p>
        </LegalSection>
      </LegalPage>
    </>
  )
}
