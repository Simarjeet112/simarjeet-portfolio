import { motion } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/content'
import AvatarIllustration from './AvatarIllustration'

const headline = ['Systems that', 'stay standing', 'under load.']

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center px-6 pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* left \u2014 copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan animate-pulse" />
            <span className="font-mono text-xs text-paper-muted">
              open to backend / full-stack / AI-integrated roles
            </span>
          </motion.div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? <span className="text-gradient">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-xl text-lg text-paper-muted"
          >
            I\u2019m <span className="text-paper font-medium">{profile.name}</span> \u2014 {profile.role.toLowerCase()}
            . {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal-violet to-signal-cyan px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-ink transition-transform hover:scale-[1.03] shadow-glow"
            >
              {profile.cta}
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full glass p-3.5 text-paper-muted transition-colors hover:text-signal-cyan"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full glass p-3.5 text-paper-muted transition-colors hover:text-signal-cyan"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* right \u2014 avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <AvatarIllustration />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-paper-dim"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        scroll
      </motion.div>
    </section>
  )
}
