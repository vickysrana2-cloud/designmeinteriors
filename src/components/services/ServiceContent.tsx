"use client";

import { ServiceSection } from "@/types/service";
import { CheckCircle2 } from "lucide-react";

interface ServiceContentProps {
  sections?: ServiceSection[];
  checklist?: string[];
}

export function ServiceContent({ sections, checklist }: ServiceContentProps) {
  return (
    <div className="space-y-10">
      {/* Detailed Narrative Sections */}
      {sections && sections.length > 0 && (
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-serif text-2xl text-[#242321]">
                {section.title}
              </h3>
              <p className="font-light text-base leading-relaxed text-[#706B63]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Structured Checklist Section */}
      {checklist && checklist.length > 0 && (
        <div className="space-y-6 rounded-2xl border border-[#D7D0C5] bg-[#FCFBF8] p-7 shadow-sm">
          <div className="space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8060]">
              Quality Assurance
            </span>
            <h3 className="font-serif text-2xl text-[#242321]">
              Our Service Deliverables & Commitment
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3.5 pt-2">
            {checklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 rounded-xl border border-[#D7D0C5]/60 bg-[#F5F2EC]/60 p-3.5 transition-colors duration-200 hover:border-[#9A8060]"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9A8060]/15 text-[#9A8060]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#242321]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
