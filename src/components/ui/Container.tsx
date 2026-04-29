import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'narrow' | 'default' | 'wide'
}

const sizes = {
  narrow: 'max-w-[820px]',
  default: 'max-w-[1200px]',
  wide: 'max-w-[1320px]',
}

export function Container({
  children,
  className,
  size = 'default',
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn('mx-auto px-5 sm:px-6 lg:px-8', sizes[size], className)}
      {...rest}
    >
      {children}
    </div>
  )
}
