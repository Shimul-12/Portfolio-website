"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(now);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#020303] px-6 py-5 lg:px-[8vw]">
      {/* Animated gradient border */}
      <div className="animated-border-top absolute left-0 right-0 top-0" />

      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Location — status bar style */}
        <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
          <span className="text-[var(--accent)]/50">LOC:</span>
          <span>Delhi, India</span>
          <span className="text-white/10">|</span>
          <span className="text-[var(--accent)]/50">TZ:</span>
          <span>UTC+05:30</span>
          {time && (
            <>
              <span className="text-white/10">|</span>
              <span className="tabular-nums text-white/20">{time}</span>
            </>
          )}
        </span>

        <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-white/20 sm:flex sm:items-center sm:gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]/40" />
          Building / Auditing / Learning
        </span>

        <span className="font-mono text-[10px] text-white/20">
          © 2026 Shimul Sharma
        </span>
      </div>
    </footer>
  );
}
