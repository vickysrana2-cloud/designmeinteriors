import * as React from "react";
import { Metadata } from "next";
import { BlogSection } from "@/components/blog/BlogSection";
import { generateSiteMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = generateSiteMetadata({
  title: "Blogs & Architectural Insights | DesignMe Interiors Nagpur",
  description:
    "Explore published articles, spatial design insights, material guides, and architectural reflections from DesignMe Interiors in Nagpur.",
  canonicalUrl: "/blog",
});

export default function BlogListingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blogs", item: "/blog" },
  ]);

  return (
    <main className="pt-24 min-h-screen bg-[#F5F2EC]">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner for Journal */}
      <section className="bg-[#191816] text-[#FCFBF8] py-20 px-6 md:px-12 border-b border-[#322F2C]">
        <div className="max-w-[1600px] mx-auto space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#9A8060]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#9A8060] font-semibold">
              DESIGNME INTERIORS JOURNAL
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif leading-tight text-[#FCFBF8]">
            Blogs & Architectural Insights
          </h1>

          <p className="text-[#D7D0C5] text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            Explorations into material harmony, spatial planning, local Nagpur craftsmanship, and modern structural interior innovations.
          </p>
        </div>
      </section>

      {/* Main Blog Listing Section (Shows ONLY Published Blogs) */}
      <BlogSection
        title="All Published Articles"
        subtitle="Browse our complete collection of published design articles and spatial journals."
        limit={0} // Show all published blogs
        showViewAll={false}
        isLandingPage={false}
      />
    </main>
  );
}
