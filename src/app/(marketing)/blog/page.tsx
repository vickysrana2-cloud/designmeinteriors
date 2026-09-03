import * as React from "react";
import { Metadata } from "next";
import { BlogSection } from "@/components/blog/BlogSection";

export const metadata: Metadata = {
  title: "Journal & Insights | DesignMeInteriors Studio",
  description: "Explore articles, essays, and architectural reflections from DesignMeInteriors Studio.",
};

export default function BlogListingPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F9F8F5]">
      {/* Hero Banner for Journal */}
      <section className="bg-[#1E1C1A] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C86D51] font-semibold block">
            DesignMeInteriors Studio Journal
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif leading-tight">
            Architectural Insights & Essays
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
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
