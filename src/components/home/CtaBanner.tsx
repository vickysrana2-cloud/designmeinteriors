"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#181615] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86D51]">
              Initiate A Project
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight">
              Ready to craft your signature architectural environment?
            </h2>
            <p className="text-sm text-gray-400 max-w-lg leading-relaxed font-light">
              Connect with our principal architects to schedule a private studio consultation or request a custom proposal.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            variant="accent"
            className="px-8 py-6 text-sm font-semibold uppercase tracking-wider h-auto"
          >
            <Link href="/contact" className="flex items-center gap-3">
              <span>Book Studio Consultation</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
