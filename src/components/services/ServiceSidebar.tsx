"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Mail, ChevronRight } from "lucide-react";
import { getAllServices } from "@/data/services";
import { Button } from "@/components/ui/button";

interface ServiceSidebarProps {
  currentSlug: string;
}

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
  const services = getAllServices();

  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      {/* Other Services Navigation Card */}
      <div className="overflow-hidden rounded-3xl border border-[#D7D0C5] bg-[#FCFBF8] p-6 shadow-sm sm:p-7">
        <h3 className="mb-5 font-serif text-lg font-semibold text-[#242321]">
          Other Services
        </h3>
        <div className="h-0.5 w-10 bg-[#9A8060] mb-6" />

        <nav className="space-y-2">
          {services.map((s) => {
            const isActive = s.slug === currentSlug;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#242321] text-[#FCFBF8] shadow-sm"
                    : "bg-[#F5F2EC]/80 text-[#242321] hover:bg-[#E8E1D7] hover:text-[#9A8060]"
                }`}
              >
                <span className="line-clamp-1">{s.title}</span>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    isActive
                      ? "text-[#9A8060] translate-x-0.5"
                      : "text-[#706B63] group-hover:translate-x-0.5 group-hover:text-[#9A8060]"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Contact / Help Card */}
      <div className="relative overflow-hidden rounded-3xl border border-[#D7D0C5] bg-[#191816] p-7 text-[#FCFBF8] shadow-lg">
        {/* Background Overlay Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')",
          }}
        />

        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8060]">
              Direct Assistance
            </span>
            <h4 className="font-serif text-2xl font-semibold leading-tight text-[#FCFBF8]">
              Do You Need Architectural Advice?
            </h4>
            <p className="text-xs leading-relaxed text-[#D7D0C5] font-light">
              Speak directly with our senior interior architects for a private consultation or project estimate.
            </p>
          </div>

          <div className="space-y-3.5 border-t border-white/10 pt-5 text-xs text-[#D7D0C5]">
            <a
              href="tel:+919579540206"
              className="flex items-center gap-3 transition-colors hover:text-[#9A8060]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#9A8060]">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <span className="font-medium">+91 9579540206</span>
            </a>

            <a
              href="mailto:contact@designmeinteriors.com"
              className="flex items-center gap-3 transition-colors hover:text-[#9A8060]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#9A8060]">
                <Mail className="h-3.5 w-3.5" />
              </div>
              <span className="font-medium truncate">contact@designmeinteriors.com</span>
            </a>
          </div>

          <Button
            asChild
            variant="accent"
            size="sm"
            className="w-full justify-center gap-2 rounded-xl py-5 text-xs font-semibold uppercase tracking-wider shadow-md"
          >
            <Link href="/contact">
              <span>Book Consultation</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
