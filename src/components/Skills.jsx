import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { skillGroups } from '../data/content'

function TiltCard({ children }) {
  const handleMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-2px)`
  }
  const reset = (e) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
  }
  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="card-spotlight glass h-full rounded-2xl p-6 transition-transform duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel hop="NODE_02" label="Skills" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            The stack, routed by function.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <TiltCard>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-medium text-paper">{group.label}</h3>
                  <span className="font-mono text-[10px] text-signal-cyan">{group.hop}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink-line bg-ink-soft/60 px-3 py-1.5 font-mono text-xs text-paper-muted transition-colors hover:border-signal-violet/50 hover:text-paper"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
