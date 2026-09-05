import * as React from "react";
import { Metadata } from "next";
import { BlogSection } from "@/components/blog/BlogSection";

export const metadata: Metadata = {
  title: "Journal & Insights | DesignMeInteriors Studio",
  description: "Explore articles, essays, and architectural reflections from DesignMeInteriors Studio.",
};

export default function BlogListingPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F5F2EC]">
      {/* Hero Banner for Journal */}
      <section className="bg-[#191816] text-[#FCFBF8] py-20 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#9A8060] font-semibold block">
            DesignMeInteriors Studio Journal
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif leading-tight text-[#FCFBF8]">
            Architectural Insights & Essays
          </h1>
          <p className="text-[#D7D0C5] text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            Explorations into material harmony, spatial composition, modern structural innovations, and design practice.
          </p>
        </div>
      </section>

      {/* Main Blog Listing Section */}
      <BlogSection
        title="All Journal Entries"
        subtitle="Browse our complete archive of published articles."
        limit={0} // Show all blogs
        showViewAll={false}
      />
    </main>
  );
}
