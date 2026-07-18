export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(241,239,251,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(241,239,251,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* glow blobs */}
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-signal-violet/25 blur-[120px] animate-drift-slow" />
      <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-signal-cyan/20 blur-[130px] animate-drift" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-signal-amber/10 blur-[140px] animate-drift-slow" />

      {/* route lines */}
      <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0" />
            <stop offset="50%" stopColor="#7C5CFC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -50 120 Q 300 40 600 180 T 1400 140"
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          className="animate-pulseLine"
        />
        <path
          d="M -50 520 Q 400 620 800 480 T 1500 560"
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          className="animate-pulseLine"
          style={{ animationDelay: '1.2s' }}
        />
      </svg>

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#07070C_100%)]" />
    </div>
  )
}
