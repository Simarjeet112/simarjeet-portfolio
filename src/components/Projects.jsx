import { Github, ArrowUpRight, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { projects } from '../data/content'

function ProjectCard({ project }) {
  const handleMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--x', `${x}%`)
    card.style.setProperty('--y', `${y}%`)
  }

  return (
    <div
      onMouseMove={handleMove}
      className="card-spotlight group relative flex h-full flex-col rounded-2xl border border-ink-line bg-ink-soft/50 p-7 transition-colors duration-300 hover:border-signal-violet/40"
      style={{
        backgroundImage:
          'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(124,92,252,0.12), transparent 60%)',
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal-cyan">{project.kind}</p>
            {project.status === 'ongoing' && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-signal-amber/40 bg-signal-amber/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-signal-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-amber animate-pulse" />
                Ongoing
              </span>
            )}
          </div>
          <h3 className="mt-2 font-display text-xl font-semibold text-paper">{project.title}</h3>
          <p className="text-sm text-paper-muted">{project.subtitle}</p>
        </div>
        <div className="relative z-10 flex flex-none items-center gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink-line p-2.5 text-paper-muted transition-all hover:border-signal-amber/50 hover:text-signal-amber"
              aria-label={`${project.title} live site`}
            >
              <ExternalLink size={16} />
            </a>
          )}
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink-line p-2.5 text-paper-muted transition-all hover:border-signal-cyan/50 hover:text-signal-cyan"
            aria-label={`${project.title} on GitHub`}
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-paper-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-paper-dim"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-paper transition-colors group-hover:text-signal-cyan"
        >
          View repository
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-signal-amber transition-colors hover:text-paper"
          >
            View live
            <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel hop="NODE_04" label="Projects" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            Shipped systems, not just repos.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
