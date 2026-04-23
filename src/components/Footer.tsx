// Minimal footer: avoids clutter while keeping attribution visible.
export function Footer() {
  return (
    <footer className="border-t border-black/10 px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Truth never lies</p>
        <p className="text-slate-400">
         本站内容仅供学习交流使用，请勿用于非法用途
        </p>
      </div>
    </footer>
  )
}
