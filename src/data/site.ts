// Single source of truth for site copy and data. Edit here, not in components.
// Stats/numbers/case studies are validated against PROJECT.md v1.0 and the
// BusinessBrain Feasibility Review v1.4 (NVT-BB-CFR-001, 20 April 2026).

import {
  Brain,
  LineChart,
  Database,
  Workflow,
  Globe,
  Compass,
  Network,
  ShieldCheck,
  GitBranch,
  Eye,
  Lock,
  MapPin,
  Trash2,
  KeyRound,
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
  legalName: 'NOVATEK LLC',
  tagline: 'Intelligent Solutions',
  domain: 'novatek.co.za',
  email: 'info@novatek.co.za',
  phone: '+27 82 680 5571',
  region: 'South Africa',
  timezone: 'Africa/Johannesburg',
  mission:
    'Empower South African enterprises with intelligent, data-driven solutions that create measurable operational impact.',
  description:
    'NOVATEK is a South African AI and data consultancy serving the power generation, engineering, and industrial sectors. We turn fragmented operational knowledge into measurable institutional intelligence — POPIA-native, BBBEE Level 1, and engineered for the realities of mid-market SA enterprise.',
} as const

export const heroStats = [
  { value: 90, suffix: '%', prefix: 'up to ', label: 'Average time savings', detail: 'across review and reporting cycles' },
  { value: 835, suffix: 'K+', prefix: 'R', label: 'Risk identified', detail: 'flagged across active engagements' },
  { value: 10, suffix: '+', prefix: '', label: 'Systems delivered', detail: 'in production at SA enterprise' },
] as const

export type Service = {
  num: string
  title: string
  description: string
  icon: LucideIcon
  bullets: string[]
}

export const services: Service[] = [
  {
    num: '01',
    title: 'AI Implementation',
    description:
      'Bespoke AI assembly lines for document analysis, knowledge extraction, and decision support. From prompt engineering to production deployment with auditable outputs.',
    icon: Brain,
    bullets: ['NEC contract analysis', 'Knowledge graph construction', 'Tool-using agent constellations'],
  },
  {
    num: '02',
    title: 'Operations Intelligence',
    description:
      'Real-time executive dashboards and decision-support systems that turn operational data into measurable insight. Built for mid-market IT teams of two to six.',
    icon: LineChart,
    bullets: ['Multi-site monitoring', 'Risk surfacing', 'Executive reporting'],
  },
  {
    num: '03',
    title: 'Data Analytics',
    description:
      'End-to-end data pipelines, ETL, and Power BI reporting. We treat data as evidence, not dashboards as theatre — every metric carries provenance.',
    icon: Database,
    bullets: ['Pipeline architecture', 'Power BI semantic models', 'Provenance-traced reporting'],
  },
  {
    num: '04',
    title: 'Process Automation',
    description:
      'Workflow automation with n8n and Python that eliminate manual handoffs and free skilled staff for high-value work. Always with a human confirmation gate on writes.',
    icon: Workflow,
    bullets: ['n8n / Python workflows', 'Human-in-the-loop guardrails', 'M365 + AWS integrations'],
  },
  {
    num: '05',
    title: 'Web Development',
    description:
      'Corporate websites, reporting portals, and internal tools built with modern web technologies. Brand-disciplined, accessible, fast.',
    icon: Globe,
    bullets: ['React + Vite', 'Cloudflare-native delivery', 'WCAG AA accessibility'],
  },
  {
    num: '06',
    title: 'Strategic Advisory',
    description:
      'Technology strategy, AI readiness assessments, and transformation roadmaps. We separate Defensible from Aspirational — and only build what stays standing.',
    icon: Compass,
    bullets: ['AI readiness review', 'Vendor exit horizons', 'POPIA-aware design'],
  },
]

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
      'BBBEE Level 1. POPIA compliant. Every answer we give traces back to its source.',
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
      'Per-source MCP servers (ms-graph, aws-s3, aws-rds, pg, graph) — each holding only its own scoped credentials. Replace v2 with v3 without touching agent logic.',
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
    detail: 'ms-graph · aws-s3 · aws-rds · pg-readonly · pg-write · graph',
  },
  {
    label: 'Authoritative sources',
    sub: 'Source systems remain truth',
    detail: 'Microsoft Graph · AWS S3 (af-south-1) · RDS Postgres · client LOB databases',
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
    title: 'BBBEE Level 1',
    description: 'Maximum procurement recognition. 135% recognition for enterprise spend.',
    icon: ShieldCheck,
  },
  {
    title: 'POPIA Compliant',
    description: 'Architected for Act 4 of 2013. Subject-access requests collapse to a single graph query.',
    icon: Lock,
  },
] as const

export const governancePillars = [
  {
    title: 'Data ownership',
    description: 'You own your data. We operate as a processor, never the owner.',
    icon: KeyRound,
  },
  {
    title: 'In-country residency',
    description: 'Data processed in af-south-1. No offshore transfers without explicit consent.',
    icon: MapPin,
  },
  {
    title: 'Secure deletion',
    description: 'Certified data destruction on project closure or contract termination.',
    icon: Trash2,
  },
  {
    title: 'Access control',
    description: 'Role-based access, mTLS between services, full audit trails on every tool call.',
    icon: Eye,
  },
] as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'BusinessBrain', href: '#businessbrain' },
  { label: 'Case studies', href: '#cases' },
  { label: 'Compliance', href: '#compliance' },
] as const

export const tickerKeywords = [
  'AI Implementation',
  'Operations Intelligence',
  'Data Analytics',
  'Process Automation',
  'NEC Contract Analysis',
  'Knowledge Graphs',
  'POPIA-Native',
  'af-south-1',
  'BBBEE Level 1',
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
    title: 'AWS cloud',
    examples: 'S3 · RDS · Lambda · Bedrock (af-south-1)',
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

