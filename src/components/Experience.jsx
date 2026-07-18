import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel hop="NODE_03" label="Experience" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            Where the work has actually happened.
          </h2>
        </Reveal>

        <div className="relative mt-16 space-y-10 border-l border-ink-line pl-8 sm:pl-12">
          {experience.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-signal-cyan shadow-glow-cyan sm:-left-[54px]" />
                <div className="glass card-spotlight rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-paper">{exp.role}</h3>
                    <span className="font-mono text-xs text-signal-cyan">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-paper-muted">
                    {exp.company} \u00b7 {exp.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-paper-muted">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-signal-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-paper-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
