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
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-[0_1px_3px_rgba(0,0,0,0.04)]
        transition-all
        duration-500
        ease-out
        hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)]
        hover:-translate-y-1.5
      "
    >
      {/* Image Section */}
      <div className="relative m-3 mb-0 h-56 overflow-hidden rounded-xl bg-[#F5F3F0]">
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

        {/* Gradient Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#1A1A2E]/60
            via-[#1A1A2E]/10
            to-transparent
            opacity-70
            transition-opacity
            duration-500
            group-hover:opacity-90
          "
        />

        {/* Number Badge */}
        {service.number && (
          <div
            className="
              absolute
              bottom-4
              right-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-[#1A1A2E]/80
              font-serif
              text-sm
              font-medium
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:border-[#D4A373]/50
              group-hover:bg-[#D4A373]
              group-hover:text-[#1A1A2E]
            "
          >
            {service.number}
          </div>
        )}

        {/* Category Tag */}
        {service.category && (
          <div
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-white/90
              px-3
              py-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.08em]
              text-[#1A1A2E]
              backdrop-blur-sm
              transition-all
              duration-300
              group-hover:bg-[#D4A373]
              group-hover:text-white
            "
          >
            {service.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 pt-5">
        <div className="flex-1 space-y-3">
          {/* Title with decorative line */}
          <div className="space-y-2">
            <div
              className="
                h-0.5
                w-8
                bg-[#D4A373]
                transition-all
                duration-500
                group-hover:w-12
              "
            />
            <h3
              className="
                font-serif
                text-xl
                font-medium
                leading-snug
                text-[#1A1A2E]
                transition-colors
                duration-300
                group-hover:text-[#D4A373]
              "
            >
              {service.title}
            </h3>
          </div>

          {/* Description */}
          <p className="line-clamp-3 text-sm leading-relaxed text-[#4A4A5A]">
            {service.shortDescription || service.description}
          </p>

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-1.5 pt-3">
              {service.features.slice(0, 4).map((feature, idx) => (
                <li
                  key={`${service.slug}-feature-${idx}`}
                  className="
                    flex
                    items-center
                    gap-2.5
                    text-sm
                    text-[#4A4A5A]
                    transition-colors
                    duration-200
                    group-hover:text-[#1A1A2E]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#D4A373]
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  />
                  <span>
                    {typeof feature === "string" ? feature : feature.title}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom Visual Indicator */}
        <div className="mt-5 pt-4 border-t border-[#F0EDEA]">
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-[#1A1A2E]
              transition-all
              duration-300
              group-hover:text-[#D4A373]
            "
          >
            <span className="relative">
              Explore Service
              <span
                className="
                  absolute
                  -bottom-0.5
                  left-0
                  h-[1.5px]
                  w-0
                  bg-[#D4A373]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </span>

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#D4A373]
              "
            />
          </div>
        </div>
      </div>
    </Link>
  );
}