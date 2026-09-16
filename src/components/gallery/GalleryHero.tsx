"use client";

import { motion } from "framer-motion";

export function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[#191816] pt-32 pb-16 md:pt-40 md:pb-24 text-[#FCFBF8] border-b border-[#322F2C]">
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#191816]" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#9A8060]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-4"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-black/40 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.05em] text-[#FF6B00] backdrop-blur-md shadow-[0_0_15px_rgba(255,107,0,0.15)]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#FF6B00] animate-pulse" />
            OUR WORK
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FCFBF8] leading-[1.08]">
            Spaces Designed to <span className="italic text-[#D7D0C5]">Inspire</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#D7D0C5] leading-relaxed max-w-2xl pt-2">
            Explore our residential, commercial, and custom interior projects across Nagpur, designed with quality, purpose, and uncompromised attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
