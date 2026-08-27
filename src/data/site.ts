// Single source of truth for site copy and data. Edit here, not in components.
// Stats/numbers/case studies are validated against PROJECT.md v1.0 and the
// BusinessBrain Feasibility Review v1.4 (NVT-BB-CFR-001, 20 April 2026).
// That is a real document title and stays as cited. The PRODUCT formerly called
// BusinessBrain is now NOVACORE; do not rename the citation to match.

import {
  Camera,
  Brain,
  LineChart,
  Database,
  Workflow,
  Compass,
  FileSearch,
  ScanEye,
  Wrench,
  HardHat,
  GraduationCap,
  Network,
  ShieldCheck,
  GitBranch,
  Eye,
  Lock,
  MapPin,
  Trash2,
  KeyRound,
  Server,
  Globe,
  Mail,
  Cloud,
  Calculator,
  Users,
  BarChart3,
  FileSpreadsheet,
  Plug,
  type LucideIcon,
} from 'lucide-react'

export const company = {
  name: 'NOVATEK',
  legalName: 'NOVATEK LLC (Pty) Ltd',
  registrationNumber: '2025/796748/07',
  tagline: 'Intelligent Solutions',
  domain: 'www.novatekllc.co.za',
  url: 'https://www.novatekllc.co.za',
  email: 'info@novatekllc.co.za',
  phone: '+27 82 680 5571',
  region: 'South Africa',
  timezone: 'Africa/Johannesburg',
  mission:
    'Empower and digitise industrial enterprises with intelligent, data-driven solutions that create measurable operational impact.',
  description:
    'NOVATEK builds operations intelligence for industrial enterprises in regulated, resource-driven economies, where data residency and local-content rules are not optional: valves, pumps, fabrication, mining services, construction and power generation. We turn fragmented operational knowledge into measurable institutional intelligence. Data is held in the jurisdiction that governs it, and local content is documented against whichever regime applies. Based in Johannesburg; POPIA-native and B-BBEE Level 1.',
} as const

// Sourced from Business Plan v3.0 sections 5.1 and 5.2. The previous strip is
// deliberately gone: "up to 90% / Average time savings" labelled a maximum as an
// average, and "R835K+" summed two unrelated engagements into an aggregate no
// single client experienced. Both were indefensible under scrutiny.
export const heroStats = [
  { value: 80, suffix: '%', prefix: 'up to ', label: 'Contract review time cut', detail: 'from 15-20 hours to 3-5 hours per document' },
  { value: 25, suffix: 'm+', prefix: 'R', label: 'Contract value administered', detail: 'across 9 active NEC3 term service contracts' },
  { value: 45, suffix: '+', prefix: '', label: 'Years of power-fleet leadership', detail: 'rotating equipment, outages and NEC contracts' },
] as const

export type ProofPoint = { value: string; label: string; detail: string }

// Verified delivery record, Business Plan v3.0 section 5.2. Client names and all
// rand values from the anchor engagement are deliberately withheld: consent to
// name the anchor is an open item in the plan itself.
export const trackRecord: ProofPoint[] = [
  {
    value: '45+',
    label: 'Years of power-fleet leadership',
    detail: 'Rotating equipment, power generation and heavy engineering',
  },
  {
    value: '9',
    label: 'Active NEC3 term service contracts',
    detail: 'Across 10 sites, contract value administered in excess of R25 million',
  },
  {
    value: '30+',
    label: 'Outages per annum',
    detail: 'A six-station coal fleet cluster under a single integrated plan',
  },
  {
    value: '15%',
    label: 'UCLF improvement',
    detail: 'Achieved across that outage programme in 18 months',
  },
  {
    value: 'Nov 2025',
    label: 'Continuous anchor engagement',
    detail: 'Embedded technical management delivered without interruption since',
  },
]

export type Service = {
  num: string
  title: string
  description: string
  icon: LucideIcon
  bullets: string[]
}

