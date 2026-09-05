"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, ShieldCheck, Lightbulb, HeartHandshake, Clock } from "lucide-react";

export const CORE_VALUES = [
  {
    number: "01",
    title: "Delivering Consistent Quality",
    description:
      "We maintain high standards of quality, professionalism, and ethics across every stage of a project, building relationships based on trust and long-term collaboration.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Foster Creativity & Designing",
    description:
      "We believe creativity and design innovation are essential to creating distinctive, meaningful, and effective interior spaces.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Seek Help & Help Others",
    description:
      "We believe great work grows through mutual support. We remain open to learning, helping others, and collaborating throughout every project.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Timely Execution of Project",
    description:
      "We respect our clients' time and work according to clear project plans, milestones, and execution schedules to deliver projects on time.",
    icon: Clock,
  },
];

export function CoreValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(Math.max(index, 0), CORE_VALUES.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-28  bg-[#FCFBF8]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-14 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060] block">
            CORE VALUES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#242321]">
            What We Believe In
          </h2>
          <p className="text-xs sm:text-sm text-[#706B63] font-light max-w-xl mx-auto leading-relaxed">
            Principles that guide our daily operations, client communications, and spatial craftsmanship.
          </p>
        </div>

        {/* --- MOBILE CAROUSEL VIEW (md:hidden) --- */}
        <div className="block md:hidden">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar -mx-6 px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.number}
                  className="w-[82vw] max-w-[320px] shrink-0 snap-center rounded-[28px] border border-[#E8E1D7] bg-[#F7F4EE] p-6 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top Row: Number + Circular Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl text-[#9A8060]">
                        {val.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DFD5] bg-white text-[#9A8060] shadow-sm">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl text-[#242321] leading-snug">
                      {val.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs font-light text-[#706B63] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  {/* Bottom Divider & Tag */}
                  <div className="mt-6 pt-4 border-t border-[#E8E1D7] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9A8060]" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9A8060]">
                      DESIGNMEINTERIORS STANDARD
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom Navigation Bar: Dots + SWIPE TO EXPLORE -> */}
          <div className="mt-4 flex items-center justify-between px-1">
            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {CORE_VALUES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-6 h-1.5 rounded-full bg-[#242321]"
                      : "w-1.5 h-1.5 rounded-full bg-[#D7D0C5]"
                  }`}
                />
              ))}
            </div>

            {/* Swipe hint */}
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#9A8060]">
              <span>SWIPE TO EXPLORE</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* --- DESKTOP GRID VIEW (hidden md:grid) --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.number}
                className="group rounded-3xl border border-[#D7D0C5] bg-[#F5F2EC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-[#FCFBF8] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#9A8060]">
                      {val.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9A8060]/10 text-[#9A8060]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#242321]">
                    {val.title}
                  </h3>

                  <p className="text-xs font-light text-[#706B63] leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D7D0C5]/60 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9A8060]" />
                  <span className="text-[10px] uppercase tracking-wider text-[#706B63]">
                    DesignMeInteriors Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
