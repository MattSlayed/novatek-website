import { motion } from 'framer-motion'
import { Brain, Database, Network, ShieldCheck, Workflow, GitBranch } from 'lucide-react'
import { ease } from '@/lib/motion'

interface Spoke {
  angle: number
  label: string
  Icon: typeof Brain
}

const spokes: Spoke[] = [
  { angle: 0, label: 'Reasoning', Icon: Brain },
  { angle: 60, label: 'Skills', Icon: Workflow },
  { angle: 120, label: 'Provenance', Icon: ShieldCheck },
  { angle: 180, label: 'Graph', Icon: Network },
  { angle: 240, label: 'MCP seam', Icon: GitBranch },
  { angle: 300, label: 'Sources', Icon: Database },
]

const SIZE = 460
const C = SIZE / 2
const R_INNER = 60
const R_OUTER = 178

function polar(angle: number, r: number) {
  const rad = ((angle - 90) * Math.PI) / 180
  return { x: C + Math.cos(rad) * r, y: C + Math.sin(rad) * r }
}

/**
 * BusinessBrain orbit motif — central N-mark + six radial spokes terminating at
 * labelled nodes. Spokes draw in via stroke-dashoffset; nodes scale in.
 * Inspired by Vercel-style geometric system diagrams; brand-aligned to navy/cobalt.
 */
export function BusinessBrainOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-full w-full"
        role="img"
        aria-label="BusinessBrain architecture diagram: central reasoning node with six labelled spokes — Reasoning, Skills, Provenance, Graph, MCP seam, Sources."
      >
        <defs>
          <linearGradient id="bb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <radialGradient id="bb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
          <filter id="bb-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Concentric guide rings */}
        <motion.circle
          cx={C}
          cy={C}
          r={R_OUTER}
          fill="none"
          stroke="#2563eb"
          strokeOpacity="0.14"
          strokeDasharray="2 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 0.8, ease: ease.out },
            rotate: { duration: 80, ease: 'linear', repeat: Infinity },
          }}
          style={{ transformOrigin: `${C}px ${C}px` }}
        />
        <circle cx={C} cy={C} r={R_OUTER - 38} fill="none" stroke="#2563eb" strokeOpacity="0.08" />

        {/* Central glow */}
        <circle cx={C} cy={C} r={120} fill="url(#bb-glow)" filter="url(#bb-soft)" />

        {/* Spoke lines */}
        {spokes.map((s, i) => {
          const start = polar(s.angle, R_INNER + 4)
          const end = polar(s.angle, R_OUTER - 28)
          return (
            <motion.line
              key={`line-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="#2563eb"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: ease.out, delay: 0.3 + i * 0.08 }}
            />
          )
        })}

        {/* Provenance amber arrow (architectural callout) */}
        <motion.path
          d={`M ${polar(150, R_OUTER - 28).x} ${polar(150, R_OUTER - 28).y}
              Q ${polar(180, R_OUTER + 8).x} ${polar(180, R_OUTER + 8).y}
                ${polar(210, R_OUTER - 28).x} ${polar(210, R_OUTER - 28).y}`}
          fill="none"
          stroke="#d97706"
          strokeOpacity="0.65"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: ease.out, delay: 1.2 }}
        />

        {/* Central N-mark */}
        <motion.g
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: ease.out, delay: 0.2 }}
          style={{ transformOrigin: `${C}px ${C}px` }}
        >
          <circle cx={C} cy={C} r={56} fill="white" stroke="#e2e8f0" />
          <g transform={`translate(${C - 28} ${C - 30})`}>
            <path
              d="M 8 52 L 8 8 L 44 52 L 44 4"
              fill="none"
              stroke="url(#bb-grad)"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 44 4 L 51 -1"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="8" cy="52" r="3.5" fill="#1e3a5f" />
            <circle cx="8" cy="8" r="2.8" fill="#1e3a5f" />
            <circle cx="44" cy="52" r="3.5" fill="#2563eb" />
            <circle cx="51" cy="-1" r="2.4" fill="#2563eb" />
          </g>
        </motion.g>

        {/* Soft pulse on the central node */}
        <motion.circle
          cx={C}
          cy={C}
          r={56}
          fill="none"
          stroke="#2563eb"
          strokeOpacity="0.4"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 1.35, opacity: 0 }}
          transition={{ duration: 2.6, ease: ease.out, repeat: Infinity, delay: 1 }}
          style={{ transformOrigin: `${C}px ${C}px` }}
        />

        {/* Outer nodes */}
        {spokes.map((s, i) => {
          const p = polar(s.angle, R_OUTER)
          return (
            <motion.g
              key={`node-${i}`}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: ease.out, delay: 0.6 + i * 0.08 }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            >
              <circle cx={p.x} cy={p.y} r="22" fill="white" stroke="#e2e8f0" strokeWidth="1.2" />
              <circle cx={p.x} cy={p.y} r="22" fill="#2563eb" fillOpacity="0.05" />
              <foreignObject x={p.x - 11} y={p.y - 11} width="22" height="22">
                <div className="flex h-full w-full items-center justify-center text-cobalt-600">
                  <s.Icon className="h-[14px] w-[14px]" strokeWidth={1.6} />
                </div>
              </foreignObject>
              <text
                x={p.x}
                y={p.y + 38}
                textAnchor="middle"
                className="fill-charcoal"
                fontSize="11"
                fontWeight={500}
                fontFamily="JetBrains Mono, ui-monospace, monospace"
                style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {s.label}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
