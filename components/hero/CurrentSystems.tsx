"use client";

import { motion } from "framer-motion";

const systems = [
  {
    name: "DSC",
    description: "Decentralized Stablecoin",
    status: "LIVE",
    icon: "◇",
  },
  {
    name: "DAO",
    description: "On-chain Governance",
    status: "LIVE",
    icon: "○",
  },
  {
    name: "LOTTERY",
    description: "Chainlink VRF",
    status: "LIVE",
    icon: "◇",
  },
  {
    name: "PROVORA",
    description: "Decentralized Identity",
    status: "LIVE",
    icon: "◎",
  },
  {
    name: "SECURITY LAB",
    description: "Audit / Research / Writeups",
    status: "ACTIVE",
    icon: "◇",
  },
];

export default function CurrentSystems() {
  return (
    <section className="absolute bottom-[5.5rem] left-0 right-0 z-30 hidden px-8 lg:block">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
          Current Systems
        </div>

        <div className="grid grid-cols-5 gap-2">
          {systems.map((system, index) => (
            <motion.a
              key={system.name}
              href="#work"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7 + index * 0.1,
                duration: 0.5,
              }}
              whileHover={{ y: -3 }}
              className="group relative border border-white/10 bg-black/55 p-4 backdrop-blur-sm transition-colors hover:border-[var(--accent)]/40"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 font-mono text-lg text-white/60 transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                  {system.icon}
                </span>

                <span className="font-mono text-[8px] text-[var(--accent)]">
                  ● {system.status}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-mono text-[11px] tracking-[0.08em] text-white">
                  {system.name}
                </h3>

                <p className="mt-1 font-mono text-[8px] leading-4 text-white/30">
                  {system.description}
                </p>
              </div>

              <span className="absolute right-2 top-2 text-[var(--accent)] opacity-30">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}