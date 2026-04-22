import type { Project } from '../data/projects'

type ProjectsProps = {
  projects: Project[]
}

// Project list uses plain TS data to keep content management lightweight.
export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="border-t border-black/10 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-wider text-slate-500">
              SECTION 02
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              项目展示
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              每个卡片包含截图、标题、描述、技术栈标签与链接（按 PRD 要求）。
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.href}
              className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-lg border border-black/10 bg-slate-50"
              >
                <img
                  src={p.imageSrc}
                  alt={p.imageAlt ?? `${p.name} screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>

              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                <a
                  className="text-sm text-slate-600 hover:text-slate-900"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  打开链接
                </a>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-black/10 bg-slate-50 px-2 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
