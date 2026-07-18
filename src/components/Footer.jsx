import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-paper-dim">
          \u00a9 {new Date().getFullYear()} {profile.name}. Built from scratch, deployed with intent.
        </p>
        <p className="font-mono text-xs text-paper-dim">
          <span className="text-signal-cyan">status:</span> online
        </p>
      </div>
    </footer>
  )
}
