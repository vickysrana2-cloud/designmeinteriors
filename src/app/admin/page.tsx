"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Shield, Home } from "lucide-react";
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
    <div className="min-h-screen bg-[#191816] text-[#FCFBF8] flex flex-col">
      {/* Top Header Navigation */}
      <header className="border-b border-[#322F2C] bg-[#242321] sticky top-0 z-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Brand Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9A8060]/20 border border-[#9A8060]/40 text-[#CAA05C]">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9A8060]">
                DesignMeInteriors Studio
              </span>
              <h1 className="font-serif text-lg font-semibold text-[#FCFBF8]">
                Website Owner Portal
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="w-full md:w-auto grid grid-cols-3 gap-1.5 rounded-2xl border border-[#322F2C] bg-[#191816] p-1.5 text-center">
            <button
              onClick={() => setActiveTab("enquiries")}
              className={`w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                activeTab === "enquiries"
                  ? "bg-[#9A8060] text-white shadow-md font-bold"
                  : "text-[#706B63] hover:text-white"
              }`}
            >
              Enquiries
            </button>

            <button
              onClick={() => setActiveTab("blogs")}
              className={`w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                activeTab === "blogs"
                  ? "bg-[#9A8060] text-white shadow-md font-bold"
                  : "text-[#706B63] hover:text-white"
              }`}
            >
              Blogs
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
                activeTab === "reviews"
                  ? "bg-[#9A8060] text-white shadow-md font-bold"
                  : "text-[#706B63] hover:text-white"
              }`}
            >
              Reviews
            </button>
          </div>

          {/* User Controls */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-[#322F2C] bg-[#191816] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#D7D0C5] hover:border-[#9A8060] transition-colors"
            >
              <Home className="h-3.5 w-3.5" />
              <span>View Site</span>
            </Link>

            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-950/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-300 hover:bg-red-900/40 transition-colors disabled:opacity-50"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Tab Content */}
      <main className="flex-1 mx-auto max-w-[1600px] w-full px-6 md:px-12 py-10">
        {activeTab === "enquiries" && <EnquiriesTab />}
        {activeTab === "blogs" && <BlogsTab />}
        {activeTab === "reviews" && <ReviewsTab />}
      </main>
    </div>
  );
}
