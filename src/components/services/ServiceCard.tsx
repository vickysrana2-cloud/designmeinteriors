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
    <div
      className="
        group
        flex
        h-full
        w-full
        flex-col
        justify-between
        overflow-hidden
        border
        border-[#E5DFD5]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-[#C86D51]
        hover:shadow-xl
      "
    >
      <div>
        {/* Image */}
        <div className="relative h-60 w-full overflow-hidden">
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

          {/* Number badge */}
          {service.number && (
            <div
              className="
                absolute
                left-4
                top-4
                bg-[#1E1C1A]/80
                px-3
                py-1
                font-serif
                text-xs
                text-white
                backdrop-blur-sm
              "
            >
              {service.number}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          <h3
            className="
              font-serif
              text-xl
              text-[#1E1C1A]
              transition-colors
              duration-300
              group-hover:text-[#C86D51]
            "
          >
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </h3>

          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
            {service.shortDescription || service.description}
          </p>

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2 border-t border-[#F0ECE4] pt-3">
              {service.features.slice(0, 4).map((feature, idx) => (
                <li
                  key={`${service.slug}-feature-${idx}`}
                  className="flex items-center gap-2 text-[11px] text-[#3A3530]"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#C86D51]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Bottom Link */}
      <div className="mt-auto p-6 pt-0">
        <Link
          href={`/services/${service.slug}`}
          className="
            inline-flex
            items-center
            gap-2
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-[#1E1C1A]
            transition-colors
            duration-300
            group-hover:text-[#C86D51]
          "
        >
          <span>Explore Service</span>

          <ArrowUpRight
            className="
              h-3.5
              w-3.5
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </div>
    </div>
  );
}
