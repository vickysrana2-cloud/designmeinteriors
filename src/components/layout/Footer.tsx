"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Share2, ExternalLink } from "lucide-react";

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
              International architecture and interior design studio crafting timeless spaces, refined material expressions, and bespoke living environments.
            </p>
            <div className="flex items-center gap-4 text-[#D7D0C5]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[#322F2C] hover:border-[#9A8060] hover:text-[#9A8060] transition-colors"
                aria-label="Instagram"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[#322F2C] hover:border-[#9A8060] hover:text-[#9A8060] transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[#322F2C] hover:border-[#9A8060] hover:text-[#9A8060] transition-colors"
                aria-label="Twitter"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#9A8060] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#D7D0C5]">
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
                <Link href="/projects" className="hover:text-[#9A8060] transition-colors">
                  Project Portfolio
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
              Global Studios
            </h4>
            <div className="space-y-4 text-xs text-[#D7D0C5]">
              <div>
                <span className="text-[#FCFBF8] font-medium block">New Delhi Studio</span>
                <span className="block text-[#706B63]">12 Golf Links, New Delhi</span>
                <span className="block text-[#706B63]">+91 11 4567 8900</span>
              </div>
              <div>
                <span className="text-[#FCFBF8] font-medium block">Mumbai Design Hub</span>
                <span className="block text-[#706B63]">Level 8, Maker Maxity, BKC</span>
                <span className="block text-[#706B63]">+91 22 6789 0123</span>
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
            <span className="hover:text-[#D7D0C5] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#D7D0C5] cursor-pointer transition-colors">
              Terms of Engagement
            </span>
            <span className="hover:text-[#D7D0C5] cursor-pointer transition-colors">
              Sitemap
            </span>
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