// The six consulting pillars fixed by Business Plan v3.0 section 3.1.
// "Business Process Enhancement" (added deliberately in 8448dfd) and "Strategic
// Advisory" are not deleted, they are folded into the pillars that carry them:
// the baseline-intervene-measure method lives in Operations Intelligence and in
// the Services lede; readiness review and roadmap live under Strategic AI
// Implementation. Both phrases stay in JSON-LD knowsAbout.
export const services: Service[] = [
  {
    num: '01',
    title: 'Strategic AI Implementation',
    description:
      'Bespoke AI solutions from prompt engineering through to full assembly-line architectures. We specialise in document analysis, NEC contract review and structured agentic workflows for engineering operations, and we separate Defensible from Aspirational before anything gets built.',
    icon: Brain,
    bullets: ['AI readiness review', 'NEC contract analysis', 'Transformation roadmap'],
  },
  {
    num: '02',
    title: 'Operations Intelligence',
    description:
      'Real-time dashboards and decision-support systems that turn operational data into executive insight across multiple sites and business units. We baseline the process first, intervene where the waste actually is, and measure the delta.',
    icon: LineChart,
    bullets: ['Multi-site monitoring', 'Baseline and KPI definition', 'Measured improvement cycles'],
  },
  {
    num: '03',
    title: 'Data Analytics',
    description:
      'End-to-end data pipelines, ETL and Power BI reporting that turn raw operational data into validated, auditable business intelligence. We treat data as evidence, not dashboards as theatre. Every metric carries provenance.',
    icon: Database,
    bullets: ['Pipeline architecture', 'Power BI semantic models', 'Provenance-traced reporting'],
  },
  {
    num: '04',
    title: 'Process Automation',
    description:
      'Workflow automation with Microsoft Power Automate, Python and custom integrations that eliminate manual handoffs and free skilled staff for higher-value work. Always with a human confirmation gate on writes.',
    icon: Workflow,
    bullets: ['Power Automate / Python workflows', 'Human-in-the-loop guardrails', 'M365 + Google Cloud integrations'],
  },
  {
    num: '05',
    title: 'Engineering Management & NEC Contract Administration',
    description:
      'Technical operations management, project management, outage planning and full NEC3/NEC4 contract lifecycle administration, grounded in more than 45 years of power-fleet leadership. Including local-content declarations and the evidence that has to sit behind them.',
    icon: HardHat,
    bullets: ['Outage planning', 'NEC3 / NEC4 lifecycle', 'SBD 6.2 and local-content evidence'],
  },
  {
    num: '06',
    title: 'Skills Development & Training',
    description:
      'Artisan training programmes, TVET workplace partnerships, AI workspace upskilling and leadership development for engineering teams. Capability that stays with your people after we leave.',
    icon: GraduationCap,
    bullets: ['Artisan and TVET partnerships', 'AI workspace upskilling', 'Engineering leadership development'],
  },
]

// A closed vocabulary on purpose: a surface cannot be given a flattering stage
// label without editing this union first. 'Demonstrable' is the grade added in
// v3.1 - built and runnable, the reader can drive it, but over a synthetic
// scene. It sits between a claim and a production deployment.
export type PlatformMaturity =
  | 'In client delivery'
  | 'Demonstrable · synthetic plant, real enforcement'
  | 'Designed · funded by this round'
  | 'Specified · not yet built'

/**
 * One of the two places the platform is used. NOT a product: Business Plan v3.1
 * section 3.2 is explicit that this is one product, used in two contexts by two
 * different people, over one ontology. A fitter in gloves at a running pump and
 * a reliability engineer reviewing a year of failures were never going to want
 * the same interface.
 */
export type PlatformSurface = {
  num: string
  name: string
  /** Where the surface is used, and by whom. */
  where: string
  maturity: PlatformMaturity
  description: string
  bullets: string[]
  icon: LucideIcon
  /** Ways of working inside a surface. Modes, never products. */
  modes?: { name: string; description: string }[]
  /**
   * A runnable demo, opened in a new tab. `boundary` is not optional prose: it
   * states what in the demo is real and what is staged, and it renders next to
   * the link rather than beneath it. A demo published without that sentence
   * reads as a product claim.
   */
  demo?: { href: string; label: string; boundary: string }
}

