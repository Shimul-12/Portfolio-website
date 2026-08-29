"use client";

import { motion } from "framer-motion";

const feed = [
  ["PROVORA", "SYSTEM READY"],
  ["DSC", "INVARIANT TEST"],
  ["LOTTERY", "VRF INTEGRATION"],
  ["SECURITY", "AUDIT ACTIVE"],
];

export default function LiveFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="absolute right-6 top-[48%] z-20 hidden w-[250px] border border-white/10 bg-black/60 backdrop-blur-md lg:block"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--accent)]">
          LIVE FEED
        </span>

        <span className="font-mono text-[9px] text-white/25">
          ◇
        </span>
      </div>

      <div className="divide-y divide-white/[0.06]">
        {feed.map(([name, status], index) => (
          <div
            key={name}
            className="flex items-center justify-between px-4 py-3"
          >
            <div>
              <p className="font-mono text-[8px] text-white/65">
                {name}
              </p>

              <p className="mt-1 font-mono text-[7px] text-white/25">
                {status}
              </p>
            </div>

            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}