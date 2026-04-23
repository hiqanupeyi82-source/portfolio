import { useMemo, useState } from 'react'

type ContactLink = { label: string } & (
  | { href: string; value?: never }
  | { value: string; href?: never }
)

type ContactProps = {
  links: ContactLink[]
}

export function Contact({ links }: ContactProps) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const [copied, setCopied] = useState<Record<string, boolean>>({})

  const buttonClassName = useMemo(
    () =>
      'rounded-lg border border-black/10 bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900',
    []
  )

  async function copyToClipboard(text: string) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return
    }

    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'fixed'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

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
            <p className="mt-2 text-sm text-slate-600">点击下方链接与我联系</p>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap gap-3">
            {links.map((l) => {
              if ('href' in l) {
                const isMailto = l.href.startsWith('mailto:')

                return (
                  <a
                    key={l.href}
                    className={buttonClassName}
                    href={l.href}
                    target={isMailto ? undefined : '_blank'}
                    rel={isMailto ? undefined : 'noreferrer'}
                  >
                    {l.label}
                  </a>
                )
              }

              const isShown = !!revealed[l.label]
              const isCopied = !!copied[l.label]

              return (
                <button
                  key={l.label}
                  type="button"
                  className={buttonClassName}
                  onClick={async () => {
                    try {
                      await copyToClipboard(l.value)
                      setCopied((p) => ({ ...p, [l.label]: true }))
                      window.setTimeout(
                        () => setCopied((p) => ({ ...p, [l.label]: false })),
                        1200
                      )
                    } finally {
                      setRevealed((prev) => ({ ...prev, [l.label]: true }))
                    }
                  }}
                >
                  {isCopied ? '已复制' : isShown ? l.value : l.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