// Business Plan v3.1 section 3.2, which replaced the five-product story with
// one. The name is always used with its descriptor on first mention: NOVAFLOW
// is a DIVISION and NOVACORE is a PRODUCT, and the shared prefix blurs the two
// tiers unless the descriptor carries the distinction.
export const platform = {
  name: 'NOVACORE',
  descriptor: 'the platform',
  lockup: 'NOVACORE by NOVATEK®',
  lede:
    'The intelligence inside your operations control centre. One place to manage production, projects and assets, built on the records the plant already owns.',
  href: '/platform',
  // Drawn from control-centre practice, resolved against our own positioning.
  // "Single version of the truth" is NOT claimed: we are a processor, not the
  // owner, and s4 is explicit that source systems stay authoritative.
  positioning: [
    {
      title: 'What a control centre is for',
      body: 'One place to run production, projects and assets across their whole life: construction, maintenance, refurbishment, rehabilitation and replacement. Managed against one view, rather than across six systems, a shared drive and a WhatsApp thread.',
    },
    {
      title: 'Single view, not single record',
      body: 'NOVACORE does not become the place your truth lives. Your ERP, document stores, maintenance system and drawing register stay authoritative, and we operate as a processor on your mandate. What NOVACORE builds is the map that binds them, so the operation gets one place to ask and one place to look, with every answer resolving to the record it came from.',
    },
    {
      title: 'Current, not real time',
      body: 'The map is kept current by the work itself. Every shift that touches an asset updates what that asset shows, so it does not go stale the way a twin built from a one-off survey does. This is not a sensor feed and does not pretend to be one: live telemetry is what your SCADA is already for.',
    },
  ],
  // The "How It Works" stack, top down. Surfaces sit on the ontology; the
  // ontology sits on the client's data and the model layer.
  stack: {
    caption:
      'Plant, process and people bound into one map. Everything above it is an answer.',
    tiers: [
      {
        label: 'Surfaces',
        note: 'Where a person meets the operation',
        items: ['Ask', 'Capture', 'Walk'],
      },
      {
        label: 'Ontology',
        note: 'The map that binds the two below',
        items: ['Every asset a noun, every action a verb'],
      },
      {
        label: 'Foundations',
        note: 'Your systems stay authoritative',
        items: [
          'Data: ERP · document stores · P&IDs · job cards',
          'Models: agents · retrieval · reasoning',
        ],
      },
    ],
  },
  mechanism: {
    title: 'How the map is built, and why it answers',
    body: 'The ontology is assembled from what the operation already has: the asset register, the drawing set, the job cards, the procedures and the competency records. Each becomes a node with its relationships stated, so the map holds not just what exists but what governs what, who is competent to do it, and what a deviation blocks.',
    graphRag: 'Retrieval then works the way a graph-RAG system works. Rather than searching a pile of documents and hoping the right paragraph surfaces, a question traverses the structured map, so asking about one pump reaches the work orders, procedures, measurements and deviations actually connected to it. Historic and current records resolve in the same traversal. That is why an answer can cite the document, revision and signatory behind it, why root cause runs backwards and impact runs forwards, and why a person can decide a response with the whole picture in front of them instead of assembling it first.',
  },
  // Section 3.2's own three-step table. The ontology is the product; the
  // surfaces below are how a person touches it.
  sequence: [
    {
      num: '01',
      title: 'They own',
      body: 'P&IDs, general arrangements, layouts, job cards, SOPs and maintenance history. Complete, and unusable.',
    },
    {
      num: '02',
      title: 'We build',
      body: 'The ontology of that plant. Every asset a noun, every action a verb.',
    },
    {
      num: '03',
      title: 'They get',
      body: 'Ask it, then walk it. Root cause backwards, impact forwards.',
    },
  ],
  // Appendix A (IQMS) and Appendix B (AI Harness Technology) are both
  // deliberately absent from this site. Neither is built, neither is in the
  // funded core of this round, and AI Harness is the engineering backbone
  // behind the platform rather than something to sell.
  surfaces: [
    {
      num: '01',
      name: 'Capture',
      where: 'In the field, on a phone',
      maturity: 'Designed · funded by this round',
      description:
        'Where the record is fed. An artisan, electrician or fitter opens the work order already assigned to them, selects the asset within it, and captures photographs and a spoken note as the work happens rather than writing it up afterwards. The camera verifies the unit against its own record before anything binds to it, and surfaces what it observes, such as visible corrosion, a weeping gland or a damaged guard, as proposals for a person to accept or reject. Never as findings. Hours accrue against the order automatically, because the account already knows whose they are.',
      bullets: [
        'Identity comes from the work order',
        'Observes and proposes, never concludes',
        'Works with no signal, reconciles on reconnect',
      ],
      icon: Camera,
    },
    {
      num: '02',
      name: 'Walk',
      where: 'On site or at a desk, in the twin',
      maturity: 'Demonstrable · synthetic plant, real enforcement',
      description:
        'Where the record is used. A navigable model of the site with the ontology bound to it, so history, open deviations, governing procedures and next service dates sit one glance from the asset itself. Geometry derives from the client’s own engineering drawings, not from a site scan. Walk is not only a way of looking at the plant: it is fed by Capture, so every shift that works on an asset updates what that asset shows. That is the answer to the problem that kills most digital twins, which are accurate on the day they are built and quietly wrong six months later.',
      bullets: [
        'Geometry from the client’s own drawings',
        'Kept current by Capture, not by re-survey',
        'Status shown, condition never inferred',
      ],
      icon: ScanEye,
      modes: [
        {
          name: 'Inspect',
          description:
            'Select an asset and resolve it to its record: identity, history, open deviations and measurements against their thresholds, each resolving to the document, revision and signatory it came from.',
        },
        {
          name: 'Ask',
          description:
            'Question the scene in place. Root cause backwards, impact forwards, and the practical questions a person actually has standing at a machine.',
        },
        {
          name: 'Procedure',
          description:
            'Walk a documented procedure where it happens. Isolation and permit-to-work, step by step, scoped to what the person in front of it is competent and cleared to do.',
        },
      ],
      demo: {
        href: 'https://ipv-demo-psi.vercel.app',
        label: 'Open the live demo',
        boundary:
          'The governance and binding layer is real and enforced server-side. The plant is synthetic and its records are invented. The agent and its retrieval layer are not in the demo.',
      },
    },
  ] as PlatformSurface[],
}

// Business Plan v3.1 section 3.3. Deliberately NOT a surface on the platform.
// It is the portfolio's single strongest measured outcome and the only thing
// currently being paid for, and folding it into the platform would dilute both
// the platform story and the proof.
export const contractAnalyst = {
  name: 'AI Contract Analyst',
  maturity: 'In client delivery' as PlatformMaturity,
  lede:
    'Productised NEC contract review, and the portfolio’s single strongest measured outcome.',
  description:
    'More than 100 pre-built analytical modules cut contract review from 15-20 hours to 3-5 hours per document, with risk categorised across eight defined categories. It runs against NEC3 and NEC4 across the contract lifecycle, and every finding carries the clause it came from.',
  metrics: [
    {
      value: '75-80%',
      label: 'Review time reduction',
      detail: 'From 15-20 hours to 3-5 hours per document',
      emphasis: true,
    },
    { value: '100+', label: 'Pre-built analytical modules' },
    { value: '8', label: 'Defined risk categories' },
  ],
  localContent: {
    title: 'Local-content compliance, automated',
    description:
      'A compliance module automates SBD 6.2 declarations, SANS 1286 verification and bill-of-materials provenance. That is the document-and-evidence problem a 70% local-content designation creates for every industrial supplier, and it is a structural advantage rather than a feature: local-content compliance is a jurisdiction-specific document problem that global platform vendors have no commercial reason to solve. It also grows harder, and therefore more valuable to automate, precisely because the rule is enforced.',
    tags: ['SBD 6.2', 'SANS 1286', 'BoM provenance'],
  },
}

