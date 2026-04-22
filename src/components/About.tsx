import type { Skill } from '../data/skills'

type AboutProps = {
  bio: string
  skills: Skill[]
}

// Bio + skills are data-driven so you can edit without touching layout code.
export function About({ bio, skills }: AboutProps) {
  return (
    <section id="about" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-wider text-slate-500">
              SECTION 01
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              关于我
            </h2>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="max-w-3xl text-slate-600">{bio}</p>

          <div className="mt-8">
            <h3 className="text-sm font-semibold tracking-wide text-slate-700">
              技能
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s.name}
                  className="rounded-full border border-black/10 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
