"use client";

import Image from "next/image";

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
          <div
            key={idx}
            className="group relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-[#D7D0C5] bg-[#E8E1D7] shadow-sm"
          >
            <Image
              src={img}
              alt={`${title} expression ${idx + 1}`}
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
