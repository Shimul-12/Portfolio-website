"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const metrics = [
  {
    value: 4,
    label: "Active Protocols",
    suffix: "",
    description: "Built & deployed",
  },
  {
    value: 100,
    label: "Open Source",
    suffix: "%",
    description: "All code public",
  },
  {
    value: 3,
    label: "Security Writeups",
    suffix: "+",
    description: "Vulnerability analyses",
  },
  {
    value: 4,
    label: "Core Technologies",
    suffix: "",
    description: "Solidity · Foundry · Chainlink · OpenZeppelin",
  },
];

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <span className="flex items-baseline gap-0.5">
      <motion.span>{rounded}</motion.span>
      {suffix && (
        <span className="text-[var(--accent)]/70">{suffix}</span>
      )}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-[#020303] px-6 lg:px-[8vw]">
      {/* Subtle top/bottom separators */}
      <div className="absolute left-[8vw] right-[8vw] top-0 h-px bg-white/[0.06]" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-[1200px] py-16"
      >
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + index * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border border-white/[0.06] bg-white/[0.015] p-6 transition-all duration-400 hover:border-[var(--accent)]/20 hover:bg-white/[0.025]"
            >
              {/* Large animated number */}
              <div className="mb-2 font-mono text-[clamp(2rem,3vw,2.8rem)] font-bold leading-none tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
                <AnimatedNumber
                  value={metric.value}
                  suffix={metric.suffix}
                  inView={isInView}
                />
              </div>

              {/* Label */}
              <p className="mb-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                {metric.label}
              </p>

              {/* Description */}
              <p className="font-mono text-[11px] text-white/30">
                {metric.description}
              </p>

              {/* Corner accent */}
              <span className="absolute top-3 right-3 h-2 w-2 border-t border-r border-[var(--accent)]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute left-[8vw] right-[8vw] bottom-0 h-px bg-white/[0.06]" />
    </section>
  );
}
