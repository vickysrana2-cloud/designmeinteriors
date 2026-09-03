"use client";

import { ServiceFAQ as ServiceFAQType } from "@/types/service";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface ServiceFAQProps {
  faqs?: ServiceFAQType[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8060]">
          Got Questions?
        </span>
        <h3 className="font-serif text-2xl text-[#242321]">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#D7D0C5] bg-[#FCFBF8] px-6 sm:px-8 shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-item-${idx}`}
              className={idx === faqs.length - 1 ? "border-b-0" : ""}
            >
              <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-medium text-[#242321] hover:text-[#9A8060] py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm font-light leading-relaxed text-[#706B63] pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
