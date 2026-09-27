"use client";

import Image from "next/image";
import { IMAGES } from "@/data/images";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function LeadershipTeam() {
  return (
    <section className="bg-[#FCFBF8] py-20 md:py-28">
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
          className="mb-14 border-b border-[#D7D0C5] pb-8"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-[#9A8060]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              Leadership & Founder
            </span>
          </div>

          <h2 className="font-serif text-3xl text-[#242321] sm:text-4xl md:text-5xl">
            Meet Our Founder
          </h2>
        </motion.div>

        {/* Founder Card / Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 lg:grid-cols-12 lg:items-center"
        >
          {/* Left Column — Founder Visual & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#D7D0C5] bg-[#E8E1D7] shadow-xl">
              <Image
                src={IMAGES.founder}
                alt="Mr. Sunny Sharma - Founder of DesignMeInteriors"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CAA05C]">
                  Established 2021
                </span>
                <h3 className="font-serif text-2xl font-normal text-white">
                  Mr. Sunny Sharma
                </h3>
                <p className="text-xs text-[#D7D0C5]">
                  Founder & Interior Design Consultant
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 -right-4 rounded-2xl border border-[#D7D0C5] bg-[#FCFBF8] p-5 shadow-xl hidden sm:block">
              <span className="block font-serif text-3xl text-[#242321]">
                6+ Years
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[#706B63]">
                Senior Interior Expertise
              </span>
            </div>
          </div>

          {/* Right Column — Founder Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block rounded-full bg-[#9A8060]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#9A8060]">
                Our Origin Story
              </span>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-[#242321] sm:text-3xl">
                &ldquo;Interior design isn&apos;t just about decorating a space; it&apos;s about giving life to it.&rdquo;
              </h3>
            </div>

            <div className="space-y-4 text-sm font-light leading-relaxed text-[#706B63] sm:text-base">
              <p>
                DesignMeInteriors was founded in 2021 by Mr. Sunny Sharma, whose connection with the world of interiors began long before he established the firm.
              </p>
              <p>
                Growing up around his father&apos;s furniture contracting work, Sunny was exposed to furniture, materials, construction, and the process of transforming ideas into physical spaces from an early age.
              </p>
              <p>
                In BCCA, he pursued a Diploma in Interior Designing and went on to work as a Senior Interior Consultant for over 4 years. This experience helped him understand that successful interior design is about much more than aesthetics—it requires understanding the client, planning intelligently, managing budgets, and executing every detail with precision.
              </p>
              <p className="font-normal text-[#242321]">
                This belief became the foundation of DesignMeInteriors: creating spaces that balance beauty, personal lifestyle, and lasting structural quality.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D7D0C5] flex items-center justify-between">
              <div>
                <span className="font-serif text-lg text-[#242321]">Mr. Sunny Sharma</span>
                <span className="block text-xs text-[#706B63]">Founder & Interior Design Consultant</span>
              </div>
              <Quote className="h-8 w-8 text-[#9A8060]/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}