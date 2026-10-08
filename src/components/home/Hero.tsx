"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { heroSlides } from "@/data/images";
import Link from "next/link";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setPreviousSlide(activeSlide);
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [activeSlide]);

  const slide = heroSlides[activeSlide];
  const previous = heroSlides[previousSlide];

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black">
      {/* Previous slide */}
      <div className="absolute inset-0 z-0">
        <img
          src={previous.image}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* New slide - smooth top → bottom reveal */}
      <motion.div
        key={slide.id}
        initial={{
          clipPath: "inset(0 0 100% 0)",
        }}
        animate={{
          clipPath: "inset(0 0 0% 0)",
        }}
        transition={{
          duration: 1.7,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="absolute inset-0 z-[1] overflow-hidden"
      >
        <img
          src={slide.image}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Soft moving transition shadow */}
        <motion.div
          initial={{ top: "-8%" }}
          animate={{ top: "108%" }}
          transition={{
            duration: 1.7,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            z-20
            h-[70px]
            -translate-y-1/2
            bg-gradient-to-b
            from-transparent
            via-black/25
            to-transparent
            blur-[8px]
          "
        />
      </motion.div>

      {/* Subtle hero dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-black/[0.18]" />
      <div className="absolute inset-0 bg-[rgba(16,8,1,0.46)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 xl:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[1050px]"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-black/40 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.05em] text-[#FF6B00] backdrop-blur-md shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                <span className="h-[6px] w-[6px] rounded-full bg-[#FF6B00] animate-pulse" />
                {slide.eyebrow}
              </div>

              <h1 className="max-w-[950px] text-white font-semibold tracking-[-0.055em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] leading-[0.94] text-[56px] sm:text-[68px] md:text-[78px] lg:text-[86px] xl:text-[90px]">
                {slide.title}
              </h1>

              <p className="ml-0 mt-8 max-w-[421px] text-[16px] font-medium leading-[1.35] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)] sm:ml-[40px] md:ml-[65px] md:mt-9 md:text-[17px] lg:text-[18px] lg:leading-6">
                {slide.description}
              </p>

              <div className="ml-0 mt-8 sm:ml-[40px] md:ml-[60px] md:mt-9">
                <Link
                  href="/contact"
                  className="group flex w-fit self-start items-center rounded-full border border-white bg-transparent py-[7px] pl-7 pr-2 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  <span>Book Consultation</span>

                  <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full wood-button text-[#FCFBF8] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project info card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-7 right-7 z-20 hidden items-stretch gap-5 xl:flex 2xl:right-12"
        >
          <div className="flex h-[265px] w-[280px] flex-col rounded-[22px] border border-white/10 bg-black/10 p-7 backdrop-blur-[5px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <span className="text-[46px] font-semibold leading-none tracking-[-0.04em] text-white/55">
              {slide.projects}
            </span>

            <p className="mt-4 max-w-[180px] text-[14px] font-medium leading-5 text-white/50">
              Successful Projects And Counting
            </p>

            <div className="mt-auto space-y-1 text-[13px] font-medium leading-5 text-white/40">
              {slide.features.map((feature) => (
                <div key={feature}>{feature}</div>
              ))}
            </div>
          </div>

          <div className="h-[265px] w-[250px] overflow-hidden rounded-[22px]">
            <img src={slide.previewImage} alt="" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Scroll down button */}
      <motion.button
        type="button"
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: [0, 18, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          y: { duration: 2.4, repeat: Infinity, ease: [0.45, 0, 0.55, 1] },
        }}
        className="absolute bottom-7 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-[#FCFBF8] text-[#9A8060] shadow-lg transition-transform hover:scale-105"
      >
        <ArrowDown size={21} strokeWidth={1.8} />
      </motion.button>
    </section>
  );
}
