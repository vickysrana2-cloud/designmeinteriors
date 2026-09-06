"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#E8E1D7] border-y border-[#D7D0C5] py-20 sm:py-24 text-[#242321]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="max-w-2xl space-y-4 flex flex-col items-center lg:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              Start Your Project
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight text-[#242321]">
              Ready to transform your home or office space?
            </h2>
            <p className="text-sm text-[#706B63] max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
              Get in touch with our design team to discuss your ideas, get a custom estimate, and schedule a consultation.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            variant="accent"
            className="w-full sm:w-auto px-8 py-6 text-sm font-semibold uppercase tracking-wider h-auto shadow-md"
          >
            <Link href="/contact" className="flex items-center justify-center gap-3">
              <span>Book A Free Consultation</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
