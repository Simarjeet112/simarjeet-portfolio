import { useState } from 'react'
import { Mail, Linkedin, Github, Phone, Send, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { profile } from '../data/content'

const whatsappDigits = profile.phone.replace(/[^\d]/g, '')

const contactLinks = [
  {
    icon: MessageCircle,
    label: 'Chat on WhatsApp',
    href: `https://wa.me/${whatsappDigits}`,
    accent: true,
  },
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: Github, label: 'GitHub', href: profile.github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n\u2014 ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel hop="NODE_07" label="Contact" />
        </Reveal>
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl lg:text-5xl">
            Have a system worth building? <span className="text-gradient">Let\u2019s route it.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="space-y-3">
                {contactLinks.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className={`group flex items-center gap-4 rounded-2xl p-4 transition-colors ${
                      c.accent
                        ? 'glass-strong border border-signal-cyan/30 hover:border-signal-cyan/60'
                        : 'glass hover:border-signal-cyan/40'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${
                        c.accent ? 'bg-gradient-to-br from-signal-violet to-signal-cyan text-ink' : 'bg-ink-soft text-signal-cyan'
                      }`}
                    >
                      <c.icon size={17} />
                    </span>
                    <span className="text-sm text-paper transition-colors group-hover:text-signal-cyan">
                      {c.label}
                    </span>
                  </a>
                ))}
              </div>

              <div className="rounded-2xl border border-ink-line p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-paper-dim">Based in</p>
                <p className="mt-1 text-sm text-paper">{profile.location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-paper-dim">Name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-line bg-ink/60 px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal-cyan"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-paper-dim">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-line bg-ink/60 px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal-cyan"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-paper-dim">Message</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-ink-line bg-ink/60 px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal-cyan"
                  placeholder="What are you building?"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-signal-violet to-signal-cyan px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-ink transition-transform hover:scale-[1.01] shadow-glow sm:w-auto"
              >
                Send message
                <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
