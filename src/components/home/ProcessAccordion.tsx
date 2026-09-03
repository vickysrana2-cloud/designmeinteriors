"use client";

import { PROCESS_STEPS } from "@/data/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProcessAccordion() {
  return (
    <section className="bg-[#E8E1D7] py-24 border-t border-[#D7D0C5]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Header */}
          <div className="space-y-4 lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              Work Methodology
            </span>
            <h2 className="font-serif text-3xl text-[#242321] sm:text-5xl leading-tight">
              Our 4-Phase Architectural Process.
            </h2>
            <p className="text-sm text-[#706B63] leading-relaxed">
              From foundational spatial discovery to white-glove site delivery, every commission follows a disciplined workflow.
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
              {PROCESS_STEPS.map((item, index) => (
                <AccordionItem
                  key={item.step}
                  value={`item-${index}`}
                  className="border border-[#D7D0C5] bg-[#FCFBF8] px-6 py-2 transition-colors data-[state=open]:border-[#9A8060]"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-6 text-left">
                      <span className="font-serif text-lg font-bold text-[#9A8060]">
                        {item.step}
                      </span>
                      <span className="font-serif text-xl text-[#242321]">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 text-sm text-[#706B63] leading-relaxed">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
