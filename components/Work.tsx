"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    name: "DSC",
    fullName: "DeFi Stablecoin",
    category: "Decentralized Finance",
    image: "/images/project-dsc.jpg",
    stack: ["Solidity", "Foundry", "OpenZeppelin", "Chainlink"],
    description:
      "An algorithmic decentralized stablecoin system built with exogenous collateral. Users deposit crypto collateral (wETH, wBTC) to mint a USD-pegged stablecoin, with liquidation mechanics to maintain the peg.",
    highlights: [
      "Overcollateralization-based minting with health factor enforcement",
      "Chainlink price feed integration for real-time collateral valuation",
      "Liquidation engine that incentivizes third parties to maintain system solvency",
      "Fuzz and invariant testing via Foundry to verify protocol assumptions",
    ],
    security:
      "Checks-effects-interactions pattern throughout. Invariant tests verify total supply never exceeds collateral value. Liquidation thresholds prevent undercollateralization.",
    source: "https://github.com/Shimul-12/DeFi-Stablecoin",
    etherscan: "",
    status: "LIVE",
    featured: true,
  },
  {
    id: "02",
    name: "DAO",
    fullName: "Decentralized Autonomous Organisation",
    category: "On-chain Governance",
    image: "/images/project-dao.jpg",
    stack: ["Solidity", "Governance", "OpenZeppelin", "Web3"],
    description:
      "A fully on-chain governance system where token holders propose, vote on, and execute changes to protocol parameters. Built using OpenZeppelin Governor contracts with timelock execution.",
    highlights: [
      "Proposal lifecycle: create → vote → queue → execute",
      "Timelock controller for delayed execution of approved proposals",
      "Voting power based on token delegation, supporting representative governance",
      "On-chain execution of arbitrary contract calls through governance",
    ],
    security:
      "Timelock delay prevents flash-loan governance attacks. Quorum requirements ensure representative decision-making. Access control on execution paths.",
    source:
      "https://github.com/Shimul-12/Decentralized-Autonomous-Organisation-DAO-",
    etherscan: "",
    status: "LIVE",
    featured: false,
  },
  {
    id: "03",
    name: "LOTTERY",
    fullName: "Smart Contract Lottery",
    category: "Verifiable Randomness",
    image: "/images/project-lottery.jpg",
    stack: ["Solidity", "Chainlink VRF", "Foundry", "Automation"],
    description:
      "A provably fair lottery system using Chainlink VRF for verifiable random number generation and Chainlink Automation for trustless, time-based draws. No human intervention required after deployment.",
    highlights: [
      "Chainlink VRF v2 for cryptographically provable random winner selection",
      "Chainlink Automation (Keepers) for automated, time-based lottery draws",
      "Entrance fee management with configurable parameters",
      "Comprehensive Foundry test suite including fork testing on Sepolia",
    ],
    security:
      "VRF ensures randomness cannot be predicted or manipulated by miners. Automation removes single points of failure in draw execution. Reentrancy guards on withdrawal.",
    source: "https://github.com/Shimul-12/Foundry-Smart-Contract-Lottery",
    etherscan: "",
    status: "LIVE",
    featured: false,
  },
  {
    id: "04",
    name: "PROVORA",
    fullName: "Decentralized Identity Platform",
    category: "Web3 Infrastructure",
    image: "/images/project-provora.jpg",
    stack: ["Web3", "Backend", "Smart Contracts", "TypeScript"],
    description:
      "A decentralized identity and verification platform bridging on-chain identity with real-world credentials. Combines smart contract–based attestation with backend integration for practical identity use cases.",
    highlights: [
      "On-chain identity attestation and verification system",
      "Backend service layer for credential management",
      "Smart contract–based trust scoring and reputation",
      "Full-stack Web3 architecture with frontend, backend, and blockchain layers",
    ],
    security:
      "Identity data stored on-chain for immutability. Access control ensures only authorized attesters can issue credentials. Signature verification for off-chain data.",
    source: "https://github.com/Shimul-12/PROVORA",
    etherscan: "",
    status: "LIVE",
    featured: false,
  },
];

