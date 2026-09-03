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
    <section className="bg-[#F4F2EC] py-24 border-t border-[#DCD5CB]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Header */}
          <div className="space-y-4 lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86D51]">
              Work Methodology
            </span>
            <h2 className="font-serif text-3xl text-[#1E1C1A] sm:text-5xl leading-tight">
              Our 4-Phase Architectural Process.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
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
                  className="border border-[#E5DFD5] bg-white px-6 py-2 shadow-sm transition-colors data-[state=open]:border-[#C86D51]"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-6 text-left">
                      <span className="font-serif text-lg font-bold text-[#C86D51]">
                        {item.step}
                      </span>
                      <span className="font-serif text-xl text-[#1E1C1A]">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 text-sm text-muted-foreground leading-relaxed">
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
