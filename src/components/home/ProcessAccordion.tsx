"use client";

import { useState } from "react";
import { PROCESS_STEPS } from "@/data/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Compass, Lightbulb, Palette, Sparkles } from "lucide-react";

const ACCORDION_ICONS = [
  {
    icon: Compass,
    colorActive: "text-[#D97706]",
    colorInactive: "text-amber-300",
    bgActive: "bg-amber-500/10 border-amber-500/30",
    bgInactive: "bg-amber-500/20 border-amber-500/40",
  },
  {
    icon: Lightbulb,
    colorActive: "text-[#2563EB]",
    colorInactive: "text-blue-300",
    bgActive: "bg-blue-500/10 border-blue-500/30",
    bgInactive: "bg-blue-500/20 border-blue-500/40",
  },
  {
    icon: Palette,
    colorActive: "text-[#9333EA]",
    colorInactive: "text-purple-300",
    bgActive: "bg-purple-500/10 border-purple-500/30",
    bgInactive: "bg-purple-500/20 border-purple-500/40",
  },
  {
    icon: Sparkles,
    colorActive: "text-[#059669]",
    colorInactive: "text-emerald-300",
    bgActive: "bg-emerald-500/10 border-emerald-500/30",
    bgInactive: "bg-emerald-500/20 border-emerald-500/40",
  },
];

export function ProcessAccordion() {
  const [activeStep, setActiveStep] = useState("item-0");

  const activeIndex = Number(activeStep.split("-")[1]);
  const activeProcess = PROCESS_STEPS[activeIndex];

  return (
    <section className="relative min-h-[700px] overflow-hidden border-t border-[#D7D0C5]">
      {/* =====================================================
          BACKGROUND IMAGES
      ===================================================== */}

      <div className="absolute inset-0">
        {PROCESS_STEPS.map((item, index) => (
          <div
            key={item.step}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeIndex === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Additional gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="lg:col-span-5">
            <div className="space-y-5">
              <span className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4B993]">
                <span className="h-px w-10 bg-[#D4B993]" />
                How We Work
              </span>

              <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
                Our 4-Step
                <br />
                <span className="italic text-[#D4B993]">
                  Design Process.
                </span>
              </h2>

              <p className="max-w-md text-sm font-light leading-7 text-white/75">
                From initial ideas to final setup, we follow a simple step-by-step process to bring your dream space to life.
              </p>

              {/* Active phase indicator */}
              <div className="pt-6">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-4xl text-white/90">
                    {activeProcess.step}
                  </span>

                  <div className="h-px w-12 bg-white/30" />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                    Current Phase
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT ACCORDION
          ================================================= */}

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              value={activeStep}
              onValueChange={(value) => {
                if (value) {
                  setActiveStep(value);
                }
              }}
              className="w-full space-y-3"
            >
              {PROCESS_STEPS.map((item, index) => {
                const isActive = activeIndex === index;
                const iconMeta = ACCORDION_ICONS[index % ACCORDION_ICONS.length];
                const IconComponent = iconMeta.icon;

                return (
                  <AccordionItem
                    key={item.step}
                    value={`item-${index}`}
                    className={`
                      overflow-hidden
                      border
                      px-5
                      transition-all
                      duration-500
                      md:px-7
                      ${
                        isActive
                          ? "border-white/50 bg-white/[0.94]"
                          : "border-white/20 bg-black/20 backdrop-blur-md"
                      }
                    `}
                  >
                    <AccordionTrigger
                      className="py-6 hover:no-underline md:py-7"
                    >
                      <div className="flex w-full items-center gap-4 text-left sm:gap-5">
                        {/* NUMBER */}
                        <span
                          className={`
                            font-serif text-lg transition-colors duration-500
                            ${
                              isActive
                                ? "text-[#9A8060]"
                                : "text-white/60"
                            }
                          `}
                        >
                          {item.step}
                        </span>

                        {/* COLORED ICON */}
                        <div
                          className={`
                            flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 md:h-11 md:w-11
                            ${
                              isActive
                                ? iconMeta.bgActive
                                : iconMeta.bgInactive
                            }
                          `}
                        >
                          <IconComponent
                            className={`h-5 w-5 transition-colors duration-500 ${
                              isActive ? iconMeta.colorActive : iconMeta.colorInactive
                            }`}
                            strokeWidth={1.85}
                          />
                        </div>

                        {/* TITLE */}
                        <span
                          className={`
                            flex-1 font-serif text-lg leading-tight transition-colors duration-500 md:text-xl
                            ${
                              isActive
                                ? "text-[#242321]"
                                : "text-white"
                            }
                          `}
                        >
                          {item.title}
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent
                      className={`
                        pb-7 pl-[84px] pr-4 text-sm leading-7
                        ${
                          isActive
                            ? "text-[#706B63]"
                            : "text-white/70"
                        }
                      `}
                    >
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}