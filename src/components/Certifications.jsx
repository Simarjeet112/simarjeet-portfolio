import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Expand } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { certifications } from '../data/content'

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <section id="certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel hop="NODE_05" label="Certifications" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            Proof of work, on record.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.08}>
              <button
                onClick={() => setActive(cert)}
                className="card-spotlight group relative w-full overflow-hidden rounded-2xl border border-ink-line bg-ink-soft/50 text-left transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-surface">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full glass-strong p-2 text-paper opacity-0 transition-opacity group-hover:opacity-100">
                    <Expand size={14} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-semibold leading-snug text-paper">{cert.title}</h3>
                  <p className="mt-1 text-xs text-paper-muted">{cert.issuer}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-signal-cyan">{cert.date}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl glass-strong"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 rounded-full glass-strong p-2 text-paper"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <img src={active.image} alt={active.title} className="max-h-[85vh] w-full object-contain" />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-paper">{active.title}</h3>
                <p className="text-sm text-paper-muted">
                  {active.issuer} \u00b7 {active.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