export type NovaflowPillar = {
  num: string
  title: string
  description: string
  icon: LucideIcon
  bullets: string[]
}

export type NovaflowStage = {
  num: string
  when: string
  title: string
  description: string
}

export type MarginRow = {
  company: string
  newEquipment: string
  aftermarket: string
  asOf: string
}

// NOVAFLOW, Business Plan v3.0 section 7. Nothing here carries a rand figure:
// the divisional cash ceiling, the originated-revenue projection and the kill
// criteria are all funder-only. The scope boundaries in `doesNot` come from
// section 7.4 and OVERRIDE the external strategy artifact, whose Phase 3
// promised equipment distribution that section 7.4 forbids.
export const novaflow = {
  lockup: 'NOVAFLOW by NOVATEK®',
  byline: 'Intelligent Solutions for Flow Assets',
  summary:
    'Our software is only as defensible as the industrial record it is correct about, and that record cannot be licensed, bought or scraped. It is earned in the workshop. NOVAFLOW is the flow-assets division that earns it: brand-agnostic service, repair, reliability and spares for pumps and valves, with NOVATEK’s intelligence layer built in.',
  lede:
    'NOVAFLOW is NOVATEK’s flow-assets division: service, repair, reliability and spares for pumps and valves, with an agentic AI layer built in. It pairs more than 45 years of hands-on rotating-equipment experience with the AI, digital-twin and operations-intelligence platforms NOVATEK already runs in production.',
  tags: ['B-BBEE Level 1', 'Service and reliability led', 'Mining · Power · Water', 'SA and SADC'],
  structure: [
    'An internal division of NOVATEK, not a separate company and not a joint venture.',
    'Led by a divisional head with more than 45 years in rotating equipment, not by the founder.',
    'Self-funded from the consulting business, and deliberately stoppable.',
  ],
  pillars: [
    {
      num: '01',
      title: 'Deep rotating-equipment expertise',
      description:
        'Led by a divisional head with more than 45 years in power generation and heavy engineering, currently directing technical operations across ten active sites and nine NEC contracts. Service, refurbishment, installation and reliability for slurry, water, dewatering and process duty.',
      icon: Wrench,
      bullets: [
        'Submersible and dewatering duty',
        'Condition monitoring and reliability',
        'Installation and commissioning',
      ],
    },
    {
      num: '02',
      title: 'Cross-brand asset intelligence',
      description:
        'Equipment brands monitor their own units. A real plant runs six brands. Walk models the plant a customer actually has, with a knowledge graph over every pump, valve and vessel: history, deviations, SOPs and next service, each fact cited to its source.',
      icon: ScanEye,
      bullets: [
        'Walk plant twin',
        'NOVACORE operations intelligence',
        'Cited to source records',
      ],
    },
    {
      num: '03',
      title: 'Compliance and contracts, automated',
      description:
        'Local-content documentation (SBD 6.2, SANS 1286), bill-of-materials traceability and NEC contract administration. The paperwork that gates public-sector flow work, handled by the AI Contract Analyst and NOVACORE.',
      icon: FileSearch,
      bullets: ['SBD 6.2 declarations', 'SANS 1286 verification', 'NEC3 / NEC4 administration'],
    },
  ] as NovaflowPillar[],
  scope: {
    does: [
      'Brand-agnostic service, repair and refurbishment of pumps and valves',
      'Submersible and dewatering duty',
      'Condition monitoring and reliability engineering',
      'Installation and commissioning',
      'Non-stocked, back-to-back spares against confirmed orders',
      'Cross-brand asset intelligence through Walk and the operations intelligence layer',
      'Local-content documentation and compliance',
    ],
    doesNot: [
      'Hold any equipment distributorship or agency',
      'Import or stock equipment',
      'Carry inventory on NOVATEK’s balance sheet',
      'Take foreign-currency exposure',
      'Undertake valve refurbishment or component manufacture',
      'Compete with the clients it serves for their own work',
      'Bid designated hardware it cannot lawfully supply',
    ],
  },
  markets: [
    {
      region: 'South Africa',
      points: [
        'Mining and industrial dewatering. The Highveld coal belt is on the division’s doorstep: harsh duty, continuous, wear-driven and maintenance-intensive.',
        'Power generation. Feedwater, cooling, ash and drainage duty across a fleet NOVATEK already serves, on commercial terms rather than public procurement.',
        'Water and sanitation. The reachable layer of the national programme: service, refurbishment and reliability work where local content is naturally satisfied by South African labour. A long-horizon tailwind, not a 24-month equipment pipeline, and this page does not treat it as one.',
      ],
    },
    {
      region: 'SADC',
      points: [
        'South Africa exported roughly US$433m of pumps and US$185m of valves into the region in 2024, led by the DRC, Zambia, Namibia, Mozambique and Botswana.',
        'An existing Botswana engagement gives NOVATEK a live regional foothold.',
        'The discipline is explicit and does not change with scale: project by project, follow the customer, no branch build-out and no stocking.',
      ],
    },
  ],
  stages: [
    {
      num: '1',
      when: 'Stage 1 · Intelligence',
      title: 'Digital and reliability layer',
      description:
        'Deploy Walk plant twins, operations intelligence and local-content compliance into the flow-asset ecosystem NOVATEK already serves. The differentiated position is established first, and it is established cheaply. If the digital layer does not sell here, that is learned before anything physical is committed.',
    },
    {
      num: '2',
      when: 'Stage 2 · Service',
      title: 'Service and reliability core',
      description:
        'Stand up brand-agnostic service, repair and reliability for pumps and valves. Mining, power and private industrial first, where reliability is valued and paid for promptly. The workshop is certified to ISO 9001 using IQMS, which makes the division IQMS’s first production tenant and its first certified reference site.',
    },
    {
      num: '3',
      when: 'Stage 3 · Scale and region',
      title: 'Deepen the base and follow the customer',
      description:
        'Scale service on the installed base already won, and extend into SADC project by project, following customers rather than building ahead of them. The discipline does not change with scale: no branch build-out, no stocking, no inventory on NOVATEK’s account, and no equipment distributorship or agency.',
    },
  ] as NovaflowStage[],
  margins: [
    { company: 'KSB', newEquipment: '4.05% EBIT', aftermarket: '18.2% EBIT (SupremeServ)', asOf: 'FY2025' },
    { company: 'Sulzer', newEquipment: '13.3% EBITDA (Flow)', aftermarket: '18.3% EBITDA (Services)', asOf: 'FY2025' },
    { company: 'Weir Minerals', newEquipment: '-', aftermarket: '~75% of revenue', asOf: 'FY2025' },
  ] as MarginRow[],
  lifecycle: [
    { value: '~10%', label: 'The pump itself' },
    { value: '~40%', label: 'Energy' },
    { value: '~25%', label: 'Maintenance' },
  ],
  partnership: [
    {
      title: 'For equipment brands and distributors',
      description:
        'NOVATEK contributes B-BBEE Level 1 standing, a digital and reliability layer, local-content compliance capability and technical delivery. We take no distributorship and no agency in doing it: the partnership is built on operating capability on both sides, not on a reseller margin.',
    },
    {
      title: 'For local manufacturers',
      description:
        'Firms manufacturing pump and valve components locally can meet South Africa’s 70% local-content threshold that imports cannot. NOVAFLOW adds the intelligence and reliability layer around that compliant hardware, and helps document the local content itself.',
    },
  ],
} as const

