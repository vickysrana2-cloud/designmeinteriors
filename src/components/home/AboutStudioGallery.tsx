"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Hand, MapPin } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/galleryData";

// Filter out Before & After items for the About Studio showcase
const aboutGalleryItems: GalleryItem[] = galleryItems.filter(
  (item) => item.category !== "Before & After"
);

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export function AboutStudioGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Show animated hand gesture hint whenever section mounts/appears, and hide after 2 seconds
  useEffect(() => {
    setShowHint(true);
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const dismissHint = useCallback(() => {
    setShowHint(false);
  }, []);

  const handleNext = useCallback(() => {
    dismissHint();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % aboutGalleryItems.length);
  }, [dismissHint]);

  const handlePrev = useCallback(() => {
    dismissHint();
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + aboutGalleryItems.length) % aboutGalleryItems.length
    );
  }, [dismissHint]);

  // Handle drag/swipe end
  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    dismissHint();
    const swipeThreshold = 40;
    const velocityThreshold = 150;

    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      handleNext();
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      handlePrev();
    }
  };

  const currentItem = aboutGalleryItems[currentIndex] || aboutGalleryItems[0];

  return (
    <div
      className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#D7D0C5] shadow-lg sm:h-[520px] bg-[#E8E1D7] group select-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }}
      aria-label="Interactive studio gallery. Use arrow keys or swipe left/right to browse images."
    >
      {/* Sliding Image Container */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentItem.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.25 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragStart={dismissHint}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
        >
          <Image
            src={currentItem.image}
            alt={`${currentItem.title} - ${currentItem.category}`}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover pointer-events-none"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Top Overlay Badge — Location & Category info */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FCFBF8] backdrop-blur-md">
          <MapPin size={12} className="text-[#FF6B00]" />
          {currentItem.location}
        </span>

        {/* Subtle Counter Indicator */}
        <span className="rounded-full bg-black/50 px-3 py-1 text-[11px] font-bold tracking-widest text-[#FCFBF8] backdrop-blur-md">
          {String(currentIndex + 1).padStart(2, "0")} / {String(aboutGalleryItems.length).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom Overlay Info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-[#FCFBF8] pointer-events-none">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FF6B00]">
          {currentItem.category}
        </p>
        <h4 className="font-serif text-base sm:text-lg font-medium text-white line-clamp-1">
          {currentItem.title}
        </h4>
      </div>

      {/* Desktop Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white border border-white/20 opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all duration-300 shadow-md focus:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white border border-white/20 opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all duration-300 shadow-md focus:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* First-Time Animated Hand Gesture Tutorial Overlay */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[2px] pointer-events-none"
          >
            <div className="flex flex-col items-center space-y-3">
              {/* Hand Icon with horizontal swipe animation */}
              <motion.div
                animate={{
                  x: [-28, 28, -28],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B00] text-white shadow-2xl border-0 border-white/80"
              >
                <Hand size={26} className="rotate-[-15deg]" />
              </motion.div>

              {/* Instructional Text Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 shadow-xl backdrop-blur-md">
                <span>←</span>
                <span>Swipe to explore portfolio</span>
                <span>→</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
