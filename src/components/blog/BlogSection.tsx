"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, AlertCircle } from "lucide-react";
import { Blog } from "@/types/blog";
import { getBlogs } from "@/lib/api/blog";
import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui/button";

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

export function BlogSection({
  title = "Insights & Journal",
  subtitle = "Perspectives on architecture, design philosophy, and spatial experience.",
  limit = 3,
  showViewAll = true,
}: BlogSectionProps) {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

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

  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <section className="py-24 bg-[#F5F2EC] border-t border-[#D7D0C5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9A8060] font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Journal & Thoughts
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

        {/* Loading Skeleton State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="animate-pulse border border-[#D7D0C5] bg-[#FCFBF8] p-6 space-y-4"
              >
                <div className="h-52 bg-[#E8E1D7] w-full" />
                <div className="h-4 bg-[#E8E1D7] w-1/3" />
                <div className="h-6 bg-[#E8E1D7] w-3/4" />
                <div className="h-12 bg-[#E8E1D7] w-full" />
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

        {/* Empty Result State */}
        {!loading && !error && blogs.length === 0 && (
          <div className="p-12 border border-[#D7D0C5] bg-[#FCFBF8] text-center space-y-4 max-w-lg mx-auto">
            <BookOpen className="h-10 w-10 text-[#706B63] mx-auto" />
            <h3 className="font-serif text-xl text-[#242321]">No Articles Published Yet</h3>
            <p className="text-xs text-[#706B63]">
              Check back soon for new insights and design articles.
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && !error && displayedBlogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
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
