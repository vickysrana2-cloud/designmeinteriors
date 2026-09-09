"use client";

import React, { useEffect, useState } from "react";
import { BlogImage } from "@/components/blog/BlogImage";
import {
  RefreshCw,
  Loader2,
  FileText,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Blog } from "@/types/blog";
import { getAllBlogsForAdmin } from "@/lib/api/blog";

export function BlogsTab() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllBlogsForAdmin();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to load blogs from Blogger API:", err);
      setError("Unable to load blogs from Blogger API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    getAllBlogsForAdmin()
      .then((data) => {
        if (active) {
          setBlogs(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Failed to load blogs from Blogger API:", err);
        if (active) {
          setError("Unable to load blogs from Blogger API.");
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="space-y-8 text-[#FCFBF8]">
      {/* Informative Blogger Integration Notice */}
      <div className="p-6 rounded-3xl border border-[#9A7248]/40 bg-[#1F1C18] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2 text-[#CAA05C] font-semibold text-xs uppercase tracking-wider">
            <CheckCircle2 className="h-4 w-4" />
            Blogger API v3 Integration Active
          </div>
          <h3 className="font-serif text-lg text-white font-medium">
            Managed via Blogger.com CMS
          </h3>
          <p className="text-xs text-[#9E978E] leading-relaxed">
            All articles, images, and categories are automatically synchronized from your official Blogger account. To write, publish, or edit blog posts, access your Blogger dashboard.
          </p>
        </div>

        <a
          href="https://www.blogger.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#9A7248] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-[#80684D] transition-colors shrink-0"
        >
          <span>Open Blogger.com</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Header Bar & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2D2A26] pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="h-px w-8 bg-[#9A7248]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9A7248]">
              PUBLISHED ARTICLES
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">
            Blogger Posts ({blogs.length})
          </h2>
          <p className="text-xs text-[#9E978E]">
            Live synchronized feed from Blogger API v3.
          </p>
        </div>

        <button
          onClick={fetchBlogs}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-2xl border border-[#2D2A26] bg-[#191816] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FCFBF8] hover:border-[#9A7248] transition-colors"
        >
          <RefreshCw className={`h-3.5 w-3.5 text-[#9A7248] ${loading ? "animate-spin" : ""}`} />
          <span>Refresh Feed</span>
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-20 text-center space-y-3">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#9A7248]" />
          <p className="text-xs text-[#9E978E]">Fetching articles from Blogger API...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-6 rounded-2xl border border-red-500/30 bg-red-950/30 text-center text-red-300 text-xs">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && blogs.length === 0 && (
        <div className="p-16 text-center border border-[#2D2A26] bg-[#191816] rounded-2xl space-y-4">
          <FileText className="mx-auto h-10 w-10 text-[#7A746C]" />
          <h3 className="font-serif text-lg text-white">No Blogger Posts Found</h3>
          <p className="text-xs text-[#9E978E]">
            Publish your first blog article on Blogger.com to see it here.
          </p>
        </div>
      )}

      {/* Blogs Grid (Read Only View) */}
      {!loading && !error && blogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl border border-[#2D2A26] bg-[#191816] overflow-hidden flex flex-col justify-between space-y-4 shadow-xl transition-all hover:border-[#9A7248]/60"
            >
              <div className="space-y-3">
                {/* Cover Image */}
                <div className="relative h-48 w-full bg-[#141312] overflow-hidden">
                  <BlogImage
                    src={b.coverImage}
                    alt={b.title}
                    fill
                    category={b.category}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 rounded-full bg-[#141312]/90 backdrop-blur-sm border border-[#9A7248]/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#9A7248]">
                    {b.category || "Architecture"}
                  </span>

                  <span className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm bg-[#132A1C]/90 border-[#1E4D30] text-[#4ADE80]">
                    Blogger Post
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-base font-semibold text-white line-clamp-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#9E978E] line-clamp-3 leading-relaxed">
                    {b.excerpt}
                  </p>
                </div>
              </div>

              {/* External Blogger Link Footer */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#2D2A26] mt-auto">
                <span className="text-[10px] text-[#706B63] uppercase tracking-wider">
                  Author: {b.author}
                </span>

                {b.bloggerUrl && (
                  <a
                    href={b.bloggerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#9A7248] hover:text-white transition-colors"
                  >
                    <span>View on Blogger</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
