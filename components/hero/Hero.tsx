"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import NetworkOverlay from "./NetworkOverlay";
import SystemPanel from "./SystemPanel";

const systems = [
  {
    id: "01",
    name: "DSC",
    description: "Decentralized Stablecoin",
    stack: "Solidity · Foundry · Smart Contracts",
    status: "LIVE",
  },
  {
    id: "02",
    name: "DAO",
    description: "On-chain Governance",
    stack: "Solidity · Governance · Web3",
    status: "LIVE",
  },
  {
    id: "03",
    name: "LOTTERY",
    description: "Chainlink VRF",
    stack: "Solidity · Chainlink · Foundry",
    status: "LIVE",
  },
  {
    id: "04",
    name: "PROVORA",
    description: "Decentralized Identity",
    stack: "Web3 · Backend · Smart Contracts",
    status: "LIVE",
  },
  {
    id: "05",
    name: "SECURITY LAB",
    description: "Audit / Research / Writeups",
    stack: "Solidity · Fuzzing · Security",
    status: "ACTIVE",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020303] text-white">

      {/* BACKGROUND */}
      <HeroBackground />
      <NetworkOverlay />

      {/* RIGHT SYSTEM PANEL */}
      <SystemPanel />

      {/* LEFT NAVIGATION RAIL */}
      <aside className="absolute bottom-[145px] left-6 top-[105px] z-30 hidden w-10 flex-col items-center lg:flex">

        <div className="flex h-10 w-10 items-center justify-center border border-[var(--accent)]/70">
          <div className="h-2.5 w-2.5 rotate-45 border border-[var(--accent)]" />
        </div>

        <span className="mt-5 font-mono text-[12px] font-medium text-[var(--accent)]">
          01
        </span>

        <span className="my-3 h-px w-5 bg-white/20" />

        <span className="font-mono text-[12px] text-white/30">
          07
        </span>

        <div className="mt-10 flex flex-1 flex-col items-center">

          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(184,255,92,0.55)]" />

          <div className="my-3 w-px flex-1 bg-gradient-to-b from-[var(--accent)]/60 via-white/10 to-transparent" />

          <span
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>

          <span className="mt-3 text-xl text-[var(--accent)]">
            ↓
          </span>

        </div>
      </aside>

      {/* HERO */}
      <main className="relative z-20 flex min-h-screen items-center px-8 pb-[230px] pt-[115px] lg:px-[11.5vw]">

        <div className="w-full max-w-[780px]">

          {/* AVAILABILITY */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            </span>

            <span className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              Open to opportunities
            </span>
          </motion.div>

          {/* NAME */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            className="mb-8"
          >
            <h2 className="font-mono text-[clamp(2.9rem,3.6vw,4.4rem)] font-medium uppercase leading-none tracking-[-0.045em]">
              <span className="text-white">Shimul</span>{" "}
              <span className="text-white/35">Sharma</span>
              <span className="text-[var(--accent)]">.</span>
            </h2>

            <p className="mt-3 font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-white/40">
              Blockchain / Web3 Engineer
            </p>
          </motion.div>

          {/* MAIN STATEMENT */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[780px] text-[clamp(4rem,5.4vw,6.4rem)] font-semibold uppercase leading-[0.91] tracking-[-0.06em]"
          >
            <span className="block text-white">
              Building Protocols
              <span className="text-[var(--accent)]">.</span>
            </span>

            <span className="mt-1 block text-white/45">
              Breaking Assumptions
              <span className="text-[var(--accent)]">.</span>
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.42,
              duration: 0.7,
            }}
            className="mt-8 max-w-[610px] font-mono text-[15px] leading-7 text-white/55"
          >
            Smart contracts, DeFi protocols, Web3 infrastructure and
            security research — building systems that are reliable,
            scalable and secure.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.58,
              duration: 0.7,
            }}
            className="mt-8 flex gap-3"
          >
            <a
              href="#work"
              className="group flex items-center gap-8 bg-[var(--accent)] px-8 py-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(184,255,92,0.2)]"
            >
              Explore Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="https://github.com/Shimul-12"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-7 border border-white/20 px-8 py-4 font-mono text-[12px] uppercase tracking-[0.12em] text-white/70 transition-all duration-300 hover:border-white/50 hover:text-white"
            >
              GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </motion.div>

        </div>
      </main>

      {/* =========================================================
          CURRENT SYSTEMS
      ========================================================== */}

      <section className="absolute bottom-[58px] left-0 right-0 z-30 border-t border-white/[0.12] bg-[#020303]/85 px-6 py-5 backdrop-blur-md lg:px-[2vw]">

        {/* SECTION HEADER */}
        <div className="mb-4 flex items-center gap-5">

          <span className="font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-white/70">
            Current Systems
          </span>

          <span className="h-px w-16 bg-white/20" />

          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">
            05 active systems
          </span>

        </div>

        {/* SYSTEM CARDS */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">

          {systems.map((system, index) => (
            <motion.a
              key={system.name}
              href="#work"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7 + index * 0.08,
                duration: 0.5,
              }}
              className="group relative min-h-[105px] overflow-hidden border border-white/[0.14] bg-black/50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:bg-black/70"
            >

              {/* CARD TOP LINE */}
              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <span className="font-mono text-[10px] text-white/25">
                    {system.id}
                  </span>

                  <span className="font-mono text-[16px] font-semibold tracking-wide text-white">
                    {system.name}
                  </span>

                </div>

                <span className="font-mono text-[10px] font-medium uppercase tracking-wide text-[var(--accent)]">
                  ● {system.status}
                </span>

              </div>

              {/* DESCRIPTION */}
              <p className="font-mono text-[13px] font-medium text-white/65">
                {system.description}
              </p>

              {/* STACK */}
              <p className="mt-2 font-mono text-[11px] leading-4 text-white/35">
                {system.stack}
              </p>

              {/* CORNER MARK */}
              <span className="absolute right-2 top-2 h-2 w-2 border-r border-t border-[var(--accent)]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* BOTTOM ACCENT */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

            </motion.a>
          ))}

        </div>

      </section>

      {/* =========================================================
          BOTTOM STATUS BAR
      ========================================================== */}

      <footer className="absolute bottom-0 left-0 right-0 z-40 flex h-[58px] items-center justify-between border-t border-white/[0.1] bg-[#020303]/95 px-6 backdrop-blur-md lg:px-[2vw]">

        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
          Delhi, India
          <span className="mx-3 text-white/15">|</span>
          UTC +05:30
        </span>

        <span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-white/35 md:block">
          Building / Auditing / Learning
        </span>

        <span className="font-mono text-[11px] text-white/35">
          01 / 07
        </span>

      </footer>

    </section>
  );
}