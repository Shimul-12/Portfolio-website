"use client";

import { motion } from "framer-motion";

const areas = [
  "SMART CONTRACTS",
  "DEFI PROTOCOLS",
  "WEB3 INFRASTRUCTURE",
  "SECURITY RESEARCH",
];

export default function FocusAreas() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-[18%] right-6 z-20 hidden w-[250px] border border-white/10 bg-black/60 backdrop-blur-md lg:block"
    >
      <div className="border-b border-white/10 px-4 py-3">
        <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--accent)]">
          FOCUS AREAS
        </span>
      </div>

      <div className="p-4">
        {areas.map((area, index) => (
          <div
            key={area}
            className="flex items-center gap-3 py-2"
          >
            <span className="text-[var(--accent)]">◎</span>

            <span className="font-mono text-[8px] text-white/55">
              <span className="mr-2 text-white/20">
                [0{index + 1}]
              </span>

              {area}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}