export type CaseStudy = {
  num: string
  client: string
  title: string
  tags: string[]
  challenge: string
  solution: string
  outcome: string
  metrics: { value: string; label: string; emphasis?: boolean }[]
}

export const caseStudies: CaseStudy[] = [
  {
    num: '01',
    client: 'Engineering Services Firm - NEC Contract Environment',
    title: 'AI-Powered Contract Analysis Assembly Line',
    tags: ['AI', 'Document Analysis', 'Risk'],
    challenge:
      'Manual review of NEC-standard agreements consumed 15–20 hours per document, creating procurement bottlenecks and inconsistent risk classification.',
    solution:
      'A modular AI assembly line with 100+ pre-built clause modules, structured extraction, and an 8-category risk taxonomy - every output traceable to source.',
    outcome:
      'Review time reduced 75–80%. Consistent, audit-ready risk reports delivered in 3–5 hours.',
    metrics: [
      { value: '75–80%', label: 'Time reduction', emphasis: true },
      { value: '100+', label: 'Pre-built modules' },
      { value: '8', label: 'Risk categories' },
    ],
  },
  {
    num: '02',
    client: 'National Power Utility - Multi-Site Operations',
    title: 'Executive Intelligence Platform',
    tags: ['Dashboards', 'Data Ops'],
    challenge:
      'Critical risks buried in emails and spreadsheets across 10+ power stations. No executive line-of-sight, weekly manual reporting cadence.',
    solution:
      'Automated parsing of operational comms into a continuously refreshed executive dashboard - with anomaly thresholds and drill-through to source records.',
    outcome:
      'R555K of latent financial risk surfaced within 24 hours of go-live. Manual reporting cycle eliminated.',
    metrics: [
      { value: 'R555K', label: 'Risk identified', emphasis: true },
      { value: '10+', label: 'Sites monitored' },
      { value: '24h', label: 'Refresh cadence' },
    ],
  },
  {
    num: '03',
    client: 'Industrial Workshop - Repair Operations',
    title: 'Workshop Automation & Throughput Recovery',
    tags: ['Automation', 'Operations'],
    challenge:
      'Repair turnaround stretched to a 161-day average. No system of record for completion status; revenue recognition was guesswork.',
    solution:
      'Status-tracking automation with role-based dashboards and overdue-item alerts. Every job carries a provenance trail.',
    outcome:
      'A 69% overdue rate uncovered and triaged. R280K of at-risk revenue identified for recovery.',
    metrics: [
      { value: '69%', label: 'Overdue rate uncovered', emphasis: true },
      { value: 'R280K', label: 'Revenue at risk surfaced' },
      { value: '161 days', label: 'Average completion (baseline)' },
    ],
  },
  {
    num: '04',
    client: 'Corporate Function - Executive Forum',
    title: 'Meeting Intelligence & MANCO Automation',
    tags: ['AI', 'Process'],
    challenge:
      'Documentation of management committee meetings absorbed 40+ hours per cycle, with inconsistent action-tracking and decision audit trails.',
    solution:
      'AI-augmented capture, structured action-item extraction, and an auditable decision register tied to source recordings.',
    outcome:
      'Documentation time reduced 90%. Action-item compliance materially improved.',
    metrics: [
      { value: '90%', label: 'Documentation time saved', emphasis: true },
      { value: '40h+', label: 'Per-cycle baseline' },
      { value: '1', label: 'Source-linked decision register' },
    ],
  },
]

