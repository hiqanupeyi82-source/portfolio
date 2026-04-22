type HeroProps = {
  title?: string
  subtitle?: string
}

// Above-the-fold section: quick intro + avatar.
export function Hero({
  title = '真话不假',
  subtitle = '个人学习使用',
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-14 pb-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/15 via-sky-400/10 to-emerald-300/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_240px]">
        <div>
          <p className="text-sm text-slate-500">个人作品集</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            <span className="bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            {subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              联系我
            </a>
          </div>
        </div>

        <div className="mx-auto">
          <div className="rounded-full bg-white p-1 shadow-sm ring-1 ring-black/10">
            <img
              src="/1.jpg"
              alt="头像"
              loading="lazy"
              decoding="async"
              className="h-44 w-44 rounded-full object-cover shadow-md"
            />
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            {/* 头像来自 <code>/public/1.jpg</code> */}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl border-t border-black/10" />
    </section>
  )
}
