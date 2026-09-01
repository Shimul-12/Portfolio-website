"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const modules = [
  "WEB3 ENGINE",
  "SMART CONTRACTS",
  "SECURITY LAYER",
  "PROTOCOL ENGINE",
];

const bootMessages = [
  "Loading network topology...",
  "Loading protocol modules...",
  "Loading security layer...",
];

export default function Entrance({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(-1);

  /*
    0 = mounting
    1 = identity
    2 = booting
    3 = finalizing
    4 = exit
  */

  const startExit = useCallback(() => {
    setPhase(4);
  }, []);

  // --------------------------------------------------
  // TIMELINE — ~3 SECONDS
  // --------------------------------------------------

  useEffect(() => {
    const t1 = window.setTimeout(() => {
      setPhase(1);
    }, 120);

    const t2 = window.setTimeout(() => {
      setPhase(2);
    }, 420);

    const t3 = window.setTimeout(() => {
      setPhase(3);
    }, 2200);

    const t4 = window.setTimeout(() => {
      startExit();
    }, 2450);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
    };
  }, [startExit]);

  // --------------------------------------------------
  // PROGRESS
  // --------------------------------------------------

  useEffect(() => {
    if (phase < 2 || phase >= 4) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1750;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);

      setProgress(pct);

      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [phase]);

  // --------------------------------------------------
  // BOOT MESSAGES
  // --------------------------------------------------

  useEffect(() => {
    if (phase < 2 || phase >= 4) return;

    const timers = bootMessages.map((_, index) =>
      window.setTimeout(() => {
        setMessageIndex(index);
      }, 520 + index * 430),
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [phase]);

  // --------------------------------------------------
  // PROGRESS BAR
  // --------------------------------------------------

  const barWidth = 30;
  const filled = Math.round((progress / 100) * barWidth);
  const empty = Math.max(barWidth - filled, 0);

  const bar =
    "█".repeat(filled) +
    "░".repeat(empty);

  return (
    <motion.div
      initial={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      animate={
        phase === 4
          ? {
              opacity: 0,
              scale: 1.035,
              filter: "blur(3px)",
            }
          : {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      transition={{
        duration: 0.52,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => {
        if (phase === 4) {
          onComplete();
        }
      }}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#020303]"
      role="status"
      aria-label="Initializing portfolio"
    >
      {/* ==================================================
          ATMOSPHERE
      =================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Soft ambient light */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity:
              phase >= 2
                ? [0.025, 0.07, 0.04]
                : 0.025,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[15%] h-[520px] w-[520px] rounded-full bg-[var(--accent)] blur-[150px]"
        />

        {/* Scan line */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={
            phase === 4
              ? {
                  scaleX: 1,
                  opacity: [0, 0.8, 0],
                }
              : {
                  scaleX: 0,
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute left-0 right-0 top-[54%] h-px origin-left bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
        />

        {/* Secondary scan line */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={
            phase === 4
              ? {
                  scaleX: 1,
                  opacity: [0, 0.25, 0],
                }
              : {
                  scaleX: 0,
                  opacity: 0,
                }
          }
          transition={{
            delay: 0.08,
            duration: 0.45,
            ease: "easeOut",
          }}
          className="absolute left-[8%] right-[8%] top-[54%] h-px origin-left bg-white/40"
        />

      </div>

      {/* ==================================================
          MAIN
      =================================================== */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="w-full max-w-[920px]">

          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={
              phase >= 1
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            transition={{
              duration: 0.45,
            }}
            className="mb-8 flex items-end justify-between border-b border-white/10 pb-4"
          >
            <div>

              <p className="font-mono text-[15px] font-medium uppercase tracking-[0.18em] text-white/85">
                SHIMUL / SYSTEM INITIALIZATION
              </p>

              <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.15em] text-white/30">
                Blockchain / Web3 Engineer
              </p>

            </div>

            <span className="font-mono text-[11px] text-white/25">
              001
            </span>
          </motion.div>

          {/* MODULES */}

          <div className="grid gap-3 sm:grid-cols-2">

            {modules.map((module, index) => {

              const ready =
                index < 3 || phase >= 3;

              return (
                <motion.div
                  key={module}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={
                    phase >= 2
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 10,
                        }
                  }
                  transition={{
                    delay: index * 0.07,
                    duration: 0.4,
                  }}
                  className="flex items-center justify-between border border-white/10 bg-white/[0.015] px-5 py-4"
                >
                  <div className="flex items-center gap-3">

                    <span
                      className={`h-2 w-2 rounded-full ${
                        ready
                          ? "bg-[var(--accent)] shadow-[0_0_10px_rgba(184,255,92,0.35)]"
                          : "bg-white/25"
                      }`}
                    />

                    <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-white/65">
                      {module}
                    </span>

                  </div>

                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.12em] ${
                      ready
                        ? "text-[var(--accent)]"
                        : "text-white/30"
                    }`}
                  >
                    {ready ? "READY" : "BOOTING"}
                  </span>
                </motion.div>
              );
            })}

          </div>

          {/* BOOT LOG */}

          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={
              phase >= 2
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 8,
                  }
            }
            transition={{
              duration: 0.4,
            }}
            className="mt-7 border border-white/10 bg-black/25 p-5"
          >

            <div className="mb-4 flex items-center justify-between">

              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
                Boot sequence
              </span>

              <span className="font-mono text-[11px] text-white/20">
                SYS
              </span>

            </div>

            <div className="space-y-2">

              {bootMessages.map((message, index) => {

                const visible = index <= messageIndex;
                const completed = index < messageIndex;

                return (
                  <motion.div
                    key={message}
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={
                      visible
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {
                            opacity: 0,
                            x: -8,
                          }
                    }
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex items-center gap-3 font-mono text-[12px]"
                  >

                    <span className="text-[var(--accent)]">
                      &gt;
                    </span>

                    <span className="text-white/50">
                      {message}
                    </span>

                    {completed && (
                      <span className="text-[var(--accent)]">
                        OK
                      </span>
                    )}

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

          {/* PROGRESS */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={
              phase >= 2
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.3,
            }}
            className="mt-7"
          >

            <div className="flex items-center justify-between">

              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/30">
                System initialization
              </span>

              <span className="font-mono text-[12px] tabular-nums text-white/50">
                {Math.round(progress)}%
              </span>

            </div>

            <div className="mt-3 overflow-hidden border border-white/10 p-1">

              <div className="font-mono text-[14px] leading-none tracking-[0.12em] text-[var(--accent)]">
                {bar}
              </div>

            </div>

          </motion.div>

          {/* FINAL STATE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={
              phase >= 3
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 8,
                  }
            }
            transition={{
              duration: 0.4,
            }}
            className="mt-6 flex items-end justify-between"
          >

            <div>

              <p className="font-mono text-[13px] uppercase tracking-[0.15em] text-white/70">
                Protocol layer ready
              </p>

              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/30">
                Web3 / Security / Infrastructure
              </p>

            </div>

            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--accent)]">
              ONLINE
            </span>

          </motion.div>

          {/* SKIP */}

          <motion.button
            type="button"
            initial={{
              opacity: 0,
            }}
            animate={
              phase >= 1
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  }
            }
            transition={{
              delay: 0.3,
              duration: 0.3,
            }}
            onClick={onComplete}
            className="mt-7 font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white focus:outline-none focus-visible:text-white"
          >
            Skip intro
          </motion.button>

        </div>
      </div>

      {/* CORNER METADATA */}

      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">

        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
          SHIMUL.SYSTEM
        </span>

        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
          PROTOCOL LAYER
        </span>

        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
          2026
        </span>

      </div>

    </motion.div>
  );
}