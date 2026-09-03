"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const writeups = [
  {
    id: "001",
    title: "Reentrancy",
    severity: "HIGH",
    category: "Smart Contract Security",
    summary:
      "A reentrancy attack occurs when a contract makes an external call before updating its own state, allowing the callee to re-enter the calling function and drain funds.",
    rootCause:
      "The vulnerability exists when a contract sends ETH or calls an external contract before updating internal accounting. The receiving contract's fallback or receive function can call back into the vulnerable function, repeating the withdrawal before the balance is set to zero.",
    exploit: `// Vulnerable pattern
function withdraw() external {
    uint256 balance = balances[msg.sender];
    (bool success, ) = msg.sender.call{value: balance}("");
    require(success);
    balances[msg.sender] = 0; // Updated AFTER external call
}

// The attacker's receive() function calls withdraw() again
// before balances[msg.sender] is set to 0`,
    mitigation:
      "Apply the Checks-Effects-Interactions pattern: verify conditions, update state, then make external calls. Alternatively, use OpenZeppelin's ReentrancyGuard (nonReentrant modifier). Both approaches ensure state is finalized before any external interaction.",
    lesson:
      "Never trust external calls. The order of operations in Solidity is not just a style preference — it's a security boundary. State changes must always precede external interactions.",
  },
  {
    id: "002",
    title: "Access Control",
    severity: "HIGH",
    category: "Authorization",
    summary:
      "Access control vulnerabilities occur when critical functions lack proper authorization checks, allowing unauthorized users to execute privileged operations like minting tokens, upgrading contracts, or withdrawing funds.",
    rootCause:
      "Missing or incorrectly applied modifiers on sensitive functions. Common patterns include: forgetting onlyOwner on administrative functions, using tx.origin instead of msg.sender for authentication, and failing to implement role-based access for multi-party systems.",
    exploit: `// Vulnerable: no access control
function setPrice(uint256 _newPrice) external {
    price = _newPrice; // Anyone can call this
}

// Vulnerable: tx.origin bypass
function transferOwnership(address _new) external {
    require(tx.origin == owner); // Phishing via intermediary contract
    owner = _new;
}`,
    mitigation:
      "Use msg.sender for authentication, never tx.origin. Implement OpenZeppelin's Ownable or AccessControl for role management. Apply the principle of least privilege — every function should require the minimum necessary authorization level. For critical operations, consider multi-sig or timelock patterns.",
    lesson:
      "Access control is the foundation of contract security. A single missing modifier on a privileged function can lead to total loss of funds. Audit every public and external function for proper authorization.",
  },
  {
    id: "003",
    title: "Oracle Manipulation",
    severity: "HIGH",
    category: "External Dependencies",
    summary:
      "Oracle manipulation attacks exploit a protocol's reliance on external price data. An attacker manipulates the oracle's reported price — through flash loans, market manipulation, or exploiting spot prices — to extract value from the protocol.",
    rootCause:
      "Protocols that rely on a single price source, use spot prices from DEX pools, or fail to validate oracle data freshness. Flash loans allow attackers to temporarily manipulate pool reserves, shifting spot prices dramatically within a single transaction.",
    exploit: `// Vulnerable: using spot price from a DEX pool
function getPrice() public view returns (uint256) {
    // Spot price can be manipulated via flash loan
    (uint112 r0, uint112 r1, ) = pair.getReserves();
    return (r1 * 1e18) / r0;
}

// Attack: flash loan → manipulate reserves → call
// vulnerable function → repay loan → profit`,
    mitigation:
      "Use time-weighted average prices (TWAPs) instead of spot prices. Integrate decentralized oracle networks like Chainlink, which aggregate data from multiple sources. Implement staleness checks on price feed data (check updatedAt timestamp). Set reasonable price deviation bounds to reject outlier values.",
    lesson:
      "Any system that prices assets based on external data inherits the trust assumptions of that data source. Oracle design is protocol design — the choice of price feed mechanism directly determines the protocol's attack surface.",
  },
];

type Writeup = (typeof writeups)[number];

