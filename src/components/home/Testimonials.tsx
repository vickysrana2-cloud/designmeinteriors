"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/data/images";

export function Testimonials() {
  return (
    <section className="bg-[#1E1C1A] text-white py-24 border-t border-[#322F2C]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-16">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86D51]">
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl">
            Reflections on spatial transformation.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between border border-[#322F2C] bg-[#141312] p-8 shadow-sm space-y-6"
            >
              <p className="font-serif text-base italic leading-relaxed text-gray-300">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-[#262422] pt-4 mt-auto">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#322F2C]">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">{t.author}</h4>
                  <p className="text-xs text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
