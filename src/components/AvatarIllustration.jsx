import { motion } from "framer-motion";

export default function AvatarIllustration() {
  return (
    <div className="relative mx-auto h-80 w-80 sm:h-96 sm:w-96">
      {/* Orbit Ring */}
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle
          cx="150"
          cy="150"
          r="138"
          fill="none"
          stroke="#7C5CFC"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="3 9"
        />
      </motion.svg>

      {/* Orbit Dots */}
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle cx="150" cy="18" r="5" fill="#22D3EE" />
        <circle cx="282" cy="150" r="4" fill="#7C5CFC" />
        <circle cx="150" cy="282" r="4" fill="#FFA34D" />
      </motion.svg>

      {/* Glow */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-signal-violet/40 via-signal-cyan/30 to-transparent blur-3xl" />

      {/* Profile Image */}
      <div className="absolute inset-4 overflow-hidden rounded-full border border-white/10 shadow-[0_0_60px_rgba(124,92,252,0.45)]">
        <img
          src="/images/Gemini_Generated_Image_m9olvkm9olvkm9ol.png"
          alt="Simarjeet Singh Sodhi"
          className="h-full w-full object-cover scale-125"
          draggable="false"
        />
      </div>

      {/* Status */}
      <motion.div
        className="absolute -right-3 top-5 rounded-full bg-[#10131d]/80 border border-cyan-400/30 px-3 py-1 font-mono text-[10px] text-cyan-300 backdrop-blur-md"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        status: shipping
      </motion.div>

      {/* Latency */}
      <motion.div
        className="absolute -left-3 bottom-8 rounded-full bg-[#10131d]/80 border border-amber-400/30 px-3 py-1 font-mono text-[10px] text-amber-300 backdrop-blur-md"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        latency: low
      </motion.div>
    </div>
  );
}