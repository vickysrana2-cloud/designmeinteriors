"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, AlertCircle, Search, X, SlidersHorizontal } from "lucide-react";
import { Blog } from "@/types/blog";
import { getBlogs } from "@/lib/api/blog";
import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui/button";

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
  isLandingPage?: boolean;
  enableSearch?: boolean;
}

export function BlogSection({
  title = "Insights & Journal",
  subtitle = "Perspectives on architecture, design philosophy, and spatial experience in Nagpur.",
  limit = 0,
  showViewAll = true,
  isLandingPage = false,
  enableSearch = true,
}: BlogSectionProps) {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  React.useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      try {
        setLoading(true);
        setError(null);
        const data = await getBlogs();
        if (isMounted) {
          setBlogs(data);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to load blog section data:", err);
          setError("Unable to load latest articles at this time.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  // Unique categories list
  const categories = React.useMemo(() => {
    const cats = new Set<string>();
    blogs.forEach((b) => {
      if (b.category) cats.add(b.category);
      if (Array.isArray(b.labels)) {
        b.labels.forEach((lbl) => cats.add(lbl));
      }
    });
    return ["All", ...Array.from(cats)];
  }, [blogs]);

  // Filtered blogs matching search & category
  const filteredBlogs = React.useMemo(() => {
    return blogs.filter((blog) => {
      // Category check
      const matchesCategory =
        selectedCategory === "All" ||
        blog.category === selectedCategory ||
        (Array.isArray(blog.labels) && blog.labels.includes(selectedCategory));

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const titleMatch = (blog.title || "").toLowerCase().includes(q);
      const excerptMatch = (blog.excerpt || "").toLowerCase().includes(q);
      const contentMatch = (blog.content || "").toLowerCase().includes(q);
      const authorMatch = (blog.author || "").toLowerCase().includes(q);
      const categoryMatch = (blog.category || "").toLowerCase().includes(q);

      return matchesCategory && (titleMatch || excerptMatch || contentMatch || authorMatch || categoryMatch);
    });
  }, [blogs, selectedCategory, searchQuery]);

  const displayedBlogs = limit ? filteredBlogs.slice(0, limit) : filteredBlogs;
  const isFiltering = searchQuery.trim().length > 0 || selectedCategory !== "All";

  const shouldShowSearch = enableSearch && !isLandingPage;

  return (
    <section className="py-24 bg-[#F5F2EC] border-t border-[#D7D0C5]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9A8060] font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Journal &amp; Thoughts
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#242321]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base text-[#706B63] font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {showViewAll && blogs.length > 0 && (
            <div className="hidden md:block">
              <Button asChild variant="outline" size="sm" className="border-[#242321] hover:bg-[#FCFBF8]">
                <Link href="/blog" className="flex items-center gap-2">
                  <span>Explore All Articles</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#9A8060]" />
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Search Bar & Category Filter Bar */}
        {shouldShowSearch && !loading && !error && blogs.length > 0 && (

          <div className="mb-12 space-y-6 pt-4 pb-6 border-b border-[#D7D0C5]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Bar Input */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9A8060]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by keyword, topic, or author..."
                  className="w-full bg-[#FCFBF8] border border-[#D7D0C5] rounded-full pl-11 pr-10 py-3 text-xs sm:text-sm text-[#242321] placeholder-[#706B63] focus:outline-none focus:border-[#9A8060] focus:ring-2 focus:ring-[#9A8060]/20 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#706B63] hover:text-[#242321] hover:bg-[#E8E1D7] transition-all"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Filter Count Indicator */}
              <div className="text-xs text-[#706B63] font-sans flex items-center gap-2">
                <SlidersHorizontal className="h-3.5 w-3.5 text-[#9A8060]" />
                <span>
                  Showing <strong className="text-[#242321] font-semibold">{displayedBlogs.length}</strong> of {blogs.length} articles
                </span>
                {isFiltering && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="ml-2 text-xs font-semibold text-[#9A8060] hover:text-[#242321] underline underline-offset-2 transition-colors"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            {categories.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? "bg-[#191816] text-[#FCFBF8] border border-[#191816] shadow-sm"
                          : "bg-[#FCFBF8] text-[#706B63] border border-[#D7D0C5] hover:border-[#9A8060] hover:text-[#242321]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Loading Skeleton State */}
        {loading && (
          <div className={`grid grid-cols-1 ${isLandingPage ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"} gap-6 lg:gap-8`}>
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className={`animate-pulse border border-[#D7D0C5] bg-[#FCFBF8] p-6 space-y-4 rounded-3xl ${isLandingPage && idx > 2 ? "hidden sm:block" : "block"}`}
              >
                <div className="h-52 bg-[#E8E1D7] w-full rounded-xl" />
                <div className="h-4 bg-[#E8E1D7] w-1/3 rounded" />
                <div className="h-6 bg-[#E8E1D7] w-3/4 rounded" />
                <div className="h-12 bg-[#E8E1D7] w-full rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="p-8 border border-red-200 bg-red-50/50 rounded-lg text-center space-y-3 max-w-md mx-auto my-6">
            <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        {/* Empty Result State (No Blogs Published at all) */}
        {!loading && !error && blogs.length === 0 && (
          <div className="p-12 border border-[#D7D0C5] bg-[#FCFBF8] text-center space-y-4 max-w-lg mx-auto rounded-3xl">
            <BookOpen className="h-10 w-10 text-[#706B63] mx-auto" />
            <h3 className="font-serif text-xl text-[#242321]">No Articles Published Yet</h3>
            <p className="text-xs text-[#706B63]">
              Check back soon for new insights and design articles.
            </p>
          </div>
        )}

        {/* Empty Search Filter Result State */}
        {!loading && !error && blogs.length > 0 && displayedBlogs.length === 0 && (
          <div className="p-12 border border-[#D7D0C5] bg-[#FCFBF8] text-center space-y-4 max-w-lg mx-auto rounded-3xl">
            <Search className="h-10 w-10 text-[#9A8060] mx-auto" />
            <h3 className="font-serif text-xl text-[#242321]">No Matching Articles</h3>
            <p className="text-xs text-[#706B63]">
              No results found for &ldquo;<strong className="text-[#242321]">{searchQuery || selectedCategory}</strong>&rdquo;. Try searching with a different keyword or category.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="border-[#242321] mt-2"
            >
              Clear Search &amp; Filters
            </Button>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && !error && displayedBlogs.length > 0 && (
          <div className={`grid grid-cols-1 ${isLandingPage ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"} gap-6 lg:gap-8`}>
            {displayedBlogs.map((blog, idx) => {
              // On landing page: show 2 blogs on mobile (< 640px), 4 blogs on desktop (>= 640px)
              const responsiveWrapperClass = isLandingPage && idx >= 2 ? "hidden sm:block" : "block";
              return (
                <div key={blog.id || idx} className={responsiveWrapperClass}>
                  <BlogCard blog={blog} />
                </div>
              );
            })}
          </div>
        )}

        {/* Mobile View All Button */}
        {showViewAll && !loading && !error && blogs.length > 0 && (
          <div className="mt-12 text-center md:hidden">
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-[#242321]">
              <Link href="/blog" className="flex items-center justify-center gap-2">
                <span>Explore All Articles</span>
                <ArrowUpRight className="h-4 w-4 text-[#9A8060]" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