export const values = [
  {
    title: 'Precision',
    description:
      'Every solution is measured against the outcome you actually need. We work to numbers, not promises.',
  },
  {
    title: 'Partnership',
    description:
      'We integrate with your team, never replace it. Every AI decision goes through a person before anything happens.',
  },
  {
    title: 'Innovation',
    description:
      'AI-first, but only where it earns its place. We don\'t ship features that won\'t survive a year.',
  },
  {
    title: 'Integrity',
    description:
      'B-BBEE Level 1. POPIA compliant. Every answer we give traces back to its source.',
  },
] as const

export type PlatformCapability = {
  num: string
  title: string
  description: string
  icon: LucideIcon
}

export const platformCapabilities: PlatformCapability[] = [
  {
    num: '01',
    title: 'The ontology, as a graph',
    description:
      'Every asset, contract, person, procedure and site is a node, and every relationship between them is stated rather than inferred: signed by, depends on, assigned to, governed by. Provenance travels on every node and every edge.',
    icon: Network,
  },
  {
    num: '02',
    title: 'Retrieval that traverses, not guesses',
    description:
      'The map narrows the candidate space by structure before any text is read, and attached documents are ranked within it. Citations point at records rather than at paragraphs, which is what makes an answer checkable instead of merely plausible.',
    icon: GitBranch,
  },
  {
    num: '03',
    title: 'Agents that plan, retrieve and propose',
    description:
      'A coordinator working with planning, retrieval, review and action-proposing agents. Every one of them proposes and none of them commits. The model layer is deliberately replaceable: the commitment is to the behaviour, not to a vendor.',
    icon: Brain,
  },
  {
    num: '04',
    title: 'Skills: your procedures, codified',
    description:
      'Versioned artefacts capturing how this operation actually runs a task, rather than how a manual says it should. They are owned by the client and they leave with the client.',
    icon: Workflow,
  },
  {
    num: '05',
    title: 'A typed integration seam',
    description:
      'One scoped connector per source system, each holding only the credentials for its own source, over mutual TLS. Nothing holds a master key to everything, so a compromise is bounded by design, and a source can be replaced without touching agent logic.',
    icon: Database,
  },
  {
    num: '06',
    title: 'Human Confirmation Gate',
    description:
      'Mandatory, non-bypassable approval on every write action. Reads traverse freely; writes always pass through human consent.',
    icon: ShieldCheck,
  },
  {
    num: '07',
    title: 'Provenance & audit substrate',
    description:
      'Every inference carries the source it came from, the version of that source, when it was read and how confident the system is. Every tool call is logged. Nothing asserts itself without a chain back to a record.',
    icon: Eye,
  },
  {
    num: '08',
    title: 'Load-shedding-resilient',
    description:
      'Hot subgraph cache + degraded-mode agents are operating assumptions, not features. Reads survive Stage 4–6; writes block until sources are reachable.',
    icon: Compass,
  },
]


export const platformQuotes = [
  '"We are building an institutional-memory substrate, not an autonomous agent. The graph is the memory. The agents are the interface. MCP is the integration seam."',
  '"We build systems of insight, never systems of record."',
  '"An emerging-market industrial base is not a discount version of the US market."',
  '"Every inference must carry a citation chain to an authoritative source record."',
] as const

// Roles, not names, by deliberate policy. The set matches the funded headcount
// in Business Plan v3.0 sections 8.2 and 9.
// Names and credentials come from slide 10 of the Demo Day deck, with the
// barred client names anonymised on the way across - "a JSE-listed energy and
// chemicals major", "a national power utility environment", "a Big Four firm" -
// so this page and the pitch deck cannot be caught disagreeing. Joseph
// Koeberg's tenure is held at the plan's "more than 45 years"; the deck's "50+"
// is the outlier and section 10.5 open item #6 is still unresolved.
//
// Every entry is a person. Roles this funding round hires are a matter for the
// funding documents, not for a page headed "our team" - the moment an unfilled
// role appears here it starts reading as staff, which is the exact failure this
// section was rebuilt to remove.
export type TeamMember = {
  name: string
  role: string
  /** Which bench: the executive line, advisory, or delivery. */
  group: 'Executive' | 'Advisory' | 'Delivery'
  capabilities: readonly string[]
  /** One credential line. Kept short: this is a site, not a CV. */
  note?: string
}

