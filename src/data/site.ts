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
    'One product. The records a plant already owns, made answerable, then walkable.',
  href: '/platform',
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
  // Appendix A. Named so the roadmap is legible, and stated at its real stage.
  // AI Harness Technology, Appendix B, is deliberately absent from this site:
  // it is the engineering backbone behind the platform and the Contract
  // Analyst, which makes it infrastructure rather than something to sell.
  roadmap: {
    name: 'IQMS',
    expanded: 'Intelligent Quality Management System',
    maturity: 'Specified · not yet built' as PlatformMaturity,
    description:
      'An AI-native quality management application for ISO 9001, built on the same ontology. The first major revision of the standard since 2015 is targeted for publication in September 2026, opening a roughly three-year transition window for a certified base of more than one million organisations worldwide. The specification is complete. There is no proof-of-concept build and no design partner under instrument.',
  },
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
    title: 'Property-graph backbone',
    description:
      'Entities (Contract, Vendor, Invoice, Person, Site) and relationships (SIGNED_BY, DEPENDS_ON, ASSIGNED_TO) - with provenance tuples on every node and edge.',
    icon: Network,
  },
  {
    num: '02',
    title: 'Hybrid graph + vector retrieval',
    description:
      'Graph narrows the candidate space via subgraph-match; pgvector re-ranks attached text. Citations point to nodes, not chunks.',
    icon: GitBranch,
  },
  {
    num: '03',
    title: 'Tool-using agent constellation',
    description:
      'Coordinator with planner, retrieval, reflector, and action-proposer agents on the Claude Agent SDK. LangGraph and CrewAI as portable fallbacks.',
    icon: Brain,
  },
  {
    num: '04',
    title: 'Skills - codified SOPs',
    description:
      'Versioned, client-owned artefacts that capture how this client runs AR follow-ups, contractor onboarding, monthly management packs.',
    icon: Workflow,
  },
  {
    num: '05',
    title: 'MCP integration fleet',
    description:
      'Per-source MCP servers (ms-graph, object-store, sql-readonly, pg, graph) - each holding only its own scoped credentials. Replace v2 with v3 without touching agent logic.',
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
      'Every inference carries source_uri, source_version, extracted_at, extractor_hash, confidence. Every tool call is logged.',
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

export const businessBrainTiers = [
  {
    label: 'Reasoning tier',
    sub: 'Chat surface · agent constellation',
    detail: 'Claude Agent SDK · planner · retrieval · reflector · action-proposer',
  },
  {
    label: 'Graph & provenance substrate',
    sub: 'Persistent shared memory',
    detail: 'Neo4j AuraDB property graph · pgvector · audit log',
  },
  {
    label: 'MCP integration seam',
    sub: 'Typed tool surfaces · mTLS · scoped tokens',
    detail: 'ms-graph · object-store · sql-readonly · pg-readonly · pg-write · graph',
  },
  {
    label: 'Authoritative sources',
    sub: 'Source systems remain truth',
    detail: 'Microsoft Graph · Google Cloud Storage · Postgres · client LOB databases',
  },
] as const

export const businessBrainQuotes = [
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
export const homeSections = [
  { id: 'about', label: 'Who we are' },
  { id: 'services', label: 'What we do' },
  { id: 'integrations', label: 'Built on what you have' },
  { id: 'platforms', label: 'What we build' },
  { id: 'contract-analyst', label: 'In client delivery' },
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
    a: 'Tool-using agent constellations on the Claude Agent SDK, with LangGraph and CrewAI as portable fallbacks, a Neo4j property-graph backbone with pgvector retrieval, and a Model Context Protocol integration fleet over Microsoft 365, Google Cloud and Postgres. Every inference carries a citation chain to an authoritative source record.',
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
  { label: 'About', href: '#about', kind: 'anchor' },
  { label: 'Services', href: '#services', kind: 'anchor' },
  { label: 'Platforms', href: '#platforms', kind: 'anchor' },
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
  'IQMS',
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

