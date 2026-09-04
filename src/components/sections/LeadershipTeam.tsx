"use client";

import Image from "next/image";
import { IMAGES } from "@/data/images";
import { motion } from "framer-motion";

const TEAM = [
  {
    name: "Aarav Sharma",
    role: "Founder & Principal Architect",
    bio: "Over 18 years shaping luxury residences and cultural pavilions across North America and Europe.",
    image: IMAGES.founder,
  },
  {
    name: "Elena Rostova",
    role: "Director of Interior Architecture",
    bio: "Specialist in bespoke joinery, rare stone sourcing, and sensory interior lighting environments.",
    image: IMAGES.aboutStudio,
  },
];

export function LeadershipTeam() {
  return (
    <section className="border-b border-[#D7D0C5] py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-end"
        >
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              Leadership
            </span>

            <h2 className="font-serif text-3xl text-[#242321] sm:text-4xl">
              The Minds Behind DesignMeInteriors
            </h2>
          </div>
        </motion.div>

        {/* Team */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                w-full
                max-w-[430px]
                overflow-hidden
                rounded-3xl
                border
                border-[#D7D0C5]
                bg-[#FCFBF8]
                transition-shadow
                duration-500
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative m-3 mb-0 h-72 overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 430px"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.04]
                  "
                />

                {/* Subtle image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/5
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Content */}
              <div className="relative space-y-2 p-6">
                {/* Small animated accent */}
                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-[#9A8060]
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-full
                  "
                />

                <h3 className="font-serif text-lg text-[#242321] transition-colors duration-300 group-hover:text-[#9A8060]">
                  {member.name}
                </h3>

                <span className="block text-xs font-medium uppercase tracking-wider text-[#9A8060]">
                  {member.role}
                </span>

                <p className="pt-2 text-xs leading-relaxed text-[#706B63]">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}