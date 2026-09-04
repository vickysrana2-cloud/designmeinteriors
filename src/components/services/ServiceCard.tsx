"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="
        group
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-[#D7D0C5]
        bg-[#FCFBF8]
        shadow-[0_4px_25px_rgba(0,0,0,0.04)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:border-[#9A8060]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
      "
    >
      {/* Service Top Image & Index Overlay (Antra Services 03 Style) */}
      <div className="relative aspect-[14/10] w-full overflow-hidden bg-[#E8E1D7]">
        {/* Service Image */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Dark Gradient Overlay on Hover */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-black/20
            opacity-40
            transition-opacity
            duration-500
            group-hover:opacity-70
          "
        />

        {/* Index Number Badge (Top-Left) */}
        {service.number && (
          <div
            className="
              absolute
              left-5
              top-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-[#191816]/85
              font-mono
              text-sm
              font-bold
              tracking-wider
              text-white
              backdrop-blur-md
              shadow-md
              transition-colors
              duration-300
              group-hover:bg-[#9A8060]
              group-hover:border-[#9A8060]
            "
          >
            {service.number}
          </div>
        )}

        {/* Category Pill (Top-Right) */}
        {service.category && (
          <div
            className="
              absolute
              right-5
              top-5
              rounded-full
              border
              border-white/20
              bg-white/85
              px-3.5
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#242321]
              backdrop-blur-md
              shadow-sm
              transition-colors
              duration-300
              group-hover:bg-[#242321]
              group-hover:text-white
            "
          >
            {service.category}
          </div>
        )}
      </div>

      {/* Service Content Loop Area */}
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex-1 space-y-3">
          {/* Header & Title */}
          <div className="flex items-start justify-between gap-4">
            <h3
              className="
                font-serif
                text-2xl
                font-semibold
                leading-tight
                text-[#242321]
                transition-colors
                duration-300
                group-hover:text-[#9A8060]
              "
            >
              {service.title}
            </h3>

            <div className="shrink-0 pt-1 text-[#9A8060]">
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Excerpt Paragraph */}
          <p className="font-light text-sm sm:text-base leading-relaxed text-[#706B63] line-clamp-3">
            {service.shortDescription || service.description}
          </p>
        </div>

        {/* Features Preview List */}
        {service.features && service.features.length > 0 && (
          <ul className="mt-5 space-y-2 border-t border-[#E8E1D7] pt-4 text-xs font-medium text-[#706B63]">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9A8060]" />
                <span className="line-clamp-1">{typeof feat === "string" ? feat : feat.title}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Card Footer Link */}
        <div className="mt-6 flex items-center justify-between pt-2">
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#9A8060]
              transition-colors
              duration-300
              group-hover:text-[#242321]
            "
          >
            Explore Capability
          </span>
          <span className="h-px w-8 bg-[#9A8060]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#9A8060]" />
        </div>
      </div>
    </Link>
  );
}