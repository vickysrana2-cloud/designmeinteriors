"use client";

import { motion } from "framer-motion";


const PRINCIPLES = [
  {
    number: "01",
    title: "Honesty of Materials",
    description: "We honor the natural qualities of raw stone, patinated bronze, and unvarnished timber, allowing textures to mature gracefully over decades.",
  },
  {
    number: "02",
    title: "Sculpting with Light",
    description: "Natural light is treated as a core building element. We study sun trajectories to create subtle shadow plays throughout every hour of the day.",
  },
  {
    number: "03",
    title: "Emotional Proportion",
    description: "Spatial volumes are calibrated not just for efficiency, but to invoke a visceral sense of calm, sanctuary, and expansive quiet.",
  },
  {
    number: "04",
    title: "Uncompromising Precision",
    description: "From invisible door hinges to perfectly aligned shadow gaps, our shop drawings leave zero room for ambiguity or compromise.",
  },
];

export function GuidingPrinciples() {
  return (
    <section className="border-b border-[#D7D0C5] bg-[#E8E1D7] py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-8 border-b border-[#D7D0C5] pb-12 md:grid-cols-[0.8fr_1.2fr] md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9A8060]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
                Foundation
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#242321] sm:text-4xl md:text-5xl">
              The principles behind every space we create.
            </h2>
          </div>

          <p className="max-w-xl text-sm font-light leading-relaxed text-[#706B63] md:ml-auto">
            Our work begins with a clear understanding of people, place and
            purpose. These principles guide every decision from the first
            sketch to the final detail.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          {PRINCIPLES.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="group relative border-b border-[#D7D0C5] py-10 md:py-12"
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#9A8060] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <div className="flex items-start justify-between">
                <motion.span
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-5xl leading-none text-[#9A8060] sm:text-6xl"
                >
                  {item.number}
                </motion.span>

                <span className="pt-2 text-[9px] uppercase tracking-[0.25em] text-[#706B63]">
                  Principle
                </span>
              </div>

              {/* Content */}
              <div className="mt-8 grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
                <h3 className="font-serif text-2xl leading-tight text-[#242321] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-md text-sm font-light leading-7 text-[#706B63]">
                  {item.description}
                </p>
              </div>

              {/* Bottom label */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-6 bg-[#9A8060] transition-all duration-500 group-hover:w-10" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#706B63]">
                  DesignMeInteriors Studio
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="pt-14 text-center"
        >
          <p className="mx-auto max-w-2xl font-serif text-xl italic leading-relaxed text-[#242321] sm:text-2xl">
            Thoughtful spaces are not simply seen.
            <br className="hidden sm:block" />
            They are experienced.
          </p>
        </motion.div>

      </div>
    </section>
  );
}