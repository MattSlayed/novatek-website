// Snapshot of the `novaflow` data object as it stood in src/data/site.ts when
// the /novaflow page was pulled down to an "under development" placeholder.
// This is a REFERENCE COPY, not a live module - the canonical `novaflow`
// export still lives in src/data/site.ts (it's still consumed by the
// homepage teaser section, src/sections/Novaflow.tsx). Restore steps are in
// README.md in this folder.

import { Wrench, ScanEye, FileSearch, type LucideIcon } from 'lucide-react'

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