export const team: readonly TeamMember[] = [
  {
    name: 'Matthew Koeberg',
    role: 'Founder & Managing Director',
    group: 'Executive',
    capabilities: ['Agent architecture', 'NEC contracts', 'Process design'],
    note: 'Architected and built the platform, and led the anchor engagement with subcontracted delivery support.',
  },
  {
    name: 'Lungile Mginqi',
    role: 'Strategy & Governance',
    group: 'Advisory',
    capabilities: ['Enterprise IT governance', 'Group CIO'],
    note: 'Former Group CIO of a JSE-listed energy and chemicals major: more than 30,000 employees across 33 countries. Twelve years at Accenture.',
  },
  {
    name: 'Joseph Koeberg',
    role: 'Senior Domain SME',
    group: 'Advisory',
    capabilities: ['Rotating equipment', 'Plant operations', 'Outages'],
    note: 'More than 45 years in engineering and operations, including generation leadership in a national power utility environment.',
  },
  {
    name: 'Thembi Kganane',
    role: 'Financial Assurance',
    group: 'Delivery',
    capabilities: ['CA(SA)', 'IFRS', 'Assurance'],
    note: 'CA(SA) and IFRS technical specialist, formerly in a Big Four technical department. MBA (Stellenbosch). Deputy Chairperson, SAICA ITC Exam Committee 2021-2023.',
  },
  {
    name: 'Siyabonga Hlongwane',
    role: 'DevOps & Infrastructure',
    group: 'Delivery',
    capabilities: ['Self-hosting', 'MCP hosting', 'POPIA-aware deployment'],
    note: 'Self-hosting, MCP-server and POPIA-aware deployment. HyperionDev Full-Stack; BA, Wits.',
  },
  {
    name: 'Joshua Koeberg',
    role: 'Contract Supervisor',
    group: 'Delivery',
    capabilities: ['Contract execution', 'Compliance oversight'],
    note: 'Contract execution and compliance oversight across active NEC engagements.',
  },
] as const

export const compliance = [
  {
    title: 'B-BBEE Level 1',
    description:
      '100% Black-owned South African company. Level 1 contributor status carries 135% procurement recognition on your enterprise spend. B-BBEE is South Africa’s local-content regime, and every resource economy runs one. The compliance capability is built to generalise; the certificate does not.',
    icon: ShieldCheck,
  },
  {
    title: 'POPIA compliant',
    description:
      'Architected for the Protection of Personal Information Act 4 of 2013. Subject-access requests collapse to a single graph query.',
    icon: Lock,
  },
] as const

// Mirrors the Values sentence in Business Plan v3.0 section 2, clause by clause.
// The broader "stored and processed in South Africa" wording is deliberately NOT
// used - it was retracted by the company as unsupportable for frontier-model
// inference. Do not reintroduce it.
export const governancePillars = [
  {
    title: 'Data ownership',
    description:
      'You remain the owner of your data. We operate as a processor, under your instruction and on your mandate.',
    icon: KeyRound,
  },
  {
    title: 'In-country storage',
    description:
      'Client data is stored in South Africa, on in-country infrastructure.',
    icon: MapPin,
  },
  {
    title: 'In-region processing',
    description:
      'Routine processing runs in-region. Where a workload moves, it moves deliberately and on the record.',
    icon: Server,
  },
  {
    title: 'Disclosed cross-border inference',
    description:
      'Some frontier AI models are not yet hosted in South Africa. Where a workload requires one, that cross-border processing is disclosed explicitly and scoped in writing before it runs. We do not obscure it.',
    icon: Globe,
  },
  {
    title: 'Access control and encryption',
    description:
      'Role-based access control and encryption are standard, with mTLS between services and a full audit trail on every tool call.',
    icon: Eye,
  },
  {
    title: 'Secure deletion',
    description: 'Certified data destruction on project closure or contract termination.',
    icon: Trash2,
  },
] as const

// Ordered manifest for the home-page narrative. The "NN / Label" eyebrows are
// derived from this, so inserting or reordering a section renumbers the whole
// page automatically instead of by hand.
// Order here MUST match the render order in pages/Home.tsx: the eyebrow numbers
// are derived from this array, so a mismatch numbers the page out of sequence.
export const homeSections = [
  { id: 'platforms', label: 'What we build' },
  { id: 'contract-analyst', label: 'In client delivery' },
  { id: 'services', label: 'What we do' },
  { id: 'about', label: 'Who we are' },
  { id: 'integrations', label: 'Built on what you have' },
  { id: 'novaflow', label: 'Flow assets' },
  { id: 'cases', label: 'Proven outcomes' },
  { id: 'team', label: 'Our team' },
  { id: 'compliance', label: 'Governance' },
  { id: 'faq', label: 'Common questions' },
  { id: 'contact', label: 'Contact' },
] as const

export type HomeSectionId = (typeof homeSections)[number]['id']

export function eyebrowFor(id: HomeSectionId): string {
  const i = homeSections.findIndex((s) => s.id === id)
  return `${String(i + 1).padStart(2, '0')} / ${homeSections[i].label}`
}

export type Faq = { q: string; a: string }

