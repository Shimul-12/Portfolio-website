"use client";

import { motion } from "framer-motion";

export default function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="absolute right-6 top-[17%] z-20 hidden w-[250px] border border-white/10 bg-black/65 backdrop-blur-md lg:block"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--accent)]">
          SYSTEM STATUS
        </span>

        <span className="text-[var(--accent)]">⌁</span>
      </div>

      <div className="space-y-5 p-4">
        <div>
          <p className="font-mono text-[8px] text-white/30">
            NETWORK
          </p>

          <div className="mt-2 flex items-center justify-between">
            <span className="font-mono text-[10px] text-white/70">
              EVM / WEB3
            </span>

            <span className="font-mono text-[8px] text-[var(--accent)]">
              ● OPERATIONAL
            </span>
          </div>
        </div>

        <div>
          <p className="font-mono text-[8px] text-white/30">
            SECURITY LAYER
          </p>

          <div className="mt-2">
            <span className="font-mono text-[10px] text-white/70">
              ACTIVE
            </span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="font-mono text-[8px] text-white/30">
            TESTING
          </p>

          <p className="mt-2 font-mono text-lg text-[var(--accent)]">
            128,000
          </p>

          <p className="font-mono text-[7px] uppercase tracking-wider text-white/25">
            fuzz calls
          </p>

          <p className="mt-2 font-mono text-[10px] text-white/70">
            0 unexpected reverts
          </p>
        </div>

        <div className="border-t border-white/10 pt-3">
          <div className="flex justify-between font-mono text-[7px]">
            <span className="text-white/25">BUILD STATUS</span>
            <span className="text-[var(--accent)]">OPERATIONAL</span>
          </div>

          <div className="mt-2 h-px bg-white/10">
            <div className="h-px w-[92%] bg-[var(--accent)]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}