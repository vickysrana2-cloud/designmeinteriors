"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Layers, ShieldCheck } from "lucide-react";
import { IMAGES } from "@/data/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutPreview() {
  return (
    <section className="relative bg-[#F5F2EC] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Stack */}
          <div className="relative lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#D7D0C5] shadow-lg sm:h-[520px]"
            >
              <Image
                src={IMAGES.aboutMain}
                alt="DesignMeInteriors Architecture Studio"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Overlapping secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="absolute -bottom-8 -right-4 hidden h-48 w-48 overflow-hidden rounded-3xl border-4 border-[#F5F2EC] shadow-xl sm:block md:-right-8 md:h-64 md:w-64"
            >
              <Image
                src={IMAGES.aboutStudio}
                alt="Studio Detail Craftsmanship"
                fill
                sizes="256px"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-8 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="space-y-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
                Philosophy & Studio
              </span>
              <h2 className="font-serif text-3xl text-[#242321] sm:text-4xl md:text-5xl leading-tight">
                Architectural harmony, tactile materials & purposeful luxury.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="font-sans text-sm leading-relaxed text-[#706B63] md:text-base"
            >
              DesignMeInteriors is an international architectural practice specializing in bespoke luxury residences, biophilic corporate environments, and hospitality spaces. We unite structural precision with natural materials—creating spaces that inspire peace and endure over generations.
            </motion.p>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-[#D7D0C5] pt-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#9A8060]">
                  <Compass className="h-4 w-4" />
                  <span className="font-serif text-sm font-semibold text-[#242321]">Spatial Intent</span>
                </div>
                <p className="text-xs text-[#706B63] leading-normal">Proportion and lighting aligned with human emotion.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#9A8060]">
                  <Layers className="h-4 w-4" />
                  <span className="font-serif text-sm font-semibold text-[#242321]">Authentic Materials</span>
                </div>
                <p className="text-xs text-[#706B63] leading-normal">Travertine, teak, linen, and micro-cement.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#9A8060]">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="font-serif text-sm font-semibold text-[#242321]">Turnkey Precision</span>
                </div>
                <p className="text-xs text-[#706B63] leading-normal">Flawless on-site supervision and white-glove delivery.</p>
              </div>
            </motion.div>

            {/* Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-serif text-sm font-medium uppercase tracking-wider text-[#242321] hover:text-[#9A8060] transition-colors"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
