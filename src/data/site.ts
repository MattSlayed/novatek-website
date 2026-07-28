// Single source of truth for site copy and data. Edit here, not in components.
// Stats/numbers/case studies are validated against PROJECT.md v1.0 and the
// BusinessBrain Feasibility Review v1.4 (NVT-BB-CFR-001, 20 April 2026).

import {
  Brain,
  LineChart,
  Database,
  Workflow,
  Compass,
  ClipboardCheck,
  FileSearch,
  Cpu,
  ScanEye,
  Wrench,
  HardHat,
  GraduationCap,
  Network,
  ShieldCheck,
  GitBranch,
  Eye,
  Lock,
  FileBadge,
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
  domain: 'novatekllc.co.za',
  url: 'https://novatekllc.co.za',
  email: 'matthew@novatekllc.co.za',
  phone: '+27 82 680 5571',
  region: 'South Africa',
  timezone: 'Africa/Johannesburg',
  mission:
    'Empower and digitise South African enterprises with intelligent, data-driven solutions that create measurable operational impact.',
  description:
    'NOVATEK is a South African AI, data and operations-intelligence consultancy serving mid-market industrial enterprises: valves, pumps, fabrication, mining services, construction and power generation. We turn fragmented operational knowledge into measurable institutional intelligence. POPIA-native, B-BBEE Level 1, and engineered for the realities of South African industry.',
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

export type PlatformMaturity =
  | 'In production'
  | 'In client delivery'
  | 'MVP · design-partner stage'
  | 'Proof of concept'

export type Platform = {
  num: string
  name: string
  /** Expanded name where the short name is an acronym. */
  expanded?: string
  maturity: PlatformMaturity
  flagship?: boolean
  description: string
  bullets: string[]
  icon: LucideIcon
  /** Internal route, for platforms that have a deep page. */
  href?: string
}

// Business Plan v3.0 section 3.2. Maturity is published deliberately: two of
// these five are not finished, and saying so is cheaper than being found out.
export const platforms: Platform[] = [
  {
    num: '01',
    name: 'IQMS',
    expanded: 'Intelligent Quality Management System',
    maturity: 'MVP · design-partner stage',
    description:
      'An AI-native quality management system for ISO 9001. The first major revision of the standard since 2015 is targeted for publication in September 2026, opening a roughly three-year transition window for a certified base of more than one million organisations worldwide. New mandatory areas, including quality culture and ethics, restructured risk and integrated climate considerations, will drive gap analyses and tooling decisions. IQMS is being built to reach general availability ahead of that wave.',
    bullets: ['ISO 9001 gap analysis', 'Per-tenant SA hosting', 'Targeting GA ahead of the window'],
    icon: ClipboardCheck,
  },
  {
    num: '02',
    name: 'BusinessBrain',
    maturity: 'In production',
    flagship: true,
    description:
      'An operations intelligence platform: email and multi-document intelligence, executive dashboards and automated risk detection, built on agentic graph RAG. Proven in production in a national power utility environment. A system of insight, never a system of record.',
    bullets: [
      'Property-graph institutional memory',
      'Human confirmation gate on every write',
      'Provenance on every inference',
    ],
    icon: Network,
    href: '/businessbrain',
  },
  {
    num: '03',
    name: 'AI Contract Analyst',
    maturity: 'In client delivery',
    description:
      'Productised NEC contract review. More than 100 pre-built analytical modules cut review time from 15-20 hours to 3-5 hours per document, with risk categorised across eight defined categories. A local-content compliance module automates SBD 6.2 declarations, SANS 1286 verification and bill-of-materials provenance. That is the document-and-evidence problem South Africa’s 70% local-content designation creates for every industrial supplier, and no equipment manufacturer sells against it.',
    bullets: ['NEC3 / NEC4 lifecycle', '8-category risk taxonomy', 'SBD 6.2 · SANS 1286 · BoM provenance'],
    icon: FileSearch,
  },
  {
    num: '04',
    name: 'AI Harness Technology',
    maturity: 'In production',
    description:
      'Structured agentic delivery environments that give AI agents governed access to tools, documents and operational data, with defined workflows and quality gates. This is the engineering backbone behind the AI Contract Analyst and BusinessBrain. It is what makes the automation repeatable and auditable rather than one-off prompting.',
    bullets: ['Governed tool access', 'Defined workflows and quality gates', 'Auditable, repeatable delivery'],
    icon: Cpu,
  },
  {
    num: '05',
    name: 'IPV',
    expanded: 'Immersive Plant Virtualisation',
    maturity: 'Proof of concept',
    description:
      'A browser-based digital twin of the plant a client actually has. A photoreal, walkable reconstruction opens on any laptop, tablet or headset, with the operation’s knowledge graph overlaid on every asset: pump, valve and vessel maintenance history, open deviations, governing SOPs and the next service date. Each fact is cited to its source record. No game engine, no per-seat licensing, no specialist hardware. Leadership inspects without travelling, and contractors scope against what is installed rather than against a drawing.',
    bullets: ['Walkable plant reconstruction', 'Knowledge graph on every asset', 'Cited to source records'],
    icon: ScanEye,
  },
]

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
        'Equipment brands monitor their own units. A real plant runs six brands. IPV models the plant a customer actually has, with a knowledge graph over every pump, valve and vessel: history, deviations, SOPs and next service, each fact cited to its source.',
      icon: ScanEye,
      bullets: [
        'IPV immersive plant twin',
        'BusinessBrain operations intelligence',
        'Cited to source records',
      ],
    },
    {
      num: '03',
      title: 'Compliance and contracts, automated',
      description:
        'Local-content documentation (SBD 6.2, SANS 1286), bill-of-materials traceability and NEC contract administration. The paperwork that gates public-sector flow work, handled by the AI Contract Analyst and BusinessBrain.',
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
      'Cross-brand asset intelligence through IPV and BusinessBrain',
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
        'Deploy IPV plant twins, BusinessBrain operations intelligence and local-content compliance into the flow-asset ecosystem NOVATEK already serves. The differentiated position is established first, and it is established cheaply. If the digital layer does not sell here, that is learned before anything physical is committed.',
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
    client: 'Engineering Services Firm — NEC Contract Environment',
    title: 'AI-Powered Contract Analysis Assembly Line',
    tags: ['AI', 'Document Analysis', 'Risk'],
    challenge:
      'Manual review of NEC-standard agreements consumed 15–20 hours per document, creating procurement bottlenecks and inconsistent risk classification.',
    solution:
      'A modular AI assembly line with 100+ pre-built clause modules, structured extraction, and an 8-category risk taxonomy — every output traceable to source.',
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
    client: 'National Power Utility — Multi-Site Operations',
    title: 'Executive Intelligence Platform',
    tags: ['Dashboards', 'Data Ops'],
    challenge:
      'Critical risks buried in emails and spreadsheets across 10+ power stations. No executive line-of-sight, weekly manual reporting cadence.',
    solution:
      'Automated parsing of operational comms into a continuously refreshed executive dashboard — with anomaly thresholds and drill-through to source records.',
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
    client: 'Industrial Workshop — Repair Operations',
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
    client: 'Corporate Function — Executive Forum',
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

export type BusinessBrainCapability = {
  num: string
  title: string
  description: string
  icon: LucideIcon
}

export const businessBrainCapabilities: BusinessBrainCapability[] = [
  {
    num: '01',
    title: 'Property-graph backbone',
    description:
      'Entities (Contract, Vendor, Invoice, Person, Site) and relationships (SIGNED_BY, DEPENDS_ON, ASSIGNED_TO) — with provenance tuples on every node and edge.',
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
    title: 'Skills — codified SOPs',
    description:
      'Versioned, client-owned artefacts that capture how this client runs AR follow-ups, contractor onboarding, monthly management packs.',
    icon: Workflow,
  },
  {
    num: '05',
    title: 'MCP integration fleet',
    description:
      'Per-source MCP servers (ms-graph, object-store, sql-readonly, pg, graph) — each holding only its own scoped credentials. Replace v2 with v3 without touching agent logic.',
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
  '"The South African mid-market is not a discount version of the US market."',
  '"Every inference must carry a citation chain to an authoritative source record."',
] as const

export const team = [
  {
    role: 'Lead Consultant',
    focus: 'AI Strategy & Implementation',
    capabilities: ['NEC Contracts', 'Process Design', 'Agent Architecture'],
  },
  {
    role: 'Data Engineer',
    focus: 'Pipelines & BI Platforms',
    capabilities: ['Python', 'Power BI', 'Postgres', 'pgvector'],
  },
  {
    role: 'Automation Specialist',
    focus: 'Workflow & Integration',
    capabilities: ['n8n', 'M365 Graph', 'API design'],
  },
  {
    role: 'Web Developer',
    focus: 'Corporate Platforms',
    capabilities: ['React', 'TypeScript', 'Cloudflare'],
  },
] as const

export const compliance = [
  {
    title: 'B-BBEE Level 1',
    description:
      '100% Black-owned South African company. Level 1 contributor status carries 135% procurement recognition on your enterprise spend.',
    icon: ShieldCheck,
  },
  {
    title: 'POPIA compliant',
    description:
      'Architected for the Protection of Personal Information Act 4 of 2013. Subject-access requests collapse to a single graph query.',
    icon: Lock,
  },
  {
    title: 'Registered entity',
    description:
      'NOVATEK LLC (Pty) Ltd, registration number 2025/796748/07 (CIPC). SARS registered and a UIF-registered employer.',
    icon: FileBadge,
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
  { id: 'businessbrain', label: 'Flagship platform' },
  { id: 'novaflow', label: 'Flow assets' },
  { id: 'cases', label: 'Proven outcomes' },
  { id: 'team', label: 'Our team' },
  { id: 'compliance', label: 'Governance' },
  { id: 'contact', label: 'Contact' },
] as const

export type HomeSectionId = (typeof homeSections)[number]['id']

export function eyebrowFor(id: HomeSectionId): string {
  const i = homeSections.findIndex((s) => s.id === id)
  return `${String(i + 1).padStart(2, '0')} / ${homeSections[i].label}`
}

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
  { label: 'NOVAFLOW', href: '/novaflow', kind: 'route' },
  { label: 'Case studies', href: '#cases', kind: 'anchor' },
  { label: 'Compliance', href: '#compliance', kind: 'anchor' },
] as const

export const tickerKeywords = [
  'AI Implementation',
  'Operations Intelligence',
  'Data Analytics',
  'Process Automation',
  'NEC Contract Analysis',
  'Knowledge Graphs',
  'POPIA-Native',
  'Data stored in South Africa',
  'B-BBEE Level 1',
  'BusinessBrain',
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
  '"Your source systems stay the source of truth. We build a layer on top — one that reads them, learns from them, and proposes. Never replaces."'

