import { LinkButton } from '@/components/ui/Button'
import { Seo } from '@/components/Seo'

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 pt-32 pb-24 text-center">
      <Seo
        title="Page not found - NOVATEK®"
        description="The page you are looking for does not exist. Return to the NOVATEK homepage."
        path="/404"
        noindex
      />
      <span className="eyebrow">Error 404</span>
      <h1 className="text-h1 font-semibold text-navy-500">This page doesn’t exist.</h1>
      <p className="max-w-md text-charcoal/70">
        The link may be broken, or the page may have moved. Let’s get you back on track.
      </p>
      <LinkButton href="/" withArrow>
        Back to home
      </LinkButton>
    </section>
  )
}
