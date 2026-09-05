"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Shield, Home, Menu, X, User } from "lucide-react";
import Link from "next/link";
import { EnquiriesTab } from "@/components/admin/EnquiriesTab";
import { BlogsTab } from "@/components/admin/BlogsTab";
import { ReviewsTab } from "@/components/admin/ReviewsTab";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"enquiries" | "blogs" | "reviews">(
    "enquiries"
  );
  const [loggingOut, setLoggingOut] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout Error:", err);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#141312] text-[#FCFBF8] flex flex-col font-sans">
      {/* Top Header Navigation */}
      <header className="border-b border-[#2D2A26] bg-[#191816] sticky top-0 z-40">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Top Mobile Bar */}
          <div className="flex items-center justify-between">
            {/* Brand Title */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#201D1A] border border-[#3A332C] text-[#CAA05C]">
                <Shield className="h-5 w-5 text-[#C69E66]" />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9A8060] block">
                  DESIGNMEINTERIORS STUDIO
                </span>
                <h1 className="font-serif text-lg font-bold text-white leading-tight">
                  Website Owner Portal
                </h1>
              </div>
            </div>

            {/* Mobile Actions Right */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-[#2D2A26] bg-[#201D1A] text-[#FCFBF8]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2A2724] border border-[#3A332C] text-[#CAA05C]">
                <User className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Navigation Tabs (Desktop Always, Mobile Collapsible / Inline) */}
          <div
            className={`flex-col md:flex-row items-center gap-4 ${
              mobileMenuOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <div className="w-full md:w-auto grid grid-cols-3 gap-1 rounded-2xl border border-[#2D2A26] bg-[#141312] p-1.5 text-center">
              <button
                onClick={() => {
                  setActiveTab("enquiries");
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  activeTab === "enquiries"
                    ? "bg-[#9A7248] text-white font-bold shadow-md"
                    : "text-[#9E978E] hover:text-white"
                }`}
              >
                ENQUIRIES
              </button>

              <button
                onClick={() => {
                  setActiveTab("blogs");
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  activeTab === "blogs"
                    ? "bg-[#9A7248] text-white font-bold shadow-md"
                    : "text-[#9E978E] hover:text-white"
                }`}
              >
                BLOGS
              </button>

              <button
                onClick={() => {
                  setActiveTab("reviews");
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  activeTab === "reviews"
                    ? "bg-[#9A7248] text-white font-bold shadow-md"
                    : "text-[#9E978E] hover:text-white"
                }`}
              >
                REVIEWS
              </button>
            </div>

            {/* User Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-[#2D2A26]">
              <Link
                href="/"
                target="_blank"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-[#2D2A26] bg-[#141312] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#D5CDBF] hover:border-[#9A7248] transition-colors"
              >
                <Home className="h-3.5 w-3.5 text-[#9A7248]" />
                <span>VIEW SITE</span>
              </Link>

              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-[#5E2626] bg-[#3B1717]/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#EE7A7A] hover:bg-[#5E2626]/40 transition-colors disabled:opacity-50"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>LOGOUT</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Tab Content */}
      <main className="flex-1 mx-auto max-w-[1600px] w-full px-4 sm:px-6 md:px-12 py-8">
        {activeTab === "enquiries" && <EnquiriesTab />}
        {activeTab === "blogs" && <BlogsTab />}
        {activeTab === "reviews" && <ReviewsTab />}
      </main>
    </div>
  );
}