// These are mirrored verbatim into the FAQPage JSON-LD in index.html. Google's
// structured-data policy requires FAQ markup to match content the user can
// actually see, so the two must be edited together, and the accordion below
// keeps every answer in the DOM even when collapsed.
export const faqs: Faq[] = [
  {
    q: 'What does NOVATEK do?',
    a: 'NOVATEK builds operations intelligence for mid-market industrial enterprises in regulated, resource-driven economies: power generation, heavy engineering, mining services and fabrication. We turn fragmented operational knowledge into measurable institutional intelligence, and the platform is built to hold data in the jurisdiction that governs it. Based in Johannesburg; POPIA-native and B-BBEE Level 1.',
  },
  {
    q: 'Who does NOVATEK serve?',
    a: 'Industrial enterprises of roughly 50 to 500 employees with small in-house IT teams: valves, pumps, fabrication, mining services and construction, plus power generation and energy-transition work. Cross-border delivery is proven rather than theoretical, from an active Botswana engagement, and the architecture is per-jurisdiction by design, so the same system fits any market that governs where its data lives and how much of its content must be local. We also serve B-BBEE-conscious procurement across government, SOEs and large enterprise.',
  },
  {
    q: 'Where is our data stored, and does any of it leave the country?',
    a: 'Data is held in the jurisdiction that governs it. For South African clients that means stored in South Africa on in-country infrastructure, with routine processing in-region. You remain the data owner; we operate as a processor. Role-based access control and encryption are standard, with mTLS between services and a full audit trail on every tool call. Some frontier AI models are not yet hosted in every jurisdiction we work in. Where a workload requires one, that cross-border processing is disclosed explicitly and scoped in writing before it runs. We do not obscure it.',
  },
  {
    q: 'Does the AI make decisions automatically?',
    a: 'No. Every write action passes through a mandatory human confirmation gate, so no black-box AI acts on your behalf. Reads traverse freely; writes always require human consent. Human review is also mandatory on all AI-generated contract analysis.',
  },
  {
    q: 'What is NOVAFLOW, and why does a software company run a pump division?',
    a: 'NOVAFLOW is NOVATEK’s flow-assets division: brand-agnostic service, repair, reliability and spares for pumps and valves, with an agentic AI layer built in. It exists because our software is only as defensible as the industrial record it is correct about, and that record is earned in the workshop rather than licensed. It is an internal division, not a separate company or joint venture, and it is self-funded. It holds no equipment distributorship or agency, does not import or stock equipment, and does not compete with the clients it serves.',
  },
  {
    q: 'What technology does NOVATEK build on?',
    a: 'We commit to behaviour rather than to a vendor. The ontology of the operation is held as a property graph; retrieval traverses that structure before any text is read; a constellation of agents plans, retrieves and proposes, and none of them commits; and every source system is reached through its own scoped connector rather than one master key. Every inference carries a citation chain back to an authoritative source record, and every write passes a human confirmation gate. The components underneath are deliberately replaceable, and naming one of them as the identity of the product would be a mistake.',
  },
]

export type NavLink = {
  label: string
  /** '#anchor' when kind is 'anchor'; a '/route' path when kind is 'route'. */
  href: string
  kind: 'anchor' | 'route'
}

// `kind` is load-bearing, not decorative: Nav and Footer previously templated
// every href as `/${href}`, which mangles a real route path.
export const navLinks: readonly NavLink[] = [
  { label: 'Platform', href: '#platforms', kind: 'anchor' },
  { label: 'Services', href: '#services', kind: 'anchor' },
  { label: 'About', href: '#about', kind: 'anchor' },
  // NOVAFLOW is deliberately absent while /novaflow is a placeholder. The
  // homepage section is still reachable at #novaflow via the section rail.
  // Restore this entry when the brief is rebuilt - see archive/novaflow-page.
  { label: 'Case studies', href: '#cases', kind: 'anchor' },
  { label: 'Compliance', href: '#compliance', kind: 'anchor' },
] as const

export const tickerKeywords = [
  'Strategic AI Implementation',
  'Operations Intelligence',
  'Data Analytics',
  'Process Automation',
  'NEC3 / NEC4 Administration',
  'Skills Development',
  'Knowledge Graphs',
  'POPIA-Native',
  'Data residency by jurisdiction',
  'B-BBEE Level 1',
  'Local content compliance',
  'ISO 9001:2026 ready',
  'NOVACORE',
  'Plant digital twin',
  'NOVAFLOW',
] as const

export type IntegrationCategory = {
  num: string
  title: string
  examples: string
  icon: LucideIcon
}

export const integrations: IntegrationCategory[] = [
  {
    num: '01',
    title: 'Microsoft 365',
    examples: 'Outlook · Teams · SharePoint · OneDrive · Power Platform',
    icon: Mail,
  },
  {
    num: '02',
    title: 'Google Cloud',
    examples: 'Cloud Storage · Cloud SQL · Cloud Run · BigQuery',
    icon: Cloud,
  },
  {
    num: '03',
    title: 'ERP & finance',
    examples: 'SAP · Sage · Pastel · Xero · custom GL systems',
    icon: Calculator,
  },
  {
    num: '04',
    title: 'CRM & sales',
    examples: 'Salesforce · HubSpot · Zoho · Pipedrive',
    icon: Users,
  },
  {
    num: '05',
    title: 'Databases',
    examples: 'Postgres · MS SQL · MySQL · Oracle · pgvector',
    icon: Database,
  },
  {
    num: '06',
    title: 'BI & reporting',
    examples: 'Power BI · Tableau · custom dashboards',
    icon: BarChart3,
  },
  {
    num: '07',
    title: 'Spreadsheets & files',
    examples: 'Excel · CSV · scanned PDFs · email exports',
    icon: FileSpreadsheet,
  },
  {
    num: '08',
    title: 'Legacy & custom',
    examples: 'On-prem systems · internal APIs · decades-old line-of-business apps',
    icon: Plug,
  },
]

export const integrationsQuote =
  '"Your source systems stay the source of truth. We build a layer on top - one that reads them, learns from them, and proposes. Never replaces."'

