import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel hop="NODE_06" label="Education" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">Foundations.</h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {education.map((ed, i) => (
            <Reveal key={ed.id} delay={i * 0.1}>
              <div className="card-spotlight glass flex flex-col gap-5 rounded-2xl p-7 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-signal-violet/30 to-signal-cyan/20 text-signal-cyan">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper">{ed.school}</h3>
                  <p className="text-sm text-paper-muted">{ed.affiliation}</p>
                  <p className="mt-2 text-sm text-paper">{ed.degree}</p>
                  <p className="mt-1 font-mono text-xs text-signal-cyan">{ed.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper-muted">{ed.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
