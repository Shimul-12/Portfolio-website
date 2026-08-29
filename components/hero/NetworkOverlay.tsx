"use client";

import { motion } from "framer-motion";

/* Subtle atmospheric dots — no labels, no tooltips, just atmosphere */
const nodes = [
  { x: 15, y: 55 },
  { x: 35, y: 28 },
  { x: 52, y: 62 },
  { x: 68, y: 35 },
  { x: 85, y: 58 },
  { x: 42, y: 45 },
  { x: 75, y: 50 },
];

const connections = [
  [15, 55, 35, 28],
  [35, 28, 52, 62],
  [52, 62, 68, 35],
  [68, 35, 85, 58],
  [15, 55, 52, 62],
  [52, 62, 85, 58],
  [42, 45, 68, 35],
  [42, 45, 75, 50],
];

export default function NetworkOverlay() {
  return (
    <div className="pointer-events-none absolute right-[-4%] top-[30%] z-[3] hidden h-[52%] w-[49%] lg:block">

      {/* Connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {connections.map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(184,255,92,0.15)"
            strokeWidth="0.08"
            strokeDasharray="0.8 1.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4 + index * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Pulsing dots */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -4 : 4, 0],
          }}
          transition={{
            duration: 5 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Pulse ring */}
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 0.4,
            }}
            className="absolute -inset-1.5 rounded-full border border-[var(--accent)]/20"
          />

          {/* Dot */}
          <div className="relative h-2 w-2 rounded-full border border-[var(--accent)]/60 bg-[#020303] shadow-[0_0_8px_rgba(184,255,92,0.3)]" />
        </motion.div>
      ))}
    </div>
  );
}