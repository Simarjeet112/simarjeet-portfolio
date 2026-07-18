import { motion } from 'framer-motion'

export default function AvatarIllustration() {
  return (
    <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
      {/* rotating dashed ring = orbit */}
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="150"
          cy="150"
          r="138"
          fill="none"
          stroke="#7C5CFC"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
      </motion.svg>

      {/* orbiting node dots */}
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="150" cy="18" r="4" fill="#22D3EE" />
        <circle cx="282" cy="150" r="3" fill="#7C5CFC" />
        <circle cx="150" cy="282" r="3" fill="#FFA34D" />
      </motion.svg>

      {/* glow behind portrait */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-signal-violet/40 via-signal-cyan/20 to-transparent blur-2xl" />

      {/* portrait frame \u2014 your real photo */}
      <div className="absolute inset-8 overflow-hidden rounded-full glass-strong shadow-glow">
        <img
          src="/images/avatar.png"
          alt="Simarjeet Singh Sodhi"
          className="h-full w-full object-cover"
        />
      </div>

      {/* floating tech tag */}
      <motion.div
        className="absolute -right-2 top-4 rounded-full glass px-3 py-1.5 font-mono text-[10px] text-signal-cyan shadow-glow-cyan"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        status: shipping
      </motion.div>
      <motion.div
        className="absolute -left-4 bottom-8 rounded-full glass px-3 py-1.5 font-mono text-[10px] text-signal-amber"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        latency: low
      </motion.div>
    </div>
  )
}
