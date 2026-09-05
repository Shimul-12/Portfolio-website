"use client";

import { useCallback, useEffect, useState } from "react";
import Contact from "@/components/Contact";
import Entrance from "@/components/Entrance";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Metrics from "@/components/Metrics";
import Navbar from "@/components/Navbar";
import SecurityLab from "@/components/SecurityLab";
import StackAbout from "@/components/StackAbout";
import Work from "@/components/Work";

export default function PortfolioExperience() {
  const [showEntrance, setShowEntrance] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setShowEntrance(false);
    }
  }, []);

  const completeEntrance = useCallback(() => {
    setShowEntrance(false);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020303] text-white">

      {/* Global texture */}
      <div className="noise" />

      {/* =====================================================
          MAIN WEBSITE

          IMPORTANT:
          The portfolio is rendered immediately and remains
          underneath the entrance overlay.
      ====================================================== */}

      <div className="relative z-0">
        <Navbar />

        <Hero />

        <Metrics />

        <Work />

        <SecurityLab />

        <StackAbout />

        <Contact />

        <Footer />
      </div>

      {/* =====================================================
          CINEMATIC INTRO

          This sits ABOVE the website.
          When it fades away, the actual portfolio is already
          underneath it.
      ====================================================== */}

      {showEntrance && (
        <Entrance
          onComplete={completeEntrance}
        />
      )}

    </main>
  );
}