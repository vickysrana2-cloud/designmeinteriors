"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Layers, SlidersHorizontal } from "lucide-react";
import { GalleryItem } from "@/data/galleryData";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export function GalleryLightbox({
  item,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
}: GalleryLightboxProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset inner image index when item changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [item]);

  const hasMultiImages = item?.images && item.images.length > 1;
  const currentImages = item?.images || (item ? [item.image] : []);
  const activeImageUrl = currentImages[activeImageIndex] || item?.image;

  const handleNextPhoto = useCallback(() => {
    if (hasMultiImages) {
      if (activeImageIndex < currentImages.length - 1) {
        setActiveImageIndex((prev) => prev + 1);
        return;
      }
    }
    onSelectNext();
  }, [hasMultiImages, activeImageIndex, currentImages.length, onSelectNext]);

  const handlePrevPhoto = useCallback(() => {
    if (hasMultiImages) {
      if (activeImageIndex > 0) {
        setActiveImageIndex((prev) => prev - 1);
        return;
      }
    }
    onSelectPrev();
  }, [hasMultiImages, activeImageIndex, onSelectPrev]);

  // Keyboard navigation
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNextPhoto();
      } else if (e.key === "ArrowLeft") {
        handlePrevPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose, handleNextPhoto, handlePrevPhoto]);

  if (!item) return null;

  const isBeforeAfter =
    item.category === "Before & After" || Boolean(item.beforeImage && item.afterImage);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label={`Lightbox for ${item.title}`}
        onClick={onClose}
      >
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-[#191816] text-[#FCFBF8] border border-[#322F2C] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#322F2C] bg-[#191816]">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#3A2920] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FCFBF8] border border-[#5A3A28]">
                {item.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#D7D0C5]">
                <MapPin size={13} className="text-[#9A8060]" />
                {item.location}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="group p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FCFBF8] transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Visual Display Area */}
          <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] bg-black/60 flex items-center justify-center overflow-hidden">
            {isBeforeAfter && item.beforeImage && item.afterImage ? (
              <div className="w-full h-full p-4 sm:p-8">
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  title={item.title}
                  className="w-full h-full min-h-[380px] sm:min-h-[500px]"
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {activeImageUrl && (
                  <div className="relative w-full h-full min-h-[350px] sm:min-h-[500px] max-h-[65vh]">
                    <Image
                      src={activeImageUrl}
                      alt={`${item.title} photo ${activeImageIndex + 1}`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </div>
            )}

            {/* Prev Button */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 hover:bg-black/80 hover:scale-105 transition-all shadow-lg z-20"
              aria-label="Previous item"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 hover:bg-black/80 hover:scale-105 transition-all shadow-lg z-20"
              aria-label="Next item"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Bar & Description */}
          <div className="px-6 py-5 border-t border-[#322F2C] bg-[#191816] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl text-[#FCFBF8]">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#D7D0C5] mt-1 max-w-3xl leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Multi-image thumbnail bar if project has multiple photos */}
              {hasMultiImages && item.images && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 shrink-0">
                  {item.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-12 w-16 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? "border-[#FF6B00] scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <Image
                        src={imgUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
