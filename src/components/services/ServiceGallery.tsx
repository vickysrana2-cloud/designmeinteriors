"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

interface ServiceGalleryProps {
  images?: string[];
  title: string;
}

export function ServiceGallery({
  images,
  title,
}: ServiceGalleryProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  if (!images || images.length === 0) return null;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;

    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !sliderRef.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    if (!sliderRef.current) return;

    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
  };

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-2xl text-[#242321]">
        Gallery & Spatial Expressions
      </h3>

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className="
          flex
          w-full
          cursor-grab
          gap-6
          overflow-x-auto
          overscroll-x-contain
          pb-4
          snap-x
          snap-mandatory
          select-none
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {images.map((img, idx) => (
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
            className="
              group
              relative
              shrink-0
              snap-start
              overflow-hidden
              rounded-3xl
              border
              border-[#D7D0C5]
              bg-[#E8E1D7]
              shadow-sm

              /* MOBILE - unchanged */
              h-64
              w-[85vw]
              min-w-[85vw]

              /* TABLET - unchanged */
              sm:h-72
              sm:w-[70vw]
              sm:min-w-[70vw]

              /* DESKTOP */
              lg:h-[355px]
              lg:w-[calc((100%-24px)/2)]
              lg:min-w-[calc((100%-24px)/2)]
            "
          >
            <Image
              src={img}
              alt={`${title} expression ${idx + 1}`}
              fill
              draggable={false}
              sizes="
                (max-width: 639px) 85vw,
                (max-width: 1023px) 70vw,
                calc((100vw - 48px) / 2)
              "
              className="
                pointer-events-none
                object-cover
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:opacity-100
              "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}