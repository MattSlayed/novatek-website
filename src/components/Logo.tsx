import { cn } from '@/lib/utils'

type Variant = 'gradient' | 'navy' | 'cobalt' | 'white'
type Size = 'sm' | 'md' | 'lg'

const sizes: Record<Size, { mark: number; text: string; gap: string }> = {
  sm: { mark: 28, text: 'text-base', gap: 'gap-2' },
  md: { mark: 36, text: 'text-lg', gap: 'gap-2.5' },
  lg: { mark: 48, text: 'text-2xl', gap: 'gap-3' },
}

interface LogoProps {
  variant?: Variant
  size?: Size
  showWordmark?: boolean
  className?: string
}

/**
 * NOVATEK N-mark — geometric letterform with circuit nodes and an upward arrow.
 * Source-of-truth SVG from the brand guidelines skill (§4).
 */
export function Logo({
  variant = 'gradient',
  size = 'md',
  showWordmark = true,
  className,
}: LogoProps) {
  const { mark, text, gap } = sizes[size]
  const ratio = 88 / 80

  return (
    <span
      className={cn('inline-flex items-center', gap, className)}
      aria-label="NOVATEK"
    >
      <Mark variant={variant} width={mark} height={mark * ratio} />
      {showWordmark && (
        <span
          className={cn(
            'font-bold uppercase tracking-[0.08em] tabular-numerals',
            text,
          )}
        >
          <NovaTek variant={variant} />
        </span>
      )}
    </span>
  )
}

function Mark({
  variant,
  width,
  height,
}: {
  variant: Variant
  width: number
  height: number
}) {
  const id = `nv-grad-${variant}`

  if (variant === 'gradient') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 88"
        width={width}
        height={height}
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <path
          d="M 12 76 L 12 16 L 60 76 L 60 12"
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 60 12 L 70 5"
          fill="none"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="76" r="5" fill="#1e3a5f" />
        <circle cx="12" cy="16" r="4" fill="#1e3a5f" />
        <circle cx="60" cy="76" r="5" fill="#2563eb" />
        <circle cx="70" cy="5" r="3.5" fill="#2563eb" />
      </svg>
    )
  }

  const stroke =
    variant === 'navy' ? '#1e3a5f' : variant === 'cobalt' ? '#2563eb' : '#ffffff'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 88"
      width={width}
      height={height}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M 12 76 L 12 16 L 60 76 L 60 12"
        fill="none"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 60 12 L 70 5"
        fill="none"
        stroke={stroke}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="76" r="5" fill={stroke} />
      <circle cx="12" cy="16" r="4" fill={stroke} />
      <circle cx="60" cy="76" r="5" fill={stroke} />
      <circle cx="70" cy="5" r="3.5" fill={stroke} />
    </svg>
  )
}

function NovaTek({ variant }: { variant: Variant }) {
  if (variant === 'white') {
    return (
      <span className="text-white">
        NOVA<span className="text-white">TEK</span>
        <sup className="ml-0.5 text-[0.55em] font-light text-white/60">®</sup>
      </span>
    )
  }
  return (
    <span className="text-navy-500">
      NOVA<span className="text-cobalt-600">TEK</span>
      <sup className="ml-0.5 text-[0.55em] font-light text-slate-400">®</sup>
    </span>
  )
}
