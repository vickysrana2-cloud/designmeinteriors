"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export const WHATSAPP_NUMBER = "919579540206";

export function WhatsAppFloat() {
  const [showWaPill, setShowWaPill] = useState(false);
  const [showIgPill, setShowIgPill] = useState(false);
  const [isWaHovered, setIsWaHovered] = useState(false);
  const [isIgHovered, setIsIgHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show automatic intro animation once per session
    const hasSeen =
      typeof window !== "undefined"
        ? sessionStorage.getItem("designme_social_pill_seen")
        : "true";

    if (!hasSeen) {
      const showTimer = setTimeout(() => {
        setShowIgPill(true);
        setShowWaPill(true);
      }, 500);

      const hideTimer = setTimeout(() => {
        setShowIgPill(false);
        setShowWaPill(false);
        sessionStorage.setItem("designme_social_pill_seen", "true");
      }, 3500);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  const whatsappPhone = siteConfig.whatsappNumber || WHATSAPP_NUMBER;
  const waMessage = encodeURIComponent(
    "Hello DesignMeInteriors, I would like to know more about your interior design services."
  );
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${waMessage}`;
  const instagramUrl = siteConfig.links.instagram || "https://www.instagram.com/designme_06/";

  const isWaExpanded = showWaPill || isWaHovered;
  const isIgExpanded = showIgPill || isIgHovered;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-4 sm:inset-6 pointer-events-none z-50 overflow-hidden">
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0.05}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setTimeout(() => setIsDragging(false), 150);
        }}
        whileDrag={{ scale: 1.05 }}
        className="pointer-events-auto absolute bottom-0 right-0 flex flex-col items-end gap-3 sm:gap-3.5 touch-none cursor-grab active:cursor-grabbing select-none"
      >
        {/* Instagram Icon (Top) */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onClick={handleClick}
          onMouseEnter={() => setIsIgHovered(true)}
          onMouseLeave={() => setIsIgHovered(false)}
          className="group relative flex items-center justify-end rounded-full bg-[#191816] text-[#FCFBF8] shadow-2xl transition-shadow duration-300 overflow-hidden select-none"
          aria-label="Follow us on Instagram"
          title="Drag to reposition • Click to follow on Instagram"
        >
          {/* Follow Us text section extending from inside the icon circle */}
          <motion.div
            initial={false}
            animate={
              isIgExpanded
                ? { width: "auto", opacity: 1, paddingLeft: 18, paddingRight: 12 }
                : { width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }
            }
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden whitespace-nowrap flex items-center gap-2.5 pointer-events-none"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#FCFBF8] group-hover:text-[#D4B993] transition-colors">
              Follow Us
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1306C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E1306C]"></span>
            </span>
          </motion.div>

          {/* Instagram Icon Circle */}
          <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#fbad50] via-[#e1306c] to-[#833ab4] text-white shadow-md group-hover:opacity-95 transition-all duration-300 pointer-events-none">
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7 fill-current pointer-events-none"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
        </a>

        {/* WhatsApp Icon (Bottom) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onClick={handleClick}
          onMouseEnter={() => setIsWaHovered(true)}
          onMouseLeave={() => setIsWaHovered(false)}
          className="group relative flex items-center justify-end rounded-full bg-[#191816] text-[#FCFBF8] shadow-2xl transition-shadow duration-300 overflow-hidden select-none"
          aria-label="Contact us on WhatsApp"
          title="Drag to reposition • Click to chat on WhatsApp"
        >
          {/* Contact Us text section extending from inside the icon circle */}
          <motion.div
            initial={false}
            animate={
              isWaExpanded
                ? { width: "auto", opacity: 1, paddingLeft: 18, paddingRight: 12 }
                : { width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }
            }
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden whitespace-nowrap flex items-center gap-2.5 pointer-events-none"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#FCFBF8] group-hover:text-[#D4B993] transition-colors">
              Contact Us
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
          </motion.div>

          {/* WhatsApp Icon Circle */}
          <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md group-hover:bg-[#22bf52] transition-colors duration-300 pointer-events-none">
            <svg
              className="h-7 w-7 sm:h-8 sm:w-8 fill-current pointer-events-none"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </a>
      </motion.div>
    </div>
  );
}



