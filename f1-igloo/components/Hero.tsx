"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(225,6,0,0.20),rgba(225,6,0,0)_60%)]" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
        >
          F1‑grade digital experiences
          <span className="text-brand">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base md:text-lg text-white/70"
        >
          We design and build high‑performance websites and brands for ambitious teams. Speed, precision, and show‑stopping craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mt-8 flex items-center gap-3"
        >
          <a href="#work" className="inline-flex items-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90">
            View work
          </a>
          <a href="#services" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5">
            Our services
          </a>
        </motion.div>
      </div>
    </section>
  );
}