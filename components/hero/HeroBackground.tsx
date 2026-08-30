"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import heroEarth from "@/public/images/hero-earth.png";

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  const imageX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const imageY = useTransform(smoothY, [-1, 1], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      mouseX.set(x * 2 - 1);
      mouseY.set(y * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Cinematic Earth */}
      <motion.div
        style={{
          x: imageX,
          y: imageY,
        }}
        className="absolute -inset-12"
      >
        <Image
          src={heroEarth}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-right"
        />
      </motion.div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Heavy left-side fade for typography */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #020303 0%, rgba(2,3,3,0.97) 18%, rgba(2,3,3,0.82) 38%, rgba(2,3,3,0.25) 68%, rgba(2,3,3,0.12) 100%)",
        }}
      />

      {/* Top fade */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-56"
        style={{
          background:
            "linear-gradient(to top, #020303 0%, rgba(2,3,3,0.7) 35%, transparent 100%)",
        }}
      />

      {/* Technical grid */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Fine vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 55%, transparent 20%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Tiny atmospheric glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.2, 0.12],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[25%] top-[35%] h-72 w-72 rounded-full bg-emerald-300/5 blur-[100px]"
      />
    </div>
  );
}