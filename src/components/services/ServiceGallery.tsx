"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceGalleryProps {
  images?: string[];
  title: string;
}

export function ServiceGallery({ images, title }: ServiceGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-2xl text-[#242321]">
        Gallery & Spatial Expressions
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {images.slice(0, 2).map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-[#D7D0C5] bg-[#E8E1D7] shadow-sm"
          >
            <Image
              src={img}
              alt={`${title} expression ${idx + 1}`}
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
