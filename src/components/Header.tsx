type NavItem = {
  label: string
  href: string
}

// Sticky header + anchor nav to keep scrolling UX simple.
const nav: NavItem[] = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="font-semibold tracking-tight text-slate-900 hover:text-slate-700"
        >
          Portfolio
        </a>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
