import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import Counter from './Counter'
import { about, stats } from '../data/content'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel hop="NODE_00" label={about.eyebrow} />
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl lg:text-[2.6rem]">
                {about.heading}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <p className="text-base leading-relaxed text-paper-muted sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="glass rounded-3xl p-6">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-paper-dim">
                system.status
              </p>
              <dl className="space-y-4">
                {about.highlights.map((h) => (
                  <div key={h.label} className="flex items-start justify-between gap-4 border-b border-ink-line pb-4 last:border-0 last:pb-0">
                    <dt className="font-mono text-xs text-paper-dim">{h.label}</dt>
                    <dd className="text-right text-sm text-paper">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-ink-line pt-12 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-paper-dim">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
