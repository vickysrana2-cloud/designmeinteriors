"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export const WHATSAPP_NUMBER = "919579540206";

export function WhatsAppFloat() {
  const [showPill, setShowPill] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show automatic intro animation once per session
    const hasSeen = typeof window !== "undefined" ? sessionStorage.getItem("designme_wa_pill_seen") : "true";
    if (!hasSeen) {
      const showTimer = setTimeout(() => {
        setShowPill(true);
      }, 500);

      const hideTimer = setTimeout(() => {
        setShowPill(false);
        sessionStorage.setItem("designme_wa_pill_seen", "true");
      }, 3500);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  const whatsappPhone = siteConfig.whatsappNumber || WHATSAPP_NUMBER;
  const message = encodeURIComponent(
    "Hello DesignMeInteriors, I would like to know more about your interior design services."
  );
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${message}`;

  const isExpanded = showPill || isHovered;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-end rounded-full bg-[#191816] text-[#FCFBF8] shadow-2xl transition-all duration-300 overflow-hidden"
        aria-label="Contact us on WhatsApp"
        title="Contact us on WhatsApp"
      >
        {/* Contact Us text section extending from inside the icon circle */}
        <motion.div
          initial={false}
          animate={
            isExpanded
              ? { width: "auto", opacity: 1, paddingLeft: 18, paddingRight: 12 }
              : { width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }
          }
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden whitespace-nowrap flex items-center gap-2.5"
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
        <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md group-hover:bg-[#22bf52] group-hover:scale-105 transition-all duration-300">
          <svg
            className="h-7 w-7 sm:h-8 sm:w-8 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
