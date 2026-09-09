"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  const lastScrollY = React.useRef(0);

  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const isHomePage = pathname === "/";
  const isHeroNavbar = isHomePage && !scrolled;

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY <= 20) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
      } else {
        const diff = currentScrollY - lastScrollY.current;
        if (Math.abs(diff) > 5) {
          if (diff > 0) {
            // Scroll Down -> Hide navbar
            setVisible(false);
          } else {
            // Scroll Up -> Show navbar
            setVisible(true);
          }
          lastScrollY.current = currentScrollY;
        }
      }
    };

    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

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
        duration-300
        ease-in-out
        ${visible || isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
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
                          className="group flex items-center justify-between text-xs text-[#706B63] hover:text-[#9A8060] transition-colors py-0.5"
                        >
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-[#9A8060]" />
                            <span>+91 9579540206</span>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#9A8060]" />
                        </a>

                        <a
                          href="mailto:contact@designmeinteriors.com"
                          className="group flex items-center justify-between text-xs text-[#706B63] hover:text-[#9A8060] transition-colors py-0.5"
                        >
                          <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-[#9A8060]" />
                            <span>contact@designmeinteriors.com</span>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#9A8060]" />
                        </a>

                        {/* Social Media Icons inside Mobile Drawer */}
                        <div className="flex items-center justify-around gap-1.5 pt-3 pb-1 border-t border-[#D7D0C5]/60">
                          {/* WhatsApp */}
                          <a
                            href={`https://wa.me/${siteConfig.whatsappNumber || "919579540206"}?text=${encodeURIComponent("Hello DesignMeInteriors, I would like to know more about your interior design services.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                          >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                          </a>

                          {/* Instagram */}
                          <a
                            href={siteConfig.links.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E1306C]/10 text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#fbad50] hover:via-[#e1306c] hover:to-[#833ab4] hover:text-white transition-all duration-300"
                            aria-label="Instagram"
                            title="Instagram"
                          >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>

                          {/* Facebook */}
                          <a
                            href={siteConfig.links.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                            aria-label="Facebook"
                            title="Facebook"
                          >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>

                          {/* Pinterest */}
                          <a
                            href={siteConfig.links.pinterest}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E60023]/10 text-[#E60023] hover:bg-[#E60023] hover:text-white transition-all duration-300"
                            aria-label="Pinterest"
                            title="Pinterest"
                          >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                            </svg>
                          </a>

                          {/* LinkedIn */}
                          <a
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                          >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>

                          {/* YouTube */}
                          <a
                            href={siteConfig.links.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300"
                            aria-label="YouTube"
                            title="YouTube"
                          >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 0 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </a>
                        </div>

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