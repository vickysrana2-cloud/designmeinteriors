"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  const isHomePage = pathname === "/";
  const isHeroNavbar = isHomePage && !scrolled;

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
        ${
          isHeroNavbar
            ? "bg-transparent py-5"
            : "bg-white/90 backdrop-blur-md border-b border-[#DCD5CB]/60 py-4 shadow-sm"
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
          max-w-7xl
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
            className={`h-11 w-auto object-contain transition-all duration-300 ${
  isHeroNavbar
    ? "drop-shadow-[0_0_4px_rgba(0,0,0,1)] drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
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
                  ${
                    isHeroNavbar
                      ? isActive
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                      : isActive
                        ? "text-[#C86D51]"
                        : "text-[#1E1C1A]/80 hover:text-[#C86D51]"
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
                      ${
                        isHeroNavbar
                          ? "bg-white"
                          : "bg-[#C86D51]"
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
            variant={isHeroNavbar ? "outline" : "default"}
            size="sm"
            className={`
              transition-all
              duration-300
              ${
                isHeroNavbar
                  ? "border-white/70 bg-white/5 text-white hover:bg-white hover:text-[#1E1C1A]"
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
            MOBILE MENU
        ====================================================== */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open Navigation Menu"
                className={
                  isHeroNavbar
                    ? "text-white hover:bg-white/10 hover:text-white"
                    : "text-[#1E1C1A]"
                }
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex flex-col justify-between pt-12"
            >
              <SheetHeader className="border-b border-[#DCD5CB] pb-6 text-left">
                <SheetTitle className="sr-only">DesignMeInteriors</SheetTitle>
                <Image
                  src="/designMeLogo.svg"
                  alt="DesignMeInteriors"
                  width={160}
                  height={50}
                  className="h-10 w-auto object-contain mb-1"
                />

                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Architecture & Interior Design
                </p>
              </SheetHeader>

              {/* Mobile navigation */}
              <div className="my-auto flex flex-col gap-6">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`
                          font-serif
                          text-xl
                          transition-colors
                          ${
                            isActive
                              ? "text-[#C86D51]"
                              : "text-[#1E1C1A] hover:text-[#C86D51]"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>

              {/* Mobile details */}
              <div className="flex flex-col gap-4 border-t border-[#DCD5CB] pt-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Phone className="h-4 w-4 text-[#C86D51]" />
                  <span>+1 (212) 555-0198</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Mail className="h-4 w-4 text-[#C86D51]" />
                  <span>concierge@designmeinteriors.com</span>
                </div>

                <SheetClose asChild>
                  <Button
                    asChild
                    variant="accent"
                    className="mt-2 w-full"
                  >
                    <Link href="/contact">
                      Inquire Project
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}