function SeverityBadge({ severity }: { severity: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] ${
        severity === "HIGH"
          ? "bg-red-500/10 text-red-400 border border-red-500/20"
          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full severity-pulse ${
          severity === "HIGH" ? "bg-red-400" : "bg-amber-400"
        }`}
      />
      {severity}
    </span>
  );
}

/* Simple syntax highlighting for Solidity-like code */
function HighlightedCode({ code }: { code: string }) {
  const highlighted = code
    .split("\n")
    .map((line, i) => {
      const processed = line;

      // Comments — green
      if (processed.trimStart().startsWith("//")) {
        return (
          <span key={i} className="block">
            <span className="text-emerald-500/60">{processed}</span>
          </span>
        );
      }

      // Keywords
      const keywords =
        /\b(function|external|public|view|returns|uint256|address|bool|require|return)\b/g;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      while ((match = keywords.exec(processed)) !== null) {
        if (match.index > lastIndex) {
          parts.push(processed.slice(lastIndex, match.index));
        }
        parts.push(
          <span key={`${i}-${match.index}`} className="text-purple-400/80">
            {match[0]}
          </span>
        );
        lastIndex = keywords.lastIndex;
      }
      if (lastIndex < processed.length) {
        parts.push(processed.slice(lastIndex));
      }

      return (
        <span key={i} className="block">
          {parts.length > 0 ? parts : processed}
        </span>
      );
    });

  return <>{highlighted}</>;
}

function WriteupCard({
  writeup,
  index,
}: {
  writeup: Writeup;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative border border-white/[0.07] bg-[#060808] transition-all duration-400 hover:border-red-500/15"
    >
      {/* Subtle red glow on left */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left lg:p-8"
      >
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] text-red-400/40">
              CVE-{writeup.id}
            </span>
            <h3 className="font-mono text-[24px] font-semibold tracking-wide text-white">
              {writeup.title}
            </h3>
            <SeverityBadge severity={writeup.severity} />
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/25">
            {writeup.category}
          </p>

          <p className="mt-4 max-w-[650px] font-mono text-[13px] leading-[1.7] text-white/45">
            {writeup.summary}
          </p>
        </div>

        <span
          className={`ml-4 mt-1 flex h-8 w-8 items-center justify-center border font-mono text-[14px] transition-all duration-300 ${
            expanded
              ? "rotate-45 border-red-500/40 text-red-400"
              : "border-white/15 text-white/30"
          }`}
        >
          +
        </span>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* Scan line reveal effect */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
              style={{ transformOrigin: "left" }}
            />

            <div className="px-6 pb-8 pt-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Root Cause */}
                <div className="glass-card p-5">
                  <h4 className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-red-400/80">
                    <span>⚠</span> Root Cause
                  </h4>
                  <p className="font-mono text-[13px] leading-[1.7] text-white/45">
                    {writeup.rootCause}
                  </p>
                </div>

                {/* Mitigation */}
                <div className="glass-card p-5">
                  <h4 className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]/80">
                    <span>✓</span> Mitigation
                  </h4>
                  <p className="font-mono text-[13px] leading-[1.7] text-white/45">
                    {writeup.mitigation}
                  </p>
                </div>
              </div>

              {/* Code example — terminal style */}
              <div className="mt-8 overflow-hidden border border-white/[0.06] bg-[#0a0c0c]">
                {/* Terminal header */}
                <div className="terminal-header">
                  <span
                    className="terminal-dot"
                    style={{ background: "#ff5f57" }}
                  />
                  <span
                    className="terminal-dot"
                    style={{ background: "#febc2e" }}
                  />
                  <span
                    className="terminal-dot"
                    style={{ background: "#28c840" }}
                  />
                  <span className="ml-3 font-mono text-[10px] text-white/25">
                    exploit_pattern.sol
                  </span>
                </div>
                <pre className="overflow-x-auto p-5">
                  <code className="font-mono text-[12px] leading-[1.8] text-white/55">
                    <HighlightedCode code={writeup.exploit} />
                  </code>
                </pre>
              </div>

              {/* Lesson */}
              <div className="mt-8 border-l-2 border-red-500/20 bg-red-500/[0.02] py-4 pl-5 pr-4">
                <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-red-400/60">
                  ◆ Lesson Learned
                </h4>
                <p className="font-mono text-[13px] italic leading-[1.7] text-white/45">
                  {writeup.lesson}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SecurityLab() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[#020303] px-6 py-32 lg:px-[8vw]"
    >
      {/* Scanline overlay */}
      <div className="scanline-overlay" />
      <div className="scanline-sweep" />

      {/* Subtle red ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 60, 60, 0.04) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-red-400/80">
              <span className="cursor-blink mr-1.5">▸</span>
              Security Lab
            </span>
            <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-red-500/30 to-transparent" />
          </div>

          <h2 className="font-mono text-[clamp(2.4rem,3.5vw,3.8rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white">
            Breaking{" "}
            <span className="text-white/30">Assumptions</span>
            <span className="text-red-400">.</span>
          </h2>

          <p className="mt-5 max-w-[600px] font-mono text-[14px] leading-7 text-white/40">
            Understanding how smart contracts fail is as important as
            knowing how to build them. Attack analysis, vulnerability
            patterns, and the security thinking behind every protocol.
          </p>
        </motion.div>

        {/* Writeup cards */}
        <div className="space-y-4">
          {writeups.map((writeup, index) => (
            <WriteupCard
              key={writeup.id}
              writeup={writeup}
              index={index}
            />
          ))}
        </div>

        {/* Link to full security portfolio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Shimul-12/Security-Portfolio"
            target="_blank"
            rel="noreferrer"
            className="btn-pop group inline-flex items-center gap-3 border border-red-500/20 bg-red-500/[0.03] px-8 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50 hover:border-red-500/40 hover:text-white hover:shadow-[0_0_30px_rgba(255,60,60,0.06)]"
          >
            View Full Security Portfolio
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
