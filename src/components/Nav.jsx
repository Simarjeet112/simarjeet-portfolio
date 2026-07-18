import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'

export default function Nav() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => goTo('about')}
          className="font-display text-sm font-semibold tracking-tight text-paper"
        >
          <span className="text-signal-cyan font-mono text-xs align-top mr-1">//</span>
          SS.SODHI
        </button>

        <nav className="hidden md:flex items-center gap-1 rounded-full glass px-2 py-1.5">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                active === item.id ? 'text-ink' : 'text-paper-muted hover:text-paper'
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-signal-violet to-signal-cyan"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => goTo('contact')}
          className="hidden md:inline-flex items-center rounded-full bg-paper px-5 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-transform hover:scale-105"
        >
          Contact
        </button>

        <button className="md:hidden text-paper" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-6 mt-3 overflow-hidden rounded-2xl glass-strong"
          >
            <div className="flex flex-col p-4">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="py-3 text-left font-mono text-xs uppercase tracking-wider text-paper-muted hover:text-signal-cyan"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
