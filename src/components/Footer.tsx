// Minimal footer: avoids clutter while keeping attribution visible.
export function Footer() {
  return (
    <footer className="border-t border-black/10 px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p className="text-slate-400">
          Built with React · TypeScript · Vite · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
