"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const isHomePage = pathname === "/";
  const isHeroNavbar = isHomePage && !scrolled;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer when navigating to a new path
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close drawer on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ease-out
        ${isHeroNavbar
          ? "bg-transparent py-5"
          : "bg-[#F5F2EC]/90 backdrop-blur-md border-b border-[#D7D0C5] py-4 shadow-sm"
        }
      `}
    >
      {/* Subtle dark gradient only over hero navbar */}
      {isHeroNavbar && (
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-32
            bg-gradient-to-b
            from-black/35
            via-black/10
            to-transparent
          "
        />
      )}

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1600px]
          items-center
          justify-between
          px-6
          md:px-12
        "
      >
        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <Image
            src="/designMeLogo.svg"
            alt="DesignMeInteriors"
            width={180}
            height={55}
            className={`h-11 w-auto object-contain transition-all duration-300 ${isHeroNavbar
                ? "drop-shadow-[0_0_1px_#000] drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]"
                : ""
              }`}
            priority
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative
                  py-1
                  text-xs
                  font-medium
                  uppercase
                  tracking-widest
                  transition-colors
                  duration-300
                  ${isHeroNavbar
                    ? isActive
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                    : isActive
                      ? "text-[#9A8060]"
                      : "text-[#242321]/80 hover:text-[#9A8060]"
                  }
                `}
              >
                {item.label}

                {isActive && (
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-[1.5px]
                      transition-colors
                      duration-300
                      ${isHeroNavbar
                        ? "bg-white"
                        : "bg-[#9A8060]"
                      }
                    `}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            DESKTOP CTA
        ====================================================== */}
        <div className="hidden items-center gap-4 md:flex">
          <Button
            asChild
            variant={isHeroNavbar ? "outline" : "accent"}
            size="sm"
            className={`
              transition-all
              duration-300
              ${isHeroNavbar
                ? "border-white/70 bg-white/5 text-white hover:bg-white hover:text-[#242321]"
                : ""
              }
            `}
          >
            <Link
              href="/contact"
              className="flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* =====================================================
            MOBILE MENU (FRAMER MOTION ANIMATED PORTAL DRAWER)
        ====================================================== */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open Navigation Menu"
            onClick={() => setIsOpen(true)}
            className={
              isHeroNavbar
                ? "text-white hover:bg-white/10 hover:text-white"
                : "text-[#242321]"
            }
          >
            <Menu className="h-6 w-6" />
          </Button>

          {mounted &&
            createPortal(
              <AnimatePresence>
                {isOpen && (
                  <>
                    {/* Backdrop Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setIsOpen(false)}
                      className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Side Drawer Content */}
                    <motion.aside
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="fixed inset-y-0 right-0 top-0 z-[9999] flex h-full w-3/4 max-w-sm flex-col justify-between overflow-y-auto border-l border-[#D7D0C5] bg-[#F5F2EC] p-6 pt-12 shadow-2xl"
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-6 top-6 z-10 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
                        aria-label="Close menu"
                      >
                        <X className="h-6 w-6 text-[#242321]" />
                      </button>

                      <div className="border-b border-[#D7D0C5] pb-6 text-left">
                        <span className="sr-only">DesignMeInteriors</span>
                        <Image
                          src="/designMeLogo.svg"
                          alt="DesignMeInteriors"
                          width={160}
                          height={50}
                          className="mb-1 h-10 w-auto object-contain"
                        />

                        <p className="text-xs uppercase tracking-wider text-[#706B63]">
                          Architecture & Interior Design
                        </p>
                      </div>

                      {/* Mobile navigation */}
                      <div className="my-auto flex flex-col gap-6 py-6">
                        {NAV_ITEMS.map((item) => {
                          const isActive = pathname === item.href;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={`
                                font-serif
                                text-xl
                                transition-colors
                                ${isActive
                                  ? "text-[#9A8060]"
                                  : "text-[#242321] hover:text-[#9A8060]"
                                }
                              `}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>

                      {/* Mobile details */}
                      <div className="flex flex-col gap-4 border-t border-[#D7D0C5] pt-6">
                        <a
                          href="tel:+919579540206"
                          className="flex items-center gap-3 text-xs text-[#706B63] hover:text-[#9A8060] transition-colors"
                        >
                          <Phone className="h-4 w-4 text-[#9A8060]" />
                          <span>+91 9579540206</span>
                        </a>

                        <a
                          href="mailto:contact@designmeinteriors.com"
                          className="flex items-center gap-3 text-xs text-[#706B63] hover:text-[#9A8060] transition-colors"
                        >
                          <Mail className="h-4 w-4 text-[#9A8060]" />
                          <span>contact@designmeinteriors.com</span>
                        </a>

                        <Button
                          asChild
                          variant="accent"
                          className="mt-2 w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href="/contact">
                            Inquire Project
                          </Link>
                        </Button>
                      </div>
                    </motion.aside>
                  </>
                )}
              </AnimatePresence>,
              document.body
            )}
        </div>
      </div>
    </header>
  );
}