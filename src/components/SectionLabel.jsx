export default function SectionLabel({ hop, label }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-8 bg-gradient-to-r from-signal-cyan to-transparent" />
      <span className="section-label">
        {hop ? `${hop} \u00b7 ` : ''}
        {label}
      </span>
    </div>
  )
}
