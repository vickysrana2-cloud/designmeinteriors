import * as React from "react";
import { isTrustedIframeUrl } from "@/lib/blogger/sanitizer";

interface BloggerVideoProps {
  src?: string;
  contentid?: string;
  width?: string | number;
  height?: string | number;
  title?: string;
  bloggerPostUrl?: string;
  className?: string;
}

export function BloggerVideo({
  src,
  contentid,
  width,
  height,
  title = "Blogger Video Player",
  bloggerPostUrl,
  className = "",
}: BloggerVideoProps) {
  // Validate that player URL is trusted and points to official Blogger video.g player endpoint
  const isValidSrc = src && isTrustedIframeUrl(src) && src.includes("video.g");

  // Calculate original aspect ratio if numeric dimensions are provided
  const numW = width ? parseFloat(String(width)) : 0;
  const numH = height ? parseFloat(String(height)) : 0;
  const hasCustomAspect = numW > 0 && numH > 0;
  const aspectRatioStyle = hasCustomAspect
    ? { aspectRatio: `${numW} / ${numH}` }
    : undefined;

  if (isValidSrc) {
    return (
      <div
        className={`relative w-full max-w-full rounded-2xl overflow-hidden my-8 border border-[#D7D0C5] bg-[#191816] shadow-md ${
          !hasCustomAspect ? "aspect-video" : ""
        } ${className}`}
        style={aspectRatioStyle}
      >
        <iframe
          src={src}
          title={title}
          className="w-full h-full border-0 min-h-[220px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  // Safe fallback UI if video URL could not be resolved
  return (
    <div
      className={`my-8 p-6 rounded-2xl border border-[#D7D0C5] bg-[#E8E1D7]/30 text-center ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-[#242321]">
          Blogger Native Video
        </span>
        <p className="text-xs text-[#706B63]">
          This video is hosted on Blogger. View the article directly on Blogger to play this video.
        </p>
        {bloggerPostUrl && (
          <a
            href={bloggerPostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#9A8060] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#9A8060] hover:bg-[#9A8060] hover:text-[#FCFBF8] transition-colors"
          >
            Watch Video on Blogger ↗
          </a>
        )}
      </div>
    </div>
  );
}
