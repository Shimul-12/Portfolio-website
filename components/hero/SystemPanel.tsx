"use client";

import { motion } from "framer-motion";

export default function SystemPanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute right-5 top-[27%] z-20 hidden w-[280px] border border-white/15 bg-[#020303]/90 backdrop-blur-xl lg:block xl:right-8"
    >

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

        <div className="flex items-center gap-3">

          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          </span>

          <span className="font-mono text-[14px] uppercase tracking-[0.15em] text-[var(--accent)]">
            System Status
          </span>
        </div>

        <span className="font-mono text-[11px] text-white/25">
          01
        </span>
      </div>

      <div className="space-y-7 p-5">

        {/* Network */}
        <div>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
            Network
          </p>

          <div className="mt-2 flex items-center justify-between">

            <span className="font-mono text-[14px] text-white/75">
              EVM / WEB3
            </span>

            <span className="font-mono text-[11px] text-[var(--accent)]">
              ● OPERATIONAL
            </span>

          </div>
        </div>

        {/* Security */}
        <div>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
            Security Layer
          </p>

          <div className="mt-2 flex items-center justify-between">

            <span className="font-mono text-[14px] text-white/75">
              SMART CONTRACTS
            </span>

            <span className="font-mono text-[11px] text-[var(--accent)]">
              ACTIVE
            </span>

          </div>
        </div>

        {/* Testing */}
        <div className="border-t border-white/10 pt-6">

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
            Testing
          </p>

          <div className="mt-4">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="font-mono text-3xl tracking-[-0.04em] text-[var(--accent)]"
            >
              128,000
            </motion.p>

            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/35">
              Fuzz calls
            </p>

          </div>

          <div className="mt-4">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25 }}
              className="font-mono text-xl text-white"
            >
              0
            </motion.p>

            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/35">
              Unexpected reverts
            </p>

          </div>
        </div>

        {/* Build status */}
        <div className="border-t border-white/10 pt-5">

          <div className="flex items-center justify-between">

            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
              Build status
            </span>

            <span className="font-mono text-[11px] text-[var(--accent)]">
              OPERATIONAL
            </span>

          </div>

          <div className="mt-4 h-1 w-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{
                delay: 1,
                duration: 1.2,
                ease: "easeOut",
              }}
              className="h-full bg-[var(--accent)]"
            />

          </div>
        </div>

      </div>

      {/* Corner */}
      <div className="absolute -bottom-2 -right-2 h-5 w-5 border-b border-r border-[var(--accent)]/50" />

    </motion.aside>
  );
}