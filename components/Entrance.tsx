"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export default function Entrance({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  // 0 = mounting
  // 1 = "INITIALIZING SHIMUL.EXE" appears
  // 2 = progress bar fills
  // 3 = role text appears
  // 4 = exit

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const startExit = useCallback(() => {
    setPhase(4);
    setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 600);
  }, [onComplete]);

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase(1), 150);   // show title
    const t2 = setTimeout(() => setPhase(2), 500);   // start progress bar
    const t3 = setTimeout(() => setPhase(3), 2000);  // show role
    const t4 = setTimeout(() => startExit(), 2800);  // exit

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [startExit]);

  // Progress bar animation
  useEffect(() => {
    if (phase < 2) return;
    if (phase >= 4) {
      setProgress(100);
      return;
    }

    let frame: number;
    const start = performance.now();
    const duration = 1400; // ms to fill

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

  // Build progress bar visual
  const barWidth = 24;
  const filled = Math.round((progress / 100) * barWidth);
  const empty = barWidth - filled;
  const bar = "█".repeat(filled) + "░".repeat(empty);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="entrance"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          animate={phase === 4 ? { opacity: 0, y: -30 } : { opacity: 1, y: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020303]"
        >
          <div className="w-full max-w-[420px] px-6">
            {/* INITIALIZING SHIMUL.EXE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
              transition={{ duration: 0.15 }}
            >
              <span className="font-mono text-[13px] tracking-[0.15em] text-white/70">
                INITIALIZING SHIMUL.EXE
              </span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 0.1 }}
              className="mt-5"
            >
              <span className="font-mono text-[13px] text-white/50">
                <span className="text-white/25">[</span>
                <span className="text-[var(--accent)]">{bar}</span>
                <span className="text-white/25">]</span>
                <span className="ml-2 tabular-nums text-white/40">
                  {Math.round(progress)}%
                </span>
              </span>
            </motion.div>

            {/* Role text */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-7"
            >
              <p className="font-mono text-[12px] font-medium tracking-[0.18em] text-white/60">
                BLOCKCHAIN ENGINEER
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-white/30">
                WEB3 / SECURITY / INFRASTRUCTURE
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
