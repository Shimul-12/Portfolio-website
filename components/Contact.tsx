"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Shimul-12",
    external: true,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/0xShimul",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:ShimulSharma12345@gmail.com",
    external: false,
  },
];

const opportunities = [
  "Blockchain engineering",
  "Smart contracts",
  "Web3 infrastructure",
  "Security research",
  "Protocol development",
];

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: `${8 + Math.random() * 84}%`,
  duration: `${10 + Math.random() * 15}s`,
  delay: `${Math.random() * 10}s`,
}));

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020303] px-6 py-40 lg:px-[8vw]"
    >
      {/* Subtle separator */}
      <div className="absolute left-[8vw] right-[8vw] top-0 h-px bg-white/[0.08]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={
            {
              "--x": p.x,
              "--duration": p.duration,
              "--delay": p.delay,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Radial glow behind heading */}
      <div className="radial-glow absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-[1100px]"
      >
        {/* Headline — gradient text */}
        <h2 className="gradient-text font-mono text-[clamp(3.5rem,6vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.05em]">
          Let&apos;s Build
          <br />
          <span className="text-white/25" style={{ WebkitTextFillColor: "rgba(255,255,255,0.25)" }}>
            Something
          </span>
          <span style={{ WebkitTextFillColor: "var(--accent)" }}>.</span>
        </h2>

        {/* Opportunities — glass card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-12"
        >
          <div className="glass-card inline-block p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
              Open to opportunities involving
            </p>

            <div className="flex flex-wrap gap-2">
              {opportunities.map((item) => (
                <span
                  key={item}
                  className="border border-white/[0.1] bg-white/[0.02] px-4 py-2 font-mono text-[12px] text-white/50 transition-all duration-300 hover:border-[var(--accent)]/30 hover:text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA buttons — larger and more dramatic */}
        <div className="mt-14 flex flex-wrap gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.25 + index * 0.1,
                duration: 0.5,
              }}
              className={`group flex items-center gap-6 px-10 py-5 font-mono text-[13px] uppercase tracking-[0.12em] transition-all duration-400 ${
                index === 0
                  ? "bg-[var(--accent)] text-black font-semibold hover:shadow-[0_0_50px_rgba(184,255,92,0.2)] hover:scale-[1.02]"
                  : "border border-white/15 text-white/55 hover:border-white/35 hover:text-white hover:bg-white/[0.03] hover:scale-[1.02]"
              }`}
            >
              {link.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