/* ================================================================
   FEATURED PROJECT CARD — larger layout for the first project
================================================================ */
function FeaturedProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden"
    >
      {/* Watermark number */}
      <span
        className="watermark-number"
        style={{ right: "2rem", top: "-1rem" }}
      >
        {project.id}
      </span>

      {/* Glowing left border */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--accent)]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 border border-white/[0.06] bg-[#080808] transition-all duration-500 hover:border-white/[0.12] hover:bg-[#0a0a0a]">
        {/* Hero image — full width */}
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.fullName} architecture diagram`}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent" />

          {/* Floating label on image */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="border border-[var(--accent)]/40 bg-[#020303]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-sm">
              Featured Protocol
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 p-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:p-12">
          {/* Left — text content */}
          <div>
            {/* Header row */}
            <div className="mb-5 flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-4">
                  <span className="font-mono text-[11px] text-white/20">
                    {project.id}
                  </span>
                  <h3 className="font-mono text-[36px] font-bold tracking-wide text-white lg:text-[42px]">
                    {project.name}
                  </h3>
                </div>
                <p className="font-mono text-[14px] text-white/60">
                  {project.fullName}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                  <span className="relative h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-wide text-[var(--accent)]">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Category */}
            <span className="mb-5 inline-block border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
              {project.category}
            </span>

            {/* Description */}
            <p className="mb-6 max-w-[620px] font-mono text-[15px] leading-[1.8] text-white/68">
              {project.description}
            </p>

            {/* Stack tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="shimmer-hover border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 font-mono text-[12px] text-white/65 transition-colors duration-300 hover:border-[var(--accent)]/30 hover:text-white/85"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                className="btn-pop group/link inline-flex items-center gap-4 border border-white/15 px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-white/72 hover:border-[var(--accent)]/50 hover:text-white hover:shadow-[0_0_25px_rgba(184,255,92,0.06)]"
              >
                View Source
                <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">
                  ↗
                </span>
              </a>

              {project.etherscan && (
                <a
                  href={project.etherscan}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pop group/link inline-flex items-center gap-4 border border-white/10 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-white/50 hover:border-white/25 hover:text-white/80"
                >
                  Etherscan
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Right — highlights + security */}
          <div className="flex flex-col gap-6">
            {/* Highlights */}
            <div className="glass-card p-6">
              <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                Highlights
              </h4>
              <div className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 border border-[var(--accent)]/60" />
                    <span className="font-mono text-[13px] leading-[1.7] text-white/62">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security note */}
            <div className="border-l-2 border-[var(--accent)]/25 bg-[var(--accent)]/[0.02] py-4 pl-5 pr-4">
              <span className="mb-2 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]/80">
                  ⛨ Security
                </span>
              </span>
              <p className="font-mono text-[13px] leading-[1.7] text-white/58">
                {project.security}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Corner marks */}
      <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[var(--accent)]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-[var(--accent)]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

/* ================================================================
   STANDARD PROJECT CARD — with image in right column
================================================================ */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden"
    >
      {/* Watermark number */}
      <span
        className="watermark-number"
        style={{
          right: isEven ? "2rem" : "auto",
          left: isEven ? "auto" : "2rem",
          top: "-1rem",
        }}
      >
        {project.id}
      </span>

      {/* Glowing left border */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--accent)]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card content */}
      <div
        className={`relative z-10 grid gap-6 border border-white/[0.06] bg-[#080808] p-8 transition-all duration-500 hover:border-white/[0.12] hover:bg-[#0a0a0a] lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:p-12 ${
          isEven ? "" : "lg:direction-rtl"
        }`}
        style={!isEven ? { direction: "rtl" } : {}}
      >
        {/* Left / Content side */}
        <div style={{ direction: "ltr" }}>
          {/* Header row */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-4">
                <span className="font-mono text-[11px] text-white/20">
                  {project.id}
                </span>
                <h3 className="font-mono text-[32px] font-bold tracking-wide text-white">
                  {project.name}
                </h3>
              </div>
              <p className="font-mono text-[14px] text-white/60">
                {project.fullName}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                <span className="relative h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-wide text-[var(--accent)]">
                {project.status}
              </span>
            </div>
          </div>

          {/* Category */}
          <span className="mb-5 inline-block border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            {project.category}
          </span>

          {/* Description */}
          <p className="mb-6 max-w-[620px] font-mono text-[15px] leading-[1.8] text-white/68">
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="shimmer-hover border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 font-mono text-[12px] text-white/65 transition-colors duration-300 hover:border-[var(--accent)]/30 hover:text-white/85"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className="btn-pop group/link inline-flex items-center gap-4 border border-white/15 px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-white/72 hover:border-[var(--accent)]/50 hover:text-white hover:shadow-[0_0_25px_rgba(184,255,92,0.06)]"
            >
              View Source
              <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">
                ↗
              </span>
            </a>

            {project.etherscan && (
              <a
                href={project.etherscan}
                target="_blank"
                rel="noreferrer"
                className="btn-pop group/link inline-flex items-center gap-4 border border-white/10 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-white/50 hover:border-white/25 hover:text-white/80"
              >
                Etherscan
                <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Right / Details side */}
        <div className="flex flex-col gap-6" style={{ direction: "ltr" }}>
          {/* Architecture diagram */}
          <div className="relative aspect-[16/9] overflow-hidden border border-white/[0.06]">
            <Image
              src={project.image}
              alt={`${project.fullName} architecture diagram`}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
            {/* Corner label */}
            <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/25">
              Architecture
            </span>
          </div>

          {/* Highlights */}
          <div className="glass-card p-6">
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Highlights
            </h4>
            <div className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 border border-[var(--accent)]/60" />
                  <span className="font-mono text-[13px] leading-[1.7] text-white/62">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Security note */}
          <div className="border-l-2 border-[var(--accent)]/25 bg-[var(--accent)]/[0.02] py-4 pl-5 pr-4">
            <span className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]/80">
                ⛨ Security
              </span>
            </span>
            <p className="font-mono text-[13px] leading-[1.7] text-white/58">
              {project.security}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom corner marks */}
      <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[var(--accent)]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-[var(--accent)]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

export default function Work() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="relative bg-[#020303] px-6 py-32 lg:px-[8vw]"
    >
      {/* Blueprint grid background */}
      <div className="blueprint-grid" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="mb-4 flex items-center gap-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Selected Work
            </span>
            <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-[var(--accent)]/40 to-transparent" />
          </div>

          <h2 className="font-mono text-[clamp(2.4rem,3.5vw,3.8rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white">
            Protocols{" "}
            <span className="text-white/30">I&apos;ve Built</span>
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="mt-5 max-w-[580px] font-mono text-[15px] leading-7 text-white/58">
            Each project represents a real system — designed, built, tested,
            and open-sourced. Not mockups. Not tutorials. Working contracts.
          </p>
        </motion.div>

        {/* Featured project */}
        {featuredProject && (
          <div className="mb-6">
            <FeaturedProjectCard project={featuredProject} />
          </div>
        )}

        {/* Other project cards — staggered with spacing */}
        <div className="space-y-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
