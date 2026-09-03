import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { Blog } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { BlogImage } from "./BlogImage";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  const {
    title = "Untitled Article",
    slug = "",
    excerpt = "No summary available for this article.",
    coverImage,
    author = "Editorial Team",
    category = "General",
    createdAt,
  } = blog;

  // Format creation date safely
  const formattedDate = React.useMemo(() => {
    if (!createdAt) return "Recently Published";
    try {
      return new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Recently Published";
    }
  }, [createdAt]);

  return (
    <article
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        border
        border-[#E5DFD5]
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Cover Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-[#F2EFE9]">
        <BlogImage
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />
        
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        {/* Category Badge */}
        <div className="absolute left-4 top-4 z-10">
          <Badge variant="secondary" className="bg-white/90 text-[#1E1C1A] backdrop-blur-md font-sans text-[11px] uppercase tracking-wider">
            {category}
          </Badge>
        </div>
      </div>

      {/* Article Content */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div className="space-y-3">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#C86D51]" />
              {author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#C86D51]" />
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1E1C1A] line-clamp-2 transition-colors duration-300 group-hover:text-[#C86D51]">
            <Link href={`/blog/${slug}`}>
              <span className="absolute inset-0 z-10" />
              {title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm font-light leading-relaxed text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="mt-6 flex items-center gap-2 pt-4 border-t border-[#F2EFE9] text-xs font-semibold uppercase tracking-widest text-[#C86D51] transition-colors duration-300 group-hover:text-[#1E1C1A]">
          <span>Read Article</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}
