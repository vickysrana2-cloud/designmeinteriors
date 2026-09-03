"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#141312] text-[#F9F8F5] pt-20 pb-12 border-t border-[#262422]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Newsletter / Headline Band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#262422] items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C86D51]">
              Architectural Insights
            </span>
            <h3 className="text-2xl md:text-4xl font-serif leading-tight">
              Receive curated spatial studies, material explorations & private project reveals.
            </h3>
          </div>
          <div className="lg:col-span-5">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-[#1E1C1A] border-[#322F2C] text-white placeholder:text-gray-500 focus-visible:border-[#C86D51] h-12"
              />
              <Button type="submit" variant="accent" className="h-12 px-6 shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
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
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-sans">
              International architecture and interior design studio crafting timeless spaces, refined material expressions, and bespoke living environments.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[#262422] hover:border-[#C86D51] hover:text-[#C86D51] transition-colors"
                aria-label="Instagram"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[#262422] hover:border-[#C86D51] hover:text-[#C86D51] transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[#262422] hover:border-[#C86D51] hover:text-[#C86D51] transition-colors"
                aria-label="Twitter"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C86D51] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Studio & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Inquire & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Offices */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C86D51] font-semibold">
              Global Studios
            </h4>
            <div className="space-y-4 text-xs text-gray-400">
              <div>
                <span className="text-white font-medium block">New Delhi Studio</span>
                <span className="block text-gray-500">12 Golf Links, New Delhi</span>
                <span className="block text-gray-500">+91 11 4567 8900</span>
              </div>
              <div>
                <span className="text-white font-medium block">Mumbai Design Hub</span>
                <span className="block text-gray-500">Level 8, Maker Maxity, BKC</span>
                <span className="block text-gray-500">+91 22 6789 0123</span>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C86D51] font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• Spatial Masterplanning</li>
              <li>• Luxury Residential Architecture</li>
              <li>• Biophilic Commercial Workplaces</li>
              <li>• Custom Furniture Engineering</li>
              <li>• Turnkey Project Execution</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 border-t border-[#262422] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} DesignMeInteriors Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">
              Terms of Engagement
            </span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
