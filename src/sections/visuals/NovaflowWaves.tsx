import { motion, useReducedMotion } from 'framer-motion'
import { ease } from '@/lib/motion'

const W = 480
const H = 420
const LINES = 6

/**
 * NOVAFLOW flow motif — stacked sine paths that draw once and settle, with
 * three node markers reading as instrumented assets on the line.
 *
 * Deliberately a static SVG with motion.path pathLength, mirroring
 * BusinessBrainOrbit. The external strategy artifact animates its header with a
 * requestAnimationFrame canvas loop; that is not ported, because it cannot be
 * stopped for prefers-reduced-motion and burns a frame budget forever.
 */
function sine(rowIndex: number) {
  const y = 70 + rowIndex * 52
  const amp = 16 + rowIndex * 3
  const seg = W / 4
  let d = `M 0 ${y}`
  for (let i = 0; i < 4; i += 1) {
    const dir = i % 2 === 0 ? -1 : 1
    d += ` q ${seg / 2} ${amp * dir} ${seg} 0`
  }
  return d
}

export function NovaflowWaves() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-full w-full"
        role="img"
        aria-label="NOVAFLOW motif: stacked flow lines with instrumented asset nodes, representing pump and valve assets under continuous condition monitoring."
      >
        <defs>
          <linearGradient id="nf-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.10" />
            <stop offset="45%" stopColor="#2563eb" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.10" />
          </linearGradient>
          <radialGradient id="nf-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={W / 2} cy={H / 2} r={170} fill="url(#nf-glow)" />

        {Array.from({ length: LINES }, (_, i) => (
          <motion.path
            key={`wave-${i}`}
            d={sine(i)}
            fill="none"
            stroke="url(#nf-grad)"
            strokeWidth={i === 2 ? 2 : 1.2}
            strokeLinecap="round"
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            animate={reduced ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: ease.out, delay: 0.15 + i * 0.09 }}
          />
        ))}

        {/* Instrumented asset nodes sitting on the emphasised line */}
        {[
          { x: 120, label: 'PUMP' },
          { x: 240, label: 'VALVE' },
          { x: 360, label: 'VESSEL' },
        ].map((n, i) => (
          <motion.g
            key={n.label}
            initial={reduced ? false : { scale: 0.6, opacity: 0 }}
            animate={reduced ? undefined : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: ease.out, delay: 0.9 + i * 0.12 }}
            style={{ transformOrigin: `${n.x}px 174px` }}
          >
            <circle cx={n.x} cy={174} r="19" fill="white" stroke="#e2e8f0" strokeWidth="1.2" />
            <circle cx={n.x} cy={174} r="19" fill="#2563eb" fillOpacity="0.06" />
            <circle cx={n.x} cy={174} r="5" fill="#2563eb" />
            <text
              x={n.x}
              y={174 + 36}
              textAnchor="middle"
              className="fill-charcoal"
              fontSize="10"
              fontWeight={500}
              fontFamily="JetBrains Mono, ui-monospace, monospace"
              style={{ letterSpacing: '0.1em' }}
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
