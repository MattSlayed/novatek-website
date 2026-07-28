import { useEffect } from 'react'

// Per-route head manager (no dependency). Updates title, meta description,
// canonical, and Open Graph / Twitter tags on navigation so each route is
// uniquely described - the static defaults in index.html cover the homepage
// and the no-JS fallback.
const SITE_URL = 'https://novatekllc.co.za'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

type SeoProps = {
  title: string
  description: string
  /** Route path, e.g. "/" or "/businessbrain". Used to build the canonical URL. */
  path: string
  image?: string
  noindex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`

    document.title = title
    upsertMeta('name', 'description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)

    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)

    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
  }, [title, description, path, image, noindex])

  return null
}
