import { tickerKeywords } from '@/data/site'

/** Subtle keyword ticker — restrained, grayscale, no distracting motion. */
export function Marquee() {
  const items = [...tickerKeywords, ...tickerKeywords]
  return (
    <div className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-4">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
      <div className="flex w-max animate-marquee gap-12 pl-12 will-change-transform">
        {items.map((kw, i) => (
          <span
            key={`${kw}-${i}`}
            className="inline-flex items-center gap-2 text-micro font-mono uppercase tracking-[0.14em] text-slate-500 whitespace-nowrap"
          >
            <span className="h-1 w-1 rounded-full bg-cobalt-600" aria-hidden="true" />
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}
