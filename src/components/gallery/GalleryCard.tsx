"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Layers, SlidersHorizontal, MapPin } from "lucide-react";
import { GalleryItem } from "@/data/galleryData";

interface GalleryCardProps {
  item: GalleryItem;
  onClick: (item: GalleryItem) => void;
  index: number;
}

export function GalleryCard({ item, onClick, index }: GalleryCardProps) {
  const isBeforeAfter = item.category === "Before & After" || (item.beforeImage && item.afterImage);
  const isMultiProject = item.images && item.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#D7D0C5]/80 bg-[#FCFBF8] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#9A8060]/60 hover:shadow-xl"
    >
      <button
        onClick={() => onClick(item)}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A8060] rounded-2xl overflow-hidden"
        aria-label={`View ${item.title} in gallery lightbox`}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E1D7]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
            <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FCFBF8] backdrop-blur-md">
              {item.category}
            </span>

            {isBeforeAfter && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#FF6B00] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                <SlidersHorizontal size={12} />
                Before / After
              </span>
            )}

            {isMultiProject && item.images && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#3A2920] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FCFBF8] shadow-md">
                <Layers size={12} />
                {item.images.length} Photos
              </span>
            )}
          </div>

          {/* Hover Overlay with Icon */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCFBF8]/90 text-[#3A2920] shadow-lg transition-transform duration-300 scale-75 group-hover:scale-100">
              <Maximize2 size={20} />
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div className="p-5 space-y-2">
          <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#9A8060]">
            <span className="flex items-center gap-1 text-[#706B63]">
              <MapPin size={12} className="text-[#9A8060]" />
              {item.location}
            </span>
            <span>{item.projectType}</span>
          </div>

          <h3 className="font-serif text-lg font-medium text-[#242321] transition-colors duration-300 group-hover:text-[#9A8060] line-clamp-1">
            {item.title}
          </h3>

          <p className="text-xs text-[#706B63] line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </button>
    </motion.div>
  );
}
