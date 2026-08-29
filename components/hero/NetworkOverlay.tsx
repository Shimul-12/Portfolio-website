"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    x: 12,
    y: 63,
    label: "RPC",
    description: "Web3 infrastructure",
  },
  {
    x: 32,
    y: 30,
    label: "ORACLE",
    description: "Chainlink / Price Feeds",
  },
  {
    x: 51,
    y: 58,
    label: "CONTRACT",
    description: "Solidity / EVM",
  },
  {
    x: 70,
    y: 30,
    label: "VALIDATOR",
    description: "Distributed systems",
  },
  {
    x: 87,
    y: 63,
    label: "SECURITY",
    description: "Fuzzing / Invariants",
  },
];

const connections = [
  [12, 63, 32, 30],
  [32, 30, 51, 58],
  [51, 58, 70, 30],
  [70, 30, 87, 63],
  [12, 63, 51, 58],
  [51, 58, 87, 63],
];

export default function NetworkOverlay() {
  return (
    <div className="pointer-events-none absolute right-[-4%] top-[30%] z-[3] hidden h-[52%] w-[49%] lg:block">

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
            stroke="rgba(184,255,92,0.22)"
            strokeWidth="0.11"
            strokeDasharray="0.8 0.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -5 : 5, 0],
          }}
          transition={{
            duration: 4 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="group relative">

            <motion.div
              animate={{
                scale: [1, 1.7, 1],
                opacity: [0.45, 0, 0.45],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute -inset-2 rounded-full border border-[var(--accent)]/30"
            />

            <div className="relative h-3 w-3 rounded-full border border-[var(--accent)] bg-[#020303] shadow-[0_0_12px_rgba(184,255,92,0.5)]" />

            <div className="absolute left-6 top-[-4px] whitespace-nowrap">
              <span className="font-mono text-[11px] tracking-[0.12em] text-white/45">
                {node.label}
              </span>
            </div>

            <div className="absolute left-6 top-6 hidden w-44 border border-white/15 bg-black/90 p-3 backdrop-blur-md group-hover:block">
              <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--accent)]">
                {node.label}
              </p>

              <p className="mt-1 font-mono text-[11px] leading-5 text-white/50">
                {node.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="absolute inset-[7%] border border-white/[0.06]" />

      <div className="absolute left-[7%] top-[7%] h-4 w-4 border-l border-t border-[var(--accent)]/35" />
      <div className="absolute right-[7%] top-[7%] h-4 w-4 border-r border-t border-white/15" />
      <div className="absolute bottom-[7%] left-[7%] h-4 w-4 border-b border-l border-white/15" />
      <div className="absolute bottom-[7%] right-[7%] h-4 w-4 border-b border-r border-[var(--accent)]/35" />

      <div className="absolute bottom-[2%] right-[7%] font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
        Protocol topology / live visualization
      </div>
    </div>
  );
}