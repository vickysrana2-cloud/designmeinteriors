import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { getBlogBySlug } from "@/lib/api/blog";
import { Badge } from "@/components/ui/badge";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogImage } from "@/components/blog/BlogImage";
import { DEFAULT_FALLBACK_IMAGE } from "@/lib/constants/images";
import { JsonLd } from "@/components/seo/JsonLd";

import { buildArticleSchema } from "@/lib/seo/structured-data";
import { generateSiteMetadata } from "@/lib/seo/metadata";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return generateSiteMetadata({
      title: "Article Not Found | DesignMeInteriors Studio",
      description: "The requested blog article could not be found.",
    });
  }

  const validCoverImage =
    typeof blog.coverImage === "string" &&
    (/^https?:\/\//.test(blog.coverImage) || blog.coverImage.startsWith("/"))
      ? blog.coverImage
      : DEFAULT_FALLBACK_IMAGE;


  return generateSiteMetadata({
    title: `${blog.title} | DesignMeInteriors Studio Journal`,
    description: blog.excerpt || blog.title,
    image: validCoverImage,
    canonicalUrl: `/blog/${blog.slug}`,
    type: "article",
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }

  const blog = await getBlogBySlug(slug);

  if (!blog || blog.published === false) {
    notFound();
  }

  const {
    title = "Untitled Article",
    excerpt,
    content = "",
    coverImage,
    author = "DesignMeInteriors Editorial",
    category = "Architecture & Design",
    createdAt,
  } = blog;

  // Format creation date safely
  let formattedDate = "Published Recently";
  if (createdAt) {
    try {
      formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      formattedDate = "Published Recently";
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F2EC] pt-32 pb-24">
      <JsonLd data={buildArticleSchema(blog)} />
      {/* Header Container */}
      <article className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A8060] font-semibold hover:text-[#242321] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Journal
          </Link>
        </div>

        {/* Article Meta Header */}
        <header className="space-y-6 pb-10 border-b border-[#D7D0C5]">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent" className="capitalize text-xs px-3 py-1">
              {category}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#242321] leading-tight">
            {title}
          </h1>

          {excerpt && (
            <p className="text-lg sm:text-xl text-[#706B63] font-light leading-relaxed max-w-3xl">
              {excerpt}
            </p>
          )}

          {/* Author & Date Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs text-[#706B63] font-sans border-t border-[#D7D0C5]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#9A8060]/10 text-[#9A8060] flex items-center justify-center font-bold font-serif text-sm">
                  {author.charAt(0)}
                </div>
                <div>
                  <span className="block font-medium text-[#242321]">{author}</span>
                  <span className="text-[10px] text-[#706B63] uppercase tracking-wider">Author</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#9A8060]" />
                <div>
                  <span className="block font-medium text-[#242321]">{formattedDate}</span>
                  <span className="text-[10px] text-[#706B63] uppercase tracking-wider">Date</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="my-10 relative h-[360px] sm:h-[480px] md:h-[540px] w-full overflow-hidden rounded-3xl border border-[#D7D0C5] bg-[#E8E1D7] shadow-md">
          <BlogImage
            src={coverImage}
            alt={title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content (Rendered Blogger HTML) */}
        <div className="pt-4">
          <BlogContent content={content} />
        </div>

        {/* Footer Actions / Navigation */}
        <div className="mt-16 pt-10 border-t border-[#D7D0C5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#242321] px-7 py-3 text-xs font-medium uppercase tracking-wider text-[#242321] hover:bg-[#242321] hover:text-[#FCFBF8] transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Explore All Articles</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full wood-button text-[#FCFBF8] px-7 py-3 text-xs font-medium uppercase tracking-wider transition-all"
          >
            Inquire Architecture Services
          </Link>
        </div>
      </article>
    </main>
  );
}
