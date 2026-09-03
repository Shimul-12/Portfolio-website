"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Shimul-12",
    external: true,
    action: "link",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/0xShimul",
    external: true,
    action: "link",
  },
  {
    label: "Copy Email",
    href: "mailto:ShimulSharma12345@gmail.com",
    external: false,
    action: "copy",
  },
];

const EMAIL = "ShimulSharma12345@gmail.com";

const opportunities = [
  "Blockchain engineering",
  "Smart contracts",
  "Web3 infrastructure",
  "Security research",
  "Protocol development",
];

/* Fixed values, not Math.random() — these are rendered during SSR, so random
   input would produce different markup on the server and the client and trip a
   hydration mismatch. The spread below is hand-picked to look scattered. */
const particles = [
  { id: 0, x: "9%", duration: "13s", delay: "0s" },
  { id: 1, x: "17%", duration: "19s", delay: "4.5s" },
  { id: 2, x: "24%", duration: "11s", delay: "8s" },
  { id: 3, x: "33%", duration: "22s", delay: "1.5s" },
  { id: 4, x: "41%", duration: "15s", delay: "6s" },
  { id: 5, x: "48%", duration: "24s", delay: "10.5s" },
  { id: 6, x: "56%", duration: "12s", delay: "2.5s" },
  { id: 7, x: "63%", duration: "20s", delay: "7.5s" },
  { id: 8, x: "71%", duration: "17s", delay: "3s" },
  { id: 9, x: "78%", duration: "23s", delay: "9s" },
  { id: 10, x: "86%", duration: "14s", delay: "5s" },
  { id: 11, x: "92%", duration: "21s", delay: "11.5s" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [showToast, setShowToast] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    });
  }, []);

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
          {contactLinks.map((link, index) => {
            const isCopy = link.action === "copy";

            if (isCopy) {
              return (
                <motion.button
                  key={link.label}
                  type="button"
                  onClick={copyEmail}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.25 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="btn-pop group flex items-center gap-6 border border-white/15 px-10 py-5 font-mono text-[13px] uppercase tracking-[0.12em] text-white/55 hover:border-white/35 hover:text-white hover:bg-white/[0.03] cursor-pointer"
                >
                  {link.label}
                  <span className="text-[14px] transition-transform duration-300 group-hover:scale-110">
                    ⎘
                  </span>
                </motion.button>
              );
            }

            return (
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
                className={`btn-pop group flex items-center gap-6 px-10 py-5 font-mono text-[13px] uppercase tracking-[0.12em] ${
                  index === 0
                    ? "bg-[var(--accent)] !text-black !font-bold hover:shadow-[0_0_50px_rgba(184,255,92,0.2)]"
                    : "border border-white/15 text-white/55 hover:border-white/35 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {link.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  ↗
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 left-1/2 z-[200] -translate-x-1/2"
          >
            <div className="glass-card flex items-center gap-3 border-[var(--accent)]/30 px-6 py-3.5 shadow-[0_0_30px_rgba(184,255,92,0.08)]">
              <span className="text-[var(--accent)]">✓</span>
              <span className="font-mono text-[12px] tracking-[0.06em] text-white/70">
                Email copied to clipboard
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
