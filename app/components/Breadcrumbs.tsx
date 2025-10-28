'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Crumb = {
  label: string
  href?: string
}

function toLabel(segment: string): string {
  if (!segment) return ''
  return segment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function Breadcrumbs({ items }: { items?: Crumb[] }) {
  const pathname = usePathname()

  const autoItems: Crumb[] = (() => {
    const segments = pathname.split('/').filter(Boolean)
    const crumbs: Crumb[] = [{ label: 'Home', href: '/' }]
    let acc = ''
    for (let i = 0; i < segments.length; i++) {
      acc += `/${segments[i]}`
      const isLast = i === segments.length - 1
      const label = toLabel(segments[i])
      crumbs.push({ label, href: isLast ? undefined : acc })
    }
    return crumbs
  })()

  const crumbs = items?.length ? items : autoItems

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb" className="w-full py-2">
          <ol className="inline-flex flex-wrap items-center gap-1 text-sm text-white/90 bg-black/60 rounded-full px-4 py-1 backdrop-blur-sm">
            {crumbs.map((crumb, idx) => {
              const isLast = idx === crumbs.length - 1
              return (
                <li key={`${crumb.label}-${idx}`} className="flex items-center">
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                  {!isLast && <span className="mx-2 text-white/60">/</span>}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}


