"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Ruler,
  Palette,
  ShieldCheck,
} from "lucide-react";

const PHILOSOPHY = [
  {
    number: "01",
    title: "Designed Around You",
    shortTitle: "Personal",
    description:
      "Every project begins with your lifestyle, preferences, needs, and budget.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Function Before Decoration",
    shortTitle: "Functional",
    description:
      "Beautiful spaces should also work beautifully. Every layout is planned for everyday functionality.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Thoughtful Design",
    shortTitle: "Thoughtful",
    description:
      "Materials, colours, lighting, furniture, and detailing come together to create a cohesive interior.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Quality That Lasts",
    shortTitle: "Enduring",
    description:
      "Quality materials, reliable workmanship, and precise execution create spaces built to last.",
    icon: ShieldCheck,
  },
];

export function GuidingPrinciples() {
  return (
    <section className="relative overflow-hidden bg-[#F3EEE7]">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full border border-[#D9CCBC]/40" />
      <div className="pointer-events-none absolute -right-16 top-24 h-[260px] w-[260px] rounded-full border border-[#D9CCBC]/30" />

      <div
        className="
          relative mx-auto flex max-w-[1600px] flex-col
          px-6 py-8
          sm:px-8 sm:py-10
          md:px-12 md:py-12
          lg:px-16 lg:py-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            grid gap-4
            border-b border-[#D5CEC3]
            pb-5
            md:grid-cols-[1.1fr_0.9fr]
            md:items-end
            md:pb-5
          "
        >
          {/* Heading */}
          <div>
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9A8060]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#8B6F4E]">
                The way we design
              </span>
            </div>

            <h2
              className="
                font-serif
                text-[32px]
                leading-[0.98]
                tracking-[-0.035em]
                text-[#201E1B]
                sm:text-[38px]
                md:text-[44px]
                lg:text-[48px]
              "
            >
              Our Design{" "}
              <span className="italic text-[#8B6F4E]">
                Philosophy
              </span>
            </h2>
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLES GRID
        ===================================================== */}
        <div className="my-4 md:my-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {PHILOSOPHY.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className={`
                    group relative
                    overflow-hidden
                    border-[#D5CEC3]
                    ${
                      index === 0
                        ? "border-b md:border-r"
                        : index === 1
                          ? "border-b"
                          : index === 2
                            ? "border-b md:border-b-0 md:border-r"
                            : ""
                    }
                  `}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#E9E0D4] transition-transform duration-500 group-hover:scale-y-100" />

                  <div
                    className="
                      relative flex h-full
                      flex-col
                      p-4
                      sm:p-5
                      md:p-6
                      lg:p-7
                    "
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <span
                        className="
                          font-serif
                          text-[44px]
                          leading-[0.85]
                          tracking-[-0.05em]
                          text-[#C7B7A3]
                          transition-colors
                          duration-500
                          group-hover:text-[#9A8060]
                          md:text-[50px]
                          lg:text-[54px]
                        "
                      >
                        {item.number}
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#CDBEAB] bg-[#F8F4EE] text-[#806344] transition-all duration-500 group-hover:rotate-6 group-hover:border-[#9A8060]">
                        <Icon
                          className="h-3.5 w-3.5"
                          strokeWidth={1.4}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mt-3.5 flex items-center justify-between gap-3">
                      <h3
                        className="
                          font-serif
                          text-[19px]
                          leading-[1.08]
                          tracking-[-0.02em]
                          text-[#242321]
                          md:text-[21px]
                          lg:text-[22px]
                        "
                      >
                        {item.title}
                      </h3>

                      <span className="shrink-0 text-[8px] font-medium uppercase tracking-[0.22em] text-[#9A8060]">
                        {item.shortTitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-2 max-w-[500px] text-[11px] font-light leading-[1.55] text-[#6F6961] md:text-[12px]">
                      {item.description}
                    </p>

                    {/* Bottom */}
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <span className="h-px w-5 bg-[#9A8060] transition-all duration-500 group-hover:w-8" />

                        <span className="text-[7px] uppercase tracking-[0.22em] text-[#8A8177]">
                          Design principle
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            flex
            flex-col
            gap-3
            border-t border-[#D5CEC3]
            pt-5
            md:flex-row
            md:items-center
            md:justify-between
            md:pt-5
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#9A8060]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#8B6F4E]">
              Our belief
            </span>
          </div>

          <p
            className="
              max-w-[700px]
              font-serif
              text-[16px]
              leading-tight
              tracking-[-0.015em]
              text-[#242321]
              sm:text-[18px]
              md:text-[20px]
            "
          >
            A thoughtfully designed space should not only look beautiful.
            <span className="italic text-[#8B6F4E]">
              {" "}
              It should feel like home.
            </span>
          </p>

          <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#CDBEAB] md:flex">
            <span className="font-serif text-[11px] text-[#806344]">
              DMI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}