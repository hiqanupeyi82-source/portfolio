type ContactLink = {
  label: string
  href: string
}

type ContactProps = {
  links: ContactLink[]
}

// Render clickable links (email + socials) as requested by the PRD.
export function Contact({ links }: ContactProps) {
  return (
    <section id="contact" className="border-t border-black/10 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-wider text-slate-500">
              {/* SECTION 03 */}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              联系方式
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              点击下方链接与我联系
            </p>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                className="rounded-lg border border-black/10 bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={l.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
