"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stackRow1 = [
  "Solidity",
  "Foundry",
  "OpenZeppelin",
  "Chainlink",
  "Ethereum",
  "EVM",
  "RPC",
  "Web3",
  "Node.js",
  "TypeScript",
  "APIs",
  "Fuzzing",
  "Invariant Testing",
  "Auditing",
  "Git",
  "GitHub",
  "Linux",
  "Docker",
];

const stackRow2 = [
  "DeFi Protocols",
  "Smart Contracts",
  "Governance",
  "Chainlink VRF",
  "Price Feeds",
  "Hardhat",
  "Slither",
  "Aderyn",
  "Access Control",
  "Flash Loans",
  "Proxy Patterns",
  "Diamond Standard",
  "Assembly",
  "Gas Optimization",
  "Formal Verification",
  "Unit Testing",
];

const philosophy = [
  { step: "BUILD", description: "Design and implement the system" },
  { step: "TEST", description: "Write fuzz tests and verify invariants" },
  { step: "BREAK", description: "Find where assumptions fail" },
  { step: "UNDERSTAND", description: "Analyze root causes" },
  { step: "IMPROVE", description: "Make it resilient" },
];

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-container overflow-hidden py-2">
      <div
        className={`marquee-track ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-2 inline-flex items-center whitespace-nowrap border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 font-mono text-[12px] text-white/50 transition-all duration-300 hover:border-[var(--accent)]/40 hover:text-white/80 hover:bg-[var(--accent)]/[0.04]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function StackAbout() {
  const stackRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-60px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-60px" });

  return (
    <section
      id="stack"
      className="relative bg-[#020303] px-6 py-32 lg:px-[8vw]"
    >
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* ===== STACK — MARQUEE ===== */}
        <motion.div
          ref={stackRef}
          initial={{ opacity: 0, y: 30 }}
          animate={stackInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-32"
        >
          <div className="mb-4 flex items-center gap-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Stack
            </span>
            <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-[var(--accent)]/40 to-transparent" />
          </div>

          <h2 className="mb-4 font-mono text-[clamp(2.4rem,3.5vw,3.8rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white">
            Tools{" "}
            <span className="text-white/30">I Work With</span>
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="mb-12 max-w-[500px] font-mono text-[13px] leading-7 text-white/35">
            Hover to pause. The stack is always growing.
          </p>

          {/* Marquee rows with fade edges */}
          <div className="relative">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#020303] to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#020303] to-transparent" />

            <div className="space-y-2">
              <MarqueeRow items={stackRow1} direction="left" />
              <MarqueeRow items={stackRow2} direction="right" />
            </div>
          </div>
        </motion.div>

        {/* ===== HOW I THINK — TIMELINE ===== */}
        <motion.div
          ref={aboutRef}
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center gap-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Philosophy
            </span>
            <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-[var(--accent)]/40 to-transparent" />
          </div>

          <h2 className="mb-14 font-mono text-[clamp(2.4rem,3.5vw,3.8rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white">
            How I{" "}
            <span className="text-white/30">Think</span>
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            {/* Philosophy steps — oversized numbers + animated timeline */}
            <div className="relative flex flex-col">
              {/* Vertical accent line */}
              {aboutInView && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--accent)]/30 via-[var(--accent)]/15 to-transparent"
                  style={{ transformOrigin: "top" }}
                />
              )}

              {philosophy.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.2 + index * 0.12,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative flex items-start gap-6 py-4"
                >
                  {/* Large step number */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center">
                    {/* Background glow on hover */}
                    <span className="absolute inset-0 bg-[var(--accent)]/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute inset-0 border border-[var(--accent)]/20 transition-colors duration-300 group-hover:border-[var(--accent)]/40" />
                    <span className="relative font-mono text-[14px] font-bold text-[var(--accent)]/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="pt-1">
                    <span className="font-mono text-[20px] font-bold tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
                      {item.step}
                    </span>
                    <p className="mt-1.5 font-mono text-[13px] text-white/35">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Supporting text — glass card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="glass-card p-8 lg:p-10">
                <p className="font-mono text-[15px] leading-[1.9] text-white/50">
                  I like understanding systems from the inside out — how they
                  work, where assumptions exist, and what happens when those
                  assumptions fail.
                </p>

                <p className="mt-6 font-mono text-[15px] leading-[1.9] text-white/50">
                  Every protocol I build gets tested against its own
                  assumptions. Every vulnerability I study deepens how I think
                  about the next system I design.
                </p>

                <div className="mt-8 border-t border-white/[0.06] pt-6">
                  <p className="font-mono text-[14px] leading-7 text-white/30">
                    That&apos;s the cycle:{" "}
                    <span className="text-[var(--accent)]/80">build</span>,{" "}
                    <span className="text-[var(--accent)]/80">test</span>,{" "}
                    <span className="text-[var(--accent)]/80">break</span>,{" "}
                    <span className="text-[var(--accent)]/80">understand</span>,{" "}
                    <span className="text-[var(--accent)]/80">improve</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
