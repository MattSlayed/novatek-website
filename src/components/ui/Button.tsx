import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'ghost' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out-quart focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-sharp'

const variants: Record<Variant, string> = {
  primary:
    'bg-cobalt-600 text-white shadow-navy-sm hover:bg-cobalt-700 hover:shadow-cobalt-glow hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-navy-500 border border-slate-200 hover:border-cobalt-600 hover:text-cobalt-600 hover:-translate-y-0.5',
  inverse:
    'bg-white text-navy-500 hover:bg-slate-100 hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  withArrow?: boolean
  children: ReactNode
}

export const Button = forwardRef<
  HTMLButtonElement,
  CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(function Button(
  { variant = 'primary', size = 'md', withArrow, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], 'group', className)}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </button>
  )
})

interface LinkButtonProps
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function LinkButton(
    { variant = 'primary', size = 'md', withArrow, className, children, ...rest },
    ref,
  ) {
    return (
      <a
        ref={ref}
        className={cn(base, variants[variant], sizes[size], 'group', className)}
        {...rest}
      >
        {children}
        {withArrow && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        )}
      </a>
    )
  },
)
