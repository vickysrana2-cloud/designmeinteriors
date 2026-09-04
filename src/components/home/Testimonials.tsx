"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/data/images";

export function Testimonials() {
  return (
    <section className="bg-[#191816] text-[#FCFBF8] py-24 border-t border-[#322F2C]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-16">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FCFBF8]">
            Reflections on spatial transformation.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-3xl border border-[#322F2C] bg-[#242321] p-8 space-y-6"
            >
              <p className="font-serif text-base italic leading-relaxed text-[#D7D0C5]">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-[#322F2C] pt-4 mt-auto">
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
                  <h4 className="font-serif text-sm font-semibold text-[#FCFBF8]">{t.author}</h4>
                  <p className="text-xs text-[#706B63]">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
