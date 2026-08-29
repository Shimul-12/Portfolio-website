"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Security", href: "#security" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-40 px-6 py-5 md:px-10"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.2em]"
        >
          SHIMUL<span className="text-white/30">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/Shimul-12"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-xs uppercase tracking-[0.15em]"
        >
          <span className="text-white/50 transition-colors group-hover:text-white">
            GitHub
          </span>

          <span className="text-white/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </nav>
    </motion.header>
  );
}