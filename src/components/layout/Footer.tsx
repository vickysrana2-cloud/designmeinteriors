"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#191816] text-[#FCFBF8] pt-20 pb-12 border-t border-[#322F2C]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/designMeLogo.svg"
                alt="DesignMeInteriors"
                width={180}
                height={55}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#D7D0C5] leading-relaxed max-w-sm font-sans">
              Nagpur-based interior design firm with 6+ years of experience crafting thoughtful, functional, and beautiful interior spaces.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Facebook */}
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noreferrer"
                className="group p-2.5 bg-[#1877F2]/10 border border-[#1877F2]/30 hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 rounded-xl"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-[#1877F2] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="group p-2.5 bg-[#E4405F]/10 border border-[#E4405F]/30 hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:border-transparent transition-all duration-300 rounded-xl"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-[#E4405F] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://in.pinterest.com/designmeinteriors/"
                target="_blank"
                rel="noreferrer"
                className="group p-2.5 bg-[#E60023]/10 border border-[#E60023]/30 hover:bg-[#E60023] hover:border-[#E60023] transition-all duration-300 rounded-xl"
                aria-label="Pinterest"
                title="Pinterest"
              >
                <svg className="w-4 h-4 fill-[#E60023] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/design-me-interiors-055577340/"
                target="_blank"
                rel="noreferrer"
                className="group p-2.5 bg-[#0A66C2]/10 border border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 rounded-xl"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-[#0A66C2] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="http://www.youtube.com/@DesignMeInteriors"
                target="_blank"
                rel="noreferrer"
                className="group p-2.5 bg-[#FF0000]/10 border border-[#FF0000]/30 hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 rounded-xl"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-[#FF0000] group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 0 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#9A8060] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D7D0C5]">
              <li>
                <Link href="/" className="hover:text-[#9A8060] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#9A8060] transition-colors">
                  Studio & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#9A8060] transition-colors">
                  Interior Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#9A8060] transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#9A8060] transition-colors">
                  Gallery Showcase
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#9A8060] transition-colors">
                  Design Journal & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9A8060] transition-colors">
                  Inquire & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Offices */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#9A8060] font-semibold">
              Design Studio
            </h4>
            <div className="space-y-4 text-xs text-[#D7D0C5]">
              <div>
                <a
                  href={siteConfig.googleMapsUrl || "https://share.google/euMVYDVH6dGXc1s87"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  title="Open location in Google Maps"
                >
                  <span className="text-[#FCFBF8] font-medium block group-hover:text-[#CAA05C] transition-colors">
                    Nagpur Studio (Main Office)
                  </span>
                  <span className="block text-[#706B63] group-hover:underline">
                    Saraswati Palace, Wanjari Nagar, Nagpur, Maharashtra 440003 ↗
                  </span>
                </a>
                <a
                  href="tel:+919579540206"
                  className="block text-[#CAA05C] hover:underline font-medium mt-1"
                >
                  +91 9579540206
                </a>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#9A8060] font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-[#D7D0C5]">
              <li>• Spatial Masterplanning</li>
              <li>• Luxury Residential Architecture</li>
              <li>• Biophilic Commercial Workplaces</li>
              <li>• Custom Furniture Engineering</li>
              <li>• Turnkey Project Execution</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 border-t border-[#322F2C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#706B63] gap-4">
          <p>© {new Date().getFullYear()} DesignMeInteriors Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#D7D0C5] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#D7D0C5] transition-colors"
            >
              Terms of Engagement
            </Link>
            <Link
              href="/admin"
              className="hover:text-[#9A8060] transition-colors font-medium text-[#706B63]"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
